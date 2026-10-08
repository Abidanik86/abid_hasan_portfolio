export const personalInfo = {
  name: "Abid Hasan Anik",
  title: "Software Engineer & Backend Systems Architect",
  tagline: "Architecting resilient distributed microservices, event-driven pipelines, and high-performance full-stack web applications.",
  location: "Dhaka, Bangladesh",
  timezone: "UTC+6 (Dhaka Standard Time)",
  email: "abidianik86@gmail.com",
  github: "https://github.com/Abidanik86",
  githubHandle: "Abidanik86",
  linkedin: "https://www.linkedin.com/in/abid-hasan-anik",
  linkedinHandle: "in/abid-hasan-anik",
  photo: "/abid_hasan_anik.jpg",
  availabilityStatus: "Available for High-Impact Roles & Collaborations",
  summary: `Production-focused Software Engineer with 2.5+ years of commercial experience architecting resilient backend systems, distributed microservices, and secure REST APIs using Golang (Fiber) and Python (FastAPI, Django). Track record delivering national-scale infrastructure including central government Single Sign-On (SSO) systems, postal ballot event-streaming engines (Kafka/Go), fintech Anti-Money Laundering (AML) platforms, and aquaculture IoT systems. Proven expertise in database query optimization (PostgreSQL, Redis), message broker pipelines (Celery, Kafka, RabbitMQ), browser automation (Playwright), and containerization (Docker). Accustomed to agile, remote, and asynchronous cross-functional workflows.`
};

export const metricsData = [
  {
    label: "Commercial Experience",
    value: "2.5+",
    unit: "Years",
    description: "Production software engineering & microservices"
  },
  {
    label: "National Systems",
    value: "2+",
    unit: "Govt Scale",
    description: "Central SSO & Postal Election Commission engines"
  },
  {
    label: "Enterprise Microservices",
    value: "8+",
    unit: "Delivered",
    description: "Fintech, IoT, Postal, E-commerce, Automation"
  },
  {
    label: "Event Streaming Throughput",
    value: "100k+",
    unit: "Events",
    description: "Kafka & RabbitMQ asynchronous queue pipelines"
  }
];

export const skillsData = {
  languages: [
    { name: "Golang", level: 92, badge: "Primary", icon: "Code2" },
    { name: "Python", level: 94, badge: "Primary", icon: "Terminal" },
    { name: "JavaScript (ESNext)", level: 85, badge: "Modern", icon: "FileCode" },
    { name: "SQL (PostgreSQL/MySQL)", level: 90, badge: "Advanced", icon: "Database" }
  ],
  backendFrameworks: [
    { name: "Go Fiber", level: 92, category: "Golang" },
    { name: "FastAPI", level: 93, category: "Python" },
    { name: "Django & DRF", level: 90, category: "Python" },
    { name: "GORM & Goroutines", level: 88, category: "Golang" },
    { name: "RESTful API Design", level: 95, category: "Architecture" }
  ],
  messagingAndQueues: [
    { name: "Apache Kafka", level: 86, desc: "Event Streaming, Consumer Groups, Dead-Letter Recovery" },
    { name: "RabbitMQ", level: 88, desc: "AMQP Asynchronous Message Broker, Exchange Routing" },
    { name: "Celery", level: 90, desc: "Distributed Task Queues, Retries & Worker Scheduling" }
  ],
  databasesAndStorage: [
    { name: "PostgreSQL", level: 92, desc: "Indexing, Query Tuning, Relational Schema & Partitioning" },
    { name: "Redis", level: 90, desc: "In-memory Caching, Pub/Sub, TTL, Rate-Limiting" },
    { name: "MySQL", level: 85, desc: "Relational Queries, Stored Procedures, Optimization" }
  ],
  securityAndIdentity: [
    { name: "Single Sign-On (SSO)", level: 92, desc: "Centralized Identity Provider for Multi-Department Apps" },
    { name: "Multi-Factor OTP", level: 90, desc: "SMS/Time-based OTP & KYC Security Verification" },
    { name: "JWT & RBAC", level: 94, desc: "Granular Role-Based Permissions & Cryptographic Verification" },
    { name: "Token-Bucket Limiter", level: 88, desc: "DDoS Mitigation & High-Traffic Rate Limiting" }
  ],
  frontendAndTools: [
    { name: "React 19 & Vite", level: 85, desc: "Modern Reactive UI, Hooks, State Architecture" },
    { name: "GSAP 3 & Lenis", level: 80, desc: "Scroll-Driven Cinematics, RAF Ticker Sync" },
    { name: "Flutter", level: 75, desc: "Cross-Platform Mobile Dashboards" },
    { name: "Docker & Compose", level: 88, desc: "Containerization, Multi-Stage Builds, Isolation" },
    { name: "Playwright Automation", level: 90, desc: "Headless Browser Scraping, Anti-Detection, 2Captcha" },
    { name: "Linux & Git/GitHub", level: 90, desc: "System Administration, Bash Scripting, CI/CD" }
  ]
};

export const projectsData = [
  {
    id: "butterfly-effect",
    title: "Butterfly Effect",
    subtitle: "Haute Couture Digital Atelier & E-Commerce Web App",
    category: "Full-Stack & React",
    featured: true,
    scale: "60–120 FPS Cinematic",
    techStack: ["React 19", "Vite", "GSAP 3", "Lenis", "Vanilla CSS", "Design Tokens"],
    summary: "A bespoke haute couture e-commerce brand experience featuring high-performance scroll choreography synchronized with GSAP's RAF ticker.",
    highlights: [
      "Cinematic Scroll Architecture: Engineered a 17-section scroll-driven brand experience maintaining smooth 60–120 FPS by synchronizing Lenis smooth-scrolling engine with GSAP's RAF ticker.",
      "Interactive E-Commerce Core: Built a full client-side commerce system featuring a slide-out Cart Drawer with free-shipping threshold calculations.",
      "Quick-View Product Modal with dynamic color swatches, size selectors, and persistent localStorage state management.",
      "Zero-bloat Design Tokens: Authored fluid typography and responsive spacing in pure vanilla CSS for instant load performance."
    ],
    metrics: "17-Section Cinematic • 60–120 FPS Render • 0ms Layout Shifts",
    github: "https://github.com/Abidanik86/butterfly_effect_frontend.git",
    liveDemo: "https://butterfly-effect-frontend.vercel.app/",
    color: "from-purple-500/20 to-pink-500/20",
    borderGlow: "rgba(168, 85, 247, 0.4)"
  },
  {
    id: "dakporichoy",
    title: "Dakporichoy",
    subtitle: "Central SSO & Identity Authentication Platform",
    category: "Security & Microservices",
    featured: true,
    scale: "National Government Infrastructure",
    techStack: ["Django", "PostgreSQL", "OTP Verification", "Cryptography", "Token-Bucket Rate Limiter"],
    summary: "A national single sign-on authentication service used across multiple departmental government applications in Bangladesh.",
    highlights: [
      "Engineered secure Single Sign-On (SSO) engine unifying identity across multiple autonomous government agency portals.",
      "Implemented Multi-Factor OTP verification, KYC security verification, and cryptographic token validation.",
      "Engineered immutable audit logging and Token-Bucket rate limiting to prevent credential stuffing and brute-force attacks.",
      "Optimized PostgreSQL schema to handle concurrent authentication peaks with zero security compromises."
    ],
    metrics: "National Govt Scale • Multi-Dept SSO • Cryptographic Integrity",
    github: null,
    liveDemo: "https://sso.ekdak.com/login",
    color: "from-emerald-500/20 to-teal-500/20",
    borderGlow: "rgba(168, 85, 247, 0.4)"
  },
  {
    id: "postal-ballot",
    title: "Postal Ballot Microservice System",
    subtitle: "High-Throughput Bulk Event-Driven Processing Engine",
    category: "Golang & Microservices",
    featured: true,
    scale: "Election Commission Scale",
    techStack: ["Golang", "Apache Kafka", "PostgreSQL", "Microservices", "Docker"],
    summary: "A high-performance Kafka consumer architecture built for the Election Commission to process bulk postal ballots asynchronously.",
    highlights: [
      "Architected a robust Kafka consumer group pipeline in Golang to ingest and process high-volume postal ballot events without bottlenecks.",
      "Automated bilingual PDF ballot generation secured with unique dynamic QR and Barcodes.",
      "Implemented microservice health telemetry, Prometheus metrics, automatic retries, and dead-letter queue (DLQ) recovery mechanisms.",
      "Containerized service with multi-stage Docker builds ensuring rapid startup and minimal footprint."
    ],
    metrics: "High Concurrency Kafka • Zero-Loss DLQ • Automated Bilingual PDFs",
    github: null,
    liveDemo: "https://election2026.ekdak.com/login",
    color: "from-cyan-500/20 to-blue-500/20",
    borderGlow: "rgba(6, 182, 212, 0.4)"
  },
  {
    id: "slotbro",
    title: "SlotBRO",
    subtitle: "Cross-Platform Automation & Queue Platform",
    category: "Full-Stack & Automation",
    featured: true,
    scale: "High-Concurrency Async",
    techStack: ["FastAPI (Python)", "React", "PostgreSQL", "Playwright", "Flutter"],
    summary: "Full-stack automation platform orchestrating asynchronous queue workers for high-concurrency job dispatching, paired with web and mobile control planes.",
    highlights: [
      "Architected asynchronous FastAPI backend and PostgreSQL relational schema powering background queue workers for high-concurrency job dispatching.",
      "Engineered cross-platform mobile application in Flutter alongside a responsive React web dashboard.",
      "Integrated Playwright automation workers with anti-detection logic for robotic task scheduling.",
      "Real-time live job telemetry and execution log monitoring directly from the management console."
    ],
    metrics: "Async Queue Workers • Flutter + React Control Plane • Automated Dispatch",
    github: null,
    liveDemo: null,
    color: "from-amber-500/20 to-orange-500/20",
    borderGlow: "rgba(245, 158, 11, 0.4)"
  },
  {
    id: "aquabit",
    title: "AquaBit",
    subtitle: "IoT Aquaculture Enterprise Resource Platform",
    category: "Golang & Microservices",
    featured: false,
    scale: "Enterprise IoT Platform",
    techStack: ["Golang (Fiber)", "PostgreSQL", "Redis", "GORM", "Docker"],
    summary: "Enterprise IoT backend managing polymorphic asset inventories, aquaculture species lifecycle, and automated supply replenishment.",
    highlights: [
      "Engineered polymorphic asset and inventory model tracking feed, medicine, machinery, and aquatic species with dynamic reorder thresholds.",
      "Built multi-step dynamic procurement and feeding workflow using Go Fiber, PostgreSQL, and Redis caching.",
      "Automated SQL seed migration registries and containerized microservice deployments with Docker."
    ],
    metrics: "Go Fiber Low-Latency • Redis Caching • Polymorphic Data Model",
    github: null,
    liveDemo: "https://aquabit.online/",
    color: "from-sky-500/20 to-indigo-500/20",
    borderGlow: "rgba(56, 189, 248, 0.4)"
  },
  {
    id: "ibanker-aml",
    title: "iBankerAML",
    subtitle: "Fintech Anti-Money Laundering & Compliance Platform",
    category: "Security & Microservices",
    featured: false,
    scale: "Fintech Enterprise",
    techStack: ["Golang (Fiber)", "PostgreSQL", "JWT", "RBAC", "React"],
    summary: "Fintech compliance platform detecting suspicious financial transactions and automating regulatory audit trails.",
    highlights: [
      "Built enterprise AML compliance backend covering Suspicious Transaction Reporting (STR/CTR) and case audit investigations.",
      "Designed and delivered the Training Academy module featuring courses, examinations, prerequisites, and progress tracking.",
      "Implemented strictly enforced Role-Based Access Control (RBAC) with granular cryptographic JWT authorizations."
    ],
    metrics: "Fintech Compliance • STR/CTR Audits • Strict RBAC Security",
    github: null,
    liveDemo: "https://aml.codeforgebd.com/login",
    color: "from-rose-500/20 to-red-500/20",
    borderGlow: "rgba(244, 63, 94, 0.4)"
  },
  {
    id: "team-manager",
    title: "Team Manager",
    subtitle: "Agile Project Management Engine & Dashboards",
    category: "Golang & Microservices",
    featured: false,
    scale: "Enterprise Collaboration SaaS",
    techStack: ["Golang (Fiber)", "PostgreSQL", "JWT", "RBAC", "REST APIs"],
    summary: "Agile project management and sprint visualization engine built in Go Fiber for backlogs, task delegation, milestone tracking, and sprint burn-downs.",
    highlights: [
      "Engineered high-performance REST endpoints in Go Fiber for sprint backlogs, task delegation, and progress visualization dashboards.",
      "Built role-based project permission model, team collaboration workflows, epic/feature/story tracking, and reporting analytics.",
      "Optimized relational schema in PostgreSQL with JWT authentication and strict access controls."
    ],
    metrics: "Go Fiber High-Speed API • Sprint Tracking • RBAC Authorization",
    github: null,
    liveDemo: "https://manager.codeforgebd.com/",
    color: "from-emerald-500/20 to-cyan-500/20",
    borderGlow: "rgba(16, 185, 129, 0.4)"
  },
  {
    id: "emts-postal",
    title: "EMTS (Electronic Money Transfer System)",
    subtitle: "National Postal Financial Delivery & POS APIs",
    category: "Fintech & Security",
    featured: false,
    scale: "National Branch POS Network",
    techStack: ["Django", "Django REST Framework (DRF)", "PostgreSQL", "RabbitMQ"],
    summary: "Financial transaction platform connecting postal branches and point-of-sale systems with asynchronous queuing.",
    highlights: [
      "Built secure financial transaction REST APIs and cash delivery workflows for postal branches nationwide.",
      "Developed multi-role dashboards for Postmasters, Cashier Operators, and District Accountants.",
      "Integrated with RabbitMQ for reliable asynchronous transaction queues ensuring zero financial event dropping."
    ],
    metrics: "RabbitMQ Async Queues • Postal Branch POS • Financial Audit Logs",
    github: null,
    liveDemo: null,
    color: "from-teal-500/20 to-emerald-500/20",
    borderGlow: "rgba(20, 184, 166, 0.4)"
  },
  {
    id: "linkedin-automation",
    title: "LinkedIn Automation Microservice",
    subtitle: "Resilient Headless Scraper with Anti-Bot & Captcha Bypass",
    category: "Full-Stack & Automation",
    featured: false,
    scale: "30–60s Extraction Cycle",
    techStack: ["Python", "FastAPI", "PostgreSQL", "Docker", "Playwright", "2Captcha"],
    summary: "Headless automation microservice extracting enriched profile data with automated captcha solving and fingerprint camouflage.",
    highlights: [
      "Built automated profile extraction API using Playwright with browser stealth masking to prevent detection.",
      "Integrated 2Captcha solving bypass for seamless background execution with 30–60 second cycle completion.",
      "Packaged in Docker with optimized chromium binaries for lightweight headless deployment."
    ],
    metrics: "Playwright Stealth • 30–60s Cycle • Docker Containerized",
    github: null,
    liveDemo: null,
    color: "from-blue-600/20 to-cyan-600/20",
    borderGlow: "rgba(37, 99, 235, 0.4)"
  }
];

export const experienceData = [
  {
    period: "April 2026 – Present",
    role: "Software Engineer (Remote)",
    company: "Code Forge BD",
    type: "Full-Time Remote",
    description: "Collaborating in an asynchronous remote engineering culture delivering high-performance SaaS products, automated queue workflows, and scalable enterprise microservices.",
    achievements: [
      "Engineered 'Butterfly Effect' (React 19, Vite, GSAP 3, Lenis) delivering 17-section cinematic scroll synced at 60–120 FPS.",
      "Architected full-stack automation platform 'SlotBRO' with FastAPI, background queue dispatchers, Flutter mobile app, and React web dashboard.",
      "Designed 'AquaBit' IoT platform in Go Fiber, PostgreSQL, and Redis caching with polymorphic inventory models.",
      "Developed 'iBankerAML' compliance backend with suspicious transaction reporting (STR/CTR) and Go Fiber services.",
      "Built Dockerized Playwright automation microservices with stealth fingerprinting and 2Captcha bypass."
    ],
    skills: ["Golang", "Go Fiber", "Python FastAPI", "React 19", "PostgreSQL", "Redis", "Docker", "Playwright", "GSAP 3"]
  },
  {
    period: "September 2024 – March 2026",
    role: "Backend Developer",
    company: "Smart Think",
    location: "Banani, Dhaka, Bangladesh",
    type: "Enterprise & National Systems",
    description: "Architected enterprise and national-level backend systems for postal infrastructure, central authentication, and microservices.",
    achievements: [
      "Designed and deployed 'Dakporichoy', a national Single Sign-On (SSO) service used across departmental government applications.",
      "Implemented multi-factor OTP verification, KYC security verification, cryptographic token validation, and token-bucket rate limiting.",
      "Engineered 'EMTS' financial transaction APIs and RabbitMQ asynchronous queues for postal branches with multi-role dashboards.",
      "Architected 'Postal Ballot Microservice System' Kafka consumer pipeline for Election Commission bulk ballot processing and bilingual QR-secured PDFs.",
      "Engineered package routing in 'DMS Core' using hierarchical address mapping and Celery queues.",
      "Built 'Ekdak Multi-Service Platform' cloud printing and SMS notification dispatchers integrated with legacy postal POS registries."
    ],
    skills: ["Django", "Django REST Framework", "Golang", "Apache Kafka", "RabbitMQ", "PostgreSQL", "Celery", "SSO & Cryptography"]
  },
  {
    period: "March 2024 – September 2024",
    role: "Backend Developer Intern",
    company: "Smart Think",
    location: "Banani, Dhaka, Bangladesh",
    type: "Internship",
    description: "Developed geo-lookup APIs and certificate verification workflows.",
    achievements: [
      "Postcode Map API: Developed geo-lookup REST APIs with FastAPI and optimized PostgreSQL queries for national postal coordinates.",
      "Salubrity Certification System: Built backend certificate issuance and verification workflows using Django and PostgreSQL."
    ],
    skills: ["FastAPI", "Django", "PostgreSQL", "REST APIs", "Geo Queries"]
  },
  {
    period: "Prior Experience",
    role: "Freelance Web Developer",
    company: "Independent Client Engagements",
    location: "Remote",
    type: "Contract",
    description: "Built client solutions including restaurant ordering systems (Laravel, MySQL) and editorial news CMS platforms with role-based workflows.",
    achievements: [
      "Delivered full online ordering, table reservations, and admin control panels.",
      "Created multi-tier editorial workflows with drafts, reviews, and publishing permissions."
    ],
    skills: ["PHP", "Laravel", "MySQL", "JavaScript", "HTML5/CSS3"]
  }
];

export const educationData = {
  degree: "Bachelor of Science (B.Sc.) in Computer Science & Engineering",
  institution: "Dhaka International University",
  period: "2017 – 2021",
  cgpa: "3.02 / 4.00",
  coreModules: [
    "Distributed Systems",
    "Database Management Systems (DBMS)",
    "Data Structures & Algorithms",
    "Object-Oriented Software Engineering",
    "Computer Networks",
    "Operating Systems & Architecture"
  ]
};

export const architectureSpotlight = {
  title: "Core Architectural Patterns in Action",
  subtitle: "How Abid architects high-concurrency, zero-loss backend infrastructure",
  flows: [
    {
      id: "event-pipeline",
      name: "Kafka Bulk Event-Streaming Pipeline",
      context: "Election Commission Postal Ballot Processing Engine",
      throughput: "High-Volume Parallel Consumer Ingestion",
      steps: [
        { title: "Incoming Request / Ballot", role: "Fast Ingest", desc: "Signed ballot transaction hits API Gateway with cryptographic payload." },
        { title: "Kafka Topic Partitioning", role: "Message Distribution", desc: "Events partitioned by district hash into high-throughput Kafka topics." },
        { title: "Go Fiber Worker Pool", role: "Concurrent Processing", desc: "Golang goroutines consume in parallel with zero mutex contention." },
        { title: "PostgreSQL + Redis State", role: "Persistence & Cache", desc: "Transactional write to PostgreSQL with dead-letter queue (DLQ) fallback." },
        { title: "Bilingual QR PDF Generator", role: "Artifact Delivery", desc: "Automated generation of tamper-evident barcode & QR ballot documents." }
      ]
    },
    {
      id: "sso-security",
      name: "Central National SSO & Zero-Trust Auth",
      context: "Dakporichoy Single Sign-On Platform",
      throughput: "Multi-Department Government Verification",
      steps: [
        { title: "Identity Request", role: "Client Handshake", desc: "Citizen or official requests access to agency portal." },
        { title: "Token-Bucket Rate Limiter", role: "DDoS Mitigation", desc: "In-memory Redis token bucket prevents brute force & credential stuffing." },
        { title: "Multi-Factor OTP & KYC", role: "Verification Layer", desc: "Cryptographic SMS OTP dispatch and identity registry validation." },
        { title: "Granular RBAC Token", role: "Authorization", desc: "Signed JWT minted with strictly verified departmental roles & scopes." },
        { title: "Immutable Audit Log", role: "Compliance", desc: "Append-only cryptographic audit record written to tamper-proof logs." }
      ]
    }
  ]
};
