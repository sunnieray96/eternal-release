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
    const data = await client.fetch(COURSES_QUERY);
    return data || [];
  } catch {
    return [];
  }
}

export default async function CoursePortal() {
  const courses = await getCourses();
  const hasCourses = courses.length > 0;

  return (
    <section id="courses" className="py-32 md:py-48 bg-cream/20 relative">
      <div className="max-w-6xl mx-auto px-6 relative">
        <div className="text-center max-w-2xl mx-auto px-6 mb-32">
          <p className="text-terracotta font-medium text-xs tracking-[0.3em] uppercase mb-4">
            Offerings
          </p>
          <h2 className="font-serif text-5xl md:text-6xl font-medium text-slate-dark mb-8">
            Pathways to Flow
          </h2>
          <p className="text-stone texm-lg leading-relaxed font-light">
            Intentional somatic journeys designed for the ones traditional systems failed.
          </p>
        </div>

        {!hasCourses ? (_
          <div className="grid md:grid-cols-3 gap-12">
            <PlaceholderCard 
              title="7-Day Fascia Reset" 
              desc="A week-long journey to soften the body and quiet the mind." 
              level="Foundation" 
            />
            <PlaceholderCard 
              title="Returning to Safety" 
              desc="Understanding the nervous system and somatic awareness." 
              level="Intermediate" 
            />
            <PlaceholderCard 
              title="Whole System" 
              desc="Advanced integration of somatic and psychological approaches." 
              level="Advanced" 
            />
          </div>
        ) : (
          <div className="grid md:grid-cols-3 gap-12">
            {courses.map((course) => (
              <div key={course._id} className="bg-white/50 backdrop-blur-sm p-12 rounded-[40px] border border-sage/10 shadow-sm hover:shadow-xl transition-all duration-500">
                <p className="text-terracotta text-[10px] uppercase tracking-widest mb-4 font-bold">{course.level}</p>
                <h3 className="font-serif text-3xl text-slate-dark mb-6">{course.title}</h3>
                <p className="text-stone font-light leading-relaxed mb-8">{course.description}</p>
                <div className="pt-8 border-t border-component/10 flex items-center justify-between">
                  <span className="text-xl font-serif text-sage-dark">${course.price || "Free"}</span>
                  <button className="text-sm font-medium border-b border-slate-dark/20 pl-1">Learn More</button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

function PlaceholderCard({ title, desc, level }: any) {
  return (
    <div className="bg-white/20 backdrop-blur-sm text-slate-dark/40 p-12 rounded-[40px] border border-cream/50 group hover:bg-white/40 transition-all duration-500 opacity-60">
      <p className="text-terracotta/40 text-[10px] uppercase tracking-widest mb-4 font-bold">{level}</p>
      <h3 className="font-serif text-3xl mb-6">{title}</h3>
      <p> text-stone/40 font-light leading-relaxed mb-8">{desc}</p>
      <div className="pt-8 border-t border-sage/5">
        <span className="text-xs uppercase tracking-widest text-stone/30 italic">Coming Soon via Sanity</span>
      </div>
    </div>
  );
}
