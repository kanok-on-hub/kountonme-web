"use client";
import { Container } from "./Container";

export const Footer = () => {
  return (
    <footer className="w-full bg-white text-slate-800 py-[6vw] md:py-[3vw] border-t border-slate-200">
      <Container>
        <div className="w-full max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-[1.5fr_1fr_1.5fr] gap-[8vw] md:gap-[4vw] items-start px-[2vw]">
          
          {/* Company Info */}
          <div className="flex flex-col gap-[2vw] md:gap-[0.8vw]">
            <h3 className="font-black text-[3.8vw] md:text-[1.1vw] lg:text-[0.95vw] text-[#0B132B] font-sans tracking-tight">
              บริษัท เคาท์ ออน มี บิซ แล็บ จำกัด
            </h3>
            <p className="text-[3.2vw] md:text-[1vw] lg:text-[0.85vw] text-slate-500 leading-relaxed font-medium font-sans">
              เลขที่ 406 อาคารยูดีไลท์ อ่อนนุช ถนน สุขุมวิท 77 <br />
              แขวงสวนหลวง เขตสวนหลวง กรุงเทพมหานคร 10250
            </p>
          </div>

          {/* Menu */}
          <div className="flex flex-col gap-[2vw] md:gap-[0.8vw] md:pl-[2vw]">
            <h3 className="font-black text-[3.8vw] md:text-[1.1vw] lg:text-[0.95vw] text-[#0B132B] font-sans tracking-tight">
              เมนู
            </h3>
            <ul className="flex flex-col gap-[2.5vw] md:gap-[0.8vw]">
              <li className="flex items-center min-h-[4vw] md:min-h-[1.2vw]">
                <a href="#workforce" className="text-[3.2vw] md:text-[1vw] lg:text-[0.85vw] text-slate-500 hover:text-[#0B132B] transition-colors font-medium font-sans">ทีมงานดิจิทัล</a>
              </li>
              <li className="flex items-center min-h-[4vw] md:min-h-[1.2vw]">
                <a href="#how-it-works" className="text-[3.2vw] md:text-[1vw] lg:text-[0.85vw] text-slate-500 hover:text-[#0B132B] transition-colors font-medium font-sans">วิธีการทำงาน</a>
              </li>
              <li className="flex items-center min-h-[4vw] md:min-h-[1.2vw]">
                <a href="#use-cases" className="text-[3.2vw] md:text-[1vw] lg:text-[0.85vw] text-slate-500 hover:text-[#0B132B] transition-colors font-medium font-sans">ตัวอย่างทีมงาน</a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-[2vw] md:gap-[0.8vw]">
            <h3 className="font-black text-[3.8vw] md:text-[1.1vw] lg:text-[0.95vw] text-[#0B132B] font-sans tracking-tight">
              ช่องทางติดต่อ
            </h3>
            <ul className="flex flex-col gap-[2.5vw] md:gap-[0.8vw]">
              <li className="flex items-center gap-[2vw] md:gap-[0.8vw] min-h-[4vw] md:min-h-[1.2vw]">
                <svg className="w-[3.5vw] md:w-[0.9vw] h-[3.5vw] md:h-[0.9vw] text-slate-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                <a href="tel:0615146662" className="text-[3.2vw] md:text-[1vw] lg:text-[0.85vw] text-slate-500 transition-colors hover:text-[#0B132B] font-medium font-sans">061-514-6662</a>
              </li>
              <li className="flex items-center gap-[2vw] md:gap-[0.8vw] whitespace-nowrap min-h-[4vw] md:min-h-[1.2vw]">
                <svg className="w-[3.5vw] md:w-[0.9vw] h-[3.5vw] md:h-[0.9vw] text-slate-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                <a href="mailto:kanok-on@kountonme.com" className="text-[3.2vw] md:text-[1vw] lg:text-[0.85vw] text-slate-500 transition-colors hover:text-[#0B132B] font-medium font-sans">kanok-on@kountonme.com</a>
              </li>
              <li className="flex items-center gap-[2vw] md:gap-[0.8vw] whitespace-nowrap min-h-[4vw] md:min-h-[1.2vw]">
                <svg className="w-[3.5vw] md:w-[0.9vw] h-[3.5vw] md:h-[0.9vw] text-slate-400 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 10.304c0-5.369-5.383-9.738-12-9.738-6.616 0-12 4.369-12 9.738 0 4.814 4.269 8.846 10.036 9.608.391.084.922.258 1.057.592.122.303.079.778.039 1.085l-.171 1.027c-.053.303-.242 1.186 1.039.647 1.281-.54 6.911-4.069 9.428-6.967 1.739-1.907 2.572-3.843 2.572-5.992z" />
                </svg>
                <a href="https://line.me/R/ti/p/@290rtmez" target="_blank" rel="noopener noreferrer" className="text-[3.2vw] md:text-[1vw] lg:text-[0.85vw] text-slate-500 transition-colors hover:text-[#00C300] font-medium font-sans">LINE Official</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright Bar */}
        <div className="w-full max-w-5xl mx-auto mt-[4vw] md:mt-[1vw] pt-[4vw] md:pt-[1vw] border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-[3vw] md:gap-0 text-[2.8vw] md:text-[0.9vw] lg:text-[0.75vw] text-slate-400 px-[2vw]">
          <p className="font-sans">© 2026 Kount on Me Biz Lab. All rights reserved.</p>
          <div className="flex gap-[5vw] md:gap-[1.5vw]">
            <a href="#" className="hover:text-slate-600 transition-colors font-sans">นโยบายความเป็นส่วนตัว</a>
            <a href="#" className="hover:text-slate-600 transition-colors font-sans">เงื่อนไขการใช้งาน</a>
          </div>
        </div>
      </Container>
    </footer>
  );
};