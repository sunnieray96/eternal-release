import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import IntroductionTeaser from "@/components/IntroductionTeaser";
import TheRealization from "@/components/TheRealization";
import TheScience from "@/components/TheScience";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main style={{ backgroundColor: '#FCFAF7' }}>
      <Navbar />
      <Hero />
      <IntroductionTeaser />
      <TheRealization />
      <TheScience />
      <Footer />
    </main>
  );
}
