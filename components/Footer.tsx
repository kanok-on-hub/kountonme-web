"use client";
import { Container } from "./Container";

export const Footer = ({ lang = "TH" }: { lang?: string }) => {

  const content = {
    TH: {
      company: "บริษัท เคาท์ ออน มี บิซ แล็บ จำกัด",
      address: <>เลขที่ 406 อาคารยูดีไลท์ อ่อนนุช ถนน สุขุมวิท 77 <br />แขวงสวนหลวง เขตสวนหลวง กรุงเทพมหานคร 10250</>,
      menuLabel: "เมนู",
      menu: [
        { name: "ปัญหาของคุณ", id: "problem" },
        { name: "บริการของเรา", id: "workforce" },
        { name: "วิธีการทำงาน", id: "how-it-works" },
        { name: "ตัวอย่างจริง", id: "use-cases" },
        { name: "คำถามที่พบบ่อย", id: "faq" },
        { name: "คุยกับทีม BIZ LAB", id: "contact" },
      ],
      contactLabel: "ช่องทางติดต่อ",
      privacy: "นโยบายความเป็นส่วนตัว",
      terms: "เงื่อนไขการใช้งาน"
    },
    EN: {
      company: "Kount on Me Biz Lab Co., Ltd.",
      address: <>406 U Delight Office, Sukhumvit 77,<br />Suan Luang, Bangkok 10250</>,
      menuLabel: "Menu",
      menu: [
        { name: "Problems", id: "problem" },
        { name: "Services", id: "workforce" },
        { name: "How We Work", id: "how-it-works" },
        { name: "Use Cases", id: "use-cases" },
        { name: "FAQ", id: "faq" },
        { name: "Let's talk", id: "contact" },
      ],
      contactLabel: "Contact",
      privacy: "Privacy Policy",
      terms: "Terms of Use"
    }
  };

  const t = lang === "EN" ? content.EN : content.TH;

  return (
    /* 🟢 ปรับลด py จาก 10/5 เหลือ 5/2.5 เพื่อให้ Footer ผอมลงครับ */
    <footer className="w-full bg-white text-slate-800 py-[5vw] md:py-[2.5vw] border-t border-slate-200 relative z-0">
      <Container>
        {/* 🟢 ปรับลดช่องว่าง gap ระหว่างคอลัมน์จาก 10/6 เหลือ 6/4 */}
        <div className="w-full max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-[6vw] md:gap-[4vw] items-start px-[2vw]">
          
          {/* 1. ข้อมูลบริษัท */}
          <div className="flex flex-col gap-[2vw] md:gap-[0.8vw]">
            <h3 className={`font-black text-[4vw] md:text-[1.1vw] lg:text-[0.95vw] text-[#0B132B] tracking-tight ${lang === 'TH' ? 'font-display' : 'font-sans'}`}>
              {t.company}
            </h3>
            <p className="text-[3.5vw] md:text-[0.95vw] lg:text-[0.8vw] text-slate-500 leading-relaxed font-medium font-sans">
              {t.address}
            </p>
          </div>

          {/* 2. เมนู */}
          <div className="flex flex-col gap-[3vw] md:gap-[0.8vw]">
            <h3 className={`font-black text-[4vw] md:text-[1.1vw] lg:text-[0.95vw] text-[#0B132B] tracking-tight ${lang === 'TH' ? 'font-display' : 'font-sans'}`}>
              {t.menuLabel}
            </h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-[2.5vw] md:gap-x-[1.5vw] md:gap-y-[0.5vw]">
              {t.menu.map((item) => (
                <li key={item.id} className="flex items-center">
                  <a 
                    href={`#${item.id}`} 
                    className="text-[3.5vw] md:text-[0.95vw] lg:text-[0.8vw] text-slate-500 hover:text-[#0B132B] transition-colors font-medium font-sans block py-0.2"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* 3. ช่องทางติดต่อ */}
          <div className="flex flex-col gap-[3vw] md:gap-[0.8vw]">
            <h3 className={`font-black text-[4vw] md:text-[1.1vw] lg:text-[0.95vw] text-[#0B132B] tracking-tight ${lang === 'TH' ? 'font-display' : 'font-sans'}`}>
              {t.contactLabel}
            </h3>
            <ul className="flex flex-col gap-[2.5vw] md:gap-[0.6vw]">
              <li className="flex items-center gap-[2.5vw] md:gap-[0.6vw]">
                <svg className="w-[4vw] md:w-[1vw] h-[4vw] md:h-[1vw] text-slate-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                <a href="tel:0615146662" className="text-[3.5vw] md:text-[0.95vw] lg:text-[0.8vw] text-slate-500 transition-colors hover:text-[#0B132B] font-medium font-sans">061-514-6662</a>
              </li>
              <li className="flex items-center gap-[2.5vw] md:gap-[0.6vw]">
                <svg className="w-[4vw] md:w-[1vw] h-[4vw] md:h-[1vw] text-slate-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                <a href="mailto:kanok-on@kountonme.com" className="text-[3.5vw] md:text-[0.95vw] lg:text-[0.8vw] text-slate-500 transition-colors hover:text-[#0B132B] font-medium font-sans">kanok-on@kountonme.com</a>
              </li>
              <li className="flex items-center gap-[2.5vw] md:gap-[0.6vw]">
                <svg className="w-[4vw] md:w-[1vw] h-[4vw] md:h-[1vw] text-slate-400 shrink-0" fill="currentColor" viewBox="0 0 24 24"><path d="M24 10.304c0-5.369-5.383-9.738-12-9.738-6.616 0-12 4.369-12 9.738 0 4.814 4.269 8.846 10.036 9.608.391.084.922.258 1.057.592.122.303.079.778.039 1.085l-.171 1.027c-.053.303-.242 1.186 1.039.647 1.281-.54 6.911-4.069 9.428-6.967 1.739-1.907 2.572-3.843 2.572-5.992z" /></svg>
                <a href="https://line.me/R/ti/p/@290rtmez" target="_blank" rel="noopener noreferrer" className="text-[3.5vw] md:text-[0.95vw] lg:text-[0.8vw] text-slate-500 transition-colors hover:text-[#00C300] font-medium font-sans">LINE Official</a>
              </li>
            </ul>
          </div>
        </div>

        {/* --- ส่วน Copyright (ปรับลดระยะขอบบน) --- */}
        <div className="w-full max-w-5xl mx-auto mt-[4vw] md:mt-[2vw] pt-[4vw] md:pt-[1vw] border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-[3vw] md:gap-0 text-[3vw] md:text-[0.85vw] lg:text-[0.7vw] text-slate-400 px-[2vw]">
          <p className="font-sans italic opacity-80 text-center md:text-left">© 2026 Kount on Me Biz Lab. All rights reserved.</p>
          <div className="flex gap-[5vw] md:gap-[2vw]">
            <a href="#" className="hover:text-slate-600 transition-colors font-sans">{t.privacy}</a>
            <a href="#" className="hover:text-slate-600 transition-colors font-sans">{t.terms}</a>
          </div>
        </div>
      </Container>
    </footer>
  );
};