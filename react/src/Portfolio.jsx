import React from 'react';

export default function Portfolio() {
  return (
    <div className="bg-black font-sans text-slate-100 antialiased selection:bg-[#E50914] selection:text-white min-h-screen">
      
      {/* Top Navigation */}
      <header className="fixed top-0 w-full z-50 bg-black/70 backdrop-blur-md border-b border-[#E50914]/20">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-12">
            <div className="flex items-center gap-3">
              <div className="size-8 text-[#E50914]">
                <span className="material-symbols-outlined text-4xl">movie_filter</span>
              </div>
              <h1 className="text-xl font-bold tracking-tighter uppercase text-white">
                Barnaura <span className="text-[#E50914]">Films</span>
              </h1>
            </div>
            <nav className="hidden md:flex items-center gap-8">
              <a className="text-sm font-semibold hover:text-[#E50914] transition-colors uppercase tracking-widest border-b-2 border-[#E50914] text-white" href="#">Projects</a>
              <a className="text-sm font-semibold hover:text-[#E50914] transition-colors uppercase tracking-widest text-slate-400" href="#">Studio</a>
              <a className="text-sm font-semibold hover:text-[#E50914] transition-colors uppercase tracking-widest text-slate-400" href="#">Talent</a>
              <a className="text-sm font-semibold hover:text-[#E50914] transition-colors uppercase tracking-widest text-slate-400" href="#">Legacy</a>
            </nav>
          </div>
          <div className="flex items-center gap-6">
            <div className="relative group hidden lg:block">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[#E50914]">search</span>
              <input 
                className="bg-white/5 border-none rounded-full pl-10 pr-4 py-2 text-sm text-white focus:ring-2 focus:ring-[#E50914] focus:outline-none w-64 transition-all" 
                placeholder="Search Archives" 
                type="text"
              />
            </div>
            <button className="bg-[#E50914] hover:bg-red-700 text-white px-6 py-2.5 rounded-full text-sm font-bold uppercase tracking-widest transition-all hover:shadow-[0_0_20px_rgba(229,9,20,0.6)] hover:brightness-110">
              Inquire
            </button>
          </div>
        </div>
      </header>

      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative h-[716px] flex items-end overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10"></div>
            <img 
              alt="Cinematic production camera on set" 
              className="w-full h-full object-cover scale-105" 
              src="https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?auto=format&fit=crop&q=80&w=2000" 
            />
          </div>
          <div className="relative z-20 max-w-7xl mx-auto px-6 pb-20 w-full">
            <span className="text-[#E50914] font-bold tracking-[0.3em] uppercase mb-4 block">Portfolio Excellence</span>
            <h2 className="text-6xl md:text-8xl font-black mb-6 leading-none text-white">
              THE <br/><span className="text-[#E50914]">ARCHIVES</span>
            </h2>
            <div className="flex gap-4">
              <button className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-[#E50914] border border-[#E50914]/50 px-6 py-3 rounded-full hover:bg-[#E50914]/10 transition-all">
                <span className="material-symbols-outlined">filter_list</span> Filter by Genre
              </button>
            </div>
          </div>
        </section>

        {/* Categories / Tabs */}
        <section className="sticky top-20 z-40 bg-black/95 backdrop-blur-md border-y border-[#E50914]/20">
          <div className="max-w-7xl mx-auto px-6 flex items-center gap-10 overflow-x-auto no-scrollbar py-4">
            <a className="whitespace-nowrap text-sm font-bold tracking-widest text-[#E50914]" href="#">ALL PRODUCTIONS</a>
            <a className="whitespace-nowrap text-sm font-bold tracking-widest text-slate-500 hover:text-slate-300 transition-colors" href="#">FEATURE FILMS</a>
            <a className="whitespace-nowrap text-sm font-bold tracking-widest text-slate-500 hover:text-slate-300 transition-colors" href="#">DOCUMENTARIES</a>
            <a className="whitespace-nowrap text-sm font-bold tracking-widest text-slate-500 hover:text-slate-300 transition-colors" href="#">COMMERCIALS</a>
            <a className="whitespace-nowrap text-sm font-bold tracking-widest text-slate-500 hover:text-slate-300 transition-colors" href="#">DIGITAL SERIES</a>
          </div>
        </section>

        {/* Project Grid */}
        <section className="max-w-7xl mx-auto px-6 py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Project Item 1 */}
            <div className="group relative aspect-[3/4] overflow-hidden rounded-xl bg-zinc-900 border border-[#E50914]/20 transition-transform duration-500 hover:-translate-y-2">
              <img alt="Project 1" className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-100" src="https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&q=80&w=800" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent flex flex-col justify-end p-8">
                <span className="text-xs font-bold text-[#E50914] tracking-[0.2em] mb-2">THRILLER / 2024</span>
                <h3 className="text-3xl font-bold mb-3 text-white">THE MIDNIGHT ECHO</h3>
                <p className="text-slate-400 text-sm line-clamp-2 mb-6 transform translate-y-4 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  A gripping journey into the fractured mind of a detective haunted by a case that refuses to stay buried in the shadows of the city.
                </p>
                <button className="w-full bg-white text-black py-4 rounded-lg font-bold uppercase tracking-widest text-xs hover:bg-[#E50914] hover:text-white transition-colors flex items-center justify-center gap-2 hover:shadow-[0_0_20px_rgba(229,9,20,0.6)]">
                  VIEW PROJECT <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </button>
              </div>
            </div>

            {/* Project Item 2 */}
            <div className="group relative aspect-[3/4] overflow-hidden rounded-xl bg-zinc-900 border border-[#E50914]/20 transition-transform duration-500 hover:-translate-y-2">
              <img alt="Project 2" className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-100" src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent flex flex-col justify-end p-8">
                <span className="text-xs font-bold text-[#E50914] tracking-[0.2em] mb-2">SCI-FI / 2023</span>
                <h3 className="text-3xl font-bold mb-3 text-white">RED HORIZON</h3>
                <p className="text-slate-400 text-sm line-clamp-2 mb-6 transform translate-y-4 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  When the last communication from Mars goes silent, a rescue team discovers something that redefines humanity's place in the cosmos.
                </p>
                <button className="w-full bg-white text-black py-4 rounded-lg font-bold uppercase tracking-widest text-xs hover:bg-[#E50914] hover:text-white transition-colors flex items-center justify-center gap-2 hover:shadow-[0_0_20px_rgba(229,9,20,0.6)]">
                  VIEW PROJECT <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </button>
              </div>
            </div>

            {/* Project Item 3 */}
            <div className="group relative aspect-[3/4] overflow-hidden rounded-xl bg-zinc-900 border border-[#E50914]/20 transition-transform duration-500 hover:-translate-y-2">
              <img alt="Project 3" className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-100" src="https://images.unsplash.com/photo-1518134346374-184f9d21cb2c?auto=format&fit=crop&q=80&w=800" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent flex flex-col justify-end p-8">
                <span className="text-xs font-bold text-[#E50914] tracking-[0.2em] mb-2">DRAMA / 2024</span>
                <h3 className="text-3xl font-bold mb-3 text-white">THE GRAND OPUS</h3>
                <p className="text-slate-400 text-sm line-clamp-2 mb-6 transform translate-y-4 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  The rise and fall of a brilliant but volatile conductor as he attempts to compose his final masterpiece under extreme pressure.
                </p>
                <button className="w-full bg-white text-black py-4 rounded-lg font-bold uppercase tracking-widest text-xs hover:bg-[#E50914] hover:text-white transition-colors flex items-center justify-center gap-2 hover:shadow-[0_0_20px_rgba(229,9,20,0.6)]">
                  VIEW PROJECT <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </button>
              </div>
            </div>

            {/* Project Item 4 */}
            <div className="group relative aspect-[3/4] overflow-hidden rounded-xl bg-zinc-900 border border-[#E50914]/20 transition-transform duration-500 hover:-translate-y-2">
              <img alt="Project 4" className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-100" src="https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&q=80&w=800" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent flex flex-col justify-end p-8">
                <span className="text-xs font-bold text-[#E50914] tracking-[0.2em] mb-2">DOCUMENTARY / 2023</span>
                <h3 className="text-3xl font-bold mb-3 text-white">CELLULOID DREAMS</h3>
                <p className="text-slate-400 text-sm line-clamp-2 mb-6 transform translate-y-4 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  A love letter to the last remaining analog cinemas in the world and the passionate projectionists who keep them alive.
                </p>
                <button className="w-full bg-white text-black py-4 rounded-lg font-bold uppercase tracking-widest text-xs hover:bg-[#E50914] hover:text-white transition-colors flex items-center justify-center gap-2 hover:shadow-[0_0_20px_rgba(229,9,20,0.6)]">
                  VIEW PROJECT <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </button>
              </div>
            </div>

            {/* Project Item 5 */}
            <div className="group relative aspect-[3/4] overflow-hidden rounded-xl bg-zinc-900 border border-[#E50914]/20 transition-transform duration-500 hover:-translate-y-2">
              <img alt="Project 5" className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-100" src="https://images.unsplash.com/photo-1555680202-c86f0e12f086?auto=format&fit=crop&q=80&w=800" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent flex flex-col justify-end p-8">
                <span className="text-xs font-bold text-[#E50914] tracking-[0.2em] mb-2">ACTION / 2024</span>
                <h3 className="text-3xl font-bold mb-3 text-white">NEON NIGHTS</h3>
                <p className="text-slate-400 text-sm line-clamp-2 mb-6 transform translate-y-4 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  In a city where memories can be bought and sold, one courier must protect a secret that could destroy the digital underworld.
                </p>
                <button className="w-full bg-white text-black py-4 rounded-lg font-bold uppercase tracking-widest text-xs hover:bg-[#E50914] hover:text-white transition-colors flex items-center justify-center gap-2 hover:shadow-[0_0_20px_rgba(229,9,20,0.6)]">
                  VIEW PROJECT <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </button>
              </div>
            </div>

            {/* Project Item 6 */}
            <div className="group relative aspect-[3/4] overflow-hidden rounded-xl bg-zinc-900 border border-[#E50914]/20 transition-transform duration-500 hover:-translate-y-2">
              <img alt="Project 6" className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-100" src="https://images.unsplash.com/photo-1542204165-65bf26472b9b?auto=format&fit=crop&q=80&w=800" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent flex flex-col justify-end p-8">
                <span className="text-xs font-bold text-[#E50914] tracking-[0.2em] mb-2">MYSTERY / 2022</span>
                <h3 className="text-3xl font-bold mb-3 text-white">SHADOW PROTOCOL</h3>
                <p className="text-slate-400 text-sm line-clamp-2 mb-6 transform translate-y-4 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  A high-stakes espionage thriller where the line between national security and personal survival disappears.
                </p>
                <button className="w-full bg-white text-black py-4 rounded-lg font-bold uppercase tracking-widest text-xs hover:bg-[#E50914] hover:text-white transition-colors flex items-center justify-center gap-2 hover:shadow-[0_0_20px_rgba(229,9,20,0.6)]">
                  VIEW PROJECT <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </button>
              </div>
            </div>

          </div>

          {/* Featured Full Width Project */}
          <div className="mt-20">
            <div className="relative w-full rounded-2xl overflow-hidden bg-zinc-900 border border-[#E50914]/30 group">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="aspect-video lg:aspect-auto h-full">
                  <img alt="Cinematographer at sunset" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000" src="https://images.unsplash.com/photo-1601506521937-0121a7fc2a6b?auto=format&fit=crop&q=80&w=1000" />
                </div>
                <div className="p-12 flex flex-col justify-center bg-black/80">
                  <span className="text-[#E50914] font-bold tracking-widest mb-4">PREMIERE FEATURE</span>
                  <h2 className="text-4xl md:text-5xl font-black mb-6 uppercase text-white">Beyond the <br/>Veil</h2>
                  <p className="text-slate-300 text-lg mb-8 leading-relaxed">
                    Our most ambitious production to date. Filmed across four continents, this supernatural mystery explores the thin boundary between our world and the unseen forces that shape our destinies.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <button className="bg-[#E50914] hover:bg-red-700 text-white px-8 py-4 rounded-full font-bold uppercase tracking-widest transition-all hover:shadow-[0_0_20px_rgba(229,9,20,0.6)] hover:brightness-110">
                      Watch Trailer
                    </button>
                    <button className="border border-white/20 hover:border-[#E50914] text-white px-8 py-4 rounded-full font-bold uppercase tracking-widest transition-all">
                      Behind the Scenes
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* More Projects Load Button */}
          <div className="mt-20 flex flex-col items-center">
            <div className="w-24 h-[1px] bg-[#E50914]/50 mb-8"></div>
            <button className="group flex flex-col items-center gap-4">
              <span className="text-xs font-bold tracking-[0.4em] uppercase text-slate-500 group-hover:text-[#E50914] transition-colors">Load More Works</span>
              <span className="material-symbols-outlined text-4xl animate-bounce text-[#E50914]/50 group-hover:text-[#E50914] transition-colors">expand_more</span>
            </button>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-black border-t border-[#E50914]/20 pt-20 pb-10">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
              <div className="col-span-1 md:col-span-2">
                <div className="flex items-center gap-3 mb-6">
                  <span className="material-symbols-outlined text-[#E50914] text-3xl">movie_filter</span>
                  <span className="text-2xl font-black uppercase tracking-tighter text-white">Barnaura</span>
                </div>
                <p className="text-slate-500 max-w-sm mb-8">
                  Crafting cinematic experiences that challenge perspectives and ignite the imagination. Independent film production at the intersection of art and technology.
                </p>
                <div className="flex gap-4">
                  <a className="size-10 rounded-full border border-[#E50914]/30 flex items-center justify-center hover:bg-[#E50914]/10 hover:border-[#E50914] text-white transition-all" href="#">
                    <span className="material-symbols-outlined text-lg">public</span>
                  </a>
                  <a className="size-10 rounded-full border border-[#E50914]/30 flex items-center justify-center hover:bg-[#E50914]/10 hover:border-[#E50914] text-white transition-all" href="#">
                    <span className="material-symbols-outlined text-lg">play_circle</span>
                  </a>
                  <a className="size-10 rounded-full border border-[#E50914]/30 flex items-center justify-center hover:bg-[#E50914]/10 hover:border-[#E50914] text-white transition-all" href="#">
                    <span className="material-symbols-outlined text-lg">rss_feed</span>
                  </a>
                </div>
              </div>
              <div>
                <h4 className="font-bold uppercase tracking-widest mb-6 text-sm text-white">Quick Links</h4>
                <ul className="space-y-4 text-slate-500 text-sm">
                  <li><a className="hover:text-[#E50914] transition-colors" href="#">Award Submissions</a></li>
                  <li><a className="hover:text-[#E50914] transition-colors" href="#">Press Inquiries</a></li>
                  <li><a className="hover:text-[#E50914] transition-colors" href="#">Distribution Partners</a></li>
                  <li><a className="hover:text-[#E50914] transition-colors" href="#">Sustainability Policy</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold uppercase tracking-widest mb-6 text-sm text-white">Contact Studio</h4>
                <p className="text-slate-500 text-sm mb-2">1204 Production Row</p>
                <p className="text-slate-500 text-sm mb-6">Los Angeles, CA 90028</p>
                <a className="text-[#E50914] font-bold hover:underline" href="mailto:hello@barnaura.film">hello@barnaura.film</a>
              </div>
            </div>
            <div className="border-t border-white/10 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
              <p className="text-slate-600 text-xs uppercase tracking-widest">© 2026 Barnaura Film Production. All rights reserved.</p>
              <div className="flex gap-8 text-slate-600 text-xs uppercase tracking-widest">
                <a className="hover:text-slate-400" href="#">Privacy</a>
                <a className="hover:text-slate-400" href="#">Terms</a>
                <a className="hover:text-slate-400" href="#">Legal</a>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}