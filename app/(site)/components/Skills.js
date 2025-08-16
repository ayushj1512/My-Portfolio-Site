"use client";
import { motion } from "framer-motion";
import {
  Code,
  Smartphone,
  Palette,
  Server,
  Database,
  Rocket,
  Cpu,
  Bot,
  Workflow,
} from "lucide-react";

const skills = [
  {
    category: "Web Development",
    icon: Code,
    items: [
      "ReactJS",
      "VueJS",
      "Tailwind CSS",
      "NextJS",
      "Nuxt",
      "Responsive Web Design",
    ],
  },
  {
    category: "App Development",
    icon: Smartphone,
    items: ["Flutter", "Google Firebase", "Cross-Platform Mobile Development"],
  },
  {
    category: "UI/UX Enthusiast",
    icon: Palette,
    items: ["User-Centered Design", "Usability Testing", "Feedback Analysis"],
  },
  {
    category: "Backend Technologies",
    icon: Server,
    items: ["NodeJS", "ExpressJS", "Python", "Mongoose", "RESTful API", "GraphQL"],
  },
  {
    category: "Database Technologies",
    icon: Database,
    items: ["FirestoreDB", "ClickhouseDB", "MongoDB", "PRO MySQL", "Supabase"],
  },
];

const focusAreas = [
  {
    title: "Agile Development Practices",
    icon: Workflow,
    description:
      "Iterative approach ensuring speed and adaptability in every project.",
  },
  {
    title: "Low Code / No Code",
    icon: Rocket,
    description:
      "Delivering fast prototypes and solutions without heavy development overhead.",
  },
  {
    title: "Generative AI",
    icon: Bot,
    description:
      "Building innovative AI-driven applications for smarter user experiences.",
  },
  {
    title: "Prompt Engineering",
    icon: Cpu,
    description:
      "Crafting powerful prompts to maximize AI output efficiency and accuracy.",
  },
];

export default function SkillsAndFocus() {
  return (
    <section id="skills" className="py-2 relative overflow-hidden ">
      <div className="section-container space-y-28 relative z-10">
        {/* Skills Section */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-accent via-white to-accent bg-clip-text text-transparent drop-shadow-lg">
              My Arsenal
            </h2>
            <div className="w-24 h-1 mx-auto mt-4 bg-gradient-to-r from-transparent via-accent to-transparent rounded-full" />
            <p className="mt-6 text-white/70 max-w-2xl mx-auto leading-relaxed">
              A blend of cutting-edge technologies and design principles to craft
              seamless, impactful digital experiences.
            </p>
          </motion.div>

          {/* Skill Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">
            {skills.map((skill, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, rotate: 1 }}
                transition={{ type: "spring", stiffness: 200, damping: 15, duration: 0.6, delay: idx * 0.1 }}
                className="relative group bg-black border border-accent/20 rounded-2xl h-[340px] p-8 backdrop-blur-md hover:border-accent/60 shadow-lg hover:shadow-accent/20 transition flex flex-col items-center text-center overflow-hidden"
              >
                {/* Default View (Icon + Heading) */}
                <div className="absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-500 group-hover:opacity-0">
                  <div className="w-20 h-20 flex items-center justify-center rounded-full bg-accent/10 border border-accent/40 mb-5 shadow-inner">
                    <skill.icon className="w-10 h-10 text-accent" />
                  </div>
                  <h3 className="text-lg font-semibold text-accent tracking-wide">
                    {skill.category}
                  </h3>
                </div>

                {/* Hover View (Skills List) */}
                <motion.ul
                  initial={{ opacity: 0, y: 20 }}
                  whileHover={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className="absolute inset-0 flex flex-col justify-center items-start opacity-0 group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 transition-all duration-500 ease-out text-sm text-white/80 space-y-3 px-6 text-left"
                >
                  {skill.items.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-2 hover:text-accent transition-colors duration-300"
                    >
                      <span className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse" />
                      {item}
                    </li>
                  ))}
                </motion.ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Focus Areas */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-accent via-white to-accent bg-clip-text text-transparent drop-shadow-lg">
              Areas of Impact
            </h2>
            <div className="w-28 h-1 mx-auto mt-4 bg-gradient-to-r from-transparent via-accent to-transparent rounded-full" />
            <p className="mt-6 text-white/70 max-w-2xl mx-auto leading-relaxed">
              Beyond coding — I focus on innovation, adaptability, and future-ready solutions.
            </p>
          </motion.div>

          {/* Focus Area Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {focusAreas.map((area, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{
                  y: -10,
                  scale: 1.07,
                  boxShadow: "0 0 25px rgba(0, 255, 180, 0.5), 0 0 50px rgba(0, 255, 180, 0.3)",
                }}
                transition={{ type: "spring", stiffness: 200, damping: 18, duration: 0.5, delay: idx * 0.1 }}
                className="relative p-8 rounded-2xl bg-black border border-accent/20 backdrop-blur-md group overflow-hidden min-h-[240px] shadow-md hover:shadow-accent/20 transition text-left"
              >
                {/* Glowing background animation */}
                <div className="absolute inset-0 bg-gradient-to-tr from-accent/10 via-transparent to-accent/10 opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-700" />

                <div className="relative z-10">
                  <div className="w-16 h-16 flex items-center justify-center rounded-full bg-accent/10 border border-accent/40 mb-6 group-hover:scale-110 transition-transform duration-500 shadow-inner">
                    <area.icon className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="text-lg font-semibold text-accent mb-3 tracking-wide">
                    {area.title}
                  </h3>
                  <p className="text-white/70 text-sm leading-relaxed">
                    {area.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
