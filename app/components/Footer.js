"use client";

import { motion } from "framer-motion";
import { TbBrandGithub, TbBrandLinkedin, TbMail } from "react-icons/tb";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const footerLinks = [
        { name: "Home", href: "#" },
        { name: "About", href: "#about" },
        { name: "Skills", href: "#skills" },
        { name: "Contact", href: "#contact" },
    ];

    const socialLinks = [
        { icon: TbBrandGithub, href: "https://github.com", label: "GitHub" },
        { icon: TbBrandLinkedin, href: "https://linkedin.com", label: "LinkedIn" },
        { icon: TbMail, href: "mailto:your.email@example.com", label: "Email" },
    ];

    return (
        <footer className="relative w-full bg-gradient-to-b from-gray-900 to-black border-t border-white/10 overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-20 -left-20 w-64 h-64 bg-pink-500/5 rounded-full blur-3xl" />
                <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-indigo-500/5 rounded-full blur-3xl" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-12 md:py-16">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-8 md:mb-12">
                    {/* Brand Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="text-center md:text-left"
                    >
                        <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-pink-400 to-indigo-400 bg-clip-text text-transparent mb-3">
                            Abdul Rehman
                        </h3>
                        <p className="text-white/60 text-sm md:text-base">
                            Full Stack Web Developer
                        </p>
                        <p className="text-white/60 text-sm md:text-base">
                            Creating exceptional digital experiences
                        </p>
                    </motion.div>

                    {/* Quick Links */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        viewport={{ once: true }}
                        className="text-center md:text-left"
                    >
                        <h4 className="text-white font-semibold text-lg mb-4">Quick Links</h4>
                        <div className="flex flex-col gap-2">
                            {footerLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="text-white/60 hover:text-pink-400 transition-colors duration-200 text-sm md:text-base"
                                >
                                    {link.name}
                                </a>
                            ))}
                        </div>
                    </motion.div>

                    {/* Social Links */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="text-center md:text-left"
                    >
                        <h4 className="text-white font-semibold text-lg mb-4">Connect</h4>
                        <div className="flex gap-3 justify-center md:justify-start">
                            {socialLinks.map((social) => {
                                const Icon = social.icon;
                                return (
                                    <a
                                        key={social.label}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-3 rounded-full bg-white/10 border border-white/20 text-white hover:bg-white/20 hover:border-pink-400/50 transition-all duration-300"
                                        aria-label={social.label}
                                    >
                                        <Icon className="w-5 h-5" />
                                    </a>
                                );
                            })}
                        </div>
                    </motion.div>
                </div>

                {/* Divider */}
                <div className="border-t border-white/10 pt-8">
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        viewport={{ once: true }}
                        className="text-center text-white/50 text-sm md:text-base"
                    >
                        © {currentYear} Abdul Rehman. All rights reserved.
                    </motion.p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
