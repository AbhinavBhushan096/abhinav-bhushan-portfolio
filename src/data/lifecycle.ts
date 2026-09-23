export const lifecycle = [
  {
    step: "PLAN",
    description: "Understand requirements, constraints, and recovery objectives.",
  },
  {
    step: "ARCHITECT",
    description: "Design networks, compute, storage, security, and resilience.",
  },
  {
    step: "BUILD",
    description: "Provision infrastructure and supporting application components.",
  },
  {
    step: "DEPLOY",
    description: "Roll out environments safely with clear change control.",
  },
  {
    step: "AUTOMATE",
    description: "Reduce manual toil with CI/CD, scripting, and IaC patterns.",
  },
  {
    step: "MONITOR",
    description: "Observe health with metrics, logs, alerts, and dashboards.",
  },
  {
    step: "BACKUP",
    description: "Protect data with backup policies and vaulted recovery points.",
  },
  {
    step: "RECOVER",
    description: "Validate RTO/RPO and restore or fail over when needed.",
  },
] as const;
