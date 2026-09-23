export const cloudProjects = [
  {
    id: "cost-dashboard",
    number: "01",
    title: "Multi-Subscription Cloud Cost Visibility",
    summary:
      "One operational view of spend and activity across multiple cloud subscriptions.",
    highlights: [
      "Centralized visibility across multiple Azure subscriptions",
      "Subscription-level cost cards and spend breakdowns",
      "Structured reporting context for client conversations",
    ],
    tags: ["Azure Cost Management", "Multi-subscription", "Reporting"],
  },
  {
    id: "cost-optimization",
    number: "02",
    title: "Cloud Cost Optimization (Azure & AWS)",
    summary:
      "Usage reviews that turn into practical rightsizing, cleanup, and storage advice.",
    highlights: [
      "Review Azure and AWS usage for optimization opportunities",
      "Recommend rightsizing, idle-resource cleanup, and storage tiers",
      "Translate portal recommendations into client-facing guidance",
    ],
    tags: ["FinOps", "Rightsizing", "AWS Cost Explorer"],
  },
  {
    id: "migration",
    number: "03",
    title: "On-Prem to Azure Migration & Landing Zone",
    summary:
      "Stand up target infrastructure, then migrate workloads with lift-and-shift, ASR, and Backup.",
    highlights: [
      "Provision compute, networking, storage, and security to requirements",
      "Migrate workloads with lift-and-shift and Azure Site Recovery",
      "Establish Azure Backup and monitoring in the target environment",
    ],
    tags: ["Azure VMs", "ASR", "Azure Backup", "Lift-and-Shift"],
  },
] as const;

export const fullstackProjects = [
  {
    id: "imaginify",
    title: "Imaginify AI Photo Editor",
    summary:
      "Full-stack AI photo editing application with authentication, image processing, cloud storage, payments, and a user dashboard.",
    tags: ["Next.js", "TypeScript", "MongoDB", "Cloudinary", "Stripe"],
  },
  {
    id: "zoom",
    title: "Zoom Video Conferencing",
    summary:
      "Video conferencing web app with meeting management, authentication, and responsive UI architecture.",
    tags: ["Next.js", "TypeScript", "Clerk", "Stream", "Tailwind CSS"],
  },
  {
    id: "zentry",
    title: "Zentry-Inspired Website",
    summary:
      "Interactive frontend experience focused on animation, component architecture, and responsive layout.",
    tags: ["React", "Tailwind CSS", "GSAP"],
  },
] as const;
