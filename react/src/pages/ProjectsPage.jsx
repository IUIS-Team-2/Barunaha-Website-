import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const CATEGORIES = [
  {
    id: 'upcoming',
    label: 'Upcoming Projects',
    eyebrow: '— In Development',
    tagline: 'The next chapter is being written.',
    description:
      'Our upcoming slate is in active development — stories being scripted, locations being scouted, and frames being imagined. Stay tuned for announcements.',
  },
  {
    id: 'released',
    label: 'Released Projects',
    eyebrow: '— In the Archives',
    tagline: 'Every story we told lives here.',
    description:
      'Our released catalogue is being curated and will be presented here in its full cinematic glory. Check back soon for the complete film archive.',
  },
];

export default function ProjectsPage() {
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const cardsRef = useRef(null);
  const [activeTab, setActiveTab] = useState('upcoming');

  useEffect(() => {
    window.scrollTo(0, 0);

    const tl = gsap.timeline({ delay: 0.2 });
    tl.fromTo(titleRef.current,
      { y: 80, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2, ease: 'power4.out' }
    );

    gsap.fromTo(
      cardsRef.current?.querySelectorAll('.proj-card'),
      { y: 60, opacity: 0 },
      {
        y: 0, opacity: 1, duration: 0.9, stagger: 0.18, ease: 'power3.out',
        scrollTrigger: { trigger: cardsRef.current, start: 'top 80%' }
      }
    );

    return () => ScrollTrigger.getAll().forEach(t => t.kill());
  }, []);

  const active = CATEGORIES.find(c => c.id === activeTab);

  return (
    <main className="bg-[#0B0B0B] text-[#F5F5F1] overflow-x-hidden min-h-screen">

      {/* ── HERO ── */}
      <section
        ref={heroRef}
        className="relative min-h-[65vh] flex flex-col justify-end px-6 md:px-16 pb-16 pt-40"
      >
        {/* Grid bg */}
        <div className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `
              linear-gradient(rgba(229,9,20,0.04) 1px, transparent 1px),
              linear-gradient(90deg, rgba(229,9,20,0.04) 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px'
          }}
        />
        {/* Light leak */}
        <div className="absolute top-0 right-0 w-[500px] h-[400px] pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at top right, rgba(229,9,20,0.07) 0%, transparent 65%)' }}
        />

        <p className="eyebrow text-[#E50914] mb-6 tracking-[0.6em] text-xs">— Our Work</p>

        <div ref={titleRef}>
          <h1 className="section-heading text-[#F5F5F1] leading-none">
            Stories We<br />
            <span style={{
              background: 'linear-gradient(135deg, #E50914 0%, #ff4d4d 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              Bring to Life
            </span>
          </h1>
        </div>

        <div className="mt-8 h-[1px] w-32 bg-[#E50914] origin-left" />

        <p className="mt-6 max-w-lg text-[#F5F5F1]/55 text-base md:text-lg leading-relaxed font-light">
          Feature films, regional cinema, short films, ad films, and digital content
          — crafted with intention, delivered with passion.
        </p>
      </section>

      {/* ── TAB SWITCHER ── */}
      <section className="px-6 md:px-16 pt-10 pb-0 max-w-7xl mx-auto">
        <div className="flex gap-0 border-b border-white/10 w-fit">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`relative px-8 py-4 text-[0.78rem] font-semibold tracking-[0.2em] uppercase transition-colors duration-300 ${
                activeTab === cat.id
                  ? 'text-white'
                  : 'text-[#F5F5F1]/40 hover:text-[#F5F5F1]/70'
              }`}
            >
              {cat.label}
              {/* Active underline */}
              <span
                className={`absolute bottom-0 left-0 h-[2px] bg-[#E50914] transition-all duration-400 ${
                  activeTab === cat.id ? 'w-full' : 'w-0'
                }`}
              />
            </button>
          ))}
        </div>
      </section>

      {/* ── COMING SOON PANEL ── */}
      <section ref={cardsRef} className="px-6 md:px-16 py-20 max-w-7xl mx-auto">

        <div className="proj-card relative border border-white/10 overflow-hidden min-h-[520px] flex flex-col items-center justify-center text-center p-12 md:p-20">

          {/* Animated background lines */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="absolute h-[1px] w-full opacity-10"
                style={{
                  top: `${15 + i * 14}%`,
                  background: 'linear-gradient(90deg, transparent, #E50914, transparent)',
                  animation: `scanline ${3 + i * 0.5}s ease-in-out infinite alternate`,
                  animationDelay: `${i * 0.4}s`
                }}
              />
            ))}
          </div>

          {/* Corner accents */}
          <div className="absolute top-0 left-0 w-12 h-[2px] bg-[#E50914]" />
          <div className="absolute top-0 left-0 w-[2px] h-12 bg-[#E50914]" />
          <div className="absolute bottom-0 right-0 w-12 h-[2px] bg-[#E50914]" />
          <div className="absolute bottom-0 right-0 w-[2px] h-12 bg-[#E50914]" />

          {/* Top right film strip dots */}
          <div className="absolute top-6 right-6 flex gap-2 opacity-20">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="w-2 h-2 rounded-full border border-[#E50914]" />
            ))}
          </div>

          {/* Eyebrow */}
          <p className="eyebrow text-[#E50914] text-xs tracking-[0.5em] mb-6 relative z-10">
            {active.eyebrow}
          </p>

          {/* COMING SOON BIG TEXT */}
          <div className="relative z-10 mb-8">
            <p
              className="font-['Bebas_Neue'] select-none pointer-events-none"
              style={{
                fontSize: 'clamp(72px, 14vw, 180px)',
                lineHeight: 1,
                background: 'linear-gradient(180deg, rgba(229,9,20,0.15) 0%, rgba(229,9,20,0.04) 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                whiteSpace: 'nowrap',
                zIndex: 0,
              }}
            >
              COMING SOON
            </p>

            {/* Clapperboard icon */}
            <div className="relative z-10 flex flex-col items-center">
              <svg width="72" height="72" viewBox="0 0 72 72" fill="none" className="mb-6 opacity-80">
                <rect x="8" y="28" width="56" height="36" rx="2" stroke="#E50914" strokeWidth="1.5" fill="none"/>
                <rect x="8" y="18" width="56" height="12" rx="1" stroke="#E50914" strokeWidth="1.5" fill="rgba(229,9,20,0.1)"/>
                {/* clapper lines */}
                <line x1="20" y1="18" x2="26" y2="30" stroke="#E50914" strokeWidth="1.5"/>
                <line x1="32" y1="18" x2="38" y2="30" stroke="#E50914" strokeWidth="1.5"/>
                <line x1="44" y1="18" x2="50" y2="30" stroke="#E50914" strokeWidth="1.5"/>
                {/* Film holes */}
                <circle cx="20" cy="46" r="3" stroke="#E50914" strokeWidth="1" fill="none" opacity="0.5"/>
                <circle cx="36" cy="46" r="3" stroke="#E50914" strokeWidth="1" fill="none" opacity="0.5"/>
                <circle cx="52" cy="46" r="3" stroke="#E50914" strokeWidth="1" fill="none" opacity="0.5"/>
              </svg>

              <h2 className="font-['Bebas_Neue'] text-[clamp(32px,5vw,56px)] text-[#F5F5F1] mb-3 tracking-wide">
                {active.tagline}
              </h2>
              <div className="w-12 h-[1px] bg-[#E50914] mb-6" />
              <p className="text-[#F5F5F1]/50 max-w-md text-sm leading-relaxed">
                {active.description}
              </p>
            </div>
          </div>

          {/* Notify CTA */}
          <div className="relative z-10 flex flex-col sm:flex-row items-center gap-4 mt-4">
            <a href="#contact" className="projector-btn">
              <span>Get Notified</span>
            </a>
            <span className="text-[#F5F5F1]/30 text-xs tracking-[0.2em] uppercase">
              or follow our journey
            </span>
          </div>

          {/* Bottom frame counter */}
          <div className="absolute bottom-6 left-8 flex items-center gap-3 opacity-20">
            <span className="font-['Bebas_Neue'] text-xs tracking-[0.3em] text-[#E50914]">BARUNAHA</span>
            <span className="text-[#F5F5F1]/40 text-xs">✦</span>
            <span className="font-mono text-xs text-[#F5F5F1]/40">0001 / ????</span>
          </div>
        </div>

        {/* Second teaser cards row */}
        <div className="grid md:grid-cols-3 gap-px mt-px bg-white/10">
          {['Feature Film', 'Regional Cinema', 'Short Film'].map((type, i) => (
            <div
              key={type}
              className="proj-card bg-[#0B0B0B] p-8 flex flex-col gap-4 group hover:bg-[#0f0f0f] transition-colors duration-300 relative overflow-hidden"
            >
              <div className="absolute left-0 top-0 w-[2px] h-0 bg-[#E50914] group-hover:h-full transition-all duration-500" />
              <span className="font-['Bebas_Neue'] text-5xl text-[#E50914]/10 group-hover:text-[#E50914]/20 transition-colors duration-300">
                0{i + 1}
              </span>
              <h3 className="font-['Bebas_Neue'] text-xl text-[#F5F5F1]/70 tracking-wide group-hover:text-[#F5F5F1] transition-colors duration-300">
                {type}
              </h3>
              <div className="flex items-center gap-2 mt-auto">
                <div className="w-2 h-2 rounded-full bg-[#E50914] animate-pulse" />
                <span className="text-[0.7rem] tracking-[0.3em] text-[#E50914]/70 uppercase">In Development</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Scanline keyframes */}
      <style>{`
        @keyframes scanline {
          0%   { transform: translateX(-100%); opacity: 0.05; }
          50%  { opacity: 0.15; }
          100% { transform: translateX(100%); opacity: 0.05; }
        }
      `}</style>
    </main>
  );
}