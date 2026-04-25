"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export const Navbar = ({ lang = "TH" }: { lang?: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = lang === "EN" ? [
    { name: "Problems", id: "problem" },
    { name: "Services", id: "workforce" },
    { name: "How We Work", id: "how-it-works" },
    { name: "Use Cases", id: "use-cases" },
    { name: "FAQ", id: "faq" },
  ] : [
    { name: "ปัญหาของคุณ", id: "problem" },
    { name: "บริการของเรา", id: "workforce" },
    { name: "วิธีการทำงาน", id: "how-it-works" },
    { name: "ตัวอย่างจริง", id: "use-cases" },
    { name: "คำถามที่พบบ่อย", id: "faq" },
  ];

  const ctaLabel = lang === "EN" ? "Let's talk" : "คุยกับทีม BIZ LAB";

  const handleScroll = (id: string) => {
    setIsOpen(false);
    setTimeout(() => {
      const target = document.getElementById(id);
      if (target) {
        const offset = 70; // ปรับ offset ให้พอดี
        const targetPosition = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top: targetPosition, behavior: "smooth" });
      }
    }, 300);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#0B132B]/95 backdrop-blur-sm z-50 border-b border-white/5">
      {/* 🟢 เปลี่ยนจาก max-w-6xl เป็น max-w-[95vw] เพื่อให้ขยายออกด้านข้างครับ */}
      <div className="w-full max-w-[95vw] mx-auto px-4 py-4 flex justify-between items-center">

        {/* Logo Section */}
        <div
          className="flex flex-col justify-center cursor-pointer group"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <span className="font-sans text-white text-xl md:text-2xl font-black tracking-tight transition-colors group-hover:text-[#6EE7B7]">
            Kount on Me
          </span>
          <span className="text-[#6EE7B7] text-[10px] md:text-[11px] font-bold tracking-[0.3em] mt-0.5">
            BIZ LAB
          </span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => handleScroll(link.id)}
              className="text-slate-300 hover:text-white text-[0.9vw] font-bold transition-colors tracking-wide"
            >
              {link.name}
            </button>
          ))}
          <button
            onClick={() => handleScroll("contact")}
            className="bg-white text-[#0B132B] text-[0.9vw] font-black px-7 py-3 rounded-full hover:bg-[#6EE7B7] hover:scale-105 transition-all shadow-lg active:scale-95"
          >
            {ctaLabel}
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white p-2 hover:bg-white/5 rounded-full transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden bg-[#0B132B] border-t border-white/5 overflow-hidden shadow-2xl"
          >
            <div className="flex flex-col p-6 gap-0">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleScroll(link.id)}
                  className="text-left py-5 text-[4.5vw] font-bold font-sans tracking-tight border-b border-white/5 last:border-none transition-all active:bg-white/5 px-2 text-slate-200"
                >
                  {link.name}
                </button>
              ))}
              <button
                onClick={() => handleScroll("contact")}
                className="text-left py-5 text-[5vw] font-black font-sans tracking-tight text-[#6EE7B7] mt-2 px-2"
              >
                {ctaLabel}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};