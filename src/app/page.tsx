"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const skills = [
  "HTML", "CSS", "JavaScript", "TypeScript",
  "React.js", "Next.js", "Tailwind CSS", "Framer Motion",
  "Python", "Django", "C++", "C",
  "MySQL", "MongoDB", "REST APIs", "Git & GitHub"
];

const projects = [
  {
    title: "Jarvis – Voice-Controlled AI Assistant",
    desc: "Built a Python-based voice assistant capable of executing voice commands like sending emails, fetching weather updates, and playing music. Integrated APIs and libraries like pyttsx3 and SpeechRecognition to facilitate human-computer interaction. This assistant can also search Google, open apps, and provide time and date. Designed as a smart personal companion.",
    url: "https://github.com/A-manSharma10/Jarvis-AI",
  },
  {
    title: "Symptom Checker Web App",
    desc: "Developed a web application that predicts possible diseases based on user-reported symptoms using machine learning models trained on medical datasets. Integrated Wikipedia API to show disease information. Implemented secure Django backend with NLP for symptom parsing. This app provides early awareness and helps users seek medical consultation more effectively.",
    url: "https://github.com/A-manSharma10/Symptom_Checker",
  },
  {
    title: "Plant Disease Detection (GAN)",
    desc: "Designed a real-time plant disease detection system using a Generative Adversarial Network (GAN) combined with MobileNetV2 for accurate classification. Hosted a Gradio interface for demo, and auto-fetched disease information using Wikipedia. The project promotes agricultural automation and early disease diagnosis.",
    url: "https://github.com/A-manSharma10/Plant-Disease-Detection-using-GAN-Model/tree/main",
  },
  {
    title: "Multi-threaded Web Server (C++)",
    desc: "Engineered a web server in C++ using Winsock for socket programming and a thread pool to handle multiple clients simultaneously. Emphasized performance and concurrency management. Implemented HTTP request handling and logging. Great for learning low-level networking and server architecture.",
    url: "https://github.com/A-manSharma10/Multi-threaded_WebServer_Winsock",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen px-6 py-12 sm:px-16 bg-gradient-to-br from-[#f0f4ff] to-[#e6f7ff] dark:from-[#0f0f0f] dark:to-[#1a1a1a] text-black dark:text-white font-sans">
      {/* Header */}
      <header className="text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center mb-6"
        >
          <Image
            src="/profile.jpeg"
            alt="Aman Sharma"
            width={140}
            height={140}
            className="rounded-full border-4 border-blue-500 shadow-lg"
          />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-5xl font-bold mb-2 text-blue-800 dark:text-blue-400"
        >
          Aman Sharma
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-lg text-gray-600 dark:text-gray-400"
        >
          Full Stack Developer • Python/Django • React/Next.js Enthusiast
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="flex flex-wrap justify-center gap-4 mt-6"
        >
          <a
            href="https://www.linkedin.com/in/amansharma10/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-black text-white dark:bg-white dark:text-black px-5 py-2 rounded-lg font-medium hover:opacity-90"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/A-manSharma10"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-black dark:border-white px-5 py-2 rounded-lg font-medium hover:bg-gray-100 dark:hover:bg-gray-900"
          >
            GitHub
          </a>
          <a
            href="/Aman_Sharma_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700"
          >
            Resume
          </a>
        </motion.div>
      </header>

      {/* Skills */}
      <section className="mb-20">
        <h2 className="text-3xl font-semibold mb-6 text-center text-blue-700 dark:text-blue-300">Skills</h2>
        <motion.ul
          className="flex flex-wrap justify-center gap-4"
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.07,
              },
            },
          }}
        >
          {skills.map((skill, index) => (
            <motion.li
              key={skill}
              className="bg-gradient-to-r from-indigo-400 to-purple-500 text-white px-4 py-1.5 rounded-full text-sm shadow-lg hover:scale-110 transition-transform"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
            >
              {skill}
            </motion.li>
          ))}
        </motion.ul>
      </section>

      {/* Projects */}
      <section className="mb-24">
        <h2 className="text-4xl font-bold mb-12 text-center text-blue-800 dark:text-blue-400">
          Featured Projects
        </h2>
        <motion.div
          className="grid gap-10 sm:grid-cols-2"
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.3,
              },
            },
          }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="relative p-6 rounded-3xl shadow-xl transition-all hover:shadow-2xl overflow-hidden border dark:border-gray-700"
              style={{
                background:
                  index % 2 === 0
                    ? "linear-gradient(135deg, #dbeafe, #eff6ff)"
                    : "linear-gradient(135deg, #e0f2f1, #f1f8e9)",
              }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
      

              <h3 className="text-2xl font-bold mb-3 text-blue-900 dark:text-white">
                {project.title}
              </h3>
              <ul className="text-gray-700 dark:text-gray-300 list-disc list-inside text-sm space-y-2">
                {project.desc.split(". ").map((sentence, idx) => (
                  <li key={idx}>{sentence.trim()}</li>
                ))}
              </ul>
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-5 text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 font-semibold transition-colors"
              >
                🔗 View on GitHub
              </a>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="text-center text-xs text-gray-500 dark:text-gray-600">
        &copy; {new Date().getFullYear()} Aman Sharma. Built with 💙 Next.js & Tailwind CSS.
      </footer>
    </main>
  );
}
