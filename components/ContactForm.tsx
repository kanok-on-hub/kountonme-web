"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

export const ContactForm = ({ lang = "TH" }: { lang?: string }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<{ email?: string; tel?: string }>({});

  const content = {
    TH: {
      headline: "คุยกับทีม BIZ LAB",
      subheadline: (
        <>
          เล่าให้เราฟังได้เลยค่ะ ไม่ว่าจะเป็นปัญหาที่เจอ <br />
          หรืออยากรู้ว่าช่วยอะไรได้บ้าง เราพร้อมตอบค่ะ
        </>
      ),
      labels: {
        name: "ชื่อ-สกุล*",
        email: "อีเมล*",
        tel: "เบอร์โทรศัพท์*",
        message: "ข้อความ"
      },
      errors: {
        email: "⚠️ รูปแบบอีเมลไม่ถูกต้องค่ะ",
        tel: "⚠️ ต้องขึ้นต้นด้วย 0 และมี 10 หลักค่ะ"
      },
      button: "ส่งข้อมูลหาทีมงาน",
      submitting: "กำลังส่งข้อมูล...",
      success: "ได้รับข้อมูลแล้วค่ะ ทีม Biz Lab จะติดต่อกลับหาคุณเร็ว ๆ นี้นะคะ",
      error: "ขออภัยค่ะ เกิดข้อผิดพลาดเล็กน้อย กรุณาลองใหม่อีกครั้ง",
      line: "แชทปรึกษาทีมงานผ่าน LINE"
    },
    EN: {
      headline: "Let's talk.",
      subheadline: (
        <>
          Tell us what's on your plate. We'll take it from there.
        </>
      ),
      labels: {
        name: "Full name*",
        email: "Email*",
        tel: "Phone number*",
        message: "Message"
      },
      errors: {
        email: "⚠️ That doesn't look like a valid email.",
        tel: "⚠️ Please enter a valid 10-digit phone number."
      },
      button: "Send it over",
      submitting: "Sending...",
      success: "Got it. We'll be in touch shortly.",
      error: "Something went wrong. Give it another try.",
      line: "Chat with us on LINE"
    }
  };

  const t = lang === "EN" ? content.EN : content.TH;

  const validateForm = (formData: FormData) => {
    const newErrors: { email?: string; tel?: string } = {};
    const email = formData.get("email") as string;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) newErrors.email = t.errors.email;
    const tel = formData.get("tel") as string;
    const telRegex = /^0[0-9]{9}$/;
    if (!telRegex.test(tel.replace(/[-\s]/g, ""))) newErrors.tel = t.errors.tel;
    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const validationErrors = validateForm(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    setIsSubmitting(true);
    const scriptURL = 'https://script.google.com/macros/s/AKfycbyxHE4eWXHmFvdgDNQVqRCHPFSFYrfjMibIBF4VWV8vP34cBucFFyftVAqq17bC-io/exec';
    try {
      await fetch(scriptURL, { method: 'POST', body: formData, mode: 'no-cors' });
      alert(t.success);
      form.reset();
    } catch (error) {
      alert(t.error);
    }
    setIsSubmitting(false);
  };

  return (
    /* 🟢 เปลี่ยน id เป็น "contact" เพื่อให้เด้งมาจาก Footer ได้แม่นยำครับ */
    <section id="contact" className="w-full bg-[#0B132B] min-h-[85vh] m-0 p-0 border-none relative overflow-hidden flex flex-col justify-center">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[radial-gradient(circle_at_center,#3b82f608,transparent_70%)] -z-0 blur-3xl opacity-40 rounded-full pointer-events-none" />
      
      <div className="max-w-6xl mx-auto px-6 md:px-16 py-24 relative z-10 w-full">
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center md:items-end">

          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-6 md:p-10 rounded-2xl w-full shadow-lg"
          >
            <h2 className={`text-xl md:text-2xl font-black text-[#0B132B] mb-2 text-left tracking-tight ${lang === 'TH' ? 'font-display' : 'font-sans'}`}>
              {t.headline}
            </h2>
            <p className="text-slate-500 mb-5 text-[12px] md:text-sm leading-relaxed text-left font-medium opacity-80 font-sans">
              {t.subheadline}
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
              <div className="flex flex-col md:flex-row md:items-center gap-2">
                <label className={`w-full md:w-32 text-left text-[11px] font-black text-slate-700 tracking-wider ${lang === 'TH' ? 'font-display' : 'font-sans'}`}>{t.labels.name}</label>
                <input required name="name" type="text" className="flex-1 bg-slate-50 border border-slate-100 rounded-md px-3 py-1.5 text-xs focus:outline-none focus:border-[#6EE7B7] transition-all text-slate-900 font-medium font-sans" />
              </div>

              <div className="flex flex-col md:flex-row md:items-start gap-2">
                <label className={`w-full md:w-32 text-left text-[11px] font-black text-slate-700 tracking-wider md:pt-1.5 ${lang === 'TH' ? 'font-display' : 'font-sans'}`}>{t.labels.email}</label>
                <div className="flex-1">
                  <input
                    required
                    name="email"
                    type="email"
                    onChange={() => setErrors(prev => ({ ...prev, email: undefined }))}
                    className={`w-full bg-slate-50 border rounded-md px-3 py-1.5 text-xs focus:outline-none transition-all text-slate-900 font-medium font-sans ${errors.email ? "border-red-400 focus:border-red-400" : "border-slate-100 focus:border-[#6EE7B7]"}`}
                  />
                  {errors.email && <p className="text-red-500 text-[10px] mt-1 font-sans">{errors.email}</p>}
                </div>
              </div>

              <div className="flex flex-col md:flex-row md:items-start gap-2">
                <label className={`w-full md:w-32 text-left text-[11px] font-black text-slate-700 tracking-wider md:pt-1.5 ${lang === 'TH' ? 'font-display' : 'font-sans'}`}>{t.labels.tel}</label>
                <div className="flex-1">
                  <input
                    required
                    name="tel"
                    type="tel"
                    placeholder="0xx-xxx-xxxx"
                    onChange={() => setErrors(prev => ({ ...prev, tel: undefined }))}
                    className={`w-full bg-slate-50 border rounded-md px-3 py-1.5 text-xs focus:outline-none transition-all text-slate-900 font-medium font-sans ${errors.tel ? "border-red-400 focus:border-red-400" : "border-slate-100 focus:border-[#6EE7B7]"}`}
                  />
                  {errors.tel && <p className="text-red-500 text-[10px] mt-1 font-sans">{errors.tel}</p>}
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-2">
                <label className={`w-full md:w-32 text-left text-[11px] font-black text-slate-700 md:pt-1 tracking-wider ${lang === 'TH' ? 'font-display' : 'font-sans'}`}>{t.labels.message}</label>
                <textarea name="message" rows={2} className="flex-1 bg-slate-50 border border-slate-100 rounded-md px-3 py-1.5 text-xs focus:outline-none focus:border-[#6EE7B7] transition-all resize-none text-slate-900 font-medium font-sans"></textarea>
              </div>

              <div className="flex flex-col md:flex-row gap-2 mt-2">
                <div className="hidden md:block md:w-32"></div>
                <div className="flex-1">
                  <button
                    disabled={isSubmitting}
                    type="submit"
                    className={`w-full md:w-auto bg-[#0B132B] hover:bg-black text-white text-[11px] font-black py-2.5 px-8 rounded-full transition-all shadow-md active:scale-95 tracking-tight disabled:bg-slate-400 ${lang === 'TH' ? 'font-display' : 'font-sans'}`}
                  >
                    {isSubmitting ? t.submitting : t.button}
                  </button>
                </div>
              </div>
            </form>
          </motion.div>

          {/* ฝั่งทีม Advisor */}
          <div className="flex flex-col items-center justify-end relative md:h-full mt-10 md:mt-0 pointer-events-none">
            <motion.a
              href="https://line.me/R/ti/p/@290rtmez"
              target="_blank"
              rel="noopener noreferrer"
              animate={{ y: [-2, 2, -2] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="relative md:absolute z-20 md:top-0 md:left-1/2 md:-translate-x-[20%] bg-gradient-to-b from-[#20DE6B] to-[#01B94C] text-white py-3 px-6 rounded-[2rem] shadow-[0_15px_30px_rgba(1,185,76,0.3),inset_0_2px_5px_rgba(255,255,255,0.4)] border border-white/20 flex items-center gap-3 transition-all hover:scale-105 cursor-pointer group whitespace-nowrap pointer-events-auto"
            >
              <svg className="hidden md:block absolute -bottom-[10px] left-[20%] w-5 h-5 text-[#01B94C] drop-shadow-md" viewBox="0 0 20 20" fill="currentColor">
                <path d="M0,0 L20,0 L0,20 Z" />
              </svg>
              <div className="bg-white rounded-full w-8 h-8 flex items-center justify-center shadow-sm relative shrink-0">
                <span className="text-[#01B94C] text-[9px] font-black tracking-tighter">LINE</span>
              </div>
              <span className={`text-[14px] font-black tracking-wide drop-shadow-sm ${lang === 'TH' ? 'font-display' : 'font-sans'}`}>{t.line}</span>
            </motion.a>

            <div className="hidden md:block relative w-full">
              <motion.div animate={{ y: [-5, 5, -5] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} className="absolute top-10 -left-6 opacity-40 blur-[1.5px] z-0">
                <div className="bg-gradient-to-b from-[#20DE6B] to-[#01B94C] rounded-[0.8rem] p-1.5 w-10 h-8 flex items-center justify-center shadow-lg"><span className="text-white text-[8px] font-black">LINE</span></div>
              </motion.div>
              <motion.div animate={{ y: [5, -5, 5] }} transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }} className="absolute bottom-20 -right-8 opacity-30 blur-[2px] scale-90 z-0">
                <div className="bg-gradient-to-b from-[#20DE6B] to-[#01B94C] rounded-[0.8rem] p-1.5 w-10 h-8 flex items-center justify-center shadow-lg"><span className="text-white text-[8px] font-black">LINE</span></div>
              </motion.div>
              
              <Image
                src="/bizlab-contact-advisor.png"
                alt="Biz Lab Team Advisor"
                width={450}
                height={500}
                className="max-h-[340px] w-auto object-contain object-bottom drop-shadow-[0_15px_25px_rgba(0,0,0,0.4)] hover:scale-105 transition-all duration-500 relative z-10 mx-auto"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};