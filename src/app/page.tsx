import BackgroundBase from "@/components/home/BackgroundBase";
import BackgroundLayer from "@/components/home/BackgroundLayer";
import ScrollIndicator from "@/components/home/ScrollIndicator";
import TextBanner from "@/components/home/TextBanner";
import Biography from "@/components/home/Biography";

export default function HomePage() {
  return (
    <main className="relative w-full min-h-screen overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative w-full h-screen overflow-hidden">
        <TextBanner text="TURNING YOUR VISIONS INTO REALITY" />
        <ScrollIndicator />
        <BackgroundLayer />
        <BackgroundBase />
      </section>

      {/* Biography Section */}
      <Biography />
    </main>
  );
}
