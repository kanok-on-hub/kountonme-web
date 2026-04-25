"use client";
import React from 'react';
import { motion } from "framer-motion";

export function PhilosophySection({ lang = "TH" }: { lang?: string }) {
  
  const content = {
    TH: {
      subHeader: "THE PHILOSOPHY",
      titleLine1: (
        <>
          เราเชื่อใน<span className="underline decoration-[#6EE7B7] underline-offset-[12px] decoration-2">วิถีการทำงานยุคใหม่</span>
        </>
      ),
      titleLine2: "The Renaissance of Work",
      p1: "เวลาของคุณมีค่าเกินกว่าจะเสียไปกับงานซ้ำ ๆ",
      p2: "การคิด การตัดสินใจ และการสื่อสาร คือสิ่งที่ต้องการคุณ"
    },
    EN: {
      subHeader: "THE PHILOSOPHY",
      titleLine1: (
        <>
          We believe in <span className="underline decoration-[#6EE7B7] underline-offset-[12px] decoration-2">a new era of work</span>
        </>
      ),
      titleLine2: "The Renaissance of Work",
      p1: "Your time is too valuable for manual work.",
      p2: "Save it for thinking, deciding, and leading."
    }
  };

  const t = lang === "EN" ? content.EN : content.TH;

  return (
    <section className="w-full min-h-[85vh] md:min-h-0 md:py-[15vw] m-0 border-none overflow-hidden flex flex-col items-center justify-center bg-[#0B132B] relative">
      <div className="w-full max-w-[100vw] mx-auto px-[6vw] text-center relative z-10">
        
        {/* Sub-header - ใช้ font-sans ปกติสำหรับภาษาอังกฤษตัวใหญ่ครับ */}
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="text-[#6EE7B7] font-black tracking-[0.3em] text-[2.5vw] md:text-[1vw] lg:text-[0.8vw] mb-[3vw] md:mb-[1.5vw] uppercase font-sans"
        >
          {t.subHeader}
        </motion.p>

        {/* Headline - ปรับ Line 1 ภาษาไทยให้เป็น font-display (ไม่มีหัว) เพื่อความ Impact */}
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-[5.5vw] md:text-[4.5vw] lg:text-[3.5vw] font-black leading-[1.3] text-white tracking-tighter mb-[4vw]"
        >
          <div className={lang === 'TH' ? 'font-display' : 'font-sans'}>{t.titleLine1}</div>
          
          {/* Line 2 ภาษาอังกฤษ ใช้ font-sans ให้ดู Inter ครับ */}
          <div className="text-[#6EE7B7] text-[4.5vw] md:text-[3vw] lg:text-[2.2vw] mt-[2.5vw] font-sans">
            {t.titleLine2}
          </div>
        </motion.h2>

        {/* Content Section - ภาษาไทยใช้ font-sans (มีหัว) เพื่อความน่าเชื่อถือและอ่านง่ายครับ */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-slate-300 text-[3.2vw] md:text-[1.8vw] lg:text-[1.2vw] leading-relaxed max-w-[85%] md:max-w-2xl mx-auto mt-[7vw] md:mt-[4vw] space-y-[1.5vw] md:space-y-[0.5vw] font-medium font-sans opacity-90"
        >
          <p>{t.p1}</p>
          <p>{t.p2}</p>
        </motion.div>
      </div>

      {/* Background Effect */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#3b82f608,transparent_70%)] pointer-events-none" />
    </section>
  );
}

export default PhilosophySection;