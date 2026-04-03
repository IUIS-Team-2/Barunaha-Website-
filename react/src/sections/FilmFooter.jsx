import { motion } from 'framer-motion';

const SOCIALS = [
  { label: 'Instagram', href: '#' },
  { label: 'Vimeo',     href: '#' },
  { label: 'YouTube',   href: '#' },
  { label: 'LinkedIn',  href: '#' },
];

export default function FilmFooter() {
  return (
    <footer id="footer" className="relative bg-[#000000] pt-20 pb-0 border-t border-[#F5F5F1]/05 overflow-hidden">
      {/* Red top accent line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#E50914]/40 to-transparent" />

      <div className="max-w-5xl mx-auto px-8 text-center">
        {/* Logo */}
        <motion.div
          className="flex justify-center mb-8"
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }} viewport={{ once: true }}
        >
          <img src="/logo.png" alt="Barunaha" className="h-14 w-auto object-contain opacity-80" />
        </motion.div>

        {/* Studio name */}
        <motion.h3
          className="font-['Bebas_Neue'] text-[#F5F5F1]/25 text-xl tracking-[0.5em] mb-8"
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.2 }} viewport={{ once: true }}
        >
          BARUNAHA PRODUCTIONS
        </motion.h3>

        {/* Divider */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="h-px w-20 bg-gradient-to-r from-transparent to-[#E50914]/30" />
          <div className="w-1 h-1 rounded-full bg-[#E50914]/40" />
          <div className="h-px w-20 bg-gradient-to-l from-transparent to-[#E50914]/30" />
        </div>

        {/* Social Links */}
        <motion.div
          className="flex items-center justify-center gap-10 mb-12"
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.3 }} viewport={{ once: true }}
        >
          {SOCIALS.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="eyebrow text-[#F5F5F1]/30 hover:text-[#E50914] transition-colors duration-300 text-[0.65rem] tracking-[0.25em]"
            >
              {label}
            </a>
          ))}
        </motion.div>

        {/* Copyright */}
        <motion.p
          className="eyebrow text-[#F5F5F1]/15 text-[0.58rem] tracking-[0.3em] mb-16"
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.4 }} viewport={{ once: true }}
        >
          © 2026 BARUNAHA PRODUCTIONS. ALL RIGHTS RESERVED. MUMBAI · INDIA.
        </motion.p>
      </div>

      {/* FINAL FADE TO BLACK CURTAIN */}
      <div
        className="relative w-full flex items-center justify-center pb-10"
        style={{ background: 'linear-gradient(to bottom, transparent, #000000 90%)' }}
      >
        <motion.p
          className="eyebrow text-[#F5F5F1]/10 text-[0.6rem] tracking-[0.55em] pb-8"
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1.5, delay: 0.5 }} viewport={{ once: true }}
        >
          — THE END —
        </motion.p>
      </div>

      {/* Full black bottom bar */}
      <div className="h-12 bg-black" />
    </footer>
  );
}
