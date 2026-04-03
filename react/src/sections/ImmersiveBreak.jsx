import { useRef } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';

function FloatingReel({ style, label, delay = 0 }) {
  return (
    <motion.div
      className="absolute flex flex-col items-center gap-3 select-none pointer-events-none"
      style={style}
      initial={{ opacity: 0, scale: 0.7 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.2, delay, ease: [0.16, 1, 0.3, 1] }}
      viewport={{ once: true }}
    >
      {label}
    </motion.div>
  );
}

export default function ImmersiveBreak() {
  const sectionRef = useRef(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { stiffness: 40, damping: 20 };
  const rotateX = useSpring(useTransform(mouseY, [-300, 300], [8, -8]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-500, 500], [-10, 10]), springConfig);

  const x1 = useSpring(useTransform(mouseX, [-500, 500], [-35, 35]), springConfig);
  const y1 = useSpring(useTransform(mouseY, [-300, 300], [-25, 25]), springConfig);
  const x2 = useSpring(useTransform(mouseX, [-500, 500], [28, -28]), springConfig);
  const y2 = useSpring(useTransform(mouseY, [-300, 300], [18, -18]), springConfig);
  const x3 = useSpring(useTransform(mouseX, [-500, 500], [-20, 20]), springConfig);
  const y3 = useSpring(useTransform(mouseY, [-300, 300], [30, -30]), springConfig);

  const handleMouseMove = (e) => {
    const rect = sectionRef.current?.getBoundingClientRect();
    if (!rect) return;
    mouseX.set(e.clientX - rect.left - rect.width / 2);
    mouseY.set(e.clientY - rect.top - rect.height / 2);
  };

  return (
    <section
      id="immersive"
      ref={sectionRef}
      className="relative min-h-screen bg-[#080808] flex items-center justify-center overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Deep red radial glow */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 70% 60% at 50% 50%, rgba(229,9,20,0.06) 0%, transparent 70%)' }} />

      {/* Floating film reel — top left */}
      <motion.div
        className="absolute top-[15%] left-[10%] anim-float opacity-30"
        style={{ x: x1, y: y1 }}
      >
        <svg width="90" height="90" viewBox="0 0 100 100" fill="none" opacity="0.6">
          <circle cx="50" cy="50" r="48" stroke="#E50914" strokeWidth="1.5"/>
          <circle cx="50" cy="50" r="32" stroke="#E50914" strokeWidth="1"/>
          <circle cx="50" cy="50" r="8"  fill="#E50914" fillOpacity="0.4"/>
          {[0,60,120,180,240,300].map(angle => (
            <circle key={angle} cx={50 + 40*Math.cos(angle*Math.PI/180)} cy={50 + 40*Math.sin(angle*Math.PI/180)} r="6" fill="#E50914" fillOpacity="0.5"/>
          ))}
        </svg>
      </motion.div>

      {/* Floating frame — bottom right */}
      <motion.div
        className="absolute bottom-[12%] right-[8%] anim-float-2 opacity-20"
        style={{ x: x2, y: y2 }}
      >
        <div className="w-20 h-28 border-2 border-[#FFD700]/50 relative">
          <div className="absolute inset-1 border border-[#FFD700]/20" />
          {[0,25,50,75,100].map(p => (
            <div key={p} className="absolute w-full h-px bg-[#FFD700]/10" style={{ top: `${p}%` }} />
          ))}
        </div>
      </motion.div>

      {/* Floating lens — top right */}
      <motion.div
        className="absolute top-[20%] right-[15%] anim-float-3 opacity-25"
        style={{ x: x3, y: y3 }}
      >
        <svg width="70" height="70" viewBox="0 0 70 70" fill="none">
          <circle cx="35" cy="35" r="33" stroke="#F5F5F1" strokeWidth="1" strokeDasharray="4 4"/>
          <circle cx="35" cy="35" r="22" stroke="#F5F5F1" strokeWidth="1.5"/>
          <circle cx="35" cy="35" r="10" stroke="#F5F5F1" strokeWidth="1"/>
          <circle cx="28" cy="28" r="3"  fill="white" fillOpacity="0.4"/>
        </svg>
      </motion.div>

      {/* 3D Card (central) */}
      <motion.div
        className="relative z-10 text-center px-8"
        style={{ rotateX, rotateY, transformStyle: 'preserve-3d', perspective: 1200 }}
      >
        <motion.p
          className="eyebrow text-[#E50914] mb-8 opacity-70"
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 0.7, y: 0 }}
          transition={{ duration: 0.9 }} viewport={{ once: true }}
        >
          — ALWAYS IN MOTION —
        </motion.p>

        <motion.h2
          className="font-['Bebas_Neue'] text-[#F5F5F1] leading-[0.85] mb-8"
          style={{ fontSize: 'clamp(52px,10vw,130px)' }}
          initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }} viewport={{ once: true }}
        >
          CINEMA IS NOT<br />
          JUST A <span className="text-red-gradient">FRAME</span><br />
          — IT'S A WORLD.
        </motion.h2>

        <motion.p
          className="text-[#F5F5F1]/40 font-['Space_Grotesk'] text-base max-w-sm mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4 }} viewport={{ once: true }}
        >
          Move your cursor to feel the universe shift.
        </motion.p>

        {/* Decorative horizontal line */}
        <motion.div
          className="mt-10 flex items-center justify-center gap-6"
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1, delay: 0.6 }} viewport={{ once: true }}
        >
          <div className="h-px w-24 bg-gradient-to-r from-transparent to-[#E50914]" />
          <div className="w-1.5 h-1.5 rounded-full bg-[#E50914]" />
          <div className="h-px w-24 bg-gradient-to-l from-transparent to-[#E50914]" />
        </motion.div>
      </motion.div>

      {/* Bottom scanline */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#E50914]/30 to-transparent" />
    </section>
  );
}
