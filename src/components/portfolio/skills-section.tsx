import { awsSkills, azureSkills, devopsSkills, fullstackSkills } from "@/data/skills";
import { SkillMark } from "@/lib/skill-icons";
import { Highlight } from "@/components/ui/highlight";
import { Chip } from "@/components/ui/chip";
import { SectionHead } from "@/components/section-head";

const fullstack = [
  ...fullstackSkills.frontend,
  ...fullstackSkills.backend,
  ...fullstackSkills.database,
  ...fullstackSkills.services,
];

const groups: { title: string; primary?: boolean; items: { name: string; learning?: boolean }[] }[] = [
  { title: "Microsoft Azure", primary: true, items: azureSkills.map((name) => ({ name })) },
  { title: "AWS", items: awsSkills.map((name) => ({ name })) },
  {
    title: "DevOps",
    items: devopsSkills.map((item) => ({ name: item.name, learning: item.note === "learning" })),
  },
  { title: "Full-stack", items: fullstack.map((name) => ({ name })) },
];

export function SkillsSection() {
  return (
    <section id="skills" aria-labelledby="skills-heading" className="mt-16 scroll-mt-24 sm:mt-20">
      <SectionHead id="skills-heading" title="Skills">
        Azure first, then AWS, automation, and <Highlight>full-stack work</Highlight>.
      </SectionHead>

      <div className="mt-8 grid gap-8">
        {groups.map((group) => (
          <div key={group.title}>
            <h3 className="flex flex-wrap items-center gap-2 text-base font-medium">
              {group.title}
              {group.primary ? <Chip tone="special">Primary</Chip> : null}
            </h3>
            <ul aria-label={group.title} className="mt-3 flex flex-wrap gap-1.5">
              {group.items.map((item) => (
                <li key={item.name}>
                  <Chip className="gap-1.5 py-1">
                    <SkillMark name={item.name} />
                    {item.learning ? `${item.name}, learning` : item.name}
                  </Chip>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
