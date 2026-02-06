"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import { TbAlertTriangle } from "react-icons/tb";

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen w-full bg-linear-to-br from-pink-900/20 via-purple-900/20 to-indigo-900/20 backdrop-blur-3xl flex items-center justify-center px-6 py-20">
      <div className="max-w-2xl w-full mx-auto text-center relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="flex flex-col items-center gap-8">
          <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.2, type: "spring", stiffness: 200 }} className="relative">
            <TbAlertTriangle className="text-9xl text-yellow-400" />
          </motion.div>
          <motion.h2 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{delay: 0.3, duration: 0.6 }} className="text-4xl md:text-5xl font-bold text-white">Something Went Wrong!</motion.h2>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.6 }} className="text-lg md:text-xl text-white/70 max-w-md">We encountered an unexpected error.</motion.p>
          < motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.6 }} className="flex flex-wrap gap-4 justify-center">
            <button onClick={() => reset()} className="group inline-flex items-center gap-3 bg-linear-to-r from-pink-500 to-indigo-600 text-white font-semibold px-8 py-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300">Try Again</button>
            <a href="/" className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 text-white font-semibold px-8 py-4 rounded-full hover:bg-white/20 transition-all duration-300">Go Home</a>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}