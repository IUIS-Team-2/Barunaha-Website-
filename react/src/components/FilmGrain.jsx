export default function FilmGrain() {
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
          numOctaves="4"
          stitchTiles="stitch"
        />
        <feColorMatrix type="saturate" values="0" />
      </filter>
      <rect width="100%" height="100%" filter="url(#filmGrainFilter)" />
    </svg>
  );
}
