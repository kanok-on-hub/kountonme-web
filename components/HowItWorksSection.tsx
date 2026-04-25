"use client";
import React from "react";
import { motion } from "framer-motion";

export const HowItWorksSection = ({ lang = "TH" }: { lang?: string }) => {

  const content = {
    TH: {
      headline: <>เปลี่ยนความวุ่นวาย<br />ให้เป็นระบบที่ไหลลื่น</>,
      description: (
        <>
          เราคือ <span className="text-white font-black">AI Workflow Designer</span> <br className="md:hidden" />
          ที่ทำความเข้าใจวิธีทำงานของคุณ <br />
          และออกแบบ <span className="text-[#6EE7B7] font-black">Digital Workforce</span> <br className="md:hidden" />
          ให้ทำงานกับทีมได้อย่างไร้รอยต่อ
        </>
      ),
      steps: [
        {
          number: "01",
          title: "Audit",
          content: (
            <>
              หา "คอขวด" และจุดที่กินเวลาในธุรกิจ<br />
              เพื่อแยกว่าส่วนไหนควรใช้ระบบอัตโนมัติ
            </>
          )
        },
        {
          number: "02",
          title: "Redesign",
          content: (
            <>
              ออกแบบ Workflow เปลี่ยนงานซ้ำ ๆ <br />
              ให้ "ทีมงานดิจิทัล" มาทำงานแทนคุณ
            </>
          )
        },
        {
          number: "03",
          title: "Implement",
          content: (
            <>
              ติดตั้งบน LINE และ Google Workspace <br />
              ให้ทีมเริ่มใช้ได้ทันที โดยไม่ต้องเรียนรู้ใหม่ <br />
              พร้อมดูแลและบริหารงาน AI อย่างครบวงจร
            </>
          )
        }
      ]
    },
    EN: {
      headline: <>Stop managing.<br />Start leading.</>,
      description: (
        <>
          We are <span className="text-white font-black">AI Workflow Designers.</span> <br />
          We learn how your business works, then build <br />
          a <span className="text-[#6EE7B7] font-black">Digital Workforce</span> that integrates seamlessly.
        </>
      ),
      steps: [
        {
          number: "01",
          title: "Audit",
          content: (
            <>
              We assess your workflows, surface <br className="md:hidden" />
              the bottlenecks, <br className="hidden md:block" />
              and prioritize the <br className="md:hidden" />
              automations with the highest impact.
            </>
          )
        },
        {
          number: "02",
          title: "Redesign",
          content: (
            <>
              We redesign your workflows around <br />
              what needs you and what doesn't.
            </>
          )
        },
        {
          number: "03",
          title: "Implement",
          content: (
            <>
              We deploy on LINE and Google <br className="md:hidden" />
              Workspace. <br className="hidden md:block" />
              Your team is ready <br className="md:hidden" />
              from day one, no added complexity.
            </>
          )
        }
      ]
    }
  };

  const t = lang === "EN" ? content.EN : content.TH;

  return (
    <section id="how-it-works" className="w-full bg-[#0B132B] m-0 p-0 border-none relative overflow-hidden flex items-center">
      <div className="w-full max-w-[100vw] lg:max-w-[98vw] mx-auto px-[6vw] py-[20vw] md:py-[10vw]">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[12vw] lg:gap-[8vw] items-start">
          
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8 }}
            className="flex flex-col text-left"
          >
            {/* Headline: ไม่มีหัว (font-display) สำหรับภาษาไทย */}
            <h2 className={`text-[8.5vw] md:text-[5.5vw] lg:text-[3.5vw] font-black text-white mb-[4vw] md:mb-[2vw] tracking-tighter leading-[1.1] ${lang === 'TH' ? 'font-display' : 'font-sans'}`}>
              {t.headline}
            </h2>
            
            <div className="w-[12vw] md:w-[4vw] h-[1.2vw] md:h-[0.4vw] bg-[#6EE7B7] mb-[8vw] md:mb-[3vw] rounded-full"></div>
            
            {/* Description: มีหัว (font-sans) เพื่อให้น่าเชื่อถือ */}
            <div className="text-[3.2vw] md:text-[1.8vw] lg:text-[1.2vw] text-slate-300 mb-[10vw] md:mb-0 leading-relaxed max-w-[95%] opacity-90 font-medium font-sans">
              {t.description}
            </div>
          </motion.div>

          <div className="flex flex-col gap-[10vw] md:gap-[5vw] w-full">
            {t.steps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                className="flex gap-[5vw] md:gap-[3vw] items-start w-full"
              >
                {/* Step Number: ใช้ font-display เพื่อให้ตัวเลขดู Modern */}
                <div className={`text-[12vw] md:text-[5vw] font-black text-white/10 leading-none shrink-0 ${lang === 'TH' ? 'font-display' : 'font-sans'}`}>
                  {step.number}
                </div>

                <div className="pt-[1.5vw] md:pt-[0.5vw] w-full">
                  {/* Step Title: ภาษาอังกฤษใช้ font-sans หนาพิเศษ */}
                  <h3 className="text-[5.5vw] md:text-[2.2vw] lg:text-[1.8vw] font-black text-white mb-[2vw] md:mb-[1vw] tracking-tighter font-sans">
                    {step.title}
                  </h3>
                  {/* Step Content: มีหัว (font-sans) เพื่อให้อ่านง่าย */}
                  <div className="text-[3.5vw] md:text-[1.6vw] lg:text-[1.1vw] text-slate-400 leading-relaxed text-left opacity-85 font-medium font-sans w-full">
                    {step.content}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};