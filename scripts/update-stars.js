const fs = require("fs");
const path = require("path");

const README = path.join(process.cwd(), "README.md");
const TOKEN = process.env.GITHUB_TOKEN || "";
const STALE_DAYS = 365;
const URL_TIMEOUT = 15000; // 15s timeout for HTTP checks

const ghHeaders = {
  Accept: "application/vnd.github.v3+json",
  "User-Agent": "awesome-ai-bot",
};
if (TOKEN) ghHeaders.Authorization = "token " + TOKEN;

// ---------- GitHub repo check ----------

async function getRepoData(owner, repo) {
  try {
    const res = await fetch(
      `https://api.github.com/repos/${owner}/${repo}`,
      { headers: ghHeaders }
    );
    if (!res.ok) return { error: res.status };
    const d = await res.json();
    return {
      stars: d.stargazers_count,
      forks: d.forks_count,
      pushed_at: d.pushed_at,
      archived: d.archived,
    };
  } catch (e) {
    return { error: e.message };
  }
}

// ---------- HTTP URL health check ----------

async function checkUrl(url) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), URL_TIMEOUT);
  try {
    const res = await fetch(url, {
      method: "HEAD",
      signal: controller.signal,
      headers: { "User-Agent": "awesome-ai-bot/1.0 (link checker)" },
      redirect: "follow",
    });
    clearTimeout(timeout);
    return { status: res.status, ok: res.ok, redirected: res.redirected };
  } catch (e) {
    clearTimeout(timeout);
    // Retry with GET if HEAD is rejected (some servers block HEAD)
    const controller2 = new AbortController();
    const timeout2 = setTimeout(() => controller2.abort(), URL_TIMEOUT);
    try {
      const res = await fetch(url, {
        method: "GET",
        signal: controller2.signal,
        headers: { "User-Agent": "awesome-ai-bot/1.0 (link checker)" },
        redirect: "follow",
      });
      clearTimeout(timeout2);
      return { status: res.status, ok: res.ok, redirected: res.redirected };
    } catch (e2) {
      clearTimeout(timeout2);
      return { status: 0, ok: false, error: e2.message || "timeout" };
    }
  }
}

// ---------- Main ----------

async function main() {
  const readme = fs.readFileSync(README, "utf-8");

  // --- 1. Parse all links from list entries ---
  const githubRepos = [];
  const commercialUrls = [];
  const seenGh = new Set();
  const seenUrl = new Set();

  const ghRe =
    /- \[([^\]]+)\]\((https:\/\/github\.com\/([^/)]+)\/([^/)]+))\)/g;
  let m;
  while ((m = ghRe.exec(readme)) !== null) {
    const k = m[3] + "/" + m[4];
    if (!seenGh.has(k)) {
      seenGh.add(k);
      githubRepos.push({ name: m[1], url: m[2], owner: m[3], repo: m[4] });
    }
  }

  // Non-GitHub URLs in list entries
  const urlRe = /- \[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/g;
  while ((m = urlRe.exec(readme)) !== null) {
    const url = m[2];
    if (url.includes("github.com")) continue; // already handled
    if (url.includes("img.shields.io")) continue; // badge, not a tool
    if (url.includes("licensebuttons.net")) continue; // license badge
    if (url.includes("awesome.re")) continue; // awesome badge
    if (!seenUrl.has(url)) {
      seenUrl.add(url);
      commercialUrls.push({ name: m[1], url });
    }
  }

  console.log(`Found ${githubRepos.length} GitHub repos`);
  console.log(`Found ${commercialUrls.length} commercial URLs`);

  // --- 2. Check GitHub repos ---
  const stale = [];
  const deadGithub = [];
  const archived = [];

  for (let i = 0; i < githubRepos.length; i += 10) {
    const batch = githubRepos.slice(i, i + 10);
    const results = await Promise.all(
      batch.map(async (r) => ({
        ...r,
        data: await getRepoData(r.owner, r.repo),
      }))
    );

    for (const r of results) {
      if (r.data.error) {
        deadGithub.push({
          repo: r.owner + "/" + r.repo,
          error: r.data.error,
        });
        console.log(`  Dead repo: ${r.owner}/${r.repo} (${r.data.error})`);
        continue;
      }

      if (r.data.archived) {
        archived.push({ repo: r.owner + "/" + r.repo });
        console.log(`  Archived: ${r.owner}/${r.repo}`);
      }

      if (r.data.pushed_at) {
        const days =
          (Date.now() - new Date(r.data.pushed_at).getTime()) / 86400000;
        if (days > STALE_DAYS) {
          stale.push({
            repo: r.owner + "/" + r.repo,
            lastPush: r.data.pushed_at.split("T")[0],
            days: Math.round(days),
          });
        }
      }
    }

    if (i + 10 < githubRepos.length)
      await new Promise((r) => setTimeout(r, 500));
  }

  // --- 3. Check commercial URLs ---
  const deadUrls = [];
  const redirectedUrls = [];

  console.log("\nChecking commercial URLs...");
  for (let i = 0; i < commercialUrls.length; i += 5) {
    const batch = commercialUrls.slice(i, i + 5);
    const results = await Promise.all(
      batch.map(async (entry) => ({
        ...entry,
        result: await checkUrl(entry.url),
      }))
    );

    for (const r of results) {
      if (!r.result.ok) {
        deadUrls.push({
          name: r.name,
          url: r.url,
          status: r.result.status,
          error: r.result.error || `HTTP ${r.result.status}`,
        });
        console.log(`  Dead URL: ${r.name} (${r.url}) — ${r.result.error || r.result.status}`);
      } else if (r.result.redirected) {
        redirectedUrls.push({ name: r.name, url: r.url });
      }
    }

    if (i + 5 < commercialUrls.length)
      await new Promise((r) => setTimeout(r, 300));
  }

  // --- 4. Report ---
  const report = {
    timestamp: new Date().toISOString(),
    totalGithubRepos: githubRepos.length,
    totalCommercialUrls: commercialUrls.length,
    staleRepos: stale,
    archivedRepos: archived,
    deadGithubRepos: deadGithub,
    deadUrls: deadUrls,
    redirectedUrls: redirectedUrls,
  };

  console.log("\n--- Summary ---");
  console.log(`GitHub repos: ${githubRepos.length}`);
  console.log(`Commercial URLs: ${commercialUrls.length}`);
  console.log(`Stale repos (${STALE_DAYS}+ days): ${stale.length}`);
  console.log(`Archived repos: ${archived.length}`);
  console.log(`Dead GitHub repos: ${deadGithub.length}`);
  console.log(`Dead commercial URLs: ${deadUrls.length}`);
  console.log(`Redirected URLs: ${redirectedUrls.length}`);

  if (stale.length)
    stale.forEach((r) =>
      console.log(`  Stale: ${r.repo} — last push ${r.lastPush} (${r.days}d)`)
    );
  if (archived.length)
    archived.forEach((r) => console.log(`  Archived: ${r.repo}`));
  if (deadGithub.length)
    deadGithub.forEach((r) =>
      console.log(`  Dead repo: ${r.repo} (${r.error})`)
    );
  if (deadUrls.length)
    deadUrls.forEach((r) =>
      console.log(`  Dead URL: ${r.name} — ${r.url} (${r.error})`)
    );

  fs.writeFileSync("report.json", JSON.stringify(report, null, 2));

  // Set GitHub Actions output
  if (process.env.GITHUB_OUTPUT) {
    const out = [
      `stale=${stale.length}`,
      `archived=${archived.length}`,
      `dead_repos=${deadGithub.length}`,
      `dead_urls=${deadUrls.length}`,
      `redirected=${redirectedUrls.length}`,
    ].join("\n");
    fs.appendFileSync(process.env.GITHUB_OUTPUT, out + "\n");
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
