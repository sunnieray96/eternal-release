import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-[#FCFAF7]">
      <Navbar />
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-8 relative z-10 text-center">
          <p className="text-[10px] uppercase tracking-[0.6em] font-bold opacity-30 mb-12">Somatic Release · Fascia Work · Psychology</p>
          <h1 className="text-6xl md:text-[11rem] font-serif font-light leading-[0.85] tracking-tighter mb-20">
            Your body knows<br />
            <span className="italic font-extralight opacity-30">the way home</span>
          </h1>
          <div className="max-w-xl mx-auto mt-32">
             <p className="text-xl md:text-2xl font-light opacity-50 leading-relaxed mb-16">
               A gentle, evidence-based return to wholeness for complex minds. 
               Uncage your nervous system.
             </p>
             <a href="#story" className="text-[11px] font-bold uppercase tracking-[0.6em] border-b border-black/10 pb-4 hover:border-black transition-all">Enter the Sanctuary &darr;</a>
          </div>
        </div>
        <div className="absolute top-[-20%] right-[-10%] w-[60vw] h-[60vw] bg-[#3E4A34]/5 rounded-full blur-[150px] pointer-events-none" />
        <div className="absolute bottom-[-20%] left-[-10%] w-[70vw] h-[70vw] bg-[#A8613F]/5 rounded-full blur-[180px] pointer-events-none" />
      </section>

      {/* Story Teaser Section */}
      <section id="story" className="py-48 md:py-80 bg-white relative">
        <div className="max-w-7xl mx-auto px-8 md:px-16">
          <div className="grid md:grid-cols-12 gap-12 text-left">
            <div className="md:col-span-12 mb-40">
               <p className="text-[10px] uppercase tracking-[0.4em] font-bold opacity-30 mb-8">The Realization</p>
               <h2 className="text-4xl md:text-9xl font-serif font-light leading-[1] tracking-tight max-w-6xl">Labels are maps, but rarely <span className="italic font-light text-[#A8613F]">the journey itself.</span></h2>
            </div>
            <div className="md:col-start-4 md:col-span-8 space-y-24">
               <p className="text-2xl md:text-4xl font-light opacity-70 leading-relaxed">
                 We spend years trying to talk our way out of storms. We analyze, we categorize, we diagnose. But for those of us living in the high-voltage loop of CPTSD, we know the truth: 
               </p>
               <div className="border-l-2 border-gray-100 pl-16 py-8">
                  <p className="text-4xl md:text-6xl italic text-[#A8613F] font-serif leading-tight mb-8">
                    You can understand your trauma perfectly and still feel like your body is a cage.
                  </p>
               </div>
               <p className="text-2xl md:text-4xl font-light opacity-70 leading-relaxed mb-20">
                 Traditional systems often fail because they speak to the mind while the body is shouting a different language. We listen to the tissue.
               </p>
               <a href="/about" className="inline-block text-[11px] font-bold uppercase tracking-[0.5em] border-b border-[#A8613F]/30 pb-2 hover:border-[#A8613F] transition-all text-[#A8613F]">Read the Manifesto &rarr;</a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
