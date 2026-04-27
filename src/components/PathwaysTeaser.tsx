import { client } from "@/sanity/lib/client";
import { COURSES_QUERY } from "@/sanity/lib/queries";

export default async function PathwaysTeaser() {
  const courses = await client.fetch(COURSES_QUERY).catch(() => []);

  return (
    <section id="courses" className="py-48 md:py-80 bg-white">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-40">
           <p className="text-[10px] uppercase tracking-[0.4em] font-bold text-black/30 mb-8">Offerings</p>
           <h2 className="font-serif text-5xl md:text-[9rem] font-light leading-tight">Pathways to Flow</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-24">
           <PathwayItem title="The 7-Day Reset" />
           <PathwayItem title="Returning to Safety" />
           <PathwayItem title="Whole System" />
        </div>
      </div>
    </section>
  );
}

function PathwayItem({ title }: any) {
   return (
      <div className="text-center space-y-12 group pointer-events-none opacity-40">
         <div className="aspect-square rounded-full border border-[#D9D2C5]/30 flex items-center justify-center p-16 transition-all duration-1000">
            <div className="w-full h-full rounded-full border-[0.5px] border-black/5" />
         </div>
         <h3 className="font-serif text-3xl italic text-black">{title}</h3>
         <p className="text-[10px] uppercase tracking-[0.4em] font-bold text-[#D9D2C5]">Opening Soon</p>
      </div>
   )
}
