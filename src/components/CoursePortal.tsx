import { client } from "@/sanity/lib/client";
import { COURSES_QUERY } from "@/sanity/lib/queries";

export default async function CoursePortal() {
  const courses = await client.fetch(COURSES_QUERY).catch(() => []);

  return (
    <section id="courses" className="py-48 md:py-80 bg-white relative">
      <div className="editorial-container">
        <div className="max-w-3xl mb-32 text-left">
          <p className="text-terracotta text-[10px] uppercase tracking-[0.4em] font-bold mb-6">Teachings</p>
          <h2 className="font-serif text-5xl md:text-[9rem] font-light leading-tight mb-10 text-black">Pathways <br/><span className="italic font-light text-[#A8613F]">to Flow</span></h2>
          <p className="text-xl text-ink leading-relaxed font-light">
             Intentional somatic journeys designed for the ones traditional systems failed.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {courses.length === 0 ? (
            <>
              <CoursePlaceholder title="From Tension to Tenderness" level="Foundation" desc="A 7-day week-long journey to soften the psoas and hydrate the fascia around the heart." />
              <CoursePlaceholder title="Returning to Safety" level="Intermediate" desc="Using the Vagus nerve and lateral gaze to signal safety to the brainstem." />
              <CoursePlaceholder title="The Whole System" level="Advanced" desc="Advanced neuroplasticity flow to build new neural pathways for resilience." />
            </>
          ) : (
            courses.map((course: any) => (
              <div key={course._id} className="bg-white p-12 wabi-border group shadow-sm hover:shadow-xl transition-all duration-500">
                <p className="text-terracotta text-[10px] font-bold uppercase tracking-widest mb-6">{course.level}</p>
                <h3 className="text-3xl font-serif italic mb-8 text-black">{course.title}</h3>
                <p className="text-ink font-light mb-10 leading-relaxed">{course.description}</p>
                <div className="pt-10 border-t border-sand/20 flex justify-between items-center">
                   <span className="font-serif text-2xl text-black">${course.price || "Free" }</span>
                   <button className="text-[10px] font-bold uppercase tracking-widest border-b border-black/10 pb-1 text-black">Details</button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
}

function CoursePlaceholder({ title, level, desc }: any) {
   return (
    <div className="bg-white/40 p-12 wabi-border opacity-70 group hover:opacity-100 transition-all">
      <p className="text-terracotta text-[10px] font-bold uppercase tracking-[0.3em] mb-6">{level}</p>
      <h3 className="text-3xl font-serif italic mb-6 text-black">{title}</h3>
      <p className="text-ink/60 font-light text-sm mb-10 leading-relaxed">{desc}</p>
      <div className="pt-10 border-t border-sand/10">
         <span className="text-[10px] uppercase tracking-[0.4em] text-clay font-bold italic">Opening Soon</span>
      </div>
    </div>
   )
}
