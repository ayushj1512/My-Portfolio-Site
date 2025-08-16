"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Home, User, Code, FolderKanban, Clock, Mail } from "lucide-react";

const links = [
  { href: "#hero", label: "Home", icon: <Home size={18} /> },
  { href: "#about", label: "About", icon: <User size={18} /> },
  { href: "#skills", label: "Skills", icon: <Code size={18} /> },
  { href: "#projects", label: "Projects", icon: <FolderKanban size={18} /> },
  { href: "#timeline", label: "Timeline", icon: <Clock size={18} /> },
  { href: "#contact", label: "Contact", icon: <Mail size={18} /> },
];

export default function Navbar() {
  const [hovered, setHovered] = useState(null);

  return (
    <motion.nav
      initial={{ x: -40, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-1/2 left-6 -translate-y-1/2 z-50 flex flex-col items-start gap-4"
    >
      {links.map((l) => (
        <motion.a
          key={l.href}
          href={l.href}
          onMouseEnter={() => setHovered(l.href)}
          onMouseLeave={() => setHovered(null)}
          animate={{
            width: hovered === l.href ? "9rem" : "3rem",
          }}
          transition={{ duration: 0.3 }}
          className="flex items-center rounded-full bg-black/40 text-white 
                     hover:bg-accent hover:text-white h-12 pl-3 shadow-lg overflow-hidden"
        >
          {/* Icon */}
          <div className="flex items-center justify-center w-6 h-6 flex-shrink-0">
            {l.icon}
          </div>

          {/* Label inside button */}
          <motion.span
            animate={{
              opacity: hovered === l.href ? 1 : 0,
              x: hovered === l.href ? 0 : -10,
            }}
            transition={{ duration: 0.25 }}
            className="ml-3 text-sm font-medium whitespace-nowrap"
          >
            {l.label}
          </motion.span>
        </motion.a>
      ))}
    </motion.nav>
  );
}
