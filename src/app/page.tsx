'use client';

import BackgroundBase from "@/components/home/BackgroundBase";
import BackgroundLayer from "@/components/home/BackgroundLayer";
import ScrollIndicator from "@/components/home/ScrollIndicator";
import TextBanner from "@/components/home/TextBanner";
import Biography from "@/components/home/Biography";

export default function HomePage() {
  return (
    <main className="relative w-full min-h-screen overflow-x-hidden scroll-smooth">
      <div className="fixed inset-0 z-0 pointer-events-none">
        <BackgroundBase />
        <TextBanner text="TURNING YOUR VISIONS INTO REALITY" />
        <BackgroundLayer />
      </div>

      <section className="relative z-10 h-screen">
        <ScrollIndicator />
      </section>

      <section className="relative z-10">
        <Biography />
      </section>
    </main>
  );
}
