"use client";
import { motion } from "framer-motion";
import FuzzyText from "./FuzzyText";

const items = [
  {
    title: "Craftra",
    desc: "An artistic e-commerce platform specializing in premium artwork and stationery supplies, designed for creators and professionals.",
    tag: "Art & Stationery",
    url: "https://www.craftra.co/",
  },
  {
    title: "New Lakshmi Store",
    desc: "A B2B stationery and business supply platform empowering retailers and enterprises with streamlined procurement solutions.",
    tag: "B2B Supplies",
    url: "https://www.newlakshmistore.com/",
  },
  {
    title: "Velour Accessories",
    desc: "A luxury accessories brand offering premium handbags and lifestyle products, blending style with craftsmanship.",
    tag: "Fashion & Accessories",
    url: "https://shopvelour.in/",
  },
  {
    title: "Bhagwati Cars",
    desc: "A business-driven platform for pre-owned car sales, helping dealerships attract customers and maximize reach.",
    tag: "Automotive Business",
    url: "https://bhagwaticars.com/",
  },
  {
    title: "Count88",
    desc: "An ethnic footwear e-commerce brand curating premium handcrafted collections rooted in culture and modern style.",
    tag: "Ethnic E-commerce",
    url: "https://count88-frontend.vercel.app/",
  },
  {
    title: "Miray Fashions",
    desc: "A MERN-based e-commerce solution rebuilt with Next.js, featuring an analytics-driven backend and a powerful admin panel for product, order, and customer management.",
    tag: "E-commerce + Admin + Analytics",
    url: "https://mirayfashions.in/",
  },
];

export default function Projects() {
  const hoverIntensity = 0.4;
  const enableHover = true;

  return (
    <section id="projects" className="py-28 relative overflow-hidden">
      <div className="absolute inset-0" />

      {/* ✅ No max-width container, full width */}
      <div className="relative z-10 w-full px-6">
        {/* Heading */}
        <div className="text-center">
          <FuzzyText
            fontSize="clamp(2rem, 5vw, 3.2rem)"
            fontWeight={800}
            color="#8C70D4"
            baseIntensity={0.15}
            hoverIntensity={hoverIntensity}
            enableHover={enableHover}
          >
            Crafted With Precision
          </FuzzyText>

          <p className="mt-6 text-white/70 max-w-3xl mx-auto text-base md:text-lg">
            A curated selection of my most impactful digital builds — blending
            creativity, technology, and flawless execution.
          </p>
        </div>

        {/* ✅ Flex layout + wrap (no grid) */}
        <div className="mt-14 flex flex-wrap justify-center gap-10">
          {items.map((it, i) => (
            <ProjectCard it={it} index={i} key={it.title} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ it, index }) {
  return (
    <motion.a
      href={it.url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Visit ${it.title} project`}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55, delay: index * 0.08 }}
      className="
        group relative overflow-hidden
        rounded-3xl border border-accent/20 bg-black/45 backdrop-blur-xl
        shadow-lg hover:shadow-xl hover:shadow-accent/25
        hover:border-accent/40 hover:-translate-y-1
        transition-all duration-500
        w-full max-w-[760px]
      "
    >
      {/* ✅ 16:9 Preview */}
      <div className="relative w-full aspect-video">
        <iframe
          src={it.url}
          className="absolute inset-0 w-full h-full border-0 transform group-hover:scale-[1.03] transition-transform duration-700 ease-out"
          loading="lazy"
          title={it.title}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent" />
      </div>

      {/* Content */}
      <div className="p-6 pt-5">
        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-accent/90 text-black shadow-sm">
          {it.tag}
        </span>

        <h3 className="mt-3 text-xl md:text-2xl font-bold text-white leading-tight">
          {it.title}
        </h3>

        <p className="mt-2 text-white/75 text-sm leading-relaxed line-clamp-3">
          {it.desc}
        </p>

        <div className="mt-5 flex items-center gap-2 text-accent/90 text-sm font-semibold">
          <span className="group-hover:underline underline-offset-4">
            Open project
          </span>
          <span className="transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </div>
      </div>
    </motion.a>
  );
}
