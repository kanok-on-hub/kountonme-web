"use client";
import { Container } from "./Container";
import { motion } from "framer-motion";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqContent = {
  TH: [
    {
      question: "ทีมงานดิจิทัลใช้เครื่องมืออะไรบ้าง",
      answer: "ทีมงานดิจิทัลทำงานผ่าน LINE และ Google Workspace ที่ทีมของคุณคุ้นเคยอยู่แล้ว ไม่ต้องติดตั้งแอปใหม่หรือเรียนรู้ระบบเพิ่มเติม"
    },
    {
      question: "ใช้เวลาออกแบบ Workflow นานแค่ไหน",
      answer: "โดยเฉลี่ยประมาณ 2–4 สัปดาห์ ขึ้นอยู่กับความซับซ้อนของ Workflow และคุณจะเริ่มเห็นผลลัพธ์ได้ตั้งแต่สัปดาห์แรก"
    },
    {
      question: "ข้อมูลของเราปลอดภัยไหม",
      answer: "ข้อมูลทั้งหมดจัดเก็บบน Google Workspace ของบริษัทคุณเอง เราทำหน้าที่ออกแบบและวางระบบเท่านั้น คุณจึงสามารถควบคุมสิทธิ์การเข้าถึง และตรวจสอบประวัติย้อนหลังได้ 100%"
    },
    {
      question: "LINE และ Google Workspace ทำงานร่วมกันอย่างไร",
      answer: "เราใช้ LINE เป็นช่องทางสำหรับการรับคำสั่ง อนุมัติ และติดตามงาน ขณะที่ Google Workspace ทำหน้าที่เป็นศูนย์กลางในการจัดเก็บข้อมูล ประมวลผล และจัดการระบบหลังบ้าน เพื่อให้ Workflow ทั้งหมดเชื่อมต่อกันอย่างต่อเนื่อง"
    }
  ],
  EN: [
    {
      question: "What tools does the digital workforce use?",
      answer: "Your team won't need to learn anything new. Everything runs through LINE and Google Workspace, tools they already know."
    },
    {
      question: "How long does it take to design a workflow?",
      answer: "Most projects take 2 to 4 weeks. But you'll start seeing the difference from week one."
    },
    {
      question: "Is our data secure?",
      answer: "Your data never leaves your own Google Workspace. We design the system. You own everything inside it."
    },
    {
      question: "How do LINE and Google Workspace work together?",
      answer: "Think of LINE as the front door, where your team sends requests, approves tasks, and gets updates. Google Workspace is the engine room, where everything is stored, processed, and managed behind the scenes."
    }
  ]
};

export const FAQSection = ({ lang = "TH" }: { lang?: string }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = lang === "EN" ? faqContent.EN : faqContent.TH;
  const headline = lang === "EN" ? "FAQ" : "คำถามที่พบบ่อย";

  return (
    <section id="faq" className="bg-white py-[12vw] md:py-[8vw]">
      <Container>
        <div className="w-full max-w-3xl mx-auto px-[4vw] md:px-0">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8 }}
            className="text-center mb-[8vw] md:mb-[5vw]"
          >
            {/* Headline: ไม่มีหัว (font-display) สำหรับภาษาไทย */}
            <h2 className={`text-[7vw] md:text-[3.5vw] lg:text-[2.8vw] font-black text-slate-900 tracking-tighter ${lang === 'TH' ? 'font-display' : 'font-sans'}`}>
              {headline}
            </h2>
          </motion.div>

          <div className="flex flex-col">
            {faqs.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div key={idx} className="border-b border-slate-200">
                  <button
                    suppressHydrationWarning
                    onClick={() => toggleAccordion(idx)}
                    className="w-full flex justify-between items-center text-left py-[5vw] md:py-[2.5vw] transition-colors group cursor-pointer"
                  >
                    {/* Question: ไม่มีหัว (font-display) สำหรับภาษาไทย เพื่อความเฉี่ยว */}
                    <h3 className={`text-[4vw] md:text-[1.4vw] lg:text-[1.1vw] font-black tracking-tight pr-[4vw] transition-colors ${isOpen ? 'text-[#6EE7B7]' : 'text-slate-800 group-hover:text-black'} ${lang === 'TH' ? 'font-display' : 'font-sans'}`}>
                      {faq.question}
                    </h3>
                    <div className={`shrink-0 transition-transform duration-300 ${isOpen ? 'text-[#6EE7B7] rotate-180' : 'text-slate-400'}`}>
                      {isOpen ? (
                        <Minus className="w-[4vw] md:w-[1.2vw] h-[4vw] md:h-[1.2vw]" />
                      ) : (
                        <Plus className="w-[4vw] md:w-[1.2vw] h-[4vw] md:h-[1.2vw]" />
                      )}
                    </div>
                  </button>
                  
                  <div 
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      isOpen ? 'max-h-[100vw] opacity-100 mb-[6vw] md:mb-[3vw]' : 'max-h-0 opacity-0'
                    }`}
                  >
                    {/* Answer: มีหัว (font-sans) เพื่อให้อ่านง่าย สบายตา */}
                    <p className="text-[3.5vw] md:text-[1.2vw] lg:text-[0.95vw] text-slate-500 leading-relaxed opacity-90 font-medium font-sans">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
};