const projects = [
  {
    slug: "resumatch",
    title: "ResuMatch",
    category: "Product",
    kind: "Web application",
    period: "2025 — present",
    featured: true,
    status: "Active",
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
      alt: "ResuMatch interface"
    },
    links: {
      live: "https://resumatch.vercel.app",
      code: "https://github.com/parajuli-10/Resumatch"
    }
  },
  {
    slug: "kohinoor-legal",
    title: "Kohinoor Legal",
    category: "Client work",
    kind: "Website",
    period: "2023 — 2024",
    featured: true,
    status: "Live",
    summary:
      "Professional website for a Melbourne-based legal practice — design, development, and ongoing maintenance handled end to end.",
    context:
      "As web developer for Kohinoor Legal, I owned the firm's web presence: a professional, trustworthy site that prospective clients could find, read and contact.",
    problem:
      "Deliver and maintain a multi-page firm website covering practice areas and enquiries, while managing the unglamorous foundations: domain registration, DNS, hosting and email deliverability.",
    audience: "Prospective legal clients researching the firm, plus the firm's own staff.",
    constraints: [
      "A legal audience expects restraint — credibility over flair",
      "Site management had to be simple enough for non-technical staff",
      "Small-practice budget: pragmatic platform choices over custom everything"
    ],
    contribution:
      "Sole web developer — design, build, responsive styling, contact forms, domain and DNS configuration, hosting setup and maintenance.",
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
      alt: "Kohinoor Legal website"
    },
    links: {
      live: "https://kohinoorlegal.com/",
      code: null
    }
  },
  {
    slug: "naulo-ko-seli",
    title: "Naulo Ko Seli",
    category: "Product",
    kind: "E-commerce Platform",
    period: "2024 — present",
    featured: true,
    status: "Live",
    summary:
      "An e-commerce platform connecting Nepali artisans and businesses with customers globally. Custom marketplace with inventory, payments, and logistics integration.",
    context:
      "Small Nepali businesses lack affordable, easy-to-use online presence. Existing platforms either charge too much or don't understand local context — payment methods, shipping, language, product types.",
    problem:
      "Create a marketplace where Nepali sellers can list products, manage inventory, accept payments, and ship domestically and internationally without technical barriers.",
    audience: "Nepali artisans, small businesses, and customers looking for authentic Nepali products.",
    constraints: [
      "Must support local payment methods (eSewa, Khalti, bank transfers)",
      "Shipping integration for both domestic (Nepal) and international delivery",
      "Simple enough for non-technical sellers to use",
      "Mobile-first approach — majority of users on phones"
    ],
    contribution:
      "Full-stack development — platform architecture, frontend, backend API, payment integration, seller dashboard, customer experience.",
    approach: [
      "Built with React (frontend), Node.js/Express (backend), MongoDB (database)",
      "Integrated multiple payment gateways (eSewa, Khalti, Stripe for international)",
      "Seller dashboard for inventory, analytics, and order management",
      "Customer-facing storefront with product search, filtering, and checkout"
    ],
    stack: ["React", "Node.js", "MongoDB", "Stripe", "eSewa", "Khalti"],
    outcomes: [
      "Fully functional e-commerce platform with 50+ active sellers",
      "Payment processing for both local and international transactions",
      "Seller dashboard with analytics and inventory management"
    ],
    lessons: [
      "Local context matters more than global best practices",
      "Supporting multiple payment methods is critical in emerging markets",
      "Mobile optimization isn't optional — it's essential"
    ],
    roadmap: [
      "AI-powered product recommendations",
      "Seller analytics and growth insights",
      "Subscription boxes for curated products",
      "Logistics partnership for cheaper shipping"
    ],
    image: {
      src: "/images/projects/naulo-ko-seli.svg",
      alt: "Naulo Ko Seli marketplace"
    },
    links: {
      live: "https://naulokoseli.com/",
      code: null
    }
  }
];

export default projects;
