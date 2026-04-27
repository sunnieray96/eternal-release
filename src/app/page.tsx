import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import PinnedStorytelling from "@/components/PinnedStorytelling";
import BlogPreview from "@/components/BlogPreview";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-[#FCFAF7] selection:bg-clay/10">
      <Navbar />
      <Hero />
      <PinnedStorytelling />
      <BlogPreview />
      <Contact />
      <Footer />
    </main>
  );
}
