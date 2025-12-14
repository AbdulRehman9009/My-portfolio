"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { reviews } from "../Data/review";

export default function ReviewsSection() {
  return (
    <section
      id="reviews"
      className="relative w-full py-24 overflow-hidden bg-linear-to-b from-[#0f051f]/90 to-[#050514]/95"
    >
      {/* Floating Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ x: [0, -100, 0], y: [0, 120, 0] }}
          transition={{ duration: 32, repeat: Infinity, ease: "linear" }}
          className="absolute top-10 -left-40 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ x: [0, 120, 0], y: [0, -140, 0] }}
          transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-20 right-0 w-80 h-80 bg-indigo-500/20 rounded-full blur-3xl"
        />
      </div>

      {/* Particle Dots */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.08)_1px,transparent_1px)] bg-size-[20px_20px] opacity-30 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
            Client{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-pink-400 to-indigo-400">
              Testimonials
            </span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            What people say about working with me
          </p>
        </motion.div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: "easeOut",
              }}
              viewport={{ once: true }}
              className="group"
            >
              <motion.div
                whileHover={{ scale: 1.03, y: -8 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="relative h-full p-8 rounded-3xl overflow-visible
                  bg-white/5 backdrop-blur-xl
                  border border-white/15 shadow-xl
                  hover:border-pink-400/50 hover:shadow-2xl hover:shadow-pink-500/20"
              >
                {/* Glow overlay on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 to-indigo-600/10" />
                </div>

                {/* Quote icon */}
                <div className="absolute top-6 right-8 text-6xl text-pink-400/20">
                  “
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <motion.p
                    className="text-gray-200 text-base leading-relaxed mb-8 italic"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                  >
                    "{review.review}"
                  </motion.p>

                  <div className="flex items-center gap-4 mt-6">
                    <motion.div
                      initial={{ scale: 0.9 }}
                      whileInView={{ scale: 1 }}
                      transition={{ duration: 0.6, ease: "easeOut" }}
                      viewport={{ once: true }}
                      className="relative"
                    >
                      <Image
                        src={review.avatar}
                        alt={review.name}
                        width={56}
                        height={56}
                        className="rounded-full border-2 border-white/20 object-cover"
                      />
                      <motion.div
                        className="absolute inset-0 rounded-full bg-gradient-to-tr from-pink-400 to-indigo-400 opacity-0 group-hover:opacity-40 transition-opacity duration-500"
                      />
                    </motion.div>

                    <div>
                      <motion.h4
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        viewport={{ once: true }}
                        className="text-white font-semibold text-lg"
                      >
                        {review.name}
                      </motion.h4>
                      <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        viewport={{ once: true }}
                        className="text-gray-400 text-sm"
                      >
                        {review.role}
                      </motion.p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
