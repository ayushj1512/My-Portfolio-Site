import Navbar from "../(site)/components/Navbar";
import Hero from "../(site)/components/Hero";
import About from "../(site)/components/About";
import Projects from "../(site)/components/Projects";
import Testimonials from "../(site)/components/Testimonials";
import Contact from "../(site)/components/Contact";
import Footer from "../(site)/components/Footer";
import Skills from "../(site)/components/Skills";
import Timeline from '../(site)/components/Timeline';
import Header from '../(site)/components/Header';
import FocusAreas from "../(site)/components/FocusAreas";
export default function Page() {
  return (
    <main className="bg-black">
      {/* Navbar always floating on left center */}
      <Navbar />
      <Header />
      <Hero />
      <About />
      <Skills />
      <FocusAreas />
      <Projects />
      <Timeline />
      {/* <Testimonials /> */}
      <Contact />
      <Footer />
    </main>
  );
}
