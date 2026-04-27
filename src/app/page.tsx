import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import StoryTeaser from "@/components/StoryTeaser";
import TheWork from "@/components/TheWork";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <StoryTeaser />
      <TheWork />
      <Footer />
    </main>
  );
}
