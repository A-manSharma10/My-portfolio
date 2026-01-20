"use client";

import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import Image from "next/image";

export function Hero() {
    return (
        <section className="min-h-screen flex items-center justify-center pt-24 pb-12 relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-background to-background" />
            <div className="absolute top-1/4 left-0 w-72 h-72 bg-blue-500/30 rounded-full blur-[120px] animate-float" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/30 rounded-full blur-[120px] animate-float-delayed" />
            <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-pink-500/20 rounded-full blur-[100px] animate-float" />

            <div className="container mx-auto px-6 z-10">
                <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">

                    <motion.div
                        className="flex-1 text-center md:text-left"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <span className="inline-block px-3 py-1 text-sm font-medium bg-primary/10 text-primary rounded-full mb-6 border border-primary/20 shadow-[0_0_15px_-3px_var(--color-primary)]">
                            Available for Hire
                        </span>
                        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
                            Hi, I&apos;m <span className="text-transparent bg-clip-text bg-[linear-gradient(110deg,#9333ea,45%,#c084fc,55%,#9333ea)] bg-[length:200%_100%] animate-shimmer">Aman Sharma</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto md:mx-0 mb-8 leading-relaxed">
                            Full-stack Developer building production-grade applications with modern web technologies and AI.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center md:items-start justify-center md:justify-start gap-4">
                            <a
                                href="#projects"
                                className="relative px-8 py-3 bg-primary text-primary-foreground font-medium rounded-full hover:opacity-90 transition-all flex items-center gap-2 shadow-lg shadow-primary/25 overflow-hidden group"
                            >
                                <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500" />
                                View Projects <ArrowRight size={18} />
                            </a>
                            <a
                                href="#contact"
                                className="px-8 py-3 bg-card text-foreground font-medium rounded-full hover:bg-muted/50 transition-all border border-border/50 hover:border-primary/50 shadow-sm"
                            >
                                Contact Me
                            </a>
                        </div>

                        <div className="mt-12 flex justify-center md:justify-start gap-6 text-muted-foreground">
                            <a href="https://github.com/A-manSharma10" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors hover:scale-110 transform duration-200">
                                <Github size={24} />
                            </a>
                            <a href="https://www.linkedin.com/in/amansharma10/" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors hover:scale-110 transform duration-200">
                                <Linkedin size={24} />
                            </a>
                            <a href="mailto:amn.10.sharma@gmail.com" className="hover:text-primary transition-colors hover:scale-110 transform duration-200">
                                <Mail size={24} />
                            </a>
                        </div>
                    </motion.div>

                    <motion.div
                        className="flex-1 flex justify-center md:justify-end"
                        initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
                        animate={{ opacity: 1, scale: 1, rotate: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <div className="relative w-64 h-64 md:w-96 md:h-96">
                            <div className="absolute inset-0 bg-gradient-to-tr from-primary to-purple-500 rounded-[2rem] rotate-6 opacity-30 blur-2xl animate-pulse" />
                            <div className="absolute inset-0 bg-gradient-to-tr from-primary to-purple-500 rounded-[2rem] rotate-6 opacity-20" />
                            <div className="relative rounded-[2rem] overflow-hidden border-4 border-background shadow-2xl w-full h-full">
                                <Image
                                    src="/profile.jpeg"
                                    alt="Aman Sharma"
                                    fill
                                    className="object-cover"
                                    priority
                                />
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
