export default function Footer() {
  return (
    <footer id="contact" className="py-32 bg-slate-dark text-cream relative overflow-hidden">
      {/* Texture Layer */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none" 
           style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/felt.png")' }} />
           
      <div className="max-w-7xl mx-auto px-8 relative">
        <div className="flex flex-col md:grid md:grid-cols-[2fr_1fr_1fr] gap-20 items-start">
          <div className="max-w-md">
            <a href="#" className="font-serif text-4xl font-medium tracking-tight mb-8 block">
               Eternal <span className="font-light italic text-sage-light">Release</span>
            </a>
            <p className="text-cream/40 text-lg font-light leading-relaxed mb-10">
               Somatic healing designed for the complex mind. Integrating psychology, fascia release, and ancient movement to help you return home.
            </p>
            <div className="flex gap-10">
               <a href="https://instagram.com/eternal" className="text-[10px] font-bold uppercase tracking-[0.3em] hover:text-terracotta-light transition-all">Instagram</a>
            </div>
          </div>

          <div className="space-y-6">
            <p className="text-terracotta-light text-[10px] uppercase tracking-widest font-bold mb-10">Explore</p>
            <nav className="flex flex-col gap-4">
              <a href="#about" className="text-sm font-light hover:text-sage-light transition-colors">Manifesto</a>
              <a href="#blog" className="text-sm font-light hover:text-sage-light transition-colors">The Journal</a>
              <a href="#courses" className="text-sm font-light hover:text-sage-light transition-colors">Course Portal</a>
            </nav>
          </div>

          <div className="space-y-6">
            <p className="text-terracotta-light text-[10px] uppercase tracking-widest font-bold mb-10">Connect</p>
            <p className="text-sm font-light mb-8">What is on your heart?</p>
            <a href="mailto:hello@eternalrelease.org" className="text-xl font-serif italic border-b border-cream/20 pb-1">hello@eternalrelease.org</a>
          </div>
        </div>

        <div className="mt-32 pt-10 border-t border-white/5 space-y-8">
           <p className="text-cream/20 text-[9px] uppercase tracking-[0.5em] text-center">
              © {new Date().getFullYear()} Eternal Release. All rights reserved.
           </p>
           <p className="text-cream/30 text-[10px] leading-relaxed max-w-4xl mx-auto text-center font-light uppercase tracking-widest italic">
              Sunnie Ray is a psychology student and certified yoga teacher. The content provided is for educational and self-regulation purposes only. It is not a substitute for professional medical advice, diagnosis, or treatment. If you are experiencing a mental health crisis, contact emergency services immediately.
           </p>
        </div>
      </div>
    </footer>
  );
}
