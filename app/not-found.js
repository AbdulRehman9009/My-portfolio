"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { TbHome, TbMoodSad } from "react-icons/tb";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full bg-linear-to-br from-pink-900/20 via-purple-900/20 to-indigo-900/20 backdrop-blur-3xl flex items-center justify-center px-6 py-20">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ x: [0, 100, 0], y: [0, -100, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-20 -left-20 w-96 h-96 bg-pink-500/30 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ x: [0, -150, 0], y: [0, 150, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-10 right-0 w-80 h-80 bg-indigo-500/30 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-2xl w-full mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center gap-8"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="relative"
          >
            <TbMoodSad className="text-9xl text-pink-400" />
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute inset-0 bg-pink-500/20 rounded-full blur-3xl"
            />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-8xl md:text-9xl font-bold text-transparent bg-clip-text bg-linear-to-r from-pink-400 to-indigo-400"
          >
            404
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-white"
          >
            Page Not Found
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-lg md:text-xl text-white/70 max-w-md"
          >
            Oops! The page you are looking for does not exist.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <Link
              href="/"
              className="group inline-flex items-center gap-3 bg-linear-to-r from-pink-500 to-indigo-600 text-white font-semibold px-8 py-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              <TbHome className="text-2xl" />
              Back to Home
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
