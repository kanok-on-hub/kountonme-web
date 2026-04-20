"use client";
import React from 'react';
import { motion } from "framer-motion";

export function PhilosophySection() {
  return (
    <section className="w-full min-h-[85vh] md:min-h-0 md:py-[15vw] m-0 border-none overflow-hidden flex flex-col items-center justify-center bg-[#0B132B]">
      <div className="w-full max-w-[100vw] mx-auto px-[6vw] text-center relative z-10">
        
        {/* Sub-header */}
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="text-[#6EE7B7] font-black tracking-[0.3em] text-[2.5vw] md:text-[1vw] lg:text-[0.8vw] mb-[3vw] md:mb-[1.5vw] uppercase"
        >
          THE PHILOSOPHY
        </motion.p>

        {/* Headline: แยกบรรทัดและใช้ขนาดเดียวกับ Hero */}
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-[6vw] md:text-[5.5vw] lg:text-[4.8vw] font-black font-sans leading-[1.1] text-white tracking-tighter mb-[3.5vw] md:mb-[2.5vw]"
        >
          <div>เราเชื่อในวิถีการทำงานยุคใหม่</div>
          <div className="text-[#6EE7B7] italic">
            (The Renaissance of Work)
          </div>
        </motion.h2>

        {/* Content Section: ขนาดเท่ากับ Sub-headline ของ Hero */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-slate-300 text-[3.2vw] md:text-[1.8vw] lg:text-[1.2vw] leading-relaxed max-w-[85%] md:max-w-2xl mx-auto mt-[7vw] md:mt-[4vw] space-y-[1.5vw] md:space-y-[0.5vw] font-medium opacity-90"
        >
          <p>เวลาของคุณมีค่าเกินกว่าจะเสียไปกับงานซ้ำ ๆ</p>
          <p>การคิด การตัดสินใจ และการสื่อสาร คือสิ่งที่ต้องการคุณ</p>
        </motion.div>
      </div>

      {/* Background Effect */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#3b82f608,transparent_70%)] pointer-events-none" />
    </section>
  );
}

export default PhilosophySection;