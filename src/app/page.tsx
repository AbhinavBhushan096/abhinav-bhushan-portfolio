import { navLinks, site } from "@/data/site";
import { cloudProjects, fullstackProjects } from "@/data/projects";
import { experience } from "@/data/experience";
import { companyTenure } from "@/lib/dates";
import { assetPath } from "@/lib/utils";
import { Backdrop } from "@/components/backdrop";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { StatStrip } from "@/components/stat-strip";
import { LiveDot } from "@/components/ui/live-dot";
import { Highlight } from "@/components/ui/highlight";
import { AboutSection } from "@/components/portfolio/about-section";
import { WorkSection } from "@/components/portfolio/work-section";
import { ExperienceSection } from "@/components/portfolio/experience-section";
import { SkillsSection } from "@/components/portfolio/skills-section";
import { ProjectsSection } from "@/components/portfolio/projects-section";
import { ContactSection } from "@/components/portfolio/contact-section";

const projectCount = cloudProjects.length + fullstackProjects.length;

export default function Home() {
  const tenure = companyTenure(experience.roles);

  return (
    <>
      <Backdrop src={assetPath("/chaiui/background.svg")} />
      <Navbar
        logo={
          <a href="#home" className="font-onest text-xl font-medium tracking-tight">
            {site.name}
          </a>
        }
        layout="inline"
        groups={navLinks.map((link) => ({ label: link.label, href: link.href }))}
      />
      <main id="main" tabIndex={-1} className="mx-auto w-full max-w-6xl px-6 py-8 outline-none sm:px-12 sm:py-12">
        <div id="home" className="scroll-mt-24">
          <Hero
            badge={<LiveDot tone="success">{site.status}</LiveDot>}
            title={
              <>
                {site.name}
                <span className="mt-3 block max-w-3xl text-xl font-medium tracking-tight text-neutral-500 @3xl:text-2xl dark:text-neutral-400">
                  {site.title}
                  <span className="px-2 text-neutral-400 dark:text-neutral-600" aria-hidden="true">
                    /
                  </span>
                  <span className="text-neutral-700 dark:text-neutral-300">{site.secondaryTitle}</span>
                </span>
              </>
            }
            primary={{ label: "Download resume", href: assetPath(site.resumePath) }}
            secondary={{ label: "Get in touch", href: "#contact" }}
          >
            {site.description.split("full-stack applications")[0]}
            <Highlight>full-stack applications</Highlight>
            {site.description.split("full-stack applications")[1]}
          </Hero>
        </div>

        <StatStrip
          className="mt-14 sm:mt-16"
          stats={[
            { value: tenure, label: "With Truverizen" },
            { value: "Azure", label: "Primary cloud" },
            { value: String(projectCount), label: "Projects on this page" },
          ]}
        />

        <AboutSection />
        <WorkSection />
        <ExperienceSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <Footer
        logo={
          <a href="#home" className="font-onest text-xl font-medium tracking-tight">
            {site.name}
          </a>
        }
        tagline={site.title}
        owner={site.name}
        sections={[
          {
            title: "On this page",
            links: navLinks.map((link) => ({ label: link.label, href: link.href })),
          },
          {
            title: "Connect",
            links: [
              { label: "GitHub", href: site.socials.github, external: true },
              { label: "LinkedIn", href: site.socials.linkedin, external: true },
              { label: "Email", href: site.socials.email },
              { label: "Resume", href: assetPath(site.resumePath) },
            ],
          },
        ]}
      />
    </>
  );
}
