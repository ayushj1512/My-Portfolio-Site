"use client";
import { motion } from "framer-motion";
import { BriefcaseIcon, RocketLaunchIcon, PaintBrushIcon, SparklesIcon } from "@heroicons/react/24/outline";

export default function About() {
  const stats = [
    { icon: <BriefcaseIcon className="w-6 h-6 text-accent" />, label: "Experience", value: "1+ Year" },
    { icon: <RocketLaunchIcon className="w-6 h-6 text-accent" />, label: "Projects Shipped", value: "7" },
    { icon: <PaintBrushIcon className="w-6 h-6 text-accent" />, label: "Speciality", value: "UI/UX + Frontend" },
    { icon: <SparklesIcon className="w-6 h-6 text-accent" />, label: "Opportunities", value: "Open" },
  ];

  return (
    <section id="about" className="py-28 ">
      <div className="section-container grid md:grid-cols-2 gap-12 items-center">
        {/* Stats - Left */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-2 gap-6"
        >
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex flex-col items-center justify-center p-6 bg-black/30 border border-accent/20 rounded-2xl shadow-md hover:shadow-accent/30 transition-all duration-300 text-center"
            >
              <div className="mb-2">{s.icon}</div>
              <p className="text-white font-semibold text-lg">{s.value}</p>
              <p className="text-white/60 text-sm">{s.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Text - Right */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-accent to-purple-500 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-white/80 text-lg md:text-xl leading-relaxed">
            Hey, I’m <span className="text-accent font-semibold">Ayush</span> — a <span className="bg-accent/20 px-1 rounded">problem-solver</span>, design enthusiast, and code crafter.  
            With <span className="text-accent font-medium">1+ year</span> of experience, I love turning ideas into{" "}
            <span className="bg-gradient-to-r from-accent to-purple-400 bg-clip-text text-transparent font-semibold">
              sleek, functional, and memorable
            </span>{" "}
            digital experiences. My approach combines clean code, smooth UI/UX, and subtle creativity to make every project shine.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
