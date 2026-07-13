import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Languages from "../components/Languages";
import Features from "../components/Features";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Languages />
      <Features />
      <Testimonials />
      <Footer />
    </>
  );
}

export default Home;