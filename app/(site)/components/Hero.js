"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="section-container grid md:grid-cols-2 gap-10 place-items-center min-h-[80vh] py-20">
        
        {/* Left Side - Intro */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <p className="uppercase tracking-widest text-accent/80 text-xs">
            Software Developer
          </p>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-[1.1]">
            Hi, I&apos;m <span className="text-accent">Ayush Juneja</span>.
            <br />I build sleek, scalable digital experiences.
          </h1>
          <p className="text-white/70 max-w-xl">
            B.Tech CSE student with 1+ year of experience creating impactful
            digital solutions. Passionate about turning ideas into elegant,
            user-focused products that deliver real value and leave a lasting
            impression.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#projects" className="btn-primary">
              View My Work
            </a>
            <a
              href="#contact"
              className="inline-flex items-center rounded-2xl px-5 py-3 border border-white/20 hover:bg-white/5 transition"
            >
              Contact
            </a>
          </div>
        </motion.div>

        {/* Right Side - Portrait Only */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="w-full flex justify-center"
        >
          <div className="relative rounded-2xl overflow-hidden border-4 border-accent/50 shadow-lg max-w-sm">
            <Image
              src="/avataar1.png" // Replace with your image path
              alt="Ayush Juneja Avatar"
              width={500}
              height={600}
              className="object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
