export default function IntroductionTeaser() {
  return (
    <section className="py-32 bg-white/40 border-y border-sand/10">
      <div className="editorial-container">
        <div className="max-w-4xl">
          <p className="text-terracotta text-[10px] uppercase tracking-[0.4em] font-bold mb-10 opacity-80">
             The Story
          </p>
          <h2 className="font-serif text-4xl md:text-6xl leading-[1.2] mb-12 text-primary">
             Beyond the Labels: Returning to the <span className="italic font-light">Whole Self.</span>
          </h2>
          <p className="manifesto-text text-secondary mb-12">
             My name is Sunnie Ray. My journey began with a primal wound, attachment issues that terrified professionals, and a body that felt like a cage.
          </p>
          <a href="/about" className="text-[10px] uppercase font-bold tracking-[0.3em] border-b border-primary/20 pb-1 hover:text-accent hover:border-accent transition-all">
             Read the Full Manifesto &rarr;
          </a>
        </div>
      </div>
    </section>
  );
}
