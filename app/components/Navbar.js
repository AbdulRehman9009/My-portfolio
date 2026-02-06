"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TbMenu2, TbX } from "react-icons/tb";

const Navbar = () => {
    const [open, setOpen] = useState(false);

    const navLinks = [
        { name: "Home", href: "#" },
        { name: "About", href: "#about" },
        { name: "Skills", href: "#skills" },
        { name: "Reviews", href: "#reviews" },
    ];

    return (
        <nav className="sticky top-0 z-50 bg-black/80 backdrop-blur-xl border-b border-white/10 shadow-lg">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16 md:h-20">
                    {/* Logo */}
                    <motion.a
                        href="#"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="text-xl md:text-2xl font-bold bg-gradient-to-r from-pink-400 to-indigo-400 bg-clip-text text-transparent"
                    >
                        Abdul Rehman
                    </motion.a>

                    {/* Desktop Navigation */}
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="hidden md:flex items-center gap-2 lg:gap-4"
                    >
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="px-4 lg:px-6 py-2 text-white/80 hover:text-white text-sm lg:text-base font-medium transition-colors duration-200 hover:bg-white/5 rounded-lg"
                            >
                                {link.name}
                            </a>
                        ))}
                        <a
                            href="#contact"
                            className="px-6 lg:px-8 py-2 bg-gradient-to-r from-pink-500 to-indigo-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-sm lg:text-base font-semibold"
                        >
                            Contact Me
                        </a>
                    </motion.div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setOpen(!open)}
                        className="md:hidden p-2 text-white hover:bg-white/10 rounded-lg transition-colors"
                        aria-label="Toggle menu"
                    >
                        {open ? <TbX className="w-6 h-6" /> : <TbMenu2 className="w-6 h-6" />}
                    </button>
                </div>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {open && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="md:hidden overflow-hidden"
                        >
                            <div className="py-4 space-y-2">
                                {navLinks.map((link) => (
                                    <a
                                        key={link.name}
                                        href={link.href}
                                        onClick={() => setOpen(false)}
                                        className="block px-4 py-3 text-white/80 hover:text-white hover:bg-white/5 rounded-lg transition-colors text-base font-medium"
                                    >
                                        {link.name}
                                    </a>
                                ))}
                                <a
                                    href="#contact"
                                    onClick={() => setOpen(false)}
                                    className="block px-4 py-3 mt-2 bg-gradient-to-r from-pink-500 to-indigo-600 text-white rounded-lg text-center font-semibold shadow-lg"
                                >
                                    Contact Me
                                </a>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </nav>
    );
};

export default Navbar;
