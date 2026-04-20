"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export const WorkforceSection = () => {
  const workforce = [
    {
      name: "Cashie",
      role: "ผู้ช่วยฝ่ายการเงิน",
      image: "/images/cashie.png",
      items: [
        "อนุมัติและกรอกแบบฟอร์มผ่าน LINE",
        "บันทึกและตัดยอดอัตโนมัติ",
        "แจ้งเตือนรายการค้างชำระทุกวัน"
      ],
      badge: "⚡ ควบคุมงบประมาณ"
    },
    {
      name: "Holly",
      role: "ผู้ช่วยฝ่ายบุคคล",
      image: "/images/holly.png",
      items: [
        "เช็กโควตาและสิทธิ์วันลาผ่าน LINE",
        "คัดกรองเงื่อนไขเบื้องต้นอัตโนมัติ",
        "ตอบคำถามวันหยุดได้ทันที"
      ],
      badge: "⚡ ลดภาระงานซ้ำซ้อน"
    },
    {
      name: "Billy",
      role: "ผู้ช่วยฝ่ายบัญชี",
      image: "/images/billy.png",
      items: [
        "นำเข้าข้อมูลลงเทมเพลตบัญชีอัตโนมัติ",
        "จัดประเภทรายจ่ายอัตโนมัติ",
        "สรุปยอดแบบ Real-time"
      ],
      badge: "⚡ ข้อมูลพร้อมใช้ทันที"
    },
    {
      name: "Susie",
      role: "ผู้ช่วยฝ่ายแอดมิน",
      image: "/images/susie.png",
      items: [
        "ดึงข้อมูลจาก LINE ไปยัง Google Drive",
        "บันทึกรูปและไฟล์อัตโนมัติ",
        "เก็บประวัติการรับ-ส่งไฟล์ครบทุกรายการ"
      ],
      badge: "⚡ ไม่มีข้อมูลสูญหาย"
    }
  ];

  return (
    <section 
      id="workforce" 
      className="w-full bg-white pb-[24vw] md:pb-[6vw] pt-0 m-0 border-none overflow-hidden relative"
    >
      <div className="max-w-[100vw] lg:max-w-6xl mx-auto px-[6vw] md:px-[4vw] pt-[12vw] md:pt-[4vw]">
        
        <div className="text-center mb-[12vw] md:mb-[3vw]">
          <h2 className="text-[7.5vw] md:text-[3vw] lg:text-[2.2vw] font-black text-slate-900 mb-[6vw] md:mb-[1.5vw] tracking-tighter font-sans uppercase">
            ทีมงานที่เข้ามาช่วย<br className="md:hidden" /> 
            จัดการงานหลังบ้าน
          </h2>
          <div className="text-[3.8vw] md:text-[1.3vw] lg:text-[1.1vw] text-slate-500 leading-relaxed max-w-2xl mx-auto text-center font-medium font-sans">
            เราออกแบบ <strong className="font-black text-slate-900">"ทีมงานดิจิทัล"</strong> ให้ช่วยงานในแต่ละส่วน <br className="hidden md:block" />
            เพื่อให้ธุรกิจเดินต่อได้ โดยไม่ต้องรอคุณทุกขั้นตอน
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[6vw] md:gap-[1.5vw]">
          {workforce.map((member, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white rounded-[6vw] md:rounded-[1.5vw] shadow-sm border border-gray-100 p-[6vw] md:p-[1.5vw] flex flex-col items-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="relative w-[32vw] md:w-[8vw] aspect-[4/5] mb-[5vw] md:mb-[1.2vw] overflow-hidden rounded-[4vw] md:rounded-[1vw] bg-slate-50">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              </div>
              
              <h3 className="font-black text-[6vw] md:text-[1.5vw] lg:text-[1.2vw] text-slate-900 mb-[1vw] md:mb-[0.2vw] font-sans tracking-tight">{member.name}</h3>
              <p className="text-[3.5vw] md:text-[1vw] lg:text-[0.8vw] font-bold text-[#6EE7B7] mb-[5vw] md:mb-[1.2vw] font-sans uppercase tracking-widest">{member.role}</p>
              
              <ul className="w-full flex flex-col gap-[3vw] md:gap-[0.8vw] text-left mb-[6vw] md:mb-[1.5vw] text-[3.5vw] md:text-[1vw] lg:text-[0.8vw] text-slate-600 font-medium">
                {member.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-[2vw] md:gap-[0.5vw]">
                    <span className="text-[#6EE7B7] font-black shrink-0">✓</span>
                    <span className="leading-tight">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-auto w-full text-center">
                <span className="inline-block bg-slate-900 text-white text-[2.8vw] md:text-[0.7vw] lg:text-[0.6vw] font-black px-[4vw] md:px-[1vw] py-[1.5vw] md:py-[0.4vw] rounded-full border border-slate-800 uppercase tracking-widest font-sans">
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