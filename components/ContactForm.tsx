"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

export const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const form = e.currentTarget; 
    const scriptURL = 'https://script.google.com/macros/s/AKfycbyxHE4eWXHmFvdgDNQVqRCHPFSFYrfjMibIBF4VWV8vP34cBucFFyftVAqq17bC-io/exec'; 
    
    try {
      await fetch(scriptURL, { 
        method: 'POST', 
        body: new FormData(form),
        mode: 'no-cors' 
      });
      
      alert("ส่งข้อมูลเรียบร้อยแล้ว! ทีมงานจะติดต่อกลับหาคุณโดยเร็วที่สุดค่ะ");
      form.reset(); 
      
    } catch (error) {
      console.error('Error!', error);
      alert("ขออภัยค่ะ เกิดข้อผิดพลาดเล็กน้อย กรุณาลองใหม่อีกครั้ง");
    }
    
    setIsSubmitting(false);
  };

  return (
    <section id="contact-form" className="w-full bg-[#0B132B] min-h-[85vh] m-0 p-0 border-none relative overflow-hidden flex flex-col justify-center">
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[radial-gradient(circle_at_center,#3b82f608,transparent_70%)] -z-0 blur-3xl opacity-40 rounded-full" />
      
      <div className="max-w-6xl mx-auto px-6 md:px-16 py-24 relative z-10">
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">

          {/* ฝั่งซ้าย: ฟอร์มกรอกข้อมูล */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-6 md:p-10 rounded-2xl w-full shadow-lg"
          >
            <h2 className="text-xl md:text-2xl font-black text-[#0B132B] mb-2 text-left font-sans tracking-tight">
              คุยกับทีม BIZ LAB
            </h2>
            <p className="text-slate-500 mb-5 text-[12px] md:text-sm leading-relaxed text-left font-medium opacity-80 font-sans">
              เล่าให้เราฟังได้เลยค่ะ ไม่ว่าจะเป็นปัญหาที่เจอ <br /> 
              หรืออยากรู้ว่าช่วยอะไรได้บ้าง เราพร้อมตอบค่ะ
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
              <div className="flex flex-col md:flex-row md:items-center gap-2">
                <label className="w-full md:w-[40%] text-left text-[11px] font-black text-slate-700 font-sans uppercase tracking-wider">ชื่อ-สกุล*</label>
                <input required name="name" type="text" className="w-full md:w-[60%] bg-slate-50 border border-slate-100 rounded-md px-3 py-1.5 text-xs focus:outline-none focus:border-[#6EE7B7] transition-all text-slate-900 font-medium font-sans" />
              </div>
              <div className="flex flex-col md:flex-row md:items-center gap-2">
                <label className="w-full md:w-[40%] text-left text-[11px] font-black text-slate-700 font-sans uppercase tracking-wider">อีเมล*</label>
                <input required name="email" type="email" className="w-full md:w-[60%] bg-slate-50 border border-slate-100 rounded-md px-3 py-1.5 text-xs focus:outline-none focus:border-[#6EE7B7] transition-all text-slate-900 font-medium font-sans" />
              </div>
              <div className="flex flex-col md:flex-row md:items-center gap-2">
                <label className="w-full md:w-[40%] text-left text-[11px] font-black text-slate-700 font-sans uppercase tracking-wider">เบอร์โทรศัพท์*</label>
                <input required name="tel" type="tel" className="w-full md:w-[60%] bg-slate-50 border border-slate-100 rounded-md px-3 py-1.5 text-xs focus:outline-none focus:border-[#6EE7B7] transition-all text-slate-900 font-medium font-sans" />
              </div>
              <div className="flex flex-col md:flex-row gap-2">
                <label className="w-full md:w-[40%] text-left text-[11px] font-black text-slate-700 md:pt-1 font-sans uppercase tracking-wider">ข้อความ</label>
                <textarea name="message" rows={2} className="w-full md:w-[60%] bg-slate-50 border border-slate-100 rounded-md px-3 py-1.5 text-xs focus:outline-none focus:border-[#6EE7B7] transition-all resize-none text-slate-900 font-medium font-sans"></textarea>
              </div>
              <div className="flex flex-col md:flex-row gap-2 mt-2">
                <div className="hidden md:block w-[40%]"></div>
                <div className="w-full md:w-[60%]">
                  <button disabled={isSubmitting} type="submit" className="w-full md:w-auto bg-[#0B132B] hover:bg-black text-white text-[11px] font-black py-2.5 px-8 rounded-full transition-all shadow-md active:scale-95 font-sans uppercase tracking-tight disabled:bg-slate-400">
                    {isSubmitting ? "กำลังส่งข้อมูล..." : "ส่งข้อมูลหาทีมงาน"}
                  </button>
                </div>
              </div>
            </form>
          </motion.div>

          {/* ฝั่งขวา: รูป Advisor + ปุ่ม LINE + ไอคอนลอย 2 อัน */}
          <div className="flex flex-col items-center justify-center relative md:h-full mt-10 md:mt-0">
            
            {/* ปุ่ม LINE หลัก */}
            <motion.a
              href="https://line.me/R/ti/p/@290rtmez" 
              target="_blank"
              rel="noopener noreferrer"
              animate={{ y: [-2, 2, -2] }} 
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="relative md:absolute z-20 md:-top-0 md:-right-8 lg:md:-right-20 bg-gradient-to-b from-[#20DE6B] to-[#01B94C] text-white py-3 px-6 lg:py-2.5 lg:px-6 rounded-[2rem] shadow-[0_15px_30px_rgba(1,185,76,0.3),inset_0_2px_5px_rgba(255,255,255,0.4)] border border-white/20 flex items-center gap-3 transition-all hover:scale-105 cursor-pointer group whitespace-nowrap"
            >
              <svg className="hidden md:block absolute -bottom-[10px] left-[20%] w-5 h-5 text-[#01B94C] drop-shadow-md" viewBox="0 0 20 20" fill="currentColor">
                <path d="M0,0 L20,0 L0,20 Z" />
              </svg>
              <div className="bg-white rounded-full w-8 h-8 lg:w-8 h-8 flex items-center justify-center shadow-sm relative shrink-0">
                <span className="text-[#01B94C] text-[9px] lg:text-[9px] font-black tracking-tighter">LINE</span>
              </div>
              <span className="text-[14px] lg:text-[14px] font-black tracking-wide drop-shadow-sm">แชทปรึกษาทีมงานผ่าน LINE</span>
            </motion.a>

            <div className="hidden md:block relative mt-12">
               {/* 1. ไอคอนลอยฝั่งซ้าย */}
               <motion.div animate={{y: [-5, 5, -5]}} transition={{duration: 6, repeat: Infinity, ease: "easeInOut"}} className="absolute top-10 -left-12 opacity-40 blur-[2px] z-0">
                  <div className="bg-gradient-to-b from-[#20DE6B] to-[#01B94C] rounded-[0.8rem] p-1.5 w-10 h-8 flex items-center justify-center relative shadow-lg"><span className="text-white text-[8px] font-black">LINE</span></div>
               </motion.div>

               {/* 2. ไอคอนลอยฝั่งขวา */}
               <motion.div animate={{y: [5, -5, 5]}} transition={{duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1}} className="absolute bottom-20 -right-16 opacity-30 blur-[3px] scale-90 z-0">
                  <div className="bg-gradient-to-b from-[#20DE6B] to-[#01B94C] rounded-[0.8rem] p-1.5 w-10 h-8 flex items-center justify-center relative shadow-lg"><span className="text-white text-[8px] font-black">LINE</span></div>
               </motion.div>

               <Image 
                src="/bizlab-contact-advisor.png" 
                alt="Biz Lab Team Advisor" 
                width={450} 
                height={500} 
                className="max-h-[380px] w-auto object-contain object-bottom drop-shadow-[0_15px_25px_rgba(0,0,0,0.4)] hover:scale-105 transition-all duration-500 relative z-10" 
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};