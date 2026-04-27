import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TheRealization from "@/components/TheRealization";
import TheScience from "@/components/TheScience";
import Pathways from "@/components/Pathways";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-bg">
      <Navbar />
      <Hero />
      <TheRealization />
      <TheScience />
      <Pathways />
      <Footer />
    </main>
  );
}
