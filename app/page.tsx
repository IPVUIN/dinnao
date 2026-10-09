"use client";

import { useReveal } from "@/lib/useReveal";
import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Channels from "@/components/Channels";
import Intro from "@/components/Intro";
import VideoSection from "@/components/VideoSection";
import Crops from "@/components/Crops";
import ProductLineup from "@/components/ProductLineup";

import Footer from "@/components/Footer";

import { SITE_URL } from "@/lib/data";

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "ดินเน่า",
  alternateName: ["Dinnao"],
  url: `${SITE_URL}/`,
};

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "ดินเน่า",
  url: `${SITE_URL}/`,
  logo: `${SITE_URL}/logo.png`,
};
export default function Home() {
  useReveal();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([websiteSchema, orgSchema]),
        }}
      />
      <TopBar />
      <Header />

      <main>
        <Hero />
        <Channels />
        <Intro />
        <Crops />
        <VideoSection />
        <ProductLineup />
      </main>

      <Footer />
    </>
  );
}
