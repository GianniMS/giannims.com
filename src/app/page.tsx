import BackgroundBase from "@/components/home/BackgroundBase";
import BackgroundLayer from "@/components/home/BackgroundLayer";
import TextBanner from "@/components/home/TextBanner";

export default function HomePage() {
  return (
    <main className="relative w-full h-screen overflow-hidden">
      <TextBanner text="TURNING YOUR VISIONS INTO REALITY" />
      <BackgroundLayer />
      <BackgroundBase />
    </main>
  );
}
