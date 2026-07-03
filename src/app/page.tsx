import { HeroSection } from "@/features/hero/components/HeroSection";
import { AboutSection } from "@/features/about/components/AboutSection";
import { SkillsSection } from "@/features/skills/components/SkillsSection";
import { ProjectsSection } from "@/features/projects/components/ProjectsSection";
import { EducationSection } from "@/features/education/components/EducationSection";
import { AchievementsSection } from "@/features/achievements/components/AchievementsSection";
import { OrgCertSection } from "@/features/organization/components/OrgCertSection";
import { ContactSection } from "@/features/contact/components/ContactSection";
import { GitHubSection } from "@/features/github/components/GitHubSection";
import { Footer } from "@/components/layout/Footer";

export default function HomePage() {
  return (
    <>
      <HeroSection />

      {/* Scroll targets for navigations */}
      <div id="about" className="scroll-mt-16">
        <AboutSection />
      </div>

      <div id="skills" className="scroll-mt-16">
        <SkillsSection />
      </div>

      <div id="projects" className="scroll-mt-16">
        <ProjectsSection />
      </div>

      <div id="education" className="scroll-mt-16">
        <EducationSection />
        <AchievementsSection />
        <OrgCertSection />
      </div>

      <div id="github" className="scroll-mt-16">
        <GitHubSection />
      </div>

      <div id="contact" className="scroll-mt-16">
        <ContactSection />
      </div>

      <Footer />
    </>
  );
}
