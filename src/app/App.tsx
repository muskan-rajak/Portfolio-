import { ThemeProvider } from "next-themes";
import { WorkflowSection } from "./components/WorkflowSection";
import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { TrustSection } from "./components/TrustSection";
import { AboutSection } from "./components/AboutSection";
import { ServicesSection } from "./components/ServicesSection";
import { PublicationsSection } from "./components/PublicationsSection";
/*import { PortfolioSection } from "./components/PortfolioSection";*/
import { SkillsSection } from "./components/SkillsSection";
import { ExperienceSection } from "./components/ExperienceSection";
import { TestimonialsSection } from "./components/TestimonialsSection";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";
import { ScrollToTop } from "./components/ScrollToTop";

export default function App() {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      <div className="min-h-screen bg-white dark:bg-[#0F172A] transition-colors duration-300" style={{ fontFamily: 'var(--font-body)' }}>
        <Navigation />
        
        <main>
          <Hero />
          <TrustSection />
          <div id="about">
            <AboutSection />
          </div>
          <div id="workflow">
            <WorkflowSection />
          </div>
          <div id="services">
            <ServicesSection />
          </div>
          <div id="publications">
            <PublicationsSection />
          </div>
{/*       <div id="portfolio">
            <PortfolioSection />
          </div>
*/}
          <div id="skills">
            <SkillsSection />
          </div>
          <div id="experience">
            <ExperienceSection />
          </div>
          <div id="testimonials">
            <TestimonialsSection />
          </div>
          <div id="contact">
            <ContactSection />
          </div>
        </main>
        
        <Footer />
        <ScrollToTop />
      </div>
    </ThemeProvider>
  );
}