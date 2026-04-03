import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const CREDITS = [
  { type: 'studio',    text: 'BARUNAHA PRODUCTIONS' },
  { type: 'divider' },
  { type: 'role',     label: 'DIRECTED BY',          value: 'Arjun Mehta' },
  { type: 'role',     label: 'CINEMATOGRAPHY',        value: 'Priya Natarajan' },
  { type: 'role',     label: 'SOUND DESIGN',          value: 'Rohan Sinha' },
  { type: 'role',     label: 'WRITTEN BY',            value: 'Anaya Kapoor' },
  { type: 'divider' },
  { type: 'role',     label: 'PRODUCED BY',           value: 'Barunaha Productions' },
  { type: 'role',     label: 'COLOUR GRADE',          value: 'Vikram Das' },
  { type: 'role',     label: 'VFX SUPERVISOR',        value: 'Meera Iyer' },
  { type: 'role',     label: 'ORIGINAL SCORE',        value: 'Rohan Sinha' },
  { type: 'divider' },
  { type: 'quote',    text: '"Every frame is a prayer."' },
  { type: 'divider' },
  { type: 'role',     label: 'LOCATIONS',             value: 'Mumbai · Delhi · Kolkata · Jaipur' },
  { type: 'role',     label: 'FORMAT',                value: '4K / Dolby Vision / Atmos' },
  { type: 'divider' },
  { type: 'motto',    text: 'WHERE EVERY FRAME TELLS A STORY THAT LASTS FOREVER.' },
  { type: 'divider' },
  { type: 'copy',     text: '© 2026 BARUNAHA PRODUCTIONS. ALL RIGHTS RESERVED.' },
];

export default function EndCredits() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="relative bg-[#000000] overflow-hidden">

      {/* ── ROLLING CREDITS ── */}
      <div className="relative h-screen overflow-hidden flex items-start justify-center border-b border-[#F5F5F1]/05">
        {/* Top / bottom fades */}
        <div className="pointer-events-none absolute top-0 left-0 right-0 z-10 h-32 bg-gradient-to-b from-black to-transparent" />
        <div className="pointer-events-none absolute bottom-0 left-0 right-0 z-10 h-32 bg-gradient-to-t from-black to-transparent" />

        {/* Credits scroll column */}
        <div className="credits-roll text-center px-8" style={{ willChange: 'transform' }}>
          {CREDITS.map((item, i) => {
            if (item.type === 'divider') return <div key={i} className="my-10 w-12 h-px bg-[#E50914]/30 mx-auto" />;
            if (item.type === 'studio')  return <h2 key={i} className="font-['Bebas_Neue'] text-[#F5F5F1] tracking-[0.35em] mb-4" style={{ fontSize: 'clamp(28px,5vw,52px)', letterSpacing: '0.35em' }}>{item.text}</h2>;
            if (item.type === 'quote')   return <p key={i} className="font-['Cinzel'] italic text-[#FFD700]/70 text-lg my-6">{item.text}</p>;
            if (item.type === 'motto')   return <p key={i} className="eyebrow text-[#F5F5F1]/30 text-[0.65rem] tracking-[0.35em] my-4 max-w-xs mx-auto">{item.text}</p>;
            if (item.type === 'copy')    return <p key={i} className="eyebrow text-[#F5F5F1]/15 text-[0.6rem] tracking-widest mt-6">{item.text}</p>;
            return (
              <div key={i} className="my-5">
                <p className="eyebrow text-[#E50914]/60 text-[0.58rem] mb-1">{item.label}</p>
                <p className="font-['Space_Grotesk'] text-[#F5F5F1]/75 text-sm font-medium">{item.value}</p>
              </div>
            );
          })}
          {/* Repeat for seamless loop */}
          {CREDITS.map((item, i) => {
            if (item.type === 'divider') return <div key={`r2-${i}`} className="my-10 w-12 h-px bg-[#E50914]/30 mx-auto" />;
            if (item.type === 'studio')  return <h2 key={`r2-${i}`} className="font-['Bebas_Neue'] text-[#F5F5F1] tracking-[0.35em] mb-4" style={{ fontSize: 'clamp(28px,5vw,52px)', letterSpacing: '0.35em' }}>{item.text}</h2>;
            if (item.type === 'quote')   return <p key={`r2-${i}`} className="font-['Cinzel'] italic text-[#FFD700]/70 text-lg my-6">{item.text}</p>;
            if (item.type === 'motto')   return <p key={`r2-${i}`} className="eyebrow text-[#F5F5F1]/30 text-[0.65rem] tracking-[0.35em] my-4 max-w-xs mx-auto">{item.text}</p>;
            if (item.type === 'copy')    return <p key={`r2-${i}`} className="eyebrow text-[#F5F5F1]/15 text-[0.6rem] tracking-widest mt-6">{item.text}</p>;
            return (
              <div key={`r2-${i}`} className="my-5">
                <p className="eyebrow text-[#E50914]/60 text-[0.58rem] mb-1">{item.label}</p>
                <p className="font-['Space_Grotesk'] text-[#F5F5F1]/75 text-sm font-medium">{item.value}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* ── CONTACT FORM ── */}
      <div className="relative z-10 max-w-2xl mx-auto px-8 py-28">
        <motion.div
          initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }} viewport={{ once: true }}
        >
          {/* Label */}
          <p className="eyebrow text-[#E50914] mb-6">— SECTION 07 — GET IN TOUCH</p>

          <h2
            className="font-['Bebas_Neue'] text-[#F5F5F1] leading-none mb-4"
            style={{ fontSize: 'clamp(46px,8vw,100px)' }}
          >
            LET'S CREATE<br /><span className="text-gold-gradient">YOUR STORY.</span>
          </h2>

          <p className="text-[#F5F5F1]/40 font-['Space_Grotesk'] mb-14 text-sm leading-relaxed max-w-md">
            Ready to bring your vision to life? We'd love to hear about your project.
          </p>

          <AnimatePresence mode="wait">
            {!submitted ? (
              <motion.form
                key="form"
                onSubmit={handleSubmit}
                className="flex flex-col gap-10"
                initial={{ opacity: 1 }} exit={{ opacity: 0 }}
              >
                <div>
                  <label className="eyebrow text-[#F5F5F1]/30 text-[0.6rem] block mb-2">YOUR NAME</label>
                  <input
                    className="cinema-input"
                    placeholder="e.g. Rahul Sharma"
                    value={form.name}
                    onChange={e => setForm({ ...form, name: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <label className="eyebrow text-[#F5F5F1]/30 text-[0.6rem] block mb-2">EMAIL ADDRESS</label>
                  <input
                    type="email"
                    className="cinema-input"
                    placeholder="hello@yourcompany.com"
                    value={form.email}
                    onChange={e => setForm({ ...form, email: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <label className="eyebrow text-[#F5F5F1]/30 text-[0.6rem] block mb-2">YOUR STORY</label>
                  <textarea
                    rows={4}
                    className="cinema-input resize-none"
                    placeholder="Tell us about your project, vision, timeline..."
                    value={form.message}
                    onChange={e => setForm({ ...form, message: e.target.value })}
                    required
                  />
                </div>
                <button type="submit" className="projector-btn self-start">
                  <span>Send the Script</span>
                </button>
              </motion.form>
            ) : (
              <motion.div
                key="success"
                className="text-center py-16"
                initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="w-16 h-16 border border-[#FFD700]/50 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-[#FFD700] text-2xl">✓</span>
                </div>
                <h3 className="font-['Bebas_Neue'] text-[#F5F5F1] text-4xl mb-4">SCRIPT RECEIVED.</h3>
                <p className="text-[#F5F5F1]/50 font-['Space_Grotesk'] text-sm">We'll be in touch within 24 hours. Roll camera.</p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
