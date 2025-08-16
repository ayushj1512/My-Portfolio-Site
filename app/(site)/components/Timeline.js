"use client";
import { motion } from "framer-motion";
import { GraduationCap, Briefcase, School } from "lucide-react";

export default function Timeline() {
  const timeline = [
    {
      title: "Software Developer",
      subtitle: "Street Style Store",
      date: "Jan 2025 – Present",
      icon: <Briefcase className="w-6 h-6 text-white" />,
      description:
        "Developed and maintained responsive web and mobile apps using React, Vue.js, Tailwind CSS, and Flutter. Integrated Firebase & backend APIs for real-time data sync. Boosted engagement by 30% and retention by 25%.",
    },
    {
      title: "B.Tech in Computer Science",
      subtitle: "GGSIPU",
      date: "2021 – 2025",
      icon: <GraduationCap className="w-6 h-6 text-white" />,
      description:
        "Specialized in algorithms, data structures, software development, and databases. Built strong practical skills through projects and internships.",
    },
    {
      title: "Class 12 (Non-Medical Science)",
      subtitle: "DAV | CBSE",
      date: "2018 – 2020",
      icon: <School className="w-6 h-6 text-white" />,
      description:
        "Focused on Physics, Chemistry, Mathematics, and Computer Science. Strengthened analytical and problem-solving skills.",
    },
    {
      title: "Class 10",
      subtitle: "DAV | CBSE",
      date: "Completed in 2018",
      icon: <School className="w-6 h-6 text-white" />,
      description:
        "Completed Class 10 under CBSE curriculum with a strong foundation in core subjects.",
    },
  ];

  return (
    <section id="timeline" className="relative py-24 scroll-mt-20">
      <div className="section-container relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-accent via-white to-accent bg-clip-text text-transparent drop-shadow-lg">
            Developer’s Evolution
          </h2>
          <div className="w-28 h-1 mx-auto mt-4 bg-gradient-to-r from-transparent via-accent to-transparent rounded-full" />
          <p className="mt-6 text-white/70 max-w-2xl mx-auto leading-relaxed">
            A timeline of growth, learning, and building impactful digital
            experiences.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative ml-8">
          {/* Vertical timeline line */}
          <div className="absolute top-0 left-[22px] h-full w-[3px] bg-gradient-to-b from-accent via-accent/60 to-transparent rounded-full" />

          {timeline.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: i * 0.2, ease: "easeOut" }}
              viewport={{ once: true }}
              className="mb-16 relative flex items-start group"
            >
              {/* Node with glow + pulse */}
              <div className="absolute -left-[6px] flex items-center justify-center w-12 h-12 rounded-full bg-accent shadow-[0_0_20px_rgba(0,255,180,0.5)] z-20 group-hover:scale-110 transition-transform duration-500">
                {item.icon}
              </div>

              {/* Timeline Card */}
              <div className="ml-16 w-full p-6 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 shadow-md relative overflow-hidden group hover:border-accent/40 transition-all duration-500">
                {/* Animated background glow inside card */}
                <div className="absolute inset-0 bg-gradient-to-tr from-accent/10 via-transparent to-accent/10 opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-700" />

                <div className="relative z-10">
                  <h3 className="text-xl md:text-2xl font-semibold text-accent">
                    {item.title}
                  </h3>
                  <p className="text-white/60 text-sm md:text-base mb-3">
                    {item.subtitle} • {item.date}
                  </p>
                  <p className="text-white/80 text-sm md:text-base leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
