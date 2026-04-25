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

export default function ThaiPage() {
  const [mounted, setMounted] = useState(false);

  // --- ระบบจัดการ Scroll และ Hydration ---
  useEffect(() => {
    setMounted(true);

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
      }, 50);
    }
  }, []);

  // ป้องกัน Hydration Error
  if (!mounted) {
    return <div className="bg-[#0B132B] min-h-screen" />;
  }

  return (
    <>
      {/* วางปุ่มสลับภาษาไว้นอก main เพื่อไม่ให้โดนบัง */}
      <LanguageToggle lang="TH" />

      <Navbar lang="TH" />

      <main className="w-full flex flex-col m-0 p-0 overflow-x-hidden relative">
        
        {/* ส่วนหน้าแรก */}
        <Hero lang="TH" />

        {/* ส่วนปัญหา (id="problem") */}
        <ProblemSection lang="TH" />

        {/* ส่วนแนวคิดธุรกิจ */}
        <div className="w-full bg-[#0B132B]">
          <PhilosophySection lang="TH" />
        </div>

        {/* ส่วนบริการ (id="workforce") */}
        <WorkforceSection lang="TH" />

        {/* ส่วนขั้นตอนการทำงาน (id="how-it-works") */}
        <HowItWorksSection lang="TH" />

        {/* ส่วนตัวตัวอย่างการใช้งาน (id="use-cases") */}
        <UseCaseSection lang="TH" />

        {/* ส่วน Call to Action */}
        <CTASection lang="TH" />

        {/* ส่วนคำถามที่พบบ่อย (id="faq") */}
        <FAQSection lang="TH" />

        {/* ส่วนฟอร์มติดต่อ (id="contact") */}
        <ContactForm lang="TH" />

        {/* ส่วนท้ายเว็บ */}
        <Footer lang="TH" />
        
      </main>
    </>
  );
}