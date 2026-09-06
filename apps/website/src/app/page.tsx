import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { TrustedBy } from "@/components/TrustedBy";
import { IconExplorer } from "@/components/IconExplorer";
import { Frameworks } from "@/components/Frameworks";
import { Pricing } from "@/components/Pricing";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-brand-bg text-brand-dark selection:bg-brand-yellow selection:text-black">
      {/* Top Header */}
      <Header />

      <main className="flex-1">
        {/* Hero Section matching screenshot layout & aesthetics */}
        <Hero />

        {/* Trusted By Banner */}
        <TrustedBy />

        {/* Interactive Icon Explorer Grid */}
        <IconExplorer />

        {/* Multi-framework Code Switcher */}
        <Frameworks />

        {/* Pricing / Open Source License */}
        <Pricing />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
