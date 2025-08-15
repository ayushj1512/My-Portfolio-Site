"use client";
import { motion } from "framer-motion";

const quotes = [
  { name: "A. Client", role: "CEO, BrandCo", text: "Delivered an exceptional experience with meticulous attention to detail." },
  { name: "B. Founder", role: "Founder, StartupX", text: "Fast, creative, and reliable. The product feels premium." },
  { name: "C. PM", role: "PM, SaaS Inc.", text: "Clean code and beautiful UI. Exceeded expectations." },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-28">
      <div className="section-container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-5xl font-extrabold mb-12 tracking-tight text-white"
        >
          What Clients Say
        </motion.h2>

        <div className="flex space-x-8 overflow-x-auto scrollbar-none">
          {quotes.map((q, i) => (
            <motion.div
              key={q.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="flex-shrink-0 w-80 p-8 rounded-3xl border border-white/10 backdrop-blur-md shadow-lg hover:shadow-accent/30 hover:scale-105 transition-transform duration-500 cursor-pointer"
            >
              <p className="text-white/80 text-lg italic mb-6 relative">
                <span className="absolute -top-4 -left-4 text-accent text-3xl opacity-20 select-none">“</span>
                {q.text}
                <span className="absolute -bottom-4 -right-4 text-accent text-3xl opacity-20 select-none">”</span>
              </p>
              <div className="text-white font-semibold">{q.name}</div>
              <div className="text-white/60 text-sm">{q.role}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
