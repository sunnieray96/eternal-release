import { client } from "@/sanity/lib/client";
import { COURSES_QUERY } from "@/sanity/lib/queries";

export default async function Pathways() {
  const courses = await client.fetch(COURSES_QUERY).catch(() => []);

  return (
    <section id="pathways" className="section-padding bg-white">
      <div className="canvas-container">
        <div className="text-center mb-32">
           <p className="caption mb-8">Pathways to Flow</p>
           <h2 className="editorial-h2">Intentional somatic journeys.</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-16 md:gap-32">
          {courses.length === 0 ? (
            <>
              <PathwayItem title="The 7-Day Reset" desc="A foundational week to soften the body and quiet the mind." />
              <PathwayItem title="Returning to Safety" desc="Learning to inhabit a body that has spent years on high alert." />
              <PathwayItem title="Whole System Flow" desc="The advanced integration of psychology and somatic release." />
            </>
          ) : (
            courses.map((course: any) => (
              <PathwayItem key={course._id} title={course.title} desc={course.description} />
            ))
          )}
        </div>
      </div>
    </section>
  );
}

function PathwayItem({ title, desc }: any) {
   return (
      <div className="text-center space-y-10 group">
         <div className="aspect-square bg-bone/30 rounded-full flex items-center justify-center p-16 border border-sand/20 group-hover:border-clay/30 transition-all duration-700">
            <div className="w-full h-full rounded-full border-[0.5px] border-ink/5 animate-pulse" />
         </div>
         <h3 className="editorial-h3">{title}</h3>
         <p className="text-ink/60 font-light leading-relaxed">{desc}</p>
         <button className="text-[10px] font-bold uppercase tracking-widest pt-4 border-b border-ink/10 pb-1 group-hover:border-ink transition-all">Details</button>
      </div>
   )
}
