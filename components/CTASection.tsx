"use client";
import { Container } from "./Container";
import { motion } from "framer-motion";

export const CTASection = ({ lang = "TH", data }: { lang?: string, data?: any }) => {
  const defaultContent = {
    TH: { headline: <>ระบบที่ดีทำให้ธุรกิจไปต่อได้ <br /> โดยไม่ต้องรอคุณทุกขั้นตอน</>, button: "✦ เริ่มออกแบบ Workflow ของคุณ" },
    EN: { headline: <>Workflow that works<br /> without you in the room.</>, button: "✦ start designing your Workflow" }
  };

  const t = data ? {
    headline: lang === "EN" ? data.headline_en : data.headline_th,
    button: lang === "EN" ? data.button_en : data.button_th,
  } : defaultContent[lang as 'TH'|'EN'];

  return (
    <section className="bg-white pt-[8vw] md:pt-[5vw] pb-[12vw] md:pb-[6vw]">
      <Container>
        <motion.div initial={{ opacity: 0, scale: 0.98 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="relative rounded-[6vw] md:rounded-[2.5vw] bg-[#0B132B] border border-slate-800 py-[12vw] md:py-[6vw] px-[6vw] md:px-[4vw] overflow-hidden text-center flex flex-col items-center justify-center">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,#3b82f608,transparent_50%)] pointer-events-none" />
          <div className="relative z-10 w-full max-w-3xl mx-auto text-center">
            <h2 className={`text-[5.5vw] md:text-[2.8vw] lg:text-[2.2vw] font-black text-white mb-[8vw] md:mb-[3.5vw] leading-[1.3] tracking-tighter whitespace-pre-line ${lang === 'TH' ? 'font-display' : 'font-sans'}`}>{t.headline}</h2>
            <button onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })} className={`h-[11vw] md:h-[4.5vw] lg:h-[3.5vw] px-[8vw] md:px-[3vw] bg-white text-[#0B132B] rounded-full font-black text-[3.2vw] md:text-[1.5vw] lg:text-[1.1vw] shadow-lg hover:bg-[#6EE7B7] hover:text-[#0B132B] transition-all cursor-pointer flex items-center justify-center mx-auto active:scale-95 tracking-tight ${lang === 'TH' ? 'font-display' : 'font-sans'}`}>{t.button}</button>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};