"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import Link from "next/link";

const Navbar = () => {
    const [open, setOpen] = useState(false);

    const menuItems = ["Home", "About", "Skills", "Contact", "Reviews"];

    return (
        <nav className="bg-linear-to-r from-pink-500/20 to-indigo-500/30 p-6 shadow-lg rounded-2xl my-7 mx-7 backdrop-blur-xl border border-white/10">
            {/* Container */}
            <div className="flex justify-between items-center">

                {/* Animated Logo */}
                <motion.div
                    className="font-bold text-2xl cursor-pointer select-none"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    whileHover={{ scale: 1.08 }}
                >
                    <span className="text-indigo-400">Dev</span>
                    <span className="text-pink-400 ml-1">Portfolio</span>
                </motion.div>

                {/* Desktop Menu */}
                <div className="hidden md:flex gap-6 text-xl text-white">
                    {menuItems.map((item, index) => (
                        <Link key={index} className="relative group" href={`/${item === "Home" ? "" : `#${item.toLowerCase()}`}`}>
                            <span className="transition-all group-hover:text-pink-200 group-hover:scale-105 inline-block">
                                {item}
                            </span>
                            <span className="absolute left-0 -bottom-1 w-0 group-hover:w-full h-[3px] bg-pink-300 transition-all duration-300 rounded-full"></span>
                        </Link>
                    ))}
                </div>

                {/* Desktop Button */}
                <div className="hidden md:block">
                    <button className="bg-linear-to-r from-pink-500 to-indigo-600 text-white px-8 py-2 rounded-full shadow-md hover:opacity-90 transition-all">
                        Contact Me
                    </button>
                </div>

                {/* Mobile Icon */}
                <button className="md:hidden text-white" onClick={() => setOpen(!open)}>
                    {open ? <FiX size={30} /> : <FiMenu size={30} />}
                </button>
            </div>

            {/* Mobile Dropdown */}
            {open && (
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="md:hidden mt-4 bg-white/10 backdrop-blur-2xl p-4 rounded-xl border border-white/10"
                >
                    <div className="flex flex-col gap-4 text-white text-lg font-medium">
                        <Link onClick={() => setOpen(false)} href="/">Home</Link>
                        <Link onClick={() => setOpen(false)} href="/#about">About</Link>
                        <Link onClick={() => setOpen(false)} href="/#skills">Skills</Link>
                        <Link onClick={() => setOpen(false)} href="/#reviews">Reviews</Link>
                        <Link onClick={() => setOpen(false)} href="/#contact">Contact</Link>

                        <button
                            onClick={() => setOpen(false)}
                            className="mt-2 px-4 py-2 bg-linear-to-r from-pink-500 to-indigo-600 rounded-md text-white"
                        >
                            Contact Me
                        </button>
                    </div>
                </motion.div>
            )}

        </nav>
    );
};

export default Navbar;
