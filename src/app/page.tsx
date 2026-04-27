import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import IntroductionTeaser from "@/components/IntroductionTeaser";
import TheScience from "@/components/TheScience";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-bg">
      <Navbar />
      <Hero />
      <IntroductionTeaser />
      <TheScience />
      <Footer />
    </main>
  );
}
