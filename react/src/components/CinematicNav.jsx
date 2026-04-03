import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

const NAV_LINKS = [
  { label: 'Work',    href: '#now-showing' },
  { label: 'Process', href: '#behind-scenes' },
  { label: 'Archive', href: '#film-archive' },
  { label: 'Team',    href: '#cast-crew' },
  { label: 'Contact', href: '#contact' },
];

export default function CinematicNav() {
  const navRef = useRef(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    gsap.from(navRef.current, { y: -60, opacity: 0, duration: 1, delay: 0.3, ease: 'power3.out' });

    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      ref={navRef}
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 md:px-14 py-5 transition-all duration-500 ${
        scrolled ? 'bg-black/80 backdrop-blur-md border-b border-[#E50914]/15' : 'bg-transparent'
      }`}
    >
      {/* Logo */}
      <a href="#" className="flex items-center gap-3 group">
        <img src="/logo.png" alt="Barunaha" className="h-8 w-auto object-contain opacity-90 group-hover:opacity-100 transition-opacity" />
        <span
          className="hidden sm:block text-[#F5F5F1] font-['Bebas_Neue'] text-xl tracking-widest"
          style={{ letterSpacing: '0.18em' }}
        >
          BARUNAHA
        </span>
      </a>

      {/* Links */}
      <div className="hidden md:flex items-center gap-9">
        {NAV_LINKS.map(({ label, href }) => (
          <a
            key={label}
            href={href}
            className="text-[#F5F5F1]/60 hover:text-[#F5F5F1] text-xs font-['Space_Grotesk'] font-semibold tracking-[0.22em] uppercase transition-colors duration-300 relative group"
          >
            {label}
            <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#E50914] transition-all duration-300 group-hover:w-full" />
          </a>
        ))}
      </div>

      {/* CTA */}
      <a
        href="#contact"
        className="hidden sm:block projector-btn text-xs"
        style={{ padding: '10px 28px' }}
      >
        <span>Start a Project</span>
      </a>
    </nav>
  );
}
