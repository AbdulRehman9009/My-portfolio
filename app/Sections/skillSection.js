"use client";

import { motion, useAnimation } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { skills } from "../Data/skills";

export default function SkillSection() {
  const marqueeControls = useAnimation();
  const scrollRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Detect mobile devices
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    // Start marquee animation only on desktop for better performance
    if (!isMobile) {
      marqueeControls.start({
        x: ["0%", "-50%"],
        transition: { duration: 30, repeat: Infinity, ease: "linear" },
      });
    }

    return () => window.removeEventListener('resize', checkMobile);
  }, [marqueeControls, isMobile]);

  const stopMarquee = () => {
    if (!isMobile) {
      marqueeControls.stop();
    }
  };

  const startMarquee = () => {
    if (!isMobile) {
      marqueeControls.start({
        x: ["0%", "-50%"],
        transition: { duration: 30, repeat: Infinity, ease: "linear" },
      });
    }
  };

  const scrollLeft = () => {
    scrollRef.current?.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current?.scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
    <motion.section
      id="skills"
      className="relative w-full py-16 md:py-20 overflow-hidden"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true, amount: 0.2 }}
    >
      {/* Background Orbs - Simplified for performance */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute -top-30 -left-50 w-125 h-125 rounded-full bg-pink-500/15 blur-3xl" />
        <div className="absolute -bottom-20 -right-40 w-100 h-100 rounded-full bg-indigo-500/15 blur-3xl" />
      </div>

      {/* Heading */}
      <div className="relative z-10 text-center mb-12 md:mb-16 px-4">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3">
          My{" "}
          <span className="text-transparent bg-clip-text bg-linear-to-r from-pink-400 to-indigo-400">
            Skills
          </span>
        </h2>
        <p className="text-gray-300 text-sm sm:text-base md:text-lg">
          Technologies & Tools I Excel At
        </p>
      </div>

      {/* Marquee */}
      <div
        ref={scrollRef}
        onMouseEnter={stopMarquee}
        onMouseLeave={startMarquee}
        className="relative z-10 overflow-x-auto md:overflow-x-hidden px-4 scrollbar-hide"
        style={{ WebkitOverflowScrolling: 'touch' }}
      >
        <motion.div
          className="flex gap-4 sm:gap-6 md:gap-8"
          animate={isMobile ? {} : marqueeControls}
        >
          {[...skills, ...skills].map((skill, index) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={skill.name + index}
                className="group shrink-0 w-44 sm:w-52 md:w-60 lg:w-64 cursor-pointer"
                whileHover={isMobile ? {} : { scale: 1.05, y: -8 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <div className="relative w-full h-56 sm:h-60 md:h-64 rounded-2xl md:rounded-3xl bg-white/10 backdrop-blur-xl border border-white/10 shadow-xl transition-all duration-300 group-hover:border-pink-400/40 group-hover:shadow-pink-500/20">
                  <div className="absolute inset-0 bg-linear-to-br from-pink-500/10 to-indigo-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl md:rounded-3xl" />

                  <div className="relative z-10 p-5 md:p-6 flex flex-col items-center justify-center text-center h-full">
                    {Icon && (
                      <Icon className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 text-pink-400 drop-shadow-xl mb-3 group-hover:rotate-6 transition-transform duration-300" />
                    )}
                    <h3 className="text-base sm:text-lg md:text-xl font-bold text-white mb-2">
                      {skill.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden sm:block">
                      {skill.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* Scroll Buttons */}
      <div className="relative z-10 flex justify-center gap-4 mt-8 md:mt-10">
        <button
          onClick={scrollLeft}
          className="p-3 md:p-4 rounded-full bg-white/10 backdrop-blur-md border border-white/30 hover:bg-white/20 hover:border-pink-400/50 hover:scale-110 transition-all duration-300 shadow-lg"
          aria-label="Scroll left"
        >
          <span className="text-xl md:text-2xl text-white">←</span>
        </button>
        <button
          onClick={scrollRight}
          className="p-3 md:p-4 rounded-full bg-white/10 backdrop-blur-md border border-white/30 hover:bg-white/20 hover:border-pink-400/50 hover:scale-110 transition-all duration-300 shadow-lg"
          aria-label="Scroll right"
        >
          <span className="text-xl md:text-2xl text-white">→</span>
        </button>
      </div>

      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </motion.section>
  );
}
