import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TheRealization from "@/components/TheRealization";
import TheScience from "@/components/TheScience";
import PathwaysTeaser from "@/components/PathwaysTeaser";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <TheRealization />
      <TheScience />
      <PathwaysTeaser />
      <Footer />
    </main>
  );
}
