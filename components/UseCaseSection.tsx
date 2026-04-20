"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export const UseCaseSection = () => {
  const useCases = [
    {
      title: "พนักงานติดตามการขนส่ง",
      subtitle: "เปลี่ยนการติดตามข้อมูลใน LINE ให้เป็นระบบอัตโนมัติ",
      image: "/images/usecase-logistics.png",
      problems: [
        "ติดตามงานด้วยมือ ข้อมูลตกหล่น",
        "ข้อมูลล่าช้า กระจายหลายแหล่ง",
        "ข้อมูลผิดพลาด กระทบการตัดสินใจ"
      ],
      results: [
        "ลดงานเอกสารซ้ำซ้อน",
        "ข้อมูล Real-time พร้อมตัดสินใจ",
        "ตรวจสอบย้อนหลังได้ทุกขั้นตอน"
      ]
    },
    {
      title: "พนักงานเก็บข้อมูลการรับเงิน",
      subtitle: "เปลี่ยนการบันทึกข้อมูลใน LINE ให้เป็นระบบอัตโนมัติ",
      image: "/images/usecase-slip.png",
      problems: [
        "ชื่อสลิปไม่ตรงใบกำกับภาษี",
        "คีย์ข้อมูลเองทำให้เกิด Human Error",
        "เสียทรัพยากรกับงานที่ไม่สร้างมูลค่า"
      ],
      results: [
        "ตรวจสอบอัตโนมัติ ปลอด Human Error",
        "ปิดยอดรับชำระได้ทันที",
        "ทีมมุ่งเน้นงานที่สร้างมูลค่าได้เต็มที่"
      ]
    },
    {
      title: "พนักงานคีย์ข้อมูลบัญชี",
      subtitle: "เปลี่ยนงานบันทึกบัญชีซ้ำ ๆ ให้เป็นระบบอัตโนมัติ",
      image: "/images/usecase-document.png",
      problems: [
        "บันทึกเอกสารชุดเดิมซ้ำทุกเดือน",
        "เสียเวลาแปลงไฟล์เข้าโปรแกรมบัญชี",
        "ข้อมูลไม่เป็นระบบ สืบค้นยาก"
      ],
      results: [
        "ลดขั้นตอนซ้ำซ้อน ปิดบัญชีเร็วขึ้น",
        "ข้อมูลดิจิทัล ค้นหาและตรวจสอบได้ทันที",
        "ทีมบัญชีมีเวลาวิเคราะห์และตรวจทาน"
      ]
    }
  ];

  return (
    <section id="use-cases" className="bg-white py-[16vw] md:py-[6vw]">
      <div className="w-full max-w-[100vw] mx-auto px-[6vw] lg:max-w-5xl">
        
        {/* Header */}
        <div className="text-center mb-[12vw] md:mb-[4vw]">
          <h2 className="text-[7vw] md:text-[3vw] lg:text-[2.2vw] font-bold text-slate-900 mb-[6vw] md:mb-[1.5vw] tracking-tight">
            ตัวอย่างจริง<br className="md:hidden" />จากธุรกิจที่ใช้ทีมงานดิจิทัล
          </h2>
          <p className="text-[3.8vw] md:text-[1.3vw] lg:text-[1.1vw] text-slate-500 leading-relaxed max-w-2xl mx-auto text-center">
            เราไม่ได้ขายซอฟต์แวร์ให้คุณไปเรียนรู้เอง <br className="hidden md:block" />
            แต่เราให้คุณ <strong>“จ้างทีมงานดิจิทัล”</strong> ที่เข้ามาทำงานแทนในแต่ละส่วน
          </p>
        </div>

        {/* Use Cases List */}
        <div className="flex flex-col gap-[8vw] md:gap-[2.5vw]">
          {useCases.map((useCase, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="flex flex-col md:flex-row bg-white rounded-[6vw] md:rounded-[1.5vw] border border-slate-200 shadow-sm overflow-hidden"
            >
              {/* Left Side: Image */}
              <div className="w-full md:w-[25vw] lg:w-[18vw] shrink-0">
                <div className="relative w-full h-[60vw] md:h-full min-h-[240px]">
                  <Image
                    src={useCase.image}
                    alt={useCase.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Right Side: Content */}
              <div className="p-[6vw] md:p-[2.5vw] flex flex-col justify-center flex-1 w-full">
                <div className="mb-[4vw] md:mb-[1vw]">
                  <h3 className="font-bold text-[5vw] md:text-[1.8vw] lg:text-[1.4vw] text-slate-900 mb-[1.5vw] md:mb-[0.2vw]">{useCase.title}</h3>
                  <p className="text-[3.2vw] md:text-[1.1vw] lg:text-[0.9vw] text-gray-500">{useCase.subtitle}</p>
                </div>

                {/* Side-by-Side Problems & Results */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-[6vw] md:gap-[2vw] mt-[4vw] md:mt-[1vw]">
                  
                  {/* Problems Column */}
                  <div className="flex flex-col">
                    <h4 className="font-semibold text-[3.5vw] md:text-[1.1vw] lg:text-[0.9vw] mb-[3vw] md:mb-[0.8vw] text-red-600">
                      ปัญหา
                    </h4>
                    <div className="flex flex-col gap-[2vw] md:gap-[0.5vw]">
                      {useCase.problems.map((prob, i) => (
                        <div key={i} className="flex items-start gap-[2vw] md:gap-[0.5vw] text-[3.5vw] md:text-[1.1vw] lg:text-[0.9vw] text-slate-600">
                          <span className="text-red-500 shrink-0 font-bold">✕</span>
                          <p className="tracking-tighter">{prob}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Results Column */}
                  <div className="flex flex-col">
                    <h4 className="font-semibold text-[3.5vw] md:text-[1.1vw] lg:text-[0.9vw] mb-[3vw] md:mb-[0.8vw] text-green-600">
                      ผลลัพธ์
                    </h4>
                    <div className="flex flex-col gap-[2vw] md:gap-[0.5vw]">
                      {useCase.results.map((res, i) => (
                        <div key={i} className="flex items-start gap-[2vw] md:gap-[0.5vw] text-[3.5vw] md:text-[1.1vw] lg:text-[0.9vw] text-slate-600">
                          <span className="text-green-500 shrink-0 font-bold">✓</span>
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