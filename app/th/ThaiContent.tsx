"use client";

import { useState, useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import Hero from "@/components/Hero"; 
import { ProblemSection } from "@/components/ProblemSection";
import { PhilosophySection } from "@/components/PhilosophySection";
import { WorkforceSection } from "@/components/WorkforceSection";
import { HowItWorksSection } from "@/components/HowItWorksSection";
import { UseCaseSection } from "@/components/UseCaseSection";
import { CTASection } from "@/components/CTASection";
import { FAQSection } from "@/components/FAQSection";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";
import { LanguageToggle } from "@/components/LanguageToggle";

export default function ThaiContent({ data }: { data: any }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    // --- 🟢 ระบบล็อกตำแหน่ง Scroll (จำตำแหน่งเดิม) ---
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }

    const savedScrollY = sessionStorage.getItem("savedScrollY");
    if (savedScrollY) {
      setTimeout(() => {
        window.scrollTo({
          top: parseInt(savedScrollY),
          behavior: "instant",
        });
        sessionStorage.removeItem("savedScrollY");
      }, 50); // ดีเลย์นิดหน่อยให้ Component วาดเสร็จก่อน
    }
  }, []);

  if (!mounted) return <div className="bg-[#0B132B] min-h-screen" />;

  return (
    <>
      <LanguageToggle lang="TH" />
      <Navbar lang="TH" />

      <main className="w-full flex flex-col m-0 p-0 overflow-x-hidden relative">
        <Hero lang="TH" data={data?.hero} />
        <ProblemSection lang="TH" data={data?.problem} />
        <div className="w-full bg-[#0B132B]">
          <PhilosophySection lang="TH" data={data?.philosophy} />
        </div>
        <WorkforceSection lang="TH" data={data?.workforce} />
        <HowItWorksSection lang="TH" data={data?.howItWorks} />
        <UseCaseSection lang="TH" data={data?.useCase} />
        <CTASection lang="TH" data={data?.cta} />
        <FAQSection lang="TH" data={data?.faq} />
        <ContactForm lang="TH" data={data?.contact} />
        <Footer lang="TH" data={data?.footer} />
      </main>
    </>
  );
}