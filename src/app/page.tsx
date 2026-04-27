import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import IntroductionTeaser from "@/components/IntroductionTeaser";
import Approach from "@/components/Approach";
import BlogPreview from "@/components/BlogPreview";
import CoursePortal from "@/components/CoursePortal";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <IntroductionTeaser />
        <Approach />
        <BlogPreview />
        <CoursePortal />
      </main>
      <Footer />
    </>
  );
}
