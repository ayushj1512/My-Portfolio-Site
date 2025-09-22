"use client";
import { motion } from "framer-motion";
import FuzzyText from './FuzzyText';

const items = [
  { 
    title: "Craftra", 
    desc: "Elegant e-commerce platform for premium products.", 
    tag: "Agency", 
    url: "https://www.craftra.co/"
  },
  { 
    title: "New Lakshmi Store", 
    desc: "Connects businesses seamlessly, helping them showcase services.", 
    tag: "E-commerce", 
    url: "https://www.newlakshmistore.com/"
  },
  { 
    title: "Velour Shop", 
    desc: "Luxury clothing store with smooth shopping experience.", 
    tag: "Fashion", 
    url: "https://shopvelour.in/"
  },
  { 
    title: "Bhagwati Cars", 
    desc: "Automobile dealership showcasing premium vehicles.", 
    tag: "Automotive", 
    url: "https://bhagwaticars.com/"
  }
];

export default function Projects() {
  const hoverIntensity = 0.4;
  const enableHover = true;

  return (
    <section id="projects" className="py-28 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0" />

      <div className="section-container relative z-10 text-center">
        {/* Heading */}
        <div className="mx-auto">
          <FuzzyText
            fontSize="clamp(1.8rem, 5vw, 3rem)" // responsive & slightly smaller
            fontWeight={800}
            color="#8C70D4" // accent color
            baseIntensity={0.15}
            hoverIntensity={hoverIntensity}
            enableHover={enableHover}
          >
            Crafted With Precision
          </FuzzyText>

          <p className="mt-4 text-white/70 max-w-3xl mx-auto text-base md:text-lg">
            A curated selection of my most impactful digital builds — blending
            creativity, technology, and flawless execution.
          </p>
        </div>

        {/* Project Grid */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 mt-10">
          {items.map((it, i) => (
            <motion.a
              href={it.url}
              target="_blank"
              rel="noopener noreferrer"
              key={it.title}
              aria-label={`Visit ${it.title} project`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative overflow-hidden rounded-3xl border border-accent/20 bg-black/30 backdrop-blur-xl shadow-lg hover:shadow-2xl hover:scale-105 transition-transform duration-500"
            >
              {/* Live preview */}
              <div className="overflow-hidden rounded-3xl">
                <iframe
                  src={it.url}
                  className="w-full aspect-video border-0 transform group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                  title={it.title}
                />
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 w-full p-6 translate-y-8 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-accent to-accent/70 text-black shadow-sm mb-3 group-hover:animate-pulse">
                  {it.tag}
                </span>
                <h3 className="text-xl md:text-2xl font-bold text-white">
                  {it.title}
                </h3>
                <p className="text-white/70 text-sm mt-1">{it.desc}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
