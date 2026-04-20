"use client";
import React from "react";
import { motion } from "framer-motion";
import { MessageSquare } from "lucide-react";

export const Hero = () => {
  return (
    <section className="w-full bg-[#0B132B] m-0 p-0 border-none relative overflow-hidden flex items-center min-h-[85vh]">
      
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[140vw] h-[80vw] bg-[radial-gradient(circle_at_center,#3b82f612,transparent_65%)] -z-0 blur-3xl opacity-60 rounded-full" />
      
      <div className="w-full max-w-[100vw] mx-auto px-[6vw] py-[10vw] md:py-[8vw] pt-[28vw] md:pt-[10vw] relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full text-center flex flex-col items-center"
        >
          
          <h1 className="text-[6vw] md:text-[5.5vw] lg:text-[4.8vw] font-black font-sans leading-[1.1] text-white tracking-tighter mb-[3.5vw] md:mb-[2.5vw]">
            Redesign Your Workflow,<br />
            <span className="text-[#6EE7B7]">Redefine Your Future.</span>
          </h1>

          <p className="text-[3.2vw] md:text-[1.8vw] lg:text-[1.2vw] text-slate-300 max-w-[85%] md:max-w-2xl mx-auto leading-relaxed mb-[7vw] md:mb-[4vw] font-medium">
            เปลี่ยนงานซ้ำ ๆ ให้เป็นระบบอัตโนมัติด้วยทีมงานดิจิทัล<br className="hidden md:block" />
            ที่ช่วยจัดการงานหลังบ้าน เพื่อให้คุณโฟกัสกับการเติบโต
          </p>

          <div className="flex items-center justify-center relative z-20">
            <button
              onClick={() => {
                const element = document.getElementById("contact-form");
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="group relative h-[11vw] md:h-[5vw] lg:h-[3.8vw] px-[8vw] md:px-[3.5vw] flex items-center justify-center bg-white text-[#0B132B] rounded-full font-bold text-[3.2vw] md:text-[1.6vw] lg:text-[1.1vw] overflow-hidden transition-all hover:bg-[#6EE7B7] hover:shadow-[0_0_30px_rgba(110,231,183,0.25)] cursor-pointer active:scale-95"
            >
              <MessageSquare className="w-[3.8vw] md:w-[1.6vw] h-[3.8vw] md:h-[1.6vw] mr-[2vw] md:mr-[1vw]" />
              <span className="relative z-10">เล่า Workflow ของคุณให้เราฟัง</span>
            </button>
          </div>

        </motion.div>
      </div>
    </section>
  );
};