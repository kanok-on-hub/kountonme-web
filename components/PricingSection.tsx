"use client";
import { Container } from "./Container";
import { Check } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

export const PricingSection = () => {
  return (
    <section id="pricing" className="py-16 md:py-20 bg-slate-50 px-6">
      <Container className="max-w-6xl mx-auto px-6 md:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight leading-tight">
            เลือกระดับการออกแบบ Workflow ที่เหมาะกับคุณ
          </h2>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 items-stretch max-w-6xl mx-auto">
          {/* Workforce Lab */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="h-full"
          >
            <div className="border border-slate-200 bg-white shadow-sm rounded-[24px] p-6 md:p-8 flex flex-col h-full transition-all duration-300 hover:shadow-md">
              <div className="flex-grow">
                <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-4 tracking-tight">Workforce Lab</h3>
                <p className="text-base text-slate-500 mb-8 leading-relaxed">
                  เหมาะสำหรับเริ่มจากจุดที่มีปัญหามากที่สุด<br />
                  ถ้าคุณรู้แล้วว่าอยากเริ่มแก้ตรงไหนก่อน
                </p>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 mt-1 shrink-0 text-slate-900" />
                    <span className="text-base text-slate-700">แก้ปัญหาเฉพาะจุด (Silo)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 mt-1 shrink-0 text-slate-900" />
                    <span className="text-base text-slate-700">ทีมงานดิจิทัล 1 ตำแหน่ง</span>
                  </li>
                </ul>
              </div>
              <Link href="/contact" className="w-full h-[48px] rounded-full border border-slate-200 bg-slate-50 text-slate-900 font-bold text-base flex items-center justify-center hover:bg-slate-100 transition-colors mt-auto shadow-sm">
                เริ่มต้นจาก Workflow ของคุณ
              </Link>
            </div>
          </motion.div>

          {/* Redesign Lab */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="h-full"
          >
            <div className="border-2 border-slate-900 bg-white shadow-xl rounded-[24px] p-6 md:p-8 flex flex-col h-full transition-all duration-300 relative lg:scale-105 z-10">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-[10px] font-bold px-4 py-1 rounded-full uppercase tracking-widest">Recommended</div>
              <div className="flex-grow">
                <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-4 tracking-tight">Redesign Lab</h3>
                <p className="text-base text-slate-500 mb-8 leading-relaxed">
                  เชื่อม Workflow ให้ทำงานเป็นระบบเดียว<br />
                  เหมาะสำหรับงานหลายแผนกที่ยังแยกกันอยู่
                </p>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 mt-1 shrink-0 text-slate-900" />
                    <span className="text-base text-slate-700">เชื่อมต่อระบบข้ามแผนก</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 mt-1 shrink-0 text-slate-900" />
                    <span className="text-base text-slate-700">ทีมงานดิจิทัลครบชุด</span>
                  </li>
                </ul>
              </div>
              <Link href="/contact" className="w-full h-[48px] rounded-full bg-slate-900 text-white font-bold text-base flex items-center justify-center hover:bg-slate-800 transition-colors shadow-lg shadow-slate-900/20 mt-auto">
                ออกแบบ Workflow สำหรับทีมของคุณ
              </Link>
            </div>
          </motion.div>

          {/* Transformation Lab */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-full"
          >
            <div className="border border-slate-200 bg-white shadow-sm rounded-[24px] p-6 md:p-8 flex flex-col h-full transition-all duration-300 hover:shadow-md">
              <div className="flex-grow">
                <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-4 tracking-tight">Transformation Lab</h3>
                <p className="text-base text-slate-500 mb-8 leading-relaxed">
                  วางระบบอัตโนมัติครบทั้งองค์กร<br />
                  เหมาะสำหรับการเปลี่ยนทั้งระบบ
                </p>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 mt-1 shrink-0 text-slate-900" />
                    <span className="text-base text-slate-700">วางโครงสร้าง Digital-First</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 mt-1 shrink-0 text-slate-900" />
                    <span className="text-base text-slate-700">ระบบอัตโนมัติ 100%</span>
                  </li>
                </ul>
              </div>
              <Link href="/contact" className="w-full h-[48px] rounded-full bg-slate-900 text-white font-bold text-base flex items-center justify-center hover:bg-slate-800 transition-colors shadow-lg shadow-slate-900/20 mt-auto">
                วาง Workflow สำหรับทั้งองค์กร
              </Link>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};
