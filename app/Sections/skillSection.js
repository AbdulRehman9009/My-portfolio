"use client";

import { motion, useAnimation } from "framer-motion";
import { useRef, useEffect } from "react";
import { skills } from "../Data/skills";

export default function SkillSection() {
  const marqueeControls = useAnimation();
  const scrollRef = useRef(null);

  useEffect(() => {
    startMarquee();
  }, []);

  const startMarquee = () => {
    marqueeControls.start({
      x: ["0%", "-50%"],
      transition: { duration: 25, repeat: Infinity, ease: "linear" },
    });
  };

  const stopMarquee = () => marqueeControls.stop();

  const scrollLeft = () => {
    scrollRef.current?.scrollBy({ left: -400, behavior: "smooth" });
    startMarquee();
  };

  const scrollRight = () => {
    scrollRef.current?.scrollBy({ left: 400, behavior: "smooth" });
    startMarquee();
  };

  return (
    <motion.section
      id="skills"
      className="relative w-full py-20 overflow-hidden"
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9 }}
      viewport={{ once: true, amount: 0.3 }}
    >
      {/* ✨ Background Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
        {/* Large Pink Orb */}
        <motion.div
          className="absolute top-[-120px] left-[-200px] w-[500px] h-[500px] rounded-full bg-pink-500/20 blur-3xl"
          animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
          transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
        />

        {/* Medium Indigo Orb */}
        <motion.div
          className="absolute bottom-[-80px] right-[-160px] w-[400px] h-[400px] rounded-full bg-indigo-500/20 blur-3xl"
          animate={{ x: [-20, 40, -20], y: [0, 20, 0] }}
          transition={{ duration: 32, repeat: Infinity, ease: "linear" }}
        />

        {/* Subtle Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0e052a]/30 via-transparent to-[#05020f]/40" />
      </div>

      {/* Heading */}
      <div className="relative z-10 text-center mb-16 px-4">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-3">
          My{" "}
          <span className="text-transparent bg-clip-text bg-linear-to-r from-pink-400 to-indigo-400">
            Skills
          </span>
        </h2>
        <p className="text-gray-300 text-sm sm:text-lg">
          Technologies & Tools I Excel At
        </p>
      </div>

      {/* Marquee */}
      <div
        ref={scrollRef}
        onMouseEnter={stopMarquee}
        onMouseLeave={startMarquee}
        className="relative z-10 overflow-x-hidden px-4"
      >
        <motion.div
          className="flex gap-6 sm:gap-8"
          animate={marqueeControls}
        >
          {[...skills, ...skills].map((skill, index) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={skill.name + index}
                className="group shrink-0
                  w-52 sm:w-60 md:w-64 lg:w-72
                  h-[260px]
                  cursor-pointer
                  overflow-visible"
                whileHover={{ scale: 1.08, y: -10 }}
                transition={{ type: "spring", stiffness: 260 }}
              >
                <div
                  className="relative w-full h-full rounded-3xl
                    bg-white/10 backdrop-blur-xl
                    border border-transparent
                    shadow-xl
                    transition-all duration-500
                    group-hover:border-pink-400/60
                    group-hover:shadow-[0_0_40px_-4px_rgba(236,72,153,0.5)]
                    overflow-visible"
                >
                  {/* Hover Glow */}
                  <div className="absolute inset-0 bg-linear-to-br from-pink-500/20 to-indigo-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="relative z-10 p-5 sm:p-8 flex flex-col items-center justify-center text-center h-full">
                    {Icon && (
                      <Icon className="w-12 h-12 sm:w-14 sm:h-14 text-pink-400 drop-shadow-xl mb-3 group-hover:rotate-6 transition-transform duration-500" />
                    )}
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-1">
                      {skill.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden md:block">
                      {skill.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* Buttons */}
      <div className="relative z-10 flex justify-center gap-6 mt-10">
        <button
          onClick={scrollLeft}
          className="p-3 sm:p-4 rounded-full bg-white/10 backdrop-blur-md border border-white/30
             hover:bg-white/20 hover:border-pink-400/50
             hover:scale-110 transition-all duration-300 shadow-lg"
        >
          <span className="text-2xl text-white">←</span>
        </button>
        <button
          onClick={scrollRight}
          className="p-3 sm:p-4 rounded-full bg-white/10 backdrop-blur-md border border-white/30
             hover:bg-white/20 hover:border-pink-400/50
             hover:scale-110 transition-all duration-300 shadow-lg"
        >
          <span className="text-2xl text-white">→</span>
        </button>
      </div>
    </motion.section>
  );
}
