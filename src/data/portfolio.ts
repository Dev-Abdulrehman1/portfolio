import { privateProjects } from "./private-projects";

export type Project = {
  slug: string;
  title: string;
  tagline: string;
  description: string[];
  role: string;
  year: string;
  stack: string[];
  features: string[];
  repoUrl?: string; // omitted when the work is private — no source link is rendered
  liveUrl?: string;
  accent: string; // gradient used for the card/hero visual
  image?: string; // thumbnail in /public/projects; the gradient is the fallback
  featured?: boolean;
  private?: boolean; // NDA work: card is public, code and repo are not
};

export const profile = {
  name: "Abdul Rehman",
  role: "Software Developer",
  location: "Lahore, Pakistan",
  bio: "I build web applications and AI systems — Flask and FastAPI backends, React frontends, RAG pipelines over private docs, and MCP tool servers that let LLM clients drive real systems.",
  email: "nomi66623@gmail.com",
  github: "https://github.com/Dev-Abdulrehman1",
  githubHandle: "Dev-Abdulrehman1",
  avatar: "https://avatars.githubusercontent.com/u/259087494?v=4",
};

export const skills = [
  { name: "Python", level: 90 },
  { name: "Flask", level: 85 },
  { name: "JavaScript", level: 80 },
  { name: "React", level: 80 },
  { name: "TypeScript", level: 70 },
  { name: "HTML / CSS", level: 90 },
  { name: "SQL / SQLite", level: 75 },
  { name: "Tailwind CSS", level: 85 },
  { name: "RAG / Vector Search", level: 82 },
  { name: "MCP Tool Servers", level: 78 },
];

const publicProjects: Project[] = [
  {
    slug: "voice-engine",
    title: "Voice Engine",
    tagline: "Turn a script into natural speech, straight from the browser",
    description: [
      "A text-to-speech app: paste a script, press Generate, and the audio plays in the page a few seconds later. Every generation is kept in a local history you can replay or delete.",
      "The backend is FastAPI calling OpenRouter's speech endpoint (Fish Audio s2.1-pro), which returns raw mp3 bytes that get written to disk and streamed back to the browser as a blob.",
      "History lives in SQLite through Python's standard library — no ORM, no migration tooling, and no build step for the frontend. Every API route requires the access key from .env, and failed generations are stored too, with the provider's error message, so breakage stays visible instead of silent.",
    ],
    role: "Solo developer",
    year: "2026",
    stack: ["Python", "FastAPI", "OpenRouter", "SQLite", "JavaScript"],
    features: [
      "Script-to-speech generation through OpenRouter's text-to-speech endpoint",
      "Built-in player that plays the fresh mp3 as a blob — no file juggling",
      "Generation history with timestamp, size, and round-trip time",
      "Failed runs kept with the provider's error message for real debugging",
      "Access-key gate on every route; the app refuses to start without it",
    ],
    repoUrl: "https://github.com/Dev-Abdulrehman1/VOICE-ENGINE",
    accent: "from-emerald-400/40 via-teal-500/20 to-cyan-300/30",
    image: "/projects/voice-engine.svg",
    featured: true,
  },
  {
    slug: "ai-studio-site",
    title: "AI Studio Site",
    tagline: "This cinematic portfolio — React, Vite & Tailwind",
    description: [
      "The site you're looking at: a multi-page portfolio with a cinematic full-width CTA, video backgrounds, and liquid glassmorphism UI built from scratch.",
      "Every page shares the black-and-white design language — Instrument Serif italics for voice, Barlow for everything else, and glass surfaces with gradient borders rendered via a mask-composite trick.",
      "The hero streams an MP4 background with graceful top/bottom fades so media dissolves into the page instead of ending at a hard edge.",
    ],
    role: "Solo developer",
    year: "2026",
    stack: ["React", "TypeScript", "Vite", "Tailwind CSS", "React Router"],
    features: [
      "Multi-page routing with project detail pages",
      "Liquid glass buttons with gradient pseudo-element borders",
      "Full-bleed video background with edge fades",
      "Responsive typography from mobile to desktop",
      "Fully typed with strict TypeScript",
    ],
    accent: "from-violet-400/40 via-fuchsia-500/20 to-pink-300/30",
    image: "/projects/ai-studio-site.svg",
  },
];

export const projects: Project[] = [...publicProjects, ...privateProjects];

export const featuredProjects = projects.filter((p) => p.featured);

export type Service = {
  slug: string;
  title: string;
  short: string; // one-liner for cards/teasers
  description: string;
  deliverables: string[];
  icon: "workflow" | "chat" | "data" | "agents";
};

export const services: Service[] = [
  {
    slug: "workflow-automation",
    title: "Workflow Automation",
    short:
      "Replace the copy-paste routine — scripts and integrations that run your repetitive work for you.",
    description:
      "If your team does the same thing every day by hand — moving data between tools, generating reports, renaming files, sending follow-ups — I map the workflow and rebuild it as reliable automation. Python and Flask on the backend, scheduled jobs, and clean hooks into the SaaS tools you already use.",
    deliverables: [
      "Workflow audit: where the hours actually go",
      "Event- and schedule-driven automation scripts",
      "Integrations with email, sheets, CRMs, and internal APIs",
      "Logging and alerts so failures never fail silently",
      "Handoff docs so your team can maintain it",
    ],
    icon: "workflow",
  },
  {
    slug: "ai-chatbots",
    title: "AI Chatbots & Assistants",
    short:
      "Support and internal assistants grounded in your own docs, not generic answers.",
    description:
      "Custom assistants built on LLM APIs and grounded in your own content — product docs, FAQs, tickets, internal wikis. Retrieval-augmented so answers cite real sources, with guardrails for tone and scope. Deploy as a website widget, Slack bot, or standalone page — and expose the same retrieval layer to any MCP-compatible client (Claude, IDE agents, internal tools).",
    deliverables: [
      "RAG pipeline: chunking, embeddings, hybrid search, reranking",
      "MCP server exposing your docs and tools to LLM clients",
      "Chat UI or integration into your existing product",
      "Escalation path to a human when the bot is unsure",
      "Analytics on what users actually ask",
      "Prompt and cost tuning before launch",
    ],
    icon: "chat",
  },
  {
    slug: "data-pipelines",
    title: "Data Collection & Pipelines",
    short:
      "Scrapers, ETL jobs, and clean datasets delivered on a schedule.",
    description:
      "Recurring data work automated end to end: collecting from APIs and websites, cleaning and deduplicating, then loading into the database or spreadsheet your team uses. Built with Python and SQLAlchemy — the same stack as my Voice Engine backend — with retry logic and validation baked in.",
    deliverables: [
      "Scrapers and API collectors with rate limiting",
      "Cleaning, dedup, and validation rules",
      "Scheduled runs with failure notifications",
      "SQLite or SQL storage with a query-friendly schema",
      "CSV / JSON / webhook exports downstream",
    ],
    icon: "data",
  },
  {
    slug: "ai-agents",
    title: "AI Agents & Internal Tools",
    short:
      "Multi-step AI agents paired with small tools your team uses daily.",
    description:
      "When one prompt isn't enough: agents that plan, call tools, and complete multi-step tasks — triaging tickets, drafting replies, summarizing threads, filling forms. Tools are wrapped as MCP servers, so the same integrations work across Claude, ChatGPT, and your own agents instead of being locked to one vendor. Paired with lightweight React frontends so your team drives it from a real interface instead of a terminal.",
    deliverables: [
      "MCP tool servers over your DB, search, email, and internal APIs",
      "Agent with tool access (search, DB, email, your APIs)",
      "Human-in-the-loop review before anything is sent",
      "React dashboard to run and monitor agents",
      "Cost and latency budget agreed up front",
      "Iteration pass on real usage data",
    ],
    icon: "agents",
  },
];

export const serviceProcess = [
  {
    step: "01",
    title: "Audit",
    body: "We map the workflow and count the hours it costs you today.",
  },
  {
    step: "02",
    title: "Prototype",
    body: "A working slice in days, not months — validated on your real data.",
  },
  {
    step: "03",
    title: "Automate",
    body: "Production build with logging, alerts, and failure handling.",
  },
  {
    step: "04",
    title: "Handoff",
    body: "Docs, a walkthrough, and support so your team owns it.",
  },
];
