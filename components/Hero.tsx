"use client";
import React from "react";
import { motion } from "framer-motion";
import { MessageSquare } from "lucide-react";

interface HeroProps {
  lang?: string;
  data?: any;
}

export default function Hero({ lang = "TH", data }: HeroProps) {
  
  // --- 1. ข้อความดั้งเดิมสำรองไว้ในโค้ด (Fallback Content) ---
  const defaultContent = {
    TH: {
      title1: "Redesign Your Workflow,",
      title2: "Redefine Your Future.",
      subtitle: "เปลี่ยนงานซ้ำ ๆ ให้เป็นระบบอัตโนมัติด้วยทีมงานดิจิทัล\nที่ช่วยจัดการงานหลังบ้าน เพื่อให้คุณโฟกัสกับการเติบโต",
      button: "เล่า Workflow ของคุณให้เราฟัง"
    },
    EN: {
      title1: "Redesign Your Workflow,",
      title2: "Redefine Your Future.",
      subtitle: "Let a digital workforce handle the manual work,\nso you can focus on what only you can do.",
      button: "tell us about your Workflow"
    }
  };

  // --- 2. Logic เลือกข้อมูล: ถ้ามี data จาก Sanity ให้ใช้ ถ้าไม่มีให้ใช้ค่าสำรอง ---
  const t = lang === "EN" ? {
    title1: data?.title1_en || defaultContent.EN.title1,
    title2: data?.title2_en || defaultContent.EN.title2,
    subtitle: data?.subtitle_en || defaultContent.EN.subtitle,
    button: data?.button_en || defaultContent.EN.button
  } : {
    title1: data?.title1_th || defaultContent.TH.title1,
    title2: data?.title2_th || defaultContent.TH.title2,
    subtitle: data?.subtitle_th || defaultContent.TH.subtitle,
    button: data?.button_th || defaultContent.TH.button
  };

  return (
    <section className="w-full bg-[#0B132B] m-0 p-0 border-none relative overflow-hidden flex flex-col items-center justify-center min-h-[85vh] md:min-h-0 md:py-[15vw]">
      
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[140vw] h-[80vw] bg-[radial-gradient(circle_at_center,#3b82f612,transparent_65%)] -z-0 blur-3xl opacity-60 rounded-full" />
      
      <div className="w-full max-w-[100vw] mx-auto px-[6vw] pt-[20vw] md:pt-0 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full text-center flex flex-col items-center"
        >
          {/* Main Title - ใช้ whitespace-pre-line เพื่อรองรับการขึ้นบรรทัดใหม่ */}
          <h1 className="text-[6vw] md:text-[5.5vw] lg:text-[4.8vw] font-black font-sans leading-[1.1] text-white tracking-tighter mb-[3.5vw] md:mb-[2.5vw] whitespace-pre-line">
            {t.title1}<br />
            <span className="text-[#6EE7B7]">{t.title2}</span>
          </h1>

          {/* Subtitle - ภาษาไทยใช้ font-sans (แบบมีหัว) ตามดีไซน์เดิมของพี่ครับ */}
          <p className="text-[3.2vw] md:text-[1.8vw] lg:text-[1.2vw] text-slate-300 max-w-[85%] md:max-w-2xl mx-auto leading-relaxed mb-[7vw] md:mb-[4vw] font-medium font-sans whitespace-pre-line">
            {t.subtitle}
          </p>

          {/* Button - เจมปรับ ID เป็น "contact" ให้ตรงกับที่เราคุยกันล่าสุดนะพี่ */}
          <div className="flex items-center justify-center relative z-20">
            <button
              onClick={() => {
                const element = document.getElementById("contact");
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className={`group relative h-[11vw] md:h-[5vw] lg:h-[3.8vw] px-[8vw] md:px-[3.5vw] flex items-center justify-center bg-white text-[#0B132B] rounded-full font-black text-[3.2vw] md:text-[1.6vw] lg:text-[1.1vw] overflow-hidden transition-all hover:bg-[#6EE7B7] hover:shadow-[0_0_30px_rgba(110,231,183,0.25)] cursor-pointer active:scale-95 ${lang === 'TH' ? 'font-display' : 'font-sans'}`}
            >
              <MessageSquare className="w-[3.8vw] md:w-[1.6vw] h-[3.8vw] md:h-[1.6vw] mr-[2vw] md:mr-[1vw]" />
              <span className="relative z-10">{t.button}</span>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}