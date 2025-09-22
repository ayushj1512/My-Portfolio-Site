"use client";
import { motion } from "framer-motion";
import { Code, Smartphone, Palette, Server, Database } from "lucide-react";
import FocusAreas from "../components/FocusAreas";

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

export default function SkillsAndFocus() {
  return (
    <section id="skills" className="py-20 relative overflow-hidden">
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
                transition={{
                  type: "spring",
                  stiffness: 200,
                  damping: 15,
                  duration: 0.6,
                  delay: idx * 0.1,
                }}
                className="relative group bg-black border border-accent/20 rounded-2xl h-[340px] p-8 backdrop-blur-md hover:border-accent/60 shadow-lg hover:shadow-accent/20 transition flex flex-col items-center text-center overflow-hidden"
              >
                {/* Default View */}
                <div className="absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-500 group-hover:opacity-0">
                  <div className="w-20 h-20 flex items-center justify-center rounded-full bg-accent/10 border border-accent/40 mb-5 shadow-inner">
                    <skill.icon className="w-10 h-10 text-accent" />
                  </div>
                  <h3 className="text-lg font-semibold text-accent tracking-wide">
                    {skill.category}
                  </h3>
                </div>

                {/* Hover View */}
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
      </div>
    </section>
  );
}
