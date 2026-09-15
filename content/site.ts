export type NavItem = { label: string; href: string };

export const site = {
  name: "Hassan",
  handle: "hassan.dev",
  role: "Full-Stack Developer",
  email: "hello@hassan.dev",
  location: "Remote — worldwide",
  availability: "Available for new projects",
  description:
    "Full-stack developer crafting refined, resilient web products — from database schema to the last micro-interaction.",
  nav: [
    { label: "About", href: "#about" },
    { label: "Work", href: "#work" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
  ] satisfies NavItem[],
  socials: [
    { label: "GitHub", href: "https://github.com", icon: "github" },
    { label: "LinkedIn", href: "https://linkedin.com", icon: "linkedin" },
    { label: "X", href: "https://x.com", icon: "x" },
  ],
};

export const hero = {
  headline: [
    ["Full-stack"],
    ["developer", "crafting"],
    ["refined", "&", "resilient"],
    ["products."],
  ],
  serifWords: ["refined"],
  sub: "From schema to pixel. I design and build fast, accessible, scalable web applications with Next.js, TypeScript and Node.js.",
};

export const about = {
  illumination:
    "I'm a full-stack developer who cares about the details. For over five years I've been shipping products end to end — modeling databases, designing APIs, and polishing interfaces until every interaction feels effortless. I believe great software is equal parts engineering rigor and craft.",
  stats: [
    { value: 5, suffix: "+", label: "Years of experience" },
    { value: 40, suffix: "+", label: "Projects shipped" },
    { value: 18, suffix: "", label: "Happy clients" },
  ],
};

export const stack = {
  categories: [
    {
      title: "Frontend",
      items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Firgma Design"],
    },
    {
      title: "Backend",
      items: ["Node.js", "PostgreSQL", "GraphQL", "Prisma", "Redis", "API Principles"],
    },
    {
      title: "Ops & Tools",
      items: ["Docker", "AWS", "CI/CD", "Git", "Figma", "Vercel"],
    },
  ],
  marquee: [
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "PostgreSQL",
    "GraphQL",
    "Tailwind CSS",
    "Docker",
    "AWS",
    "Prisma",
    "Redis",
    "Figma",
  ],
};

export type Project = {
  title: string;
  description: string;
  year: string;
  tags: string[];
  hue: number;
  /** Optional: path under /public (e.g. "/projects/friends.png") or full URL. Falls back to gradient art when omitted. */
  image?: string;
  links: { live: string; source: string };
};

export const projects = {
  featured: [
    {
      title: "Friends Social",
      description:
        'A full-stack social platform with JWT auth, a live news feed, posts with privacy controls, likes, follows, and photo uploads.',
      year: "2026",
      // Next.js, TypeScript, MongoDB, Tailwind CSS
      tags: ['Next.js', 'TypeScript', 'MongoDB', 'Tailwind CSS'],
      hue: 160,
      links: { live: "https://friends-x.vercel.app", source: "https://github.com/yuzakki/friends" },
      image: "/designs/projects/friends/preview.webp"
    },
    {
      title: "Nova Commerce",
      description:
        "A headless e-commerce platform serving 200k monthly shoppers. Sub-second page loads via edge rendering, a fully custom checkout, and real-time inventory sync across warehouses.",
      year: "2026",
      tags: ["Next.js", "Stripe", "PostgreSQL", "Redis"],
      hue: 160,
      links: { live: "https://example.com", source: "https://github.com" },
    },
    {
      title: "Pulse Analytics",
      description:
        "Real-time product analytics dashboard streaming millions of events a day. Live charts over WebSockets, segment builders, and alerting that engineers actually enjoy using.",
      year: "2025",
      tags: ["React", "WebSockets", "ClickHouse", "Go"],
      hue: 200,
      links: { live: "https://example.com", source: "https://github.com" },
    },
  ] satisfies Project[],
  others: [
    {
      title: "Drift",
      description: "Collaborative markdown editor with CRDT-based multiplayer editing and offline sync.",
      year: "2025",
      tags: ["Next.js", "Yjs", "tRPC"],
      hue: 265,
      links: { live: "https://example.com", source: "https://github.com" },
    },
    {
      title: "Ledgerly",
      description: "Invoicing SaaS for freelancers — recurring billing, PDF generation, payment tracking.",
      year: "2024",
      tags: ["React", "Node.js", "Stripe"],
      hue: 35,
      links: { live: "https://example.com", source: "https://github.com" },
    },
    {
      title: "Pathfinder",
      description: "Interactive pathfinding visualizer with a custom grid engine and step-through debugger.",
      year: "2024",
      tags: ["TypeScript", "Canvas", "Algorithms"],
      hue: 100,
      links: { live: "https://example.com", source: "https://github.com" },
    },
    {
      title: "Snipstack",
      description: "Keyboard-first code snippet manager with fuzzy search and team sharing.",
      year: "2023",
      tags: ["Vue", "SQLite", "Electron"],
      hue: 320,
      links: { live: "https://example.com", source: "https://github.com" },
    },
  ] satisfies Project[],
};

export const experience = [
  {
    role: "Senior Full-Stack Engineer",
    company: "Lumina Labs",
    period: "2024 — Present",
    summary:
      "Leading the platform team on a multi-tenant SaaS. Cut p95 latency by 60%, drove the migration to Next.js App Router, and mentor a squad of four engineers.",
  },
  {
    role: "Full-Stack Engineer",
    company: "Vertex Software",
    period: "2022 — 2024",
    summary:
      "Built the customer dashboard from zero to 30k users. Owned everything from the design system to the billing integration and on-call rotation.",
  },
  {
    role: "Freelance Developer",
    company: "Independent",
    period: "2020 — 2022",
    summary:
      "Shipped 20+ sites and web apps for startups and agencies — e-commerce, marketing sites, internal tools, and the occasional design rescue.",
  },
];

export const contact = {
  heading: ["Have an idea?", "Let's build it."],
  blurb:
    "I'm currently open to freelance projects and select full-time roles. Tell me what you're making — I usually reply within a day.",
};
