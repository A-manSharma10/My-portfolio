"use client";

import { motion } from "framer-motion";
import { Mail, Linkedin, Github } from "lucide-react";

export function Contact() {
    return (
        <section id="contact" className="py-20 bg-muted/30">
            <div className="container mx-auto px-6 max-w-4xl text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl font-bold mb-8">Get In Touch</h2>
                    <p className="text-muted-foreground text-lg mb-12 max-w-2xl mx-auto">
                        I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
                    </p>

                    <div className="grid md:grid-cols-3 gap-8 mb-12">
                        <a href="mailto:amn.10.sharma@gmail.com" className="flex flex-col items-center p-6 bg-card rounded-xl border border-border hover:border-red-500/50 transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-red-500/10 group">
                            <div className="p-4 bg-red-500/10 rounded-full text-red-500 mb-4 group-hover:bg-red-500 group-hover:text-white transition-colors">
                                <Mail size={32} />
                            </div>
                            <h3 className="font-semibold mb-1">Email</h3>
                            <p className="text-sm text-muted-foreground group-hover:text-red-400 transition-colors">amn.10.sharma@gmail.com</p>
                        </a>

                        <a href="https://www.linkedin.com/in/amansharma10/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center p-6 bg-card rounded-xl border border-border hover:border-blue-600/50 transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-600/10 group">
                            <div className="p-4 bg-blue-600/10 rounded-full text-blue-600 mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                                <Linkedin size={32} />
                            </div>
                            <h3 className="font-semibold mb-1">LinkedIn</h3>
                            <p className="text-sm text-muted-foreground group-hover:text-blue-400 transition-colors">Connect with me</p>
                        </a>

                        <a href="https://github.com/A-manSharma10" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center p-6 bg-card rounded-xl border border-border hover:border-purple-600/50 transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-purple-600/10 group">
                            <div className="p-4 bg-purple-600/10 rounded-full text-purple-600 mb-4 group-hover:bg-purple-600 group-hover:text-white transition-colors">
                                <Github size={32} />
                            </div>
                            <h3 className="font-semibold mb-1">GitHub</h3>
                            <p className="text-sm text-muted-foreground group-hover:text-purple-400 transition-colors">Check my code</p>
                        </a>
                    </div>

                    <a
                        href="mailto:amn.10.sharma@gmail.com"
                        className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-primary to-purple-600 text-white font-medium rounded-full hover:opacity-90 transition-all text-lg shadow-lg hover:shadow-primary/25"
                    >
                        Say Hello <span className="ml-2">👋</span>
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
