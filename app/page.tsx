"use client";

import { useReveal } from "@/lib/useReveal";
import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Channels from "@/components/Channels";
import Intro from "@/components/Intro";
import ProductLineup from "@/components/ProductLineup";
import Features from "@/components/Features";
import Crops from "@/components/Crops";
import Why from "@/components/Why";
import CTA from "@/components/CTA";
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
        <ProductLineup />
        <Features />
        <Crops />
        <Why />
        <CTA />
      </main>

      <Footer />
    </>
  );
}
