import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TheRealization from "@/components/TheRealization";
import TheScience from "@/components/TheScience";
import PathwaysTeaser from "@/components/PathwaysTeaser";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main style={{ backgroundColor: '#FCFAF7' }}>
      <Navbar />
      <Hero />
      <TheRealization />
      <TheScience />
      <PathwaysTeaser />
      <Footer />
    </main>
  );
}
