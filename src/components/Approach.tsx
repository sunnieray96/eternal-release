const pillars = [
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" className="text-sage">
        <circle cx="20" cy="20" r="18" stroke="currentColor" strokeWidth="1.5" />
        <path d="M20 8c0 6.627-5.373 12-12 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M20 8c0 6.627 5.373 12 12 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M20 8v24" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: "Somatics",
    description:
      "Your body stores what words can't reach. Through gentle somatic practices, we learn to listen to the body's signals, discharge trapped survival energy, and create new pathways for safety and rest.",
  },
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" className="text-sage">
        <path
          d="M8 32C8 32 12 16 20 16C28 16 32 32 32 32"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M12 28C12 28 15 20 20 20C25 20 28 28 28 28"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M16 24C16 24 18 21 20 21C22 21 24 24 24 24"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
    title: "Fascia",
    description:
      "Fascia holds the map of our lived experience. Through targeted myofascial release and movement, we unlock the connective tissue patterns that keep the body armored in protection, and invite softness back in.",
  },
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" className="text-sage">
        <circle cx="20" cy="14" r="6" stroke="currentColor" strokeWidth="1.5" />
        <path
          d="M10 34c0-5.523 4.477-10 10-10s10 4.477 10 10"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path d="M20 20v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M16 28h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: "Psychology",
    description:
      "Understanding the 'why' meets the body's 'how.' We integrate trauma-informed psychology: parts work, polyvagal theory, and attachment repair, so your healing has both roots and wings.",
  },
];

export default function Approach() {
  return (
    <section id="approach" className="py-24 md:py-32 bg-warm-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sage font-medium text-sm tracking-[0.2em] uppercase mb-4">
            The Method
          </p>
          <h2 className="font-serif text-3xl md:text-5xl font-medium text-slate-dark mb-6">
            My Approach
          </h2>
          <p className="text-stone text-lg leading-relaxed">
            Healing isn&apos;t a straight line. It&apos;s a spiral. These three pillars work 
            together to meet you where you are and guide your nervous system back to balance.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="group bg-cream/40 rounded-2xl p-8 md:p-10 border border-cream-dark/40 hover:border-sage/20 hover:shadow-lg hover:shadow-sage/5 transition-all duration-500"
            >
              <div className="w-16 h-16 rounded-full bg-sage/10 flex items-center justify-center mb-6 group-hover:bg-sage/15 transition-colors duration-500">
                {pillar.icon}
              </div>
              <h3 className="font-serif text-2xl font-medium text-slate-dark mb-4">
                {pillar.title}
              </h3>
              <p className="text-stone leading-relaxed text-[15px]">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="flex items-center justify-center mt-20">
          <div className="h-px w-16 bg-sand" />
          <div className="w-2 h-2 rounded-full bg-sage/30 mx-4" />
          <div className="h-px w-16 bg-sage/60" />
        </div>
      </div>
    </section>
  );
}
