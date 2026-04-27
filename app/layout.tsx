import type { Metadata } from "next";
import { Playfair_Display, Inter, IBM_Plex_Sans_Thai } from "next/font/google";
import "./globals.css";

// --- การตั้งค่าฟอนต์ (Font Configuration) ---
const playfair = Playfair_Display({ 
  variable: "--font-serif", 
  subsets: ["latin"] 
});

const inter = Inter({ 
  variable: "--font-sans", 
  subsets: ["latin"] 
});

const ibmPlexThai = IBM_Plex_Sans_Thai({
  variable: "--font-thai",
  subsets: ["thai", "latin"],
  weight: ["300", "400", "500", "600", "700"],
});

// --- การตั้งค่า SEO Metadata (หัวใจสำคัญของ SEO 2 ภาษา) ---
export const metadata: Metadata = {
  title: "Kount on Me Biz Lab | วางระบบ Automation และพนักงานดิจิทัลสำหรับ SME",
  description: "ปรับปรุงกระบวนการธุรกิจ (BPI) ด้วยระบบ AI Automation และพนักงานดิจิทัลบน LINE & Google Workspace ช่วย SME และสำนักงานบัญชีลดงาน Manual เพิ่มกำไร ด้วยเครื่องมือที่คุณมีอยู่แล้ว",
  keywords: [
    "Automation SME", 
    "Business Process Improvement", 
    "ที่ปรึกษาวางระบบบริษัท", 
    "พนักงานดิจิทัล", 
    "Apps Script Thailand", 
    "ระบบอนุมัติใน LINE", 
    "Kount on Me Biz Lab",
    "Digital Worker Thailand"
  ],
  authors: [{ name: "Kount on Me Biz Lab" }],
  creator: "Kount on Me Biz Lab",
  metadataBase: new URL("https://kountonme.com"),

  // 🌍 ส่วนที่เพิ่มใหม่: เชื่อมโยงหน้าภาษาไทยและอังกฤษ (Hreflang)
  alternates: {
    canonical: 'https://kountonme.com/th',
    languages: {
      'th-TH': 'https://kountonme.com/th',
      'en-US': 'https://kountonme.com/en',
    },
  },

  // OpenGraph สำหรับการโชว์การ์ดเมื่อแชร์ลง LINE / Facebook
  openGraph: {
    title: "Kount on Me Biz Lab | เปลี่ยนงาน Manual เป็นระบบอัตโนมัติ",
    description: "Redesign Your Workflow, Redefine Your Future. ยกระดับธุรกิจด้วยพนักงานดิจิทัลที่ทำงานแทนคุณได้ 24 ชม.",
    url: "https://kountonme.com",
    siteName: "Kount on Me Biz Lab",
    locale: "th_TH",
    type: "website",
    images: [
      {
        url: "/og-image.png", // อย่าลืมใส่รูปขนาด 1200x630 ไว้ในโฟลเดอร์ public นะครับ
        width: 1200,
        height: 630,
        alt: "Kount on Me Biz Lab Automation Service",
      },
    ],
  },

  // สำหรับการแสดงผลบน X (Twitter)
  twitter: {
    card: "summary_large_image",
    title: "Kount on Me Biz Lab | Automation Solutions",
    description: "เปลี่ยน Google Sheet & LINE ให้เป็นระบบหลังบ้านอัจฉริยะ",
    images: ["/og-image.png"],
  },
};

// --- ส่วนโครงสร้างหลักของเว็บไซต์ (Root Layout) ---
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html 
      lang="th" 
      data-scroll-behavior="smooth"
      className={`${playfair.variable} ${inter.variable} ${ibmPlexThai.variable} h-full antialiased`}
    >
      <body 
        suppressHydrationWarning 
        className="min-h-full font-thai text-slate-900 bg-[#FAFAFA] m-0 p-0 overflow-x-hidden flex flex-col"
      >
        <main className="w-full flex-grow">
          {children}
        </main>
      </body>
    </html>
  );
}