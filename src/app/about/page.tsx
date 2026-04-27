import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function AboutPage() {
  return (
    <main style={{ backgroundColor: '#FCFAF7', minHeight: '100vh' }}>
      <Navbar />
      <section style={{ paddingTop: '16rem', paddingBottom: '12rem', maxWidth: '80rem', margin: '0 auto', paddingLeft: '2rem', paddingRight: '2rem' }}>
        <div style={{ maxWidth: '64rem' }}>
           <p style={{ fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.6em', fontWeight: 'bold', color: 'rgba(28, 28, 28, 0.4)', marginBottom: '4rem' }}>The Manifesto</p>
           <h1 style={{ fontFamily: 'serif', fontSize: 'clamp(3.5rem, 12vw, 9rem)', fontWeight: 300, lineHeight: 0.9, marginBottom: '8rem', color: '#1C1C1C', letterSpacing: '-0.04em' }}>
             Beyond the Labels: <br/>
             <span style={{ fontStyle: 'italic', fontWeight: 200, color: '#A8613F' }}>The Science of a Raw Soul</span>
           </h1>
           
           <div style={{ display: 'flex', flexDirection: 'column', gap: '5rem', fontSize: 'clamp(1.2rem, 2.2vw, 1.8rem)', fontWeight: 300, color: 'rgba(28, 28, 28, 0.8)', lineHeight: 1.8 }}>
              <p>Sunnie Ray. A name chosen by a mother who thought they were being clever, but for a long time, it felt like a cruel irony. When your name is &ldquo;Sunnie,&rdquo; the world expects light, but their reality was a shadow. Their story began with a primal wound: they were adopted at six months old. Before they had a single word to describe their world, their nervous system had already learned the language of loss and abandonment.</p>
              
              <p>That early imprint was compounded by years of abuse, neglect, and sexual assault that followed. By their early twenties, they were a walking storm, angry, unruly, and struggling with attachment issues so extreme they terrified the professionals. They&apos;ve had therapists quit on me. They&apos;ve been called &ldquo;too much,&rdquo; &ldquo;reactive,&rdquo; and &ldquo;unstable.&rdquo; They were cycled through labels like Bipolar, BPD, and even Autism, diagnoses that tried to explain my symptoms without ever touching the fire that caused them. While labels can be helpful for some, they never helped guide me through the experience. They were stiff, tense, anxious, and reactive.</p>

              <p>The light finally flickered when they worked with a psychiatrist whose background in Traditional Chinese Medicine allowed them to see the human holistically. They used yoga, sensory deprivation, and art therapy. He was the one who finally looked past the surface and formally diagnosed them with CPTSD. He saw a human being where others saw a &ldquo;case.&rdquo; But even with that brilliance, there was a missing link. They were doing the work, but their body was still bracing.</p>

              <div style={{ padding: '8rem 0', borderTop: '1px solid rgba(217, 210, 197, 0.4)', borderBottom: '1px solid rgba(217, 210, 197, 0.4)', margin: '10rem 0' }}>
                 <p style={{ fontFamily: 'serif', fontStyle: 'italic', color: '#1C1C1C', fontSize: 'clamp(2.5rem, 6vw, 5rem)', textAlign: 'center', lineHeight: 1.2 }}>
                    &ldquo;I&apos;d rather be whole than good.&rdquo; — Carl Jung
                 </p>
              </div>

              <p>They quickly learned that for many of us with CPTSD and BPD, traditional talk therapy can be a trap. Science shows that when we recount trauma, the brain cannot always differentiate between a memory and a current threat. Research shows that during trauma recall, the amygdala fires while the speech center often shuts down. We are literally forced to try and &ldquo;talk&rdquo; our way out of a state where the brain has disabled speech. For many, this doesn&apos;t resolve the symptoms; it retraumatizes.</p>

              <p>They practiced yoga to get out of my mind and into my body, but because they were stuck in a chronic &ldquo;fight-or-flight&rdquo; loop, they were making their stiffness and posture worse. They didn&apos;t realize I was &ldquo;bracing&rdquo; into the poses, reinforcing the fascia-armor my body had built to survive. They were trying to force peace onto a system that didn&apos;t yet feel safe.</p>

              <p>Your fascia is your largest sensory organ and the biological archive of your history. At Eternal Release, we use somatic movement to signal safety to the Vagus nerve, allowing the body to finally drop its guard. We are reclaiming our right to be whole, to be agile, and to finally live in our own skin.</p>
              
              <div style={{ paddingTop: '5rem', fontStyle: 'italic', opacity: 0.5, fontSize: '1rem', letterSpacing: '0.1em' }}>
                 Sunnie Ray is a psychology student and yoga teacher. This platform is an educational sanctuary for somatic exploration.
              </div>
           </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
