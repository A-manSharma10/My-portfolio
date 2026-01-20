"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";


const projects = [
    {
        title: "SmartExpensePro",
        description: "AI-ready expense tracker using MERN for scalability and production performance. Features secure REST APIs and modular clean architecture.",
        tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
        github: "https://github.com/A-manSharma10/SmartExpensePro",
        live: null,
        highlight: true,
    },
    {
        title: "Personal Portfolio",
        description: "Next.js portfolio with SSR, SEO optimization, and GitHub API integration. Mobile-first design with reusable components.",
        tech: ["Next.js", "React.js", "Tailwind CSS", "Vercel"],
        github: null,
        live: "https://my-portfolio-rho-rose-63.vercel.app/",
    },
    {
        title: "AI Symptom Checker",
        description: "Integrated web app with React frontend, Node backend, and Django service for Wiki API insights.",
        tech: ["React.js", "Node.js", "Express.js", "Django"],
        github: "https://github.com/A-manSharma10/Symptom_Checker",
        live: null,
    },
    {
        title: "Plant Disease Detection",
        description: "GAN-based model achieving 85.6% accuracy using MobileNetV2 + ResNet34. Simple interface for diagnosis.",
        tech: ["Python", "Deep Learning", "GANs", "MobileNetV2"],
        github: "https://github.com/A-manSharma10/Plant-Disease-Detection-using-GAN-Model/tree/main",
        live: null,
    },
    {
        title: "AI-Based Proctoring System",
        description: "Comprehensive online exam monitoring system with real-time face tracking, gaze detection, object detection, and automated violation alerts.",
        tech: ["Python", "OpenCV", "NumPy", "Computer Vision"],
        github: "https://github.com/A-manSharma10/Ai-based-proctoring-system",
        live: null,
    },
    {
        title: "Multi-threaded Server",
        description: "High-concurrency client-server system using C++ and Winsock. Designed for robust request handling and stable network communication.",
        tech: ["C++", "Winsock", "Multi-threading", "Network Programming"],
        github: "https://github.com/A-manSharma10/Multi-threaded_WebServer_Winsock",
        live: null,
    },
];

export function Projects() {
    return (
        <section id="projects" className="py-20 bg-muted/30 relative">
            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
                    <p className="text-muted-foreground">What I&apos;ve been working on</p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative rounded-xl"
                        >
                            {/* Gradient Border Background */}
                            <div className="absolute -inset-[1px] bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity blur-sm" />

                            <div className="relative h-full bg-card rounded-xl overflow-hidden flex flex-col border border-border group-hover:border-transparent transition-colors">
                                <div className="p-8 flex-1">
                                    <div className="flex justify-between items-start mb-4">
                                        <h3 className="text-2xl font-bold group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all">
                                            {project.title}
                                        </h3>
                                        {project.highlight && (
                                            <span className="bg-gradient-to-r from-orange-500 to-amber-500 text-white text-xs font-bold px-2 py-1 rounded-full animate-pulse shadow-lg shadow-orange-500/20">
                                                Building
                                            </span>
                                        )}
                                    </div>

                                    <p className="text-muted-foreground mb-6 line-clamp-3">
                                        {project.description}
                                    </p>

                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {project.tech.map((t) => (
                                            <span
                                                key={t}
                                                className="px-2 py-1 bg-primary/10 text-primary text-xs rounded font-medium border border-primary/20"
                                            >
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className="p-6 border-t border-border bg-muted/10 flex gap-4 mt-auto">
                                    {project.github && (
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 text-sm font-medium hover:text-blue-400 transition-colors"
                                        >
                                            <Github size={18} /> Code
                                        </a>
                                    )}
                                    {project.live && (
                                        <a
                                            href={project.live}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 text-sm font-medium hover:text-purple-400 transition-colors"
                                        >
                                            <ExternalLink size={18} /> Live Demo
                                        </a>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
