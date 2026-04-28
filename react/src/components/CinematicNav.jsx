import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Link, useLocation } from 'react-router-dom';

const NAV_LINKS = [
  { label: 'Home', href: '/', isRoute: true },
  { label: 'About', href: '/about', isRoute: true },
  {
    label: 'Projects',
    href: '/projects',
    isRoute: true,
    children: [
      { label: 'Upcoming Projects', href: '/projects/upcoming', isRoute: true },
      { label: 'Released Projects', href: '/projects/released', isRoute: true },
    ],
  },
  {
    label: 'Services',
    href: '/services',
    isRoute: true,
    children: [
      { label: 'Film Production', href: '/services/film-production', isRoute: true },
      { label: 'Regional Film Production', href: '/services/regional-film-production', isRoute: true },
      { label: 'Documentary Films', href: '/services/documentary-films', isRoute: true },
      { label: 'Video Solution', href: '/services/video-solution', isRoute: true },
      { label: 'Video Editing', href: '/services/video-editing', isRoute: true },
      { label: 'Short Films', href: '/services/short-films', isRoute: true },
      { label: 'Ad Films', href: '/services/ad-films', isRoute: true },
    ],
  },
  { label: 'Blog', href: '#' },
  { label: 'Contact', href: '#contact' },
];

export default function CinematicNav() {
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState(null);
  const headerRef = useRef(null);
  const closeTimer = useRef(null);
  const location = useLocation();

  useEffect(() => {
    gsap.fromTo(
      headerRef.current,
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.5, delay: 4.5, ease: 'power4.out' }
    );
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : 'unset';
    return () => { document.body.style.overflow = 'unset'; };
  }, [mobileOpen]);

  useEffect(() => {
    setMobileOpen(false);
    setOpenDropdown(null);
  }, [location]);

  const handleMouseEnter = (label) => {
    clearTimeout(closeTimer.current);
    setOpenDropdown(label);
  };

  const handleMouseLeave = () => {
    closeTimer.current = setTimeout(() => setOpenDropdown(null), 150);
  };

  const isActive = (href) => {
    if (href === '/') return location.pathname === '/';
    return location.pathname.startsWith(href);
  };

  const renderNavItem = (link) => {
    if (link.isRoute) {
      return (
        <Link
          to={link.href}
          className={`flex items-center gap-1 px-4 py-2 text-[0.82rem] font-medium tracking-[0.08em] uppercase transition-colors duration-200 ${
            isActive(link.href) ? 'text-[#E50914]' : 'text-[#F5F5F1]/85 hover:text-white'
          }`}
        >
          {link.label}
          {link.children && (
            <svg className="w-3 h-3 mt-[1px] opacity-60" viewBox="0 0 10 6" fill="none">
              <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          )}
        </Link>
      );
    }
    return (
      <a
        href={link.href}
        className="flex items-center gap-1 px-4 py-2 text-[0.82rem] font-medium tracking-[0.08em] text-[#F5F5F1]/85 hover:text-white uppercase transition-colors duration-200"
      >
        {link.label}
        {link.children && (
          <svg className="w-3 h-3 mt-[1px] opacity-60" viewBox="0 0 10 6" fill="none">
            <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        )}
      </a>
    );
  };

  const renderDropdownChild = (child) => {
    if (child.isRoute) {
      return (
        <Link
          key={child.label}
          to={child.href}
          className="block px-5 py-[10px] text-[0.78rem] tracking-[0.05em] text-[#F5F5F1]/75 hover:text-white hover:bg-[#E50914]/10 hover:pl-7 border-b border-white/5 last:border-0 transition-all duration-200"
        >
          {child.label}
        </Link>
      );
    }
    return (
      <a
        key={child.label}
        href={child.href}
        className="block px-5 py-[10px] text-[0.78rem] tracking-[0.05em] text-[#F5F5F1]/75 hover:text-white hover:bg-[#E50914]/10 hover:pl-7 border-b border-white/5 last:border-0 transition-all duration-200"
      >
        {child.label}
      </a>
    );
  };

  return (
    <>
      <header
        ref={headerRef}
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
          scrolled
            ? 'bg-black/90 backdrop-blur-md shadow-lg shadow-black/30'
            : 'bg-black/70 backdrop-blur-sm'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-10 flex items-center justify-between h-[72px]">

          {/* Logo */}
          <Link to="/" className="flex items-center flex-shrink-0">
            <img src="/logo.png" alt="Barunaha" className="h-12 md:h-14 w-auto object-contain" />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => link.children && handleMouseEnter(link.label)}
                onMouseLeave={link.children ? handleMouseLeave : undefined}
              >
                {renderNavItem(link)}

                {/* Dropdown */}
                {link.children && (
                  <div
                    className={`absolute top-full left-0 min-w-[220px] bg-[#0f0f0f] border border-white/10 shadow-xl transition-all duration-200 origin-top ${
                      openDropdown === link.label
                        ? 'opacity-100 translate-y-0 pointer-events-auto'
                        : 'opacity-0 -translate-y-2 pointer-events-none'
                    }`}
                    onMouseEnter={() => handleMouseEnter(link.label)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <div className="h-[2px] w-full bg-[#E50914]" />
                    {link.children.map(renderDropdownChild)}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Button */}
          <a
            href="#contact"
            className="hidden lg:inline-flex items-center gap-2 px-5 py-[9px] bg-[#E50914] hover:bg-[#c0060f] text-white text-[0.78rem] font-semibold tracking-[0.1em] uppercase transition-colors duration-200"
          >
            Let's Talk
          </a>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden flex flex-col justify-center items-end w-10 h-10 gap-[5px]"
            aria-label="Toggle menu"
          >
            <span className={`h-[2px] bg-white transition-all duration-300 ${mobileOpen ? 'w-7 rotate-45 translate-y-[7px]' : 'w-7'}`} />
            <span className={`h-[2px] bg-white transition-all duration-300 ${mobileOpen ? 'opacity-0 w-0' : 'w-5'}`} />
            <span className={`h-[2px] bg-white transition-all duration-300 ${mobileOpen ? 'w-7 -rotate-45 -translate-y-[7px]' : 'w-7'}`} />
          </button>
        </div>

        {/* Red bottom accent line */}
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-[#E50914]/50 to-transparent" />
      </header>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-[90] bg-[#070707] transition-opacity duration-400 overflow-y-auto ${
          mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        style={{ paddingTop: '80px' }}
      >
        <nav className="flex flex-col px-6 py-6 gap-1">
          {NAV_LINKS.map((link) => (
            <div key={link.label}>
              {link.children ? (
                <>
                  <button
                    onClick={() => setMobileExpanded(mobileExpanded === link.label ? null : link.label)}
                    className="w-full flex items-center justify-between py-3 border-b border-white/10 text-[#F5F5F1]/80 text-sm font-medium tracking-[0.1em] uppercase"
                  >
                    {link.label}
                    <svg
                      className={`w-4 h-4 transition-transform duration-300 ${mobileExpanded === link.label ? 'rotate-180' : ''}`}
                      viewBox="0 0 10 6" fill="none"
                    >
                      <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                  {mobileExpanded === link.label && (
                    <div className="pl-4 flex flex-col gap-1 py-2">
                      {link.children.map((child) =>
                        child.isRoute ? (
                          <Link
                            key={child.label}
                            to={child.href}
                            onClick={() => setMobileOpen(false)}
                            className="py-2 text-[0.78rem] text-[#F5F5F1]/60 hover:text-[#E50914] tracking-[0.05em]"
                          >
                            {child.label}
                          </Link>
                        ) : (
                          <a
                            key={child.label}
                            href={child.href}
                            onClick={() => setMobileOpen(false)}
                            className="py-2 text-[0.78rem] text-[#F5F5F1]/60 hover:text-[#E50914] tracking-[0.05em]"
                          >
                            {child.label}
                          </a>
                        )
                      )}
                    </div>
                  )}
                </>
              ) : link.isRoute ? (
                <Link
                  to={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`block py-3 border-b border-white/10 text-sm font-medium tracking-[0.1em] uppercase transition-colors duration-200 ${
                    isActive(link.href) ? 'text-[#E50914]' : 'text-[#F5F5F1]/80 hover:text-white'
                  }`}
                >
                  {link.label}
                </Link>
              ) : (
                <a
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block py-3 border-b border-white/10 text-[#F5F5F1]/80 hover:text-white text-sm font-medium tracking-[0.1em] uppercase transition-colors duration-200"
                >
                  {link.label}
                </a>
              )}
            </div>
          ))}
          <a
            href="#contact"
            onClick={() => setMobileOpen(false)}
            className="mt-6 inline-flex items-center justify-center px-6 py-3 bg-[#E50914] text-white text-sm font-semibold tracking-[0.1em] uppercase"
          >
            Let's Talk
          </a>
        </nav>
      </div>
    </>
  );
}