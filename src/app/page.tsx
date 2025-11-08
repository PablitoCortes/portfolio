"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowDownRight, Download } from "lucide-react";
import { FaReact, FaGitAlt, FaCloud } from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiMongodb,
  SiRedux,
} from "react-icons/si";
import { useRef } from "react";


export default function Home() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const overlayOpacity = useTransform(scrollYProgress, [0, 1], [0, 0.8]);

  const handleSmoothScroll = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute("href");
    if (!href) return;
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-gray-800 text-gray-100 font-inter scroll-smooth">
      <section
        ref={ref}
        className="relative flex flex-col items-center justify-center h-screen text-center px-6 overflow-hidden"
      >
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-bg.png"
            alt="background"
            fill
            priority
            className="object-cover object-center"
          />
        </div>
        <motion.div
          style={{ opacity: overlayOpacity }}
          className="absolute inset-0 bg-black z-10 transition-opacity duration-500"
        />

        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-b from-transparent to-gray-900 z-10" />
        <div className="relative z-20">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent"
          >
            Juan Pablo Riascos
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-4 text-lg md:text-xl text-gray-300"
          >
            Frontend Developer · React · Next.js · TypeScript
          </motion.p>

          <motion.div
            className="mt-10 flex flex-wrap gap-4 justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <Link
              href="#projects"
              onClick={handleSmoothScroll}
              className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white px-6 py-3 rounded-xl font-medium transition-all shadow-md"
            >
              View Projects
            </Link>
            <Link
              href="#contact"
              onClick={handleSmoothScroll}
              className="border border-cyan-500 hover:bg-cyan-600/10 text-cyan-400 px-6 py-3 rounded-xl font-medium transition-all"
            >
              Contact
            </Link>
            <a
              href="https://drive.google.com/uc?export=download&id=1eg6lQDCKSiD--h5r-CjH8zj-6zIrmUDN"
              className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 px-6 py-3 rounded-xl font-medium text-gray-200 transition-all"
            >
              <Download size={18} />
              Download CV
            </a>
          </motion.div>

          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="mt-16 text-gray-500"
          >
            <Link
              onClick={handleSmoothScroll}
              href="#about"
              className="flex flex-col items-center gap-2 hover:text-gray-400 transition-all"
            >
              <ArrowDownRight className="w-6 h-6" />
            </Link>
          </motion.div>
        </div>
      </section>

      <section id="about" className="max-w-3xl mx-auto py-20 px-6">
        <div className="flex justify-center mb-8 ">
          <Image
            src={"/images/profilePic.jpg"}
            width={300}
            alt={"juan Pablo Riascos"}
            height={300}
            className="rounded-full"
          />
        </div>

        <h2 className="text-3xl font-bold mb-4 text-cyan-400">About Me</h2>
        <p className="text-gray-300 leading-relaxed">
          I’m a passionate frontend developer from Colombia, focused on building
          smooth, interactive, and meaningful web experiences. My work blends
          clean design, performance, and modern web technologies like React,
          Next.js, and TypeScript. I love bringing creative ideas to life
          through code.
        </p>
      </section>
      <section className="max-w-5xl mx-auto py-20 px-6">
        <h2 className="text-3xl font-bold mb-8 text-center text-cyan-400">
          Skills
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            {
              name: "React",
              icon: <FaReact className="text-cyan-400 text-5xl mb-2" />,
            },
            {
              name: "Next.js",
              icon: <SiNextdotjs className="text-gray-100 text-5xl mb-2" />,
            },
            {
              name: "TypeScript",
              icon: <SiTypescript className="text-blue-500 text-5xl mb-2" />,
            },
            {
              name: "Tailwind CSS",
              icon: <SiTailwindcss className="text-cyan-500 text-5xl mb-2" />,
            },
            {
              name: "Redux",
              icon: <SiRedux className="text-purple-400 text-5xl mb-2" />,
            },
            {
              name: "MongoDB",
              icon: <SiMongodb className="text-green-500 text-5xl mb-2" />,
            },
            {
              name: "Git",
              icon: <FaGitAlt className="text-orange-500 text-5xl mb-2" />,
            },
            {
              name: "Cloudinary",
              icon: <FaCloud className="text-sky-400 text-5xl mb-2" />,
            },
          ].map(({ name, icon }) => (
            <motion.div
              key={name}
              whileHover={{ scale: 1.05 }}
              className="bg-gray-800 hover:bg-gray-750 p-5 rounded-xl shadow-md transition-all flex gap-4 justify-center items-center"
            >
              {icon}
              <span className="mt-2 text-gray-200 font-medium">{name}</span>
            </motion.div>
          ))}
        </div>
      </section>
      <section id="projects" className="max-w-5xl mx-auto py-20 px-6">
        <h2 className="text-3xl font-bold mb-8 text-center text-cyan-400">
          Projects
        </h2>
        
        <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-gray-800 rounded-2xl p-5 hover:-translate-y-1 transition">
            <h3 className="font-semibold text-xl mb-2 text-white">
              Live Chat
            </h3>
            <p className="text-gray-400 text-sm mb-4">
              Real-time messaging app using React, Node.js, and Socket.io.
            </p>
            <div>
              <Image
                src="/images/live-chat.png"
                alt=""
                width={200}
                height={200}
                className="rounded-lg"
              />
            </div>
            <Link
              href="https://live-chat-front-3xn3.onrender.com/auth/login"
              className="text-cyan-400 hover:underline"
            >
              Live Demo →
            </Link>
          </div>

          <div className="bg-gray-800 rounded-2xl p-5 hover:-translate-y-1 transition">
            <h3 className="font-semibold text-xl mb-2 text-white">
              SmartBudget (in progress)
            </h3>
            <p className="text-gray-400 text-sm mb-4">
              Financial tracking tool built with MERN stack and TypeScript.
            </p>
          </div>
          <div className="bg-gray-800 rounded-2xl p-5 hover:-translate-y-1 transition">
            <h3 className="font-semibold text-xl mb-2 text-white">
              Pet Adoption
            </h3>
            <p className="text-gray-400 text-sm mb-4">
              An online platform to connect pet adopters with shelters, built
              with React, Next.js, and Tailwind CSS.
            </p>
            <div>
              <Image
                src="/images/petAdoption.png"
                alt=""
                width={200}
                height={200}
                className="rounded-lg"
              />
            </div>
            <Link
              href="https://pf-front-26t8.onrender.com/welcome"
              className="text-cyan-400 hover:underline"
            >
              Live Demo →
            </Link>
          </div>

          <div className="bg-gray-800 rounded-2xl p-5 hover:-translate-y-1 transition">
            <h3 className="font-semibold text-xl mb-2 text-white">
              League of Legends API
            </h3>
            <p className="text-gray-400 text-sm mb-4">
              This is the first project I built. I remember struggling a lot with the API but that was the moment I realized how much I wanted to be a developer and how much I was willing to learn. It was a great experience and I learned a lot. League of Legends API built with Express, MongoDB, and Node.js.
            </p>
            <div>
              <Image
                src="/images/apiLol.png"
                alt=""
                width={200}
                height={200}
                className="rounded-lg"
              />
            </div>
            <Link
              href="https://league-of-legends-api-94fw.onrender.com/docs/"
              className="text-cyan-400 hover:underline"
            >
              Live Demo →
            </Link>
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="max-w-3xl mx-auto py-20 px-6 text-center"
      >
        <h2 className="text-3xl font-bold mb-4 text-cyan-400">Let’s Connect</h2>
        <p className="text-gray-400 mb-6">
          I’m open to collaborations, freelance projects, or just chatting about
          tech.
        </p>

        <div className="flex justify-center gap-4">
          <Link
            href="mailto:riascosjuan1597@gmail.com"
            className="text-blue-400 hover:underline"
          >
            Email
          </Link>
          <Link
            href="https://github.com/pablitoCortes"
            className="text-blue-400 hover:underline"
          >
            GitHub
          </Link>
          <Link
            href="www.linkedin.com/in/juan-pablo-riascos-b25bb3388"
            className="text-blue-400 hover:underline"
          >
            LinkedIn
          </Link>
        </div>
      </section>

      <footer className="text-center py-6 text-gray-600 text-sm border-t border-gray-800">
        © {new Date().getFullYear()} Juan Pablo Riascos. All rights reserved.
      </footer>
    </main>
  );
}
