'use client';

import Image from 'next/image';

export default function BackgroundBase() {
  return (
    <div className="absolute inset-0 z-0">
      <Image
        src="/images/chi-base.JPG"
        alt="Background Base"
        fill
        className="object-cover"
        priority
        sizes="100vw"
      />
    </div>
  );
}
