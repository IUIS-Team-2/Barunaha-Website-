import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ARCHIVE = [
  {
    id: 1, title: 'SHADOW PROTOCOL',  genre: 'MYSTERY',      year: '2022',
    img: 'https://images.unsplash.com/photo-1542204165-65bf26472b9b?auto=format&fit=crop&q=80&w=800',
    desc: 'A high-stakes espionage thriller where the line between security and survival disappears.',
    director: 'Arjun Mehta', runtime: '118 MIN',
  },
  {
    id: 2, title: 'BEYOND THE VEIL',  genre: 'SUPERNATURAL', year: '2023',
    img: 'https://images.unsplash.com/photo-1601506521937-0121a7fc2a6b?auto=format&fit=crop&q=80&w=800',
    desc: 'Filmed across four continents — a supernatural mystery exploring the thin boundary between worlds.',
    director: 'Priya Natarajan', runtime: '134 MIN',
  },
  {
    id: 3, title: 'PULSE',             genre: 'DRAMA',        year: '2023',
    img: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&q=80&w=800',
    desc: 'The heartbeat of a city told through the eyes of five strangers connected by a single night.',
    director: 'Rohan Sinha', runtime: '104 MIN',
  },
  {
    id: 4, title: 'THE GOLDEN AGE',   genre: 'PERIOD DRAMA', year: '2024',
    img: 'https://images.unsplash.com/photo-1518134346374-184f9d21cb2c?auto=format&fit=crop&q=80&w=800',
    desc: 'A lavish period epic spanning three generations of an Indian film family.',
    director: 'Anaya Kapoor', runtime: '162 MIN',
  },
  {
    id: 5, title: 'STATIC',           genre: 'THRILLER',     year: '2024',
    img: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&q=80&w=800',
    desc: 'When a broadcast journalist intercepts a transmission that shouldn\'t exist, reality fractures.',
    director: 'Arjun Mehta', runtime: '97 MIN',
  },
  {
    id: 6, title: 'LAST LIGHT',       genre: 'DOCUMENTARY',  year: '2022',
    img: 'https://images.unsplash.com/photo-1440404653325-ab127d49abc1?auto=format&fit=crop&q=80&w=800',
    desc: 'An intimate documentary about the dying art of hand-painted film posters in India.',
    director: 'Priya Natarajan', runtime: '78 MIN',
  },
];

function Modal({ project, onClose }) {
  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="cinema-modal-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="relative max-w-4xl w-full mx-6 bg-[#0d0d0d] border border-[#E50914]/20 overflow-hidden rounded-sm"
            initial={{ scale: 0.9, opacity: 0, y: 30 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.92, opacity: 0 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Image */}
            <div className="relative h-64 md:h-80 overflow-hidden">
              <img src={project.img} alt={project.title} className="w-full h-full object-cover opacity-60" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d] via-black/20 to-transparent" />
              {/* Film strip holes on image */}
              <div className="absolute top-0 left-0 right-0 h-5 flex gap-[6px] px-3 items-center">
                {[...Array(16)].map((_,i) => <div key={i} className="w-2 h-3 bg-black/60 rounded-sm flex-shrink-0" />)}
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-5 flex gap-[6px] px-3 items-center">
                {[...Array(16)].map((_,i) => <div key={i} className="w-2 h-3 bg-black/60 rounded-sm flex-shrink-0" />)}
              </div>
            </div>

            {/* Details */}
            <div className="p-8 md:p-10">
              <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2, duration: 0.6 }}>
                <div className="flex items-center gap-4 mb-4">
                  <span className="eyebrow text-[#E50914] text-[0.6rem]">{project.genre}</span>
                  <div className="h-px flex-1 bg-[#E50914]/20" />
                  <span className="eyebrow text-[#F5F5F1]/30 text-[0.6rem]">{project.year}</span>
                  <span className="eyebrow text-[#F5F5F1]/30 text-[0.6rem]">{project.runtime}</span>
                </div>
                <h2 className="font-['Bebas_Neue'] text-[#F5F5F1] mb-4" style={{ fontSize: 'clamp(32px,5vw,56px)' }}>{project.title}</h2>
                <p className="text-[#F5F5F1]/60 font-['Space_Grotesk'] leading-relaxed mb-6">{project.desc}</p>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="eyebrow text-[#FFD700]/60 text-[0.6rem] mb-1">DIRECTED BY</p>
                    <p className="text-[#F5F5F1] font-['Space_Grotesk'] font-semibold">{project.director}</p>
                  </div>
                  <button className="projector-btn" style={{ padding: '12px 32px', fontSize: '0.7rem' }}>
                    <span>Watch Trailer</span>
                  </button>
                </div>
              </motion.div>
            </div>

            {/* Close */}
            <button
              onClick={onClose}
              className="absolute top-5 right-5 w-9 h-9 flex items-center justify-center border border-[#F5F5F1]/20 text-[#F5F5F1]/60 hover:border-[#E50914] hover:text-[#E50914] transition-all text-lg"
            >
              ✕
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default function FilmArchive() {
  const [active, setActive] = useState(null);

  return (
    <section id="film-archive" className="relative bg-[#141414] py-28 overflow-hidden">
      {/* Subtle scanlines */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{ backgroundImage: 'repeating-linear-gradient(0deg,transparent,transparent 2px,rgba(255,255,255,0.5) 2px,rgba(255,255,255,0.5) 4px)' }} />

      {/* Header */}
      <div className="px-8 md:px-16 mb-16">
        <motion.p className="eyebrow text-[#E50914] mb-4"
          initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
          — SECTION 04 —
        </motion.p>
        <motion.h2 className="section-heading text-[#F5F5F1]"
          initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16,1,0.3,1] }} viewport={{ once: true }}>
          FILM <span className="text-gold-gradient">ARCHIVE</span>
        </motion.h2>
        <motion.p className="text-[#F5F5F1]/35 font-['Space_Grotesk'] text-sm mt-4 tracking-widest"
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.3 }} viewport={{ once: true }}>
          Click any frame to open
        </motion.p>
      </div>

      {/* Film strip — two auto-scrolling rows */}
      <div className="overflow-hidden">
        {/* Row 1 — left to right */}
        <div className="flex mb-1" style={{ animation: 'filmScroll 28s linear infinite' }}>
          {[...ARCHIVE, ...ARCHIVE].map((project, i) => (
            <div
              key={`r1-${i}`}
              className="film-frame group cursor-pointer"
              style={{ flexShrink: 0 }}
              onClick={() => setActive(project)}
              data-hover
            >
              <img src={project.img} alt={project.title} loading="lazy" />
              <div className="absolute inset-0 bg-black/50 group-hover:bg-black/0 transition-all duration-500 z-[1]" />
              <div className="absolute bottom-6 left-0 right-0 text-center z-[3] opacity-0 group-hover:opacity-100 transition-opacity duration-400">
                <p className="font-['Bebas_Neue'] text-[#F5F5F1] text-sm tracking-widest">{project.title}</p>
                <p className="eyebrow text-[#E50914] text-[0.55rem] mt-1">{project.genre}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Row 2 — right to left */}
        <div className="flex" style={{ animation: 'filmScrollReverse 22s linear infinite' }}>
          {[...ARCHIVE, ...ARCHIVE].reverse().map((project, i) => (
            <div
              key={`r2-${i}`}
              className="film-frame group cursor-pointer"
              style={{ flexShrink: 0 }}
              onClick={() => setActive(project)}
              data-hover
            >
              <img src={project.img} alt={project.title} loading="lazy" />
              <div className="absolute inset-0 bg-black/50 group-hover:bg-black/0 transition-all duration-500 z-[1]" />
              <div className="absolute bottom-6 left-0 right-0 text-center z-[3] opacity-0 group-hover:opacity-100 transition-opacity duration-400">
                <p className="font-['Bebas_Neue'] text-[#F5F5F1] text-sm tracking-widest">{project.title}</p>
                <p className="eyebrow text-[#E50914] text-[0.55rem] mt-1">{project.genre}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Add keyframes via style tag */}
      <style>{`
        @keyframes filmScroll {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        @keyframes filmScrollReverse {
          from { transform: translateX(-50%); }
          to   { transform: translateX(0); }
        }
      `}</style>

      <Modal project={active} onClose={() => setActive(null)} />
    </section>
  );
}
