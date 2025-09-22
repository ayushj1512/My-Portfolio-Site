"use client";
import { motion } from "framer-motion";
import { Workflow, Rocket, Bot, Cpu } from "lucide-react";
import ElectricBorder from "./ElectricBorder"; // ✅ Import ElectricBorder

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

export default function FocusAreas() {
  return (
    <section className="py-20 relative flex flex-col items-center">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
    <h2 className="text-5xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-accent via-white to-accent animate-gradient-slide">
  Areas of Impact
</h2>

<style jsx>{`
  @keyframes gradientSlide {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }

  .animate-gradient-slide {
    background-size: 200% 200%;
    animation: gradientSlide 3s ease infinite;
  }
`}</style>



<style jsx>{`
  @keyframes gradientGlow {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }

  .animate-gradient-glow {
    background-size: 200% 200%;
    animation: gradientGlow 3s ease infinite;
    text-shadow: 0 0 8px rgba(255, 255, 255, 0.6), 0 0 20px rgba(140,112,212,0.5);
  }
`}</style>


      
        <p className="mt-6 text-white/70 max-w-2xl mx-auto leading-relaxed">
          Beyond coding — I focus on innovation, adaptability, and future-ready solutions.
        </p>
      </motion.div>

      {/* Focus Area Cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 justify-center w-full max-w-7xl">
        {focusAreas.map((area, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -5, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 200, damping: 15, delay: idx * 0.1 }}
          >
            <ElectricBorder
              color="#7C3AED"
              thickness={2}
              chaos={1.5}
              speed={1.5}
              className="w-full h-full"
            >
              <div className="relative p-8 rounded-2xl bg-transparent  overflow-hidden min-h-[240px] flex flex-col items-center text-center">
                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-accent/10 border border-accent/40 mb-6">
                  <area.icon className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-lg font-semibold text-accent mb-3 tracking-wide">
                  {area.title}
                </h3>
                <p className="text-white/70 text-sm leading-relaxed mt-auto">
                  {area.description}
                </p>
              </div>
            </ElectricBorder>
          </motion.div>
        ))}
      </div>
    </section>

    
  );
  
}

