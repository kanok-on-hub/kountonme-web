"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export const UseCaseSection = ({ lang = "TH" }: { lang?: string }) => {
  const content = {
    TH: {
      headline: <>ตัวอย่างจริงจากธุรกิจ<br className="md:hidden" />ที่ใช้ทีมงานดิจิทัล</>,
      description: (
        <>
          เราไม่ไช่ซอฟต์แวร์ให้คุณไปเรียนรู้เอง<br />
          แต่คือทีมงานดิจิทัลที่ทำงานในแต่ละส่วนแทนคุณ
        </>
      ),
      cases: [
        {
          title: "Logistics tracking",
          subtitle: "จาก LINE ข้อความ สู่ข้อมูลที่พร้อมใช้",
          image: "/images/usecase-logistics.png",
          problems: ["ตามงานด้วยมือ ข้อมูลตกหล่น", "ข้อมูลล่าช้า กระจายหลายแหล่ง", "ข้อมูลผิดพลาด กระทบการตัดสินใจ"],
          results: ["ลดงานคีย์ข้อมูลและงานตามงาน", "ข้อมูล Real-time พร้อมตัดสินใจ", "ตรวจสอบย้อนหลังได้ทุกขั้นตอน"],
          labels: { prob: "ปัญหา", res: "ผลลัพธ์" }
        },
        {
          title: "Slip collection",
          subtitle: "ปิดยอดได้ทันที โดยไม่ต้องคีย์ข้อมูลเอง",
          image: "/images/usecase-slip.png",
          problems: ["ชื่อสลิปไม่ตรงใบกำกับภาษี", "คีย์ข้อมูลเองทำให้เกิด Human error", "เสียเวลากับงานที่ไม่สร้างมูลค่า"],
          results: ["เช็กอัตโนมัติ ปลอด Human error", "ปิดยอดได้ทันทีที่สลิปเข้าระบบ", "ทีมเน้นงานที่สร้างมูลค่าได้เต็มที่"],
          labels: { prob: "ปัญหา", res: "ผลลัพธ์" }
        },
        {
          title: "Accounting entry",
          subtitle: "จากเอกสารสู่ระบบบัญชีโดยไม่ต้องแตะ",
          image: "/images/usecase-document.png",
          problems: ["บันทึกเอกสารชุดเดิมซ้ำทุกเดือน", "เสียเวลาแปลงไฟล์เข้าโปรแกรมบัญชี", "ข้อมูลไม่เป็นระบบ สืบค้นยาก"],
          results: ["ลดขั้นตอนซ้ำซ้อน ปิดบัญชีเร็วขึ้น", "ข้อมูลดิจิทัล ค้นหาได้ทันที", "ทีมบัญชีเน้นวิเคราะห์ ไม่ใช่แค่กรอก"],
          labels: { prob: "ปัญหา", res: "ผลลัพธ์" }
        }
      ]
    },
    EN: {
      headline: <>Real examples.<br className="md:hidden" /> Real results.</>,
      description: (
        <>
          We build a digital workforce that steps in<br className="hidden md:block" />
          <br className="md:hidden" /> 
          and handles each part of the work.
        </>
      ),
      cases: [
        {
          title: "Logistics tracking",
          subtitle: <>Real-time visibility without <br className="md:hidden" /> the manual follow-up.</>,
          image: "/images/usecase-logistics.png",
          problems: ["Manual tracking leads to data loss", "Data scattered across channels", "Inaccurate data hurts decisions"],
          results: ["No manual entry or follow-ups", "Real-time visibility on shipments", "Complete audit trail at every step"],
          labels: { prob: "Problems", res: "Results" }
        },
        {
          title: "Slip collection",
          subtitle: <>Confirmed and reconciled <br className="md:hidden" /> the moment slips arrive.</>,
          image: "/images/usecase-slip.png",
          problems: ["Slips don't match tax records", "Manual entry creates human errors", "Staff wasted on low-value tasks"],
          results: ["Auto-collection, zero errors", "Payments closed on receipt", "Team focused on business growth"],
          labels: { prob: "Problems", res: "Results" }
        },
        {
          title: "Accounting entry",
          subtitle: "From documents to system, zero manual input.", 
          image: "/images/usecase-document.png",
          problems: ["Data re-entered every month", "Manual file conversion is slow", "Unstructured data, hard to audit"],
          results: ["Faster month-end close", "Digital records, searchable instantly", "Accountants analyse, not just enter"],
          labels: { prob: "Problems", res: "Results" }
        }
      ]
    }
  };

  const t = lang === "EN" ? content.EN : content.TH;

  return (
    <section id="use-cases" className="bg-white py-[16vw] md:py-[6vw] overflow-hidden">
      <div className="w-full max-w-[100vw] lg:max-w-[92vw] mx-auto px-[6vw] md:px-[4vw]">
        
        <div className="text-center mb-[12vw] md:mb-[6vw]">
          <h2 className={`text-[7.5vw] md:text-[3.5vw] lg:text-[2.2vw] font-black text-slate-900 mb-[6vw] md:mb-[1.5vw] tracking-tighter ${lang === 'TH' ? 'font-display' : 'font-sans'}`}>
            {t.headline}
          </h2>
          <div className="text-[4vw] md:text-[1.5vw] lg:text-[1.2vw] text-slate-500 leading-relaxed max-w-3xl mx-auto text-center font-medium font-sans">
            {t.description}
          </div>
        </div>

        <div className="flex flex-col gap-[8vw] md:gap-[3vw]">
          {t.cases.map((useCase, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="flex flex-col md:flex-row bg-white rounded-[6vw] md:rounded-[1.5vw] border border-gray-100 shadow-sm overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              <div className="w-full md:w-[30vw] lg:w-[22vw] shrink-0">
                <div className="relative w-full h-[60vw] md:h-full min-h-[260px] bg-slate-50">
                  <Image
                    src={useCase.image}
                    alt={useCase.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="p-[8vw] md:p-[3.5vw] flex flex-col justify-center flex-1 w-full overflow-hidden">
                <div className="mb-[6vw] md:mb-[1.5vw]">
                  <h3 className="font-black text-[6vw] md:text-[1.5vw] lg:text-[1.2vw] text-slate-900 mb-[1.5vw] md:mb-[0.2vw] font-sans tracking-tighter leading-tight whitespace-nowrap overflow-hidden text-ellipsis">
                    {useCase.title}
                  </h3>
                  <p className={`text-[3.8vw] md:text-[1.1vw] lg:text-[0.9vw] font-bold text-[#6EE7B7] tracking-widest ${lang === 'TH' ? 'font-display' : 'font-sans'}`}>
                    {useCase.subtitle}
                  </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-[8vw] md:gap-[3vw] mt-[2vw]">
                  <div className="flex flex-col">
                    <h4 className={`font-black text-[3.5vw] md:text-[1vw] lg:text-[0.8vw] mb-[3vw] md:mb-[1vw] text-red-500 tracking-widest ${lang === 'TH' ? 'font-display' : 'font-sans'}`}>
                      {useCase.labels.prob}
                    </h4>
                    <div className="flex flex-col gap-[3vw] md:gap-[0.6vw]">
                      {useCase.problems.map((prob, i) => (
                        <div key={i} className="flex items-start gap-[2vw] md:gap-[0.5vw] text-[3.8vw] md:text-[1.1vw] lg:text-[1vw] text-slate-600 font-medium font-sans leading-snug lg:whitespace-nowrap">
                          <span className="text-red-500 shrink-0 font-black">✕</span>
                          <p className="tracking-tighter opacity-85">{prob}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col border-t lg:border-t-0 lg:border-l border-gray-100 pt-[6vw] lg:pt-0 lg:pl-[3vw]">
                    <h4 className={`font-black text-[3.5vw] md:text-[1vw] lg:text-[0.8vw] mb-[3vw] md:mb-[1vw] text-green-600 tracking-widest ${lang === 'TH' ? 'font-display' : 'font-sans'}`}>
                      {useCase.labels.res}
                    </h4>
                    <div className="flex flex-col gap-[3vw] md:gap-[0.6vw]">
                      {useCase.results.map((res, i) => (
                        <div key={i} className="flex items-start gap-[2vw] md:gap-[0.5vw] text-[3.8vw] md:text-[1.1vw] lg:text-[1vw] text-slate-900 font-black font-sans leading-snug lg:whitespace-nowrap">
                          <span className="text-green-600 shrink-0 font-black">✓</span>
                          <p className="tracking-tighter">{res}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};