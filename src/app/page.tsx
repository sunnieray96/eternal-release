import Navbar from "@/components/Navbar";
import ImmersiveSanctuary from "@/components/ImmersiveSanctuary";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-bg selection:bg-clay/20">
      <Navbar />
      <ImmersiveSanctuary />
      <Footer />
    </main>
  );
}
