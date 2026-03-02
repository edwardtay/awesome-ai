# Awesome AI [![Awesome](https://awesome.re/badge.svg)](https://awesome.re)

> A curated list of AIs. 400+ tools across 40+ categories.

## Contents

- [LLM API Providers](#llm-api-providers)
- [Open Source LLM Models](#open-source-llm-models)
- [AI Reasoning Models](#ai-reasoning-models)
- [Open-Source Model Hosting & Inference](#open-source-model-hosting--inference)
- [LLM API Routers & Gateways](#llm-api-routers--gateways)
- [Cloud AI Platforms (Managed)](#cloud-ai-platforms-managed)
- [AI Agent Frameworks](#ai-agent-frameworks)
- [AI Memory & Context Management](#ai-memory--context-management)
- [Structured Output & Data Extraction](#structured-output--data-extraction)
- [AI Code Assistants](#ai-code-assistants)
- [AI Image Generation APIs](#ai-image-generation-apis)
- [AI Video Generation APIs](#ai-video-generation-apis)
- [AI Audio & Speech APIs](#ai-audio--speech-apis)
- [AI Search APIs](#ai-search-apis)
- [AI Translation APIs](#ai-translation-apis)
- [AI Writing & Content APIs](#ai-writing--content-apis)
- [Vector Databases & Embeddings](#vector-databases--embeddings)
- [RAG Tools & Frameworks](#rag-tools--frameworks)
- [AI Document Processing & OCR](#ai-document-processing--ocr)
- [AI Database & SQL Assistants](#ai-database--sql-assistants)
- [LLM Evaluation & Monitoring](#llm-evaluation--monitoring)
- [AI Gateway & Cost Management](#ai-gateway--cost-management)
- [Prompt Engineering & Management](#prompt-engineering--management)
- [Fine-Tuning Platforms](#fine-tuning-platforms)
- [AI Safety & Guardrails](#ai-safety--guardrails)
- [AI Compliance & Governance](#ai-compliance--governance)
- [MLOps & Deployment](#mlops--deployment)
- [AI Workflow & Automation](#ai-workflow--automation)
- [AI Function Calling & Tool Use](#ai-function-calling--tool-use)
- [AI Testing & QA](#ai-testing--qa)
- [AI Synthetic Data Generation](#ai-synthetic-data-generation)
- [AI Data Labeling & Annotation](#ai-data-labeling--annotation)
- [MCP (Model Context Protocol)](#mcp-model-context-protocol)
- [AI Developer Tools & SDKs](#ai-developer-tools--sdks)
- [Realtime & Streaming AI](#realtime--streaming-ai)
- [Multi-Modal AI APIs](#multi-modal-ai-apis)
- [Edge & On-Device AI](#edge--on-device-ai)
- [Cloud GPU Providers](#cloud-gpu-providers)
- [AI Browser Extensions & Desktop Apps](#ai-browser-extensions--desktop-apps)
- [AI Playgrounds & API Testing](#ai-playgrounds--api-testing)
- [Web Scraping & Data Extraction for AI](#web-scraping--data-extraction-for-ai)
- [AI Knowledge Management](#ai-knowledge-management)
- [Benchmarks & Leaderboards](#benchmarks--leaderboards)
- [Learning Resources](#learning-resources)
- [Related Awesome Lists](#related-awesome-lists)

---

## LLM API Providers

- [OpenAI API](https://platform.openai.com/) - Industry-leading LLM API offering GPT-4o and o-series reasoning models with tool use, vision, and multimodal capabilities.
- [Anthropic Claude API](https://www.anthropic.com/api) - Safety-focused LLM API providing Claude model family with 200K context windows, vision, and agentic capabilities.
- [Google Gemini API](https://ai.google.dev/) - Google's multimodal AI API with Gemini models featuring 1M+ token context, search integration, and cloud ecosystem support.
- [Mistral AI API](https://mistral.ai/) - European AI lab offering open-weight and commercial models with Apache 2.0 licensing and competitive pricing.
- [DeepSeek API](https://platform.deepseek.com/) - Ultra-low-cost LLM API offering DeepSeek V3 and R1 reasoning models at a fraction of competitor pricing with 128K context.
- [Cohere API](https://cohere.com/) - Enterprise-focused LLM API with Command R+ models optimized for RAG, multilingual support, and enterprise deployment.
- [AI21 Labs API](https://www.ai21.com/) - Provides Jamba models and Maestro AI orchestration system for enterprise NLP tasks with strong multilingual capabilities.
- [xAI Grok API](https://x.ai/) - xAI's Grok models available via API with competitive pricing, image generation, and video generation capabilities.
- [Inflection AI](https://inflection.ai/) - Creators of Pi, offering enterprise AI solutions and API access with a focus on empathetic and helpful interactions.
- [Reka AI](https://www.reka.ai/) - Multimodal AI models with capabilities across text, images, and video understanding via API.

<p align="right">(<a href="#contents">back to top</a>)</p>

## Open Source LLM Models

- [Llama 4 (Meta)](https://ai.meta.com/llama/) - Meta's open-source models with Scout (17B active/109B experts) and Maverick variants, 128K context, and strong general performance.
- [Qwen 3 (Alibaba)](https://qwenlm.github.io/) - Alibaba's MoE model family (up to 235B parameters) excelling in multilingual and reasoning tasks with open weights.
- [DeepSeek V3](https://github.com/deepseek-ai/DeepSeek-V3) ![GitHub stars](https://img.shields.io/github/stars/deepseek-ai/DeepSeek-V3?style=flat-square&label=⭐) - 671B parameter MoE model (MIT license) matching frontier models on benchmarks at a fraction of the cost.
- [DeepSeek R1](https://github.com/deepseek-ai/DeepSeek-R1) ![GitHub stars](https://img.shields.io/github/stars/deepseek-ai/DeepSeek-R1?style=flat-square&label=⭐) - Open-source reasoning model trained via large-scale RL achieving o1-level performance (MIT license).
- [Mistral Large / Mixtral](https://mistral.ai/) - Mistral's model family including Mixtral MoE and Small 3 (24B) punching above their weight in efficiency.
- [Gemma 3 (Google)](https://ai.google.dev/gemma) - Google's open-weight model family available in multiple sizes with strong performance for its parameter count.
- [Phi-4 (Microsoft)](https://azure.microsoft.com/en-us/products/phi/) - Microsoft's small language model built on synthetic datasets achieving state-of-the-art performance for its size.
- [Command R+ (Cohere)](https://cohere.com/) - Open-weight model optimized for RAG and enterprise use with strong multilingual capabilities.
- [Yi (01.AI)](https://www.01.ai/) - 01.AI's bilingual (Chinese-English) models with strong performance in independent benchmarks.
- [StarCoder2](https://github.com/bigcode-project/starcoder2) ![GitHub stars](https://img.shields.io/github/stars/bigcode-project/starcoder2?style=flat-square&label=⭐) - Open-source code LLM in 3B/7B/15B sizes where the 15B matches 33B+ models on code evaluations.
- [OLMo (Allen AI)](https://allenai.org/olmo) - Fully open-source LLM with training data, code, and weights all publicly available for reproducible research.
- [DBRX (Databricks)](https://www.databricks.com/blog/introducing-dbrx-new-state-art-open-llm) - Open-source MoE model with 132B total / 36B active parameters for enterprise use cases.

<p align="right">(<a href="#contents">back to top</a>)</p>

## AI Reasoning Models

- [OpenAI o3 / o4-mini](https://platform.openai.com/) - OpenAI's reasoning models using chain-of-thought processing with inference-time compute scaling for complex problems.
- [DeepSeek R1](https://platform.deepseek.com/) - Open-source reasoning model achieving o1-level performance at 5-10x lower cost ($0.55/$2.19 per 1M tokens).
- [Anthropic Claude (Extended Thinking)](https://docs.anthropic.com/en/docs/build-with-claude/extended-thinking) - Claude's hybrid reasoning mode producing instant or deep-thinking responses without switching models.
- [Google Gemini 2.5 Pro (Thinking)](https://ai.google.dev/) - Gemini's reasoning-enhanced model with built-in thinking capabilities for multi-step problem solving.
- [QwQ (Qwen with Questions)](https://qwenlm.github.io/) - Alibaba's reasoning model in the Qwen family with strong math and coding chain-of-thought capabilities.

<p align="right">(<a href="#contents">back to top</a>)</p>

## Open-Source Model Hosting & Inference

- [Together AI](https://www.together.ai/) - High-performance inference platform for 200+ open-source LLMs with sub-100ms latency, fine-tuning, and horizontal scaling.
- [Fireworks AI](https://fireworks.ai/) - Optimized inference platform focused on low latency for open-weight models including DeepSeek, Llama, and Qwen.
- [Groq](https://groq.com/) - Purpose-built LPU (Language Processing Unit) hardware delivering ultra-fast inference with extremely low latency.
- [Cerebras](https://cerebras.ai/) - Wafer-scale AI chip architecture enabling exceptionally fast inference by eliminating GPU communication bottlenecks.
- [SambaNova](https://sambanova.ai/) - Enterprise AI inference platform with OpenAI-compatible API and ultra-low latency.
- [Replicate](https://replicate.com/) - Run and deploy open-source models via API with simple scaling, supporting image, video, audio, and text models.
- [Modal](https://modal.com/) - Serverless cloud platform for running AI models with pay-per-use pricing and infrastructure control.
- [Baseten](https://www.baseten.co/) - Inference platform for deploying and serving ML models with infrastructure control and optimized performance.
- [DeepInfra](https://deepinfra.com/) - Cost-effective inference API for running large AI models with managed servers, GPUs, and auto-scaling.
- [Lepton AI](https://www.lepton.ai/) - Pythonic framework for building and deploying AI services with cloud-native inference and GPU infrastructure.
- [fal.ai](https://fal.ai/) - Fast inference API aggregator with 600+ models, competitive pricing, and optimized for generative media.
- [Novita AI](https://novita.ai/) - Inference platform offering affordable access to open-source models for text, image, and audio generation.

<p align="right">(<a href="#contents">back to top</a>)</p>

## LLM API Routers & Gateways

- [OpenRouter](https://openrouter.ai/) - Unified API for 100+ LLMs from multiple providers with simple integration and transparent pricing comparison.
- [LiteLLM](https://github.com/BerriAI/litellm) ![GitHub stars](https://img.shields.io/github/stars/BerriAI/litellm?style=flat-square&label=⭐) - Open-source proxy/gateway providing a unified API to call 100+ LLMs with load balancing, fallbacks, and spend tracking.
- [Martian](https://withmartian.com/) - AI-powered LLM router that automatically selects the best model for each request using Model Mapping technology.
- [Portkey](https://portkey.ai/) - Enterprise AI gateway with load balancing, caching, fallbacks, and observability.
- [Helicone](https://www.helicone.ai/) - Open-source, Rust-based AI gateway with sophisticated load balancing, native observability, and cost tracking.

<p align="right">(<a href="#contents">back to top</a>)</p>

## Cloud AI Platforms (Managed)

- [AWS Bedrock](https://aws.amazon.com/bedrock/) - Fully managed multi-vendor model marketplace with AgentCore, supporting Anthropic, Meta, Cohere, and Amazon models.
- [Azure AI Foundry](https://azure.microsoft.com/en-us/products/ai-foundry) - Microsoft's enterprise AI platform with GPT-4/5 access, 11,000+ models, and deep Azure integration.
- [Google Vertex AI](https://cloud.google.com/vertex-ai) - Unified ML platform with Gemini family, Model Garden for 3rd-party/OSS models, and data-driven MLOps.
- [AWS SageMaker](https://aws.amazon.com/sagemaker/) - End-to-end ML platform for building, training, and deploying models with managed infrastructure.
- [Azure Machine Learning](https://azure.microsoft.com/en-us/products/machine-learning) - Enterprise ML platform with automated ML, responsible AI dashboard, and managed endpoints.
- [Databricks](https://www.databricks.com/) - Unified analytics and AI platform with managed MLflow, Unity Catalog, and Mosaic AI.
- [IBM watsonx](https://www.ibm.com/watsonx) - Enterprise AI platform with foundation models, model training, and AI governance for business workflows.

<p align="right">(<a href="#contents">back to top</a>)</p>

## AI Agent Frameworks

- [LangChain](https://www.langchain.com/) - Most popular LLM application framework with extensive integrations for chains, agents, and retrieval.
- [LangGraph](https://www.langchain.com/langgraph) - Extension of LangChain enabling cyclical graphs for agent runtimes with state management and human-in-the-loop.
- [LlamaIndex](https://www.llamaindex.ai/) - Best-in-class RAG framework with 100+ data connectors and purpose-built retrieval infrastructure.
- [CrewAI](https://www.crewai.com/) - Fastest-growing framework for collaborative, role-based multi-agent systems with structured task delegation.
- [Microsoft AutoGen](https://microsoft.github.io/autogen/) - Multi-agent conversation framework merging with Semantic Kernel into unified Microsoft Agent Framework.
- [Microsoft Semantic Kernel](https://learn.microsoft.com/semantic-kernel/) - Enterprise SDK for LLM integration with deep Azure ecosystem support across C#, Python, and Java.
- [DSPy](https://dspy.ai/) - Declarative framework for programming (not prompting) language models with automatic prompt optimization.
- [Haystack](https://haystack.deepset.ai/) - Open-source AI orchestration framework for building production-ready LLM applications with modular pipelines.
- [Instructor](https://github.com/jxnl/instructor) ![GitHub stars](https://img.shields.io/github/stars/jxnl/instructor?style=flat-square&label=⭐) - Library for structured output extraction from LLMs using Pydantic models with validation and retry logic.
- [Pydantic AI](https://ai.pydantic.dev/) - Agent framework from the Pydantic team for building production-grade AI applications with type-safe structured outputs.
- [OpenAI Agents SDK](https://github.com/openai/openai-agents-python) ![GitHub stars](https://img.shields.io/github/stars/openai/openai-agents-python?style=flat-square&label=⭐) - OpenAI's official framework for building agentic workflows with tool use, handoffs, and guardrails.
- [Google ADK (Agent Development Kit)](https://google.github.io/adk-docs/) - Google's framework for building AI agents with native Gemini integration and multi-agent orchestration.
- [Smolagents](https://github.com/huggingface/smolagents) ![GitHub stars](https://img.shields.io/github/stars/huggingface/smolagents?style=flat-square&label=⭐) - Hugging Face's lightweight agent framework for building simple, effective AI agents with minimal boilerplate.
- [CopilotKit](https://www.copilotkit.ai/) - Open-source framework for building AI copilots into React applications with AG-UI protocol support.

<p align="right">(<a href="#contents">back to top</a>)</p>

## AI Memory & Context Management

- [Mem0](https://mem0.ai/) - Dedicated memory layer for AI agents extracting and managing memories across sessions with up to 80% token reduction.
- [Zep](https://www.getzep.com/) - Temporal knowledge graph memory for AI assistants tracking how facts change over time with structured business data.
- [Letta (MemGPT)](https://www.letta.com/) - Agent framework with first-class memory management exposing editable memory blocks and stateful runtime.
- [Cognee](https://www.cognee.ai/) - Open-source AI memory engine finding hidden connections in data using knowledge graphs with semantic embeddings.
- [LangMem](https://github.com/langchain-ai/langmem) ![GitHub stars](https://img.shields.io/github/stars/langchain-ai/langmem?style=flat-square&label=⭐) - Memory tools for LangGraph agents extracting information from conversations and maintaining long-term context.
- [Supermemory](https://supermemory.ai/) - Universal memory API for AI apps with time-annotated semantic traces and scalable semantic recall.
- [Graphlit](https://www.graphlit.com/) - Semantic content infrastructure for agents with multimodal ingestion linked to a shared knowledge graph.

<p align="right">(<a href="#contents">back to top</a>)</p>

## Structured Output & Data Extraction

- [Instructor](https://github.com/jxnl/instructor) ![GitHub stars](https://img.shields.io/github/stars/jxnl/instructor?style=flat-square&label=⭐) - Library for structured output extraction from LLMs using Pydantic models with validation and retry logic.
- [BAML](https://github.com/BoundaryML/baml) ![GitHub stars](https://img.shields.io/github/stars/BoundaryML/baml?style=flat-square&label=⭐) - Domain-specific language for writing and testing LLM functions that generate structured outputs with type-safe validation.
- [Marvin](https://github.com/prefecthq/marvin) ![GitHub stars](https://img.shields.io/github/stars/prefecthq/marvin?style=flat-square&label=⭐) - Lightweight Python library for building reliable natural language interfaces that extract structured data from LLMs.
- [Outlines](https://github.com/dottxt-org/outlines) ![GitHub stars](https://img.shields.io/github/stars/dottxt-org/outlines?style=flat-square&label=⭐) - Python library for constrained text generation using regular expressions, JSON schemas, and context-free grammars.
- [Guidance](https://github.com/guidance-ai/guidance) ![GitHub stars](https://img.shields.io/github/stars/guidance-ai/guidance?style=flat-square&label=⭐) - Microsoft's language for controlling LLMs with interleaving generation, prompting, and logical control.
- [SGLang](https://github.com/sgl-project/sglang) ![GitHub stars](https://img.shields.io/github/stars/sgl-project/sglang?style=flat-square&label=⭐) - Fast serving framework for LLMs with built-in structured output support via JSON schema, regex, and EBNF.
- [TypeChat](https://github.com/microsoft/TypeChat) ![GitHub stars](https://img.shields.io/github/stars/microsoft/TypeChat?style=flat-square&label=⭐) - Microsoft's library that uses TypeScript types to guide LLM outputs into well-typed structured responses.
- [JSONFormer](https://github.com/1rgs/jsonformer) ![GitHub stars](https://img.shields.io/github/stars/1rgs/jsonformer?style=flat-square&label=⭐) - Library for generating structured JSON from LLMs by constraining generation to only produce valid JSON tokens.
- [LlamaParse](https://www.llamaindex.ai/llamaparse) - Enterprise document parsing platform with agentic OCR that extracts structured data from complex documents.
- [Docling](https://github.com/docling-project/docling) ![GitHub stars](https://img.shields.io/github/stars/docling-project/docling?style=flat-square&label=⭐) - IBM's open-source document parser with 97.9% accuracy on complex table extraction.

<p align="right">(<a href="#contents">back to top</a>)</p>

## AI Code Assistants

- [GitHub Copilot](https://github.com/features/copilot) - Leading AI code assistant with 20M+ users, deep IDE integration, agent mode, and enterprise features.
- [Cursor](https://cursor.com/) - AI-native IDE built on VS Code with deep codebase understanding, multi-file editing, and Composer agent.
- [Windsurf (Codeium)](https://codeium.com/) - Agentic IDE with Cascade flow combining deep context awareness with autonomous code generation and free tier.
- [Claude Code](https://docs.anthropic.com/en/docs/claude-code) - Anthropic's terminal-based agentic coding tool excelling at reasoning, complex multi-file refactoring, and autonomous workflows.
- [Tabnine](https://www.tabnine.com/) - Privacy-first AI code assistant with multi-model support and code trained only on permissive licenses.
- [Amazon Q Developer](https://aws.amazon.com/q/developer/) - AWS's AI coding assistant with autonomous agents, AWS resource management, and console diagnostics.
- [Sourcegraph Cody](https://sourcegraph.com/cody) - AI coding assistant with search-first architecture for analyzing entire multi-repo environments.
- [Continue.dev](https://continue.dev/) - Open-source AI code assistant supporting any LLM and deep IDE customization.
- [Aider](https://aider.chat/) - Free, open-source terminal-based AI pair programming tool for command-line workflows and automation.
- [Qodo (formerly CodiumAI)](https://www.qodo.ai/) - AI-powered code testing and review tool focused on generating meaningful test suites.
- [JetBrains AI](https://www.jetbrains.com/ai/) - AI assistant integrated natively into JetBrains IDEs with code completion and context-aware suggestions.
- [Google Gemini Code Assist](https://cloud.google.com/gemini/docs/codeassist/overview) - Google's AI coding assistant powered by Gemini models with Google Cloud integration.

<p align="right">(<a href="#contents">back to top</a>)</p>

## AI Image Generation APIs

- [OpenAI DALL-E API](https://platform.openai.com/docs/guides/images) - Text-to-image generation API with strong prompt understanding and seamless GPT integration.
- [Stability AI API](https://platform.stability.ai/) - API for Stable Diffusion 3.5 and SDXL models offering open-source image generation with fine-grained control.
- [Black Forest Labs (FLUX)](https://bfl.ai/) - Creators of FLUX models offering FLUX.2 and Kontext APIs with state-of-the-art photorealism and typography.
- [Ideogram API](https://ideogram.ai/) - AI image generation API specializing in accurate text rendering, ideal for logos, posters, and branded content.
- [Recraft API](https://www.recraft.ai/) - Image generation API excelling at vector outputs (icons, logos) alongside raster images with style controls.
- [Leonardo AI API](https://leonardo.ai/) - AI image generation platform with presets optimized for game art, textures, and product visuals.
- [Google Imagen API](https://cloud.google.com/vertex-ai/generative-ai/docs/image/overview) - Google's image generation API via Vertex AI with Imagen 3/4 models featuring studio-quality outputs.
- [Midjourney](https://www.midjourney.com/) - Leading AI image generator for artistic and aesthetic outputs, accessible via Discord bot.

<p align="right">(<a href="#contents">back to top</a>)</p>

## AI Video Generation APIs

- [Runway API](https://runwayml.com/) - Professional AI video generation with Gen-4.5 offering cinematic quality, motion brushes, and scene consistency.
- [Pika API](https://pika.art/) - AI video generation with PikaSwaps, Pikaffects, and fast rendering optimized for social media.
- [Luma AI (Dream Machine)](https://lumalabs.ai/) - Hi-Fi 4K HDR video generation with Ray3 engine and superior physics simulation.
- [Kling AI](https://klingai.com/) - Kuaishou's AI video generator producing up to 2-minute videos at 1080p with simultaneous audio-visual generation.
- [OpenAI Sora](https://openai.com/sora) - OpenAI's text-to-video model generating cinematic-quality videos with realistic physics.
- [Synthesia API](https://www.synthesia.io/) - Enterprise AI avatar video platform with 230+ avatars, 140+ languages, and Express-2 engine.
- [HeyGen API](https://www.heygen.com/) - AI video platform specializing in realistic language dubbing with voice cloning and lip-sync.
- [D-ID API](https://www.d-id.com/api/) - Generative AI API for creating talking-head videos from images and audio, supporting 120+ languages.
- [Google Veo API](https://deepmind.google/technologies/veo/) - Google's video generation model with native audio integration and high-fidelity output via Vertex AI.
- [Twelve Labs](https://twelvelabs.io/) - Multimodal video understanding API enabling search, classification, and generation from video content.

<p align="right">(<a href="#contents">back to top</a>)</p>

## AI Audio & Speech APIs

- [ElevenLabs API](https://elevenlabs.io/) - Industry-leading voice AI with 3,000+ voices, 70+ languages, emotional nuance, and voice cloning.
- [OpenAI Audio API](https://platform.openai.com/docs/guides/audio) - TTS and STT APIs including gpt-4o-transcribe models and Whisper for 50+ language transcription.
- [Deepgram API](https://deepgram.com/) - Lightning-fast speech-to-text and TTS (Aura-2) optimized for conversational AI with sub-250ms latency.
- [AssemblyAI API](https://www.assemblyai.com/) - Speech-to-text API with speaker diarization, sentiment analysis, and content moderation.
- [Cartesia API](https://cartesia.ai/) - Ultra-low-latency voice generation API (<150ms) with rapid voice cloning for interactive applications.
- [Play.ht API](https://play.ht/) - Text-to-speech platform with 900+ voices across 140+ languages and accents.
- [Resemble AI API](https://www.resemble.ai/) - Enterprise voice AI with expressive speech synthesis, voice cloning, and deepfake detection.
- [Speechify API](https://speechify.com/) - Apple Design Award winner with 1,000+ natural-sounding voices in 60+ languages.
- [OpenAI Realtime API](https://platform.openai.com/docs/guides/realtime) - Speech-to-speech API for building real-time voice applications with low latency.

<p align="right">(<a href="#contents">back to top</a>)</p>

## AI Search APIs

- [Perplexity Sonar API](https://docs.perplexity.ai/) - LLM-powered search API providing direct answers with cited sources for web-connected AI applications.
- [Tavily API](https://tavily.com/) - AI-optimized search API built for agents and RAG workflows with SOC 2 certification.
- [Exa API](https://exa.ai/) - Semantic/neural search API scoring 94.9% on SimpleQA benchmarks, returning meaning-based results.
- [Brave Search API](https://brave.com/search/api/) - Independent search index with no tracking, privacy-focused web search.
- [SerpAPI](https://serpapi.com/) - Battle-tested SERP scraping API for AI features, SEO tools, and price monitoring across search engines.
- [You.com API](https://you.com/apis) - LLM-ready web search API with Deep Search, Express Agent, and MCP support.
- [Serper API](https://serper.dev/) - Fast, affordable Google SERP API for high-volume use cases in AI applications.
- [WebSearch API](https://websearchapi.ai/) - AI-focused web search API designed for integration into AI workflows.

<p align="right">(<a href="#contents">back to top</a>)</p>

## AI Translation APIs

- [DeepL API](https://www.deepl.com/pro-api) - Industry-leading neural machine translation known for natural, polished translations especially for European languages.
- [Google Cloud Translation](https://cloud.google.com/translate) - Neural machine translation API supporting 130+ languages with AutoML custom model training.
- [Microsoft Translator](https://azure.microsoft.com/en-us/products/ai-services/ai-translator) - Azure NMT supporting 100+ languages with custom translation models and document translation.
- [Amazon Translate](https://aws.amazon.com/translate/) - AWS neural machine translation service with real-time and batch translation integrated into the AWS ecosystem.
- [ModernMT](https://www.modernmt.com/) - Adaptive neural machine translation engine that learns from human corrections in real-time.
- [Unbabel](https://unbabel.com/) - Language operations platform blending AI translation with human editors for enterprise content.
- [LILT](https://lilt.com/) - Enterprise localization platform using adaptive neural models with human-in-the-loop workflow.
- [Phrase](https://phrase.com/) - Developer-friendly localization platform with extensive APIs and CLI tools for custom pipelines.
- [Lokalise](https://lokalise.com/) - AI-powered localization platform supporting 400+ languages with tone, style, and industry customization.
- [Tolgee](https://tolgee.io/) - Open-source localization platform with in-context translating features, popular with JavaScript developers.

<p align="right">(<a href="#contents">back to top</a>)</p>

## AI Writing & Content APIs

- [Jasper API](https://www.jasper.ai/) - Enterprise AI content platform for marketing teams with brand voice, campaign management, and content generation.
- [Writer API](https://writer.com/) - Enterprise generative AI platform with full-stack content generation, brand governance, and custom model training.
- [Copy.ai](https://www.copy.ai/) - AI-powered content generation platform for marketing copy, sales emails, and Go-To-Market workflows.
- [Writesonic](https://writesonic.com/) - AI writing platform with fact-checked, SEO-friendly article generation pulling real-time data from Google.
- [Surfer SEO](https://surferseo.com/) - AI-powered SEO content optimization platform with SERP analysis and real-time content scoring.
- [Frase](https://www.frase.io/) - AI content optimization tool analyzing SERPs in real-time with AI-driven content suggestions for SEO.
- [Grammarly API](https://developer.grammarly.com/) - AI writing assistant API with grammar, tone, clarity, and brand-voice checking for integration into applications.
- [Anyword](https://anyword.com/) - AI writing platform with predictive performance scoring that forecasts content performance before publishing.
- [Wordtune](https://www.wordtune.com/) - AI rewriting and paraphrasing tool by AI21 Labs for improving clarity, tone, and conciseness.

<p align="right">(<a href="#contents">back to top</a>)</p>

## Vector Databases & Embeddings

### Vector Databases

- [Pinecone](https://www.pinecone.io/) - Fully managed vector database with serverless architecture and support for billions of vectors.
- [Weaviate](https://weaviate.io/) - Open-source vector database excelling at hybrid search (vector + keyword) with GraphQL API.
- [Qdrant](https://qdrant.tech/) - Open-source vector database with high QPS at 99% recall and production-proven performance at scale.
- [Chroma](https://www.trychroma.com/) - Developer-friendly open-source embedding database, ideal for prototyping RAG systems.
- [Milvus](https://milvus.io/) - Open-source vector database leading in low latency benchmarks with support for billions of vectors.
- [Zilliz Cloud](https://zilliz.com/) - Fully managed cloud service for Milvus with enterprise features and production SLAs.
- [pgvector](https://github.com/pgvector/pgvector) ![GitHub stars](https://img.shields.io/github/stars/pgvector/pgvector?style=flat-square&label=⭐) - Open-source PostgreSQL extension for vector similarity search, keeping vectors and relational data together.
- [LanceDB](https://lancedb.com/) - Open-source, serverless vector database built on Lance columnar format with zero-copy access.

### Embedding APIs

- [OpenAI Embeddings API](https://platform.openai.com/docs/guides/embeddings) - Text embedding API with ada-002 and newer models for semantic search, clustering, and classification.
- [Voyage AI API](https://www.voyageai.com/) - State-of-the-art embedding API with Voyage 4 series featuring shared embedding spaces and domain-specific models.
- [Cohere Embed API](https://cohere.com/embed) - Multilingual embedding API optimized for search and retrieval with Embed v3.
- [Google Embedding API](https://cloud.google.com/vertex-ai/generative-ai/docs/embeddings) - Text and multimodal embeddings via Vertex AI with Gecko and newer embedding models.
- [Jina AI Embeddings](https://jina.ai/) - Open-source and API-based embedding models with multilingual support and reranking capabilities.

<p align="right">(<a href="#contents">back to top</a>)</p>

## RAG Tools & Frameworks

- [LlamaIndex](https://www.llamaindex.ai/) - Comprehensive RAG framework with 100+ data connectors, advanced retrieval strategies, and production-ready pipelines.
- [Unstructured](https://unstructured.io/) - Document ingestion and parsing platform for converting PDFs, images, HTML, and Word docs into structured data.
- [Vectara](https://vectara.com/) - End-to-end RAG-as-a-service platform with built-in semantic search, summarization, and hallucination detection.
- [Ragas](https://docs.ragas.io/) - Framework for reference-free evaluation of RAG pipelines with metrics for context relevance and groundedness.
- [LangChain Retrievers](https://python.langchain.com/docs/modules/data_connection/) - Modular retrieval components supporting vector stores, multi-query, and contextual compression.
- [Cohere Rerank](https://cohere.com/rerank) - Neural reranking API that improves search relevance by reordering results based on semantic similarity.
- [Morphik](https://www.morphik.ai/) - Open-source RAG infrastructure for building and deploying retrieval-augmented generation systems.

<p align="right">(<a href="#contents">back to top</a>)</p>

## AI Document Processing & OCR

- [Azure Document Intelligence](https://azure.microsoft.com/en-us/products/ai-services/document-intelligence) - Microsoft's AI document processing extracting structure, relationships, and key-values from documents.
- [Google Document AI](https://cloud.google.com/document-ai) - Google's OCR and document understanding platform with pre-trained models for invoices, receipts, and custom documents.
- [Amazon Textract](https://aws.amazon.com/textract/) - AWS OCR service for extracting text, forms, and tables from documents integrated with S3 and Lambda.
- [Mistral OCR](https://mistral.ai/news/mistral-ocr) - Mistral's document understanding API processing 1000 pages/$ with state-of-the-art accuracy.
- [LlamaParse](https://www.llamaindex.ai/llamaparse) - Enterprise document parsing with agentic OCR that extracts structured data from complex documents.
- [Docling](https://github.com/docling-project/docling) ![GitHub stars](https://img.shields.io/github/stars/docling-project/docling?style=flat-square&label=⭐) - IBM's open-source document parser with 97.9% accuracy on complex table extraction.
- [Mathpix](https://mathpix.com/) - OCR API specialized in recognizing mathematical equations, scientific documents, and LaTeX conversion.
- [Reducto](https://www.reducto.ai/) - API-first document parsing for extracting structured data from PDFs and documents for RAG pipelines.
- [Mindee](https://www.mindee.com/) - Developer-friendly OCR API with AI-powered extraction for invoices, receipts, IDs, and custom document types.

<p align="right">(<a href="#contents">back to top</a>)</p>

## AI Database & SQL Assistants

- [Vanna.ai](https://vanna.ai/) - Self-hosted AI SQL agent transforming natural language into database insights with personalized schema training.
- [Defog.ai](https://defog.ai/) - Open-source text-to-SQL engine achieving 90-95% accuracy, matching GPT-4 on specialized benchmarks.
- [Text2SQL.ai](https://www.text2sql.ai/) - AI-powered tool converting natural language questions to SQL queries with multiple dialect support.
- [DBHub](https://dbhub.ai/) - Universal database MCP server enabling AI assistants like Claude and Cursor to have text-to-SQL capability.
- [Outerbase](https://www.outerbase.com/) - Database interaction platform combining spreadsheet-like views with EZQL natural language agent.
- [SQL Chat](https://www.sqlchat.ai/) - Chat-based SQL client using natural language to communicate with databases.
- [BlazeSQL](https://www.blazesql.com/) - AI data analyst generating precise SQL queries from natural language by parsing schema metadata.
- [DataGPT](https://datagpt.com/) - Slack-native AI analytics tool answering business questions in natural language with raw SQL transparency.

<p align="right">(<a href="#contents">back to top</a>)</p>

## LLM Evaluation & Monitoring

- [LangSmith](https://smith.langchain.com/) - LangChain's evaluation and monitoring platform with tracing, prompt testing, and RAG assessment.
- [Langfuse](https://langfuse.com/) - Open-source LLM engineering platform for tracing, prompt management, evaluations, and observability.
- [Braintrust](https://www.braintrust.dev/) - Evaluation-first platform for systematic prompt experimentation with side-by-side comparison.
- [Arize AI](https://arize.com/) - Enterprise LLM observability with Phoenix open-source tracing and production monitoring.
- [Promptfoo](https://promptfoo.dev/) - Open-source toolkit for prompt engineering, A/B testing, and LLM-as-a-judge evaluations.
- [Humanloop](https://humanloop.com/) - Prompt management and evaluation platform with human feedback loops.
- [WhyLabs](https://whylabs.ai/) - Data and model health monitoring detecting anomalies, drift, hallucinations, and bias in production systems.
- [Galileo AI](https://galileo.ai/) - LLM evaluation platform with Luna-2 models and real-time guardrail system for agent actions.
- [TruLens](https://www.trulens.org/) - Open-source library for evaluating and tracing AI agents and RAG systems with OpenTelemetry tracing.
- [Maxim AI](https://www.getmaxim.ai/) - AI evaluation and observability platform for testing, monitoring, and optimizing LLM systems.
- [Evidently AI](https://www.evidentlyai.com/) - Open-source ML monitoring platform for detecting data drift and model performance degradation.
- [Fiddler AI](https://www.fiddler.ai/) - Enterprise AI observability focused on explainability, fairness, and compliance for ML and LLM models.

<p align="right">(<a href="#contents">back to top</a>)</p>

## AI Gateway & Cost Management

- [Helicone](https://www.helicone.ai/) - Open-source AI gateway and observability platform with request logging, cost tracking, and Rust-based performance.
- [Portkey](https://portkey.ai/) - Enterprise AI gateway with unified API, load balancing, caching, semantic caching, and multi-provider fallbacks.
- [Keywords AI](https://keywordsai.co/) - LLM monitoring and cost management platform for tracking usage, latency, and spend across providers.
- [Lunary](https://lunary.ai/) - Open-source LLM monitoring and analytics platform with cost tracking and prompt management.
- [OpenRouter](https://openrouter.ai/) - Unified API marketplace for 100+ LLMs with transparent pricing and automatic cost optimization.

<p align="right">(<a href="#contents">back to top</a>)</p>

## Prompt Engineering & Management

- [Langfuse](https://langfuse.com/) - Open-source prompt management with versioning, tracing, evaluations, and observability.
- [PromptLayer](https://promptlayer.com/) - Prompt management platform with logging, versioning, visual editing, and regression testing.
- [Agenta](https://agenta.ai/) - Open-source LLMOps platform for prompt management, evaluation, and A/B testing.
- [Pezzo](https://www.pezzo.ai/) - Lightweight, open-source prompt management tool for versioning, testing, and instant deployment.
- [Promptfoo](https://promptfoo.dev/) - Open-source CLI for prompt testing, evaluation, and red-teaming with YAML-based configuration.
- [Maxim AI](https://www.getmaxim.ai/) - Prompt management and evaluation platform with testing workflows and version control.

<p align="right">(<a href="#contents">back to top</a>)</p>

## Fine-Tuning Platforms

- [OpenAI Fine-Tuning](https://platform.openai.com/docs/guides/fine-tuning) - Managed fine-tuning for GPT models with reinforcement fine-tuning preview.
- [Together AI Fine-Tuning](https://www.together.ai/) - Cloud-based fine-tuning for open-source models with LoRA adapter support.
- [Predibase](https://predibase.com/) - Low-code fine-tuning and hosting platform with LoRAX multi-adapter serving and serverless deployment.
- [LoRAX](https://github.com/predibase/lorax) ![GitHub stars](https://img.shields.io/github/stars/predibase/lorax?style=flat-square&label=⭐) - Open-source framework for serving 100s of fine-tuned LoRA adapters on a single GPU.
- [Modal Fine-Tuning](https://modal.com/) - Serverless GPU compute for fine-tuning with pay-per-use pricing and zero idle costs.
- [Lambda Cloud](https://lambdalabs.com/) - GPU cloud optimized for AI training with zero egress fees and InfiniBand networking.
- [Anyscale](https://www.anyscale.com/) - Scalable platform built on Ray for distributed fine-tuning and serving of open-source LLMs.

<p align="right">(<a href="#contents">back to top</a>)</p>

## AI Safety & Guardrails

- [Guardrails AI](https://www.guardrailsai.com/) - Open-source framework for LLM output validation with pre-built validators from Guardrails Hub.
- [NVIDIA NeMo Guardrails](https://github.com/NVIDIA/NeMo-Guardrails) ![GitHub stars](https://img.shields.io/github/stars/NVIDIA/NeMo-Guardrails?style=flat-square&label=⭐) - Open-source toolkit for adding programmable safety guardrails using a domain-specific language.
- [Lakera Guard](https://www.lakera.ai/) - Real-time prompt injection detection API with customizable safeguards and monitoring dashboards.
- [LLM Guard](https://llm-guard.com/) - Open-source toolkit for securing LLM interactions with scanners for prompt injection, PII, and toxicity.
- [Rebuff](https://github.com/protectai/rebuff) ![GitHub stars](https://img.shields.io/github/stars/protectai/rebuff?style=flat-square&label=⭐) - Self-hardening prompt injection detector that learns from attack attempts over time.
- [Azure AI Content Safety](https://azure.microsoft.com/en-us/products/ai-services/ai-content-safety) - Microsoft's API for detecting harmful content in text and images with configurable severity levels.

<p align="right">(<a href="#contents">back to top</a>)</p>

## AI Compliance & Governance

- [Credo AI](https://www.credo.ai/) - Enterprise AI governance platform for compliance automation with EU AI Act, NIST AI RMF, and ISO 42001.
- [Holistic AI](https://www.holisticai.com/) - End-to-end AI lifecycle governance assessing models for safety, fairness, bias, and regulatory alignment.
- [IBM watsonx.governance](https://www.ibm.com/products/watsonx-governance) - Enterprise AI governance toolkit for model lifecycle management, bias detection, and compliance tracking.
- [Zenity](https://zenity.io/) - AI agent compliance platform detecting risks, enforcing guardrails, and automating regulatory reporting.
- [Fairly AI](https://fairly.ai/) - AI risk management platform for financial services with model validation, bias detection, and compliance.
- [Drata](https://drata.com/) - Compliance automation platform with AI-powered controls monitoring for SOC 2, ISO 27001, and AI regulations.
- [Securiti AI](https://securiti.ai/) - Data command center with AI governance capabilities including data privacy and consent management.

<p align="right">(<a href="#contents">back to top</a>)</p>

## MLOps & Deployment

- [MLflow](https://mlflow.org/) - Open-source platform for ML experiment tracking, model registry, and deployment; MLflow 3 adds GenAI ops support.
- [BentoML](https://www.bentoml.com/) - Open-source framework for building, shipping, and scaling AI model serving with high-performance inference.
- [KServe](https://kserve.github.io/website/) - Kubernetes-native model inference platform providing serverless ML model serving with autoscaling.
- [ZenML](https://www.zenml.io/) - Open-source MLOps framework for building portable, production-ready ML pipelines across any infrastructure.
- [Metaflow](https://metaflow.org/) - Netflix-originated framework for building and managing real-life ML workflows with deep AWS integration.
- [NVIDIA Triton Inference Server](https://developer.nvidia.com/triton-inference-server) - High-performance inference serving for GPUs supporting multiple ML frameworks and model formats.
- [DVC (Data Version Control)](https://dvc.org/) - Open-source version control system for ML projects handling data, models, and experiments alongside Git.
- [Kubeflow](https://www.kubeflow.org/) - Google-backed open-source ML toolkit for Kubernetes with pipeline orchestration and LLM fine-tuning.
- [Seldon Core](https://www.seldon.io/) - Open-source platform for serving ML models at scale with A/B testing and canary rollouts.
- [Weights & Biases](https://wandb.ai/) - ML experiment tracking, model management, and dataset versioning platform for the full ML lifecycle.
- [Neptune.ai](https://neptune.ai/) - Experiment tracking and model registry for ML teams to log, compare, and collaborate on model development.
- [Comet ML](https://www.comet.com/) - ML experiment management platform with real-time tracking, model comparison, and production monitoring.

<p align="right">(<a href="#contents">back to top</a>)</p>

## AI Workflow & Automation

- [n8n](https://n8n.io/) - Open-source workflow automation tool with AI agent nodes for building LLM-powered automation workflows.
- [Zapier AI](https://zapier.com/) - AI-enhanced automation connecting 8,000+ apps with AI-powered workflows, agents, and chatbots.
- [Make (Integromat)](https://www.make.com/) - Visual automation platform with detailed branching logic and deep app integrations for complex workflows.
- [Lindy AI](https://www.lindy.ai/) - Agent-first AI automation platform for delegating tasks like lead qualification and email follow-ups.
- [Relevance AI](https://relevanceai.com/) - No-code platform for building AI agent teams that collaborate across complex multi-agent workflows.
- [Activepieces](https://www.activepieces.com/) - Open-source, MIT-licensed no-code automation tool with AI workflow integration and self-hosting.
- [Pipedream](https://pipedream.com/) - Developer-focused hybrid no-code/serverless platform for creating API workflows with code at any step.
- [Inngest](https://www.inngest.com/) - Durable functions platform replacing queues for reliable multi-step AI workflows.
- [Trigger.dev](https://trigger.dev/) - TypeScript-first platform for building and deploying fully-managed AI agents and background workflows.
- [Windmill](https://www.windmill.dev/) - Open-source workflow engine for building internal tools, background jobs, and AI pipelines.
- [Hatchet](https://hatchet.run/) - Open-source distributed task queue for building reliable background jobs and AI agent workflows.
- [Relay.app](https://www.relay.app/) - Human-in-the-loop AI automation platform combining AI steps with human approval workflows.

<p align="right">(<a href="#contents">back to top</a>)</p>

## AI Function Calling & Tool Use

- [Composio](https://composio.dev/) - Platform providing 150+ pre-built tool integrations for AI agents with authentication handling.
- [Toolhouse](https://toolhouse.ai/) - Universal tool server enabling any LLM to use tools via a simple API with pre-built and custom tools.
- [Arcade AI](https://www.arcade-ai.com/) - Tool-use infrastructure for AI agents providing authenticated API access to third-party services.
- [NPI (Natural Programming Interface)](https://www.npi.ai/) - Open-source platform providing tool-use APIs enabling AI agents to operate software tools.
- [Dify](https://dify.ai/) - Open-source platform (93K+ stars) for creating AI agents with built-in RAG, Function Calling, and ReAct strategies.

<p align="right">(<a href="#contents">back to top</a>)</p>

## AI Testing & QA

- [testRigor](https://testrigor.com/) - Generative AI test automation platform creating and maintaining tests from plain English descriptions.
- [Applitools](https://applitools.com/) - AI-powered visual testing using proprietary Visual AI to detect UI bugs across browsers and devices.
- [Testsigma](https://testsigma.com/) - Open-source test automation platform with AI-driven natural language test creation for web, mobile, and API.
- [Katalon](https://katalon.com/) - Comprehensive AI-powered test automation for web, mobile, API, and desktop testing.
- [mabl](https://www.mabl.com/) - Low-code, AI-driven test automation for continuous testing in Agile and DevOps workflows.
- [QA Wolf](https://www.qawolf.com/) - AI + human-in-the-loop QA service providing Playwright-based automated testing with massive parallelization.
- [Qodo](https://www.qodo.ai/) - AI-powered code testing tool focused on generating meaningful test suites and improving code quality.

<p align="right">(<a href="#contents">back to top</a>)</p>

## AI Synthetic Data Generation

- [Gretel](https://gretel.ai/) - Synthetic data platform with fine-tuning capabilities, privacy metrics, and domain-specific generation APIs.
- [Mostly AI](https://mostly.ai/) - Synthetic data platform transforming production data into privacy-safe versions for AI training.
- [Tonic.ai](https://www.tonic.ai/) - Suite including Tonic Fabricate (synthetic data), Structural (test data), and Textual (data redaction).
- [YData](https://ydata.ai/) - Platform combining automated data profiling with synthetic data generation for improving AI training quality.
- [Hazy](https://hazy.com/) - Privacy-preserving synthetic data for regulated industries using differential privacy and anonymization.
- [Synthesis AI](https://synthesis.ai/) - Synthetic data generation specialized in computer vision training with photorealistic 3D-rendered images.

<p align="right">(<a href="#contents">back to top</a>)</p>

## AI Data Labeling & Annotation

- [Scale AI](https://scale.ai/) - Enterprise data labeling platform with RLHF capabilities, used by major AI labs.
- [Labelbox](https://labelbox.com/) - End-to-end data platform with annotation, data management, and Model Foundry with HIPAA/SOC2 compliance.
- [Snorkel AI](https://snorkel.ai/) - Programmatic labeling platform using weak supervision to encode labeling logic as functions.
- [Argilla](https://argilla.io/) - Free, open-source data annotation platform for NLP, LLMs, and multimodal models with Hugging Face integration.
- [Label Studio](https://labelstud.io/) - Open-source data labeling tool with flexible templates, ML backends, and model-in-the-loop support.
- [Encord](https://encord.com/) - Data labeling platform for computer vision with active learning and model-assisted labeling.
- [CVAT](https://www.cvat.ai/) - Open-source annotation tool for computer vision including image and video labeling.

<p align="right">(<a href="#contents">back to top</a>)</p>

## MCP (Model Context Protocol)

### Core Protocol

- [Model Context Protocol Specification](https://modelcontextprotocol.io/) - Open standard by Anthropic (donated to Linux Foundation AAIF) for connecting AI models to external tools and data.
- [MCP TypeScript SDK](https://github.com/modelcontextprotocol/typescript-sdk) ![GitHub stars](https://img.shields.io/github/stars/modelcontextprotocol/typescript-sdk?style=flat-square&label=⭐) - Official TypeScript SDK for building MCP servers and clients.
- [MCP Python SDK](https://github.com/modelcontextprotocol/python-sdk) ![GitHub stars](https://img.shields.io/github/stars/modelcontextprotocol/python-sdk?style=flat-square&label=⭐) - Official Python SDK for building MCP servers and clients.
- [MCP Registry](https://registry.modelcontextprotocol.io/) - Open catalog for discovering MCP servers with ~2,000 entries and 407% growth since launch.

### Notable MCP Servers

- [MCP Servers Repository](https://github.com/modelcontextprotocol/servers) ![GitHub stars](https://img.shields.io/github/stars/modelcontextprotocol/servers?style=flat-square&label=⭐) - Official collection of reference MCP server implementations.
- [Awesome MCP Servers](https://github.com/punkpeye/awesome-mcp-servers) ![GitHub stars](https://img.shields.io/github/stars/punkpeye/awesome-mcp-servers?style=flat-square&label=⭐) - Community-curated collection covering 7,260+ servers across diverse integrations.
- [Playwright MCP](https://github.com/microsoft/playwright-mcp) ![GitHub stars](https://img.shields.io/github/stars/microsoft/playwright-mcp?style=flat-square&label=⭐) - Microsoft's MCP server enabling LLMs to interact with web pages through accessibility snapshots.
- [ActionKit by Paragon](https://www.useparagon.com/) - MCP server connecting to 130+ SaaS integrations for AI agent workflows.

<p align="right">(<a href="#contents">back to top</a>)</p>

## AI Developer Tools & SDKs

- [Vercel AI SDK](https://sdk.vercel.ai/) - TypeScript toolkit for building AI applications with React/Next.js, featuring composable agents and MCP support.
- [Streamlit](https://streamlit.io/) - Python framework for building data-heavy AI apps combining chat interfaces with dashboards.
- [Gradio](https://www.gradio.app/) - Python library for quickly creating ML demo UIs with instant public links.
- [Chainlit](https://chainlit.io/) - Python framework for building production conversational AI UIs with step-by-step visualization.
- [Langflow](https://www.langflow.org/) - Low-code Python-based AI builder for visually creating agentic and RAG applications.
- [Flowise](https://flowiseai.com/) - Open-source Node.js visual AI workflow builder for creating AI agents and chatbots.
- [Dify](https://dify.ai/) - Open-source LLM app development platform with visual workflow builder and model management.

<p align="right">(<a href="#contents">back to top</a>)</p>

## Realtime & Streaming AI

- [OpenAI Realtime API](https://platform.openai.com/docs/guides/realtime) - Speech-to-speech API for building real-time voice applications with WebSocket connections.
- [Google Gemini Live API](https://ai.google.dev/gemini-api/docs/live) - Real-time voice and video interaction API with Gemini models via WebSocket.
- [LiveKit](https://livekit.io/) - Open-source platform for building real-time audio/video AI applications with WebRTC and agent frameworks.
- [Deepgram Streaming](https://deepgram.com/) - Real-time speech-to-text API with sub-250ms latency via WebSocket for live transcription.
- [AG-UI Protocol](https://www.copilotkit.ai/ag-ui) - Open protocol for streaming agent events between AI backends and frontend UIs.
- [Decart](https://decart.ai/) - Real-time generative video platform with Lucy 2 model generating video live with near-zero latency.

<p align="right">(<a href="#contents">back to top</a>)</p>

## Multi-Modal AI APIs

- [OpenAI GPT-4o API](https://platform.openai.com/) - Natively multimodal model processing text, images, audio, and video with unified reasoning.
- [Google Gemini API](https://ai.google.dev/) - Multimodal API with 1M+ token context and native image/video/audio understanding.
- [Anthropic Claude API](https://www.anthropic.com/api) - Vision-capable API for analyzing images, documents, charts, and screenshots alongside text.
- [Mistral Pixtral](https://mistral.ai/) - Mistral's multimodal model with image understanding capabilities available via API.
- [Meta Llama Multimodal](https://ai.meta.com/llama/) - Open-source multimodal models with vision capabilities via various inference providers.
- [Twelve Labs](https://twelvelabs.io/) - Multimodal video understanding API enabling search, classification, and generation from video.
- [Roboflow](https://roboflow.com/) - Computer vision platform with APIs for training, deploying, and managing detection and segmentation models.

<p align="right">(<a href="#contents">back to top</a>)</p>

## Edge & On-Device AI

- [Ollama](https://ollama.com/) - Run LLMs locally with a single command, supporting a wide range of open-source models with easy management.
- [LM Studio](https://lmstudio.ai/) - Desktop application for running LLMs locally with Vulkan GPU offloading and model discovery.
- [llama.cpp](https://github.com/ggerganov/llama.cpp) ![GitHub stars](https://img.shields.io/github/stars/ggerganov/llama.cpp?style=flat-square&label=⭐) - C/C++ LLM inference engine optimized for CPU-only inference with extensive quantization support.
- [vLLM](https://vllm.ai/) - High-throughput LLM serving engine with PagedAttention and continuous batching.
- [NVIDIA TensorRT-LLM](https://github.com/NVIDIA/TensorRT-LLM) ![GitHub stars](https://img.shields.io/github/stars/NVIDIA/TensorRT-LLM?style=flat-square&label=⭐) - NVIDIA's optimized inference library achieving 30-70% faster throughput on NVIDIA GPUs.
- [MLX](https://github.com/ml-explore/mlx) ![GitHub stars](https://img.shields.io/github/stars/ml-explore/mlx?style=flat-square&label=⭐) - Apple's machine learning framework for Apple Silicon achieving ~230 tokens/second.
- [ExecuTorch](https://github.com/pytorch/executorch) ![GitHub stars](https://img.shields.io/github/stars/pytorch/executorch?style=flat-square&label=⭐) - Meta's on-device AI framework with 50KB footprint supporting 12+ hardware backends.
- [Jan](https://jan.ai/) - Open-source, offline-first desktop AI assistant for running LLMs locally with privacy-first design.
- [LocalAI](https://localai.io/) - Open-source, self-hosted alternative to OpenAI with a compatible API for running models locally.
- [LlamaEdge](https://llamaedge.com/) - Lightweight runtime for deploying LLMs at the edge using WebAssembly.

<p align="right">(<a href="#contents">back to top</a>)</p>

## Cloud GPU Providers

- [RunPod](https://www.runpod.io/) - Flexible, affordable GPU cloud with on-demand and serverless compute supporting A100/H100 GPUs.
- [Lambda Cloud](https://lambdalabs.com/cloud) - GPU cloud for AI developers with H100/A100 instances, zero egress fees, and InfiniBand networking.
- [CoreWeave](https://www.coreweave.com/) - Kubernetes-native GPU cloud at hyperscale serving OpenAI and Microsoft.
- [Vast.ai](https://vast.ai/) - GPU marketplace with competitive bidding driving prices down, best for cost-sensitive workloads.
- [Nebius](https://nebius.com/) - AI-native cloud with next-gen NVIDIA Blackwell Ultra compute and European data centers.
- [TensorDock](https://www.tensordock.com/) - GPU marketplace spanning 100+ global locations with focus on accessibility.
- [Paperspace (DigitalOcean)](https://www.paperspace.com/) - GPU cloud with notebooks, virtual desktops, and serverless functions for ML development.
- [Crusoe Cloud](https://crusoe.ai/) - Climate-aligned GPU cloud powered by clean energy for sustainable AI workloads.
- [Fluidstack](https://www.fluidstack.io/) - Distributed GPU cloud aggregating idle compute capacity at competitive prices.

<p align="right">(<a href="#contents">back to top</a>)</p>

## AI Browser Extensions & Desktop Apps

- [ChatGPT Desktop](https://openai.com/chatgpt/desktop/) - OpenAI's native desktop app with system-wide access via global shortcuts.
- [Claude Desktop](https://claude.ai/download) - Anthropic's desktop app with MCP-based extensions and local tool integration.
- [Poe](https://poe.com/) - Quora's multi-model platform accessing GPT-4, Claude, Gemini, Llama, and custom bots in one interface.
- [Perplexity](https://www.perplexity.ai/) - AI search engine available as web app and browser extension providing cited answers.
- [Raycast AI](https://www.raycast.com/) - macOS launcher with built-in AI combining leading models with extensions for system-wide access.
- [Monica](https://monica.im/) - All-in-one AI assistant browser extension accessing GPT, Claude, Gemini with sidebar chat.
- [Sider](https://sider.ai/) - Browser sidebar extension unifying GPT, DeepSeek, Gemini, Claude, and Grok for comparing outputs.
- [Pieces for Developers](https://pieces.app/) - AI companion capturing live context from browsers to IDEs with multiple LLM support.
- [HARPA AI](https://harpa.ai/) - Chrome extension combining ChatGPT, Claude, Gemini, Perplexity for web page automation.

<p align="right">(<a href="#contents">back to top</a>)</p>

## AI Playgrounds & API Testing

- [OpenAI Playground](https://platform.openai.com/playground) - Official web tool for experimenting with OpenAI models and testing prompts interactively.
- [Vercel AI Playground](https://sdk.vercel.ai/) - Interactive playground for comparing AI model outputs across providers.
- [TypingMind](https://www.typingmind.com/) - Premium LLM frontend supporting multiple models with your own API keys and custom plugins.
- [ChatHub](https://chathub.gg/) - Browser extension for using ChatGPT, Claude, Gemini side-by-side in one interface.
- [Msty](https://msty.app/) - Desktop app for managing multiple LLM providers with conversation branching and prompt library.
- [OpenPlayground](https://github.com/nat/openplayground) ![GitHub stars](https://img.shields.io/github/stars/nat/openplayground?style=flat-square&label=⭐) - Open-source LLM playground for running and comparing models locally.

<p align="right">(<a href="#contents">back to top</a>)</p>

## Web Scraping & Data Extraction for AI

- [Firecrawl](https://www.firecrawl.dev/) - API for scraping, crawling, and extracting structured data from websites into LLM-ready formats.
- [Crawl4AI](https://github.com/unclecode/crawl4ai) ![GitHub stars](https://img.shields.io/github/stars/unclecode/crawl4ai?style=flat-square&label=⭐) - Open-source AI-ready web crawler (58k+ stars) generating clean Markdown with local LLM support.
- [Spider](https://spider.cloud/) - Fast web scraping API designed for AI applications with structured data extraction.
- [Jina Reader](https://jina.ai/reader/) - API for converting any URL into LLM-friendly text for AI consumption.
- [ScrapeGraphAI](https://scrapegraphai.com/) - Open-source scraping library using LLMs to create intelligent pipelines from natural language.

<p align="right">(<a href="#contents">back to top</a>)</p>

## AI Knowledge Management

- [Glean](https://www.glean.com/) - Enterprise AI search connecting content across Google Workspace, Microsoft 365, Slack, and Salesforce.
- [Notion AI](https://www.notion.so/product/ai) - AI layer built into Notion combining wiki, project management, and databases with AI search and writing.
- [Guru](https://www.getguru.com/) - AI-powered knowledge verification platform delivering knowledge at point-of-work via Slack and Teams.
- [Mem](https://mem.ai/) - AI-powered note-taking and knowledge management that self-organizes information using machine learning.
- [Slite](https://slite.com/) - Collaborative docs using AI to categorize content, identify gaps, and surface relevant information.
- [Confluence AI](https://www.atlassian.com/software/confluence) - Atlassian's enterprise wiki with AI-powered search and content generation at scale.

<p align="right">(<a href="#contents">back to top</a>)</p>

## Benchmarks & Leaderboards

- [Chatbot Arena (LMArena)](https://lmarena.ai/) - Crowdsourced LLM ranking using 6M+ blind pairwise votes and Elo ratings to compare model quality.
- [Artificial Analysis](https://artificialanalysis.ai/) - Independent comparison of 100+ AI models across quality, price, speed, and latency.
- [Open LLM Leaderboard](https://huggingface.co/spaces/open-llm-leaderboard/open_llm_leaderboard) - Community benchmark tracking open-source model performance across standardized evaluations.
- [Stanford HELM](https://crfm.stanford.edu/helm/) - Holistic evaluation testing models across 42 scenarios and 7 dimensions including accuracy, bias, and toxicity.
- [LiveBench](https://livebench.ai/) - Continuously updated benchmark with new questions to prevent contamination.
- [LLM Stats](https://llm-stats.com/) - Aggregator comparing AI models across multiple leaderboards and benchmarks in one place.
- [MTEB (Massive Text Embedding Benchmark)](https://huggingface.co/spaces/mteb/leaderboard) - Benchmark for evaluating text embedding models across retrieval, classification, and clustering.
- [EvalPlus](https://evalplus.github.io/) - Enhanced code benchmark with 80x more test cases than HumanEval addressing overfitting.
- [BigCodeBench](https://bigcode-bench.github.io/) - Code benchmark with 1,140 tasks requiring composing function calls from 139 libraries.

<p align="right">(<a href="#contents">back to top</a>)</p>

## Learning Resources

### Guides & Tutorials

- [OpenAI API Quickstart](https://platform.openai.com/docs/quickstart) - Official getting started guide covering chat completions, tool use, and multimodal capabilities.
- [OpenAI Academy](https://academy.openai.com/) - Workshops and content from foundational AI literacy to advanced integration for engineers.
- [Anthropic Getting Started](https://docs.anthropic.com/en/docs/get-started) - Official guide to set up your environment, install an SDK, and send your first message to Claude.
- [Anthropic Quickstarts](https://github.com/anthropics/claude-quickstarts) ![GitHub stars](https://img.shields.io/github/stars/anthropics/claude-quickstarts?style=flat-square&label=⭐) - Collection of projects to help build deployable applications using the Claude API.
- [Google Gemini Quickstart](https://ai.google.dev/gemini-api/docs/quickstart) - Step-by-step tutorials for getting started with Gemini models and the Gemini API.
- [Google Gemini Cookbook](https://github.com/google-gemini/cookbook) ![GitHub stars](https://img.shields.io/github/stars/google-gemini/cookbook?style=flat-square&label=⭐) - Official examples and guides for using the Gemini API with hands-on tutorials.
- [OpenAI Cookbook](https://cookbook.openai.com/) - Community-driven collection of recipes, guides, and notebooks for building with OpenAI models.
- [OpenAI Prompt Engineering Guide](https://platform.openai.com/docs/guides/prompt-engineering) - Official strategies for getting better results from LLMs.
- [Anthropic Prompt Engineering Tutorial](https://github.com/anthropics/prompt-eng-interactive-tutorial) ![GitHub stars](https://img.shields.io/github/stars/anthropics/prompt-eng-interactive-tutorial?style=flat-square&label=⭐) - Interactive tutorial for effective prompt design with Claude.
- [DAIR.AI Prompt Engineering Guide](https://www.promptingguide.ai/) - Comprehensive community-driven guide covering techniques and examples for all skill levels.
- [Microsoft Generative AI for Beginners](https://github.com/microsoft/generative-ai-for-beginners) ![GitHub stars](https://img.shields.io/github/stars/microsoft/generative-ai-for-beginners?style=flat-square&label=⭐) - Free 21-lesson course covering generative AI fundamentals with code examples.
- [Microsoft AI Agents for Beginners](https://github.com/microsoft/ai-agents-for-beginners) ![GitHub stars](https://img.shields.io/github/stars/microsoft/ai-agents-for-beginners?style=flat-square&label=⭐) - Free 12-lesson course for getting started building AI agents.

### Courses

- [DeepLearning.AI Short Courses](https://www.deeplearning.ai/courses/) - 50+ free short courses on LLMs, prompt engineering, RAG, agents, and fine-tuning.
- [fast.ai Practical Deep Learning](https://course.fast.ai/) - Free course teaching practical deep learning for coders with a top-down approach.
- [Hugging Face LLM Course](https://huggingface.co/learn/llm-course/chapter1/1) - Free course on using, fine-tuning, and deploying LLMs using the Hugging Face ecosystem.
- [Google ML Crash Course](https://developers.google.com/machine-learning/crash-course) - Free 15-hour self-study course on machine learning fundamentals.
- [LangChain Academy](https://academy.langchain.com/) - Free courses on LangGraph agent architectures and prompt engineering.
- [Stanford CS224N](https://web.stanford.edu/class/cs224n/) - Stanford's flagship NLP course with free lecture videos and assignments.
- [Stanford CS229](https://see.stanford.edu/course/cs229) - Stanford's comprehensive machine learning course.
- [Generative AI with LLMs (Coursera)](https://www.coursera.org/learn/generative-ai-with-llms) - DeepLearning.AI and AWS course on generative models and fine-tuning.

### Books

- [AI Engineering (Chip Huyen)](https://www.oreilly.com/library/view/ai-engineering/9781098166298/) - Comprehensive guide to building production AI systems, the most-read book on O'Reilly since launch.
- [Build a Large Language Model From Scratch (Sebastian Raschka)](https://www.manning.com/books/build-a-large-language-model-from-scratch) - Step-by-step guide to coding a GPT-like LLM from scratch.
- [Designing Machine Learning Systems (Chip Huyen)](https://www.oreilly.com/library/view/designing-machine-learning/9781098107956/) - Holistic approach to designing ML systems for production.
- [Hands-On Large Language Models (O'Reilly)](https://www.oreilly.com/library/view/hands-on-large-language/9781098150952/) - Practical guide to understanding and applying LLMs in real-world scenarios.
- [Deep Learning for Coders with fastai and PyTorch](https://course.fast.ai/Resources/book.html) - Hands-on approach to deep learning starting with practical applications.

### Newsletters

- [The Batch](https://www.deeplearning.ai/the-batch/) - Andrew Ng's weekly AI news for engineers, executives, and enthusiasts.
- [TLDR AI](https://tldr.tech/ai) - Daily AI newsletter covering technical developments for 1.25M+ developer readers.
- [Ben's Bites](https://bensbites.beehiiv.com/) - Daily AI newsletter with 120K+ subscribers focusing on product launches and business use cases.
- [The Neuron](https://www.theneurondaily.com/) - Morning-Brew-style AI newsletter for 550K+ professionals.
- [Latent Space](https://www.latent.space/) - Technical AI newsletter and podcast diving deep into AI research and infrastructure.
- [Simon Willison's Weblog](https://simonwillison.net/) - Blog covering LLMs, AI tools, and open source from a prolific builder.

### Podcasts

- [Latent Space: The AI Engineer Podcast](https://www.latent.space/podcast) - Deep technical dives into foundation models, agents, and AI engineering.
- [Practical AI](https://practicalai.fm/) - Making AI practical, productive, and accessible with real-world discussions.
- [NVIDIA AI Podcast](https://www.nvidia.com/en-us/ai-podcast/) - Biweekly interviews exploring innovations in AI and deep learning.
- [Lex Fridman Podcast](https://lexfridman.com/podcast/) - Long-form conversations about science, AI, and intelligence.
- [Dwarkesh Podcast](https://www.dwarkeshpatel.com/podcast) - Deeply researched interviews with leading thinkers in AI and technology.

### YouTube Channels

- [Andrej Karpathy](https://www.youtube.com/@AndrejKarpathy) - Former Tesla AI Director teaching neural networks from scratch in "Zero to Hero."
- [3Blue1Brown](https://www.youtube.com/@3blue1brown) - Beautifully animated explanations of mathematics, neural networks, and deep learning.
- [Yannic Kilcher](https://www.youtube.com/@YannicKilcher) - Detailed breakdowns of the latest ML research papers.
- [AI Explained](https://www.youtube.com/@aiexplained-official) - Clear explanations of complex AI concepts and model comparisons.
- [Two Minute Papers](https://www.youtube.com/@TwoMinutePapers) - Bite-sized summaries of cutting-edge AI research with visual explanations.
- [Umar Jamil](https://www.youtube.com/@ulobaranjbar) - Highly technical implementations of ML and LLM techniques from scratch.

### Communities

- [r/LocalLLaMA](https://www.reddit.com/r/LocalLLaMA/) - 266K+ member community focused on running LLMs locally and open-source models.
- [r/MachineLearning](https://www.reddit.com/r/MachineLearning/) - 2.8M+ subscriber academic-leaning community for ML papers and research.
- [Hugging Face Community](https://huggingface.co/) - Hub for sharing ML models, datasets, and Spaces with a thriving open-source community.
- [OpenAI Developer Forum](https://community.openai.com/) - Official forum for OpenAI API developers.
- [LangChain Discord](https://discord.gg/langchain) - Developer community for building LLM applications with LangChain.

### Research Paper Aggregators

- [arXiv](https://arxiv.org/) - Open-access repository hosting preprints in AI, ML, and CS with 2M+ papers.
- [Semantic Scholar](https://www.semanticscholar.org/) - AI-powered research tool for finding and connecting scientific papers.
- [Papers With Code](https://paperswithcode.com/) - ML papers linked with code implementations and benchmark results.
- [Connected Papers](https://www.connectedpapers.com/) - Visual tool for exploring related papers through interactive citation graphs.
- [Hugging Face Daily Papers](https://huggingface.co/papers) - Curated trending AI papers with links to models and datasets.

### Conferences

- [NeurIPS](https://nips.cc/) - Premier ML conference (December annually) covering neural information processing systems.
- [ICML](https://icml.cc/) - International Conference on Machine Learning (July 2026, Seoul).
- [ICLR](https://iclr.cc/) - International Conference on Learning Representations (April 2026, Rio de Janeiro).
- [AI Engineer World's Fair](https://www.ai.engineer/worldsfair) - Practitioner-focused conference for AI engineers (June-July 2026, San Francisco).

<p align="right">(<a href="#contents">back to top</a>)</p>

---

## Related Awesome Lists

- [awesome-chatgpt-prompts](https://github.com/f/awesome-chatgpt-prompts) ![GitHub stars](https://img.shields.io/github/stars/f/awesome-chatgpt-prompts?style=flat-square&label=⭐) - Curated ChatGPT prompts for creative and effective use.
- [awesome-llm-apps](https://github.com/Shubhamsaboo/awesome-llm-apps) ![GitHub stars](https://img.shields.io/github/stars/Shubhamsaboo/awesome-llm-apps?style=flat-square&label=⭐) - Collection of LLM app examples with code.
- [awesome-generative-ai](https://github.com/steven2358/awesome-generative-ai) ![GitHub stars](https://img.shields.io/github/stars/steven2358/awesome-generative-ai?style=flat-square&label=⭐) - Broad curated list of generative AI tools and resources.
- [awesome-langchain](https://github.com/kyrolabs/awesome-langchain) ![GitHub stars](https://img.shields.io/github/stars/kyrolabs/awesome-langchain?style=flat-square&label=⭐) - Tools and projects using LangChain.
- [awesome-mcp-servers](https://github.com/punkpeye/awesome-mcp-servers) ![GitHub stars](https://img.shields.io/github/stars/punkpeye/awesome-mcp-servers?style=flat-square&label=⭐) - Community-curated MCP server collection.
- [awesome-llm-agents](https://github.com/kaushikb11/awesome-llm-agents) ![GitHub stars](https://img.shields.io/github/stars/kaushikb11/awesome-llm-agents?style=flat-square&label=⭐) - Curated list of LLM agent frameworks and tools.
- [awesome-vibe-coding](https://github.com/filipecalegario/awesome-vibe-coding) ![GitHub stars](https://img.shields.io/github/stars/filipecalegario/awesome-vibe-coding?style=flat-square&label=⭐) - Tools and resources for AI-assisted coding.
- [awesome-local-ai](https://github.com/janhq/awesome-local-ai) ![GitHub stars](https://img.shields.io/github/stars/janhq/awesome-local-ai?style=flat-square&label=⭐) - Tools for running AI models locally.

---

## Contributing

Contributions are welcome! Please read the [contributing guidelines](CONTRIBUTING.md) first.

## License

[![CC0](https://licensebuttons.net/p/zero/1.0/88x31.png)](https://creativecommons.org/publicdomain/zero/1.0/)
