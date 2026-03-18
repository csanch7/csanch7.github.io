export const profile = {
  name: "Christopher Sanchez",
  location: "Chicago, IL",
  email: "chris.sanchez0505@gmail.com",
  github: "https://github.com/csanch7",
  linkedin: "https://linkedin.com/in/christopher7/",
  resume: "./Christopher-Sanchez-Resume.pdf",
  tagline: "Computer Science Student | Backend Developer | Building Scalable Systems",
  heroDescription:
    "I’m a computer science student focused on backend systems and real-world applications. I enjoy building scalable software, automating workflows, and solving problems that have measurable impact.",
};

export const education = {
  school: "DePaul University",
  degree: "B.S. in Computer Science",
  graduation: "Expected May 2027",
  gpa: "3.7 GPA",
  coursework: [
    "Design and Analysis of Algorithms",
    "Data Structures I & II",
    "Object Oriented Software Development",
  ],
};

export const likes = [
  "Backend systems",
  "Automation tools",
  "Data-driven applications",
];

export const projects = [
  {
    title: "Shopify Automation System",
    description:
      "Built a Node.js webhook and MongoDB-backed automation pipeline for Shopify operations, connecting order flow, fulfillment signals, and accounting processes with minimal manual handling.",
    tech: ["Node.js", "MongoDB", "APIs"],
    impact: "Processed 700+ orders automatically and eliminated manual accounting workflows.",
    link: "https://github.com/csanch7",
  },
  {
    title: "Concurrent Order Matching Engine",
    description:
      "Architected a Java matching engine with price-time priority, synchronized queues, immutable DTOs, and real-time distribution patterns to keep concurrent operations consistent.",
    tech: ["Java", "Multithreading", "Systems Design"],
    impact: "Showcases concurrency, deterministic execution, and low-level systems thinking.",
    link: "https://github.com/csanch7",
  },
  {
    title: "Two-Client TCP Chat Server",
    description:
      "Implemented a C-based TCP chat server with sockets, POSIX threads, and a custom length-prefixed binary protocol for reliable concurrent client messaging.",
    tech: ["C", "Sockets", "POSIX Threads"],
    impact: "Demonstrates protocol design, network programming, and concurrent client coordination.",
    link: "https://github.com/csanch7",
  },
  {
    title: "Scholarly Scholarship Management App",
    description:
      "Created a full-stack scholarship workflow app with React dashboards, AJAX status updates, filtering, and deadline-based sorting to make active applications easier to manage.",
    tech: ["React", "Full-Stack", "AJAX"],
    impact: "Built to manage 10+ active applications with clearer visibility, fewer missed deadlines, and smoother document organization.",
    link: "https://github.com/csanch7",
  },
];

export const experience = [
  {
    company: "Vikings Ventures",
    outcome: "$40K+ revenue",
    highlights: [
      "Built a Shopify storefront tailored for conversion and operations.",
      "Automated 700+ orders with Node.js workflows.",
      "Integrated analytics across 17K+ sessions to guide decisions.",
    ],
  },
  {
    company: "Reliable Contracting Equipment Company",
    outcome: "$636K+ revenue",
    highlights: [
      "Built a Django intake system to streamline lead capture.",
      "Increased conversion rate by 15% with improved lead flow.",
      "Improved performance with 45% faster load time.",
    ],
  },
];

export const skills = {
  Languages: ["Python", "Java", "C", "JavaScript", "TypeScript", "SQL"],
  "Frameworks / Tools": [
    "Django",
    "React",
    "Node.js",
    "Express",
    "MongoDB",
    "Docker",
    "GraphQL",
    "GitHub Actions",
    "React Native",
    "Jest",
    "Render",
  ],
};

export const activities = [
  "Computer Science Society",
  "Society of Hispanic Professional Engineers",
  "Association of Latino Professionals for America",
];
