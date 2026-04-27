import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function AboutPage() {
  return (
    <main className="bg-[#FCFAF7] min-h-screen font-sans">
      <Navbar />
      <section className="pt-64 pb-32 max-w-7xl mx-auto px-8 md:px-12">
        <div className="max-w-4xl">
           <p className="text-[10px] uppercase tracking-[0.4em] font-bold text-[#1C1C1C]/40 mb-12 uppercase">The Manifesto</p>
           <h1 className="font-serif text-5xl md:text-[8rem] font-medium leading-[1] mb-24">
             Beyond the Labels: <br/>
             <span className="italic font-light text-[#A8613F]">The Science of a Raw Soul</span>
           </h1>
           
           <div className="space-y-16 text-xl md:text-3xl font-light text-[#1C1C1C]/80 leading-relaxed">
              <p>Sunnie Ray. A name chosen by a mother who thought they were being clever, but for a long time, it felt like a cruel irony. When your name is &ldquo;Sunnie,&rdquo; the world expects light. Their reality was a shadow.</p>
              <p>Their story began with a primal wound: they were adopted at six months old. Before they had a single word to describe their world, their nervous system had already learned the language of loss and abandonment.</p>
              <p>The imprint was compounded by years of abuse, neglect, and sexual assault that followed. By their early twenties, they were a walking storm, angry, unruly, and struggling with attachment issues so extreme they terrified the professionals.</p>
              <div className="py-24 border-y border-[#D9D2C5]/30 my-32">
                 <p className="font-serif italic text-black text-4xl md:text-6xl text-center leading-tight">
                    &ldquo;I&apos;d rather be whole than good.&rdquo; — Carl Jung
                 </p>
              </div>
              <p>Talk therapy often failed them because the brain cannot always differentiate between a memory and a current threat. Science shows that when we recount trauma, the brain cannot always differentiate between a memory and a current threat. For many, this resolves nothing; it only retraumatizes.</p>
              <p>They practiced yoga to get out of their mind and into their body, but because they were stuck in a chronic &ldquo;fight-or-flight&rdquo; loop, they were making their stiffness and posture worse. They didn&apos;t realize they were &ldquo;bracing&rdquo; into the poses, reinforcing the fascia-armor my body had built to survive.</p>
              <p>Your fascia is your largest sensory organ and the biological archive of your history. At Eternal Release, we use somatic movement to signal safety to the Vagus nerve, allowing the body to finally drop its guard. We are reclaiming our right to be whole, to be agile, and to finally live in our own skin.</p>
              <div className="pt-12 italic opacity-60 text-base md:text-lg">
                 Sunnie Ray is a psychology student and yoga teacher. This platform is an educational sanctuary for somatic exploration.
              </div>
           </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
