import Link from "next/link";

export default function IntroductionTeaser() {
  return (
    <section id="story" style={{ padding: '8rem 2rem', backgroundColor: 'white', position: 'relative' }}>
      <div style={{ maxWidth: '80rem', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: '3rem' }}>
          <div style={{ gridColumn: 'span 12', marginBottom: '10rem', textAlign: 'left' }}>
             <p style={{ fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.4em', fontWeight: 'bold', color: 'rgba(28, 28, 28, 0.3)', marginBottom: '2rem' }}>The Realization</p>
             <h2 style={{ fontFamily: 'serif', fontSize: 'clamp(2.5rem, 8vw, 7rem)', fontWeight: 300, lineHeight: 1, letterSpacing: '-0.02em', color: '#1C1C1C' }}>
               Labels are maps, but rarely <span style={{ fontStyle: 'italic', fontWeight: 300, color: '#A8613F' }}>the journey itself.</span>
             </h2>
          </div>
          
          <div style={{ gridColumnStart: 5, gridColumnEnd: 13, textAlign: 'left' }}>
             <p style={{ fontSize: '1.5rem', fontWeight: 300, lineHeight: 1.6, color: 'rgba(28, 28, 28, 0.7)', marginBottom: '6rem' }}>
               We spend years trying to talk our way out of storms. We analyze, we categorize, we diagnose. But for those of us living in the high-voltage loop of CPTSD, we know the truth: 
             </p>
             
             <div style={{ borderLeft: '2px solid rgba(217, 210, 197, 0.3)', paddingLeft: '4rem', paddingBottom: '2rem', marginBottom: '6rem' }}>
                <p style={{ fontFamily: 'serif', fontSize: '2.5rem', fontStyle: 'italic', color: '#A8613F', lineHeight: 1.2 }}>
                  You can understand your trauma perfectly and still feel like your body is a cage.
                </p>
             </div>

             <Link href="/about" style={{ fontSize: '11px', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.5em', borderBottom: '2px solid rgba(168, 97, 63, 0.3)', paddingBottom: '0.5rem', color: '#A8613F', textDecoration: 'none' }}>
                Read the Manifesto &rarr;
             </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
