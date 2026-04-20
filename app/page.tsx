import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { ProblemSection } from "@/components/ProblemSection";
import { PhilosophySection } from "@/components/PhilosophySection";
import { WorkforceSection } from "@/components/WorkforceSection";
import { HowItWorksSection } from "@/components/HowItWorksSection";
import { UseCaseSection } from "@/components/UseCaseSection";
import { FAQSection } from "@/components/FAQSection";
import { CTASection } from "@/components/CTASection";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";
import { ScrollReveal } from "@/components/ScrollReveal";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="w-full flex flex-col m-0 p-0 overflow-x-hidden">
        
        <Hero />
        
        <ProblemSection />
        
        <div className="w-full bg-[#0B132B]">
          <PhilosophySection />
        </div>
        
        <WorkforceSection />
        
        <HowItWorksSection />
        
        <ScrollReveal direction="up" delay={0.1}>
          <UseCaseSection />
        </ScrollReveal>
        
        <ScrollReveal direction="up" delay={0.1}>
          <CTASection />
        </ScrollReveal>

        <ScrollReveal direction="up" delay={0.1}>
          <FAQSection />
        </ScrollReveal>

        <ContactForm />

      </main>
      <Footer />
    </>
  );
}