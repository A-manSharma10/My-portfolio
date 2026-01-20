"use client";

import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";

const certifications = [
    {
        title: "Google Cybersecurity Professional",
        issuer: "Coursera",
        link: "https://www.coursera.org/account/accomplishments/specialization/certificate/9LB5Z8KWKPRP",
    },
    {
        title: "Introduction to Cloud Computing",
        issuer: "Cloud Initiative",
        link: "https://drive.google.com/file/d/1oi-l1DeFDmLG-mwsFgkDIpyhcsJuqzef/view?usp=sharing",
    },
];

export function Certifications() {
    return (
        <section id="certifications" className="py-20">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl font-bold mb-4">Certifications</h2>
                </motion.div>

                <div className="flex flex-col md:flex-row justify-center gap-6">
                    {certifications.map((cert, index) => (
                        <motion.a
                            key={index}
                            href={cert.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            whileHover={{ scale: 1.05 }}
                            className="flex items-center p-6 bg-card border border-border rounded-xl shadow-sm hover:shadow-md hover:border-primary/50 transition-all gap-4 max-w-md w-full"
                        >
                            <div className="p-3 bg-primary/10 rounded-full text-primary">
                                <Award size={32} />
                            </div>
                            <div className="flex-1">
                                <h3 className="font-semibold text-lg">{cert.title}</h3>
                                <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                            </div>
                            <ExternalLink size={18} className="text-muted-foreground" />
                        </motion.a>
                    ))}
                </div>
            </div>
        </section>
    );
}
