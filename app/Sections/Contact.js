"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import { useState } from "react";
import axios from "axios";

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
      const res = await axios.post("/api/Add", data);
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

  return (
    <motion.section
      id="contact"
      className="relative w-full py-16 md:py-24 overflow-hidden
      bg-gradient-to-br from-indigo-900/10 via-purple-900/10 to-pink-900/10 flex items-center justify-center"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true, amount: 0.2 }}
    >
      {/* Simplified Static Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 -left-32 w-80 md:w-96 h-80 md:h-96 bg-pink-500/15 rounded-full blur-3xl" />
        <div className="absolute bottom-10 -right-32 w-72 md:w-80 h-72 md:h-80 bg-indigo-500/15 rounded-full blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-6xl px-4 sm:px-6">

        {/* Main Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-6 text-white"
        >
          Contact{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-indigo-500">
            Me
          </span>
        </motion.h2>

        {/* Sub Title */}
        <motion.h3
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          viewport={{ once: true }}
          className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-center mb-10 md:mb-12 text-white"
        >
          Let&apos;s{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500">
            Create Something Amazing Together!
          </span>
        </motion.h3>

        {/* Form Wrapper */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-full max-w-xl 
            bg-white/10 backdrop-blur-xl 
            border border-white/20 
            rounded-2xl md:rounded-3xl shadow-2xl 
            p-6 md:p-10 space-y-6"
          >
            {/* NAME */}
            <div>
              <label className="block text-white mb-2 text-sm md:text-base">Name</label>
              <input
                type="text"
                placeholder="Your Name"
                {...register("name", {
                  required: { value: true, message: "Name is required" },
                  minLength: { value: 2, message: "Name is too short" },
                })}
                className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 
                text-white placeholder-white/50 focus:outline-none 
                focus:border-pink-400 transition text-sm md:text-base"
              />
              {errors?.name && (
                <p className="text-red-400 mt-1 text-xs md:text-sm">
                  {errors.name.message}
                </p>
              )}
            </div>

            {/* EMAIL */}
            <div>
              <label className="block text-white mb-2 text-sm md:text-base">Email</label>
              <input
                type="email"
                placeholder="Your Email"
                {...register("email", {
                  required: { value: true, message: "Email is required" },
                  minLength: { value: 5, message: "Email is too short" },
                })}
                className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 
                text-white placeholder-white/50 focus:outline-none 
                focus:border-pink-400 transition text-sm md:text-base"
              />
              {errors?.email && (
                <p className="text-red-400 mt-1 text-xs md:text-sm">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* MESSAGE */}
            <div>
              <label className="block text-white mb-2 text-sm md:text-base">Message</label>
              <textarea
                placeholder="Your Message"
                {...register("message")}
                className="w-full h-32 px-4 py-3 rounded-xl bg-white/10 border border-white/20 
                text-white placeholder-white/50 focus:outline-none 
                focus:border-pink-400 transition resize-none text-sm md:text-base"
              />
            </div>

            {/* SUBMIT BUTTON */}
            <button
              disabled={isSubmitting}
              type="submit"
              className="w-full py-3 md:py-4 rounded-full 
              bg-gradient-to-r from-pink-500 to-indigo-600 
              text-white font-semibold 
              shadow-xl hover:shadow-2xl 
              disabled:opacity-50 disabled:cursor-not-allowed
              transition-all duration-300 text-sm md:text-base"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>

            {/* MESSAGE */}
            <div className="relative h-6">
              <AnimatePresence>
                {message.message && (
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className={`absolute inset-x-0 text-center text-xs md:text-sm font-medium
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
