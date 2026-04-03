import { motion } from 'framer-motion';

const TEAM = [
  {
    name: 'Arjun Mehta',
    role: 'Director of Vision',
    bio: 'Award-winning director with 12 years of crafting narrative-driven cinema across South Asia.',
    img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=600',
    awards: '3× National Award Winner',
  },
  {
    name: 'Priya Natarajan',
    role: 'Master of Frames',
    bio: 'Director of Photography whose visual language has been called "breathtaking" by international critics.',
    img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=600',
    awards: 'BIFF Special Jury Prize',
  },
  {
    name: 'Rohan Sinha',
    role: 'Architect of Sound',
    bio: 'Sound designer and composer weaving emotional landscapes that deepen every story.',
    img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=600',
    awards: 'IFFI Best Sound Design',
  },
  {
    name: 'Anaya Kapoor',
    role: 'Weaver of Words',
    bio: 'Screenwriter and story architect — her scripts have generated over ₹200cr at the box office.',
    img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=600',
    awards: 'Screenwriters Guild Award',
  },
];

export default function CastCrew() {
  return (
    <section id="cast-crew" className="relative bg-[#0B0B0B] py-28 overflow-hidden">
      {/* Subtle grid bg */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{ backgroundImage: 'linear-gradient(rgba(245,245,241,0.4) 1px,transparent 1px),linear-gradient(90deg,rgba(245,245,241,0.4) 1px,transparent 1px)', backgroundSize: '60px 60px' }}
      />

      {/* Header */}
      <div className="px-8 md:px-16 mb-20">
        <motion.p className="eyebrow text-[#E50914] mb-4"
          initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
          — SECTION 05 —
        </motion.p>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <motion.h2 className="section-heading text-[#F5F5F1]"
            initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.16,1,0.3,1] }} viewport={{ once: true }}>
            CAST <span className="text-red-gradient">&amp;</span> CREW
          </motion.h2>
          <motion.p className="text-[#F5F5F1]/35 font-['Space_Grotesk'] text-sm max-w-xs leading-relaxed"
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.3 }} viewport={{ once: true }}>
            Hover to reveal — every face behind the frame
          </motion.p>
        </div>
      </div>

      {/* Team grid */}
      <div className="px-8 md:px-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {TEAM.map((member, i) => (
          <motion.div
            key={member.name}
            className="team-card"
            style={{ height: 'clamp(380px,52vh,500px)' }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
          >
            {/* Photo */}
            <img src={member.img} alt={member.name} loading="lazy" />

            {/* Dark veil */}
            <div className="team-card-veil" />

            {/* Gold tag top-right */}
            <div className="absolute top-4 right-4 z-10 opacity-60">
              <div className="w-2 h-2 rounded-full bg-[#FFD700]" />
            </div>

            {/* Info reveal */}
            <div className="team-card-info">
              <div className="w-8 h-px bg-[#E50914] mb-3" />
              <p className="eyebrow text-[#FFD700] text-[0.62rem] mb-2 opacity-80">{member.role}</p>
              <h3 className="font-['Bebas_Neue'] text-[#F5F5F1] text-2xl leading-tight mb-2">{member.name}</h3>
              <p className="text-[#F5F5F1]/50 text-xs font-['Space_Grotesk'] leading-relaxed mb-3 line-clamp-2">{member.bio}</p>
              <p className="eyebrow text-[#E50914]/70 text-[0.58rem]">{member.awards}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Stats bar */}
      <motion.div
        className="mt-20 px-8 md:px-16 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-[#F5F5F1]/05 pt-16"
        initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16,1,0.3,1] }} viewport={{ once: true }}>
        {[
          { value: '28+', label: 'Productions' },
          { value: '14',  label: 'Awards Won' },
          { value: '6',   label: 'Countries' },
          { value: '∞',   label: 'Stories Told' },
        ].map(stat => (
          <div key={stat.label} className="text-center">
            <div className="font-['Bebas_Neue'] text-[#E50914] mb-2" style={{ fontSize: 'clamp(42px,6vw,72px)' }}>{stat.value}</div>
            <div className="eyebrow text-[#F5F5F1]/35 text-[0.65rem]">{stat.label}</div>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
