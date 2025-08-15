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
    items: [
      "Flutter",
      "Google Firebase",
      "Cross-Platform Mobile Development",
    ],
  },
  {
    category: "UI/UX Enthusiast",
    icon: Palette,
    items: ["User-Centered Design", "Usability Testing", "Feedback Analysis"],
  },
  {
    category: "Backend Technologies",
    icon: Server,
    items: [
      "NodeJS",
      "ExpressJS",
      "Python",
      "Mongoose",
      "RESTful API",
      "GraphQL",
    ],
  },
  {
    category: "Database Technologies",
    icon: Database,
    items: [
      "FirestoreDB",
      "ClickhouseDB",
      "MongoDB",
      "PRO MySQL",
      "Supabase",
    ],
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
    <section id="skills" className="py-2 relative overflow-hidden">
      {/* Ambient Background Glow */}
      <div className="absolute inset-0 " />

      <div className="section-container space-y-24 relative z-10">
        {/* Skills Section */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-4xl font-extrabold bg-gradient-to-r from-accent via-white to-accent bg-clip-text text-transparent drop-shadow-lg">
              My Arsenal
            </h2>
            <div className="w-24 h-1 mx-auto mt-4 bg-gradient-to-r from-transparent via-accent to-transparent rounded-full" />
            <p className="mt-4 text-white/70 max-w-2xl mx-auto">
              A blend of cutting-edge technologies and design principles to craft
              seamless, impactful digital experiences.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
            {skills.map((skill, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40, rotate: 2 }}
                whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                whileHover={{
                  y: -8,
                  rotate: -1,
                  boxShadow: "0 25px 50px rgba(0,0,0,0.35)",
                }}
                className="relative bg-black/40 border border-accent/30 rounded-2xl p-6 backdrop-blur-md group hover:border-accent/60 transition"
              >
                {/* Floating Icon Circle */}
                <div className="w-14 h-14 flex items-center justify-center rounded-full bg-accent/20 border border-accent/50 mb-5 group-hover:scale-110 transition-transform duration-300">
                  <skill.icon className="w-7 h-7 text-accent" />
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold text-accent mb-4">
                  {skill.category}
                </h3>

                {/* Skills List */}
                <ul className="space-y-2 text-white/80 text-sm">
                  {skill.items.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-2 hover:text-accent transition"
                    >
                      <span className="w-1.5 h-1.5 bg-accent rounded-full" />
                      {item}
                    </li>
                  ))}
                </ul>

                {/* Glow on Hover */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 bg-accent/10 blur-2xl transition duration-300"></div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Focus Areas Section */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            
            <h2 className="text-4xl md:text-4xl font-extrabold bg-gradient-to-r from-accent via-white to-accent bg-clip-text text-transparent drop-shadow-lg">
              Areas of Impact
            </h2>
            <div className="w-28 h-1 mx-auto mt-4 bg-gradient-to-r from-transparent via-accent to-transparent rounded-full" />
            <p className="mt-4 text-white/70 max-w-2xl mx-auto">
              Beyond coding — I focus on innovation, adaptability, and future-ready solutions.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {focusAreas.map((area, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{
                  y: -6,
                  scale: 1.03,
                  boxShadow: "0 25px 50px rgba(0,0,0,0.25)",
                }}
                className="relative p-6 rounded-2xl bg-black/40 border border-accent/30 backdrop-blur-md group overflow-hidden"
              >
                <div className="w-14 h-14 flex items-center justify-center rounded-full bg-accent/20 border border-accent/50 mb-5 group-hover:scale-110 transition-transform duration-300">
                  <area.icon className="w-7 h-7 text-accent" />
                </div>
                <h3 className="text-lg font-semibold text-accent mb-2">
                  {area.title}
                </h3>
                <p className="text-white/70 text-sm">{area.description}</p>
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 bg-accent/10 blur-2xl transition duration-300"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
