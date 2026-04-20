"use client";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CTASection } from "@/components/CTASection";
import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="bg-white">
        {/* 1. Hero Section */}
        <section className="max-w-5xl mx-auto pt-24 md:pt-32 pb-20 px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight text-slate-900">
              ขับเคลื่อนธุรกิจด้วย Workflow<br/>ไม่ใช่ความเหนื่อยล้า
            </h1>
            <p className="text-lg md:text-xl text-slate-600 mt-8 max-w-3xl mx-auto leading-relaxed">
              หลายธุรกิจยังต้องพึ่ง “คน” ในทุกขั้นตอน ต้องคอยตาม คอยตรวจสอบ และคอยตัดสินใจ... จนสุดท้าย ธุรกิจก็เดินต่อได้ แค่ตอนที่คุณยังว่างอยู่
            </p>
          </motion.div>
        </section>

        {/* 2. The Reveal Section */}
        <section className="py-24 md:py-32 bg-white">
          <Container className="max-w-7xl mx-auto px-6 md:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-lg md:text-xl font-medium text-slate-800 mb-10 leading-relaxed max-w-3xl mx-auto">
                เราเชื่อว่างานที่ดีต้อง “เดินต่อได้เอง” โดยไม่ต้องรอ... เราจึงไม่ได้แค่สร้างซอฟต์แวร์ แต่เราออกแบบ...
              </p>
              
              <Image 
                src="/team-office-v3.png" 
                alt="Digital Team Office" 
                width={800} 
                height={600} 
                priority
                className="w-full max-w-2xl mx-auto h-auto rounded-[32px] shadow-xl object-cover my-10" 
              />
              
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mt-10 leading-tight tracking-tight">
                “ทีมงานดิจิทัล” ที่ทำงานแทนคุณ ในแต่ละขั้นตอนของ Workflow
              </h2>
            </motion.div>
          </Container>
        </section>

        {/* 3. Zig-Zag Section 1 */}
        <section className="py-24 md:py-32 bg-slate-50">
          <div className="max-w-7xl mx-auto px-6 md:px-8 flex flex-col md:flex-row items-center gap-8 md:gap-16 justify-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="w-full md:w-1/2"
            >
              <span className="text-sm font-bold text-emerald-500 uppercase tracking-widest mb-3 block">
                ไม่ใช่แค่หุ่นยนต์ แต่คือเพื่อนร่วมทีม
              </span>
              <p className="text-2xl font-bold text-slate-800 leading-relaxed tracking-tight">
                ทีมนี้ไม่ได้แค่ทำงานแทน แต่เข้ามา “ทำงานร่วมกับคุณ” ช่วยกันคิด ช่วยกันจัดการ และรันระบบอย่างต่อเนื่อง
              </p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="w-full md:w-1/2 flex justify-center"
            >
              <Image 
                src="/team-break-v3.png" 
                alt="Team working together" 
                width={600} 
                height={450} 
                className="w-full max-w-md mx-auto h-auto rounded-[32px] shadow-lg object-cover" 
              />
            </motion.div>
          </div>
        </section>

        {/* 4. Zig-Zag Section 2 */}
        <section className="py-24 md:py-32 bg-white">
          <div className="max-w-7xl mx-auto px-6 md:px-8 flex flex-col md:flex-row-reverse items-center gap-8 md:gap-16 justify-center">
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="w-full md:w-1/2"
            >
              <span className="text-sm font-bold text-emerald-500 uppercase tracking-widest mb-3 block">
                เดินหน้าต่อ แม้คุณจะพักผ่อน
              </span>
              <p className="text-2xl font-bold text-slate-800 leading-relaxed tracking-tight">
                พวกเขาอาจไม่ใช่คนจริง แต่เป็นทีมที่คุณทำงานด้วยจริง ทีมที่ไม่ลืม ไม่เหนื่อย และไม่เคยทำงานสะดุด
              </p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="w-full md:w-1/2 flex justify-center"
            >
              <Image 
                src="/team-beach-v3.png" 
                alt="Team continuity" 
                width={600} 
                height={450} 
                className="w-full max-w-md mx-auto h-auto rounded-[32px] shadow-lg object-cover" 
              />
            </motion.div>
          </div>
        </section>

        {/* 5. Conclusion Section */}
        <section className="py-24 md:py-32 text-center bg-slate-50">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-7xl mx-auto px-6 md:px-8"
          >
            <Image 
              src="/team-camping-v3.png" 
              alt="Team conclusion" 
              width={800} 
              height={600} 
              className="w-full max-w-2xl mx-auto h-auto rounded-[32px] shadow-xl object-cover my-10" 
            />
            <p className="text-base md:text-lg text-slate-600 mb-6 leading-relaxed max-w-3xl mx-auto mt-12">
              นี่ไม่ใช่แค่การทำงานให้เร็วขึ้น แต่มันคือการออกแบบวิธีการทำงานใหม่ ที่ธุรกิจสามารถเติบโตได้ โดยไม่ต้องพึ่งคุณในทุกขั้นตอน
            </p>
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-12 leading-tight tracking-tight">
              เพื่อให้ธุรกิจของคุณเติบโตได้ โดยไม่ต้องพึ่งคุณในทุกขั้นตอน
            </h3>
            <span className="text-xl font-bold text-slate-400 uppercase tracking-widest block mt-10">
              Kount on Me Biz Lab
            </span>
          </motion.div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </>
  );
}

const Container = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => (
  <div className={`max-w-7xl mx-auto px-6 md:px-8 ${className}`}>
    {children}
  </div>
);
