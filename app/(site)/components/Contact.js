"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { EnvelopeIcon } from "@heroicons/react/24/outline";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";

export default function Contact() {
  const socials = [
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/ayush-juneja-3978861b8/",
      icon: FaLinkedin,
    },
    {
      label: "GitHub",
      href: "https://github.com/ayushj1512",
      icon: FaGithub,
    },
    {
      label: "Email",
      href: "mailto:ayushjuneja999@gmail.com",
      icon: EnvelopeIcon,
    },
    {
      label: "WhatsApp",
      href: "https://wa.me/919811195362",
      icon: FaWhatsapp,
    },
  ];

  return (
    <section id="contact" className="relative w-full overflow-hidden py-20">
      {/* Background accents */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-28 -left-24 h-72 w-72 rounded-full bg-accent/20 blur-3xl" />
        <div className="absolute -bottom-32 -right-24 h-80 w-80 rounded-full bg-accent/15 blur-3xl" />
        <div className="absolute inset-0 bg-black/35" />
      </div>

      <div className="relative z-10 w-full px-6 md:px-16 lg:px-28">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
          {/* Left: Image Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.05 }}
            className="w-full lg:w-1/2 flex justify-center items-center"
          >
            <div className="group relative w-[92%] sm:w-[75%] lg:w-[78%] xl:w-[68%] overflow-hidden rounded-3xl border border-white/10 bg-transparent shadow-[0_20px_80px_rgba(0,0,0,0.55)]">
              {/* Accent ring */}
              <div className="pointer-events-none absolute inset-0 ring-1 ring-accent/20" />

              {/* ✅ Container fits the image (no forced aspect ratio) */}
              <div className="relative w-full">
                {/* Base image sets height automatically */}
                <Image
                  src="/ai2.png"
                  alt="Ayush Juneja - AI"
                  width={900}
                  height={1200}
                  priority
                  className="w-full h-auto object-contain transition-opacity duration-500 group-hover:opacity-0"
                />

                {/* Hover image overlays exactly on top, still contain */}
                <Image
                  src="/coding.png"
                  alt="Ayush Juneja - Coding"
                  width={900}
                  height={1200}
                  priority
                  className="absolute inset-0 w-full h-full object-contain opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                />

                {/* Bottom label (text on image itself) */}
                <div className="absolute bottom-0 left-0 w-full p-5 bg-gradient-to-t from-black/85 via-black/35 to-transparent">
                  <p className="text-white/90 font-semibold tracking-wide">
                    Let’s turn ideas into{" "}
                    <span className="text-accent">shippable</span> products.
                  </p>
                  <p className="text-white/60 text-sm mt-1">
                    Fast iterations • Clean UI • Scalable builds
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="w-full lg:w-1/2"
          >
            <div className="mb-8">
              <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-[1.1]">
                <span className="text-white">Let&apos;s Build </span>
                <span className="text-accent">Something Awesome</span>
                <span className="text-white"> Together</span>
                <span className="text-accent">.</span>
              </h2>

              <p className="mt-4 text-white/70 text-base md:text-lg max-w-xl">
                I&apos;m always excited to connect, collaborate, and create. Reach out
                via any platform below, or drop a message — I usually reply quickly.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              {socials.map((s) => {
                const Icon = s.icon;
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    target={s.label === "Email" ? undefined : "_blank"}
                    rel={s.label === "Email" ? undefined : "noopener noreferrer"}
                    className="
                      group inline-flex items-center gap-2
                      rounded-2xl px-4 py-3
                      bg-white/5 border border-white/10
                      text-white/90
                      hover:bg-accent/20 hover:border-accent/40 hover:text-white
                      transition-all duration-300
                      hover:-translate-y-0.5
                      focus:outline-none focus-visible:ring-4 focus-visible:ring-accent/30
                    "
                  >
                    <Icon className="h-5 w-5 text-accent/90 group-hover:text-accent" />
                    <span className="font-semibold">{s.label}</span>
                  </a>
                );
              })}
            </div>

            <div className="mt-8 w-full">
              <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 shadow-[0_20px_80px_rgba(0,0,0,0.45)]">
                <div className="flex items-center justify-between mb-4">
                  <p className="text-white font-bold text-lg">Send a quick message</p>
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-accent/15 text-accent border border-accent/25">
                    Available
                  </span>
                </div>

                <div className="flex flex-col gap-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="
                        w-full px-4 py-3 rounded-2xl
                        bg-black/40 border border-white/10
                        text-white placeholder-white/50
                        focus:outline-none focus:ring-4 focus:ring-accent/25 focus:border-accent/40
                        transition
                      "
                    />
                    <input
                      type="text"
                      placeholder="Mobile / Email"
                      className="
                        w-full px-4 py-3 rounded-2xl
                        bg-black/40 border border-white/10
                        text-white placeholder-white/50
                        focus:outline-none focus:ring-4 focus:ring-accent/25 focus:border-accent/40
                        transition
                      "
                    />
                  </div>

                  <textarea
                    placeholder="Message"
                    rows={4}
                    className="
                      w-full px-4 py-3 rounded-2xl
                      bg-black/40 border border-white/10
                      text-white placeholder-white/50
                      focus:outline-none focus:ring-4 focus:ring-accent/25 focus:border-accent/40
                      transition resize-none
                    "
                  />

                  <div className="flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between pt-2">
                    <button
                      type="button"
                      className="
                        inline-flex items-center justify-center
                        rounded-2xl px-5 py-3 font-semibold
                        bg-accent text-black
                        shadow-lg shadow-accent/25
                        hover:shadow-accent/35 hover:-translate-y-0.5
                        active:translate-y-0 active:shadow-accent/20
                        transition-all duration-300
                        focus:outline-none focus-visible:ring-4 focus-visible:ring-accent/30
                      "
                      onClick={() => console.log("Send message clicked")}
                    >
                      Send Message
                    </button>

                    <p className="text-white/50 text-sm">
                      Or email:{" "}
                      <a
                        href="mailto:ayushjuneja999@gmail.com"
                        className="text-accent hover:underline underline-offset-4"
                      >
                        ayushjuneja999@gmail.com
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              <p className="text-white/45 text-sm mt-4">
                ayushjuneja999@gmail.com • +91 9811195362
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
