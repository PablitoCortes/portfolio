"use client";

import { Navbar } from "@/components/ui/navbar";
import { Hero } from "@/components/ui/hero";
import { About } from "@/components/ui/about";
import { Projects } from "@/components/ui/projects";
import { Skills } from "@/components/ui/skills";
import { Contact } from "@/components/ui/contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050505] text-[#fafafa] font-sans selection:bg-cyan-500/30 selection:text-cyan-200">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />

      <footer className="py-8 text-center border-t border-white/5 relative z-10 bg-black/20 backdrop-blur-md">
        <p className="text-gray-500 text-sm">
          © {new Date().getFullYear()} Juan Pablo Riascos. Built with Next.js, Tailwind v4, and Framer Motion.
        </p>
      </footer>
    </main>
  );
}
