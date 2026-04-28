import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const STATS = [
  { value: '10+', label: 'Years of Storytelling' },
  { value: '50+', label: 'Productions Delivered' },
  { value: '5+', label: 'Regional Languages' },
  { value: '∞', label: 'Stories Yet to Tell' },
];

const PILLARS = [
  {
    number: '01',
    title: 'Feature & Regional Films',
    body: 'From Bhojpuri narratives to mainstream feature films, we craft stories rooted in culture and elevated through contemporary cinematic craft.',
  },
  {
    number: '02',
    title: 'Complete Production Solutions',
    body: 'Concept development, scripting, shooting, editing, and post-production — every frame handled with intention under one roof.',
  },
  {
    number: '03',
    title: '3D Animation & Immersive Content',
    body: 'Entering the frontier of animated films and immersive visual storytelling — bringing imagination to life, frame by frame.',
  },
  {
    number: '04',
    title: 'OTT & Digital Narratives',
    body: 'Branded storytelling, motion graphics, and experimental visual narratives designed for global distribution on next-generation platforms.',
  },
];

export default function AboutPage() {
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const lineRef = useRef(null);
  const subRef = useRef(null);
  const statsRef = useRef(null);
  const pillarsRef = useRef(null);
  const quoteRef = useRef(null);
  const closingRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);

    // Hero entrance
    const tl = gsap.timeline({ delay: 0.2 });
    tl.fromTo(titleRef.current,
      { y: 80, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2, ease: 'power4.out' }
    )
    .fromTo(lineRef.current,
      { scaleX: 0 },
      { scaleX: 1, duration: 0.8, ease: 'power3.out' },
      '-=0.6'
    )
    .fromTo(subRef.current,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: 'power3.out' },
      '-=0.4'
    );

    // Stats counter
    gsap.fromTo(
      statsRef.current?.querySelectorAll('.stat-item'),
      { y: 40, opacity: 0 },
      {
        y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: 'power3.out',
        scrollTrigger: { trigger: statsRef.current, start: 'top 80%' }
      }
    );

    // Pillars
    gsap.fromTo(
      pillarsRef.current?.querySelectorAll('.pillar-item'),
      { y: 50, opacity: 0 },
      {
        y: 0, opacity: 1, duration: 0.9, stagger: 0.12, ease: 'power3.out',
        scrollTrigger: { trigger: pillarsRef.current, start: 'top 75%' }
      }
    );

    // Quote
    gsap.fromTo(quoteRef.current,
      { y: 40, opacity: 0 },
      {
        y: 0, opacity: 1, duration: 1.1, ease: 'power3.out',
        scrollTrigger: { trigger: quoteRef.current, start: 'top 80%' }
      }
    );

    // Closing
    gsap.fromTo(closingRef.current,
      { y: 40, opacity: 0 },
      {
        y: 0, opacity: 1, duration: 1, ease: 'power3.out',
        scrollTrigger: { trigger: closingRef.current, start: 'top 80%' }
      }
    );

    return () => ScrollTrigger.getAll().forEach(t => t.kill());
  }, []);

  return (
    <main className="bg-[#0B0B0B] text-[#F5F5F1] overflow-x-hidden">

      {/* ── HERO ─────────────────────────────────────── */}
      <section
        ref={heroRef}
        className="relative min-h-[70vh] flex flex-col justify-end px-6 md:px-16 pb-16 pt-40"
      >
        {/* Background grid lines */}
        <div className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `
              linear-gradient(rgba(229,9,20,0.04) 1px, transparent 1px),
              linear-gradient(90deg, rgba(229,9,20,0.04) 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px'
          }}
        />

        {/* Light leak top-left */}
        <div className="absolute top-0 left-0 w-[600px] h-[400px] pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at top left, rgba(229,9,20,0.07) 0%, transparent 65%)' }}
        />

        {/* Eyebrow */}
        <p className="eyebrow text-[#E50914] mb-6 tracking-[0.6em] text-xs">
          — Our Story
        </p>

        {/* Main Title */}
        <div ref={titleRef} className="overflow-hidden">
          <h1 className="section-heading text-[#F5F5F1] leading-none">
            Crafting Stories<br />
            <span style={{
              background: 'linear-gradient(135deg, #E50914 0%, #ff4d4d 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              Beyond the Frame
            </span>
          </h1>
        </div>

        {/* Accent line */}
        <div
          ref={lineRef}
          className="mt-8 mb-8 h-[1px] w-32 bg-[#E50914] origin-left"
        />

        {/* Sub tagline */}
        <p
          ref={subRef}
          className="max-w-xl text-[#F5F5F1]/60 text-base md:text-lg leading-relaxed font-light"
        >
          A vibrant presence in India's changing media and film industry —
          where every frame is intentional and every story leaves an impression.
        </p>

        {/* Scroll hint */}
        <div className="absolute bottom-10 right-10 flex flex-col items-center gap-2 opacity-40">
          <span className="eyebrow text-[10px] tracking-[0.4em]">Scroll</span>
          <div className="scroll-line" />
        </div>
      </section>

      {/* ── INTRO COPY ───────────────────────────────── */}
      <section className="px-6 md:px-16 py-24 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left — large pull quote */}
          <div>
            <p className="font-['Bebas_Neue'] text-[clamp(32px,5vw,64px)] leading-tight text-[#F5F5F1]/90">
              "Founded with the vision of creating meaningful visual stories."
            </p>
          </div>

          {/* Right — body copy */}
          <div className="space-y-6 text-[#F5F5F1]/65 leading-relaxed text-[0.95rem]">
            <p>
              Barunaha Entertainment thrives on the passion for strong storytelling and
              outstanding cinema. By combining creativity with modern production methods,
              we produce content that connects deeply with diverse audiences across India
              and beyond.
            </p>
            <p>
              With a strong emphasis on <span className="text-[#E50914] font-semibold">Bhojpuri and regional storytelling</span>,
              Barunaha is transforming local narratives through a contemporary cinematic
              lens — honouring tradition while embracing the future.
            </p>
          </div>
        </div>
      </section>

      {/* ── STATS BAR ────────────────────────────────── */}
      <section ref={statsRef} className="border-t border-b border-white/10 py-16 px-6 md:px-16">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-10">
          {STATS.map((s) => (
            <div key={s.label} className="stat-item text-center">
              <p
                className="font-['Bebas_Neue'] text-[clamp(48px,7vw,88px)] leading-none"
                style={{
                  background: 'linear-gradient(135deg, #E50914, #ff4d4d)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}
              >
                {s.value}
              </p>
              <p className="eyebrow text-[#F5F5F1]/45 text-[0.65rem] mt-2 tracking-[0.3em]">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── WHAT WE DO ───────────────────────────────── */}
      <section ref={pillarsRef} className="px-6 md:px-16 py-28 max-w-7xl mx-auto">
        <p className="eyebrow text-[#E50914] mb-4 tracking-[0.5em] text-xs">— What We Do</p>
        <h2 className="section-heading text-[clamp(36px,6vw,80px)] mb-16 leading-none">
          Our Craft
        </h2>

        <div className="grid md:grid-cols-2 gap-px bg-white/10">
          {PILLARS.map((p) => (
            <div
              key={p.number}
              className="pillar-item group bg-[#0B0B0B] p-10 md:p-12 relative overflow-hidden
                         hover:bg-[#111] transition-colors duration-500"
            >
              {/* Red hover bar */}
              <div className="absolute left-0 top-0 w-[3px] h-0 bg-[#E50914] group-hover:h-full transition-all duration-500 ease-out" />

              <span className="font-['Bebas_Neue'] text-6xl text-[#E50914]/15 group-hover:text-[#E50914]/30 transition-colors duration-300 leading-none block mb-4">
                {p.number}
              </span>
              <h3 className="font-['Bebas_Neue'] text-2xl md:text-3xl text-[#F5F5F1] mb-4 tracking-wide">
                {p.title}
              </h3>
              <p className="text-[#F5F5F1]/55 text-sm leading-relaxed">
                {p.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── QUOTE SECTION ────────────────────────────── */}
      <section
        ref={quoteRef}
        className="relative py-32 px-6 md:px-16 text-center overflow-hidden"
      >
        {/* BG glow */}
        <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
          <div className="w-[600px] h-[300px] rounded-full"
            style={{ background: 'radial-gradient(ellipse, rgba(229,9,20,0.08) 0%, transparent 70%)' }}
          />
        </div>

        {/* Decorative quote mark */}
        <div className="font-['Bebas_Neue'] text-[200px] leading-none text-[#E50914]/8 absolute top-4 left-1/2 -translate-x-1/2 pointer-events-none select-none">
          "
        </div>

        <div className="relative max-w-4xl mx-auto">
          <p className="font-['Bebas_Neue'] text-[clamp(28px,4.5vw,58px)] leading-tight text-[#F5F5F1] mb-8">
            Cinema is not just about telling stories;<br />
            it's about making audiences{' '}
            <span style={{
              background: 'linear-gradient(135deg, #E50914 0%, #ff4d4d 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              feel them.
            </span>
          </p>
          <div className="h-[1px] w-16 bg-[#E50914] mx-auto mb-6" />
          <p className="eyebrow text-[#F5F5F1]/40 text-xs tracking-[0.5em]">
            — The Barunaha Philosophy
          </p>
        </div>
      </section>

      {/* ── CLOSING VISION ───────────────────────────── */}
      <section
        ref={closingRef}
        className="px-6 md:px-16 py-24 max-w-7xl mx-auto"
      >
        <div className="border border-white/10 p-12 md:p-20 relative overflow-hidden">
          {/* Corner accent */}
          <div className="absolute top-0 left-0 w-16 h-[3px] bg-[#E50914]" />
          <div className="absolute top-0 left-0 w-[3px] h-16 bg-[#E50914]" />
          <div className="absolute bottom-0 right-0 w-16 h-[3px] bg-[#E50914]" />
          <div className="absolute bottom-0 right-0 w-[3px] h-16 bg-[#E50914]" />

          <p className="eyebrow text-[#E50914] mb-6 tracking-[0.5em] text-xs">— Our Vision</p>
          <h2 className="font-['Bebas_Neue'] text-[clamp(32px,5vw,72px)] leading-tight text-[#F5F5F1] mb-8 max-w-3xl">
            Not Just Producing Content —<br />
            <span style={{
              background: 'linear-gradient(135deg, #E50914 0%, #ff4d4d 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              Creating Experiences.
            </span>
          </h2>
          <p className="text-[#F5F5F1]/60 max-w-2xl leading-relaxed text-[0.95rem] mb-10">
            With a forward-looking vision and a commitment to visual storytelling,
            Barunaha Entertainment is building cinematic experiences that inspire,
            engage, and endure — opening avenues for global distribution and
            next-generation content creation.
          </p>
          <a href="#contact" className="projector-btn inline-block">
            <span>Start a Conversation</span>
          </a>
        </div>
      </section>

      {/* Bottom fade */}
      <div className="h-24 bg-gradient-to-t from-[#0B0B0B] to-transparent" />
    </main>
  );
}