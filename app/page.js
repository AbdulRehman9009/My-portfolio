"use client";

import Hero from "./components/Hero";
import { motion } from "framer-motion";
import Image from "next/image";
import SkillsSection from "./Sections/skillSection";
import Contact from "./Sections/Contact";
import ReviewsSection from "./Sections/Reviews";
import { TbArrowRight } from "react-icons/tb";

export default function Home() {
  return (
    <div className="bg-gradient-to-b from-black via-gray-900 to-black">
      <Hero />

      {/* About Section */}
      <motion.section
        id="about"
        className="relative w-full bg-gradient-to-br from-pink-900/10 via-purple-900/10 to-indigo-900/10 flex items-center justify-center px-4 sm:px-6 py-16 md:py-24 lg:py-32 overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Simplified Background - Static for better performance */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 -left-20 w-72 md:w-96 h-72 md:h-96 bg-pink-500/15 rounded-full blur-3xl" />
          <div className="absolute bottom-10 -right-20 w-64 md:w-80 h-64 md:h-80 bg-indigo-500/15 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-20 items-center relative z-10 w-full">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative flex justify-center order-1 lg:order-1"
          >
            <div className="relative flex justify-center w-full max-w-[280px] sm:max-w-[350px] md:max-w-[400px] lg:max-w-[450px] mx-auto">
              {/* Simplified glow effect */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-pink-500/30 to-indigo-600/30 blur-2xl" />

              <Image
                src="/images/About.png"
                alt="Abdul Rehman - Full Stack Web Developer"
                width={500}
                height={500}
                className="rounded-full border-4 md:border-8 border-white/20 shadow-2xl relative z-10 hover:scale-105 transition-transform duration-500 w-full h-auto"
                priority
              />

              {/* Simplified rotating ring - reduced animation */}
              <div className="absolute -inset-4 md:-inset-8 border-2 border-pink-400/20 rounded-full animate-spin-slow" />

              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                viewport={{ once: true }}
                className="absolute -bottom-2 md:-bottom-4 left-1/2 -translate-x-1/2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 md:px-6 py-2 md:py-3 text-xs md:text-sm font-semibold text-white shadow-xl"
              >
                3+ Years Experience
              </motion.div>
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            className="flex flex-col gap-6 md:gap-8 text-center lg:text-left items-center lg:items-start order-2 lg:order-2"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
              About{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-indigo-400">
                Me
              </span>
            </h2>

            <p className="text-base md:text-lg lg:text-xl text-white/80 leading-relaxed max-w-2xl">
              Hi, I&apos;m Abdul Rehman—a passionate Full Stack Web Developer who loves
              turning ideas into beautiful, high-performance digital experiences.
              I specialize in React, Next.js, Tailwind CSS, and modern backend
              technologies to craft websites that not only look stunning but work
              flawlessly across all devices.
            </p>

            <p className="text-base md:text-lg text-white/70 max-w-2xl">
              Whether it&apos;s a sleek portfolio, an e-commerce platform, or a
              complex web app, I bring creativity, clean code, and pixel-perfect
              design to every project. Let&apos;s build something amazing together!
            </p>

            <div className="flex flex-wrap gap-3 justify-center lg:justify-start mt-4">
              {["React", "Next.js", "TypeScript", "Tailwind CSS", "Node.js", "MongoDB"].map(
                (skill) => (
                  <span
                    key={skill}
                    className="px-4 md:px-5 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-sm font-medium text-white hover:bg-white/20 transition-all duration-300"
                  >
                    {skill}
                  </span>
                )
              )}
            </div>

            <div className="mt-4 md:mt-6">
              <a
                href="#contact"
                className="group inline-flex items-center gap-3 bg-gradient-to-r from-pink-500 to-indigo-600 text-white font-semibold px-6 md:px-8 py-3 md:py-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                Get In Touch
                <TbArrowRight className="group-hover:translate-x-2 transition-transform duration-300" />
              </a>
            </div>
          </motion.div>
        </div>
      </motion.section>

      <SkillsSection />
      <Contact />
      <ReviewsSection />

      {/* Add spin-slow animation to globals.css */}
      <style jsx global>{`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
      `}</style>
    </div>
  );
}
