"use client";
import { motion } from "framer-motion";
import { Clock, BarChart3, Bell } from "lucide-react";

const icons = [
  <Clock key="clock" className="w-[6vw] md:w-[1.5vw] h-[6vw] md:h-[1.5vw]" />,
  <BarChart3 key="barchart" className="w-[6vw] md:w-[1.5vw] h-[6vw] md:h-[1.5vw]" />,
  <Bell key="bell" className="w-[6vw] md:w-[1.5vw] h-[6vw] md:h-[1.5vw]" />
];

export const ProblemSection = ({ lang = "TH" }: { lang?: string }) => {

  const content = {
    TH: {
      mainTitle: (
        <>ธุรกิจกำลังโต <br className="md:hidden" /> แต่ระบบยังรอคุณคนเดียว</>
      ),
      problems: [
        {
          title: "ทุกการตัดสินใจ รอแค่คุณ",
          content: (
            <>
              เมื่อการตัดสินใจพึ่งพาคุณมากเกินไป <br />
              การเติบโตจึงถูกจำกัดโดยไม่จำเป็น
            </>
          )
        },
        {
          title: "ข้อมูลมี แต่ภาพไม่ปรากฏ",
          content: (
            <>
              ตัวเลขกระจายอยู่ทุกที่ <br />
              แต่ไม่มีสิ่งใดบอกคุณได้ว่า ต้องทำอะไรต่อไป
            </>
          )
        },
        {
          title: "เวลาถูกใช้ไป ไม่ใช่ถูกลงทุน",
          content: (
            <>
              งานซ้ำ ๆ ที่ระบบควรจัดการได้ <br />
              กำลังดึงคุณออกจากงานที่สร้างผลลัพธ์จริง
            </>
          )
        }
      ],
      footer: (
        <>
          คำตอบไม่ใช่การทำงานให้มากขึ้น <br className="md:hidden" />
          <span className="md:inline"> แต่คือการออกแบบ Workflow ให้ดีขึ้น</span>
        </>
      )
    },
    EN: {
      mainTitle: (
        <>Growth still waits <br className="md:hidden" />at every step.</>
      ),
      problems: [
        {
          title: <>You're the ceiling, <br className="md:hidden" /> not just the leader</>,
          content: (
            <>
              When everything runs through you, <br />
              you become the limit.
            </>
          )
        },
        {
          title: <>Data everywhere. <br className="md:hidden" /> Clarity nowhere.</>,
          content: (
            <>
              Scattered data slows you down and  <br />
              makes every decision feel like a guess.
            </>
          )
        },
        {
          title: <>Your time is going <br className="md:hidden" /> to the wrong work</>,
          content: (
            <>
              Every hour spent managing tasks <br />
              is an hour taken from building the future.
            </>
          )
        }
      ],
      footer: (
        <>
          The answer isn't working harder.<br className="md:hidden" /> It's designing a better workflow.
        </>
      )
    }
  };

  const t = lang === "EN" ? content.EN : content.TH;

  return (
    <section id="problem" className="pt-[20vw] md:pt-[8vw] pb-[20vw] md:pb-[8vw] bg-slate-50">
      <div className="max-w-[100vw] lg:max-w-[92vw] mx-auto px-[6vw] md:px-[4vw]">

        {/* หัวข้อหลัก: ไม่มีหัว (font-display) */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
          className={`text-[7.5vw] md:text-[3.5vw] lg:text-[2.2vw] font-black text-slate-900 text-center mb-[12vw] md:mb-[4vw] tracking-tighter max-w-4xl mx-auto leading-tight ${lang === 'TH' ? 'font-display' : 'font-sans'}`}
        >
          {t.mainTitle}
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-[6vw] md:gap-[1vw] w-full">
          {t.problems.map((prob, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="h-full p-[8vw] md:p-[2vw] rounded-[6vw] md:rounded-[1.5vw] bg-white border border-slate-200 shadow-sm flex flex-col items-center text-center group hover:shadow-md transition-all"
            >
              <div className="w-[14vw] md:w-[3.5vw] h-[14vw] md:h-[3.5vw] rounded-full bg-rose-50 flex items-center justify-center text-rose-500 mb-[6vw] md:mb-[1.8vw] group-hover:scale-110 transition-transform">
                {icons[idx]}
              </div>

              {/* หัวข้อการ์ด: ไม่มีหัว (font-display) */}
              <h3 className={`font-black text-[5vw] md:text-[1.5vw] lg:text-[1.1vw] mb-[3vw] md:mb-[1vw] text-slate-900 tracking-tighter leading-tight ${lang === 'TH' ? 'font-display' : 'font-sans'}`}>
                {prob.title}
              </h3>

              {/* เนื้อหาบรรยาย: มีหัว (font-sans) */}
              <div className="text-[3.5vw] md:text-[1.1vw] lg:text-[0.85vw] text-slate-500 leading-relaxed max-w-[95%] mx-auto opacity-90 font-medium font-sans">
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
          {/* ส่วน Footer (Punchline): เจมปรับให้ "ไม่มีหัว" (font-display) เพื่อความ Impact ครับ */}
          <p className={`text-[4vw] md:text-[1.3vw] lg:text-[1.1vw] font-bold text-rose-500 leading-relaxed tracking-tighter opacity-100 italic ${lang === 'TH' ? 'font-display' : 'font-sans'}`}>
            {t.footer}
          </p>
        </motion.div>

      </div>
    </section>
  );
};