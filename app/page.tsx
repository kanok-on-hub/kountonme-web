"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function RootPage() {
  const router = useRouter();

  useEffect(() => {
    // 1. เช็กก่อนว่าเขาเคยเลือกภาษาไว้เองหรือเปล่า (จดไว้ใน localStorage)
    const savedLang = localStorage.getItem("user-language");
    
    if (savedLang) {
      // ถ้าเคยเลือกไว้แล้ว ให้ไปตามนั้นเลย ไม่ต้องเดา
      router.replace(savedLang);
      return;
    }

    // 2. ถ้าไม่เคยเลือก (เข้าครั้งแรก) ค่อยเดาจาก Browser
    const userLang = (navigator.language || (navigator as any).userLanguage).toLowerCase();
    const targetPath = userLang.startsWith("th") ? "/th" : "/en";
    
    router.replace(targetPath);
  }, [router]);

  return <div className="bg-[#0B132B] min-h-screen" />;
}