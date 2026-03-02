# Awesome AI [![Awesome](https://awesome.re/badge.svg)](https://awesome.re)

[![Stars](https://img.shields.io/github/actions/workflow/status/edwardtay/awesome-ai/update-stars.yml?label=star%20updates)](https://github.com/edwardtay/awesome-ai/actions/workflows/update-stars.yml)
[![Links](https://img.shields.io/github/actions/workflow/status/edwardtay/awesome-ai/links.yml?label=links)](https://github.com/edwardtay/awesome-ai/actions/workflows/links.yml)
[![Last Commit](https://img.shields.io/github/last-commit/edwardtay/awesome-ai)](https://github.com/edwardtay/awesome-ai/commits/main)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/edwardtay/awesome-ai/pulls)
[![License: CC0](https://img.shields.io/badge/License-CC0-lightgrey.svg)](LICENSE)

> A curated list of AI APIs, tools, and platforms. 400+ tools across 40+ categories.

> ⚠️ = aging (6-12 months since last commit) — may still work but watch for staleness.

## How to Choose

| I need to... | Start here |
|---|---|
| Call an LLM API | [LLM API Providers](#-llm-api-providers) |
| Run open-source models | [Open Source LLM Models](#-open-source-llm-models) |
| Build AI agents | [AI Agent Frameworks](#-ai-agent-frameworks) |
| Generate images | [AI Image Generation APIs](#-ai-image-generation-apis) |
| Generate video | [AI Video Generation APIs](#-ai-video-generation-apis) |
| Add voice/speech | [AI Audio & Speech APIs](#-ai-audio--speech-apis) |
| Search the web with AI | [AI Search APIs](#-ai-search-apis) |
| Store embeddings | [Vector Databases & Embeddings](#-vector-databases--embeddings) |
| Build RAG pipelines | [RAG Tools & Frameworks](#-rag-tools--frameworks) |
| Write code with AI | [AI Code Assistants](#-ai-code-assistants) |
| Evaluate LLM outputs | [LLM Evaluation & Monitoring](#-llm-evaluation--monitoring) |
| Deploy models to production | [MLOps & Deployment](#-mlops--deployment) |
| Connect LLMs to tools | [MCP (Model Context Protocol)](#-mcp-model-context-protocol) |
| Rent GPUs | [Cloud GPU Providers](#-cloud-gpu-providers) |

---

## 🧠 LLM API Providers

| Tool | Description |
|------|-------------|
| [OpenAI API](https://platform.openai.com/) | GPT-4o and o-series reasoning models with tool use, vision, and multimodal capabilities. |
| [Anthropic Claude API](https://www.anthropic.com/api) | Claude model family with 200K context windows, vision, and agentic capabilities; safety-focused. |
| [Google Gemini API](https://ai.google.dev/) | Gemini models with 1M+ token context, search integration, and Google Cloud ecosystem. |
| [Mistral AI API](https://mistral.ai/) | European AI lab with open-weight and commercial models under Apache 2.0 licensing at competitive prices. |
| [DeepSeek API](https://platform.deepseek.com/) | DeepSeek V3 and R1 reasoning models at a fraction of competitor pricing with 128K context. |
| [Cohere API](https://cohere.com/) | Command R+ models optimized for RAG, multilingual support, and enterprise deployment. |
| [AI21 Labs API](https://www.ai21.com/) | Jamba models and Maestro orchestration system for enterprise NLP with strong multilingual capabilities. |
| [xAI Grok API](https://x.ai/) | Grok models with competitive pricing, image generation, and video generation. |
| [Inflection AI](https://inflection.ai/) | Creators of Pi, focused on empathetic and helpful interactions via enterprise API. |
| [Reka AI](https://www.reka.ai/) | Multimodal models spanning text, images, and video understanding. |

<p align="right">(<a href="#readme">⬆ back to top</a>)</p>

## 🔓 Open Source LLM Models

| Tool | Stars | Description |
|------|-------|-------------|
| [Llama 4 (Meta)](https://ai.meta.com/llama/) | - | Scout (17B active/109B experts) and Maverick variants, 128K context, strong general performance. |
| [Qwen 3 (Alibaba)](https://qwenlm.github.io/) | - | MoE family (up to 235B parameters) excelling in multilingual and reasoning tasks with open weights. |
| [DeepSeek V3](https://github.com/deepseek-ai/DeepSeek-V3) | 20k+ | 671B MoE model (MIT license) matching frontier models at a fraction of the cost. |
| [DeepSeek R1](https://github.com/deepseek-ai/DeepSeek-R1) | 38k+ | Reasoning model trained via large-scale RL achieving o1-level performance (MIT license). |
| [Mistral Large / Mixtral](https://mistral.ai/) | - | Mixtral MoE and Small 3 (24B) punching above their weight in efficiency. |
| [Gemma 3 (Google)](https://ai.google.dev/gemma) | - | Available in multiple sizes with strong performance for its parameter count. |
| [Phi-4 (Microsoft)](https://azure.microsoft.com/en-us/products/phi/) | - | Small language model built on synthetic datasets achieving state-of-the-art performance for its size. |
| [Command R+ (Cohere)](https://cohere.com/) | - | Optimized for RAG and enterprise use with strong multilingual capabilities. |
| [Yi (01.AI)](https://www.01.ai/) | - | Bilingual (Chinese-English) models with strong performance in independent benchmarks. |
| [StarCoder2](https://github.com/bigcode-project/starcoder2) | 3k+ | Code LLM in 3B/7B/15B sizes where the 15B matches 33B+ models on code evaluations. |
| [OLMo (Allen AI)](https://allenai.org/olmo) | - | Training data, code, and weights all publicly available for reproducible research. |
| [DBRX (Databricks)](https://www.databricks.com/blog/introducing-dbrx-new-state-art-open-llm) | - | MoE model with 132B total / 36B active parameters for enterprise use cases. |

<p align="right">(<a href="#readme">⬆ back to top</a>)</p>

## 🤔 AI Reasoning Models

| Tool | Description |
|------|-------------|
| [OpenAI o3 / o4-mini](https://platform.openai.com/) | Chain-of-thought reasoning with inference-time compute scaling for complex problems. |
| [DeepSeek R1](https://platform.deepseek.com/) | Achieves o1-level performance at 5-10x lower cost ($0.55/$2.19 per 1M tokens). |
| [Anthropic Claude (Extended Thinking)](https://docs.anthropic.com/en/docs/build-with-claude/extended-thinking) | Hybrid mode producing instant or deep-thinking responses without switching models. |
| [Google Gemini 2.5 Pro (Thinking)](https://ai.google.dev/) | Built-in thinking capabilities for multi-step problem solving. |
| [QwQ (Qwen with Questions)](https://qwenlm.github.io/) | Strong math and coding chain-of-thought capabilities in the Qwen family. |

<p align="right">(<a href="#readme">⬆ back to top</a>)</p>

## 🚀 Open-Source Model Hosting & Inference

| Tool | Description |
|------|-------------|
| [Together AI](https://www.together.ai/) | 200+ models with sub-100ms latency, fine-tuning, and horizontal scaling. |
| [Fireworks AI](https://fireworks.ai/) | Low-latency inference for open-weight models including DeepSeek, Llama, and Qwen. |
| [Groq](https://groq.com/) | Purpose-built LPU hardware delivering ultra-fast inference with extremely low latency. |
| [Cerebras](https://cerebras.ai/) | Wafer-scale chip architecture eliminating GPU communication bottlenecks for fast inference. |
| [SambaNova](https://sambanova.ai/) | Enterprise inference with OpenAI-compatible API and ultra-low latency. |
| [Replicate](https://replicate.com/) | Run and deploy models via API with simple scaling across image, video, audio, and text. |
| [Modal](https://modal.com/) | Serverless cloud for AI models with pay-per-use pricing and infrastructure control. |
| [Baseten](https://www.baseten.co/) | Deploy and serve ML models with infrastructure control and optimized performance. |
| [DeepInfra](https://deepinfra.com/) | Cost-effective inference API with managed servers, GPUs, and auto-scaling. |
| [Lepton AI](https://www.lepton.ai/) | Pythonic framework for building and deploying AI services with cloud-native inference. |
| [fal.ai](https://fal.ai/) | 600+ models with competitive pricing, optimized for generative media. |
| [Novita AI](https://novita.ai/) | Affordable access to models for text, image, and audio generation. |

<p align="right">(<a href="#readme">⬆ back to top</a>)</p>

## 🔀 LLM API Routers & Gateways

| Tool | Stars | Description |
|------|-------|-------------|
| [OpenRouter](https://openrouter.ai/) | - | Unified API for 100+ LLMs from multiple providers with transparent pricing comparison. |
| [LiteLLM](https://github.com/BerriAI/litellm) | 18k+ | Proxy/gateway providing a unified API to 100+ LLMs with load balancing, fallbacks, and spend tracking. |
| [Martian](https://withmartian.com/) | - | AI-powered router that automatically selects the best model for each request using Model Mapping. |
| [Portkey](https://portkey.ai/) | - | Enterprise gateway with load balancing, caching, fallbacks, and observability. |
| [Helicone](https://www.helicone.ai/) | - | Rust-based gateway with load balancing, native observability, and cost tracking. |

<p align="right">(<a href="#readme">⬆ back to top</a>)</p>

## ☁️ Cloud AI Platforms (Managed)

| Tool | Description |
|------|-------------|
| [AWS Bedrock](https://aws.amazon.com/bedrock/) | Multi-vendor model marketplace with AgentCore, supporting Anthropic, Meta, Cohere, and Amazon models. |
| [Azure AI Foundry](https://azure.microsoft.com/en-us/products/ai-foundry) | 11,000+ models with GPT-4/5 access and deep Azure integration. |
| [Google Vertex AI](https://cloud.google.com/vertex-ai) | Gemini family, Model Garden for 3rd-party/OSS models, and data-driven MLOps. |
| [AWS SageMaker](https://aws.amazon.com/sagemaker/) | End-to-end ML platform for building, training, and deploying models with managed infrastructure. |
| [Azure Machine Learning](https://azure.microsoft.com/en-us/products/machine-learning) | Automated ML, responsible AI dashboard, and managed endpoints. |
| [Databricks](https://www.databricks.com/) | Unified analytics and AI with managed MLflow, Unity Catalog, and Mosaic AI. |
| [IBM watsonx](https://www.ibm.com/watsonx) | Foundation models, model training, and AI governance for business workflows. |

<p align="right">(<a href="#readme">⬆ back to top</a>)</p>

## 🤖 AI Agent Frameworks

| Tool | Stars | Description |
|------|-------|-------------|
| [LangChain](https://www.langchain.com/) | - | LLM application framework with extensive integrations for chains, agents, and retrieval. |
| [LangGraph](https://www.langchain.com/langgraph) | - | Cyclical graphs for agent runtimes with state management and human-in-the-loop. Extends LangChain. |
| [LlamaIndex](https://www.llamaindex.ai/) | - | RAG-first framework with 100+ data connectors and purpose-built retrieval infrastructure. |
| [CrewAI](https://www.crewai.com/) | - | Role-based multi-agent systems with structured task delegation. |
| [Microsoft AutoGen](https://microsoft.github.io/autogen/) | - | Multi-agent conversation framework merging with Semantic Kernel into unified Microsoft Agent Framework. |
| [Microsoft Semantic Kernel](https://learn.microsoft.com/semantic-kernel/) | - | LLM integration SDK with deep Azure ecosystem support across C#, Python, and Java. |
| [DSPy](https://dspy.ai/) | - | Declarative framework for programming (not prompting) language models with automatic prompt optimization. |
| [Haystack](https://haystack.deepset.ai/) | - | AI orchestration framework for LLM applications with modular pipelines. |
| [Instructor](https://github.com/jxnl/instructor) | 9k+ | Structured output extraction using Pydantic models with validation and retry logic. |
| [Pydantic AI](https://ai.pydantic.dev/) | - | Agent framework from the Pydantic team with type-safe structured outputs. |
| [OpenAI Agents SDK](https://github.com/openai/openai-agents-python) | 7k+ | OpenAI's official framework for agentic workflows with tool use, handoffs, and guardrails. |
| [Google ADK (Agent Development Kit)](https://google.github.io/adk-docs/) | - | Google's framework with native Gemini integration and multi-agent orchestration. |
| [Smolagents](https://github.com/huggingface/smolagents) | 15k+ | Hugging Face's lightweight agent framework with minimal boilerplate. |
| [CopilotKit](https://www.copilotkit.ai/) | - | Framework for building AI copilots into React applications with AG-UI protocol support. |

<p align="right">(<a href="#readme">⬆ back to top</a>)</p>

## 💾 AI Memory & Context Management

Each tool takes a different approach to giving agents persistent memory across sessions.

| Tool | Stars | Description |
|------|-------|-------------|
| [Mem0](https://mem0.ai/) | - | Dedicated memory layer extracting and managing memories across sessions with up to 80% token reduction. |
| [Zep](https://www.getzep.com/) | - | Temporal knowledge graph tracking how facts change over time with structured business data. |
| [Letta (MemGPT)](https://www.letta.com/) | - | Agent framework with first-class memory management exposing editable memory blocks and stateful runtime. |
| [Cognee](https://www.cognee.ai/) | - | Memory engine finding hidden connections in data using knowledge graphs with semantic embeddings. |
| [LangMem](https://github.com/langchain-ai/langmem) | 1k+ | Memory tools for LangGraph agents extracting information from conversations for long-term context. |
| [Supermemory](https://supermemory.ai/) | - | Universal memory API with time-annotated semantic traces and scalable semantic recall. |
| [Graphlit](https://www.graphlit.com/) | - | Semantic content infrastructure with multimodal ingestion linked to a shared knowledge graph. |

<p align="right">(<a href="#readme">⬆ back to top</a>)</p>

## 📊 Structured Output & Data Extraction

| Tool | Stars | Description |
|------|-------|-------------|
| [Instructor](https://github.com/jxnl/instructor) | 9k+ | Structured output extraction using Pydantic models with validation and retry logic. |
| [BAML](https://github.com/BoundaryML/baml) | 5k+ | Domain-specific language for writing and testing LLM functions with type-safe validation. |
| [Marvin](https://github.com/prefecthq/marvin) | 5k+ | Lightweight Python library for natural language interfaces that extract structured data from LLMs. |
| [Outlines](https://github.com/dottxt-org/outlines) | 10k+ | Constrained text generation using regular expressions, JSON schemas, and context-free grammars. |
| [Guidance](https://github.com/guidance-ai/guidance) | 19k+ | Microsoft's language for controlling LLMs with interleaving generation, prompting, and logical control. |
| [SGLang](https://github.com/sgl-project/sglang) | 8k+ | Fast serving framework with built-in structured output via JSON schema, regex, and EBNF. |
| [TypeChat](https://github.com/microsoft/TypeChat) | 8k+ | Uses TypeScript types to guide LLM outputs into well-typed structured responses. |
| [JSONFormer](https://github.com/1rgs/jsonformer) | 4k+ | Constrains generation to only produce valid JSON tokens. |
| [LlamaParse](https://www.llamaindex.ai/llamaparse) | - | Enterprise document parsing with agentic OCR for extracting structured data from complex documents. |
| [Docling](https://github.com/docling-project/docling) | 18k+ | IBM's document parser with 97.9% accuracy on complex table extraction. |

<p align="right">(<a href="#readme">⬆ back to top</a>)</p>

## 💻 AI Code Assistants

| Tool | Description |
|------|-------------|
| [GitHub Copilot](https://github.com/features/copilot) | 20M+ users, deep IDE integration, agent mode, and enterprise features. |
| [Cursor](https://cursor.com/) | AI-native IDE built on VS Code with deep codebase understanding, multi-file editing, and Composer agent. |
| [Windsurf (Codeium)](https://codeium.com/) | Agentic IDE with Cascade flow combining deep context awareness with autonomous code generation and free tier. |
| [Claude Code](https://docs.anthropic.com/en/docs/claude-code) | Terminal-based agentic coding excelling at reasoning, multi-file refactoring, and autonomous workflows. |
| [Tabnine](https://www.tabnine.com/) | Privacy-first; multi-model support trained only on permissive licenses. |
| [Amazon Q Developer](https://aws.amazon.com/q/developer/) | Autonomous agents, AWS resource management, and console diagnostics. |
| [Sourcegraph Cody](https://sourcegraph.com/cody) | Search-first architecture for analyzing entire multi-repo environments. |
| [Continue.dev](https://continue.dev/) | Supports any LLM and deep IDE customization. |
| [Aider](https://aider.chat/) | Free terminal-based AI pair programming tool for command-line workflows and automation. |
| [Qodo (formerly CodiumAI)](https://www.qodo.ai/) | Focused on generating meaningful test suites and code review. |
| [JetBrains AI](https://www.jetbrains.com/ai/) | Natively integrated into JetBrains IDEs with context-aware completions. |
| [Google Gemini Code Assist](https://cloud.google.com/gemini/docs/codeassist/overview) | Powered by Gemini models with Google Cloud integration. |

<p align="right">(<a href="#readme">⬆ back to top</a>)</p>

## 🎨 AI Image Generation APIs

| Tool | Description |
|------|-------------|
| [OpenAI DALL-E API](https://platform.openai.com/docs/guides/images) | Strong prompt understanding and seamless GPT integration. |
| [Stability AI API](https://platform.stability.ai/) | Stable Diffusion 3.5 and SDXL models with fine-grained control and open-source weights. |
| [Black Forest Labs (FLUX)](https://bfl.ai/) | FLUX.2 and Kontext APIs with state-of-the-art photorealism and typography. |
| [Ideogram API](https://ideogram.ai/) | Specializes in accurate text rendering, ideal for logos, posters, and branded content. |
| [Recraft API](https://www.recraft.ai/) | Excels at vector outputs (icons, logos) alongside raster images with style controls. |
| [Leonardo AI API](https://leonardo.ai/) | Presets optimized for game art, textures, and product visuals. |
| [Google Imagen API](https://cloud.google.com/vertex-ai/generative-ai/docs/image/overview) | Imagen 3/4 models via Vertex AI with studio-quality outputs. |
| [Midjourney](https://www.midjourney.com/) | Best for artistic and aesthetic outputs; accessible via Discord bot. |

<p align="right">(<a href="#readme">⬆ back to top</a>)</p>

## 🎬 AI Video Generation APIs

| Tool | Description |
|------|-------------|
| [Runway API](https://runwayml.com/) | Gen-4.5 with cinematic quality, motion brushes, and scene consistency. |
| [Pika API](https://pika.art/) | PikaSwaps, Pikaffects, and fast rendering optimized for social media. |
| [Luma AI (Dream Machine)](https://lumalabs.ai/) | 4K HDR video with Ray3 engine and superior physics simulation. |
| [Kling AI](https://klingai.com/) | Up to 2-minute videos at 1080p with simultaneous audio-visual generation. |
| [OpenAI Sora](https://openai.com/sora) | Cinematic-quality videos with realistic physics. |
| [Synthesia API](https://www.synthesia.io/) | 230+ AI avatars, 140+ languages, and Express-2 engine for enterprise video. |
| [HeyGen API](https://www.heygen.com/) | Realistic language dubbing with voice cloning and lip-sync. |
| [D-ID API](https://www.d-id.com/api/) | Talking-head videos from images and audio, supporting 120+ languages. |
| [Google Veo API](https://deepmind.google/technologies/veo/) | Native audio integration and high-fidelity output via Vertex AI. |
| [Twelve Labs](https://twelvelabs.io/) | Multimodal video understanding: search, classification, and generation from video content. |

<p align="right">(<a href="#readme">⬆ back to top</a>)</p>

## 🎙️ AI Audio & Speech APIs

| Tool | Description |
|------|-------------|
| [ElevenLabs API](https://elevenlabs.io/) | 3,000+ voices, 70+ languages, emotional nuance, and voice cloning. |
| [OpenAI Audio API](https://platform.openai.com/docs/guides/audio) | TTS and STT including gpt-4o-transcribe and Whisper for 50+ languages. |
| [Deepgram API](https://deepgram.com/) | STT and TTS (Aura-2) optimized for conversational AI with sub-250ms latency. |
| [AssemblyAI API](https://www.assemblyai.com/) | STT with speaker diarization, sentiment analysis, and content moderation. |
| [Cartesia API](https://cartesia.ai/) | Ultra-low-latency voice generation (<150ms) with rapid voice cloning for interactive use. |
| [Play.ht API](https://play.ht/) | 900+ voices across 140+ languages and accents. |
| [Resemble AI API](https://www.resemble.ai/) | Expressive speech synthesis, voice cloning, and deepfake detection for enterprise. |
| [Speechify API](https://speechify.com/) | Apple Design Award winner with 1,000+ voices in 60+ languages. |
| [OpenAI Realtime API](https://platform.openai.com/docs/guides/realtime) | Speech-to-speech for real-time voice applications with low latency. |

<p align="right">(<a href="#readme">⬆ back to top</a>)</p>

## 🔍 AI Search APIs

| Tool | Description |
|------|-------------|
| [Perplexity Sonar API](https://docs.perplexity.ai/) | LLM-powered search providing direct answers with cited sources. |
| [Tavily API](https://tavily.com/) | Built for agents and RAG workflows with SOC 2 certification. |
| [Exa API](https://exa.ai/) | Semantic/neural search scoring 94.9% on SimpleQA, returning meaning-based results. |
| [Brave Search API](https://brave.com/search/api/) | Independent index with no tracking and privacy-focused results. |
| [SerpAPI](https://serpapi.com/) | SERP scraping across search engines for AI features, SEO, and price monitoring. |
| [You.com API](https://you.com/apis) | Deep Search, Express Agent, and MCP support. |
| [Serper API](https://serper.dev/) | Fast, affordable Google SERP API for high-volume use cases. |
| [WebSearch API](https://websearchapi.ai/) | Web search API designed for AI workflow integration. |

<p align="right">(<a href="#readme">⬆ back to top</a>)</p>

## 🌐 AI Translation APIs

| Tool | Description |
|------|-------------|
| [DeepL API](https://www.deepl.com/pro-api) | Known for natural, polished translations especially for European languages. |
| [Google Cloud Translation](https://cloud.google.com/translate) | 130+ languages with AutoML custom model training. |
| [Microsoft Translator](https://azure.microsoft.com/en-us/products/ai-services/ai-translator) | 100+ languages with custom translation models and document translation on Azure. |
| [Amazon Translate](https://aws.amazon.com/translate/) | Real-time and batch translation integrated into the AWS ecosystem. |
| [ModernMT](https://www.modernmt.com/) | Adaptive engine that learns from human corrections in real-time. |
| [Unbabel](https://unbabel.com/) | Blends AI translation with human editors for enterprise content. |
| [LILT](https://lilt.com/) | Adaptive neural models with human-in-the-loop workflow for enterprise localization. |
| [Phrase](https://phrase.com/) | Developer-friendly localization with extensive APIs and CLI tools for custom pipelines. |
| [Lokalise](https://lokalise.com/) | 400+ languages with tone, style, and industry customization. |
| [Tolgee](https://tolgee.io/) | In-context translating features, popular with JavaScript developers. |

<p align="right">(<a href="#readme">⬆ back to top</a>)</p>

## ✍️ AI Writing & Content APIs

| Tool | Description |
|------|-------------|
| [Jasper API](https://www.jasper.ai/) | Content platform for marketing teams with brand voice, campaign management, and generation. |
| [Writer API](https://writer.com/) | Full-stack content generation with brand governance and custom model training. |
| [Copy.ai](https://www.copy.ai/) | Marketing copy, sales emails, and Go-To-Market workflows. |
| [Writesonic](https://writesonic.com/) | Fact-checked, SEO-friendly article generation pulling real-time data from Google. |
| [Surfer SEO](https://surferseo.com/) | SERP analysis and real-time content scoring for SEO optimization. |
| [Frase](https://www.frase.io/) | Analyzes SERPs in real-time with AI-driven content suggestions for SEO. |
| [Grammarly API](https://developer.grammarly.com/) | Grammar, tone, clarity, and brand-voice checking for integration into applications. |
| [Anyword](https://anyword.com/) | Predictive performance scoring that forecasts content performance before publishing. |
| [Wordtune](https://www.wordtune.com/) | Rewriting and paraphrasing by AI21 Labs for improving clarity, tone, and conciseness. |

<p align="right">(<a href="#readme">⬆ back to top</a>)</p>

## 📐 Vector Databases & Embeddings

### Vector Databases

| Tool | Stars | Description |
|------|-------|-------------|
| [Pinecone](https://www.pinecone.io/) | - | Fully managed with serverless architecture and support for billions of vectors. |
| [Weaviate](https://weaviate.io/) | - | Excels at hybrid search (vector + keyword) with GraphQL API. |
| [Qdrant](https://qdrant.tech/) | - | High QPS at 99% recall, production-proven at scale. |
| [Chroma](https://www.trychroma.com/) | - | Developer-friendly embedding database ideal for prototyping RAG systems. |
| [Milvus](https://milvus.io/) | - | Leads in low-latency benchmarks with support for billions of vectors. |
| [Zilliz Cloud](https://zilliz.com/) | - | Managed cloud service for Milvus with enterprise features and production SLAs. |
| [pgvector](https://github.com/pgvector/pgvector) | 13k+ | PostgreSQL extension keeping vectors and relational data together. |
| [LanceDB](https://lancedb.com/) | - | Serverless, built on Lance columnar format with zero-copy access. |

### Embedding APIs

| Tool | Description |
|------|-------------|
| [OpenAI Embeddings API](https://platform.openai.com/docs/guides/embeddings) | ada-002 and newer models for semantic search, clustering, and classification. |
| [Voyage AI API](https://www.voyageai.com/) | Voyage 4 series with shared embedding spaces and domain-specific models. |
| [Cohere Embed API](https://cohere.com/embed) | Multilingual embeddings optimized for search and retrieval with Embed v3. |
| [Google Embedding API](https://cloud.google.com/vertex-ai/generative-ai/docs/embeddings) | Text and multimodal embeddings via Vertex AI with Gecko and newer models. |
| [Jina AI Embeddings](https://jina.ai/) | API-based embedding models with multilingual support and reranking. |

<p align="right">(<a href="#readme">⬆ back to top</a>)</p>

## 📚 RAG Tools & Frameworks

| Tool | Description |
|------|-------------|
| [LlamaIndex](https://www.llamaindex.ai/) | 100+ data connectors, retrieval strategies, and production-ready pipelines. |
| [Unstructured](https://unstructured.io/) | Converts PDFs, images, HTML, and Word docs into structured data for ingestion. |
| [Vectara](https://vectara.com/) | RAG-as-a-service with built-in semantic search, summarization, and hallucination detection. |
| [Ragas](https://docs.ragas.io/) | Reference-free evaluation of RAG pipelines with metrics for context relevance and groundedness. |
| [LangChain Retrievers](https://python.langchain.com/docs/modules/data_connection/) | Modular retrieval components supporting vector stores, multi-query, and contextual compression. |
| [Cohere Rerank](https://cohere.com/rerank) | Neural reranking that improves search relevance by reordering results on semantic similarity. |
| [Morphik](https://www.morphik.ai/) | RAG infrastructure for building and deploying retrieval-augmented generation systems. |

<p align="right">(<a href="#readme">⬆ back to top</a>)</p>

## 📄 AI Document Processing & OCR

| Tool | Stars | Description |
|------|-------|-------------|
| [Azure Document Intelligence](https://azure.microsoft.com/en-us/products/ai-services/document-intelligence) | - | Extracts structure, relationships, and key-values from documents. |
| [Google Document AI](https://cloud.google.com/document-ai) | - | Pre-trained models for invoices, receipts, and custom documents. |
| [Amazon Textract](https://aws.amazon.com/textract/) | - | Extracts text, forms, and tables integrated with S3 and Lambda. |
| [Mistral OCR](https://mistral.ai/news/mistral-ocr) | - | 1000 pages/$ with state-of-the-art accuracy. |
| [LlamaParse](https://www.llamaindex.ai/llamaparse) | - | Agentic OCR extracting structured data from complex documents. |
| [Docling](https://github.com/docling-project/docling) | 18k+ | IBM's parser with 97.9% accuracy on complex table extraction. |
| [Mathpix](https://mathpix.com/) | - | Specialized in mathematical equations, scientific documents, and LaTeX conversion. |
| [Reducto](https://www.reducto.ai/) | - | API-first parsing for extracting structured data from PDFs for RAG pipelines. |
| [Mindee](https://www.mindee.com/) | - | Developer-friendly extraction for invoices, receipts, IDs, and custom document types. |

<p align="right">(<a href="#readme">⬆ back to top</a>)</p>

## 🗃️ AI Database & SQL Assistants

| Tool | Description |
|------|-------------|
| [Vanna.ai](https://vanna.ai/) | Self-hosted AI SQL agent with personalized schema training. |
| [Defog.ai](https://defog.ai/) | Text-to-SQL engine achieving 90-95% accuracy, matching GPT-4 on specialized benchmarks. |
| [Text2SQL.ai](https://www.text2sql.ai/) | Converts natural language to SQL with multiple dialect support. |
| [DBHub](https://dbhub.ai/) | Universal database MCP server enabling AI assistants to query databases. |
| [Outerbase](https://www.outerbase.com/) | Spreadsheet-like views with EZQL natural language agent. |
| [SQL Chat](https://www.sqlchat.ai/) | Chat-based SQL client using natural language. |
| [BlazeSQL](https://www.blazesql.com/) | Generates SQL from natural language by parsing schema metadata. |
| [DataGPT](https://datagpt.com/) | Slack-native analytics answering business questions with raw SQL transparency. |

<p align="right">(<a href="#readme">⬆ back to top</a>)</p>

## 📏 LLM Evaluation & Monitoring

| Tool | Description |
|------|-------------|
| [LangSmith](https://smith.langchain.com/) | Tracing, prompt testing, and RAG assessment from the LangChain team. |
| [Langfuse](https://langfuse.com/) | LLM engineering platform for tracing, prompt management, evaluations, and observability. |
| [Braintrust](https://www.braintrust.dev/) | Evaluation-first platform for systematic prompt experimentation with side-by-side comparison. |
| [Arize AI](https://arize.com/) | LLM observability with Phoenix tracing and production monitoring. |
| [Promptfoo](https://promptfoo.dev/) | Prompt engineering, A/B testing, and LLM-as-a-judge evaluations. |
| [Humanloop](https://humanloop.com/) | Prompt management and evaluation with human feedback loops. |
| [WhyLabs](https://whylabs.ai/) | Detects anomalies, drift, hallucinations, and bias in production systems. |
| [Galileo AI](https://galileo.ai/) | Luna-2 evaluation models and real-time guardrail system for agent actions. |
| [TruLens](https://www.trulens.org/) | Evaluating and tracing AI agents and RAG systems with OpenTelemetry tracing. |
| [Maxim AI](https://www.getmaxim.ai/) | Testing, monitoring, and optimizing LLM systems. |
| [Evidently AI](https://www.evidentlyai.com/) | Detects data drift and model performance degradation. |
| [Fiddler AI](https://www.fiddler.ai/) | Focused on explainability, fairness, and compliance for ML and LLM models. |

<p align="right">(<a href="#readme">⬆ back to top</a>)</p>

## 💰 AI Gateway & Cost Management

| Tool | Description |
|------|-------------|
| [Helicone](https://www.helicone.ai/) | Gateway and observability with request logging, cost tracking, and Rust-based performance. |
| [Portkey](https://portkey.ai/) | Unified API with load balancing, semantic caching, and multi-provider fallbacks. |
| [Keywords AI](https://keywordsai.co/) | Tracks usage, latency, and spend across providers. |
| [Lunary](https://lunary.ai/) | LLM monitoring and analytics with cost tracking and prompt management. |
| [OpenRouter](https://openrouter.ai/) | Unified API marketplace for 100+ LLMs with transparent pricing and cost optimization. |

<p align="right">(<a href="#readme">⬆ back to top</a>)</p>

## 🎯 Prompt Engineering & Management

| Tool | Description |
|------|-------------|
| [Langfuse](https://langfuse.com/) | Prompt management with versioning, tracing, evaluations, and observability. |
| [PromptLayer](https://promptlayer.com/) | Logging, versioning, visual editing, and regression testing. |
| [Agenta](https://agenta.ai/) | LLMOps platform for prompt management, evaluation, and A/B testing. |
| [Pezzo](https://www.pezzo.ai/) | Lightweight prompt management for versioning, testing, and instant deployment. |
| [Promptfoo](https://promptfoo.dev/) | CLI for prompt testing, evaluation, and red-teaming with YAML-based configuration. |
| [Maxim AI](https://www.getmaxim.ai/) | Prompt management and evaluation with testing workflows and version control. |

<p align="right">(<a href="#readme">⬆ back to top</a>)</p>

## 🔧 Fine-Tuning Platforms

| Tool | Stars | Description |
|------|-------|-------------|
| [OpenAI Fine-Tuning](https://platform.openai.com/docs/guides/fine-tuning) | - | Managed fine-tuning for GPT models with reinforcement fine-tuning preview. |
| [Together AI Fine-Tuning](https://www.together.ai/) | - | Cloud-based fine-tuning for open-source models with LoRA adapter support. |
| [Predibase](https://predibase.com/) | - | Low-code fine-tuning and hosting with LoRAX multi-adapter serving and serverless deployment. |
| [LoRAX](https://github.com/predibase/lorax) | 3k+ | Serves 100s of fine-tuned LoRA adapters on a single GPU. |
| [Modal Fine-Tuning](https://modal.com/) | - | Serverless GPU compute with pay-per-use pricing and zero idle costs. |
| [Lambda Cloud](https://lambdalabs.com/) | - | GPU cloud optimized for AI training with zero egress fees and InfiniBand networking. |
| [Anyscale](https://www.anyscale.com/) | - | Built on Ray for distributed fine-tuning and serving of LLMs. |

<p align="right">(<a href="#readme">⬆ back to top</a>)</p>

## 🛡️ AI Safety & Guardrails

| Tool | Stars | Description |
|------|-------|-------------|
| [Guardrails AI](https://www.guardrailsai.com/) | - | LLM output validation with pre-built validators from Guardrails Hub. |
| [NVIDIA NeMo Guardrails](https://github.com/NVIDIA/NeMo-Guardrails) | 4k+ | Programmable safety guardrails using a domain-specific language. |
| [Lakera Guard](https://www.lakera.ai/) | - | Real-time prompt injection detection with customizable safeguards and monitoring dashboards. |
| [LLM Guard](https://llm-guard.com/) | - | Scanners for prompt injection, PII, and toxicity in LLM interactions. |
| [Rebuff](https://github.com/protectai/rebuff) | 1k+ | Self-hardening prompt injection detector that learns from attack attempts over time. |
| [Azure AI Content Safety](https://azure.microsoft.com/en-us/products/ai-services/ai-content-safety) | - | Detects harmful content in text and images with configurable severity levels. |

<p align="right">(<a href="#readme">⬆ back to top</a>)</p>

## ⚖️ AI Compliance & Governance

| Tool | Description |
|------|-------------|
| [Credo AI](https://www.credo.ai/) | Compliance automation with EU AI Act, NIST AI RMF, and ISO 42001. |
| [Holistic AI](https://www.holisticai.com/) | AI lifecycle governance assessing models for safety, fairness, bias, and regulatory alignment. |
| [IBM watsonx.governance](https://www.ibm.com/products/watsonx-governance) | Model lifecycle management, bias detection, and compliance tracking. |
| [Zenity](https://zenity.io/) | AI agent compliance: risk detection, guardrail enforcement, and regulatory reporting. |
| [Fairly AI](https://fairly.ai/) | AI risk management for financial services with model validation and bias detection. |
| [Drata](https://drata.com/) | Compliance automation with AI-powered controls for SOC 2, ISO 27001, and AI regulations. |
| [Securiti AI](https://securiti.ai/) | Data command center with AI governance, data privacy, and consent management. |

<p align="right">(<a href="#readme">⬆ back to top</a>)</p>

## 🏭 MLOps & Deployment

| Tool | Description |
|------|-------------|
| [MLflow](https://mlflow.org/) | Experiment tracking, model registry, and deployment; MLflow 3 adds GenAI ops support. |
| [BentoML](https://www.bentoml.com/) | Build, ship, and scale AI model serving with high-performance inference. |
| [KServe](https://kserve.github.io/website/) | Kubernetes-native serverless model serving with autoscaling. |
| [ZenML](https://www.zenml.io/) | MLOps framework for portable ML pipelines across any infrastructure. |
| [Metaflow](https://metaflow.org/) | Netflix-originated framework for real-life ML workflows with deep AWS integration. |
| [NVIDIA Triton Inference Server](https://developer.nvidia.com/triton-inference-server) | GPU inference serving supporting multiple ML frameworks and model formats. |
| [DVC (Data Version Control)](https://dvc.org/) | Version control for data, models, and experiments alongside Git. |
| [Kubeflow](https://www.kubeflow.org/) | Google-backed ML toolkit for Kubernetes with pipeline orchestration and LLM fine-tuning. |
| [Seldon Core](https://www.seldon.io/) | ML model serving at scale with A/B testing and canary rollouts. |
| [Weights & Biases](https://wandb.ai/) | Experiment tracking, model management, and dataset versioning for the full ML lifecycle. |
| [Neptune.ai](https://neptune.ai/) | Experiment tracking and model registry for logging, comparing, and collaborating on models. |
| [Comet ML](https://www.comet.com/) | Experiment management with real-time tracking, model comparison, and production monitoring. |

<p align="right">(<a href="#readme">⬆ back to top</a>)</p>

## ⚡ AI Workflow & Automation

| Tool | Description |
|------|-------------|
| [n8n](https://n8n.io/) | AI agent nodes for building LLM-powered automation workflows. |
| [Zapier AI](https://zapier.com/) | 8,000+ app connections with AI-powered workflows, agents, and chatbots. |
| [Make (Integromat)](https://www.make.com/) | Visual automation with detailed branching logic and deep app integrations. |
| [Lindy AI](https://www.lindy.ai/) | Agent-first automation for tasks like lead qualification and email follow-ups. |
| [Relevance AI](https://relevanceai.com/) | No-code platform for building collaborating AI agent teams. |
| [Activepieces](https://www.activepieces.com/) | MIT-licensed no-code automation with AI workflow integration and self-hosting. |
| [Pipedream](https://pipedream.com/) | Developer-focused hybrid no-code/serverless platform for API workflows with code at any step. |
| [Inngest](https://www.inngest.com/) | Durable functions replacing queues for reliable multi-step AI workflows. |
| [Trigger.dev](https://trigger.dev/) | TypeScript-first platform for deploying managed AI agents and background workflows. |
| [Windmill](https://www.windmill.dev/) | Workflow engine for internal tools, background jobs, and AI pipelines. |
| [Hatchet](https://hatchet.run/) | Distributed task queue for reliable background jobs and AI agent workflows. |
| [Relay.app](https://www.relay.app/) | Human-in-the-loop automation combining AI steps with human approval. |

<p align="right">(<a href="#readme">⬆ back to top</a>)</p>

## 🔌 AI Function Calling & Tool Use

| Tool | Description |
|------|-------------|
| [Composio](https://composio.dev/) | 150+ pre-built tool integrations for AI agents with authentication handling. |
| [Toolhouse](https://toolhouse.ai/) | Universal tool server enabling any LLM to use tools via a simple API. |
| [Arcade AI](https://www.arcade-ai.com/) | Authenticated API access to third-party services for AI agents. |
| [NPI (Natural Programming Interface)](https://www.npi.ai/) | Tool-use APIs enabling AI agents to operate software tools. |
| [Dify](https://dify.ai/) | Platform (93K+ stars) for AI agents with built-in RAG, Function Calling, and ReAct strategies. |

<p align="right">(<a href="#readme">⬆ back to top</a>)</p>

## 🧪 AI Testing & QA

| Tool | Description |
|------|-------------|
| [testRigor](https://testrigor.com/) | Generative AI test automation from plain English descriptions. |
| [Applitools](https://applitools.com/) | Visual AI detecting UI bugs across browsers and devices. |
| [Testsigma](https://testsigma.com/) | Natural language test creation for web, mobile, and API. |
| [Katalon](https://katalon.com/) | AI-powered test automation for web, mobile, API, and desktop. |
| [mabl](https://www.mabl.com/) | Low-code, AI-driven test automation for Agile and DevOps. |
| [QA Wolf](https://www.qawolf.com/) | AI + human-in-the-loop QA with Playwright-based testing and massive parallelization. |
| [Qodo](https://www.qodo.ai/) | Generates meaningful test suites and improves code quality. |

<p align="right">(<a href="#readme">⬆ back to top</a>)</p>

## 🧬 AI Synthetic Data Generation

| Tool | Description |
|------|-------------|
| [Gretel](https://gretel.ai/) | Fine-tuning capabilities, privacy metrics, and domain-specific generation APIs. |
| [Mostly AI](https://mostly.ai/) | Transforms production data into privacy-safe versions for AI training. |
| [Tonic.ai](https://www.tonic.ai/) | Fabricate (synthetic data), Structural (test data), and Textual (data redaction). |
| [YData](https://ydata.ai/) | Automated data profiling with synthetic generation for improving AI training quality. |
| [Hazy](https://hazy.com/) | Privacy-preserving synthetic data for regulated industries using differential privacy. |
| [Synthesis AI](https://synthesis.ai/) | Specialized in computer vision training with photorealistic 3D-rendered images. |

<p align="right">(<a href="#readme">⬆ back to top</a>)</p>

## 🏷️ AI Data Labeling & Annotation

| Tool | Description |
|------|-------------|
| [Scale AI](https://scale.ai/) | Data labeling with RLHF capabilities, used by major AI labs. |
| [Labelbox](https://labelbox.com/) | Annotation, data management, and Model Foundry with HIPAA/SOC2 compliance. |
| [Snorkel AI](https://snorkel.ai/) | Programmatic labeling using weak supervision to encode labeling logic as functions. |
| [Argilla](https://argilla.io/) | Free data annotation for NLP, LLMs, and multimodal models with Hugging Face integration. |
| [Label Studio](https://labelstud.io/) | Flexible templates, ML backends, and model-in-the-loop support. |
| [Encord](https://encord.com/) | Computer vision labeling with active learning and model-assisted labeling. |
| [CVAT](https://www.cvat.ai/) | Annotation tool for computer vision including image and video labeling. |

<p align="right">(<a href="#readme">⬆ back to top</a>)</p>

## 🔗 MCP (Model Context Protocol)

Anthropic's open standard (donated to Linux Foundation AAIF) for connecting AI models to external tools and data sources.

### Core Protocol

| Tool | Stars | Description |
|------|-------|-------------|
| [Model Context Protocol Specification](https://modelcontextprotocol.io/) | - | The protocol spec defining how AI models connect to tools and data. |
| [MCP TypeScript SDK](https://github.com/modelcontextprotocol/typescript-sdk) | 3k+ | Official TypeScript SDK for building MCP servers and clients. |
| [MCP Python SDK](https://github.com/modelcontextprotocol/python-sdk) | 4k+ | Official Python SDK for building MCP servers and clients. |
| [MCP Registry](https://registry.modelcontextprotocol.io/) | - | Catalog with ~2,000 entries and 407% growth since launch. |

### Notable MCP Servers

| Tool | Stars | Description |
|------|-------|-------------|
| [MCP Servers Repository](https://github.com/modelcontextprotocol/servers) | 16k+ | Official collection of reference server implementations. |
| [Awesome MCP Servers](https://github.com/punkpeye/awesome-mcp-servers) | 30k+ | Community-curated collection covering 7,260+ servers across diverse integrations. |
| [Playwright MCP](https://github.com/microsoft/playwright-mcp) | 5k+ | Microsoft's server enabling LLMs to interact with web pages through accessibility snapshots. |
| [ActionKit by Paragon](https://www.useparagon.com/) | - | Connects to 130+ SaaS integrations for AI agent workflows. |

<p align="right">(<a href="#readme">⬆ back to top</a>)</p>

## 🛠️ AI Developer Tools & SDKs

| Tool | Description |
|------|-------------|
| [Vercel AI SDK](https://sdk.vercel.ai/) | TypeScript toolkit for React/Next.js AI apps with composable agents and MCP support. |
| [Streamlit](https://streamlit.io/) | Python framework for data-heavy AI apps combining chat interfaces with dashboards. |
| [Gradio](https://www.gradio.app/) | Python library for ML demo UIs with instant public links. |
| [Chainlit](https://chainlit.io/) | Python framework for conversational AI UIs with step-by-step visualization. |
| [Langflow](https://www.langflow.org/) | Low-code Python-based builder for visually creating agentic and RAG applications. |
| [Flowise](https://flowiseai.com/) | Node.js visual AI workflow builder for agents and chatbots. |
| [Dify](https://dify.ai/) | LLM app development platform with visual workflow builder and model management. |

<p align="right">(<a href="#readme">⬆ back to top</a>)</p>

## ⏱️ Realtime & Streaming AI

| Tool | Description |
|------|-------------|
| [OpenAI Realtime API](https://platform.openai.com/docs/guides/realtime) | Speech-to-speech via WebSocket for real-time voice applications. |
| [Google Gemini Live API](https://ai.google.dev/gemini-api/docs/live) | Real-time voice and video interaction with Gemini via WebSocket. |
| [LiveKit](https://livekit.io/) | Real-time audio/video AI applications with WebRTC and agent frameworks. |
| [Deepgram Streaming](https://deepgram.com/) | Real-time STT with sub-250ms latency via WebSocket for live transcription. |
| [AG-UI Protocol](https://www.copilotkit.ai/ag-ui) | Protocol for streaming agent events between AI backends and frontend UIs. |
| [Decart](https://decart.ai/) | Lucy 2 model generating video live with near-zero latency. |

<p align="right">(<a href="#readme">⬆ back to top</a>)</p>

## 🎭 Multi-Modal AI APIs

| Tool | Description |
|------|-------------|
| [OpenAI GPT-4o API](https://platform.openai.com/) | Natively multimodal: text, images, audio, and video with unified reasoning. |
| [Google Gemini API](https://ai.google.dev/) | 1M+ token context with native image/video/audio understanding. |
| [Anthropic Claude API](https://www.anthropic.com/api) | Vision-capable: analyzes images, documents, charts, and screenshots alongside text. |
| [Mistral Pixtral](https://mistral.ai/) | Image understanding capabilities via API. |
| [Meta Llama Multimodal](https://ai.meta.com/llama/) | Vision capabilities via various inference providers. |
| [Twelve Labs](https://twelvelabs.io/) | Video understanding: search, classification, and generation from video. |
| [Roboflow](https://roboflow.com/) | Computer vision APIs for training, deploying, and managing detection and segmentation models. |

<p align="right">(<a href="#readme">⬆ back to top</a>)</p>

## 📱 Edge & On-Device AI

| Tool | Stars | Description |
|------|-------|-------------|
| [Ollama](https://ollama.com/) | - | Run LLMs locally with a single command; wide model support with easy management. |
| [LM Studio](https://lmstudio.ai/) | - | Desktop app for running LLMs locally with Vulkan GPU offloading and model discovery. |
| [llama.cpp](https://github.com/ggerganov/llama.cpp) | 75k+ | C/C++ inference engine optimized for CPU-only inference with extensive quantization. |
| [vLLM](https://vllm.ai/) | - | High-throughput serving with PagedAttention and continuous batching. |
| [NVIDIA TensorRT-LLM](https://github.com/NVIDIA/TensorRT-LLM) | 10k+ | 30-70% faster throughput on NVIDIA GPUs. |
| [MLX](https://github.com/ml-explore/mlx) | 18k+ | Apple's ML framework for Apple Silicon achieving ~230 tokens/second. |
| [ExecuTorch](https://github.com/pytorch/executorch) | 3k+ | Meta's on-device framework with 50KB footprint supporting 12+ hardware backends. |
| [Jan](https://jan.ai/) | - | Offline-first desktop AI assistant for running LLMs locally with privacy-first design. |
| [LocalAI](https://localai.io/) | - | Self-hosted OpenAI-compatible API for running models locally. |
| [LlamaEdge](https://llamaedge.com/) | - | Lightweight runtime for deploying LLMs at the edge using WebAssembly. |

<p align="right">(<a href="#readme">⬆ back to top</a>)</p>

## 🖥️ Cloud GPU Providers

| Tool | Description |
|------|-------------|
| [RunPod](https://www.runpod.io/) | On-demand and serverless compute supporting A100/H100 GPUs at flexible pricing. |
| [Lambda Cloud](https://lambdalabs.com/cloud) | H100/A100 instances with zero egress fees and InfiniBand networking. |
| [CoreWeave](https://www.coreweave.com/) | Kubernetes-native GPU cloud at hyperscale; serves OpenAI and Microsoft. |
| [Vast.ai](https://vast.ai/) | GPU marketplace with competitive bidding, best for cost-sensitive workloads. |
| [Nebius](https://nebius.com/) | AI-native cloud with Blackwell Ultra compute and European data centers. |
| [TensorDock](https://www.tensordock.com/) | GPU marketplace spanning 100+ global locations. |
| [Paperspace (DigitalOcean)](https://www.paperspace.com/) | Notebooks, virtual desktops, and serverless functions for ML development. |
| [Crusoe Cloud](https://crusoe.ai/) | Clean-energy-powered GPU cloud for sustainable AI workloads. |
| [Fluidstack](https://www.fluidstack.io/) | Distributed GPU cloud aggregating idle compute at competitive prices. |

<p align="right">(<a href="#readme">⬆ back to top</a>)</p>

## 🧩 AI Browser Extensions & Desktop Apps

| Tool | Description |
|------|-------------|
| [ChatGPT Desktop](https://openai.com/chatgpt/desktop/) | Native desktop app with system-wide access via global shortcuts. |
| [Claude Desktop](https://claude.ai/download) | MCP-based extensions and local tool integration. |
| [Poe](https://poe.com/) | Multi-model platform accessing GPT-4, Claude, Gemini, Llama, and custom bots in one interface. |
| [Perplexity](https://www.perplexity.ai/) | AI search engine as web app and browser extension providing cited answers. |
| [Raycast AI](https://www.raycast.com/) | macOS launcher with built-in AI and extensions for system-wide access. |
| [Monica](https://monica.im/) | Browser extension accessing GPT, Claude, Gemini with sidebar chat. |
| [Sider](https://sider.ai/) | Browser sidebar unifying GPT, DeepSeek, Gemini, Claude, and Grok for comparing outputs. |
| [Pieces for Developers](https://pieces.app/) | Captures live context from browsers to IDEs with multiple LLM support. |
| [HARPA AI](https://harpa.ai/) | Chrome extension combining ChatGPT, Claude, Gemini, Perplexity for web page automation. |

<p align="right">(<a href="#readme">⬆ back to top</a>)</p>

## 🎮 AI Playgrounds & API Testing

| Tool | Stars | Description |
|------|-------|-------------|
| [OpenAI Playground](https://platform.openai.com/playground) | - | Official tool for experimenting with OpenAI models and testing prompts. |
| [Vercel AI Playground](https://sdk.vercel.ai/) | - | Compare AI model outputs across providers side-by-side. |
| [TypingMind](https://www.typingmind.com/) | - | LLM frontend supporting multiple models with your own API keys and custom plugins. |
| [ChatHub](https://chathub.gg/) | - | Browser extension for using ChatGPT, Claude, Gemini side-by-side. |
| [Msty](https://msty.app/) | - | Desktop app for managing multiple LLM providers with conversation branching and prompt library. |
| [OpenPlayground](https://github.com/nat/openplayground) | 3k+ | LLM playground for running and comparing models locally. |

<p align="right">(<a href="#readme">⬆ back to top</a>)</p>

## 🕷️ Web Scraping & Data Extraction for AI

| Tool | Stars | Description |
|------|-------|-------------|
| [Firecrawl](https://www.firecrawl.dev/) | - | Scrapes, crawls, and extracts structured data into LLM-ready formats. |
| [Crawl4AI](https://github.com/unclecode/crawl4ai) | 58k+ | AI-ready web crawler generating clean Markdown with local LLM support. |
| [Spider](https://spider.cloud/) | - | Fast web scraping designed for AI with structured data extraction. |
| [Jina Reader](https://jina.ai/reader/) | - | Converts any URL into LLM-friendly text. |
| [ScrapeGraphAI](https://scrapegraphai.com/) | - | Scraping library using LLMs to create pipelines from natural language. |

<p align="right">(<a href="#readme">⬆ back to top</a>)</p>

## 📖 AI Knowledge Management

| Tool | Description |
|------|-------------|
| [Glean](https://www.glean.com/) | Enterprise search connecting Google Workspace, Microsoft 365, Slack, and Salesforce. |
| [Notion AI](https://www.notion.so/product/ai) | AI layer combining wiki, project management, and databases with AI search and writing. |
| [Guru](https://www.getguru.com/) | Knowledge verification delivering knowledge at point-of-work via Slack and Teams. |
| [Mem](https://mem.ai/) | Note-taking that self-organizes information using machine learning. |
| [Slite](https://slite.com/) | Collaborative docs using AI to categorize content, identify gaps, and surface relevant info. |
| [Confluence AI](https://www.atlassian.com/software/confluence) | Atlassian's enterprise wiki with AI-powered search and content generation. |

<p align="right">(<a href="#readme">⬆ back to top</a>)</p>

## 🏆 Benchmarks & Leaderboards

| Tool | Description |
|------|-------------|
| [Chatbot Arena (LMArena)](https://lmarena.ai/) | Crowdsourced LLM ranking using 6M+ blind pairwise votes and Elo ratings. |
| [Artificial Analysis](https://artificialanalysis.ai/) | Independent comparison of 100+ models across quality, price, speed, and latency. |
| [Open LLM Leaderboard](https://huggingface.co/spaces/open-llm-leaderboard/open_llm_leaderboard) | Community benchmark tracking open-source model performance across standardized evaluations. |
| [Stanford HELM](https://crfm.stanford.edu/helm/) | Holistic evaluation across 42 scenarios and 7 dimensions including accuracy, bias, and toxicity. |
| [LiveBench](https://livebench.ai/) | Continuously updated with new questions to prevent contamination. |
| [LLM Stats](https://llm-stats.com/) | Aggregates multiple leaderboards and benchmarks in one place. |
| [MTEB (Massive Text Embedding Benchmark)](https://huggingface.co/spaces/mteb/leaderboard) | Evaluates embedding models across retrieval, classification, and clustering. |
| [EvalPlus](https://evalplus.github.io/) | 80x more test cases than HumanEval to address overfitting. |
| [BigCodeBench](https://bigcode-bench.github.io/) | 1,140 tasks requiring composing function calls from 139 libraries. |

<p align="right">(<a href="#readme">⬆ back to top</a>)</p>

## 📚 Learning Resources

### Guides & Tutorials

| Resource | Stars | Description |
|----------|-------|-------------|
| [OpenAI API Quickstart](https://platform.openai.com/docs/quickstart) | - | Official getting started guide covering chat completions, tool use, and multimodal capabilities. |
| [OpenAI Academy](https://academy.openai.com/) | - | Workshops from foundational AI literacy to advanced integration for engineers. |
| [Anthropic Getting Started](https://docs.anthropic.com/en/docs/get-started) | - | Set up your environment, install an SDK, and send your first message to Claude. |
| [Anthropic Quickstarts](https://github.com/anthropics/claude-quickstarts) | 1k+ | Projects to help build deployable applications using the Claude API. |
| [Google Gemini Quickstart](https://ai.google.dev/gemini-api/docs/quickstart) | - | Step-by-step tutorials for getting started with Gemini models. |
| [Google Gemini Cookbook](https://github.com/google-gemini/cookbook) | 8k+ | Official examples and guides for using the Gemini API. |
| [OpenAI Cookbook](https://cookbook.openai.com/) | - | Recipes, guides, and notebooks for building with OpenAI models. |
| [OpenAI Prompt Engineering Guide](https://platform.openai.com/docs/guides/prompt-engineering) | - | Strategies for getting better results from LLMs. |
| [Anthropic Prompt Engineering Tutorial](https://github.com/anthropics/prompt-eng-interactive-tutorial) | 3k+ | Interactive tutorial for effective prompt design with Claude. |
| [DAIR.AI Prompt Engineering Guide](https://www.promptingguide.ai/) | - | Community-driven guide covering techniques and examples for all skill levels. |
| [Microsoft Generative AI for Beginners](https://github.com/microsoft/generative-ai-for-beginners) | 70k+ | Free 21-lesson course covering generative AI fundamentals with code examples. |
| [Microsoft AI Agents for Beginners](https://github.com/microsoft/ai-agents-for-beginners) | 15k+ | Free 12-lesson course for getting started building AI agents. |

### Courses

| Resource | Description |
|----------|-------------|
| [DeepLearning.AI Short Courses](https://www.deeplearning.ai/courses/) | 50+ free short courses on LLMs, prompt engineering, RAG, agents, and fine-tuning. |
| [fast.ai Practical Deep Learning](https://course.fast.ai/) | Free course teaching practical deep learning with a top-down approach. |
| [Hugging Face LLM Course](https://huggingface.co/learn/llm-course/chapter1/1) | Using, fine-tuning, and deploying LLMs with the Hugging Face ecosystem. |
| [Google ML Crash Course](https://developers.google.com/machine-learning/crash-course) | Free 15-hour self-study course on ML fundamentals. |
| [LangChain Academy](https://academy.langchain.com/) | Free courses on LangGraph agent architectures and prompt engineering. |
| [Stanford CS224N](https://web.stanford.edu/class/cs224n/) | Stanford's flagship NLP course with free lecture videos and assignments. |
| [Stanford CS229](https://see.stanford.edu/course/cs229) | Stanford's ML course. |
| [Generative AI with LLMs (Coursera)](https://www.coursera.org/learn/generative-ai-with-llms) | DeepLearning.AI and AWS course on generative models and fine-tuning. |

### Books

| Resource | Description |
|----------|-------------|
| [AI Engineering (Chip Huyen)](https://www.oreilly.com/library/view/ai-engineering/9781098166298/) | Guide to building production AI systems; most-read book on O'Reilly since launch. |
| [Build a Large Language Model From Scratch (Sebastian Raschka)](https://www.manning.com/books/build-a-large-language-model-from-scratch) | Step-by-step guide to coding a GPT-like LLM from scratch. |
| [Designing Machine Learning Systems (Chip Huyen)](https://www.oreilly.com/library/view/designing-machine-learning/9781098107956/) | Holistic approach to designing ML systems for production. |
| [Hands-On Large Language Models (O'Reilly)](https://www.oreilly.com/library/view/hands-on-large-language/9781098150952/) | Practical guide to understanding and applying LLMs in real-world scenarios. |
| [Deep Learning for Coders with fastai and PyTorch](https://course.fast.ai/Resources/book.html) | Hands-on approach to deep learning starting with practical applications. |

### Newsletters

| Resource | Description |
|----------|-------------|
| [The Batch](https://www.deeplearning.ai/the-batch/) | Andrew Ng's weekly AI news for engineers, executives, and enthusiasts. |
| [TLDR AI](https://tldr.tech/ai) | Daily AI newsletter covering technical developments for 1.25M+ readers. |
| [Ben's Bites](https://bensbites.beehiiv.com/) | Daily newsletter with 120K+ subscribers on product launches and business use cases. |
| [The Neuron](https://www.theneurondaily.com/) | Morning-Brew-style AI newsletter for 550K+ professionals. |
| [Latent Space](https://www.latent.space/) | Technical AI newsletter and podcast on research and infrastructure. |
| [Simon Willison's Weblog](https://simonwillison.net/) | Blog covering LLMs, AI tools, and open source from a prolific builder. |

### Podcasts

| Resource | Description |
|----------|-------------|
| [Latent Space: The AI Engineer Podcast](https://www.latent.space/podcast) | Deep technical dives into foundation models, agents, and AI engineering. |
| [Practical AI](https://practicalai.fm/) | Making AI practical, productive, and accessible with real-world discussions. |
| [NVIDIA AI Podcast](https://www.nvidia.com/en-us/ai-podcast/) | Biweekly interviews exploring innovations in AI and deep learning. |
| [Lex Fridman Podcast](https://lexfridman.com/podcast/) | Long-form conversations about science, AI, and intelligence. |
| [Dwarkesh Podcast](https://www.dwarkeshpatel.com/podcast) | Deeply researched interviews with leading thinkers in AI and technology. |

### YouTube Channels

| Resource | Description |
|----------|-------------|
| [Andrej Karpathy](https://www.youtube.com/@AndrejKarpathy) | Former Tesla AI Director teaching neural networks from scratch in "Zero to Hero.". |
| [3Blue1Brown](https://www.youtube.com/@3blue1brown) | Beautifully animated explanations of mathematics, neural networks, and deep learning. |
| [Yannic Kilcher](https://www.youtube.com/@YannicKilcher) | Detailed breakdowns of the latest ML research papers. |
| [AI Explained](https://www.youtube.com/@aiexplained-official) | Clear explanations of AI concepts and model comparisons. |
| [Two Minute Papers](https://www.youtube.com/@TwoMinutePapers) | Bite-sized summaries of cutting-edge AI research with visual explanations. |
| [Umar Jamil](https://www.youtube.com/@ulobaranjbar) | Highly technical implementations of ML and LLM techniques from scratch. |

### Communities

| Resource | Description |
|----------|-------------|
| [r/LocalLLaMA](https://www.reddit.com/r/LocalLLaMA/) | 266K+ member community focused on running LLMs locally and open-source models. |
| [r/MachineLearning](https://www.reddit.com/r/MachineLearning/) | 2.8M+ subscriber academic-leaning community for ML papers and research. |
| [Hugging Face Community](https://huggingface.co/) | Hub for sharing ML models, datasets, and Spaces. |
| [OpenAI Developer Forum](https://community.openai.com/) | Official forum for OpenAI API developers. |
| [LangChain Discord](https://discord.gg/langchain) | Developer community for building LLM applications with LangChain. |

### Research Paper Aggregators

| Resource | Description |
|----------|-------------|
| [arXiv](https://arxiv.org/) | Open-access preprint repository with 2M+ papers in AI, ML, and CS. |
| [Semantic Scholar](https://www.semanticscholar.org/) | AI-powered tool for finding and connecting scientific papers. |
| [Papers With Code](https://paperswithcode.com/) | ML papers linked with code implementations and benchmark results. |
| [Connected Papers](https://www.connectedpapers.com/) | Explores related papers through interactive citation graphs. |
| [Hugging Face Daily Papers](https://huggingface.co/papers) | Curated trending AI papers with links to models and datasets. |

### Conferences

| Resource | Description |
|----------|-------------|
| [NeurIPS](https://nips.cc/) | Premier ML conference (December annually). |
| [ICML](https://icml.cc/) | International Conference on Machine Learning (July 2026, Seoul). |
| [ICLR](https://iclr.cc/) | International Conference on Learning Representations (April 2026, Rio de Janeiro). |
| [AI Engineer World's Fair](https://www.ai.engineer/worldsfair) | Practitioner-focused conference (June-July 2026, San Francisco). |

<p align="right">(<a href="#readme">⬆ back to top</a>)</p>

---

## 🔗 Related Awesome Lists

| List | Stars | Description |
|------|-------|-------------|
| [awesome-chatgpt-prompts](https://github.com/f/awesome-chatgpt-prompts) | 120k+ | Curated ChatGPT prompts for creative and effective use. |
| [awesome-llm-apps](https://github.com/Shubhamsaboo/awesome-llm-apps) | 20k+ | LLM app examples with code. |
| [awesome-generative-ai](https://github.com/steven2358/awesome-generative-ai) | 7k+ | Generative AI tools and resources. |
| [awesome-langchain](https://github.com/kyrolabs/awesome-langchain) | 7k+ | Tools and projects using LangChain. |
| [awesome-mcp-servers](https://github.com/punkpeye/awesome-mcp-servers) | 30k+ | Community-curated MCP server collection. |
| [awesome-llm-agents](https://github.com/kaushikb11/awesome-llm-agents) | 3k+ | LLM agent frameworks and tools. |
| [awesome-vibe-coding](https://github.com/filipecalegario/awesome-vibe-coding) | 5k+ | Tools and resources for AI-assisted coding. |
| [awesome-local-ai](https://github.com/janhq/awesome-local-ai) | 3k+ | Tools for running AI models locally. |
| [awesome-scrapers](https://github.com/edwardtay/awesome-scrapers) | - | Scrapers, crawlers, and data extraction tools. |
| [awesome-robotics](https://github.com/edwardtay/awesome-robotics) | - | Robotics frameworks, simulators, and platforms. |
| [awesome-web3-ai](https://github.com/edwardtay/awesome-web3-ai) | - | Web3 x AI tools, agent frameworks, and protocols. |

<p align="right">(<a href="#readme">⬆ back to top</a>)</p>

## 🪦 Deprecated Tools Graveyard

| Dead Tool | Why | Use Instead |
|-----------|-----|-------------|
| OpenAI Codex | Shut down Mar 2023 | GPT-4o, Claude Code. |
| Hugging Face Inference API (free) | Removed free tier | Hugging Face Inference Endpoints (paid). |
| Jasper Boss Mode | Rebranded/discontinued | Jasper AI platform. |
| ChatGPT Plugins | Shut down Apr 2024 | GPTs, function calling. |
| Bard | Renamed to Gemini | Google Gemini. |
| LangChain Agents (legacy) | Deprecated in favor of LangGraph | LangGraph. |

<p align="right">(<a href="#readme">⬆ back to top</a>)</p>

---

## Contributing

Contributions welcome! Please read the [contribution guidelines](CONTRIBUTING.md) first.

- Add tools you've actually used or evaluated
- Include star count and language where applicable
- Note if a tool is unmaintained (last commit >1 year ago)
- Commercial tools/services are fine but must be clearly labeled

## License

[![CC0](https://licensebuttons.net/p/zero/1.0/88x31.png)](https://creativecommons.org/publicdomain/zero/1.0/)

To the extent possible under law, [Edward Tay](https://github.com/edwardtay) has waived all copyright and related or neighboring rights to this work.
