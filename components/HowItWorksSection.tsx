"use client";
import React from "react";
import { motion } from "framer-motion";

export const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="w-full bg-[#0B132B] m-0 p-0 border-none relative overflow-hidden flex items-center">
      <div className="w-full max-w-[100vw] mx-auto px-[6vw] py-[20vw] md:py-[10vw]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[12vw] lg:gap-[8vw] items-start">
          
          {/* ฝั่งซ้าย: Headline และ Intro */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8 }}
            className="flex flex-col text-left"
          >
            <h2 className="text-[8.5vw] md:text-[5.5vw] lg:text-[4.5vw] font-black text-white mb-[4vw] md:mb-[2vw] tracking-tighter leading-[1.1] font-sans">
              เปลี่ยนความวุ่นวาย<br />ให้เป็นระบบที่ไหลลื่น
            </h2>
            
            <div className="w-[12vw] md:w-[4vw] h-[1.2vw] md:h-[0.4vw] bg-[#6EE7B7] mb-[8vw] md:mb-[3vw] rounded-full"></div>
            
            <div className="text-[3.2vw] md:text-[1.8vw] lg:text-[1.2vw] text-slate-300 mb-[10vw] md:mb-0 leading-relaxed max-w-[95%] opacity-90 font-medium font-sans">
              เราคือ <span className="text-white font-black">AI Workflow Designer</span> <br className="md:hidden" />
              ที่ทำความเข้าใจวิธีทำงานของคุณ <br />
              และออกแบบ <span className="text-[#6EE7B7] font-black">Digital Workforce</span> <br className="md:hidden" />
              ให้ทำงานกับทีมได้อย่างไร้รอยต่อ
            </div>
          </motion.div>

          {/* ฝั่งขวา: Steps 01-03 */}
          <div className="flex flex-col gap-[10vw] md:gap-[5vw]">
            
            {/* Step 01 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6 }}
              className="flex gap-[5vw] md:gap-[3vw] items-start"
            >
              <div className="text-[12vw] md:text-[5vw] font-black text-white/10 leading-none shrink-0 font-sans">01</div>
              <div className="pt-[1.5vw] md:pt-[0.5vw]">
                <h3 className="text-[5.5vw] md:text-[2.2vw] lg:text-[1.8vw] font-black text-white mb-[2vw] md:mb-[1vw] tracking-tighter font-sans">
                  Audit
                </h3>
                <div className="text-[3.5vw] md:text-[1.6vw] lg:text-[1.1vw] text-slate-400 leading-relaxed text-left opacity-85 font-medium font-sans">
                  หา "คอขวด" และจุดที่กินเวลาในธุรกิจ<br />
                  เพื่อแยกว่าส่วนไหนควรใช้ระบบอัตโนมัติ
                </div>
              </div>
            </motion.div>

            {/* Step 02 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex gap-[5vw] md:gap-[3vw] items-start"
            >
              <div className="text-[12vw] md:text-[5vw] font-black text-white/10 leading-none shrink-0 font-sans">02</div>
              <div className="pt-[1.5vw] md:pt-[0.5vw]">
                <h3 className="text-[5.5vw] md:text-[2.2vw] lg:text-[1.8vw] font-black text-white mb-[2vw] md:mb-[1vw] tracking-tighter font-sans">
                  Redesign
                </h3>
                <div className="text-[3.5vw] md:text-[1.6vw] lg:text-[1.1vw] text-slate-400 leading-relaxed text-left opacity-85 font-medium font-sans">
                  ออกแบบ Workflow เปลี่ยนงานซ้ำ ๆ <br />
                  ให้ "ทีมงานดิจิทัล" มาทำงานแทนคุณ
                </div>
              </div>
            </motion.div>

            {/* Step 03 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex gap-[5vw] md:gap-[3vw] items-start"
            >
              <div className="text-[12vw] md:text-[5vw] font-black text-white/10 leading-none shrink-0 font-sans">03</div>
              <div className="pt-[1.5vw] md:pt-[0.5vw]">
                <h3 className="text-[5.5vw] md:text-[2.2vw] lg:text-[1.8vw] font-black text-white mb-[2vw] md:mb-[1vw] tracking-tighter font-sans">
                  Implement
                </h3>
                <div className="text-[3.5vw] md:text-[1.6vw] lg:text-[1.1vw] text-slate-400 leading-relaxed text-left opacity-85 font-medium font-sans">
                  ติดตั้งบน LINE และ Google Workspace <br />
                  ให้ทีมเริ่มใช้ได้ทันที โดยไม่ต้องเรียนรู้ใหม่ <br />
                  พร้อมดูแลและบริหารงาน AI อย่างครบวงจร
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
};