import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import HeroPage from './HeroPage';
import Portfolio from './Portfolio'; // <-- Added Portfolio Import

export default function Hero() {
  const comp = useRef();

  useEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline();

      // INITIAL SETUP
      gsap.set('.scene', { display: 'none', opacity: 0 });
      gsap.set('.clapper-arm', { rotationZ: -35 }); 
      gsap.set('.film-strip-wrapper', { display: 'none', x: '100vw', opacity: 0 });

      // ==========================================
      // SCENE 1: LIGHTS (Red lights, fixed black strip)
      // ==========================================
      tl.set('.scene-lights', { display: 'flex', opacity: 1 })
        // Red cinema lights snap on softly
        .to('.cinema-light', { opacity: 0.6, duration: 0.2 })
        // Soft cinematic fade in
        .from('.letter-light', { 
          y: 40, 
          opacity: 0,
          filter: 'blur(8px)',
          duration: 1.0, 
          stagger: 0.1, 
          ease: 'power3.out' 
        }, "<0.1")
        // Dust shockwave
        .to('.dust-ring', {
          scale: 4,
          opacity: 0,
          duration: 0.4,
          stagger: 0.1,
          ease: 'power2.out'
        }, "<0.3")
        // Hold on screen slightly longer
        .to('.scene-lights', { opacity: 0, duration: 0.15 }, "+=0.3");

      // ==========================================
      // SCENE 2: CAMERA (Perfectly centered, +0.5s longer)
      // ==========================================
      tl.set('.scene-camera', { display: 'flex', opacity: 1 })
        // Camera icon rushes in
        .from('.cam-icon', { scale: 0, opacity: 0, duration: 0.5, ease: 'back.out(1.5)' })
        // Letters stagger drop ON TOP of the camera
        .from('.letter-cam', { 
          y: '-100vh', 
          opacity: 0,
          duration: 0.5, 
          stagger: 0.08, 
          ease: 'power3.out' 
        }, "<0.1")
        // Camera fades back so text is totally clear
        .to('.cam-icon', { 
          scale: 0.7, 
          opacity: 0.1, 
          filter: 'blur(10px)', 
          duration: 0.8, 
          ease: 'power2.out' 
        }, "<0.4")
        // Extended hold time
        .to('.scene-camera', { opacity: 0, duration: 0.2 }, "+=0.7");

      // ==========================================
      // SCENE 3: ACTION *THEN* CLAPBOARD
      // ==========================================
      tl.set('.scene-action', { display: 'flex', opacity: 1 })
        // First, "ACTION" slams in
        .from('.letter-action', { scale: 4, opacity: 0, duration: 0.4, ease: 'power4.out' })
        
        // Wait a fraction of a second, then drop the clapperboard
        .from('.clapboard', { y: '-100vh', rotationZ: 15, opacity: 0, duration: 0.6, ease: 'power3.out' }, "+=0.2")
        
        // Pause for impact, THEN Snap
        .to('.clapper-arm', { rotationZ: 0, duration: 0.12, ease: 'power4.in' }, "+=0.4");

      // ==========================================
      // SCENE 4: FILM REEL SLIDE & ZOOM
      // ==========================================
      tl.set('.flash-screen', { opacity: 1 })
        .set('.scene-action', { display: 'none' }) 
        .set('.film-strip-wrapper', { display: 'flex', opacity: 1 }) 
        
        // Fade flash
        .to('.flash-screen', { opacity: 0, duration: 0.2 })
        
        // Film reel violently slides in
        .to('.film-strip-wrapper', { x: '0', duration: 0.9, ease: 'expo.out' }, "<")
        
        // Zoom massively through the frame (Smoother, deeper zoom)
        .to('.film-strip-wrapper', { scale: 50, opacity: 0, duration: 1.4, ease: 'power3.inOut' }, "+=0.6")
        
        // Fade in the Hero Site underneath
        .from('.hero-content', { opacity: 0, duration: 1.2, ease: 'power2.inOut' }, "-=0.8")
        
        // CRITICAL: Hide the intro wrapper so it doesn't block scrolling/clicking
        .set('.intro-wrapper', { display: 'none' });

    }, comp);

    return () => ctx.revert();
  }, []);

  const splitText = (text, className, gradientClass = "text-white") => {
    return text.split('').map((char, i) => (
      <div key={i} className="relative inline-block">
        <span className={`${className} inline-block ${gradientClass}`}>{char}</span>
        {className === 'letter-light' && (
          <>
            <div className="dust-ring absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-4 bg-white/30 rounded-[100%] blur-sm scale-0 pointer-events-none"></div>
            {/* per-letter halo glow */}
            <div className="absolute inset-0 blur-2xl opacity-60 pointer-events-none" style={{background: 'radial-gradient(ellipse at 50% 80%, rgba(251,191,36,0.6), transparent 70%)'}}></div>
          </>
        )}
        {className === 'letter-cam' && (
          <div className="absolute inset-0 blur-2xl opacity-50 pointer-events-none" style={{background: 'radial-gradient(ellipse at 50% 80%, rgba(0,229,255,0.5), transparent 70%)'}}></div>
        )}
      </div>
    ));
  };

  return (
    // 1. UPDATED ROOT: min-h-screen and overflow-x-hidden unlocks scrolling!
    <div ref={comp} className="relative w-full min-h-screen bg-black overflow-x-hidden font-sans select-none text-white">
      
      {/* ------------------------------------------- */}
      {/* INTRO SEQUENCES WRAPPER                     */}
      {/* ------------------------------------------- */}
      {/* 2. UPDATED WRAPPER: Changed to 'fixed' so it stays glued to screen during animation */}
      <div className="intro-wrapper fixed inset-0 z-50 flex items-center justify-center pointer-events-none">
        
        {/* SCENE 1: LIGHTS — Cinematic Overhaul */}
        <div className="scene scene-lights absolute inset-0 flex flex-col items-center justify-center overflow-hidden bg-[#020005]">

          {/* Film grain overlay */}
          <div className="absolute inset-0 opacity-[0.08] pointer-events-none" style={{backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\'/%3E%3C/svg%3E")', backgroundSize: '256px 256px'}}></div>

          {/* Dramatic spotlight beams from top */}
          <div className="cinema-light absolute top-0 left-[15%] w-[30vw] h-[110vh] opacity-0 pointer-events-none" style={{background: 'linear-gradient(180deg, rgba(255,180,0,0.25) 0%, transparent 100%)', clipPath: 'polygon(20% 0%, 80% 0%, 100% 100%, 0% 100%)', filter: 'blur(8px)'}}></div>
          <div className="cinema-light absolute top-0 right-[15%] w-[30vw] h-[110vh] opacity-0 pointer-events-none" style={{background: 'linear-gradient(180deg, rgba(229,9,20,0.2) 0%, transparent 100%)', clipPath: 'polygon(20% 0%, 80% 0%, 100% 100%, 0% 100%)', filter: 'blur(8px)'}}></div>
          <div className="cinema-light absolute top-0 left-1/2 -translate-x-1/2 w-[20vw] h-[110vh] opacity-0 pointer-events-none" style={{background: 'linear-gradient(180deg, rgba(255,220,100,0.3) 0%, transparent 80%)', clipPath: 'polygon(30% 0%, 70% 0%, 90% 100%, 10% 100%)', filter: 'blur(6px)'}}></div>

          {/* Horizon glow line */}
          <div className="absolute bottom-[30%] left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-400/40 to-transparent"></div>

          {/* Floating spark particles */}
          <div className="absolute top-[20%] left-[10%] w-1 h-1 bg-amber-300 rounded-full blur-[2px] animate-ping" style={{animationDuration:'2.3s'}}></div>
          <div className="absolute top-[60%] left-[25%] w-1 h-1 bg-orange-400 rounded-full blur-[2px] animate-ping" style={{animationDuration:'1.7s', animationDelay:'0.5s'}}></div>
          <div className="absolute top-[35%] right-[15%] w-1.5 h-1.5 bg-yellow-200 rounded-full blur-[2px] animate-ping" style={{animationDuration:'2.8s', animationDelay:'0.9s'}}></div>
          <div className="absolute top-[70%] right-[30%] w-1 h-1 bg-rose-400 rounded-full blur-[2px] animate-ping" style={{animationDuration:'1.9s', animationDelay:'0.2s'}}></div>

          {/* Corner frame decorations */}
          <div className="absolute top-8 left-8 w-12 h-12 border-t-2 border-l-2 border-amber-400/50"></div>
          <div className="absolute top-8 right-8 w-12 h-12 border-t-2 border-r-2 border-amber-400/50"></div>
          <div className="absolute bottom-8 left-8 w-12 h-12 border-b-2 border-l-2 border-amber-400/50"></div>
          <div className="absolute bottom-8 right-8 w-12 h-12 border-b-2 border-r-2 border-amber-400/50"></div>

          {/* Tagline above */}
          <p className="z-10 text-amber-400/70 tracking-[0.5em] text-xs uppercase mb-4" style={{fontFamily: "'Space Grotesk', sans-serif", letterSpacing: '0.4em'}}>— SCENE ONE —</p>

          {/* MAIN TEXT: Bebas Neue, fire gradient, glowing */}
          <h1
            className="z-10 relative leading-none uppercase select-none drop-shadow-[0_0_40px_rgba(251,191,36,0.4)]"
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: 'clamp(50px, 14vw, 180px)',
            }}
          >
            {splitText("LIGHTS", "letter-light", "bg-gradient-to-b from-[#fffbe6] via-[#fbbf24] to-[#f97316] bg-clip-text text-transparent")}
          </h1>

          {/* Subtitle line */}
          <p className="z-10 mt-4 text-amber-200/40 tracking-[0.8em] text-xs uppercase" style={{fontFamily: "'Space Grotesk', sans-serif"}}>BARUNAHA PRODUCTIONS</p>
        </div>

        {/* SCENE 2: CAMERA — Soft Minimalist Aesthetic */}
        <div className="scene scene-camera absolute inset-0 flex items-center justify-center overflow-hidden bg-[#08080a]">
          
          {/* Soft ambient background glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] rounded-full opacity-40 pointer-events-none" style={{background: 'radial-gradient(circle, rgba(220,225,235,0.08) 0%, transparent 60%)', filter: 'blur(60px)'}}></div>

          {/* Minimal corner framing */}
          <div className="absolute top-10 left-10 w-8 h-8 border-t border-l border-white/10"></div>
          <div className="absolute top-10 right-10 w-8 h-8 border-t border-r border-white/10"></div>
          <div className="absolute bottom-10 left-10 w-8 h-8 border-b border-l border-white/10"></div>
          <div className="absolute bottom-10 right-10 w-8 h-8 border-b border-r border-white/10"></div>

          {/* Clean minimal camera icon */}
          <div className="cam-icon absolute z-0 flex items-center justify-center w-64 h-48 bg-[#111114] rounded-2xl border border-white/5 shadow-2xl">
             <div className="absolute top-[-10px] left-1/2 -translate-x-1/2 w-20 h-3 bg-[#111114] rounded-t-lg border-t border-l border-r border-white/5"></div>
             
             {/* Central Lens */}
             <div className="relative w-32 h-32 rounded-full border border-white/5 bg-[#08080a] flex items-center justify-center shadow-[inset_0_0_20px_rgba(255,255,255,0.01)]">
                <div className="w-24 h-24 rounded-full border border-white/10 flex items-center justify-center">
                   <div className="w-12 h-12 rounded-full bg-gradient-to-br from-white/10 to-transparent flex items-center justify-center border border-white/5 relative">
                      {/* Subtle lens flare reflection */}
                      <div className="w-3 h-3 rounded-full bg-white/20 blur-[2px] absolute top-2 left-2"></div>
                   </div>
                </div>
             </div>
             
             {/* Subtle recording dot */}
             <div className="absolute top-4 right-5 w-2 h-2 rounded-full bg-rose-500/80 shadow-[0_0_8px_rgba(244,63,94,0.4)]"></div>
          </div>

          {/* MAIN TEXT: Soft & Elegant */}
          <h1
            className="absolute z-20 leading-none select-none mix-blend-plus-lighter"
            style={{
              fontFamily: "'Cinzel', serif",
              fontSize: 'clamp(40px, 12vw, 150px)',
              letterSpacing: '0.15em',
              fontWeight: 400
            }}
          >
            {splitText("CAMERA", "letter-cam", "text-[#e0e0e5] drop-shadow-[0_4px_10px_rgba(0,0,0,0.8)]")}
          </h1>
        </div>

        {/* SCENE 3: ACTION & CLAPBOARD */}
        <div className="scene scene-action absolute inset-0 flex flex-col items-center justify-center">
          <div className="absolute top-12 left-12 flex items-center gap-3">
             <div className="w-5 h-5 bg-red-600 rounded-full animate-pulse shadow-[0_0_20px_red]"></div>
             <span className="text-red-500 font-mono text-2xl tracking-widest font-bold">REC</span>
          </div>

          <h1 
            className="absolute font-sans font-black italic tracking-tighter uppercase leading-none drop-shadow-[0_0_60px_rgba(229,9,20,1)] text-center w-full"
            style={{ fontSize: 'clamp(40px, 12vw, 160px)' }}
          >
            {splitText("ACTION", "letter-action", "bg-gradient-to-br from-[#ff7777] via-[#E50914] to-[#880000] bg-clip-text text-transparent")}
          </h1>
          
          <div className="clapboard relative z-20 w-[500px] bg-[#111] rounded-b-xl border-4 border-gray-800 shadow-[0_40px_80px_rgba(0,0,0,0.9)] overflow-visible">
            <div className="clapper-arm absolute top-[-50px] left-[-4px] w-[500px] h-[50px] bg-black border-4 border-gray-800 rounded-t-xl overflow-hidden origin-bottom-left flex">
               {[...Array(8)].map((_, i) => (
                  <div key={i} className="flex-1 h-full bg-white skew-x-[-30deg] border-r-4 border-black translate-x-[-10px]"></div>
               ))}
            </div>
            <div className="flex w-full h-[50px] bg-black overflow-hidden border-b-2 border-gray-700">
               {[...Array(8)].map((_, i) => (
                  <div key={i} className="flex-1 h-full bg-white skew-x-[-30deg] border-r-4 border-black translate-x-[-10px]"></div>
               ))}
            </div>
            <div className="p-8">
               <div className="flex justify-between text-gray-400 font-mono text-xl border-b border-gray-700 pb-2 mb-4">
                  <div>PROD: <span className="text-white">BARUNAHA</span></div>
                  <div>ROLL: <span className="text-white">01</span></div>
               </div>
               <div className="flex justify-between text-gray-400 font-mono text-xl mb-4">
                  <div>SCENE: <span className="text-white text-4xl font-bold ml-2">99</span></div>
                  <div>TAKE: <span className="text-white text-4xl font-bold ml-2">1</span></div>
               </div>
               <div className="w-full h-60 bg-black rounded-lg border border-gray-800 flex items-center justify-center overflow-hidden">
                  <img src="/logo.png" alt="Barunaha Logo" className="object-contain h-full w-[120%] scale-150" />
               </div>
            </div>
          </div>
        </div>

        {/* SCENE 4: FILM REEL TRANSITION */}
        <div className="flash-screen absolute inset-0 bg-white opacity-0 z-[100] display-none"></div>
        
        <div className="film-strip-wrapper absolute inset-0 z-[90] flex items-center justify-center pointer-events-none w-[200vw] left-[-50vw]">
          <div className="flex h-72 md:h-96 w-full bg-[#0a0a0a] border-t-[16px] border-b-[16px] border-dashed border-gray-600 gap-8 p-6 shadow-[0_0_150px_rgba(229,9,20,0.4)]">
            <div className="flex-1 border-4 border-[#E50914]/30 rounded-lg bg-black opacity-50"></div>
            <div className="flex-[2] border-4 border-[#E50914] rounded-lg bg-black flex items-center justify-center overflow-hidden p-4">
               <img src="/logo.png" alt="Barunaha Logo" className="object-contain h-full w-full" />
            </div>
            <div className="flex-1 border-4 border-[#E50914]/30 rounded-lg bg-black opacity-50"></div>
          </div>
        </div>

      </div>

      {/* ------------------------------------------- */}
      {/* MAIN CONTENT SITE (Revealed underneath)     */}
      {/* ------------------------------------------- */}
      {/* 3. UPDATED CONTENT BLOCK: Stacking HeroPage and Portfolio sequentially */}
      <div className="hero-content relative z-10 w-full flex flex-col">
        <HeroPage />
        <Portfolio />
      </div>

    </div>
  );
}