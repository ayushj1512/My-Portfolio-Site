"use client";
import { motion } from "framer-motion";
import { BriefcaseIcon, RocketLaunchIcon, PaintBrushIcon, SparklesIcon, BuildingOfficeIcon } from "@heroicons/react/24/outline";

export default function About() {
  const featured = {
    icon: <BuildingOfficeIcon className="w-12 h-12 text-accent" />,
    label: "Founder @",
    value: "ENGAGEER",
  };

  const stats = [
    { icon: <BriefcaseIcon className="w-6 h-6 text-accent" />, label: "Experience", value: "1+ Year" },
    { icon: <RocketLaunchIcon className="w-6 h-6 text-accent" />, label: "Projects Shipped", value: "7" },
    { icon: <PaintBrushIcon className="w-6 h-6 text-accent" />, label: "Speciality", value: "UI/UX + Frontend" },
    { icon: <SparklesIcon className="w-6 h-6 text-accent" />, label: "Opportunities", value: "Open" },
  ];

  return (
    <section id="about" className="py-20 space-y-10">
      {/* Top line with glow effect */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative w-3/4 mx-auto h-1 rounded-full overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-accent via-purple-400 to-purple-600 animate-pulse" />
      </motion.div>

      <div className="section-container grid md:grid-cols-2 gap-12 items-center">
        {/* Stats - Left */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-8 w-full"
        >
          {/* Featured Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex flex-col items-center justify-center p-6 bg-gradient-to-r from-accent/30 to-purple-500/30 border border-accent/40 rounded-2xl shadow-xl hover:shadow-accent/50 hover:scale-105 transition-all duration-300 text-center"
          >
            <div className="mb-3">{featured.icon}</div>
            <p className="text-white text-lg">{featured.label}</p>
            <p className="text-white font-extrabold text-3xl">{featured.value}</p>
          </motion.div>

          {/* Rest of stats */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex flex-col items-center justify-center p-5 bg-black/40 border border-accent/30 rounded-xl shadow-md hover:shadow-accent/40 hover:scale-105 transition-all duration-300 text-center"
              >
                <div className="mb-2">{s.icon}</div>
                <p className="text-white font-bold text-xl">{s.value}</p>
                <p className="text-white/70 text-sm">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Text - Right */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          {/* Heading with underline shine */}
          <div className="relative inline-block">
            <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-accent to-purple-500 bg-clip-text text-transparent">
              Behind the Code
            </h2>
          </div>

          <p className="text-white/80 text-lg md:text-xl leading-relaxed text-justify">
            I’m a Software Engineer and Co-Founder of{" "}
            <span className="text-accent font-semibold">Engageer</span>, where I bring together Full Stack Development, App Development, Generative AI, and Prompt Engineering to turn ambitious ideas into intelligent, real-world solutions.
          </p>
          <p className="text-white/80 text-lg md:text-xl leading-relaxed text-justify">
            My B.Tech in CSE provided the foundation, but it’s the hands-on work — coding late into the night, solving complex problems, and leading projects from inception to launch — that shaped me into the engineer I am today.
          </p>
          <p className="text-white/80 text-lg md:text-xl leading-relaxed text-justify">
            At <span className="text-accent font-semibold">Engageer</span>, I wear multiple hats — developer, strategist, and problem-solver — building brands that not only work flawlessly but also deliver measurable impact. At{" "}
            <span className="text-accent font-semibold">SSS</span>, I focus on creating robust, future-ready applications that scale with business needs.
          </p>
        </motion.div>
      </div>

      {/* Bottom line */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="relative w-3/4 mx-auto h-1 rounded-full overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-accent to-purple-600 animate-pulse" />
      </motion.div>
    </section>
  );
}
