import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const NAV_LINKS = [
  { label: 'Work',    href: '#work',    bg: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=800' },
  { label: 'About',   href: '#about',   bg: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=800' },
  { label: 'Archive', href: '#archive', bg: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?q=80&w=800' },
  { label: 'Contact', href: '#contact', bg: 'https://images.unsplash.com/photo-1533488765986-dfa2a9939acd?q=80&w=800' },
];

export default function CinematicNav() {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredBg, setHoveredBg] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const headerRef = useRef(null);

  // Preload background images on mount so hover is instant
  useEffect(() => {
    NAV_LINKS.forEach(link => {
      const img = new Image();
      img.src = link.bg;
    });
  }, []);

  // Delay the navbar appearance until AFTER the intro finishes
  useEffect(() => {
    gsap.fromTo(headerRef.current, 
      { y: -100, opacity: 0 }, 
      { y: 0, opacity: 1, duration: 1.5, delay: 4.5, ease: 'power4.out' }
    );
  }, []);

  // Scroll-based glass effect for header bar
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    onScroll(); // Check on mount
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock scrolling when the menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <>
      {/* ------------------------------------------------ */}
      {/* MAIN HEADER BAR (Logo Left, Hamburger Right)     */}
      {/* ------------------------------------------------ */}
      <header 
        ref={headerRef}
        className={`fixed top-0 left-0 right-0 z-[100] flex justify-between items-center px-6 md:px-14 py-0 pointer-events-auto transition-all duration-500 ${
          scrolled && !isOpen ? 'nav-scrolled bg-black/50 backdrop-blur-md border-b border-white/5' : ''
        }`}
      >
        {/* Logo - Upgraded Size and removed redundant text */}
        <a href="#" className="flex items-center relative z-[110] drop-shadow-[0_0_15px_rgba(255,255,255,0.15)] hover:opacity-80 transition-opacity duration-300">
          <img 
            src="/logo.png" 
            alt="Barunaha" 
            className="h-16 md:h-20 w-auto object-contain" 
          />
        </a>

        {/* Hamburger Button */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="relative z-[110] flex flex-col justify-center items-end w-12 h-12 gap-[6px] group cursor-pointer"
          aria-label="Toggle menu"
        >
          <span 
            className={`h-[2px] bg-[#F5F5F1] shadow-[0_0_10px_rgba(0,0,0,0.8)] transition-all duration-500 ease-out ${
              isOpen ? 'w-8 rotate-45 translate-y-[8px]' : 'w-8 group-hover:w-10'
            }`} 
          />
          <span 
            className={`h-[2px] bg-[#F5F5F1] shadow-[0_0_10px_rgba(0,0,0,0.8)] transition-all duration-500 ease-out ${
              isOpen ? 'w-0 opacity-0' : 'w-6 group-hover:w-8'
            }`} 
          />
          <span 
            className={`h-[2px] bg-[#F5F5F1] shadow-[0_0_10px_rgba(0,0,0,0.8)] transition-all duration-500 ease-out ${
              isOpen ? 'w-8 -rotate-45 -translate-y-[8px]' : 'w-4 group-hover:w-6'
            }`} 
          />
        </button>
      </header>

      {/* ------------------------------------------------ */}
      {/* FULLSCREEN OVERLAY MENU                          */}
      {/* ------------------------------------------------ */}
      <div 
        className={`fixed inset-0 z-[90] bg-[#050505] flex items-center justify-center transition-[clip-path,opacity] duration-[800ms] ease-[cubic-bezier(0.76,0,0.24,1)] ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        style={{
           clipPath: isOpen ? 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' : 'polygon(0 0, 100% 0, 100% 0, 0 0)'
        }}
      >
        {/* Dynamic Hover Background Image */}
        <div 
          className="absolute inset-0 z-0 will-change-transform"
          style={{
            opacity: hoveredBg ? 0.35 : 0,
            backgroundImage: hoveredBg ? `url(${hoveredBg})` : 'none',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'blur(8px)',
            transform: hoveredBg ? 'scale(1) translateZ(0)' : 'scale(1.05) translateZ(0)',
            transition: 'opacity 0.6s ease, transform 0.6s ease',
          }}
        />

        {/* Deep Red Overlay */}
        <div className="absolute inset-0 z-[1] bg-[radial-gradient(circle_at_center,rgba(229,9,20,0.15)_0%,transparent_80%)] opacity-60 pointer-events-none" />

        {/* Menu Links Container */}
        <nav className="relative z-10 flex flex-col items-center justify-center w-full gap-4 md:gap-8 px-6">
          {NAV_LINKS.map((link, i) => (
            <a
              key={link.label}
              href={link.href}
              onMouseEnter={() => setHoveredBg(link.bg)}
              onMouseLeave={() => setHoveredBg(null)}
              onClick={() => setIsOpen(false)} 
              className="group relative text-5xl md:text-7xl lg:text-8xl font-['Bebas_Neue'] text-[#F5F5F1] uppercase tracking-widest overflow-hidden min-h-[56px] flex items-center"
              style={{
                animation: isOpen ? `menuItemUp 0.6s cubic-bezier(0.16,1,0.3,1) ${i * 0.08}s both` : 'none',
              }}
            >
              <div className="transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:-translate-y-full inline-block">
                {link.label}
              </div>
              <div className="absolute top-0 left-0 transition-all duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] translate-y-full group-hover:translate-y-0 text-[#E50914] w-full text-center drop-shadow-[0_0_15px_rgba(229,9,20,0.5)] group-hover:tracking-[0.3em]">
                {link.label}
              </div>
            </a>
          ))}
          <div className="absolute bottom-12 left-1/2 -translate-x-1/2 opacity-40 text-xs font-['Space_Grotesk'] tracking-[0.4em] uppercase text-[#F5F5F1]">
            Barunaha Productions
          </div>
        </nav>
      </div>

      <style>{`
        @keyframes menuItemUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </>
  );
}