export const azureSkills = [
  "Azure Virtual Machines",
  "Azure Virtual Network",
  "VPN Gateway",
  "Application Gateway",
  "Azure Storage",
  "Azure DNS",
  "Azure Cost Management",
  "Windows Server",
  "Azure Monitor",
  "Log Analytics",
  "Azure Backup",
  "Azure Site Recovery",
] as const;

export const awsSkills = [
  "EC2",
  "CloudFormation",
  "AWS Cost Explorer",
  "CloudWatch",
] as const;

export const devopsSkills = [
  { name: "Docker", note: "skill" as const },
  { name: "Kubernetes", note: "learning" as const },
  { name: "Jenkins", note: "learning" as const },
  { name: "GitHub Actions", note: "skill" as const },
  { name: "GitLab CI/CD", note: "learning" as const },
  { name: "Terraform", note: "learning" as const },
  { name: "Ansible", note: "learning" as const },
  { name: "Git", note: "skill" as const },
  { name: "GitHub", note: "skill" as const },
  { name: "Linux", note: "skill" as const },
  { name: "Shell Scripting", note: "skill" as const },
  { name: "Prometheus", note: "skill" as const },
  { name: "Grafana", note: "skill" as const },
];

export const fullstackSkills = {
  frontend: [
    "React",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "Tailwind CSS",
    "Redux",
    "Vite",
    "GSAP",
  ],
  backend: ["Node.js", "Express.js", "REST APIs"],
  database: ["MongoDB", "MySQL"],
  services: ["Cloudinary", "Stripe", "Clerk", "Stream"],
} as const;
