import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import StoryTeaser from "@/components/StoryTeaser";
import TheWork from "@/components/TheWork";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-[#FCFAF7]">
      <Navbar />
      <Hero />
      <StoryTeaser />
      <TheWork />
      <Footer />
    </main>
  );
}
