import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import StorySection from "@/components/StorySection";
import ScienceSection from "@/components/ScienceSection";
import PathwaysSection from "@/components/PathwaysSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-bg selection:bg-clay/20">
      <Navbar />
      <Hero />
      <StorySection />
      <ScienceSection />
      <PathwaysSection />
      <Footer />
    </main>
  );
}
