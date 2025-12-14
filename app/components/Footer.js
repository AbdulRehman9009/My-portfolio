"use client";
import { motion } from "framer-motion";
import Link from "next/link";

import { FaTwitter, FaFacebook, FaYoutube, FaInstagram } from "react-icons/fa";

const Footer = () => {

    const links = ["Projects", "Contact", "About"]
    return (
        <footer className="mx-7 my-5 py-10 rounded-2xl bg-linear-to-r from-pink-500/20 to-indigo-500/20 backdrop-blur-xl shadow-lg border border-white/10 flex flex-col items-center gap-6">

            {/* Logo */}
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

            {/* Footer Links */}
            <div className="flex gap-10 text-white text-lg font-medium">
                {links.map((item, index) => (
                    <span
                        key={index}
                        className="relative group cursor-pointer"
                    >
                        {item}
                        <span className="absolute left-0 -bottom-1 w-0 group-hover:w-full h-0.5 bg-pink-300 transition-all duration-300 rounded-full"></span>
                    </span>
                ))}
            </div>

            {/* Social Icons */}
            <div className="flex gap-8 text-3xl text-white">
                <Link href="/" className="hover:text-pink-300 transition-all hover:scale-110">
                    <FaTwitter />
                </Link>
                <Link href="/" className="hover:text-pink-300 transition-all hover:scale-110">
                    <FaFacebook />
                </Link>
                <Link href="/" className="hover:text-pink-300 transition-all hover:scale-110">
                    <FaYoutube />
                </Link>
                <Link href="/" className="hover:text-pink-300 transition-all hover:scale-110">
                    <FaInstagram />
                </Link>
            </div>

            {/* Copyright */}
            <p className="text-white/60 text-sm">
                © 2024 DevPortfolio. All rights reserved.
            </p>
        </footer>
    );
};

export default Footer;
