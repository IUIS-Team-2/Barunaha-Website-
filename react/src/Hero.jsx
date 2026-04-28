import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import HeroPage from './HeroPage';
import Portfolio from './Portfolio'; 

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
      // SCENE 1: LIGHTS 
      // ==========================================
      tl.set('.scene-lights', { display: 'flex', opacity: 1 })
        .to('.cinema-light', { opacity: 0.6, duration: 0.2, force3D: true })
        .from('.letter-light', { 
          y: 40, 
          opacity: 0,
          duration: 1.0, 
          stagger: 0.1, 
          ease: 'power3.out',
          force3D: true 
        }, "<0.1")
        .to('.dust-ring', {
          scale: 4,
          opacity: 0,
          duration: 0.4,
          stagger: 0.1,
          ease: 'power2.out',
          force3D: true
        }, "<0.3")
        .to('.scene-lights', { opacity: 0, duration: 0.15 }, "+=0.3");

      // ==========================================
      // SCENE 2: CAMERA 
      // ==========================================
      tl.set('.scene-camera', { display: 'flex', opacity: 1 })
        .from('.cam-icon', { scale: 0.5, opacity: 0, duration: 0.3, ease: 'back.out(2)', force3D: true })
        .from('.letter-cam', { 
          y: '-50vh', 
          opacity: 0,
          duration: 0.3, 
          stagger: 0.05, 
          ease: 'power3.out',
          force3D: true 
        }, "<0.1")
        .to('.cam-icon', { 
          scale: 0.8, 
          opacity: 0.15, 
          duration: 0.5, 
          ease: 'power2.out',
          force3D: true 
        }, "<0.3")
        .to('.scene-camera', { opacity: 0, duration: 0.2 }, "+=0.3");

      // ==========================================
      // SCENE 3: ACTION *THEN* CLAPBOARD
      // ==========================================
      tl.set('.scene-action', { display: 'flex', opacity: 1 })
        .from('.letter-action', { scale: 4, opacity: 0, duration: 0.4, ease: 'power4.out', force3D: true })
        .from('.clapboard', { y: '-100vh', rotationZ: 15, opacity: 0, duration: 0.6, ease: 'power3.out', force3D: true }, "+=0.2")
        .to('.clapper-arm', { rotationZ: 0, duration: 0.12, ease: 'power4.in', force3D: true }, "+=0.4");

      // ==========================================
      // SCENE 4: FILM REEL SLIDE & ZOOM
      // ==========================================
      tl.set('.flash-screen', { opacity: 1 })
        .set('.scene-action', { display: 'none' }) 
        .set('.film-strip-wrapper', { display: 'flex', opacity: 1 }) 
        .to('.flash-screen', { opacity: 0, duration: 0.2 })
        .to('.film-strip-wrapper', { x: '0', duration: 0.9, ease: 'expo.out', force3D: true }, "<")
        .to('.film-strip-wrapper', { scale: 50, opacity: 0, duration: 1.4, ease: 'power3.inOut', force3D: true }, "+=0.6")
        .from('.hero-content', { opacity: 0, duration: 1.2, ease: 'power2.inOut', force3D: true }, "-=0.8")
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
            <div className="absolute inset-0 blur-2xl opacity-60 pointer-events-none" style={{background: 'radial-gradient(ellipse at 50% 80%, rgba(251,191,36,0.6), transparent 70%)'}}></div>
          </>
        )}
        {className === 'letter-cam' && (
          <div className="absolute inset-0 blur-3xl opacity-70 pointer-events-none" style={{background: 'radial-gradient(circle at 50% 50%, rgba(229,9,20,0.8), transparent 60%)'}}></div>
        )}
      </div>
    ));
  };

  return (
    <div ref={comp} className="relative w-full min-h-screen bg-black overflow-x-hidden font-sans select-none text-white">
      
      <div className="intro-wrapper fixed inset-0 z-50 flex items-center justify-center pointer-events-none">
        
        {/* SCENE 1: LIGHTS */}
        <div className="scene scene-lights absolute inset-0 flex flex-col items-center justify-center overflow-hidden bg-[#020005]">
          <div className="absolute inset-0 opacity-[0.08] pointer-events-none" style={{backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\'/%3E%3C/svg%3E")', backgroundSize: '256px 256px'}}></div>
          <div className="cinema-light absolute top-0 left-[15%] w-[30vw] h-[110vh] opacity-0 pointer-events-none" style={{background: 'linear-gradient(180deg, rgba(255,180,0,0.25) 0%, transparent 100%)', clipPath: 'polygon(20% 0%, 80% 0%, 100% 100%, 0% 100%)', filter: 'blur(8px)'}}></div>
          <div className="cinema-light absolute top-0 right-[15%] w-[30vw] h-[110vh] opacity-0 pointer-events-none" style={{background: 'linear-gradient(180deg, rgba(229,9,20,0.2) 0%, transparent 100%)', clipPath: 'polygon(20% 0%, 80% 0%, 100% 100%, 0% 100%)', filter: 'blur(8px)'}}></div>
          <div className="cinema-light absolute top-0 left-1/2 -translate-x-1/2 w-[20vw] h-[110vh] opacity-0 pointer-events-none" style={{background: 'linear-gradient(180deg, rgba(255,220,100,0.3) 0%, transparent 80%)', clipPath: 'polygon(30% 0%, 70% 0%, 90% 100%, 10% 100%)', filter: 'blur(6px)'}}></div>

          <div className="absolute bottom-[30%] left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-400/40 to-transparent"></div>
          <div className="absolute top-[20%] left-[10%] w-1 h-1 bg-amber-300 rounded-full blur-[2px] animate-ping" style={{animationDuration:'2.3s'}}></div>
          <div className="absolute top-[60%] left-[25%] w-1 h-1 bg-orange-400 rounded-full blur-[2px] animate-ping" style={{animationDuration:'1.7s', animationDelay:'0.5s'}}></div>
          <div className="absolute top-[35%] right-[15%] w-1.5 h-1.5 bg-yellow-200 rounded-full blur-[2px] animate-ping" style={{animationDuration:'2.8s', animationDelay:'0.9s'}}></div>
          <div className="absolute top-[70%] right-[30%] w-1 h-1 bg-rose-400 rounded-full blur-[2px] animate-ping" style={{animationDuration:'1.9s', animationDelay:'0.2s'}}></div>

          <div className="absolute top-8 left-8 w-12 h-12 border-t-2 border-l-2 border-amber-400/50"></div>
          <div className="absolute top-8 right-8 w-12 h-12 border-t-2 border-r-2 border-amber-400/50"></div>
          <div className="absolute bottom-8 left-8 w-12 h-12 border-b-2 border-l-2 border-amber-400/50"></div>
          <div className="absolute bottom-8 right-8 w-12 h-12 border-b-2 border-r-2 border-amber-400/50"></div>

          <p className="z-10 text-amber-400/70 tracking-[0.5em] text-xs uppercase mb-4" style={{fontFamily: "'Space Grotesk', sans-serif", letterSpacing: '0.4em'}}>— SCENE ONE —</p>

          <h1
            className="z-10 relative leading-none uppercase select-none drop-shadow-[0_0_40px_rgba(251,191,36,0.4)]"
            style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(36px, 14vw, 180px)' }}
          >
            {splitText("LIGHTS", "letter-light", "bg-gradient-to-b from-[#fffbe6] via-[#fbbf24] to-[#f97316] bg-clip-text text-transparent")}
          </h1>
          <p className="z-10 mt-4 text-amber-200/40 tracking-[0.8em] text-xs uppercase" style={{fontFamily: "'Space Grotesk', sans-serif"}}>BARUNAHA PRODUCTIONS</p>
        </div>

        {/* SCENE 2: CAMERA (UPGRADED METALLIC THEME) */}
        <div className="scene scene-camera absolute inset-0 flex items-center justify-center overflow-hidden bg-[#050505]">
          
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] rounded-full opacity-40 pointer-events-none" style={{background: 'radial-gradient(circle, rgba(229,9,20,0.25) 0%, transparent 60%)', filter: 'blur(50px)'}}></div>

          <div className="absolute top-10 left-10 w-10 h-10 border-t-2 border-l-2 border-[#E50914]/40"></div>
          <div className="absolute top-10 right-10 w-10 h-10 border-t-2 border-r-2 border-[#E50914]/40"></div>
          <div className="absolute bottom-10 left-10 w-10 h-10 border-b-2 border-l-2 border-[#E50914]/40"></div>
          <div className="absolute bottom-10 right-10 w-10 h-10 border-b-2 border-r-2 border-[#E50914]/40"></div>

          <div className="cam-icon absolute z-0 flex items-center justify-center w-64 h-48 bg-[#0B0B0B] rounded-2xl border border-white/5 shadow-[0_20px_60px_rgba(0,0,0,0.9)]">
             <div className="absolute top-[-12px] left-1/2 -translate-x-1/2 w-24 h-4 bg-[#0B0B0B] rounded-t-lg border-t border-l border-r border-white/5"></div>
             
             <div className="relative w-36 h-36 rounded-full border border-black bg-[#050505] flex items-center justify-center shadow-[inset_0_0_30px_rgba(229,9,20,0.05)]">
                <div className="w-24 h-24 rounded-full border border-white/10 flex items-center justify-center bg-black">
                   <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#E50914]/20 to-transparent flex items-center justify-center border border-white/5 relative">
                      <div className="w-3 h-3 rounded-full bg-[#E50914]/60 blur-[2px] absolute top-2 left-2"></div>
                   </div>
                </div>
             </div>
             
             <div className="absolute top-4 right-5 w-3 h-3 rounded-full bg-[#E50914] shadow-[0_0_15px_#E50914] animate-pulse"></div>
          </div>

          {/* MAIN TEXT: Upgraded to sleek Chrome/Silver aesthetic with drop shadows */}
          <h1
            className="absolute z-20 leading-none select-none drop-shadow-[0_15px_25px_rgba(0,0,0,0.9)]"
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: 'clamp(40px, 14vw, 180px)',
              letterSpacing: '0.2em', 
            }}
          >
            {splitText("CAMERA", "letter-cam", "bg-gradient-to-b from-white via-gray-400 to-zinc-700 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]")}
          </h1>
        </div>

        {/* SCENE 3: ACTION & CLAPBOARD */}
        <div className="scene scene-action absolute inset-0 flex flex-col items-center justify-center">
          <div className="absolute top-12 left-12 flex items-center gap-3">
             <div className="w-5 h-5 bg-[#E50914] rounded-full animate-pulse shadow-[0_0_20px_#E50914]"></div>
             <span className="text-[#E50914] font-mono text-2xl tracking-widest font-bold">REC</span>
          </div>

          <h1 
            className="absolute font-sans font-black italic tracking-tighter uppercase leading-none drop-shadow-[0_0_60px_rgba(229,9,20,1)] text-center w-full"
            style={{ fontSize: 'clamp(32px, 12vw, 160px)' }}
          >
            {splitText("ACTION", "letter-action", "bg-gradient-to-br from-[#ff7777] via-[#E50914] to-[#880000] bg-clip-text text-transparent")}
          </h1>
          
          <div className="clapboard relative z-20 bg-[#111] rounded-b-xl border-4 border-gray-800 shadow-[0_40px_80px_rgba(0,0,0,0.9)] overflow-visible">
            <div className="clapper-arm absolute top-[-50px] left-[-4px] h-[50px] bg-black border-4 border-gray-800 rounded-t-xl overflow-hidden origin-bottom-left flex">
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
                  <img src="/logo1.png" alt="Barunaha Logo" className="object-contain h-full w-[120%] scale-150" />
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
               <img src="/logo1.png" alt="Barunaha Logo" className="object-contain h-full w-full" />
            </div>
            <div className="flex-1 border-4 border-[#E50914]/30 rounded-lg bg-black opacity-50"></div>
          </div>
        </div>

      </div>

      <div className="hero-content relative z-10 w-full flex flex-col">
        <HeroPage />
        <Portfolio />
      </div>

    </div>
  );
}