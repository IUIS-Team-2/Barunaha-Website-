import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const SERVICES = [
  {
    id: 'film-production',
    number: '01',
    title: 'Film Production',
    tagline: 'Where vision meets the lens.',
    description:
      'From pre-production planning to the final cut, we handle full-scale feature film production with a team of seasoned professionals. Every frame is crafted with cinematic precision and storytelling depth.',
    tags: ['Pre-Production', 'Direction', 'Cinematography', 'Post-Production'],
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <rect x="4" y="10" width="32" height="22" rx="2" stroke="#E50914" strokeWidth="1.5" fill="none"/>
        <path d="M28 18l8-5v14l-8-5V18z" stroke="#E50914" strokeWidth="1.5" fill="rgba(229,9,20,0.1)" strokeLinejoin="round"/>
        <circle cx="14" cy="21" r="4" stroke="#E50914" strokeWidth="1.5" fill="none"/>
      </svg>
    ),
  },
  {
    id: 'regional-film-production',
    number: '02',
    title: 'Regional Film Production',
    tagline: 'Local stories. Global craft.',
    description:
      'Specialising in Bhojpuri and regional language cinema, we bring authentic cultural narratives to life through contemporary production values. We honour the roots while reaching wider audiences.',
    tags: ['Bhojpuri Cinema', 'Regional Languages', 'Cultural Storytelling', 'Distribution'],
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <circle cx="20" cy="20" r="14" stroke="#E50914" strokeWidth="1.5" fill="none"/>
        <path d="M20 6c0 0-8 6-8 14s8 14 8 14" stroke="#E50914" strokeWidth="1.5"/>
        <path d="M20 6c0 0 8 6 8 14s-8 14-8 14" stroke="#E50914" strokeWidth="1.5"/>
        <line x1="6" y1="20" x2="34" y2="20" stroke="#E50914" strokeWidth="1.5"/>
        <line x1="8" y1="13" x2="32" y2="13" stroke="#E50914" strokeWidth="1" opacity="0.5"/>
        <line x1="8" y1="27" x2="32" y2="27" stroke="#E50914" strokeWidth="1" opacity="0.5"/>
      </svg>
    ),
  },
  {
    id: 'documentary-films',
    number: '03',
    title: 'Documentary Films',
    tagline: 'Truth told cinematically.',
    description:
      'We craft documentary films that investigate real stories with the same cinematic rigour as feature films. Investigative, cultural, biographical — every truth deserves a powerful frame.',
    tags: ['Investigative', 'Cultural Docs', 'Biographical', 'Branded Docs'],
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <rect x="6" y="8" width="28" height="24" rx="2" stroke="#E50914" strokeWidth="1.5" fill="none"/>
        <line x1="12" y1="16" x2="28" y2="16" stroke="#E50914" strokeWidth="1.5"/>
        <line x1="12" y1="21" x2="28" y2="21" stroke="#E50914" strokeWidth="1.5"/>
        <line x1="12" y1="26" x2="22" y2="26" stroke="#E50914" strokeWidth="1.5"/>
        <circle cx="30" cy="10" r="4" fill="#E50914" opacity="0.8"/>
      </svg>
    ),
  },
  {
    id: 'video-solution',
    number: '04',
    title: 'Video Solution',
    tagline: 'End-to-end visual delivery.',
    description:
      'Complete video production solutions for brands, corporates, and institutions. From concept ideation to final delivery, we create purposeful video content that communicates and converts.',
    tags: ['Corporate Films', 'Brand Videos', 'Event Coverage', 'Training Videos'],
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <rect x="4" y="8" width="24" height="18" rx="2" stroke="#E50914" strokeWidth="1.5" fill="none"/>
        <path d="M28 14l8-4v16l-8-4V14z" stroke="#E50914" strokeWidth="1.5" fill="rgba(229,9,20,0.1)"/>
        <line x1="4" y1="30" x2="28" y2="30" stroke="#E50914" strokeWidth="1.5"/>
        <line x1="16" y1="30" x2="16" y2="36" stroke="#E50914" strokeWidth="1.5"/>
        <line x1="10" y1="36" x2="22" y2="36" stroke="#E50914" strokeWidth="1.5"/>
      </svg>
    ),
  },
  {
    id: 'video-editing',
    number: '05',
    title: 'Video Editing',
    tagline: 'Every cut tells a story.',
    description:
      'Professional post-production and video editing services. Colour grading, sound design, motion graphics integration, and visual effects — we refine raw footage into polished cinematic content.',
    tags: ['Colour Grading', 'Sound Design', 'Motion Graphics', 'VFX'],
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <rect x="4" y="6" width="32" height="20" rx="2" stroke="#E50914" strokeWidth="1.5" fill="none"/>
        <line x1="4" y1="30" x2="36" y2="30" stroke="#E50914" strokeWidth="1.5"/>
        <rect x="10" y="30" width="4" height="6" fill="#E50914" opacity="0.6"/>
        <rect x="18" y="30" width="4" height="4" fill="#E50914" opacity="0.4"/>
        <rect x="26" y="30" width="4" height="5" fill="#E50914" opacity="0.5"/>
        <path d="M14 14l6-4v8l-6-4z" fill="#E50914" opacity="0.8"/>
      </svg>
    ),
  },
  {
    id: 'short-films',
    number: '06',
    title: 'Short Films',
    tagline: 'Big stories in small frames.',
    description:
      'We produce compelling short films for festival circuits, digital platforms, and branded content. Tight narratives with maximum emotional impact — each short film is a complete world.',
    tags: ['Festival Films', 'Digital Shorts', 'Branded Shorts', 'Narrative Fiction'],
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <rect x="6" y="6" width="28" height="20" rx="2" stroke="#E50914" strokeWidth="1.5" fill="none"/>
        <rect x="6" y="6" width="28" height="6" rx="1" stroke="#E50914" strokeWidth="1.5" fill="rgba(229,9,20,0.1)"/>
        <line x1="12" y1="6" x2="15" y2="12" stroke="#E50914" strokeWidth="1.5"/>
        <line x1="20" y1="6" x2="23" y2="12" stroke="#E50914" strokeWidth="1.5"/>
        <line x1="28" y1="6" x2="31" y2="12" stroke="#E50914" strokeWidth="1.5"/>
        <line x1="10" y1="30" x2="10" y2="36" stroke="#E50914" strokeWidth="1.5"/>
        <line x1="30" y1="30" x2="30" y2="36" stroke="#E50914" strokeWidth="1.5"/>
        <line x1="6" y1="36" x2="34" y2="36" stroke="#E50914" strokeWidth="1.5"/>
      </svg>
    ),
  },
  {
    id: 'ad-films',
    number: '07',
    title: 'Ad Films',
    tagline: 'Ads that feel like cinema.',
    description:
      'We produce advertisement films that transcend the ordinary — cinematic quality, powerful messaging, and audience-centric storytelling that makes brands unforgettable in seconds.',
    tags: ['TVC', 'Digital Ads', 'Product Films', 'Campaign Content'],
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <path d="M6 12h28v16H6z" stroke="#E50914" strokeWidth="1.5" fill="none" rx="2"/>
        <path d="M6 12l14 10L34 12" stroke="#E50914" strokeWidth="1.5"/>
        <circle cx="32" cy="10" r="5" fill="#E50914" opacity="0.9"/>
        <line x1="32" y1="8" x2="32" y2="12" stroke="white" strokeWidth="1.5"/>
        <line x1="32" y1="10" x2="32" y2="10" stroke="white" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
  },
];

export default function ServicesPage({ defaultService }) {
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const gridRef = useRef(null);
  const [active, setActive] = useState(defaultService || null);

  useEffect(() => {
    window.scrollTo(0, 0);

    gsap.fromTo(titleRef.current,
      { y: 80, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2, ease: 'power4.out', delay: 0.2 }
    );

    gsap.fromTo(
      gridRef.current?.querySelectorAll('.svc-card'),
      { y: 50, opacity: 0 },
      {
        y: 0, opacity: 1, duration: 0.8, stagger: 0.08, ease: 'power3.out',
        scrollTrigger: { trigger: gridRef.current, start: 'top 80%' }
      }
    );

    return () => ScrollTrigger.getAll().forEach(t => t.kill());
  }, []);

  const activeService = SERVICES.find(s => s.id === active);

  return (
    <main className="bg-[#0B0B0B] text-[#F5F5F1] overflow-x-hidden min-h-screen">

      {/* ── HERO ── */}
      <section
        ref={heroRef}
        className="relative min-h-[60vh] flex flex-col justify-end px-6 md:px-16 pb-16 pt-40"
      >
        <div className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `
              linear-gradient(rgba(229,9,20,0.04) 1px, transparent 1px),
              linear-gradient(90deg, rgba(229,9,20,0.04) 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px'
          }}
        />
        <div className="absolute top-0 left-0 w-[500px] h-[400px] pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at top left, rgba(229,9,20,0.07) 0%, transparent 65%)' }}
        />

        <p className="eyebrow text-[#E50914] mb-6 tracking-[0.6em] text-xs">— What We Offer</p>

        <div ref={titleRef}>
          <h1 className="section-heading text-[#F5F5F1] leading-none">
            Our<br />
            <span style={{
              background: 'linear-gradient(135deg, #E50914 0%, #ff4d4d 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              Services
            </span>
          </h1>
        </div>

        <div className="mt-8 h-[1px] w-32 bg-[#E50914]" />
        <p className="mt-6 max-w-lg text-[#F5F5F1]/55 text-base md:text-lg leading-relaxed font-light">
          Complete cinematic production solutions — from concept to screen,
          every service delivered with passion and precision.
        </p>
      </section>

      {/* ── SERVICE GRID ── */}
      <section ref={gridRef} className="px-6 md:px-16 py-16 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10">
          {SERVICES.map((svc, idx) => (
            <button
              key={svc.id}
              onClick={() => setActive(active === svc.id ? null : svc.id)}
              className={`svc-card text-left bg-[#0B0B0B] p-8 md:p-10 relative overflow-hidden group
                transition-colors duration-300
                ${idx === SERVICES.length - 1 && SERVICES.length % 3 === 1 ? 'lg:col-span-3' : ''}
                ${idx === SERVICES.length - 1 && SERVICES.length % 2 === 1 ? 'md:col-span-2 lg:col-span-3' : ''}
                ${active === svc.id ? 'bg-[#120000]' : 'hover:bg-[#0f0f0f]'}`}
            >
              {/* Left red bar */}
              <div className={`absolute left-0 top-0 w-[3px] transition-all duration-500
                ${active === svc.id ? 'h-full bg-[#E50914]' : 'h-0 bg-[#E50914] group-hover:h-full'}`}
              />

              {/* Number */}
              <span className={`font-['Bebas_Neue'] text-5xl leading-none block mb-5 transition-colors duration-300
                ${active === svc.id ? 'text-[#E50914]/40' : 'text-[#E50914]/15 group-hover:text-[#E50914]/30'}`}>
                {svc.number}
              </span>

              {/* Icon */}
              <div className="mb-5 opacity-80 group-hover:opacity-100 transition-opacity duration-300">
                {svc.icon}
              </div>

              {/* Title */}
              <h3 className={`font-['Bebas_Neue'] text-2xl md:text-3xl tracking-wide mb-2 transition-colors duration-300
                ${active === svc.id ? 'text-[#E50914]' : 'text-[#F5F5F1]'}`}>
                {svc.title}
              </h3>

              {/* Tagline */}
              <p className="text-[#F5F5F1]/45 text-xs tracking-[0.15em] uppercase mb-4">
                {svc.tagline}
              </p>

              {/* Expand indicator */}
              <div className="flex items-center gap-2 mt-auto">
                <span className={`text-[0.68rem] tracking-[0.3em] uppercase transition-colors duration-300
                  ${active === svc.id ? 'text-[#E50914]' : 'text-[#F5F5F1]/30 group-hover:text-[#F5F5F1]/60'}`}>
                  {active === svc.id ? 'Close' : 'Learn More'}
                </span>
                <svg
                  className={`w-3 h-3 transition-transform duration-300 ${active === svc.id ? 'rotate-45 text-[#E50914]' : 'text-[#F5F5F1]/30'}`}
                  viewBox="0 0 12 12" fill="none"
                >
                  <path d="M2 6h8M6 2l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </button>
          ))}
        </div>

        {/* ── EXPANDED DETAIL PANEL ── */}
        <div
          className={`overflow-hidden transition-all duration-700 ease-out ${
            activeService ? 'max-h-[600px] opacity-100 mt-px' : 'max-h-0 opacity-0'
          }`}
        >
          {activeService && (
            <div className="bg-[#0e0000] border border-[#E50914]/20 p-10 md:p-14 relative">
              {/* Corner accents */}
              <div className="absolute top-0 left-0 w-12 h-[2px] bg-[#E50914]" />
              <div className="absolute top-0 left-0 w-[2px] h-12 bg-[#E50914]" />
              <div className="absolute bottom-0 right-0 w-12 h-[2px] bg-[#E50914]" />
              <div className="absolute bottom-0 right-0 w-[2px] h-12 bg-[#E50914]" />

              <div className="grid md:grid-cols-2 gap-10 items-start">
                <div>
                  <p className="eyebrow text-[#E50914] text-xs tracking-[0.5em] mb-4">
                    — {activeService.number}
                  </p>
                  <h2 className="font-['Bebas_Neue'] text-[clamp(32px,5vw,60px)] leading-tight text-[#F5F5F1] mb-4">
                    {activeService.title}
                  </h2>
                  <p className="text-[#F5F5F1]/60 leading-relaxed text-[0.95rem] mb-8">
                    {activeService.description}
                  </p>
                  <a href="#contact" className="projector-btn inline-block">
                    <span>Enquire Now</span>
                  </a>
                </div>

                <div>
                  <p className="eyebrow text-[#F5F5F1]/30 text-xs tracking-[0.4em] mb-6">— What's Included</p>
                  <div className="grid grid-cols-2 gap-3">
                    {activeService.tags.map((tag) => (
                      <div
                        key={tag}
                        className="border border-white/10 px-4 py-3 text-[0.78rem] tracking-[0.08em] text-[#F5F5F1]/70 hover:border-[#E50914]/40 hover:text-white transition-colors duration-200"
                      >
                        {tag}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ── CTA STRIP ── */}
      <section className="px-6 md:px-16 py-24 max-w-7xl mx-auto">
        <div className="border border-white/10 p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-16 h-[2px] bg-[#E50914]" />
          <div className="absolute top-0 left-0 w-[2px] h-16 bg-[#E50914]" />
          <div className="absolute bottom-0 right-0 w-16 h-[2px] bg-[#E50914]" />
          <div className="absolute bottom-0 right-0 w-[2px] h-16 bg-[#E50914]" />

          <div>
            <p className="eyebrow text-[#E50914] text-xs tracking-[0.5em] mb-3">— Let's Create Together</p>
            <h2 className="font-['Bebas_Neue'] text-[clamp(28px,4vw,52px)] leading-tight text-[#F5F5F1]">
              Have a Story in Mind?<br />
              <span style={{
                background: 'linear-gradient(135deg, #E50914, #ff4d4d)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>
                Let's Bring It to Life.
              </span>
            </h2>
          </div>
          <a href="#contact" className="projector-btn flex-shrink-0">
            <span>Start a Project</span>
          </a>
        </div>
      </section>
    </main>
  );
}