import { motion } from 'framer-motion';

const SERVICES = [
  { label: 'Film Production', href: '#' },
  { label: 'Regional Film Production', href: '#' },
  { label: 'Documentary Films', href: '#' },
  { label: 'Video Solution', href: '#' },
  { label: 'Video Editing', href: '#' },
  { label: 'Short Films', href: '#' },
  { label: 'Ad Films', href: '#' },
];

const USEFUL_LINKS = [
  { label: 'About Us', href: '#about' },
  { label: 'Our Team', href: '#' },
  { label: 'Payment Plans', href: '#' },
  { label: 'Contact Us', href: '#contact' },
  { label: 'Refund Policy', href: '#' },
  { label: 'Terms & Condition', href: '#' },
  { label: 'Careers', href: '#' },
];

const INSTAGRAM_IMAGES = [
  'https://www.barunaha.com/assets/images/gallery/footer-widget-gallery-img-7.jpg',
  'https://www.barunaha.com/assets/images/gallery/footer-widget-gallery-img-8.jpg',
  'https://www.barunaha.com/assets/images/gallery/footer-widget-gallery-img-9.jpg',
  'https://www.barunaha.com/assets/images/gallery/footer-widget-gallery-img-10.jpg',
  'https://www.barunaha.com/assets/images/gallery/footer-widget-gallery-img-11.jpg',
  'https://www.barunaha.com/assets/images/gallery/footer-widget-gallery-img-12.jpg',
];

const BOTTOM_LINKS = ['Faq', 'Careers', 'T&C'];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] },
  }),
};

export default function FilmFooter() {
  return (
    <footer id="footer" className="relative bg-[#0a0a0a] border-t border-white/10 overflow-hidden">

      {/* ── MAIN FOOTER BODY ── */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* Col 1 – Brand */}
        <motion.div
          variants={fadeUp} initial="hidden" whileInView="visible" custom={0} viewport={{ once: true }}
        >
          <a href="#" className="inline-block mb-4">
            <img src="/logo.png" alt="Barunaha" className="h-14 w-auto object-contain" />
          </a>
          <p className="text-[#F5F5F1]/55 text-[0.82rem] leading-relaxed mb-5">
            Barunaha Entertainment is proud to be part of the new wave of filmmakers shaping the future of cinema.
          </p>
          <div className="flex flex-col gap-2 mb-5">
            <div className="flex items-center gap-2 text-[0.8rem] text-[#F5F5F1]/60">
              <svg className="w-3.5 h-3.5 text-[#E50914] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
              </svg>
              A - 60, Sector - 2, Noida, UP
            </div>
            <a href="mailto:info@barunaha.com" className="flex items-center gap-2 text-[0.8rem] text-[#F5F5F1]/60 hover:text-[#E50914] transition-colors duration-200">
              <svg className="w-3.5 h-3.5 text-[#E50914] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
              </svg>
              info@barunaha.com
            </a>
            <a href="tel:9311232540" className="flex items-center gap-2 text-[0.8rem] text-[#F5F5F1]/60 hover:text-[#E50914] transition-colors duration-200">
              <svg className="w-3.5 h-3.5 text-[#E50914] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
              </svg>
              +91 931 123 2540
            </a>
          </div>
          {/* Social icons */}
          <div className="flex items-center gap-3">
            {[
              { label: 'Facebook', path: 'M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z' },
              { label: 'Instagram', path: 'M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01M6.5 6.5h11a1 1 0 011 1v9a1 1 0 01-1 1h-11a1 1 0 01-1-1v-9a1 1 0 011-1z' },
              { label: 'YouTube', path: 'M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 00-1.95 1.96A29 29 0 001 12a29 29 0 00.46 5.58A2.78 2.78 0 003.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 001.95-1.95A29 29 0 0023 12a29 29 0 00-.46-5.58zM9.75 15.02V8.98L15.5 12l-5.75 3.02z' },
              { label: 'LinkedIn', path: 'M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z M4 6a2 2 0 100-4 2 2 0 000 4z' },
            ].map(({ label, path }) => (
              <a
                key={label}
                href="#"
                aria-label={label}
                className="w-8 h-8 rounded-full border border-white/15 flex items-center justify-center text-[#F5F5F1]/50 hover:border-[#E50914] hover:text-[#E50914] transition-colors duration-200"
              >
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                  <path strokeLinecap="round" strokeLinejoin="round" d={path} />
                </svg>
              </a>
            ))}
          </div>
        </motion.div>

        {/* Col 2 – Services */}
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" custom={1} viewport={{ once: true }}>
          <h4 className="text-white text-[0.88rem] font-semibold tracking-[0.12em] uppercase mb-5 pb-3 border-b border-white/10 relative">
            Services
            <span className="absolute bottom-0 left-0 w-8 h-[2px] bg-[#E50914]" />
          </h4>
          <ul className="flex flex-col gap-2">
            {SERVICES.map(({ label, href }) => (
              <li key={label}>
                <a
                  href={href}
                  className="flex items-center gap-2 text-[0.8rem] text-[#F5F5F1]/55 hover:text-[#E50914] hover:gap-3 transition-all duration-200"
                >
                  <span className="w-1 h-1 rounded-full bg-[#E50914]/60 flex-shrink-0" />
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Col 3 – Useful Links */}
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" custom={2} viewport={{ once: true }}>
          <h4 className="text-white text-[0.88rem] font-semibold tracking-[0.12em] uppercase mb-5 pb-3 border-b border-white/10 relative">
            Useful Links
            <span className="absolute bottom-0 left-0 w-8 h-[2px] bg-[#E50914]" />
          </h4>
          <ul className="flex flex-col gap-2">
            {USEFUL_LINKS.map(({ label, href }) => (
              <li key={label}>
                <a
                  href={href}
                  className="flex items-center gap-2 text-[0.8rem] text-[#F5F5F1]/55 hover:text-[#E50914] hover:gap-3 transition-all duration-200"
                >
                  <span className="w-1 h-1 rounded-full bg-[#E50914]/60 flex-shrink-0" />
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Col 4 – Instagram Gallery */}
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" custom={3} viewport={{ once: true }}>
          <h4 className="text-white text-[0.88rem] font-semibold tracking-[0.12em] uppercase mb-5 pb-3 border-b border-white/10 relative">
            Instagram @barunaha
            <span className="absolute bottom-0 left-0 w-8 h-[2px] bg-[#E50914]" />
          </h4>
          <div className="grid grid-cols-3 gap-1.5">
            {INSTAGRAM_IMAGES.map((src, i) => (
              <a
                key={i}
                href="https://instagram.com/barunaha"
                target="_blank"
                rel="noopener noreferrer"
                className="relative aspect-square overflow-hidden group"
              >
                <img
                  src={src}
                  alt={`Instagram ${i + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  onError={(e) => { e.target.style.background = '#1a1a1a'; e.target.style.display = 'block'; }}
                />
                <div className="absolute inset-0 bg-[#E50914]/0 group-hover:bg-[#E50914]/30 transition-colors duration-300 flex items-center justify-center">
                  <svg className="w-4 h-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
                  </svg>
                </div>
              </a>
            ))}
          </div>
        </motion.div>
      </div>

      {/* ── BOTTOM BAR ── */}
      <div className="border-t border-white/10 bg-[#060606]">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[0.74rem] text-[#F5F5F1]/35 tracking-[0.05em]">
            Copyright &amp; Design By{' '}
            <a href="#" className="text-[#E50914]/70 hover:text-[#E50914] transition-colors duration-200">
              @Barunaha Entertainment
            </a>{' '}
            - 2022
          </p>
          <div className="flex items-center gap-4">
            {BOTTOM_LINKS.map((label, i) => (
              <a
                key={label}
                href="#"
                className="text-[0.74rem] text-[#F5F5F1]/35 hover:text-[#E50914] tracking-[0.05em] transition-colors duration-200"
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
