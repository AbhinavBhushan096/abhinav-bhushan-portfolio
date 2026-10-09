import { cloudProjects, fullstackProjects } from "@/data/projects";
import { Highlight } from "@/components/ui/highlight";
import { Chip } from "@/components/ui/chip";
import { Card, CardBody, CardText, CardTitle } from "@/components/ui/card";
import { SectionHead } from "@/components/section-head";

export function ProjectsSection() {
  return (
    <section id="projects" aria-labelledby="projects-heading" className="mt-16 scroll-mt-24 sm:mt-20">
      <SectionHead id="projects-heading" title="Projects">
        Operational cloud work, plus <Highlight>full-stack products</Highlight> that sit beside it.
      </SectionHead>

      <h3 className="mt-8 text-base font-medium">Cloud</h3>
      <div className="mt-4 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {cloudProjects.map((project) => (
          <Card key={project.id}>
            <CardBody>
              <p className="font-mono text-xs text-neutral-500 dark:text-neutral-400">{project.number}</p>
              <CardTitle className="mt-2">{project.title}</CardTitle>
              <CardText className="line-clamp-none">{project.summary}</CardText>
              <ul className="mt-3 list-disc space-y-1 pl-4 text-sm leading-6 text-neutral-700 dark:text-neutral-300">
                {project.highlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <ul aria-label={`${project.title} tags`} className="mt-4 flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <li key={tag}>
                    <Chip>{tag}</Chip>
                  </li>
                ))}
              </ul>
            </CardBody>
          </Card>
        ))}
      </div>

      <h3 className="mt-10 text-base font-medium">Full-stack</h3>
      <div className="mt-4 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {fullstackProjects.map((project) => (
          <Card key={project.id}>
            <CardBody>
              <CardTitle>{project.title}</CardTitle>
              <CardText className="line-clamp-none">{project.summary}</CardText>
              <ul aria-label={`${project.title} tags`} className="mt-4 flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <li key={tag}>
                    <Chip>{tag}</Chip>
                  </li>
                ))}
              </ul>
            </CardBody>
          </Card>
        ))}
      </div>
    </section>
  );
}
