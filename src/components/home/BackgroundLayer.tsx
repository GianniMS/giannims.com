'use client';

import Image from 'next/image';

type Props = {
  src: string;
  alt: string;
  zIndex?: string;
};

export default function BackgroundLayer({ src, alt, zIndex = 'z-[-1]' }: Props) {
  return (
    <div className={`absolute inset-0 w-full h-screen pointer-events-none ${zIndex}`}>
      <Image
        src={src}
        alt={alt}
        fill
        priority
        className="object-cover"
      />
    </div>
  );
}
