'use client';

import { useEffect, useState } from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

export default function ScrollIndicator() {
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const maxScroll = window.innerHeight * 0.3;
      const scrollY = window.scrollY;
      const progress = Math.min(scrollY / maxScroll, 1);
      setOpacity(1 - progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className="
        absolute bottom-6 left-1/2 -translate-x-1/2
        flex flex-col items-center z-30
        pointer-events-none text-[48px]
        transition-opacity duration-300 ease-out
      "
      style={{ opacity }}
    >
      <span className="text-xl text-chi-purple font-proxima mb-1 pointer-events-none">
        GIANNI MENDONCA SEMEDO
      </span>
      <KeyboardArrowDownIcon
        fontSize="inherit"
        className="text-chi-purple animate-bounce pointer-events-none"
      />
    </div>
  );
}
