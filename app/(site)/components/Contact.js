"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { EnvelopeIcon } from "@heroicons/react/24/outline";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-black/30 py-20"
    >
      <div className="section-container grid md:grid-cols-2 gap-10 place-items-center">
        
        {/* Left Side - Contact Photo */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full flex justify-center"
        >
          <div className="relative rounded-2xl overflow-hidden border-4 border-white shadow-lg max-w-sm group">
            <Image
              src="/ai.png"
              alt="Ayush Juneja Avatar"
              width={500}
              height={600}
              className="object-cover transition-opacity"
            />
          </div>
        </motion.div>

        {/* Right Side - Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="flex flex-col items-start gap-6 w-full"
        >
     <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
  <span className="text-white">Let&apos;s Build </span>
  <span className="text-accent">Something Awesome</span>
  <span className="text-white"> Together!!!</span>
</h2>


          <p className="text-white/70 max-w-md">
            I&apos;m always excited to connect, collaborate, and create. 
            Reach out via any of the platforms below, or just say hi!
          </p>

          <div className="flex flex-col md:flex-row gap-4">
            <a
              href="https://www.linkedin.com/in/ayush-juneja-3978861b8/"
              target="_blank"
              className="flex items-center gap-2 px-4 py-3 rounded-2xl bg-black/40 hover:bg-accent transition text-white hover:scale-105"
            >
              <FaLinkedin className="w-5 h-5" /> LinkedIn
            </a>
            <a
              href="https://github.com/ayushj1512"
              target="_blank"
              className="flex items-center gap-2 px-4 py-3 rounded-2xl bg-black/40 hover:bg-accent transition text-white hover:scale-105"
            >
              <FaGithub className="w-5 h-5" /> GitHub
            </a>
            <a
              href="mailto:ayushjuneja999@gmail.com"
              className="flex items-center gap-2 px-4 py-3 rounded-2xl bg-black/40 hover:bg-accent transition text-white hover:scale-105"
            >
              <EnvelopeIcon className="w-5 h-5" /> Email
            </a>
            <a
              href="https://wa.me/919811195362"
              target="_blank"
              className="flex items-center gap-2 px-4 py-3 rounded-2xl bg-black/40 hover:bg-accent transition text-white hover:scale-105"
            >
              <FaWhatsapp className="w-5 h-5" /> WhatsApp
            </a>
          </div>

          {/* Contact Form Fields */}
          <div className="flex flex-col gap-4 w-full max-w-md mt-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-3 rounded-2xl bg-black/40 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-accent"
            />
            <input
              type="text"
              placeholder="Mobile / Email"
              className="w-full px-4 py-3 rounded-2xl bg-black/40 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-accent"
            />
            <textarea
              placeholder="Message"
              rows={4}
              className="w-full px-4 py-3 rounded-2xl bg-black/40 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-accent resize-none"
            />
          </div>

          <p className="text-white/50 text-sm mt-4">
            ayushjuneja999@gmail.com | +91 9811195362
          </p>
        </motion.div>
      </div>
    </section>
  );
}
