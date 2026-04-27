import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutMe from "@/components/AboutMe";
import Approach from "@/components/Approach";
import BlogPreview from "@/components/BlogPreview";
import CoursePortal from "@/components/CoursePortal";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <AboutMe />
        <Approach />
        <BlogPreview />
        <CoursePortal />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
