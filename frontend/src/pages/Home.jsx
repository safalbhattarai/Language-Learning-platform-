import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Languages from "../components/Languages";
import Features from "../components/Features";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";
import CoursesPreview from "../components/CoursesPreview";
import TrustedBy from "../components/TrustedBy";
import CallToAction from "../components/CallToAction";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Languages />
      <Features />
      <CoursesPreview />
      <Testimonials />
      <Footer />
      
    </>
  );
}

export default Home;