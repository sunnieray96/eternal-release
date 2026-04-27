import { client } from "@/sanity/lib/client";
import { COURSES_QUERY } from "@/sanity/lib/queries";

export default async function PathwaysSection() {
  const courses = await client.fetch(COURSES_QUERY).catch(() => []);

  return (
    <section id="courses" className="py-48 md:py-96 bg-white">
      <div className="editorial-container">
        <div className="max-w-4xl mb-64 text-left">
          <p className="text-[10px] uppercase tracking-[0.4em] font-bold text-black/30 mb-8">Pathways</p>
          <h2 className="font-serif text-5xl md:text-[11rem] font-light leading-[0.8] text-black tracking-tighter">
             Teachings
          </h2>
          <p className="text-xl md:text-3xl font-light text-black/50 leading-relaxed mt-16 max-w-2xl text-balance">
             Intentional somatic journeys designed for the ones traditional systems failed.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-24 md:gap-40">
           <PathwayItem 
              title="From Tension to Tenderness" 
              level="Foundation" 
              desc="A 7-day journey to soften the psoas and hydrate the fascia around the heart." 
              img="https://customer-assets.emergentagent.com/wingman/29fab97e-3d97-4ee3-a7c2-df0f13706430/attachments/da5caad199094cab933feebd033c8611_pexels-shvetsa-4557648.jpg" 
           />
           <PathwayItem 
              title="Returning to Safety" 
              level="Intermediate" 
              desc="Using the Vagus nerve and lateral gaze to signal safety to the brainstem." 
              img="https://customer-assets.emergentagent.com/wingman/29fab97e-3d97-4ee3-a7c2-df0f13706430/attachments/1a8adf3e79cf4dadb4f2b6208dce502d_pexels-arun-350214906-15520327.jpg" 
           />
           <PathwayItem 
              title="The Whole System" 
              level="Advanced" 
              desc="Advanced neuroplasticity flow to build new neural pathways for resilience." 
              img="https://customer-assets.emergentagent.com/wingman/29fab97e-3d97-4ee3-a7c2-df0f13706430/attachments/f368570d2613491ea39b98b583419979_pexels-shvetsa-4557831.jpg" 
           />
        </div>
      </div>
    </section>
  );
}

function PathwayItem({ title, level, desc, img }: any) {
   return (
      <div className="space-y-16 group text-left">
         <div className="aspect-[4/5] overflow-hidden rounded-[100px] border border-sand/20 relative">
            <img src={img} alt={title} className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:scale-110 group-hover:grayscale-0" />
            <div className="absolute inset-0 bg-black/5 mix-blend-overlay" />
         </div>
         <div>
            <p className="text-[10px] uppercase tracking-[0.4em] font-bold text-clay mb-6">{level}</p>
            <h3 className="font-serif text-4xl italic text-black mb-10 leading-none">{title}</h3>
            <p className="text-lg font-light text-black/60 leading-relaxed text-balance">{desc}</p>
            <span className="inline-block mt-16 text-[10px] font-bold uppercase tracking-[0.6em] border-b border-black/10 pb-1">Opening Soon</span>
         </div>
      </div>
   )
}
