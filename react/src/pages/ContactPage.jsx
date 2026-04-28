import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const CONTACT_INFO = [
  {
    label: 'Address',
    value: 'A - 60, Sector - 2 Noida, UP',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" stroke="#E50914" strokeWidth="1.5" fill="none"/>
        <circle cx="12" cy="9" r="2.5" stroke="#E50914" strokeWidth="1.5" fill="none"/>
      </svg>
    ),
  },
  {
    label: 'Email',
    value: 'info@barunaha.com',
    href: 'mailto:info@barunaha.com',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <rect x="2" y="5" width="20" height="14" rx="2" stroke="#E50914" strokeWidth="1.5" fill="none"/>
        <path d="M2 7l10 7 10-7" stroke="#E50914" strokeWidth="1.5"/>
      </svg>
    ),
  },
  {
    label: 'Phone',
    value: '+91 931 123 2540',
    href: 'tel:+919311232540',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" stroke="#E50914" strokeWidth="1.5" fill="none"/>
      </svg>
    ),
  },
  {
    label: 'Instagram',
    value: '@barunaha',
    href: 'https://instagram.com/barunaha',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <rect x="2" y="2" width="20" height="20" rx="5" stroke="#E50914" strokeWidth="1.5" fill="none"/>
        <circle cx="12" cy="12" r="5" stroke="#E50914" strokeWidth="1.5" fill="none"/>
        <circle cx="17.5" cy="6.5" r="1" fill="#E50914"/>
      </svg>
    ),
  },
];

const SOCIAL_LINKS = [
  { label: 'Facebook', href: '#', icon: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinejoin="round"/>
    </svg>
  )},
  { label: 'Twitter', href: '#', icon: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinejoin="round"/>
    </svg>
  )},
  { label: 'Behance', href: '#', icon: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path d="M1 6h8c2 0 4 1 4 3.5S11 13 9 13H1V6z" stroke="currentColor" strokeWidth="1.5" fill="none"/>
      <path d="M1 13h9c2.5 0 4.5 1.5 4.5 4S12.5 21 10 21H1V13z" stroke="currentColor" strokeWidth="1.5" fill="none"/>
      <path d="M17 9h6M17 15c0-2.5 1.5-4 3-4s3 1.5 3 4H17z" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
    </svg>
  )},
  { label: 'YouTube', href: '#', icon: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 001.46 6.42 29 29 0 001 12a29 29 0 00.46 5.58 2.78 2.78 0 001.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 001.95-1.96A29 29 0 0023 12a29 29 0 00-.46-5.58z" stroke="currentColor" strokeWidth="1.5" fill="none"/>
      <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinejoin="round"/>
    </svg>
  )},
  { label: 'LinkedIn', href: '#', icon: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinejoin="round"/>
      <rect x="2" y="9" width="4" height="12" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinejoin="round"/>
      <circle cx="4" cy="4" r="2" stroke="currentColor" strokeWidth="1.5" fill="none"/>
    </svg>
  )},
];

export default function ContactPage() {
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const formRef = useRef(null);
  const infoRef = useRef(null);

  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);

    gsap.fromTo(titleRef.current,
      { y: 80, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2, ease: 'power4.out', delay: 0.2 }
    );

    gsap.fromTo(formRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: 'power3.out',
        scrollTrigger: { trigger: formRef.current, start: 'top 80%' } }
    );

    gsap.fromTo(
      infoRef.current?.querySelectorAll('.info-item'),
      { x: 30, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.7, stagger: 0.12, ease: 'power3.out',
        scrollTrigger: { trigger: infoRef.current, start: 'top 80%' } }
    );

    return () => ScrollTrigger.getAll().forEach(t => t.kill());
  }, []);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="bg-[#0B0B0B] text-[#F5F5F1] overflow-x-hidden min-h-screen">

      {/* ── HERO ── */}
      <section
        ref={heroRef}
        className="relative min-h-[55vh] flex flex-col justify-end px-6 md:px-16 pb-16 pt-40"
      >
        <div className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `
              linear-gradient(rgba(229,9,20,0.04) 1px, transparent 1px),
              linear-gradient(90deg, rgba(229,9,20,0.04) 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px'
          }}
        />
        <div className="absolute top-0 right-0 w-[500px] h-[400px] pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at top right, rgba(229,9,20,0.07) 0%, transparent 65%)' }}
        />

        <p className="eyebrow text-[#E50914] mb-6 tracking-[0.6em] text-xs">— Get in Touch</p>

        <div ref={titleRef}>
          <h1 className="section-heading text-[#F5F5F1] leading-none">
            Let's Start a<br />
            <span style={{
              background: 'linear-gradient(135deg, #E50914 0%, #ff4d4d 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              Conversation
            </span>
          </h1>
        </div>

        <div className="mt-8 h-[1px] w-32 bg-[#E50914]" />
        <p className="mt-6 max-w-lg text-[#F5F5F1]/55 text-base md:text-lg leading-relaxed font-light">
          Have a story to tell? A project in mind? Reach out and let's create
          something cinematic together.
        </p>
      </section>

      {/* ── MAIN CONTENT ── */}
      <section className="px-6 md:px-16 py-20 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-[1fr_420px] gap-16 items-start">

          {/* ── FORM ── */}
          <div ref={formRef}>
            {submitted ? (
              <div className="border border-[#E50914]/30 p-16 text-center relative">
                <div className="absolute top-0 left-0 w-12 h-[2px] bg-[#E50914]" />
                <div className="absolute top-0 left-0 w-[2px] h-12 bg-[#E50914]" />
                <div className="absolute bottom-0 right-0 w-12 h-[2px] bg-[#E50914]" />
                <div className="absolute bottom-0 right-0 w-[2px] h-12 bg-[#E50914]" />
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" className="mx-auto mb-6">
                  <circle cx="24" cy="24" r="22" stroke="#E50914" strokeWidth="1.5" fill="none"/>
                  <path d="M14 24l8 8 12-16" stroke="#E50914" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <h3 className="font-['Bebas_Neue'] text-4xl text-[#F5F5F1] mb-3">Message Sent!</h3>
                <p className="text-[#F5F5F1]/55 text-sm leading-relaxed">
                  Thank you for reaching out. We'll get back to you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-10">
                <div className="grid md:grid-cols-2 gap-10">
                  <div>
                    <label className="eyebrow text-[#F5F5F1]/30 text-[0.6rem] tracking-[0.4em] block mb-2">Your Name *</label>
                    <input
                      type="text" name="name" required
                      value={form.name} onChange={handleChange}
                      placeholder="Full Name"
                      className="cinema-input"
                    />
                  </div>
                  <div>
                    <label className="eyebrow text-[#F5F5F1]/30 text-[0.6rem] tracking-[0.4em] block mb-2">Email Address *</label>
                    <input
                      type="email" name="email" required
                      value={form.email} onChange={handleChange}
                      placeholder="you@example.com"
                      className="cinema-input"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-10">
                  <div>
                    <label className="eyebrow text-[#F5F5F1]/30 text-[0.6rem] tracking-[0.4em] block mb-2">Phone Number</label>
                    <input
                      type="tel" name="phone"
                      value={form.phone} onChange={handleChange}
                      placeholder="+91 XXXXX XXXXX"
                      className="cinema-input"
                    />
                  </div>
                  <div>
                    <label className="eyebrow text-[#F5F5F1]/30 text-[0.6rem] tracking-[0.4em] block mb-2">Subject *</label>
                    <input
                      type="text" name="subject" required
                      value={form.subject} onChange={handleChange}
                      placeholder="Film Production / Enquiry..."
                      className="cinema-input"
                    />
                  </div>
                </div>

                <div>
                  <label className="eyebrow text-[#F5F5F1]/30 text-[0.6rem] tracking-[0.4em] block mb-2">Your Message *</label>
                  <textarea
                    name="message" required rows={5}
                    value={form.message} onChange={handleChange}
                    placeholder="Tell us about your project, idea, or story..."
                    className="cinema-input resize-none"
                  />
                </div>

                <button type="submit" className="projector-btn">
                  <span>Send Message</span>
                </button>
              </form>
            )}
          </div>

          {/* ── INFO PANEL ── */}
          <div ref={infoRef} className="space-y-6">

            {/* Contact cards */}
            {CONTACT_INFO.map((item) => (
              <div key={item.label} className="info-item border border-white/10 p-6 relative group hover:border-[#E50914]/30 transition-colors duration-300">
                <div className="absolute left-0 top-0 w-[2px] h-0 bg-[#E50914] group-hover:h-full transition-all duration-400" />
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 mt-1 opacity-80">{item.icon}</div>
                  <div>
                    <p className="eyebrow text-[#F5F5F1]/30 text-[0.6rem] tracking-[0.4em] mb-1">{item.label}</p>
                    {item.href ? (
                      <a href={item.href} className="text-[#F5F5F1]/80 hover:text-[#E50914] transition-colors duration-200 text-sm font-medium">
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-[#F5F5F1]/80 text-sm font-medium">{item.value}</p>
                    )}
                  </div>
                </div>
              </div>
            ))}

            {/* Social links */}
            <div className="info-item border border-white/10 p-6">
              <p className="eyebrow text-[#F5F5F1]/30 text-[0.6rem] tracking-[0.4em] mb-5">Follow Us</p>
              <div className="flex items-center gap-4">
                {SOCIAL_LINKS.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    aria-label={s.label}
                    className="w-10 h-10 border border-white/10 flex items-center justify-center text-[#F5F5F1]/50 hover:text-[#E50914] hover:border-[#E50914]/40 transition-all duration-200"
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Map placeholder */}
            <div className="info-item border border-white/10 overflow-hidden h-48 relative">
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-[#0f0f0f]">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="opacity-40">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" stroke="#E50914" strokeWidth="1.5" fill="none"/>
                  <circle cx="12" cy="9" r="2.5" stroke="#E50914" strokeWidth="1.5" fill="none"/>
                </svg>
                <p className="text-[#F5F5F1]/30 text-xs tracking-[0.3em] uppercase">A-60, Sector-2, Noida, UP</p>
                <a
                  href="https://maps.google.com/?q=Sector+2+Noida+UP"
                  target="_blank" rel="noopener noreferrer"
                  className="text-[#E50914] text-xs tracking-[0.2em] uppercase hover:underline"
                >
                  Open in Maps →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── BOTTOM STRIP ── */}
      <section className="px-6 md:px-16 py-16 max-w-7xl mx-auto border-t border-white/10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-[#F5F5F1]/30 text-xs tracking-[0.3em] uppercase">
            © 2026 Barunaha Entertainment. All rights reserved.
          </p>
          <p className="font-['Bebas_Neue'] text-lg text-[#E50914]/60 tracking-widest">
            Every Frame Matters.
          </p>
        </div>
      </section>
    </main>
  );
}