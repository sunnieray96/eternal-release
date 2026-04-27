import { client } from "@/sanity/lib/client";
import { COURSES_QUERY } from "@/sanity/lib/queries";

interface Course {
  _id: string;
  title: string;
  level?: string;
  description: string;
  price?: number;
}

async function getCourses(): Promise<Course[]> {
  try {
    if (!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID) return [];
    return await client.fetch(COURSES_QUERY);
  } catch {
    return [];
  }
}

export default async function CoursePortal() {
  const courses = await getCourses();
  const hasCourses = courses && courses.length > 0;

  return (
    <section id="courses" className="py-32 md:py-56 bg-parchment/30 relative">
      <div className="max-w-6xl mx-auto px-6 relative">
        <div className="text-center max-w-3xl mx-auto mb-32">
          <p className="text-terracotta font-medium text-xs tracking-[0.3em] uppercase mb-6">
            Teachings
          </p>
          <h2 className="font-serif text-5xl md:text-8xl font-medium text-slate-dark mb-10 leading-tight">
            Pathways to Flow
          </h2>
          <p className="text-stone text-xl leading-relaxed font-light">
            Intentional somatic journeys designed for the ones traditional systems failed. 
            Science-backed movements to help you exit survival mode.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {!hasCourses ? (
            <>
               <CoursePlaceholder title="The 7-Day Reset" level="Foundation" price="Free" />
               <CoursePlaceholder title="Returning to Safety" level="Intermediate" price="$44" />
               <CoursePlaceholder title="Whole System Flow" level="Advanced" price="$197" />
            </>
          ) : (
            courses.map((course) => (
              <div key={course._id} className="wabi-card bg-white p-14 rounded-[40px] border border-sand/40 hover:border-sage transition-all shadow-sm">
                <p className="text-terracotta text-[10px] uppercase tracking-[0.3em] mb-6 font-bold">{course.level}</p>
                <h3 className="font-serif text-4xl text-slate-dark mb-8 leading-tight italic">{course.title}</h3>
                <p className="text-stone font-light leading-relaxed mb-12 text-lg">{course.description}</p>
                <div className="pt-10 border-t border-sand/20 flex justify-between items-center">
                   <span className="text-2xl font-serif text-sage-dark italic">${course.price || "Free"}</span>
                   <button className="text-xs font-bold uppercase tracking-widest text-slate-dark/60 hover:text-terracotta transition-colors border-b border-sand/50 pb-1">Learn More</button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
}

function CoursePlaceholder({ title, level, price }: any) {
   return (
    <div className="wabi-card bg-white/40 p-14 rounded-[40px] border border-sand/20 opacity-70 group hover:bg-white transition-all">
      <p className="text-terracotta/60 text-[10px] uppercase tracking-[0.3em] mb-6 font-bold">{level}</p>
      <h3 className="font-serif text-4xl text-slate-dark/60 mb-8 leading-tight italic">{title}</h3>
      <div className="pt-10 border-t border-sand/10 flex justify-between items-center">
         <span className="text-2xl font-serif text-stone/30 italic">{price}</span>
         <span className="text-[10px] uppercase tracking-widest text-stone/40">Coming Soon</span>
      </div>
    </div>
   )
}
