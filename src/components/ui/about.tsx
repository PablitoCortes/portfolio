"use client";

import { motion } from "framer-motion";
import { Code2, Users, Lightbulb, Rocket } from "lucide-react";

export function About() {
  const skills = [
    {
      icon: <Users className="w-5 h-5 text-cyan-400" />,
      title: "User-Centric Communication",
      description: "Leveraging years of customer service experience to bridge the gap between technical requirements and user needs.",
    },
    {
      icon: <Code2 className="w-5 h-5 text-blue-500" />,
      title: "Frontend Architecture",
      description: "Building scalable, maintainable, and component-driven user interfaces with modern tech stacks.",
    },
    {
      icon: <Lightbulb className="w-5 h-5 text-purple-400" />,
      title: "Problem Solving",
      description: "Approaching complex challenges with a methodical, analytical, and creative mindset.",
    },
    {
      icon: <Rocket className="w-5 h-5 text-green-400" />,
      title: "Product-Oriented",
      description: "Focusing on delivering real business value through polished, performant web experiences.",
    },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">Me</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <p className="text-lg text-gray-300 leading-relaxed font-light">
              I am a Frontend Engineer from Colombia who transitioned into tech with a unique perspective. My foundation in customer service has deeply influenced my engineering approach: <strong className="text-white font-medium">I build software for people.</strong>
            </p>
            <p className="text-lg text-gray-300 leading-relaxed font-light">
              This background instilled in me strong communication skills, deep empathy for end-users, and a resilient problem-solving mindset. I don&apos;t just write code; I strive to understand the core problem to deliver scalable and intuitive UI architectures.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed font-light">
              Currently, I specialize in the React ecosystem (Next.js, TypeScript, Tailwind) and am constantly refining my skills to build high-performance, product-grade web applications.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="grid sm:grid-cols-2 gap-4"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="glass-panel p-6 rounded-2xl transition-all duration-300 hover:bg-white/5 group"
              >
                <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  {skill.icon}
                </div>
                <h3 className="text-white font-medium mb-2">{skill.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  {skill.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
