"use client";

import { useState, useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
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

export default function EnglishPage() {
  const [mounted, setMounted] = useState(false);

  // --- ระบบจัดการ Scroll และ Hydration ---
  useEffect(() => {
    setMounted(true);

    // ปิดระบบจำ Scroll เดิมของ Browser
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }

    // ดึงตำแหน่ง Scroll ที่บันทึกไว้กลับมา
    const savedScrollY = sessionStorage.getItem("savedScrollY");
    if (savedScrollY) {
      setTimeout(() => {
        window.scrollTo({
          top: parseInt(savedScrollY),
          behavior: "instant",
        });
        sessionStorage.removeItem("savedScrollY");
      }, 50);
    }
  }, []);

  // ป้องกัน Hydration Error
  if (!mounted) {
    return <div className="bg-[#0B132B] min-h-screen" />;
  }

  return (
    <>
      {/* 🟢 วางไว้นอก main และอยู่บนสุด เพื่อให้ z-index ทำงานได้เต็มที่ครับ */}
      <LanguageToggle lang="EN" />

      <Navbar lang="EN" />

      <main className="w-full flex flex-col m-0 p-0 overflow-x-hidden relative">
        
        <Hero lang="EN" />
        
        <ProblemSection lang="EN" />
        
        <div className="w-full bg-[#0B132B]">
          <PhilosophySection lang="EN" />
        </div>
        
        <WorkforceSection lang="EN" />
        
        <HowItWorksSection lang="EN" />
        
        <UseCaseSection lang="EN" />
        
        <CTASection lang="EN" />
        
        <FAQSection lang="EN" />
        
        <ContactForm lang="EN" />

        {/* Footer อยู่ใน main ลำดับสุดท้าย */}
        <Footer lang="EN" />
        
      </main>
    </>
  );
}