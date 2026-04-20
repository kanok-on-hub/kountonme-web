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
                <input 
                  required 
                  name="name" 
                  type="text" 
                  suppressHydrationWarning={true} 
                  className="w-full md:w-[60%] bg-slate-50 border border-slate-100 rounded-md px-3 py-1.5 text-xs focus:outline-none focus:border-[#6EE7B7] transition-all text-slate-900 font-medium font-sans" 
                />
              </div>

              <div className="flex flex-col md:flex-row md:items-center gap-2">
                <label className="w-full md:w-[40%] text-left text-[11px] font-black text-slate-700 font-sans uppercase tracking-wider">อีเมล*</label>
                <input 
                  required 
                  name="email" 
                  type="email" 
                  suppressHydrationWarning={true} 
                  className="w-full md:w-[60%] bg-slate-50 border border-slate-100 rounded-md px-3 py-1.5 text-xs focus:outline-none focus:border-[#6EE7B7] transition-all text-slate-900 font-medium font-sans" 
                />
              </div>

              <div className="flex flex-col md:flex-row md:items-center gap-2">
                <label className="w-full md:w-[40%] text-left text-[11px] font-black text-slate-700 font-sans uppercase tracking-wider">เบอร์โทรศัพท์*</label>
                <input 
                  required 
                  name="tel" 
                  type="tel" 
                  suppressHydrationWarning={true} 
                  className="w-full md:w-[60%] bg-slate-50 border border-slate-100 rounded-md px-3 py-1.5 text-xs focus:outline-none focus:border-[#6EE7B7] transition-all text-slate-900 font-medium font-sans" 
                />
              </div>

              <div className="flex flex-col md:flex-row gap-2">
                <label className="w-full md:w-[40%] text-left text-[11px] font-black text-slate-700 md:pt-1 font-sans uppercase tracking-wider">ข้อความ</label>
                <textarea 
                  name="message" 
                  rows={2} 
                  suppressHydrationWarning={true}
                  className="w-full md:w-[60%] bg-slate-50 border border-slate-100 rounded-md px-3 py-1.5 text-xs focus:outline-none focus:border-[#6EE7B7] transition-all resize-none text-slate-900 font-medium font-sans"
                ></textarea>
              </div>

              <div className="flex flex-col md:flex-row gap-2 mt-2">
                <div className="hidden md:block w-[40%]"></div>
                <div className="w-full md:w-[60%]">
                  <button 
                    disabled={isSubmitting}
                    type="submit"
                    suppressHydrationWarning={true}
                    className="w-full md:w-auto bg-[#0B132B] hover:bg-black text-white text-[11px] font-black py-2.5 px-8 rounded-full transition-all shadow-md active:scale-95 font-sans uppercase tracking-tight disabled:bg-slate-400 disabled:text-slate-200"
                  >
                    {isSubmitting ? "กำลังส่งข้อมูล..." : "ส่งข้อมูลหาทีมงาน"}
                  </button>
                </div>
              </div>
            </form>
          </motion.div>

          {/* ฝั่งขวา: รูป Advisor + ปุ่ม LINE สีเขียว */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="hidden md:flex relative justify-center items-end self-end h-full md:-translate-x-4 lg:-translate-x-8 pb-4"
          >
            <div className="relative">
              <motion.a
                href="https://line.me/R/ti/p/@290rtmez" 
                target="_blank"
                rel="noopener noreferrer"
                animate={{ y: [-4, 4, -4] }} 
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="absolute z-20 -top-8 -right-12 lg:-right-24 xl:-right-32 bg-[#06C755] hover:bg-[#04a042] text-white py-2.5 px-5 rounded-full shadow-[0_8px_20px_rgba(6,199,85,0.25)] flex items-center gap-2.5 transition-all hover:scale-105 cursor-pointer group whitespace-nowrap"
              >
                <svg className="absolute top-[96%] left-6 lg:left-8 w-4 h-5 text-[#06C755] group-hover:text-[#04a042] transition-colors" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M0,0 L20,0 L0,20 Z" />
                </svg>

                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 group-hover:animate-pulse">
                  <path d="M24 10.304c0-5.369-5.383-9.738-12-9.738-6.616 0-12 4.369-12 9.738 0 4.814 4.269 8.846 10.036 9.608.391.084.922.258 1.057.592.122.303.079.778.039 1.085l-.171 1.027c-.053.303-.242 1.186 1.039.647 1.281-.54 6.911-4.069 9.428-6.967 1.739-1.907 2.572-3.843 2.572-5.992z" />
                </svg>
                
                <span className="text-[13px] font-bold tracking-wide">แชทปรึกษาทีมงานผ่าน LINE</span>
              </motion.a>

              <Image 
                src="/bizlab-contact-advisor.png" 
                alt="Biz Lab Team Advisor" 
                width={450} 
                height={500} 
                className="max-h-[380px] w-auto object-contain object-bottom drop-shadow-2xl hover:scale-105 transition-all duration-500 relative z-10" 
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};