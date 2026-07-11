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

export default function Home() {
  useReveal();

  return (
    <>
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
