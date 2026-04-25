import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  { id: 1, title: 'THE FALL', type: 'Short Film' },
  { id: 2, title: 'MIDNIGHT SUN', type: 'Commercial' },
  { id: 3, title: 'ECHOES', type: 'Music Video' },
  { id: 4, title: 'NEON TEARS', type: 'Fashion Film' },
  { id: 5, title: 'CITY OF GLASS', type: 'Documentary' },
  { id: 6, title: 'RECKONING', type: 'Short Film' },
];

export default function HeroPage() {
  const sectionRef = useRef(null);
  const reelRef = useRef(null);
  const bgRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile once and on resize
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  useEffect(() => {
    // Skip GSAP scroll pinning on mobile — use native scroll instead
    if (isMobile) return;

    let ctx = gsap.context(() => {
      // 1. Subtle mouse parallax — reduced intensity for smoothness
      const moveBg = (e) => {
        const x = (e.clientX / window.innerWidth - 0.5) * 15;
        const y = (e.clientY / window.innerHeight - 0.5) * 15;
        gsap.to(bgRef.current, { x, y, duration: 1.8, ease: 'power2.out', force3D: true });
      };
      window.addEventListener('mousemove', moveBg);

      // 2. Horizontal Scroll — GPU optimized
      const reelWidth = reelRef.current.scrollWidth;
      const amountToScroll = reelWidth - window.innerWidth + (window.innerWidth * 0.1);

      gsap.to(reelRef.current, {
        x: -amountToScroll,
        ease: "none",
        force3D: true,
        scrollTrigger: {
          trigger: sectionRef.current,
          pin: true,
          scrub: 1.5,
          start: "top top",
          end: "+=4000",
          invalidateOnRefresh: true,
        }
      });

      return () => {
        window.removeEventListener('mousemove', moveBg);
      };
    }, sectionRef);

    return () => ctx.revert();
  }, [isMobile]);

  return (
    <section 
      ref={sectionRef} 
      className={`hero-reel-section relative w-full bg-[#0B0B0B] overflow-hidden flex items-center ${
        isMobile ? 'flex-col' : 'h-screen'
      }`}
      style={{ perspective: isMobile ? 'none' : '1200px' }}
    >
      {/* ---------------- BACKGROUND EFFECTS ---------------- */}
      <div ref={bgRef} className="absolute inset-[-10%] z-0 pointer-events-none will-change-transform" style={{ transform: 'translateZ(0)' }}>
        {/* Subtle Netflix red deep glow */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(229,9,20,0.06)_0%,#0B0B0B_70%)]" />
        
        {/* Cinematic Film Grain Overlay */}
        <div 
          className="absolute inset-0 opacity-[0.06] mix-blend-overlay" 
          style={{backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.85\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\'/%3E%3C/svg%3E")'}}
        />
        
        {/* Soft light leak from bottom right */}
        <div className="absolute bottom-0 right-0 w-[40vw] h-[40vw] bg-[#E50914] rounded-full blur-[150px] opacity-[0.03]" />
      </div>

      {/* ---------------- CENTERED TEXT OVERLAY ---------------- */}
      <div className={`hero-text-overlay z-20 w-full flex flex-col items-center text-center pointer-events-none drop-shadow-2xl ${
        isMobile ? 'relative pt-[120px] pb-8 px-5' : 'absolute top-[20%] left-1/2 -translate-x-1/2'
      }`}>
         <h1 
           className="font-['Bebas_Neue'] text-[#F5F5F1] tracking-wide" 
           style={{ fontSize: 'clamp(36px, 9vw, 130px)', textShadow: '0 10px 30px rgba(0,0,0,0.9)' }}
         >
           STORIES THAT MOVE FRAMES.
         </h1>
         <p className="text-[#F5F5F1]/70 font-['Space_Grotesk'] tracking-[0.3em] uppercase text-xs md:text-sm mt-1">
           Where every frame tells a story that lasts forever.
         </p>
         
         <div className="mt-10 pointer-events-auto">
            <button className="px-8 py-4 border border-[#F5F5F1]/20 bg-black/50 backdrop-blur-md text-[#F5F5F1] hover:bg-[#E50914] hover:border-[#E50914] transition-colors duration-300 font-['Space_Grotesk'] text-xs tracking-[0.2em] uppercase rounded-sm group flex items-center gap-3">
              Explore the Reel
              <span className="w-4 h-[1px] bg-white group-hover:w-6 transition-all duration-300" />
            </button>
         </div>
      </div>

      {/* ---------------- INFINITE FILM REEL ---------------- */}
      <div
        ref={reelRef}
        className={`hero-reel-container relative z-10 will-change-transform ${
          isMobile 
            ? 'flex flex-col gap-6 px-5 mt-8 pb-16 w-full' 
            : 'flex items-center h-[55vh] mt-24 px-[5vw] gap-8 md:gap-16'
        }`}
        style={isMobile ? {} : { transformStyle: 'preserve-3d', transform: 'translateZ(0) rotateX(5deg) rotateY(-4deg)' }} 
      >
        {/* Film strip perforation borders — desktop only */}
        {!isMobile && (
          <>
            <div className="hero-reel-perfs absolute top-[-20px] left-0 w-[500%] h-4 border-b-[6px] border-dashed border-[#F5F5F1]/10 pointer-events-none" />
            <div className="hero-reel-perfs absolute bottom-[-20px] left-0 w-[500%] h-4 border-t-[6px] border-dashed border-[#F5F5F1]/10 pointer-events-none" />
          </>
        )}

        {/* The Frame Cards — using CSS-only hover classes from index.css */}
        {projects.map((project, index) => (
          <div
            key={project.id}
            className={`reel-card cursor-pointer ${
              isMobile 
                ? 'w-full h-[55vw]' 
                : 'w-[60vw] md:w-[35vw] h-full'
            }`}
          >
            {/* Glow element (separate for perf — no box-shadow animation on card) */}
            <div className="reel-card-glow" />

            {/* Project Image — simple opacity crossfade, no grayscale filter */}
            <img
              src={`https://picsum.photos/seed/${index + 40}/1000/700`}
              alt={project.title}
              loading="lazy"
              className="reel-card-img"
            />

            {/* Bottom dark gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80 pointer-events-none" />
            
            {/* Hover red vignette — uses opacity transition only */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(229,9,20,0.3)_0%,transparent_60%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

            {/* Text Content — smooth reveal via CSS class */}
            <div className="reel-card-info">
              <h3 className="font-['Bebas_Neue'] text-3xl md:text-4xl text-[#F5F5F1] tracking-widest drop-shadow-md">
                {project.title}
              </h3>
              <div className="flex items-center gap-3 mt-1">
                 <div className="w-2 h-2 rounded-full bg-[#E50914]" />
                 <p className="font-['Space_Grotesk'] text-[10px] text-[#F5F5F1]/80 tracking-[0.25em] uppercase">
                   {project.type}
                 </p>
              </div>
            </div>

            {/* Play Button — smooth scale-in via CSS class, no backdrop-blur */}
            <div className="reel-card-play w-16 h-16 rounded-full border border-white/20 bg-black/50 flex items-center justify-center shadow-[0_0_20px_rgba(0,0,0,0.5)]">
               <div className="w-0 h-0 border-t-[6px] border-t-transparent border-l-[10px] border-l-white border-b-[6px] border-b-transparent ml-1" />
            </div>
          </div>
        ))}
      </div>

      {/* ---------------- SCROLL HINT INDICATOR ---------------- */}
      {!isMobile && (
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-3 opacity-60">
           <span className="text-[9px] font-['Space_Grotesk'] tracking-[0.5em] text-[#F5F5F1] uppercase">Scroll</span>
           <div className="w-[1px] h-12 bg-gradient-to-b from-[#F5F5F1] to-transparent" />
        </div>
      )}
    </section>
  );
}