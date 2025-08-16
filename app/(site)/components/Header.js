"use client";
import { motion } from "framer-motion";

export default function Header() {
  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="w-full py-6 px-8 flex items-center justify-between 
                 z-50 bg-black/40 backdrop-blur-md shadow-md"
    >
      {/* Name */}
      <h1 className="text-3xl font-bold">
        <span className="text-white">ayush.</span>
        <span className="text-accent">juneja</span>
      </h1>

      {/* Let's Talk Button */}
      <a
        href="https://wa.me/919811195362"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-accent text-white font-medium px-5 py-2 rounded-full shadow-lg hover:bg-accent/80 transition"
      >
        Let’s Talk
      </a>
    </motion.header>
  );
}
