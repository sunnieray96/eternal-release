import { client } from "@/sanity/lib/client";
import { COURSES_QUERY } from "@/sanity/lib/queries";

export default async function CoursePortal() {
  const courses = await client.fetch(COURSES_QUERY).catch(() => []);

  return (
    <section id="courses" className="py-32 md:py-48 bg-bg relative">
      <div className="editorial-container">
        <div className="max-w-3xl mb-32">
          <p className="text-terracotta text-[10px] uppercase tracking-[0.4em] font-bold mb-6">Teachings</p>
          <h2 className="text-5xl md:text-8xl font-medium leading-tight mb-10">Pathways <br/><span className="italic font-light text-sage-dark">to Flow</span></h2>
          <p className="text-xl text-secondary font-light leading-relaxed">Science-backed somatic journeys designed for the ones traditional systems failed.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {courses.length === 0 ? (
            <>
              <CourseMock title="The 7-Day Reset" level="Foundation" />
              <CourseMock title="Returning to Safety" level="Intermediate" />
              <CourseMock title="Whole System Flow" level="Advanced" />
            </>
          ) : (
            courses.map((course: any) => (
              <div key={course._id} className="bg-white p-12 wabi-border group hover:shadow-xl transition-all duration-500">
                <p className="text-terracotta text-[10px] font-bold uppercase tracking-widest mb-6">{course.level}</p>
                <h3 className="text-3xl font-serif italic mb-8 text-primary">{course.title}</h3>
                <p className="text-secondary font-light mb-10 leading-relaxed">{course.description}</p>
                <div className="pt-10 border-t border-sand/20 flex justify-between items-center">
                   <span className="font-serif text-2xl">${course.price || "Free"}</span>
                   <button className="text-[10px] font-bold uppercase tracking-widest border-b border-primary/20 pb-1">Details</button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
}

function CourseMock({ title, level }: any) {
  return (
    <div className="bg-white/40 p-12 wabi-border opacity-60">
       <p className="text-terracotta text-[10px] font-bold uppercase tracking-widest mb-6">{level}</p>
       <h3 className="text-3xl font-serif italic mb-10 text-primary/40">{title}</h3>
       <div className="pt-10 border-t border-sand/10">
          <span className="text-[10px] uppercase tracking-[0.3em] text-sand font-bold italic">Opening Soon</span>
       </div>
    </div>
  );
}
