"use client";

import React from 'react'
import Image from "next/image";
import { TbWorld, TbArrowRight, TbCode, TbDeviceDesktop } from "react-icons/tb";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Hero = () => {
    const [isLoaded, setIsLoaded] = useState(false);
    useEffect(() => setIsLoaded(true), []);


    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3,
            },
        },
    };

    const itemVariants = {
        hidden: { y: 30, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.8, ease: "easeOut" },
        },
    };

    const floatVariants = {
        float: {
            y: [0, -15, 0],
            transition: {
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
            },
        },
    };

    const pulseVariants = {
        pulse: {
            scale: [1, 1.05, 1],
            transition: {
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
            },
        },
    };
    return (
        <section className="min-h-screen w-full relative overflow-hidden bg-linear-to-br from-pink-900/20 via-purple-900/20 to-indigo-900/20 backdrop-blur-3xl flex items-center justify-center px-6 py-16">
            {/* Animated Background Orbs */}
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

            <div className="max-w-7xl w-full mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
                {/* Left Content */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={isLoaded ? "visible" : "hidden"}
                    className="flex flex-col gap-6 text-white"
                >
                    {/* Greeting */}
                    <motion.p variants={itemVariants} className="text-xl md:text-2xl flex items-center gap-3 font-light">
                        <TbWorld className="text-pink-400 text-3xl" />
                        Welcome to my world
                    </motion.p>

                    {/* Name */}
                    <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-bold leading-tight">
                        Hi, I'm{" "}
                        <span className="text-transparent bg-clip-text bg-linear-to-r from-pink-400 to-indigo-400">
                            Abdul Rehman
                        </span>
                    </motion.h1>

                    {/* Title */}
                    <motion.h2 variants={itemVariants} className="text-3xl md:text-5xl font-semibold text-pink-300">
                        Full Stack Web Developer
                    </motion.h2>

                    {/* Description */}
                    <motion.p
                        variants={itemVariants}
                        className="text-lg md:text-xl text-gray-300 max-w-lg leading-relaxed"
                    >
                        Crafting stunning, high-performance web experiences with modern technologies, creative design, and pixel-perfect precision.
                    </motion.p>

                    {/* Buttons */}
                    <motion.div variants={itemVariants} className="flex flex-wrap gap-4 mt-8">
                        <motion.a
                            href="#contact"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="group relative overflow-hidden bg-linear-to-r from-pink-500 to-indigo-600 text-white font-semibold px-8 py-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center gap-3"
                        >
                            Hire Me
                            <TbArrowRight className="group-hover:translate-x-1 transition-transform" />
                            <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                        </motion.a>

                        <motion.a
                            href="#projects"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-white/10 backdrop-blur-md border border-white/20 text-white font-semibold px-8 py-4 rounded-full hover:bg-white/20 transition-all duration-300 flex items-center gap-3"
                        >
                            <TbCode />
                            View Projects
                        </motion.a>
                    </motion.div>

                    {/* Small tech icons (optional flair) */}
                    <motion.div
                        variants={itemVariants}
                        className="flex gap-6 mt-10 text-3xl text-gray-400"
                    >
                        <TbDeviceDesktop className="hover:text-pink-400 transition-colors" />
                        <TbCode className="hover:text-indigo-400 transition-colors" />
                    </motion.div>
                </motion.div>

                {/* Right Side - Avatar with floating animation + ring glow */}
                <motion.div
                    variants={floatVariants}
                    animate="float"
                    className="relative flex justify-center lg:justify-end"
                >
                    <motion.div
                        variants={pulseVariants}
                        animate="pulse"
                        className="absolute inset-0 w-96 h-96 bg-linear-to-r from-pink-500/30 to-indigo-500/30 rounded-full blur-3xl -z-10"
                    />
                    <div className="relative">
                        <div className="absolute inset-0 rounded-full bg-linear-to-r from-pink-500 to-indigo-600 blur-xl opacity-70 animate-pulse" />
                        <Image
                            src="/images/Avatar.png"
                            alt="Abdul Rehman - Web Developer"
                            width={480}
                            height={480}
                            className="rounded-full border-8 border-white/20 shadow-2xl relative z-10 hover:scale-105 transition-transform duration-500"
                            priority
                        />
                        {/* Decorative orbiting ring */}
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                            className="absolute -inset-8 border-2 border-pink-500/30 rounded-full"
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default Hero
