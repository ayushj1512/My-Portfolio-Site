"use client";
import { motion } from "framer-motion";

const links = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" }, // Updated link
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="sticky top-0 z-50 backdrop-blur bg-black/30 border-b border-white/10"
    >
      <div className="section-container flex items-center justify-between py-4">
        <a href="#" className="font-extrabold tracking-tight text-lg">
          <span className="text-white/90">your</span>
          <span className="text-accent">.ayushjuneja</span>
        </a>
        <div className="hidden md:flex items-center gap-8 text-sm text-white/80">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-white transition">
              {l.label}
            </a>
          ))}
        </div>
        <a href="#contact" className="btn-primary hidden md:inline-flex">
          Let&apos;s Talk
        </a>
      </div>
    </motion.nav>
  );
}

