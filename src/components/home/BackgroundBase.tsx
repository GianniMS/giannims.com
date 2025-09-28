'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

type Props = {
  src: string;
  alt: string;
  zIndex?: string;
};

const backgroundSettings = {
  base: {
    scale: 1.9,
    position: '50% 70%',
  },
  sm: {
    scale: 2,
    position: '50% 55%',
  },
  md: {
    scale: 1.9,
    position: '50% 55%',
  },
  lg: {
    scale: 1.4,
    position: '50% 55%',
  },
  xl: {
    scale: 1,
    position: '50% 53%',
  },
};

export default function BackgroundBase({ src, alt, zIndex = 'z-0' }: Props) {
  const [scale, setScale] = useState(backgroundSettings.base.scale);
  const [position, setPosition] = useState(backgroundSettings.base.position);

  useEffect(() => {
    const applySettings = () => {
      const width = window.innerWidth;

      if (width >= 1280) {
        setScale(backgroundSettings.xl.scale);
        setPosition(backgroundSettings.xl.position);
      } else if (width >= 1024) {
        setScale(backgroundSettings.lg.scale);
        setPosition(backgroundSettings.lg.position);
      } else if (width >= 768) {
        setScale(backgroundSettings.md.scale);
        setPosition(backgroundSettings.md.position);
      } else if (width >= 640) {
        setScale(backgroundSettings.sm.scale);
        setPosition(backgroundSettings.sm.position);
      } else {
        setScale(backgroundSettings.base.scale);
        setPosition(backgroundSettings.base.position);
      }
    };

    applySettings();
    window.addEventListener('resize', applySettings);
    return () => window.removeEventListener('resize', applySettings);
  }, []);

  return (
    <div className={`relative w-full h-screen overflow-hidden ${zIndex}`}>
      <Image
        src={src}
        alt={alt}
        fill
        priority
        style={{
          transform: `scale(${scale})`,
          objectPosition: position,
        }}
        className="object-cover transition-transform duration-500"
      />
    </div>
  );
}
