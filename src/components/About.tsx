"use client";

import { motion } from "framer-motion";

export function About() {
    return (
        <section id="about" className="py-20 bg-muted/30">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="max-w-4xl mx-auto"
                >
                    <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>

                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
                            <p>
                                I&apos;m a Computer Science undergraduate and Full-Stack Developer passionate about building high-quality web applications and experimenting with AI-driven systems. My work includes developing scalable MERN/Next.js projects, designing responsive interfaces, and creating backend APIs that are secure and efficient.
                            </p>
                            <p>
                                I&apos;ve also worked on deep learning and computer vision projects like plant disease detection using GANs and an AI-powered online proctoring system with gaze tracking, object detection, and automated reporting. I enjoy working in fast-paced environments, collaborating with teams, and continuously improving my skills.
                            </p>
                            <p>
                                I&apos;m currently looking for opportunities where I can contribute as a developer, build impactful products, and grow as an engineer.
                            </p>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            {[
                                { title: "Full-Stack Dev", icon: "💻" },
                                { title: "Clean UI/UX", icon: "🎨" },
                                { title: "Deep Learning", icon: "🧠" },
                                { title: "Problem Solving", icon: "🧩" },
                            ].map((item, index) => (
                                <div key={index} className="p-6 bg-background rounded-2xl border border-border shadow-sm text-center hover:shadow-md transition-shadow">
                                    <div className="text-4xl mb-3">{item.icon}</div>
                                    <h3 className="font-semibold">{item.title}</h3>
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
