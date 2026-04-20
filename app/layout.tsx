import type { Metadata } from "next";
import { Playfair_Display, Inter, IBM_Plex_Sans_Thai } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({ variable: "--font-serif", subsets: ["latin"] });
const inter = Inter({ variable: "--font-sans", subsets: ["latin"] });
const ibmPlexThai = IBM_Plex_Sans_Thai({
  variable: "--font-thai",
  subsets: ["thai", "latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Kount on Me Biz Lab | Redesign Your Workflow",
  description: "Redesign Your Workflow, Redefine Your Future.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="th" className={`${playfair.variable} ${inter.variable} ${ibmPlexThai.variable} h-full antialiased scroll-smooth`}>
      {/* เติม suppressHydrationWarning ตรงนี้ เพื่อกัน Error จาก Browser Extension ครับ */}
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