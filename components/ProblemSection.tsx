"use client";
import { Container } from "./Container";
import { motion } from "framer-motion";
import { Clock, BarChart3, Bell } from "lucide-react";

const icons = [
  <Clock key="clock" className="w-[6vw] md:w-[1.5vw] h-[6vw] md:h-[1.5vw]" />,
  <BarChart3 key="barchart" className="w-[6vw] md:w-[1.5vw] h-[6vw] md:h-[1.5vw]" />,
  <Bell key="bell" className="w-[6vw] md:w-[1.5vw] h-[6vw] md:h-[1.5vw]" />
];

export const ProblemSection = () => {
  const problems = [
    {
      title: "ทุกการตัดสินใจรอแค่คุณ",
      content: (
        <>
          องค์กรพึ่งพาคนเดียวมากเกินไป <br />
          ทำให้การเติบโตถูกจำกัดโดยไม่จำเป็น
        </>
      )
    },
    {
      title: "ตัวเลขกระจาย ภาพรวมไม่ชัด",
      content: (
        <>
          ข้อมูลไม่รวมศูนย์ ทำให้การวางแผน <br />
          และคาดการณ์ทำได้ยากกว่าที่ควร
        </>
      )
    },
    {
      title: "จมกับงานที่ไม่สร้างมูลค่า",
      content: (
        <>
          งาน Manual ซ้ำซากดึงความสนใจ <br />
          ออกจากกลยุทธ์และภาพใหญ่ขององค์กร
        </>
      )
    }
  ];

  return (
    /* เจมเติม id="problem" ไว้ที่นี่แล้วครับ */
    <section id="problem" className="pt-[20vw] md:pt-[8vw] pb-[20vw] md:pb-[8vw] bg-slate-50">
      <Container className="max-w-5xl mx-auto px-[6vw]">
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
          className="text-[7.5vw] md:text-[3.5vw] lg:text-[2.2vw] font-black text-slate-900 text-center mb-[12vw] md:mb-[4vw] tracking-tighter max-w-4xl mx-auto leading-tight font-sans"
        >
          ธุรกิจกำลังโต <br className="md:hidden" /> แต่ระบบยังรอคุณคนเดียว
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-[6vw] md:gap-[2vw] w-full">
          {problems.map((prob, idx) => (
            <motion.div 
              key={idx} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="h-full p-[8vw] md:p-[2.5vw] rounded-[6vw] md:rounded-[1.5vw] bg-white border border-slate-200 shadow-sm flex flex-col items-center text-center group hover:shadow-md transition-all"
            >
              <div className="w-[14vw] md:w-[3.5vw] h-[14vw] md:h-[3.5vw] rounded-full bg-rose-50 flex items-center justify-center text-rose-500 mb-[6vw] md:mb-[1.8vw] group-hover:scale-110 transition-transform">
                {icons[idx]}
              </div>
              
              <h3 className="font-black text-[5vw] md:text-[1.5vw] lg:text-[1.1vw] mb-[3vw] md:mb-[1vw] text-slate-900 tracking-tighter whitespace-nowrap font-sans">
                {prob.title}
              </h3>
              
              <div className="text-[3.5vw] md:text-[1.1vw] lg:text-[0.9vw] text-slate-500 leading-relaxed max-w-[95%] mx-auto opacity-90 font-medium font-sans">
                {prob.content}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-[15vw] md:mt-[5vw] max-w-3xl mx-auto"
        >
          <p className="text-[3.5vw] md:text-[1.3vw] lg:text-[1.05vw] font-black text-slate-500 leading-relaxed tracking-tighter opacity-90 font-sans italic">
            ถ้าคุณยังต้องทำทุกอย่างเอง <br className="md:hidden" />
            <span className="md:inline">แสดงว่า Workflow ยังไม่ถูกออกแบบ</span>
          </p>
        </motion.div>

      </Container>
    </section>
  );
};