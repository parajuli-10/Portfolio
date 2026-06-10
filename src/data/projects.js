const projects = [
  {
    slug: "resumatch",
    title: "ResuMatch",
    category: "Product",
    kind: "Web application",
    period: "2025 — present",
    featured: true,
    status: "In active development",
    summary:
      "A resume and job-description comparison tool that uses NLP techniques to show candidates how well their resume matches a role — and what to fix.",
    context:
      "Job seekers tailor resumes mostly by guesswork. Automated screening systems reward specific, relevant language, but applicants get no feedback on how their resume reads against a posting.",
    problem:
      "Give applicants a fast, honest signal: paste a resume and a job description, see where they align, where they don't, and which skills or keywords are missing.",
    audience: "Graduates, career changers, and anyone applying through automated screening pipelines.",
    constraints: [
      "Results need to feel explainable — a bare percentage score builds no trust",
      "Resume text is sensitive, so processing should stay client-side wherever possible",
      "Must stay fast on free-tier hosting"
    ],
    contribution: "Sole designer and developer — product concept, interface and implementation.",
    approach: [
      "Tokenise and normalise both documents, then compare term frequency and skill phrases rather than raw string overlap",
      "Surface results as grouped insights — matched strengths, partial matches, and gaps — instead of a single opaque score",
      "Keep the interface to one focused screen: two inputs, one readable report"
    ],
    stack: ["React", "JavaScript", "NLP techniques", "Node.js"],
    outcomes: [
      "Working comparison engine producing keyword and skill-gap insights",
      "Single-screen interface designed around the report, not the inputs"
    ],
    lessons: [
      "Explainability beats precision — users trust three named gaps more than a 73% score",
      "Normalising messy real-world resume text is most of the actual work"
    ],
    roadmap: [
      "Synonym and related-skill matching (e.g. 'Entra ID' ≈ 'Azure AD')",
      "Exportable tailoring checklist",
      "Optional AI-written improvement suggestions"
    ],
    image: {
      src: "/images/projects/resumatch.svg",
      alt: "ResuMatch interface placeholder"
    },
    links: {
      live: null,
      code: null
    }
  },
  {
    slug: "invoicing-platform",
    title: "Invoicing & Accounting Platform",
    category: "Product concept",
    kind: "Digital product design",
    period: "2025 — present",
    featured: true,
    status: "Concept & prototyping",
    summary:
      "A product concept for small service businesses: invoicing, expense tracking and simple accounting in one place, without the bloat of full accounting suites.",
    context:
      "Sole traders and small service businesses juggle invoices in Word templates, payments in spreadsheets, and tax-time panic once a year. Full accounting platforms are priced and designed for businesses with bookkeepers.",
    problem:
      "Design a system where creating a professional invoice, tracking its payment, and seeing an honest picture of income takes minutes — not an accounting qualification.",
    audience: "Freelancers, tradespeople and small service businesses without dedicated finance staff.",
    constraints: [
      "Trust is the product — financial figures must always reconcile",
      "Every workflow must survive a busy user on a phone",
      "Start simple enough to ship, structured enough to grow"
    ],
    contribution: "Product definition, system architecture, interface design and frontend prototyping.",
    approach: [
      "Core objects modelled first — clients, invoices, line items, payments, expenses — with state transitions (draft → sent → paid → overdue) driving the whole UI",
      "Frontend prototyped in React; backend designed as a Node.js API over a relational schema (SQL) so totals are computed, never stored twice",
      "Interface follows a 'one number you can trust' principle: each screen leads with the figure that matters"
    ],
    stack: ["React", "Node.js", "SQL", "REST API design"],
    outcomes: [
      "Defined product scope, data model and screen architecture",
      "Interactive interface prototype for the invoice lifecycle"
    ],
    lessons: [
      "Modelling invoice state transitions early prevented an entire class of UI ambiguity",
      "Small-business software earns loyalty through predictability, not features"
    ],
    roadmap: [
      "GST/BAS-aware reporting for Australian sole traders",
      "Recurring invoices and payment reminders",
      "Bank-feed import for reconciliation"
    ],
    image: {
      src: "/images/projects/invoicing.svg",
      alt: "Invoicing platform interface placeholder"
    },
    links: {
      live: null,
      code: null
    }
  },
  {
    slug: "endpoint-rollout",
    title: "Enterprise Endpoint Rollout",
    category: "Case study",
    kind: "Enterprise IT · anonymised",
    period: "2024 — 2025",
    featured: true,
    status: "Delivered",
    summary:
      "Deployment, validation and rollout contribution across more than 2,000 Windows endpoint devices in a multi-site healthcare network of 12,500+ users.",
    context:
      "A large public healthcare organisation refreshing and standardising its Windows endpoint fleet across multiple hospital sites — where a broken device can mean a clinician locked out of patient systems. Details are anonymised; no internal specifics are disclosed.",
    problem:
      "Prepare, validate and roll out thousands of endpoints to a consistent, supportable standard while clinical work continues around the clock.",
    audience: "Clinical and corporate staff across hospital campuses and satellite sites.",
    constraints: [
      "Healthcare environments cannot absorb careless downtime — rollout windows had to respect clinical schedules",
      "Every device had to land with the right applications, policies and printer mappings on first login",
      "Support volume had to stay manageable during transition"
    ],
    contribution:
      "Endpoint preparation, SCCM/Intune-based deployment tasks, post-deployment validation, floor support during rollout waves, user communication, and documentation feeding back into the runbook.",
    approach: [
      "Standardised builds deployed via SCCM and Intune, validated against a per-role checklist before handover",
      "Wave-based rollouts coordinated with department schedules, with on-the-floor support immediately after each wave",
      "Issues logged and patterns escalated, so recurring faults were fixed in the image, not re-fixed per device"
    ],
    stack: ["SCCM", "Microsoft Intune", "Windows 10/11", "Active Directory", "Entra ID", "PowerShell", "Cherwell ITSM"],
    outcomes: [
      "2,000+ devices deployed and validated to a consistent standard",
      "Validation checklists and fix-patterns documented for reuse by the wider team"
    ],
    lessons: [
      "At scale, the boring artefacts — checklists, naming conventions, runbooks — are what actually protect quality",
      "Ten minutes of user communication prevents an hour of support calls"
    ],
    roadmap: null,
    image: {
      src: "/images/projects/endpoint-rollout.svg",
      alt: "Abstract diagram representing a staged endpoint deployment across hospital sites"
    },
    links: { live: null, code: null }
  },
  {
    slug: "theatre-migration",
    title: "Operating-Theatre Technology Migration",
    category: "Case study",
    kind: "Enterprise IT · anonymised",
    period: "2024 — 2025",
    featured: false,
    status: "Delivered",
    summary:
      "Contribution to migrating operating-theatre workstations from IGEL thin clients to a Windows and Citrix environment — where reliability is non-negotiable.",
    context:
      "Operating theatres ran on IGEL thin-client devices due for replacement with a Windows + Citrix Workspace setup. Theatre technology has a unique property: it must simply work, every time, on schedule. Details are anonymised.",
    problem:
      "Replace the device platform under clinical applications without disrupting surgical lists — migrations had to be planned, tested, reversible and invisible to theatre staff.",
    audience: "Surgical and theatre staff who interact with technology only when it interrupts them.",
    constraints: [
      "Work windows dictated entirely by theatre schedules, often out of hours",
      "Zero tolerance for an unusable workstation at list start",
      "Clinical applications had to behave identically through Citrix on the new platform"
    ],
    contribution:
      "Device configuration and staging, Citrix Workspace setup, pre-cutover testing, on-site migration support, immediate post-cutover checks and user-facing communication.",
    approach: [
      "Each room treated as its own mini-migration: staged hardware, tested sign-in and application paths, then cutover in approved windows",
      "A rollback path kept ready at every step — the old device stayed viable until the new one proved itself",
      "First-session checks with theatre staff after each cutover, so issues surfaced with support standing right there"
    ],
    stack: ["Citrix Workspace", "Windows 11", "IGEL", "Active Directory", "Endpoint configuration"],
    outcomes: [
      "Theatre workstations migrated to the new platform within planned windows",
      "Confidence built with clinical teams through visible testing and communication"
    ],
    lessons: [
      "In critical environments, the rollback plan is as important as the rollout plan",
      "Trust is built room by room — reliability is a reputation, not a metric"
    ],
    roadmap: null,
    image: {
      src: "/images/projects/theatre-migration.svg",
      alt: "Abstract diagram representing a staged thin-client to Windows and Citrix migration"
    },
    links: { live: null, code: null }
  },
  {
    slug: "kohinoor-legal",
    title: "Kohinoor Legal — Firm Website",
    category: "Client work",
    kind: "Website · WordPress",
    period: "2023 — 2024",
    featured: false,
    status: "Delivered",
    summary:
      "Website build and ongoing maintenance for a Melbourne legal practice — design, development, domain, DNS, hosting and content updates handled end to end.",
    context:
      "As web developer for Kohinoor Legal, I owned the firm's web presence: a professional, trustworthy site that prospective clients could find, read and contact — and that staff could rely on.",
    problem:
      "Deliver and maintain a multi-page firm website covering practice areas and enquiries, while managing the unglamorous foundations: domain registration, DNS, hosting and email deliverability.",
    audience: "Prospective legal clients researching the firm, plus the firm's own staff.",
    constraints: [
      "A legal audience expects restraint — credibility over flair",
      "Site management had to be simple enough for non-technical staff",
      "Small-practice budget: pragmatic platform choices over custom everything"
    ],
    contribution:
      "Sole web developer — design, WordPress build, responsive styling, contact forms, domain and DNS configuration, hosting setup and twelve months of maintenance.",
    approach: [
      "WordPress chosen deliberately so the firm could edit content without a developer on retainer",
      "Custom responsive styling kept the design clean and fast rather than theme-heavy",
      "DNS, email and hosting documented so nothing lived only in one person's head"
    ],
    stack: ["WordPress", "HTML", "CSS", "JavaScript", "DNS & hosting"],
    outcomes: [
      "Firm website delivered and maintained through a full year of operation",
      "Enquiry forms, domain and email administered reliably end to end"
    ],
    lessons: [
      "Client work is 50% communication — translating between technical reality and business intent",
      "The right platform is the one the client can live with after you leave"
    ],
    roadmap: null,
    image: {
      src: "/images/projects/kohinoor-legal.svg",
      alt: "Website screenshot placeholder"
    },
    links: {
      live: null,
      code: null
    }
  }
];

export default projects;
  