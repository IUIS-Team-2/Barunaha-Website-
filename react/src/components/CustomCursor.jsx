import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    const dot  = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    gsap.set([dot, ring], { xPercent: -50, yPercent: -50 });

    const xDot  = gsap.quickTo(dot,  'x', { duration: 0.08, ease: 'power3.out' });
    const yDot  = gsap.quickTo(dot,  'y', { duration: 0.08, ease: 'power3.out' });
    const xRing = gsap.quickTo(ring, 'x', { duration: 0.38, ease: 'power3.out' });
    const yRing = gsap.quickTo(ring, 'y', { duration: 0.38, ease: 'power3.out' });

    const move = (e) => { xDot(e.clientX); yDot(e.clientY); xRing(e.clientX); yRing(e.clientY); };

    const onEnter = () => {
      gsap.to(ring, { scale: 2.4, borderColor: 'rgba(229,9,20,0.9)', duration: 0.3 });
      gsap.to(dot,  { scale: 0.4, duration: 0.3 });
    };
    const onLeave = () => {
      gsap.to(ring, { scale: 1, borderColor: 'rgba(229,9,20,0.55)', duration: 0.3 });
      gsap.to(dot,  { scale: 1, duration: 0.3 });
    };

    window.addEventListener('mousemove', move);

    // Attach hover listeners (delayed to allow DOM render)
    const timer = setTimeout(() => {
      document.querySelectorAll('a, button, [data-hover]').forEach(el => {
        el.addEventListener('mouseenter', onEnter);
        el.addEventListener('mouseleave', onLeave);
      });
    }, 800);

    return () => {
      window.removeEventListener('mousemove', move);
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
      <div ref={dotRef}  className="cinema-cursor-dot"  />
      <div ref={ringRef} className="cinema-cursor-ring" />
    </>
  );
}
