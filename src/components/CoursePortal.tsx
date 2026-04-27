import { client } from "@/sanity/lib/client";
import { COURSES_QUERY } from "@/sanity/lib/queries";

export default async function CoursePortal() {
  const courses = await client.fetch(COURSES_QUERY).catch(() => []);

  return (
    <section id="courses" className="py-48 md:py-80 bg-white relative overflow-hidden">
      <div className="editorial-container">
        <div className="max-w-3xl mb-40 text-left">
          <p className="text-[10px] uppercase tracking-[0.4em] font-bold text-black/30 mb-8">Pathways</p>
          <h2 className="font-serif text-5xl md:text-[10rem] font-light leading-tight text-black tracking-tighter">
             Teachings
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-24">
          {courses.length === 0 ? (
            <>
              <Pathway title="From Tension to Tenderness" level="Foundation" desc="A 7-day week-long journey to soften the psoas and hydrate the fascia around the heart." img="https://customer-assets.emergentagent.com/wingman/29fab97e-3d97-4ee3-a7c2-df0f13706430/attachments/b7228eafce2343d8be0ede931f1eaa25_pexels-angela-roma-7479526.jpg" />
              <Pathway title="Returning to Safety" level="Intermediate" desc="Using the Vagus nerve and lateral gaze to signal safety to the brainstem." img="https://customer-assets.emergentagent.com/wingman/29fab97e-3d97-4ee3-a7c2-df0f13706430/attachments/1a8adf3e79cf4dadb4f2b6208dce502d_pexels-arun-350214906-15520327.jpg" />
              <Pathway title="The Whole System" level="Advanced" desc="Advanced neuroplasticity flow to build new neural pathways for resilience." img="https://customer-assets.emergentagent.com/wingman/29fab97e-3d97-4ee3-a7c2-df0f13706430/attachments/d88bb604e1054353ae9dcd0ccc20d03b_pexels-darina-belonogova-9167188.jpg" />
            </>
          ) : (
            courses.map((c: any) => (
               <Pathway key={c._id} title={c.title} level={c.level} desc={c.description} />
            ))
          )}
        </div>
      </div>
    </section>
  );
}

function Pathway({ title, level, desc, img }: any) {
   return (
      <div className="space-y-12 group">
         <div className="aspect-[4/5] overflow-hidden rounded-[80px] border border-sand/20 relative group">
            <img src={img || "https://images.unsplash.com/photo-1544126592-807daa2b5d7a?q=80&w=1000"} alt={title} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 group-hover:scale-105" />
            <div className="absolute inset-0 bg-black/10 mix-blend-overlay" />
         </div>
         <div className="text-left">
            <p className="text-[10px] uppercase tracking-[0.4em] font-bold text-clay mb-4 font-sans">{level}</p>
            <h3 className="font-serif text-4xl italic text-black mb-8 leading-[1.1]">{title}</h3>
            <p className="text-lg font-light text-black/60 leading-relaxed text-balance font-sans">{desc}</p>
            <span className="inline-block mt-12 text-[10px] font-bold uppercase tracking-[0.5em] border-b border-black/10 pb-1 font-sans">Opening Soon</span>
         </div>
      </div>
   )
}
