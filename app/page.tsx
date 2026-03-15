import { AboutSection } from "@/components/sections/about-section";
import { ContactSection } from "@/components/sections/contact-section";
import { ExperienceSection } from "@/components/sections/experience-section";
import { Footer } from "@/components/sections/footer";
import { HeroSection } from "@/components/sections/hero-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { SkillsSection } from "@/components/sections/skills-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { CustomCursor } from "@/components/ui/custom-cursor";
import { FloatingParticles } from "@/components/ui/floating-particles";
import { IntroOverlay } from "@/components/ui/intro-overlay";
import { Navbar } from "@/components/ui/navbar";
import { SectionBackdrop } from "@/components/ui/section-backdrop";

export default function Home() {
  return (
    <main className="relative overflow-x-hidden bg-surface bg-hero-radial">
      <IntroOverlay />
      <CustomCursor />
      <FloatingParticles />
      <SectionBackdrop />
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ExperienceSection />
      <SkillsSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
