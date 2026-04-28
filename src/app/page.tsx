import Navbar from "@/components/Navbar";
import CinematicEngine from "@/components/CinematicEngine";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-[#FCFAF7] selection:bg-clay/10">
      <Navbar />
      <CinematicEngine />
      <Footer />
    </main>
  );
}
