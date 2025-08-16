import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Skills from "./components/Skills";
import Timeline from './components/Timeline';
import Header from './components/Header';

export default function Page() {
  return (
    <main className="bg-black">
      {/* Navbar always floating on left center */}
      <Navbar />
      <Header />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Timeline />
      {/* <Testimonials /> */}
      <Contact />
      <Footer />
    </main>
  );
}
