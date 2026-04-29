"use client";

import { motion } from "framer-motion";
import { Layout, Database, Wrench, Server, Cpu, Palette } from "lucide-react";

export function Skills() {
  const skillCategories = [
    {
      title: "Frontend Engineering",
      icon: <Layout className="w-6 h-6 text-cyan-400" />,
      skills: ["React 19", "Next.js 15", "TypeScript", "Tailwind CSS v4", "Framer Motion", "HTML5/CSS3"],
    },
    {
      title: "State Management",
      icon: <Cpu className="w-6 h-6 text-purple-400" />,
      skills: ["Redux Toolkit", "React Context", "React Query (TanStack)", "Zustand"],
    },
    {
      title: "Backend Engineering",
      icon: <Server className="w-6 h-6 text-blue-500" />,
      skills: ["Node.js", "Express.js", "RESTful APIs", "Socket.io"],
    },
    {
      title: "Databases & Cloud",
      icon: <Database className="w-6 h-6 text-green-400" />,
      skills: ["MongoDB", "Mongoose", "Firebase", "Cloudinary"],
    },
    {
      title: "Tooling & CI/CD",
      icon: <Wrench className="w-6 h-6 text-orange-400" />,
      skills: ["Git", "GitHub", "Vite", "ESLint / Prettier", "npm/yarn", "Vitest"],
    },
    {
      title: "UI / UX & Design",
      icon: <Palette className="w-6 h-6 text-pink-400" />,
      skills: ["Figma", "Responsive Design", "Accessibility (a11y)", "Glassmorphism", "Microinteractions"],
    },
  ];

  return (
    <section id="skills" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">Arsenal</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A comprehensive overview of the tools, languages, and frameworks I use to build scalable web applications.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-panel p-8 rounded-3xl group hover:bg-white/[0.03] transition-colors duration-500"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-white/5 rounded-2xl border border-white/10 group-hover:scale-110 transition-transform duration-300">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-white">{category.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-sm font-medium text-gray-300 bg-black/40 border border-white/5 rounded-full hover:border-cyan-500/50 hover:text-white transition-colors cursor-default"
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
