import { useEffect, useState } from 'react';

export function useParallax(speed = 0.5) {
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      setOffsetY(y * speed);
    };

    const handleScrollOptimized = () => {
      requestAnimationFrame(handleScroll);
    };

    window.addEventListener('scroll', handleScrollOptimized);
    return () => window.removeEventListener('scroll', handleScrollOptimized);
  }, [speed]);

  return offsetY;
}
