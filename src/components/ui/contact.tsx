"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Mail, Github, Linkedin, ArrowRight } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background glow for contact section */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="glass-panel p-12 md:p-16 rounded-[3rem] border-cyan-500/20 shadow-2xl shadow-cyan-500/5"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-white">
            Ready to build something <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
              extraordinary?
            </span>
          </h2>
          <p className="text-gray-400 text-lg mb-10 max-w-xl mx-auto font-light">
            I&apos;m currently open to new opportunities, whether it&apos;s a full-time role, a freelance project, or just a technical discussion. Let&apos;s connect!
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Link
              href="mailto:riascosjuan1597@gmail.com"
              className="group flex items-center justify-center gap-2 w-full sm:w-auto bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white px-8 py-4 rounded-full font-medium transition-all shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40"
            >
              <Mail className="w-5 h-5" />
              Say Hello
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="flex items-center justify-center gap-6">
            <Link
              href="https://github.com/pablitoCortes"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 hover:text-cyan-400 transition-colors text-gray-400"
            >
              <Github className="w-6 h-6" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/juan-pablo-riascos-b25bb3388/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 hover:text-blue-400 transition-colors text-gray-400"
            >
              <Linkedin className="w-6 h-6" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
