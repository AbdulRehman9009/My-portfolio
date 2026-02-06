"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { reviews } from "../Data/review";

export default function ReviewsSection() {
  return (
    <section
      id="reviews"
      className="relative w-full py-16 md:py-24 overflow-hidden bg-gradient-to-b from-gray-900 via-purple-900/20 to-gray-900"
    >
      {/* Simplified Static Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 -left-32 w-80 md:w-96 h-80 md:h-96 bg-pink-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 -right-32 w-72 md:w-80 h-72 md:h-80 bg-indigo-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Client{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-indigo-400">
              Testimonials
            </span>
          </h2>
          <p className="text-gray-300 text-sm md:text-base lg:text-lg max-w-2xl mx-auto">
            What people say about working with me
          </p>
        </motion.div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              className="group h-full"
            >
              <div
                className="relative h-full p-6 md:p-8 rounded-2xl md:rounded-3xl
                  bg-white/5 backdrop-blur-xl
                  border border-white/10 shadow-xl
                  hover:border-pink-400/30 hover:shadow-2xl hover:shadow-pink-500/10
                  transition-all duration-300"
              >
                {/* Simplified Glow overlay on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-2xl md:rounded-3xl">
                  <div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 to-indigo-600/5" />
                </div>

                {/* Quote icon */}
                <div className="absolute top-4 md:top-6 right-6 md:right-8 text-5xl md:text-6xl text-pink-400/20">
                  "
                </div>

                {/* Content */}
                <div className="relative z-10 flex flex-col h-full">
                  <p className="text-gray-200 text-sm md:text-base leading-relaxed mb-6 md:mb-8 italic flex-grow">
                    "{review.review}"
                  </p>

                  <div className="flex items-center gap-4 mt-auto">
                    <div className="relative shrink-0">
                      <Image
                        src={review.avatar}
                        alt={review.name}
                        width={56}
                        height={56}
                        className="rounded-full border-2 border-white/20 object-cover"
                      />
                    </div>

                    <div>
                      <h4 className="text-white font-semibold text-base md:text-lg">
                        {review.name}
                      </h4>
                      <p className="text-gray-400 text-xs md:text-sm">
                        {review.role}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
