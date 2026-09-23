import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/hero/Hero";
import { About } from "@/components/about/About";
import { HowIWork } from "@/components/lifecycle/HowIWork";
import { Experience } from "@/components/experience/Experience";
import { Skills } from "@/components/skills/Skills";
import { CloudProjects } from "@/components/projects/CloudProjects";
import { FullStack } from "@/components/fullstack/FullStack";
import { Contact } from "@/components/contact/Contact";

export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--text)]">
      <Navbar />
      <main id="main" tabIndex={-1} className="outline-none">
        <Hero />
        <About />
        <HowIWork />
        <Experience />
        <Skills />
        <CloudProjects />
        <FullStack />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
