import BackgroundBase from '@/components/home/BackgroundBase';
import BackgroundLayer from '@/components/home/BackgroundLayer';

export default function HomePage() {
  return (
    <main className="relative w-full h-screen overflow-hidden">
      <BackgroundBase
        src="/images/chi-base.JPG"
        alt="Chicago background"
      />
      <BackgroundLayer
        src="/images/chi-layer.png"
        alt="Chicago cutout overlay"
      />
    </main>
  );
}
