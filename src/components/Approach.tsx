const steps = [
  { 
    id: "01", 
    title: "Somatics", 
    text: "Tuning into the body's subtle language to discharge trapped survival energy and restore felt safety." 
  }, 
  { 
    id: "02", 
    title: "Fascia", 
    text: "Unlocking the connective tissue that holds the physical archive of your history and emotional armor." 
  }, 
  { 
    id: "03", 
    title: "Psychology", 
    text: "Trauma-informed insight that honors your whole experience, moving beyond labels into integration." 
  }
];

export default function Approach() {
  return (
    <section id="approach" className="py-32 md:py-48 bg-bg">
      <div className="editorial-container">
        <div className="text-center mb-24">
           <p className="text-terracotta text-[10px] uppercase tracking-[0.4em] font-bold mb-6">The Pillars</p>
           <h2 className="text-4xl md:text-7xl font-medium">Science & Soul</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-16 md:gap-24">
          {steps.map((step) => (
            <div key={step.id} className="relative pt-12 border-t border-sand/30">
               <span className="absolute top-6 left-0 text-[10px] font-bold text-sand tracking-widest">{step.id}</span>
               <h3 className="text-2xl font-serif mb-6 italic">{step.title}</h3>
               <p className="text-secondary font-light leading-relaxed">{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
