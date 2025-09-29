'use client';

import Image from 'next/image';

export default function BackgroundLayer() {
  return (
    <div className="absolute inset-0 z-20 pointer-events-none">
      <Image
        src="/images/chi-layer.png"
        alt="Foreground Layer"
        fill
        className="object-cover"
        priority
        sizes="100vw"
      />
    </div>
  );
}
