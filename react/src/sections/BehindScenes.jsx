import { useState, useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';

// Typewriter hook
function useTypewriter(text, speed = 45, active = false) {
  const [displayed, setDisplayed] = useState('');
  useEffect(() => {
    if (!active) return;
    setDisplayed('');
    let i = 0;
    const timer = setInterval(() => {
      setDisplayed(text.slice(0, i + 1));
      i++;
      if (i >= text.length) clearInterval(timer);
    }, speed);
    return () => clearInterval(timer);
  }, [text, speed, active]);
  return displayed;
}

const SCRIPT_TEXT = `INT. PRODUCTION STUDIO — NIGHT

A blank page glares under a single lamp.
The cursor blinks. Once. Twice.

Then — a single word.

And the story begins.`;

function SceneScript() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-20%' });
  const text = useTypewriter(SCRIPT_TEXT, 38, inView);

  return (
    <div ref={ref} className="relative min-h-screen flex items-center justify-center bg-[#08080a] overflow-hidden">
      {/* Warm desk lamp glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[40vw] h-[50vh] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at top, rgba(255,200,80,0.07) 0%, transparent 70%)' }} />
      {/* Corner frames */}
      <div className="absolute top-12 left-12 w-14 h-14 border-t border-l border-[#FFD700]/20" />
      <div className="absolute top-12 right-12 w-14 h-14 border-t border-r border-[#FFD700]/20" />
      <div className="absolute bottom-12 left-12 w-14 h-14 border-b border-l border-[#FFD700]/20" />
      <div className="absolute bottom-12 right-12 w-14 h-14 border-b border-r border-[#FFD700]/20" />

      <div className="relative max-w-2xl w-full px-8 md:px-0">
        <motion.p className="eyebrow text-[#FFD700] mb-6 opacity-70"
          initial={{ opacity: 0 }} animate={inView ? { opacity: 0.7 } : {}} transition={{ duration: 1 }}>
          — SCENE 01 — SCRIPT WRITING
        </motion.p>
        <div
          className="font-['Space_Grotesk'] text-[#F5F5F1]/80 text-lg leading-[2] tracking-wide whitespace-pre-line"
          style={{ fontFamily: "'Courier New', monospace", fontSize: 'clamp(14px,1.4vw,18px)' }}
        >
          {text}
          {inView && text.length < SCRIPT_TEXT.length && <span className="typewriter-cursor" />}
        </div>
        <motion.div className="mt-12 flex items-center gap-4"
          initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ duration: 1, delay: 2 }}>
          <div className="h-px flex-1 bg-gradient-to-r from-[#FFD700]/30 to-transparent" />
          <span className="eyebrow text-[#FFD700]/40 text-[0.6rem]">DRAFT 01</span>
        </motion.div>
      </div>
    </div>
  );
}

function SceneShoot() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-15%' });

  return (
    <div ref={ref} className="relative min-h-screen flex items-center justify-center bg-[#0a0508] overflow-hidden">
      {/* BG image */}
      <div className="absolute inset-0 opacity-[0.18] bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?auto=format&fit=crop&q=80&w=2000')" }} />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/90" />

      <div className={`relative z-10 text-center px-8 ${inView ? 'scene-shake' : ''}`}
        style={{ animationDuration: '1.2s', animationIterationCount: 3 }}>
        {/* REC indicator */}
        <motion.div className="flex items-center justify-center gap-3 mb-10"
          initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ duration: 0.6 }}>
          <div className="w-3 h-3 rounded-full bg-[#E50914] animate-pulse shadow-[0_0_16px_#E50914]" />
          <span className="font-mono text-[#E50914] text-sm tracking-[0.35em] font-bold">REC</span>
          <span className="font-mono text-[#F5F5F1]/40 text-sm tracking-widest">00:01:47:23</span>
        </motion.div>

        <motion.p className="eyebrow text-[#E50914] mb-5 opacity-80"
          initial={{ opacity: 0 }} animate={inView ? { opacity: 0.8 } : {}} transition={{ duration: 0.8, delay: 0.3 }}>
          — SCENE 02 — ON SET
        </motion.p>

        <motion.h2 className="font-['Bebas_Neue'] text-[#F5F5F1] leading-none mb-6"
          style={{ fontSize: 'clamp(50px,9vw,120px)' }}
          initial={{ opacity: 0, scale: 1.1 }} animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1, delay: 0.4, ease: [0.16,1,0.3,1] }}>
          LIGHTS.<br />CAMERA.<br /><span className="text-[#E50914]">ACTION.</span>
        </motion.h2>

        <motion.p className="text-[#F5F5F1]/50 text-base md:text-lg font-['Space_Grotesk'] max-w-md mx-auto"
          initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ duration: 0.8, delay: 0.8 }}>
          Every shot is a decision. Every frame — a world built from scratch.
        </motion.p>

        {/* Viewfinder corners */}
        <div className="absolute top-8 left-8 w-10 h-10 border-t-2 border-l-2 border-[#E50914]/60" />
        <div className="absolute top-8 right-8 w-10 h-10 border-t-2 border-r-2 border-[#E50914]/60" />
        <div className="absolute bottom-8 left-8 w-10 h-10 border-b-2 border-l-2 border-[#E50914]/60" />
        <div className="absolute bottom-8 right-8 w-10 h-10 border-b-2 border-r-2 border-[#E50914]/60" />
      </div>
    </div>
  );
}

function SceneEdit() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-15%' });

  const CLIPS = [
    { label: 'WIDE SHOT',   color: '#E50914', w: '22%' },
    { label: 'CU ACTOR',    color: '#B20710', w: '14%' },
    { label: 'B-ROLL',      color: '#FFD700', w: '18%' },
    { label: 'DIALOGUE',    color: '#E50914', w: '26%' },
    { label: 'CUTAWAY',     color: '#B20710', w: '12%' },
  ];

  return (
    <div ref={ref} className="relative min-h-screen flex items-center justify-center bg-[#0B0B0B] overflow-hidden">
      <div className="absolute inset-0 opacity-[0.04]"
        style={{ backgroundImage: 'radial-gradient(#E50914 0.5px, transparent 0.5px)', backgroundSize: '28px 28px' }} />

      <div className="relative z-10 w-full max-w-4xl px-8">
        <motion.p className="eyebrow text-[#E50914] mb-5"
          initial={{ opacity: 0, x: -20 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.8 }}>
          — SCENE 03 — POST PRODUCTION
        </motion.p>

        <motion.h2 className="font-['Bebas_Neue'] text-[#F5F5F1] mb-12 leading-none"
          style={{ fontSize: 'clamp(44px,7vw,100px)' }}
          initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.16,1,0.3,1] }}>
          THE <span className="text-red-gradient">EDIT</span> ROOM
        </motion.h2>

        {/* Fake editing timeline */}
        <div className="bg-[#0d0d0d] border border-[#1a1a1a] rounded-lg p-6 font-mono">
          {/* Timeline ruler */}
          <div className="flex items-center gap-2 mb-4 text-[#F5F5F1]/20 text-xs overflow-hidden">
            {[...Array(12)].map((_, i) => (
              <div key={i} className="flex-1 border-l border-[#F5F5F1]/10 pl-1">
                {String(i * 5).padStart(2, '0')}:00
              </div>
            ))}
          </div>

          {/* Track rows */}
          {['VIDEO', 'AUDIO', 'FX'].map((track, ti) => (
            <div key={track} className="flex items-center gap-3 mb-3">
              <span className="text-[#F5F5F1]/30 text-[0.65rem] tracking-widest w-10 shrink-0">{track}</span>
              <div className="flex-1 h-8 relative flex gap-1">
                {CLIPS.map((clip, ci) => (
                  <motion.div
                    key={ci}
                    className="h-full rounded-sm flex items-center px-2 relative overflow-hidden shrink-0"
                    style={{ width: clip.w, background: `${clip.color}22`, border: `1px solid ${clip.color}44` }}
                    initial={{ scaleX: 0, originX: 0 }}
                    animate={inView ? { scaleX: 1 } : {}}
                    transition={{ duration: 0.6, delay: 0.5 + ti * 0.15 + ci * 0.05, ease: [0.16,1,0.3,1] }}
                  >
                    <span className="text-[0.55rem] tracking-wider truncate" style={{ color: clip.color }}>
                      {ti === 0 ? clip.label : ti === 1 ? '~~~~~' : '◆ ◆ ◆'}
                    </span>
                  </motion.div>
                ))}
                {/* Playhead */}
                <motion.div
                  className="absolute top-0 bottom-0 w-px bg-[#FFD700] z-10"
                  style={{ left: '0%' }}
                  animate={inView ? { left: '65%' } : {}}
                  transition={{ duration: 4, delay: 1, ease: 'linear' }}
                />
              </div>
            </div>
          ))}

          <div className="flex items-center gap-6 mt-5 pt-4 border-t border-[#1a1a1a]">
            {['▶', '⏸', '⏹', '⏮', '⏭'].map((ic, i) => (
              <span key={i} className="text-[#F5F5F1]/25 hover:text-[#E50914] cursor-pointer transition-colors text-sm">{ic}</span>
            ))}
            <div className="ml-auto text-xs text-[#FFD700]/50 tracking-widest">00:02:14:07</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function BehindScenes() {
  return (
    <section id="behind-scenes" className="relative">
      {/* Section header */}
      <div className="bg-[#141414] py-20 px-8 md:px-16 border-y border-[#E50914]/10">
        <motion.p className="eyebrow text-[#E50914] mb-4"
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
          — SECTION 03 —
        </motion.p>
        <motion.h2 className="section-heading text-[#F5F5F1]"
          initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16,1,0.3,1] }} viewport={{ once: true }}>
          BEHIND <span className="text-red-gradient">THE SCENES</span>
        </motion.h2>
      </div>

      <SceneScript />
      <SceneShoot />
      <SceneEdit />
    </section>
  );
}
