import { client } from "@/sanity/lib/client";
import ThaiContent from "./ThaiContent";

async function getFullPageData() {
  const query = `{
    "hero": *[_type == "hero"][0],
    "problem": *[_type == "problemSection"][0],
    "philosophy": *[_type == "philosophySection"][0],
    "workforce": *[_type == "workforceSection"][0],
    "howItWorks": *[_type == "howItWorksSection"][0],
    "useCase": *[_type == "useCaseSection"][0],
    "cta": *[_type == "ctaSection"][0],
    "faq": *[_type == "faqSection"][0]
  }`;
  return await client.fetch(query, {}, { next: { revalidate: 0 } });
}

export default async function Page() {
  const data = await getFullPageData();
  return <ThaiContent data={data} />;
}