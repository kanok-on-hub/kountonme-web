"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export const WorkforceSection = ({ lang = "TH" }: { lang?: string }) => {

  const content = {
    TH: {
      title: <>ทีมงานหลังบ้าน<br className="md:hidden" />ที่ทำงานแทนคุณ</>,
      description: (
        <>
          เราออกแบบทีมงานดิจิทัล เพื่อดูแลงานเฉพาะด้าน <br />
          ให้ธุรกิจเดินต่อไปได้ โดยไม่ต้องรอคุณทุกขั้นตอน
        </>
      ),
      workforce: [
        {
          name: "Cashie",
          role: "ผู้ช่วยฝ่ายการเงิน",
          image: "/images/cashie.png",
          items: [
            "อนุมัติและบันทึกรายการผ่าน LINE ได้ทันที",
            "ตัดยอดและอัปเดตสถานะอัตโนมัติทุกรายการ",
            "แจ้งเตือนรายการค้างชำระก่อนที่จะกลายเป็นปัญหา"
          ],
          badge: "⚡ ควบคุมงบประมาณ"
        },
        {
          name: "Holly",
          role: "ผู้ช่วยฝ่ายบุคคล",
          image: "/images/holly.png",
          items: [
            "ตรวจสอบโควตาและสิทธิ์วันลาผ่าน LINE",
            "คัดกรองคำขอเบื้องต้นก่อนถึงมือผู้อนุมัติ",
            "ตอบทุกคำถามเรื่องวันหยุดได้โดยไม่ต้องรอ"
          ],
          badge: "⚡ ลดภาระงานซ้ำซ้อน"
        },
        {
          name: "Billy",
          role: "ผู้ช่วยฝ่ายบัญชี",
          image: "/images/billy.png",
          items: [
            "นำเข้าข้อมูลลงระบบบัญชีโดยอัตโนมัติ",
            "จัดหมวดหมู่รายจ่ายโดยไม่ต้องป้อนข้อมูลเอง",
            "สรุปยอดปัจจุบันได้ทุกเมื่อที่ต้องการ"
          ],
          badge: "⚡ ข้อมูลพร้อมใช้ทันที"
        },
        {
          name: "Susie",
          role: "ผู้ช่วยฝ่ายแอดมิน",
          image: "/images/susie.png",
          items: [
            "ดึงข้อมูลจาก LINE ไปจัดเก็บใน Google Drive อัตโนมัติ",
            "บันทึกและจัดหมวดหมู่ไฟล์โดยไม่ต้องสั่งทุกครั้ง",
            "ติดตามประวัติการรับส่งไฟล์ได้ตลอดเวลา"
          ],
          badge: "⚡ ไม่มีข้อมูลสูญหาย"
        }
      ]
    },
    EN: {
      title: <>The team that runs <br className="md:hidden" /> while you lead.</>,
      description: (
        <>
          {/* ลบ md:hidden ออกเพื่อให้ตัดบรรทัดในคอมด้วยครับ */}
          Each one handles a specific part, <br />
          so you can focus on what only you can do.
        </>
      ),
      workforce: [
        {
          name: "Cashie",
          role: "Finance assistant",
          image: "/images/cashie.png",
          items: [
            "Approves and logs transactions instantly",
            "Reconciles and updates records automatically",
            "Flags overdue payments automatically"
          ],
          badge: "⚡ Budget in check"
        },
        {
          name: "Holly",
          role: "HR assistant",
          image: "/images/holly.png",
          items: [
            "Checks leave balances via line",
            "Pre-screens requests automatically",
            "Answers leave questions instantly"
          ],
          badge: "⚡ Less admin, more focus"
        },
        {
          name: "Billy",
          role: "Accounting assistant",
          image: "/images/billy.png",
          items: [
            "Imports data into accounting templates",
            "Categorises expenses automatically",
            "Delivers up-to-date summaries on demand"
          ],
          badge: "⚡ Always up to date"
        },
        {
          name: "Susie",
          role: "Admin assistant",
          image: "/images/susie.png",
          items: [
            "Syncs line data to Google Drive",
            "Archives files and photos automatically",
            "Logs every file transfer automatically"
          ],
          badge: "⚡ Nothing falls through"
        }
      ]
    }
  };

  const t = lang === "EN" ? content.EN : content.TH;

  return (
    <section
      id="workforce"
      className="w-full bg-white pb-[24vw] md:pb-[6vw] pt-0 m-0 border-none overflow-hidden relative"
    >
      <div className="max-w-[100vw] lg:max-w-[92vw] mx-auto px-[6vw] md:px-[4vw] pt-[12vw] md:pt-[4vw]">

        <div className="text-center mb-[12vw] md:mb-[3vw]">
          <h2 className={`text-[7.5vw] md:text-[3vw] lg:text-[2.2vw] font-black text-slate-900 mb-[6vw] md:mb-[1.5vw] tracking-tighter ${lang === 'TH' ? 'font-display' : 'font-sans'}`}>
            {t.title}
          </h2>
          <div className="text-[3.8vw] md:text-[1.3vw] lg:text-[1.1vw] text-slate-500 leading-relaxed max-w-2xl mx-auto text-center font-medium font-sans">
            {t.description}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[6vw] md:gap-[1vw]">
          {t.workforce.map((member, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white rounded-[6vw] md:rounded-[1.5vw] shadow-sm border border-gray-100 p-[6vw] md:p-[1.2vw] flex flex-col items-center text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="relative w-[32vw] md:w-[8vw] aspect-[4/5] mb-[5vw] md:mb-[1.2vw] overflow-hidden rounded-[4vw] md:rounded-[1vw] bg-slate-50">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              </div>

              <h3 className="font-black text-[6vw] md:text-[1.5vw] lg:text-[1.2vw] text-slate-900 mb-[1vw] md:mb-[0.2vw] font-sans tracking-tight">
                {member.name}
              </h3>
              <p className={`text-[3.5vw] md:text-[1vw] lg:text-[0.8vw] font-bold text-[#6EE7B7] mb-[5vw] md:mb-[1.2vw] tracking-widest ${lang === 'TH' ? 'font-display' : 'font-sans'}`}>
                {member.role}
              </p>

              <ul className="w-full flex flex-col gap-[3vw] md:gap-[0.8vw] text-left mb-[6vw] md:mb-[1.5vw] text-[3.5vw] md:text-[1vw] lg:text-[0.75vw] text-slate-600 font-medium font-sans">
                {member.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-[2vw] md:gap-[0.4vw]">
                    <span className="text-[#6EE7B7] font-black shrink-0">✓</span>
                    <span className="leading-tight">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-auto w-full text-center">
                <span className={`inline-block bg-slate-900 text-white text-[2.8vw] md:text-[0.7vw] lg:text-[0.6vw] font-black px-[4vw] md:px-[1vw] py-[1.5vw] md:py-[0.4vw] rounded-full border border-slate-800 tracking-widest ${lang === 'TH' ? 'font-display' : 'font-sans'}`}>
                  {member.badge}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};