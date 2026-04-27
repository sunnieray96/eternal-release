import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import IntroductionTeaser from "@/components/IntroductionTeaser";
import TheScience from "@/components/TheScience";
import CoursePortal from "@/components/CoursePortal";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-[#FCFAF7]">
      <Navbar />
      <Hero />
      <IntroductionTeaser />
      <TheScience />
      <CoursePortal />
      <Contact />
      <Footer />
    </main>
  );
}
