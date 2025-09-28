'use client';

import Image from 'next/image';

interface LayeredBackgroundProps {
  title: string;
}

const sharedTransform = {
  scale: {
    default: 'scale-[3.4]',
    sm: 'sm:scale-[1]',
    md: 'md:scale-[1.1]',
  },
  position: '-translate-x-1/2 -translate-y-4/7',
};

const textPosition = {
  paddingLeft: 'pl-[40px]',
  paddingTop: 'pt-[100px]',
};

export default function LayeredBackground({ title }: LayeredBackgroundProps) {
  const imageClasses = `absolute top-1/2 left-1/2 object-contain ${sharedTransform.position} ${sharedTransform.scale.default} ${sharedTransform.scale.sm} ${sharedTransform.scale.md} transition-transform duration-300`;

  const textClasses = `text-[120px] font-proxima text-chi-purple text-left leading-none max-w-[800px] ${textPosition.paddingLeft} ${textPosition.paddingTop}`;

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      {/* Base Image */}
      <Image
        src="/images/chi-base.JPG"
        alt="Background Layer"
        width={1200}
        height={800}
        className={`${imageClasses} z-0`}
        priority
      />

      {/* Foreground Layer */}
      <Image
        src="/images/chi-layer.png"
        alt="Foreground Layer"
        width={1200}
        height={800}
        className={`${imageClasses} z-20`}
        priority
      />

      {/* Text Layer */}
      <div className="absolute inset-0 z-10 flex items-start justify-start">
        <h1 className={textClasses}>{title}</h1>
      </div>
    </div>
  );
}
