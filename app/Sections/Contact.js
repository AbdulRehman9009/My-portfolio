"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import { useState } from "react";
import axsios from "axios";

const Contact = () => {
  const [message, setmessage] = useState({
    type: "",
    message: "",
  });
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    if (!data.name && !data.email) return;
    try {
      const res = await axsios.post("/api/Add", data);
      console.log(res);
      setmessage({
        type: "success",
        message: res.data.message,
      });
    }
    catch (error) {
      console.log(error);
      if (error?.response?.data?.error) {
        setmessage({
          type: "error",
          message: error.response.data.error,
        });
        return;
      }
      setmessage({
        type: "error",
        message: "Error sending message",
      });

    }

  };

  const messageVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -10 },
  };

  return (
    <motion.section
      id="contact"
      className="relative w-full py-24 overflow-hidden
      bg-linear-to-br from-pink-500/10 via-purple-900/10 to-indigo-900/10 flex items-center justify-center"
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
    >
      {/* ✅ FLOATING ORBS */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ x: [0, 140, 0], y: [0, -100, 0] }}
          transition={{ duration: 26, repeat: Infinity, ease: "linear" }}
          className="absolute top-20 -left-32 w-96 h-96 bg-pink-500/25 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ x: [0, -120, 0], y: [0, 140, 0] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-10 right-0 w-80 h-80 bg-indigo-500/25 rounded-full blur-3xl"
        />
      </div>

      {/* ✅ PARTICLE DOTS */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.08)_1px,transparent_1px)] bg-size-[18px_18px] opacity-30 pointer-events-none" />

      {/* ✅ CONTENT */}
      <div className="relative z-10 w-full max-w-6xl px-6">

        {/* ✅ MAIN TITLE */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-6 text-white"
        >
          Contact{" "}
          <span className="text-transparent bg-clip-text bg-linear-to-r from-pink-500 to-indigo-500">
            Me
          </span>
        </motion.h2>

        {/* ✅ SUB TITLE */}
        <motion.h3
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-xl md:text-3xl font-semibold text-center mb-12 text-white"
        >
          Lets{" "}
          <span className="text-transparent bg-clip-text bg-linear-to-r from-pink-500 via-purple-500 to-indigo-500">
            Create Something Amazing Together!
          </span>
        </motion.h3>

        {/* ✅ FORM WRAPPER */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="flex justify-center"
        >
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-full max-w-xl 
            bg-white/10 backdrop-blur-xl 
            border border-white/20 
            rounded-3xl shadow-2xl 
            p-8 md:p-10 space-y-6"
          >
            {/* ✅ NAME */}
            <div>
              <label className="block text-white mb-2">Name</label>
              <input
                type="text"
                placeholder="Your Name"
                {...register("name", {
                  required: { value: true, message: "Name is required" },
                  minLength: { value: 2, message: "Name is too short" },
                })}
                className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 
                text-white placeholder-white/50 focus:outline-none 
                focus:border-pink-400 transition"
              />
              {errors?.name && (
                <p className="text-red-400 mt-1 text-sm">
                  {errors.name.message}
                </p>
              )}
            </div>

            {/* ✅ EMAIL */}
            <div>
              <label className="block text-white mb-2">Email</label>
              <input
                type="email"
                placeholder="Your Email"
                {...register("email", {
                  required: { value: true, message: "Email is required" },
                  minLength: { value: 5, message: "Email is too short" },
                })}
                className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 
                text-white placeholder-white/50 focus:outline-none 
                focus:border-pink-400 transition"
              />
              {errors?.email && (
                <p className="text-red-400 mt-1 text-sm">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* ✅ MESSAGE */}
            <div>
              <label className="block text-white mb-2">Message</label>
              <textarea
                placeholder="Your Message"
                {...register("message")}
                className="w-full h-32 px-4 py-3 rounded-xl bg-white/10 border border-white/20 
                text-white placeholder-white/50 focus:outline-none 
                focus:border-pink-400 transition resize-none"
              />
            </div>

            {/* ✅ SUBMIT BUTTON */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              disabled={isSubmitting}
              type="submit"
              className="w-full py-4 rounded-full 
              bg-linear-to-r from-pink-500 to-indigo-600 
              text-white font-semibold 
              shadow-xl hover:shadow-2xl 
              transition-all duration-300"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </motion.button>

            {/* ✅ MESSAGE */}
            <div className="relative h-6">
              <AnimatePresence>
                {message && (
                  <motion.p
                    variants={messageVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    transition={{ duration: 0.35, ease: "easeOut" }}
                    className={`absolute inset-x-0 text-center text-sm font-medium
                     ${message.type === "success" ? "text-green-400" : "text-red-400"}`
                    }
                  >
                    {message.message}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>
          </form>

        </motion.div>
      </div>
    </motion.section >
  );
};

export default Contact;
