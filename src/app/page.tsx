import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import IntroductionTeaser from "@/components/IntroductionTeaser";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <IntroductionTeaser />
      <Footer />
    </main>
  );
}
