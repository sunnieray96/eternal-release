export default function Hero() {
  return (
    <section className="min-h-screen flex items-center bg-gradient-to-b from-stone-50 to-amber-50 px-6 pt-28">
      <div className="max-w-6xl mx-auto">
        <p className="uppercase tracking-[0.3em] text-sm text-green-700 mb-4">
          Nervous system healing
        </p>

        <h1 className="font-serif text-5xl md:text-7xl leading-tight text-stone-900 mb-6">
          Release what your body has been carrying.
        </h1>

        <p className="text-lg text-stone-700 leading-8 max-w-2xl mb-8">
          Eternal Release is a holistic healing space for people moving through trauma, misdiagnosis, emotional overwhelm, and nervous system dysregulation.
        </p>

        <a href="#courses" className="px-7 py-3 rounded-full bg-green-700 text-white font-medium hover:bg-green-800 transition">
          Explore Courses
        </a>
      </div>
    </section>
  );
}
