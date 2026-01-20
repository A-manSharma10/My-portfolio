"use client";

import { motion } from "framer-motion";

const skills = [
    {
        category: "Languages",
        items: ["JavaScript", "TypeScript", "Python", "C++", "C"],
        color: "from-blue-500 to-cyan-500",
        badge: "bg-blue-500/10 text-blue-400 border-blue-500/20"
    },
    {
        category: "Web Development",
        items: ["Next.js", "React.js", "Node.js", "Express.js", "Tailwind CSS"],
        color: "from-emerald-500 to-lime-500",
        badge: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20"
    },
    {
        category: "Databases",
        items: ["MongoDB", "MySQL", "SQLite"],
        color: "from-orange-500 to-amber-500",
        badge: "bg-orange-500/10 text-orange-400 border-orange-500/20"
    },
    {
        category: "AI/ML",
        items: ["Deep Learning", "GANs", "Model Optimization"],
        color: "from-purple-500 to-pink-500",
        badge: "bg-purple-500/10 text-purple-400 border-purple-500/20"
    },
    {
        category: "Tools & DevOps",
        items: ["Git", "Docker", "Vercel", "Linux", "Postman"],
        color: "from-gray-500 to-slate-500",
        badge: "bg-slate-500/10 text-slate-400 border-slate-500/20"
    },
];

export function Skills() {
    return (
        <section id="skills" className="py-20 relative overflow-hidden">
            {/* Subtle background splashes */}
            <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl -z-10" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl -z-10" />

            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl font-bold mb-4">Technical Skills</h2>
                    <p className="text-muted-foreground">My technical toolkit</p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {skills.map((category, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-all hover:scale-[1.02] group"
                        >
                            <h3 className={`text-xl font-semibold mb-6 flex items-center gap-2 bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                                <span className={`w-2 h-8 rounded-full bg-gradient-to-b ${category.color}`}></span>
                                {category.category}
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {category.items.map((skill) => (
                                    <span
                                        key={skill}
                                        className={`px-3 py-1 text-sm rounded-md font-medium border ${category.badge}`}
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
