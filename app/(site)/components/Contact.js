"use client";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="py-24">
      <div className="section-container grid md:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Let&apos;s create something exceptional</h2>
          <p className="text-white/70 mb-6">Email me or use the form and I&apos;ll get back to you.</p>
          <div className="flex gap-4 text-xl text-white/70">
            <a aria-label="LinkedIn" href="#" className="hover:text-white transition"><FaLinkedin /></a>
            <a aria-label="GitHub" href="#" className="hover:text-white transition"><FaGithub /></a>
            <a aria-label="Twitter" href="#" className="hover:text-white transition"><FaTwitter /></a>
          </div>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="card p-6"
          method="POST"
          action="mailto:you@example.com"
          encType="text/plain"
        >
          <div className="grid gap-4">
            <input className="w-full rounded-xl bg-black/30 border border-white/10 px-4 py-3 outline-none focus:border-accent/60" placeholder="Your name" name="name" required />
            <input className="w-full rounded-xl bg-black/30 border border-white/10 px-4 py-3 outline-none focus:border-accent/60" placeholder="Email address" type="email" name="email" required />
            <textarea className="w-full rounded-xl bg-black/30 border border-white/10 px-4 py-3 outline-none focus:border-accent/60 min-h-[140px]" placeholder="Message" name="message" required />
            <button type="submit" className="btn-primary">Send Message</button>
          </div>
        </motion.form>
      </div>
    </section>
  );
}
