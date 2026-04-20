"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "ปัญหาของคุณ", id: "problem" },
    { name: "บริการของเรา", id: "workforce" },
    { name: "วิธีการทำงาน", id: "how-it-works" },
    { name: "ตัวอย่างจริง", id: "use-cases" },
    { name: "คำถามที่พบบ่อย", id: "faq" },
  ];

  const handleScroll = (id: string) => {
    setIsOpen(false);
    setTimeout(() => {
      const target = document.getElementById(id);
      if (target) {
        const offset = 80;
        const targetPosition = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top: targetPosition, behavior: "smooth" });
      }
    }, 300);
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

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => handleScroll(link.id)}
              className="text-slate-300 hover:text-white text-sm font-medium transition-colors"
            >
              {link.name}
            </button>
          ))}
          <button
            onClick={() => handleScroll("contact-form")}
            className="bg-white text-[#0B132B] text-sm font-bold px-5 py-2 rounded-full hover:bg-[#6EE7B7] transition-all"
          >
            เริ่มออกแบบ Workflow
          </button>
        </div>

        {/* Burger Button */}
        <button
          className="md:hidden text-white p-1.5 hover:bg-white/5 rounded-full transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
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
            <div className="flex flex-col p-5 gap-0">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleScroll(link.id)}
                  className="text-left py-3.5 text-[4.2vw] font-black font-sans tracking-tight border-b border-white/5 last:border-none transition-all active:bg-white/5 px-2 text-slate-200"
                >
                  {link.name}
                </button>
              ))}
              <button
                onClick={() => handleScroll("contact-form")}
                className="text-left py-3.5 text-[4.2vw] font-black font-sans tracking-tight text-[#6EE7B7] mt-1 pt-4 px-2"
              >
                เริ่มออกแบบ Workflow
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};