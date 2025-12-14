"use client";

import Hero from "./components/Hero";
import { motion } from "framer-motion";
import Image from "next/image";
import SkillsSection from "./Sections/skillSection";
import Contact from "./Sections/Contact";
import ReviewsSection from "./Sections/Reviews";




import { TbArrowRight } from "react-icons/tb";



export default function Home() {
  const floatVariants = {
    float: {
      y: [0, -15, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const pulseVariants = {
    pulse: {
      scale: [1, 1.05, 1],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };


  return (
    <>
      <Hero />

      <div className="h-10" />

      <motion.section
        id="about"
        className="relative min-h-screen w-full bg-linear-to-br from-pink-300/20 via-purple-900/20 to-indigo-900/20 backdrop-blur-3xl flex items-center justify-center px-6 py-20 overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Animated Background Orbs (same style as Hero) */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{ x: [0, 120, 0], y: [0, -80, 0] }}
            transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
            className="absolute top-32 -left-32 w-96 h-96 bg-pink-500/25 rounded-full blur-3xl"
          />
          <motion.div
            animate={{ x: [0, -100, 0], y: [0, 120, 0] }}
            transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-20 right-0 w-80 h-80 bg-indigo-500/25 rounded-full blur-3xl"
          />
        </div>

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10">
          {/* Left: Floating Image with Glow & Orbit Ring */}
          <motion.div
            variants={floatVariants}
            animate="float"
            className="relative flex justify-center"
          >
            <motion.div
              variants={pulseVariants}
              animate="pulse"
              className="absolute inset-0 w-full h-full bg-linear-to-r from-pink-500/30 to-indigo-500/30 rounded-full blur-3xl -z-10"
            />
            <div className="relative">
              {/* Soft Glow */}
              <div className="absolute inset-0 rounded-full bg-linear-to-r from-pink-500 to-indigo-600 blur-2xl opacity-60 animate-pulse" />

              <Image
                src="/images/About.png"
                alt="Abdul Rehman - Full Stack Web Developer"
                width={500}
                height={500}
                className="rounded-full border-8 border-white/20 shadow-2xl relative z-10 hover:scale-105 transition-transform duration-500"
                priority
              />

              {/* Orbiting Ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-10 border-2 border-pink-400/30 rounded-full"
              />

              {/* Small Progress Ring (Years of Experience) */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-3 text-sm font-semibold text-white shadow-xl"
              >
                3+ Years Experience
              </motion.div>
            </div>
          </motion.div>

          {/* Right: Text Content */}
          <motion.div
            className="flex flex-col gap-8 text-center lg:text-left"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {/* Title */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-5xl md:text-6xl font-bold text-white"
            >
              About <span className="text-transparent bg-clip-text bg-linear-to-r from-pink-400 to-indigo-400">Me</span>
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-lg md:text-xl text-white/80 leading-relaxed max-w-2xl"
            >
              Hi, I'm Abdul Rehman—a passionate Full Stack Web Developer who loves turning ideas into beautiful,
              high-performance digital experiences. I specialize in React, Next.js, Tailwind CSS, and modern backend
              technologies to craft websites that not only look stunning but work flawlessly across all devices.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="text-lg text-white/70"
            >
              Whether it's a sleek portfolio, an e-commerce platform, or a complex web app,
              I bring creativity, clean code, and pixel-perfect design to every project.
              Let's build something amazing together!
            </motion.p>

            {/* Skill Badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="flex flex-wrap gap-3 justify-center lg:justify-start mt-6"
            >
              {["React", "Next.js", "TypeScript", "Tailwind CSS", "Node.js", "MongoDB"].map((skill) => (
                <span
                  key={skill}
                  className="px-5 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-sm font-medium text-white hover:bg-white/20 transition-all duration-300"
                >
                  {skill}
                </span>
              ))}
            </motion.div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="mt-8"
            >
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group inline-flex items-center gap-3 bg-linear-to-r from-pink-500 to-indigo-600 text-white font-semibold px-8 py-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                Get In Touch
                <TbArrowRight className="group-hover:translate-x-2 transition-transform duration-300" />
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      <div className="h-10" />

      <SkillsSection />

      <div className="h-10" />

      <Contact />

      <div className="h-10" />

      <ReviewsSection />











    </>
  );
}