"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // ตรวจสอบว่า id เหล่านี้ตรงกับที่เขียนไว้ในแต่ละ Section หรือไม่
  const navLinks = [
    { name: "ปัญหาที่พบ", id: "problem" },
    { name: "ทีมงานดิจิทัล", id: "workforce" },
    { name: "วิธีการทำงาน", id: "how-it-works" },
    { name: "ตัวอย่างทีมงาน", id: "use-cases" },
    { name: "คำถามที่พบบ่อย", id: "faq" },
    { name: "คุยกับทีม BIZ LAB", id: "contact-form" },
  ];

  const handleScroll = (id: string) => {
    setIsOpen(false);
    
    // ใช้รหัสที่เสถียรกว่าในการค้นหา Element
    setTimeout(() => {
      const target = document.getElementById(id);
      if (target) {
        // ปรับ offset ตามความหนาจริงของ Navbar
        const offset = 80; 
        const targetPosition = target.getBoundingClientRect().top + window.scrollY - offset;

        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        });
      } else {
        console.warn(`ไม่พบ Section ที่มี id: ${id}`);
      }
    }, 300); // หน่วงเวลาให้เมนูพับปิดเสร็จก่อนเลื่อน
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#0B132B]/95 backdrop-blur-sm z-50 border-b border-white/5">
      <div className="max-w-6xl mx-auto px-6 py-3 flex justify-between items-center">
        
        {/* Brand Logo */}
        <div 
          className="flex flex-col justify-center cursor-pointer group"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <span className="font-sans text-white text-lg font-black tracking-tight transition-colors group-hover:text-[#6EE7B7]">
            Kount on Me
          </span>
          <span className="text-[#6EE7B7] text-[9px] font-bold tracking-[0.25em] mt-0.5 uppercase">
            BIZ LAB
          </span>
        </div>

        {/* Burger Button */}
        <button 
          className="md:hidden text-white p-1.5 hover:bg-white/5 rounded-full transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden bg-[#0B132B] border-t border-white/5 overflow-hidden shadow-2xl"
          >
            <div className="flex flex-col p-5 gap-0">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleScroll(link.id)}
                  className={`text-left py-3.5 text-[4.2vw] font-black font-sans tracking-tight border-b border-white/5 last:border-none transition-all active:bg-white/5 px-2 ${
                    link.id === "contact-form" 
                    ? "text-[#6EE7B7] mt-1 pt-4" 
                    : "text-slate-200"
                  }`}
                >
                  {link.name}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};