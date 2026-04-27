import { client } from "@/sanity/lib/client";
import { COURSES_QUERY } from "@/sanity/lib/queries";

interface Module {
  title: string;
  description?: string;
  duration?: string;
}

interface Course {
  _id: string;
  title: string;
  level?: string;
  description: string;
  price?: number;
  duration?: string;
  format?: string;
  popular?: boolean;
  modules?: Module[];
}

const fallbackCourses: Course[] = [
  {
    _id: "fallback-1",
    level: "Foundation",
    title: "Returning to Safety",
    description:
      "A 4-week gentle introduction to somatic awareness. Learn to recognize your nervous system states and build a daily practice of grounding and co-regulation.",
    duration: "4 weeks",
    format: "Self-paced + live Q&A",
  },
  {
    _id: "fallback-2",
    level: "Deepening",
    title: "Fascia & Feeling",
    description:
      "Explore the connection between connective tissue and emotional holding patterns. Includes guided myofascial release sequences designed for trauma survivors.",
    duration: "6 weeks",
    format: "Live cohort",
    popular: true,
  },
  {
    _id: "fallback-3",
    level: "Integration",
    title: "Whole Self, Whole System",
    description:
      "Advanced integration of somatic, fascial, and psychological approaches. For those ready to weave all three pillars into a sustainable healing practice.",
    duration: "8 weeks",
    format: "Mentorship circle",
  },
];

async function getCourses(): Promise<Course[]> {
  try {
    if (!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID) return [];
    const data = await client.fetch(COURSES_QUERY);
    return data && data.length > 0 ? data : [];
  } catch {
    return [];
  }
}

export default async function CoursePortal() {
  const sanityCourses = await getCourses();
  const courses = sanityCourses.length > 0 ? sanityCourses : fallbackCourses;

  return (
    <section id="courses" className="py-24 md:py-32 bg-warm-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sage font-medium text-sm tracking-[0.2em] uppercase mb-4">
            Course Portal
          </p>
          <h2 className="font-serif text-3xl md:text-5xl font-medium text-slate-dark mb-6">
            Begin Your Journey
          </h2>
          <p className="text-stone text-lg leading-relaxed">
            Three pathways designed to meet your nervous system where it is,
            whether you&apos;re just beginning to explore or deepening an existing practice.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {courses.map((course, i) => {
            const isPopular = course.popular ?? i === 1;
            return (
              <div
                key={course._id}
                className={`relative rounded-2xl p-8 md:p-10 border transition-all duration-500 hover:shadow-xl hover:shadow-sage/5 ${
                  isPopular
                    ? "bg-sage/5 border-sage/20 hover:border-sage/40"
                    : "bg-cream/40 border-cream-dark/40 hover:border-sage/20"
                }`}
              >
                {isPopular && (
                  <span className="absolute -top-3 left-8 text-xs font-medium text-white bg-sage px-3 py-1 rounded-full">
                    Most Popular
                  </span>
                )}

                <p className="text-xs font-medium text-sage tracking-[0.15em] uppercase mb-2">
                  {course.level}
                </p>
                <h3 className="font-serif text-2xl font-medium text-slate-dark mb-4">
                  {course.title}
                </h3>
                <p className="text-stone text-[15px] leading-relaxed mb-6">
                  {course.description}
                </p>

                {course.price != null && (
                  <p className="text-sage-dark font-medium text-lg mb-4">
                    ${course.price}
                  </p>
                )}

                <div className="flex items-center gap-4 mb-8 text-sm text-stone">
                  {course.duration && (
                    <span className="flex items-center gap-1.5">
                      <svg
                        width="16"
                        height="16"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        viewBox="0 0 24 24"
                      >
                        <circle cx="12" cy="12" r="10" />
                        <path d="M12 6v6l4 2" strokeLinecap="round" />
                      </svg>
                      {course.duration}
                    </span>
                  )}
                  {course.format && (
                    <span className="flex items-center gap-1.5">
                      <svg
                        width="16"
                        height="16"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                       />
                      </svg>
                      {course.format}
                    </span>
                  )}
                </div>

                <a
                  href="#contact"
                  className={`block w-full text-center py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                    isPopular
                      ? "bg-sage text-white hover:bg-sage-dark hover:shadow-lg hover:shadow-sage/20"
                      : "border border-sage/30 text-sage-dark hover:bg-sage/5"
                  }`}
                >
                  Learn More
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
