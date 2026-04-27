import Navbar from "@/components/Navbar";
import CinematicScroll from "@/components/CinematicScroll";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-bg selection:bg-clay/20">
      <Navbar />
      <CinematicScroll />
      <Footer />
    </main>
  );
}
