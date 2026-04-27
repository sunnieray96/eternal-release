"use client";
export default function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 bg-cream/50">
      <div className="max-w-2xl mx-auto px-6 text-center">
        <div className="w-12 h-12 rounded-full bg-sage/10 flex items-center justify-center mx-auto mb-6">
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" className="text-sage">
            <path d="M21 8l-9 6-9-6m18 0v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8m18 0a2 2 0 00-2-2H5a2 2 0 00-2 2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <h2 className="font-serif text-3xl md:text-4xl font-medium text-slate-dark mb-4">
          Let&apos;s connect
        </h2>
        <p className="text-stone text-lg leading-relaxed mb-8">
          Whether you have questions about a course, want to share your story, or just need someone 
          who understands, I&apos;m here.
        </p>

        <form
          onSubmit={(e) => e.preventDefault()}
          className="space-y-4 text-left"
        >
          <div className="grid sm:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Your name"
              className="w-full px-4 py-3 rounded-xl bg-warm-white border border-cream-dark/60 text-slate-dark placeholder:text-stone/50 text-sm focus:outline-none focus:border-sage/50 focus:ring-2 focus:ring-sage/10 transition-all"
            />
            <input
              type="email"
              placeholder="Email address"
              className="w-full px-4 py-3 rounded-xl bg-warm-white border border-cream-dark/60 text-slate-dark placeholder:text-stone/50 text-sm focus:outline-none focus:border-sage/50 focus:ring-2 focus:ring-sage/10 transition-all"
            />
          </div>
          <textarea
            rows={4}
            placeholder="What's on your heart?"
            className="w-full px-4 py-3 rounded-xl bg-warm-white border border-cream-dark/60 text-slate-dark placeholder:text-stone/50 text-sm focus:outline-none focus:border-sage/50 focus:ring-2 focus:ring-sage/10 transition-all resize-none"
          />
          <div className="text-center">
            <button
              type="submit"
              className="px-8 py-3 bg-sage text-white rounded-full text-sm font-medium hover:bg-sage-dark transition-all duration-300 hover:shadow-lg hover:shadow-sage/20"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
