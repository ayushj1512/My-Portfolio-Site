"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { Typewriter } from 'react-simple-typewriter';

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
          className="space-y-6 flex flex-col justify-center min-h-[500px]"
        >
          <p className="uppercase tracking-widest text-accent/80 text-xs">
            Software Developer
          </p>

          {/* Typewriter Intro with fixed height for 2 lines */}
          <h1 className="text-4xl md:text-6xl font-extrabold leading-[1.1]"> 
            Hi, I&apos;m <span className="text-accent">Ayush Juneja</span>.
            <br />
            <span className="text-white/80 block min-h-[140px] md:min-h-[250px]"> 
              <Typewriter
                words={[
                  "Building sleek, scalable digital experiences.",
                  "Turning ideas into elegant, user-focused products.",
                  "Creating solutions that leave a lasting impression.",
                  "Passionate about web development and AI-driven projects."
                ]}
                loop={true}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={2000}
              />
            </span>
          </h1>

          <p className="text-white/70 max-w-xl">
            B.Tech CSE student with 1+ year of experience creating impactful
            digital solutions. Skilled in React, Next.js, and modern web technologies.
            Always learning, always coding, always improving.
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

        {/* Right Side - Portrait with hover effect */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="w-full flex justify-center items-center min-h-[500px]"
        >
          <div className="relative rounded-2xl overflow-hidden border-4 border-accent/50 shadow-lg max-w-sm group">
            {/* Default Image */}
            <Image
              src="/avataar2.png"
              alt="Ayush Juneja Avatar"
              width={500}
              height={600}
              className="object-cover transition-opacity duration-500 group-hover:opacity-0"
            />
            {/* Hover Image */}
            <Image
              src="/avataar3.png"
              alt="Ayush Juneja Hover Avatar"
              width={500}
              height={600}
              className="absolute top-0 left-0 object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
