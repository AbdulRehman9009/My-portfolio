"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { TbBrandGithub, TbBrandLinkedin, TbMail } from "react-icons/tb";

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-gradient-to-b from-black via-gray-900 to-black px-4 sm:px-6 py-20 md:py-0">
      {/* Simplified Static Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900/20 via-transparent to-transparent" />
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl" />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_80%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center relative z-10 w-full">
        {/* Left Side - Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="flex flex-col gap-4 md:gap-6 items-center lg:items-start text-center lg:text-left order-2 lg:order-1"
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-pink-400 font-semibold text-sm md:text-base lg:text-lg tracking-wider uppercase"
          >
            Welcome to my Portfolio
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold leading-tight"
          >
            <span className="text-white">Hi, I&apos;m </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400">
              Abdul Rehman
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white/90"
          >
            Full Stack Web Developer
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.7 }}
            className="text-base md:text-lg lg:text-xl text-white/70 max-w-xl leading-relaxed"
          >
            Creating stunning, high-performance web experiences with React,
            Next.js, and modern technologies. Let&apos;s build something amazing
            together!
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.7 }}
            className="flex flex-wrap gap-4 justify-center lg:justify-start mt-4 md:mt-6"
          >
            <a
              href="#contact"
              className="group px-6 md:px-8 py-3 md:py-4 rounded-full bg-gradient-to-r from-pink-500 to-indigo-600 text-white font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 text-sm md:text-base"
            >
              Get In Touch
            </a>
            <a
              href="#about"
              className="px-6 md:px-8 py-3 md:py-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white font-semibold hover:bg-white/20 transition-all duration-300 text-sm md:text-base"
            >
              Learn More
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.7 }}
            className="flex gap-4 mt-6 md:mt-8"
          >
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 md:p-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 hover:border-pink-400/50 transition-all duration-300"
              aria-label="GitHub"
            >
              <TbBrandGithub className="w-5 h-5 md:w-6 md:h-6" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 md:p-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 hover:border-pink-400/50 transition-all duration-300"
              aria-label="LinkedIn"
            >
              <TbBrandLinkedin className="w-5 h-5 md:w-6 md:h-6" />
            </a>
            <a
              href="mailto:your.email@example.com"
              className="p-3 md:p-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 hover:border-pink-400/50 transition-all duration-300"
              aria-label="Email"
            >
              <TbMail className="w-5 h-5 md:w-6 md:h-6" />
            </a>
          </motion.div>
        </motion.div>

        {/* Right Side - Avatar Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex justify-center items-center order-1 lg:order-2"
        >
          <div className="relative w-full max-w-[280px] sm:max-w-[350px] md:max-w-[400px] lg:max-w-[480px] mx-auto">
            {/* Simplified glow effect */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-pink-500/20 to-indigo-600/20 blur-2xl" />

            <Image
              src="/images/Avatar.png"
              alt="Abdul Rehman - Full Stack Developer"
              width={500}
              height={500}
              className="relative z-10 rounded-full border-4 md:border-8 border-white/20 shadow-2xl w-full h-auto"
              priority
            />

            {/* Simplified decorative rings */}
            <div className="absolute -inset-4 md:-inset-6 border-2 border-pink-400/20 rounded-full" />
            <div className="absolute -inset-8 md:-inset-12 border border-indigo-400/10 rounded-full" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
