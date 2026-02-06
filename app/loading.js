"use client";

import { motion } from "framer-motion";

export default function Loading() {
  return (
    <div className="min-h-screen w-full bg-linear-to-br from-pink-900/20 via-purple-900/20 to-indigo-900/20 backdrop-blur-3xl flex items-center justify-center">
      <div className="flex flex-col items-center gap-6">
        <motion.div className="relative w-24 h-24">
          <motion.div animate={{ rotate: 360 }} transition={{ duration: 2, repeat: Infinity, ease: "linear" }} className="absolute inset-0 rounded-full border-4 border-transparent border-t-pink-500 border-r-indigo-500" />
          <motion.div animate={{ rotate: -360 }} transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }} className="absolute inset-3 rounded-full border-4 border-transparent border-t-indigo-400 border-l-pink-400" />
          <motion.div animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }} transition={{ duration: 2, repeat: Infinity }} className="absolute inset-6 rounded-full bg-linear-to-r from-pink-500 to-indigo-500 blur-lg" />
        </motion.div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="flex flex-col items-center gap-2">
          <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-linear-to-r from-pink-400 to-indigo-400">Loading</h2>
          <motion.div animate={{ opacity: [0.5, 1, 0.5] }} transition={{ duration: 1.5, repeat: Infinity }} className="text-white/60 text-sm">Please wait...</motion.div>
        </motion.div>
      </div>
    </div>
  );
}