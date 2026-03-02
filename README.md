# Awesome AI APIs [![Awesome](https://awesome.re/badge.svg)](https://awesome.re)

> A curated list of AI APIs, tools, and platforms for building AI-powered applications. Focused on actively maintained services available as of early 2026.

## Contents

- [LLM API Providers (Commercial)](#llm-api-providers-commercial)
- [Open-Source Model Hosting & Inference](#open-source-model-hosting--inference)
- [LLM API Routers & Gateways](#llm-api-routers--gateways)
- [AI Code Assistants & APIs](#ai-code-assistants--apis)
- [AI Image Generation APIs](#ai-image-generation-apis)
- [AI Video Generation APIs](#ai-video-generation-apis)
- [AI Audio & Speech APIs](#ai-audio--speech-apis)
- [AI Search APIs](#ai-search-apis)
- [Vector Databases & Embeddings](#vector-databases--embeddings)
- [AI Agent Frameworks](#ai-agent-frameworks)
- [LLM Evaluation & Monitoring](#llm-evaluation--monitoring)
- [AI Gateway & Cost Management](#ai-gateway--cost-management)
- [Fine-Tuning Platforms](#fine-tuning-platforms)
- [AI Safety & Guardrails](#ai-safety--guardrails)
- [Prompt Engineering & Management Tools](#prompt-engineering--management-tools)
- [RAG Tools & Frameworks](#rag-tools--frameworks)
- [Multi-Modal AI APIs](#multi-modal-ai-apis)
- [AI Data Labeling & Annotation](#ai-data-labeling--annotation)
- [Edge & On-Device AI](#edge--on-device-ai)
- [MCP (Model Context Protocol)](#mcp-model-context-protocol)
- [AI Developer Tools & SDKs](#ai-developer-tools--sdks)
- [AI Middleware & Orchestration](#ai-middleware--orchestration)
- [Cloud GPU Providers](#cloud-gpu-providers)
- [Web Scraping & Data Extraction for AI](#web-scraping--data-extraction-for-ai)

---

## LLM API Providers (Commercial)

- [OpenAI API](https://platform.openai.com/) - Industry-leading LLM API offering GPT-5.x series models with advanced reasoning, tool use, and multimodal capabilities.
- [Anthropic Claude API](https://www.anthropic.com/api) - Safety-focused LLM API providing Claude model family with extended context windows, vision, and agentic capabilities.
- [Google Gemini API](https://ai.google.dev/) - Google's multimodal AI API with Gemini 3.x models featuring ultra-long context, tight search integration, and cloud ecosystem support.
- [Mistral AI API](https://mistral.ai/) - European AI lab offering open-weight and commercial models with Apache 2.0 licensing and competitive pricing.
- [Cohere API](https://cohere.com/) - Enterprise-focused LLM API with Command R+ models optimized for RAG, multilingual support, and enterprise deployment via Model Vault.
- [AI21 Labs API](https://www.ai21.com/) - Provides Jamba models and Maestro AI orchestration system for enterprise NLP tasks with strong multilingual capabilities.
- [xAI Grok API](https://x.ai/) - xAI's Grok models available via API with competitive pricing, image generation (Grok Imagine), and video generation capabilities.
- [DeepSeek API](https://platform.deepseek.com/) - Ultra-low-cost LLM API offering DeepSeek V3.2 and R1 reasoning models with aggressive caching discounts and 128K context.
- [Inflection AI](https://inflection.ai/) - Creators of Pi, offering enterprise AI solutions and API access with a focus on empathetic and helpful interactions.
- [Reka AI](https://www.reka.ai/) - Multimodal AI models with capabilities across text, images, and video understanding via API.

## Open-Source Model Hosting & Inference

- [Together AI](https://www.together.ai/) - High-performance inference platform for 200+ open-source LLMs with sub-100ms latency, fine-tuning, and horizontal scaling.
- [Fireworks AI](https://fireworks.ai/) - Optimized inference platform focused on low latency and strong reasoning for open-weight models including DeepSeek, Llama, and Qwen.
- [Groq](https://groq.com/) - Purpose-built LPU (Language Processing Unit) hardware delivering ultra-fast inference with extremely low latency for real-time applications.
- [Cerebras](https://cerebras.ai/) - Wafer-scale AI chip architecture enabling exceptionally fast inference by eliminating GPU communication bottlenecks.
- [SambaNova](https://sambanova.ai/) - Enterprise AI inference platform with OpenAI-compatible API, ultra-low latency, and OVHcloud partnership for European deployment.
- [Replicate](https://replicate.com/) - Run and deploy open-source models via API with simple scaling, supporting image, video, audio, and text models.
- [Modal](https://modal.com/) - Serverless cloud platform for running AI models with pay-per-use pricing and infrastructure control for custom workloads.
- [Baseten](https://www.baseten.co/) - Inference platform for deploying and serving ML models with infrastructure control and optimized performance.
- [DeepInfra](https://deepinfra.com/) - Cost-effective inference API for running large AI models with managed servers, GPUs, and auto-scaling.
- [Lepton AI](https://www.lepton.ai/) - Pythonic framework for building and deploying AI services with cloud-native inference and GPU infrastructure.
- [fal.ai](https://fal.ai/) - Fast inference API aggregator with 600+ models, competitive pricing (~$0.01-0.05/image), and optimized for generative media.
- [Novita AI](https://novita.ai/) - Inference platform offering affordable access to open-source models for text, image, and audio generation.

## LLM API Routers & Gateways

- [OpenRouter](https://openrouter.ai/) - Unified API for 100+ LLMs from multiple providers with simple integration and a 5% markup on requests.
- [LiteLLM](https://github.com/BerriAI/litellm) - Open-source proxy/gateway providing a unified API to call 100+ LLMs with load balancing, fallbacks, and spend tracking.
- [Martian](https://withmartian.com/) - AI-powered LLM router that automatically selects the best model for each request to optimize cost and quality using Model Mapping technology.
- [Portkey](https://portkey.ai/) - Enterprise AI gateway with load balancing, caching, fallbacks, and observability starting at $49/month.
- [Helicone](https://www.helicone.ai/) - Open-source, Rust-based AI gateway with sophisticated load balancing, native observability, and cost tracking.

## AI Code Assistants & APIs

- [GitHub Copilot](https://github.com/features/copilot) - Leading AI code assistant with 20M+ users, deep IDE integration, agent mode, and enterprise features starting at $10/month.
- [Cursor](https://cursor.com/) - AI-native IDE built on VS Code with deep codebase understanding, multi-file editing, and Composer agent for autonomous coding.
- [Windsurf (Codeium)](https://codeium.com/) - Agentic IDE from Codeium with Cascade flow combining deep context awareness with autonomous code generation and free tier.
- [Claude Code](https://docs.anthropic.com/en/docs/claude-code) - Anthropic's terminal-based agentic coding tool excelling at reasoning, complex multi-file refactoring, and autonomous workflows.
- [Tabnine](https://www.tabnine.com/) - Privacy-first AI code assistant with multi-model support, enterprise self-hosting options, and code trained only on permissive licenses.
- [Amazon Q Developer](https://aws.amazon.com/q/developer/) - AWS's AI coding assistant (successor to CodeWhisperer) with autonomous agents, AWS resource management, and console diagnostics.
- [Sourcegraph Cody](https://sourcegraph.com/cody) - AI coding assistant with search-first architecture for analyzing entire multi-repo environments before making suggestions.
- [Continue.dev](https://continue.dev/) - Open-source AI code assistant that puts developers in control, supporting any LLM and deep IDE customization.
- [Aider](https://aider.chat/) - Free, open-source terminal-based AI pair programming tool for command-line-centric workflows and automation integration.
- [Qodo (formerly CodiumAI)](https://www.qodo.ai/) - AI-powered code testing and review tool focused on generating meaningful test suites and improving code quality.
- [JetBrains AI](https://www.jetbrains.com/ai/) - AI assistant integrated natively into JetBrains IDEs with code completion, chat, and context-aware suggestions.
- [Google Gemini Code Assist](https://cloud.google.com/gemini/docs/codeassist/overview) - Google's AI coding assistant powered by Gemini models with deep Google Cloud integration.

## AI Image Generation APIs

- [OpenAI DALL-E API](https://platform.openai.com/docs/guides/images) - Text-to-image generation API with strong prompt understanding, complex instruction following, and seamless GPT integration.
- [Stability AI API](https://platform.stability.ai/) - API for Stable Diffusion 3.5 and SDXL models offering open-source image generation with fine-grained control and customization.
- [Black Forest Labs (FLUX)](https://bfl.ai/) - Creators of FLUX image generation models offering FLUX.2 and Kontext APIs with state-of-the-art photorealism and typography.
- [Ideogram API](https://ideogram.ai/) - AI image generation API specializing in accurate text rendering in images, ideal for logos, posters, and branded content.
- [Recraft API](https://www.recraft.ai/) - Image generation API excelling at vector outputs (icons, logos) alongside raster images with style controls and brand systems support.
- [Leonardo AI API](https://leonardo.ai/) - AI image generation platform with presets and pipelines optimized for game art, textures, and product visuals.
- [Google Imagen API](https://cloud.google.com/vertex-ai/generative-ai/docs/image/overview) - Google's image generation API via Vertex AI with Imagen 3/4 models featuring studio-quality outputs and text rendering.
- [Midjourney](https://www.midjourney.com/) - Leading AI image generator for artistic and aesthetic outputs, currently accessible via Discord bot (no public REST API).

## AI Video Generation APIs

- [Runway API](https://runwayml.com/) - Professional AI video generation platform with Gen-4.5 offering cinematic quality, motion brushes, and scene consistency.
- [Pika API](https://pika.art/) - AI video generation with PikaSwaps, Pikaffects, and fast rendering optimized for social media and stylistic expression.
- [Luma AI (Dream Machine)](https://lumalabs.ai/) - Hi-Fi 4K HDR video generation with Ray3 engine, superior physics simulation, and strong image-to-video capabilities.
- [Kling AI](https://klingai.com/) - Kuaishou's AI video generator producing up to 2-minute videos at 1080p/30fps with simultaneous audio-visual generation.
- [OpenAI Sora](https://openai.com/sora) - OpenAI's text-to-video model generating cinematic-quality videos with realistic physics and world understanding.
- [Synthesia API](https://www.synthesia.io/) - Enterprise AI avatar video platform with 230+ professional avatars, 140+ languages, and Express-2 voice/video engine.
- [HeyGen API](https://www.heygen.com/) - AI video platform specializing in realistic language dubbing with voice cloning and perfect lip-sync technology.
- [D-ID API](https://www.d-id.com/api/) - Generative AI API for creating talking-head videos from images and audio, supporting 120+ languages and real-time interactions.
- [Google Veo API](https://deepmind.google/technologies/veo/) - Google's video generation model (Veo 3.1) with native audio integration and high-fidelity output via Vertex AI.

## AI Audio & Speech APIs

- [ElevenLabs API](https://elevenlabs.io/) - Industry-leading voice AI with 3,000+ voices, 70+ languages, emotional nuance, and voice cloning via Eleven v3 and Flash v2.5.
- [OpenAI Audio API](https://platform.openai.com/docs/guides/audio) - TTS and STT APIs including gpt-4o-transcribe models with improved word error rates and Whisper for 50+ language transcription.
- [Deepgram API](https://deepgram.com/) - Lightning-fast speech-to-text and TTS (Aura-2) optimized for conversational AI with sub-250ms latency.
- [AssemblyAI API](https://www.assemblyai.com/) - Speech-to-text API with speaker diarization, sentiment analysis, and content moderation for audio intelligence.
- [Cartesia API](https://cartesia.ai/) - Ultra-low-latency voice generation API (<150ms) with rapid voice cloning and fine-grained parameter controls for interactive applications.
- [Play.ht API](https://play.ht/) - Text-to-speech platform with 900+ voices across 140+ languages and accents, available via API on all subscription plans.
- [Resemble AI API](https://www.resemble.ai/) - Enterprise voice AI platform with expressive speech synthesis, accurate voice cloning, and deepfake detection capabilities.
- [Speechify API](https://speechify.com/) - Apple Design Award winner offering 1,000+ natural-sounding voices in 60+ languages via cost-effective TTS API.
- [OpenAI Realtime API](https://platform.openai.com/docs/guides/realtime) - Speech-to-speech API (GA August 2025) for building real-time voice applications with low latency.

## AI Search APIs

- [Perplexity Sonar API](https://docs.perplexity.ai/) - LLM-powered search API providing direct answers with cited sources, offering web-connected AI search for applications.
- [Tavily API](https://tavily.com/) - AI-optimized search API built for agents and RAG workflows, delivering fast, structured search results with SOC 2 certification.
- [Exa API](https://exa.ai/) - Semantic/neural search API with Research API scoring 94.9% on SimpleQA benchmarks, returning meaning-based results rather than keyword matches.
- [Brave Search API](https://brave.com/search/api/) - Independent search index with no tracking, privacy-focused web search at $5/1k queries.
- [SerpAPI](https://serpapi.com/) - Battle-tested SERP scraping API for AI features, SEO tools, lead generation, and price monitoring across multiple search engines.
- [You.com API](https://you.com/apis) - LLM-ready web search API with Deep Search, Express Agent, and MCP support, integrated as search provider for OpenAI.
- [Serper API](https://serper.dev/) - Fast, affordable Google SERP API for high-volume use cases in AI applications and RAG pipelines.
- [WebSearch API](https://websearchapi.ai/) - AI-focused web search API alternative designed for integration into AI workflows and applications.

## Vector Databases & Embeddings

### Vector Databases

- [Pinecone](https://www.pinecone.io/) - Fully managed vector database with high ease of use, serverless architecture, and support for billions of vectors.
- [Weaviate](https://weaviate.io/) - Open-source vector database excelling at hybrid search (vector + keyword) with GraphQL API and modular architecture.
- [Qdrant](https://qdrant.tech/) - Open-source vector database with high QPS at 99% recall, filtering, and production-proven performance at scale.
- [Chroma](https://www.trychroma.com/) - Developer-friendly open-source embedding database with tight ML framework integration, ideal for prototyping RAG systems.
- [Milvus](https://milvus.io/) - Open-source vector database leading in low latency benchmarks with support for billions of vectors and cost efficiency.
- [Zilliz Cloud](https://zilliz.com/) - Fully managed cloud service for Milvus with enterprise features, extended capacity tiers, and production SLAs.
- [pgvector](https://github.com/pgvector/pgvector) - Open-source PostgreSQL extension for vector similarity search, keeping vectors and relational data in one system.
- [LanceDB](https://lancedb.com/) - Open-source, serverless vector database built on Lance columnar format with zero-copy access and multimodal support.

### Embedding APIs

- [OpenAI Embeddings API](https://platform.openai.com/docs/guides/embeddings) - Text embedding API with ada-002 and newer models for semantic search, clustering, and classification.
- [Voyage AI API](https://www.voyageai.com/) - State-of-the-art embedding API with Voyage 4 series featuring shared embedding spaces, multimodal support, and domain-specific models.
- [Cohere Embed API](https://cohere.com/embed) - Multilingual embedding API optimized for search and retrieval with Embed v3 and enterprise deployment options.
- [Google Embedding API](https://cloud.google.com/vertex-ai/generative-ai/docs/embeddings) - Text and multimodal embeddings via Vertex AI with Gecko and newer embedding models.
- [Jina AI Embeddings](https://jina.ai/) - Open-source and API-based embedding models with multilingual support and reranking capabilities.

## AI Agent Frameworks

- [LangChain](https://www.langchain.com/) - Most popular LLM application framework (47M+ PyPI downloads) with extensive integrations for chains, agents, and retrieval.
- [LangGraph](https://www.langchain.com/langgraph) - Extension of LangChain enabling cyclical graphs for agent runtimes with state management and human-in-the-loop support.
- [LlamaIndex](https://www.llamaindex.ai/) - Best-in-class RAG framework with 100+ data connectors and purpose-built retrieval infrastructure for data-intensive applications.
- [CrewAI](https://www.crewai.com/) - Fastest-growing framework for collaborative, role-based multi-agent systems with structured task delegation.
- [Microsoft AutoGen](https://microsoft.github.io/autogen/) - Multi-agent conversation framework (merging with Semantic Kernel into unified Microsoft Agent Framework, GA Q1 2026).
- [Microsoft Semantic Kernel](https://learn.microsoft.com/semantic-kernel/) - Enterprise SDK for LLM integration with deep Azure ecosystem support across C#, Python, and Java.
- [DSPy](https://dspy.ai/) - Declarative framework for programming (not prompting) language models with automatic prompt optimization and modular AI systems.
- [Haystack](https://haystack.deepset.ai/) - Open-source AI orchestration framework for building production-ready LLM applications with modular pipelines and agent workflows.
- [Instructor](https://github.com/jxnl/instructor) - Library for structured output extraction from LLMs using Pydantic models with validation and retry logic.
- [OpenAI Agents SDK](https://github.com/openai/openai-agents-python) - OpenAI's official framework for building agentic workflows with tool use, handoffs, and guardrails.
- [Google ADK (Agent Development Kit)](https://google.github.io/adk-docs/) - Google's framework for building AI agents with native Gemini integration and multi-agent orchestration.
- [Smolagents](https://github.com/huggingface/smolagents) - Hugging Face's lightweight agent framework for building simple, effective AI agents with minimal boilerplate.

## LLM Evaluation & Monitoring

- [LangSmith](https://smith.langchain.com/) - LangChain's evaluation and monitoring platform with tracing, prompt testing, and RAG assessment in the LangChain ecosystem.
- [Langfuse](https://langfuse.com/) - Open-source LLM engineering platform for tracing, prompt management, evaluations, and observability with strong developer experience.
- [Braintrust](https://www.braintrust.dev/) - Evaluation-first platform for systematic prompt experimentation with side-by-side comparison and collaborative prompt design.
- [Arize AI](https://arize.com/) - Enterprise LLM observability with zero-copy data lake integration, Phoenix open-source tracing, and production monitoring.
- [Promptfoo](https://promptfoo.dev/) - Open-source toolkit for prompt engineering, A/B testing, and LLM-as-a-judge evaluations via YAML or CLI configuration.
- [Humanloop](https://humanloop.com/) - Prompt management and evaluation platform with human feedback loops (acquired by Anthropic in late 2024).
- [WhyLabs](https://whylabs.ai/) - Data and model health monitoring platform detecting anomalies, drift, hallucinations, and bias in production ML/LLM systems.
- [Galileo AI](https://galileo.ai/) - LLM evaluation platform with Luna-2 models running at sub-200ms latency and real-time guardrail system for agent actions.
- [TruLens](https://www.trulens.org/) - Open-source library for evaluating and tracing AI agents and RAG systems with OpenTelemetry-based tracing.
- [Maxim AI](https://www.getmaxim.ai/) - AI evaluation and observability platform for testing, monitoring, and optimizing LLM and agentic systems.

## AI Gateway & Cost Management

- [Helicone](https://www.helicone.ai/) - Open-source AI gateway and observability platform with request logging, cost tracking, and Rust-based performance.
- [Portkey](https://portkey.ai/) - Enterprise AI gateway with unified API, load balancing, caching, semantic caching, and multi-provider fallbacks.
- [Keywords AI](https://keywordsai.co/) - LLM monitoring and cost management platform for tracking usage, latency, and spend across providers.
- [Lunary](https://lunary.ai/) - Open-source LLM monitoring and analytics platform with cost tracking, prompt management, and user analytics.
- [OpenRouter](https://openrouter.ai/) - Unified API marketplace for 100+ LLMs with transparent pricing comparison and automatic cost optimization.

## Fine-Tuning Platforms

- [OpenAI Fine-Tuning](https://platform.openai.com/docs/guides/fine-tuning) - Managed fine-tuning for GPT models with reinforcement fine-tuning preview for proprietary model customization.
- [Together AI Fine-Tuning](https://www.together.ai/) - Cloud-based fine-tuning for open-source models with LoRA adapter support and seamless inference deployment.
- [Predibase](https://predibase.com/) - Low-code fine-tuning and hosting platform with reinforcement fine-tuning, LoRAX multi-adapter serving, and serverless deployment.
- [LoRAX](https://github.com/predibase/lorax) - Open-source framework for serving 100s of fine-tuned LoRA adapters on a single GPU, dramatically reducing serving costs.
- [Modal Fine-Tuning](https://modal.com/) - Serverless GPU compute for fine-tuning with pay-per-use pricing and zero idle costs.
- [Lambda Cloud](https://lambdalabs.com/) - GPU cloud optimized for AI training and fine-tuning with zero egress fees, InfiniBand networking, and 50% academic discount.
- [Anyscale](https://www.anyscale.com/) - Scalable platform built on Ray for distributed fine-tuning and serving of open-source LLMs.

## AI Safety & Guardrails

- [Guardrails AI](https://www.guardrailsai.com/) - Open-source framework for LLM output validation with pre-built validators from Guardrails Hub and custom validator support.
- [NVIDIA NeMo Guardrails](https://github.com/NVIDIA/NeMo-Guardrails) - Open-source toolkit for adding programmable safety guardrails to LLM-based systems using a domain-specific language (DSL).
- [Lakera Guard](https://www.lakera.ai/) - Real-time prompt injection detection API with customizable safeguards and monitoring dashboards.
- [LLM Guard](https://llm-guard.com/) - Open-source toolkit for securing LLM interactions with input/output scanners for prompt injection, PII, and toxicity.
- [Rebuff](https://github.com/protectai/rebuff) - Self-hardening prompt injection detector that learns from attack attempts to improve detection over time.
- [Azure AI Content Safety](https://azure.microsoft.com/en-us/products/ai-services/ai-content-safety) - Microsoft's API for detecting harmful content in text and images with configurable severity levels.

## Prompt Engineering & Management Tools

- [Langfuse](https://langfuse.com/) - Open-source prompt management with versioning, tracing, evaluations, and observability for LLM applications.
- [PromptLayer](https://promptlayer.com/) - Prompt management platform with logging, versioning, visual editing, analytics, and regression testing.
- [Agenta](https://agenta.ai/) - Open-source LLMOps platform for prompt management, evaluation, and A/B testing accessible to non-technical users.
- [Pezzo](https://www.pezzo.ai/) - Lightweight, open-source prompt management tool for versioning, testing, and instant deployment from a central hub.
- [Promptfoo](https://promptfoo.dev/) - Open-source CLI and library for prompt testing, evaluation, and red-teaming with YAML-based configuration.
- [Maxim AI](https://www.getmaxim.ai/) - Prompt management and evaluation platform with testing workflows, version control, and team collaboration.

## RAG Tools & Frameworks

- [LlamaIndex](https://www.llamaindex.ai/) - Comprehensive RAG framework with 100+ data connectors, advanced retrieval strategies, and production-ready pipelines.
- [Unstructured](https://unstructured.io/) - Document ingestion and parsing platform for converting PDFs, images, HTML, and Word docs into structured data for RAG pipelines.
- [Vectara](https://vectara.com/) - End-to-end RAG-as-a-service platform with built-in semantic search, summarization, and hallucination detection for enterprise use.
- [Ragas](https://docs.ragas.io/) - Framework for reference-free evaluation of RAG pipelines with metrics for context relevance, groundedness, and answer quality.
- [LangChain Retrievers](https://python.langchain.com/docs/modules/data_connection/) - Modular retrieval components supporting vector stores, multi-query, contextual compression, and ensemble retrieval strategies.
- [Cohere Rerank](https://cohere.com/rerank) - Neural reranking API that improves search relevance by reordering results based on semantic similarity to the query.
- [Morphik](https://www.morphik.ai/) - Open-source RAG infrastructure for building and deploying retrieval-augmented generation systems.

## Multi-Modal AI APIs

- [OpenAI GPT-4o API](https://platform.openai.com/) - Natively multimodal model processing text, images, audio, and video with unified reasoning across modalities.
- [Google Gemini API](https://ai.google.dev/) - Multimodal API with ultra-long context (1M+ tokens), native image/video/audio understanding, and Vertex AI integration.
- [Anthropic Claude API](https://www.anthropic.com/api) - Vision-capable API for analyzing images, documents, charts, and screenshots alongside text-based reasoning.
- [Mistral Pixtral](https://mistral.ai/) - Mistral's multimodal model with image understanding capabilities available via API.
- [Meta Llama Multimodal](https://ai.meta.com/llama/) - Open-source multimodal models with vision capabilities available through various inference providers.

## AI Data Labeling & Annotation

- [Scale AI](https://scale.ai/) - Enterprise data labeling platform with RLHF capabilities, used by major AI labs (Meta invested $15B for 49% stake in 2025).
- [Labelbox](https://labelbox.com/) - End-to-end data platform with annotation tools (Annotate), data management (Catalog), and Model Foundry with HIPAA/SOC2 compliance.
- [Snorkel AI](https://snorkel.ai/) - Programmatic labeling platform using weak supervision to encode labeling logic as functions and combine noisy label sources.
- [Argilla](https://argilla.io/) - Free, open-source data annotation platform for NLP, LLMs, RAG, and multimodal models with AI feedback suggestions and Hugging Face integration.
- [Label Studio](https://labelstud.io/) - Open-source data labeling tool with flexible templates, ML backends, and model-in-the-loop support for text and visual tasks.
- [Encord](https://encord.com/) - Data labeling platform specialized for computer vision with active learning, quality management, and model-assisted labeling.
- [CVAT](https://www.cvat.ai/) - Open-source annotation tool for computer vision tasks including image and video labeling with AI-assisted annotation.

## Edge & On-Device AI

- [Ollama](https://ollama.com/) - Run LLMs locally with a single command, supporting a wide range of open-source models with easy model management and API.
- [LM Studio](https://lmstudio.ai/) - Desktop application for running LLMs locally with Vulkan GPU offloading, model discovery, and a user-friendly interface.
- [llama.cpp](https://github.com/ggerganov/llama.cpp) - C/C++ LLM inference engine optimized for CPU-only inference with extensive quantization support for edge and resource-constrained environments.
- [vLLM](https://vllm.ai/) - High-throughput LLM serving engine with PagedAttention, continuous batching, and vLLM-Omni for heterogeneous model pipelines.
- [NVIDIA TensorRT-LLM](https://github.com/NVIDIA/TensorRT-LLM) - NVIDIA's optimized inference library achieving 30-70% faster throughput than alternatives on NVIDIA GPUs.
- [MLX](https://github.com/ml-explore/mlx) - Apple's machine learning framework for Apple Silicon achieving ~230 tokens/second with Metal acceleration.
- [ExecuTorch](https://github.com/pytorch/executorch) - Meta's on-device AI framework (1.0 GA October 2025) with 50KB footprint supporting 12+ hardware backends.
- [Jan](https://jan.ai/) - Open-source, offline-first desktop AI assistant for running LLMs locally with privacy-first design.
- [LocalAI](https://localai.io/) - Open-source, self-hosted alternative to OpenAI with a compatible API for running models locally.
- [LlamaEdge](https://llamaedge.com/) - Lightweight runtime for deploying LLMs at the edge using WebAssembly with cross-platform compatibility.

## MCP (Model Context Protocol)

### Core Protocol

- [Model Context Protocol Specification](https://modelcontextprotocol.io/) - Open standard by Anthropic (donated to Linux Foundation's AAIF in December 2025) for connecting AI models to external tools and data sources.
- [MCP TypeScript SDK](https://github.com/modelcontextprotocol/typescript-sdk) - Official TypeScript SDK for building MCP servers and clients.
- [MCP Python SDK](https://github.com/modelcontextprotocol/python-sdk) - Official Python SDK for building MCP servers and clients.
- [MCP Registry](https://registry.modelcontextprotocol.io/) - Open catalog and API for discovering MCP servers with ~2,000 entries and 407% growth since launch in September 2025.

### Notable MCP Servers

- [MCP Servers Repository](https://github.com/modelcontextprotocol/servers) - Official collection of reference MCP server implementations (Filesystem, Git, Fetch, Memory, Sequential Thinking, etc.).
- [Awesome MCP Servers](https://github.com/punkpeye/awesome-mcp-servers) - Community-curated collection of MCP servers covering 7,260+ servers across diverse integrations.
- [Playwright MCP](https://github.com/microsoft/playwright-mcp) - Microsoft's MCP server enabling LLMs to interact with web pages through structured accessibility snapshots.
- [ActionKit by Paragon](https://www.useparagon.com/) - MCP server connecting to 130+ SaaS integrations (Slack, Salesforce, Gmail, etc.) for AI agent workflows.

### MCP Ecosystem Stats

- 97M+ monthly SDK downloads (December 2025)
- 10,000+ active MCP servers in production
- Adopted by OpenAI, Google DeepMind, Microsoft Copilot, and all major AI platforms

## AI Developer Tools & SDKs

- [Vercel AI SDK](https://sdk.vercel.ai/) - TypeScript toolkit (v6) for building AI applications with React/Next.js, featuring composable agents, full MCP support, and DevTools.
- [Streamlit](https://streamlit.io/) - Python framework for building data-heavy AI apps combining chat interfaces with dashboards and visualizations.
- [Gradio](https://www.gradio.app/) - Python library for quickly creating ML demo UIs with instant public links, ideal for experimentation and model showcasing.
- [Chainlit](https://chainlit.io/) - Python framework for building production conversational AI UIs with step-by-step visualization and authentication.
- [Langflow](https://www.langflow.org/) - Low-code Python-based AI builder for visually creating agentic and RAG applications with drag-and-drop components.
- [Flowise](https://flowiseai.com/) - Open-source Node.js visual AI workflow builder for creating AI agents, chatbots, and automation pipelines.
- [Dify](https://dify.ai/) - Open-source LLM app development platform with visual workflow builder, RAG pipeline, agent capabilities, and model management.
- [n8n](https://n8n.io/) - Open-source workflow automation tool with AI agent nodes for building LLM-powered automation workflows.
- [Weights & Biases](https://wandb.ai/) - ML experiment tracking, model management, and dataset versioning platform for the full ML lifecycle.

## AI Middleware & Orchestration

- [LangChain](https://www.langchain.com/) - Most widely adopted LLM orchestration framework with chains, agents, memory, and 700+ integrations.
- [LlamaIndex](https://www.llamaindex.ai/) - Data framework for LLM applications specializing in ingestion, indexing, and retrieval orchestration.
- [Apache Airflow](https://airflow.apache.org/) - Industry-standard workflow orchestration for defining, scheduling, and monitoring AI/ML data pipelines as code.
- [Ray](https://www.ray.io/) - Distributed computing framework for scaling AI workloads including training, serving, and reinforcement learning.
- [Prefect](https://www.prefect.io/) - Modern workflow orchestration platform for building, running, and monitoring data and AI pipelines.
- [Temporal](https://temporal.io/) - Durable execution platform for building reliable distributed applications and long-running AI agent workflows.
- [IBM watsonx](https://www.ibm.com/watsonx) - Enterprise AI platform with foundation models, model training, and AI governance for business workflows.

## Cloud GPU Providers

- [RunPod](https://www.runpod.io/) - Flexible, affordable GPU cloud with on-demand and serverless compute, supporting A100/H100 GPUs with competitive hourly pricing.
- [Lambda Cloud](https://lambdalabs.com/cloud) - GPU cloud for AI developers with H100/A100 instances (~$1.10/hr for A100 80GB), zero egress fees, and InfiniBand networking.
- [CoreWeave](https://www.coreweave.com/) - Kubernetes-native GPU cloud at hyperscale serving OpenAI and Microsoft, claiming up to 35x faster performance than legacy clouds.
- [Vast.ai](https://vast.ai/) - GPU marketplace with competitive bidding driving prices down (~$0.50/hr for A100 80GB), best for cost-sensitive workloads.
- [Nebius](https://nebius.com/) - AI-native cloud with next-gen NVIDIA Blackwell Ultra compute, transparent capacity management, and European data centers.
- [TensorDock](https://www.tensordock.com/) - GPU marketplace spanning 100+ global locations with H100 at ~$2.25/hr and focus on accessibility.
- [Paperspace (DigitalOcean)](https://www.paperspace.com/) - GPU cloud with notebooks, virtual desktops, and serverless functions, ideal for interactive ML development.
- [Crusoe Cloud](https://crusoe.ai/) - Climate-aligned GPU cloud powered by clean energy for sustainable AI training and inference.
- [Fluidstack](https://www.fluidstack.io/) - Distributed GPU cloud aggregating idle compute capacity at competitive prices for AI workloads.

## Web Scraping & Data Extraction for AI

- [Firecrawl](https://www.firecrawl.dev/) - API for scraping, crawling, and extracting structured data from websites into LLM-ready markdown or structured formats.
- [Crawl4AI](https://github.com/unclecode/crawl4ai) - Open-source AI-ready web crawler (58k+ GitHub stars) generating clean Markdown with local LLM support for privacy-sensitive use.
- [Spider](https://spider.cloud/) - Fast web scraping API designed for AI applications with structured data extraction and content parsing.
- [Jina Reader](https://jina.ai/reader/) - API for converting any URL into LLM-friendly text, extracting clean content from web pages for AI consumption.
- [ScrapeGraphAI](https://scrapegraphai.com/) - Open-source web scraping library using LLMs to create intelligent scraping pipelines from natural language descriptions.

---

## Contributing

Contributions are welcome! Please read the [contributing guidelines](CONTRIBUTING.md) first.

## License

[![CC0](https://licensebuttons.net/p/zero/1.0/88x31.png)](https://creativecommons.org/publicdomain/zero/1.0/)
