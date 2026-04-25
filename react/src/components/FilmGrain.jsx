import { useEffect, useState } from 'react';

export default function FilmGrain() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  // Disable the expensive SVG filter on mobile entirely
  if (isMobile) return null;

  return (
    <svg
      className="film-grain-svg"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <filter id="filmGrainFilter">
        <feTurbulence
          type="fractalNoise"
          baseFrequency="0.72"
          numOctaves="3"
          stitchTiles="stitch"
        />
        <feColorMatrix type="saturate" values="0" />
      </filter>
      <rect width="100%" height="100%" filter="url(#filmGrainFilter)" />
    </svg>
  );
}
