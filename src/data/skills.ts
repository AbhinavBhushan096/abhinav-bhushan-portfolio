export const azureSkills = [
  "Azure Virtual Machines",
  "Azure Virtual Network",
  "VPN Gateway",
  "Application Gateway",
  "Azure Storage",
  "Azure DNS",
  "Azure Cost Management",
  "Windows Server",
] as const;

export const awsSkills = [
  "EC2",
  "CloudFormation",
  "AWS networking fundamentals",
  "Serverless concepts",
  "AWS Cost Explorer",
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
];

export const networkingSkills = [
  "TCP/IP",
  "DNS",
  "VPN",
  "Site-to-Site VPN",
  "NSG",
  "Firewalls",
  "Routing",
  "Network Security",
] as const;

export const monitoringSkills = [
  "Azure Monitor",
  "Log Analytics",
  "CloudWatch",
  "Prometheus",
  "Grafana",
] as const;

export const backupDrSkills = [
  "Azure Backup",
  "Azure Site Recovery",
  "Recovery Services Vault",
  "Replication",
  "RTO",
  "RPO",
  "Active-Passive DR",
] as const;

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
