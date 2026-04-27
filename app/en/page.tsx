// app/en/page.tsx
import { Metadata } from "next";
import EnglishContent from "./EnglishContent"; 

export const metadata: Metadata = {
  title: "Kount on Me Biz Lab | AI Automation & Digital Workforce for SMEs",
  description: "Redesign your workflow with AI Automation and Digital Workers. Specialized in BPI, Apps Script, and Google Workspace solutions.",
  openGraph: {
    title: "Kount on Me Biz Lab | Business Automation Solutions",
    description: "Redefine your future with our Digital Workforce.",
    url: "https://kountonme.com/en",
    siteName: "Kount on Me Biz Lab",
    locale: "en_US",
    type: "website",
  },
};

export default function Page() {
  return <EnglishContent />;
}