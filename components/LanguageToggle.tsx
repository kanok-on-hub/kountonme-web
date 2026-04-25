"use client";
import React from "react";
import Link from "next/link";

export const LanguageToggle = ({ lang = "TH" }: { lang?: string }) => {
  const handleScrollSave = () => {
    if (typeof window !== "undefined") {
      sessionStorage.setItem("savedScrollY", window.scrollY.toString());
      const targetLang = lang === "TH" ? "en" : "th";
      localStorage.setItem("user-language", targetLang);
    }
  };

  return (
    <div 
      style={{ zIndex: 100000, pointerEvents: 'auto', isolation: 'isolate' }}
      className="fixed bottom-8 right-8 flex items-center bg-[#1A202E]/90 backdrop-blur-xl border border-white/10 rounded-full px-1.5 py-1.5 shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
    >
      {lang === "TH" ? (
        <div className="flex items-center justify-center bg-[#6EE7B7] rounded-full px-4 py-1.5 shadow-[0_0_15px_rgba(110,231,183,0.3)]">
          <span className="font-display font-black text-xs text-[#0B132B] uppercase">TH</span>
        </div>
      ) : (
        <Link
          href="/th"
          onClick={handleScrollSave}
          className="font-display font-black text-xs text-white px-4 py-1.5 transition-colors hover:text-[#6EE7B7] uppercase cursor-pointer relative z-10"
        >
          TH
        </Link>
      )}

      {lang === "EN" ? (
        <div className="flex items-center justify-center bg-[#6EE7B7] rounded-full px-4 py-1.5 shadow-[0_0_15px_rgba(110,231,183,0.3)]">
          <span className="font-display font-black text-xs text-[#0B132B] uppercase">EN</span>
        </div>
      ) : (
        <Link
          href="/en"
          onClick={handleScrollSave}
          className="font-display font-black text-xs text-white px-4 py-1.5 transition-colors hover:text-[#6EE7B7] uppercase cursor-pointer relative z-10"
        >
          EN
        </Link>
      )}
    </div>
  );
};