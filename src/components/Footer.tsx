export default function Footer() {
  return (
    <footer id="contact" className="bg-primary text-bg py-32 overflow-hidden">
      <div className="editorial-container">
        <div className="grid md:grid-cols-12 gap-24 items-start">
          <div className="md:col-span-6">
            <a href="#" className="font-serif text-4xl font-medium tracking-tight mb-8 block">
               Eternal <span className="italic font-light text-sage-light">Release</span>
            </a>
            <p className="text-bg/50 text-xl font-light leading-relaxed max-w-md mb-12">
               Somatic healing designed for the complex mind. Return to the natural flow of your nervous system.
            </p>
            <div className="flex gap-12">
               <a href="https://instagram.com/eternal" className="text-[10px] font-bold uppercase tracking-[0.4em] hover:text-accent">Instagram</a>
               <a href="mailto:hello@eternalrelease.org" className="text-[10px] font-bold uppercase tracking-[0.4em] hover:text-accent">Email</a>
            </div>
          </div>

          <div className="md:col-span-6 space-y-12">
             <div className="border-t border-bg/10 pt-12">
                <p className="text-accent text-[10px] font-bold uppercase tracking-[0.4em] mb-12">The Fine Print</p>
                <p className="text-[10px] leading-[2] font-light uppercase tracking-[0.2em] text-bg/40 max-w-xl italic">
                   Sunnie Ray is a psychology student and certified yoga teacher. Content provided is for educational and self-regulation purposes only. It is not a substitute for professional psychiatric care or medical advice.
                </p>
             </div>
             <p className="text-[9px] uppercase tracking-[0.4em] text-bg/20">© {new Date().getFullYear()} Eternal Release. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
