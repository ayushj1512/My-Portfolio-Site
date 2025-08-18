"use client";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { EnvelopeIcon } from "@heroicons/react/24/outline";

export default function Footer() {
  return (
    <footer className="py-6 bg-black/40 relative">
      
      {/* Decorative top line */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-accent opacity-30"></div>

      <div className="section-container flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-white/70">

        {/* Creative Single Row Branding */}
        <div className="flex flex-col md:flex-row items-center gap-3 text-center md:text-left">
          <p className="font-bold text-white">Ayush Juneja</p>
          
          <span className="hidden md:inline text-white/50">•</span>
          
          <p className="text-accent font-medium">Full-Stack Developer</p>
          
          <span className="hidden md:inline text-white/50">•</span>
          
          <p className="text-white/50 text-xs">Made with ❤️ + ☕</p>
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-6 text-xl">
          <a
            href="https://www.linkedin.com/in/ayush-juneja-3978861b8/"
            target="_blank"
            className="text-white/70 hover:text-accent transform hover:scale-110 transition-all duration-300"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/ayushj1512"
            target="_blank"
            className="text-white/70 hover:text-accent transform hover:scale-110 transition-all duration-300"
          >
            <FaGithub />
          </a>
          <a
            href="https://mail.google.com/mail/?view=cm&to=ayushjuneja999@gmail.com"
            target="_blank"
            className="text-white/70 hover:text-accent transform hover:scale-110 transition-all duration-300"
          >
            <EnvelopeIcon className="w-6 h-6" />
          </a>
          <a
            href="https://wa.me/919811195362"
            target="_blank"
            className="text-white/70 hover:text-accent transform hover:scale-110 transition-all duration-300"
          >
            <FaWhatsapp />
          </a>
        </div>
      </div>
    </footer>
  );
}
