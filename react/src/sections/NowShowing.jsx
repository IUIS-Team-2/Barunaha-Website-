import { useRef } from 'react';
import { motion } from 'framer-motion';

const PROJECTS = [
  {
    id: 1, title: 'THE MIDNIGHT ECHO',  genre: 'THRILLER', year: '2024',
    img: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&q=80&w=800',
    desc: 'A detective haunted by a case that refuses to stay buried in the shadows of the city.',
  },
  {
    id: 2, title: 'RED HORIZON',        genre: 'SCI-FI',   year: '2023',
    img: 'https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?auto=format&fit=crop&q=80&w=800',
    desc: 'When the last communication from Mars goes silent, humanity faces its reckoning.',
  },
  {
    id: 3, title: 'THE GRAND OPUS',     genre: 'DRAMA',    year: '2024',
    img: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?auto=format&fit=crop&q=80&w=800',
    desc: "A brilliant conductor's rise and fall while chasing his final masterpiece.",
  },
  {
    id: 4, title: 'CELLULOID DREAMS',   genre: 'DOCUMENTARY', year: '2023',
    img: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&q=80&w=800',
    desc: 'A love letter to analog cinemas and the projectionists keeping them alive.',
  },
  {
    id: 5, title: 'NEON NIGHTS',        genre: 'ACTION',   year: '2024',
    img: 'https://images.unsplash.com/photo-1555680202-c86f0e12f086?auto=format&fit=crop&q=80&w=800',
    desc: 'In a city where memories are currency, one courier carries the most dangerous secret.',
  },
];

const cardVariants = {
  hidden:  { opacity: 0, y: 50 },
  visible: (i) => ({ opacity: 1, y: 0, transition: { duration: 0.7, delay: i * 0.1, ease: [0.16,1,0.3,1] } }),
};

export default function NowShowing() {
  const trackRef = useRef(null);

  return (
    <section id="now-showing" className="relative bg-[#0B0B0B] py-28 overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0 opacity-[0.03]"
        style={{ backgroundImage: 'repeating-linear-gradient(0deg,transparent,transparent 40px,rgba(229,9,20,0.3) 40px,rgba(229,9,20,0.3) 41px)' }}
      />

      {/* Section header */}
      <div className="px-8 md:px-16 mb-14">
        <div className="flex items-end justify-between">
          <div>
            <motion.p
              className="eyebrow text-[#E50914] mb-4"
              initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }} viewport={{ once: true }}
            >
              — SECTION 02 —
            </motion.p>
            <motion.h2
              className="section-heading text-[#F5F5F1]"
              initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.16,1,0.3,1] }} viewport={{ once: true }}
            >
              NOW <span className="text-red-gradient">SHOWING</span>
            </motion.h2>
          </div>
          <motion.p
            className="hidden md:block text-[#F5F5F1]/35 text-sm font-['Space_Grotesk'] tracking-widest max-w-xs text-right"
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1, delay: 0.3 }} viewport={{ once: true }}
          >
            Drag or scroll to explore our featured productions
          </motion.p>
        </div>

        {/* Countdown / progress line */}
        <div className="mt-8 flex items-center gap-4">
          {PROJECTS.map((p, i) => (
            <div key={p.id} className="flex items-center gap-2">
              <span className="text-[#E50914]/40 font-['Bebas_Neue'] text-2xl leading-none">{String(i+1).padStart(2,'0')}</span>
              <div className={`h-px flex-1 min-w-[40px] ${i === 0 ? 'bg-[#E50914]' : 'bg-[#F5F5F1]/10'}`} />
            </div>
          ))}
        </div>
      </div>

      {/* Horizontal scroll track */}
      <div
        ref={trackRef}
        className="flex gap-6 overflow-x-scroll no-scrollbar pb-8 px-8 md:px-16"
        style={{ scrollSnapType: 'x mandatory' }}
      >
        {PROJECTS.map((project, i) => (
          <motion.div
            key={project.id}
            className="film-card"
            style={{ scrollSnapAlign: 'start', aspectRatio: '2/3', height: 'clamp(360px,52vh,520px)' }}
            custom={i}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Border glow on hover */}
            <div className="film-card-border" />

            {/* Poster image */}
            <img
              src={project.img} alt={project.title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
            />

            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

            {/* Film strip perforations (top) */}
            <div className="absolute top-0 left-0 right-0 h-5 flex gap-[6px] px-2 items-center opacity-40">
              {[...Array(12)].map((_, j) => (
                <div key={j} className="w-2 h-3 bg-black/80 rounded-sm flex-shrink-0" />
              ))}
            </div>

            {/* Info */}
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <div className="flex items-center gap-3 mb-3">
                <span className="eyebrow text-[#E50914] text-[0.6rem] tracking-[0.3em]">{project.genre}</span>
                <div className="h-px flex-1 bg-[#E50914]/30" />
                <span className="eyebrow text-[#F5F5F1]/40 text-[0.6rem]">{project.year}</span>
              </div>
              <h3 className="font-['Bebas_Neue'] text-2xl text-[#F5F5F1] leading-tight mb-2">{project.title}</h3>
              <p className="text-[#F5F5F1]/55 text-xs font-['Space_Grotesk'] leading-relaxed line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                {project.desc}
              </p>
              <button className="mt-4 w-full py-3 border border-[#E50914]/50 text-[#E50914] font-['Space_Grotesk'] text-[0.65rem] tracking-[0.3em] uppercase hover:bg-[#E50914] hover:text-white transition-all duration-300">
                VIEW PROJECT
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Side fade masks */}
      <div className="pointer-events-none absolute top-0 left-0 w-16 h-full bg-gradient-to-r from-[#0B0B0B] to-transparent z-10" />
      <div className="pointer-events-none absolute top-0 right-0 w-16 h-full bg-gradient-to-l from-[#0B0B0B] to-transparent z-10" />
    </section>
  );
}
