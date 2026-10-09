import type { ComponentType } from "react";
import { Braces, Video } from "lucide-react";
import { FaAws, FaWindows } from "react-icons/fa";
import { TbBrandAzure } from "react-icons/tb";
import {
  SiAnsible,
  SiCloudinary,
  SiClerk,
  SiDocker,
  SiExpress,
  SiGit,
  SiGithub,
  SiGithubactions,
  SiGitlab,
  SiGnubash,
  SiGrafana,
  SiGreensock,
  SiJavascript,
  SiJenkins,
  SiKubernetes,
  SiLinux,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiPrometheus,
  SiReact,
  SiRedux,
  SiStripe,
  SiTailwindcss,
  SiTerraform,
  SiTypescript,
  SiVite,
} from "react-icons/si";

const Azure = TbBrandAzure;
const Aws = FaAws;

const icons: Record<string, ComponentType<{ className?: string }>> = {
  "Azure Virtual Machines": Azure,
  "Azure Virtual Network": Azure,
  "VPN Gateway": Azure,
  "Application Gateway": Azure,
  "Azure Storage": Azure,
  "Azure DNS": Azure,
  "Azure Cost Management": Azure,
  "Windows Server": FaWindows,
  "Azure Monitor": Azure,
  "Log Analytics": Azure,
  "Azure Backup": Azure,
  "Azure Site Recovery": Azure,
  EC2: Aws,
  CloudFormation: Aws,
  "AWS Cost Explorer": Aws,
  CloudWatch: Aws,
  Docker: SiDocker,
  Kubernetes: SiKubernetes,
  Jenkins: SiJenkins,
  "GitHub Actions": SiGithubactions,
  "GitLab CI/CD": SiGitlab,
  Terraform: SiTerraform,
  Ansible: SiAnsible,
  Git: SiGit,
  GitHub: SiGithub,
  Linux: SiLinux,
  "Shell Scripting": SiGnubash,
  Prometheus: SiPrometheus,
  Grafana: SiGrafana,
  React: SiReact,
  "Next.js": SiNextdotjs,
  TypeScript: SiTypescript,
  JavaScript: SiJavascript,
  "Tailwind CSS": SiTailwindcss,
  Redux: SiRedux,
  Vite: SiVite,
  GSAP: SiGreensock,
  "Node.js": SiNodedotjs,
  "Express.js": SiExpress,
  "REST APIs": Braces,
  MongoDB: SiMongodb,
  MySQL: SiMysql,
  Cloudinary: SiCloudinary,
  Stripe: SiStripe,
  Clerk: SiClerk,
  Stream: Video,
};

export function SkillMark({ name }: { name: string }) {
  const Icon = icons[name];
  if (!Icon) return null;
  return <Icon className="size-3.5 shrink-0" aria-hidden="true" />;
}
