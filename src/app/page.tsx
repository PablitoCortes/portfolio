"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowDownRight, Download, X } from "lucide-react";
import { FaReact, FaGitAlt, FaCloud } from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiMongodb,
  SiRedux,
} from "react-icons/si";
import { useRef, useState, useEffect } from "react";

export default function Home() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const overlayOpacity = useTransform(scrollYProgress, [0, 1], [0, 0.8]);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedImage(null);
      }
    };

    if (selectedImage) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [selectedImage]);

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
            Full-Stack Developer Node.js · React.js · Next.js · TypeScript · MongoDB · Express 
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
              href="https://drive.google.com/file/d/1d5ywKNU4So21ydcYW6QVAdoHMR33EAPa/view?usp=sharing"
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
      <section id="projects" className="max-w-6xl mx-auto py-20 px-6">
        <h2 className="text-3xl font-bold mb-12 text-center text-cyan-400">
          Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-gray-800 rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-300 group"
          >
            <div 
              className="relative h-64 w-full overflow-hidden cursor-pointer"
              onClick={() => setSelectedImage("/images/smartbudget.png")}
            >
              <Image
                src="/images/smartbudget.png"
                alt="SmartBudget Project"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />
            </div>
            <div className="p-6">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-bold text-2xl text-white">SmartBudget</h3>
                <span className="text-xs bg-yellow-500/20 text-yellow-400 px-3 py-1 rounded-full">
                  In Progress
                </span>
              </div>
              <p className="text-gray-300 mb-4 leading-relaxed">
                SmartBudget is a web application designed to help you make
                smarter, more sustainable financial decisions.
              </p>
              <div className="mb-4">
                <p className="text-sm text-gray-400 mb-2 font-medium">
                  Technologies:
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs bg-cyan-500/20 text-cyan-400 px-2 py-1 rounded">
                    React
                  </span>
                  <span className="text-xs bg-cyan-500/20 text-cyan-400 px-2 py-1 rounded">
                    TypeScript
                  </span>
                  <span className="text-xs bg-cyan-500/20 text-cyan-400 px-2 py-1 rounded">
                    MongoDB
                  </span>
                  <span className="text-xs bg-cyan-500/20 text-cyan-400 px-2 py-1 rounded">
                    Express
                  </span>
                  <span className="text-xs bg-cyan-500/20 text-cyan-400 px-2 py-1 rounded">
                    Node.js
                  </span>
                </div>
              </div>
              <div className="mb-4">
                <p className="text-sm text-gray-400 mb-2 font-medium">
                  Features:
                </p>
                <ul className="text-sm text-gray-300 space-y-1 list-disc list-inside">
                  <li>Transaction management</li>
                  <li>Analysis and charts</li>
                  <li>Custom budgets</li>
                </ul>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-gray-800 rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-300 group"
          >
            <div 
              className="relative h-64 w-full overflow-hidden cursor-pointer"
              onClick={() => setSelectedImage("/images/live-chat.png")}
            >
              <Image
                src="/images/live-chat.png"
                alt="Live Chat Project"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />
            </div>
            <div className="p-6">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-bold text-2xl text-white">Live Chat</h3>
                <span className="text-xs bg-yellow-500/20 text-yellow-400 px-3 py-1 rounded-full">
                  In Progress
                </span>
              </div>
              <p className="text-gray-300 mb-4 leading-relaxed">
                Real-time messaging application that enables instant communication
                between users. Includes authentication, chat rooms, and live notifications.
              </p>
              <div className="mb-4">
                <p className="text-sm text-gray-400 mb-2 font-medium">
                  Technologies:
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs bg-cyan-500/20 text-cyan-400 px-2 py-1 rounded">
                    React
                  </span>
                  <span className="text-xs bg-cyan-500/20 text-cyan-400 px-2 py-1 rounded">
                    Node.js
                  </span>
                  <span className="text-xs bg-cyan-500/20 text-cyan-400 px-2 py-1 rounded">
                    Socket.io
                  </span>
                  <span className="text-xs bg-cyan-500/20 text-cyan-400 px-2 py-1 rounded">
                    MongoDB
                  </span>
                </div>
              </div>
              <div className="mb-4">
                <p className="text-sm text-gray-400 mb-2 font-medium">
                  Features:
                </p>
                <ul className="text-sm text-gray-300 space-y-1 list-disc list-inside">
                  <li>Real-time chat</li>
                  <li>User authentication</li>
                  <li>Multiple chat rooms</li>
                </ul>
              </div>
              <Link
                href="https://live-chat-front-3xn3.onrender.com/auth/login"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-medium transition-colors"
              >
                View Demo <ArrowDownRight size={16} />
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-gray-800 rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-300 group"
          >
            <div 
              className="relative h-64 w-full overflow-hidden cursor-pointer"
              onClick={() => setSelectedImage("/images/petAdoption.png")}
            >
              <Image
                src="/images/petAdoption.png"
                alt="Pet Adoption Project"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />
            </div>
            <div className="p-6">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-bold text-2xl text-white">Pet Adoption</h3>
              </div>
              <p className="text-gray-300 mb-4 leading-relaxed">
                Online platform that connects pet adopters with shelters and
                organizations. Facilitates the adoption process with detailed
                profiles, advanced search, and contact system.
              </p>
              <div className="mb-4">
                <p className="text-sm text-gray-400 mb-2 font-medium">
                  Technologies:
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs bg-cyan-500/20 text-cyan-400 px-2 py-1 rounded">
                    React
                  </span>
                  <span className="text-xs bg-cyan-500/20 text-cyan-400 px-2 py-1 rounded">
                    Next.js
                  </span>
                  <span className="text-xs bg-cyan-500/20 text-cyan-400 px-2 py-1 rounded">
                    Tailwind CSS
                  </span>
                  <span className="text-xs bg-cyan-500/20 text-cyan-400 px-2 py-1 rounded">
                    TypeScript
                  </span>
                </div>
              </div>
              <div className="mb-4">
                <p className="text-sm text-gray-400 mb-2 font-medium">
                  Features:
                </p>
                <ul className="text-sm text-gray-300 space-y-1 list-disc list-inside">
                  <li>Advanced search and filters</li>
                  <li>Detailed pet profiles</li>
                  <li>Integrated contact system</li>
                </ul>
              </div>
              <Link
                href="https://pf-front-26t8.onrender.com/welcome"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-medium transition-colors"
              >
                View Demo <ArrowDownRight size={16} />
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-gray-800 rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-300 group"
          >
            <div 
              className="relative h-64 w-full overflow-hidden cursor-pointer"
              onClick={() => setSelectedImage("/images/apiLol.png")}
            >
              <Image
                src="/images/apiLol.png"
                alt="League of Legends API Project"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />
            </div>
            <div className="p-6">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-bold text-2xl text-white">
                  League of Legends API
                </h3>
              </div>
              <p className="text-gray-300 mb-4 leading-relaxed">
                My first project as a developer. Although it was challenging to
                work with the official Riot Games API, this experience confirmed
                my passion for development. Complete REST API with interactive
                documentation to query League of Legends data.
              </p>
              <div className="mb-4">
                <p className="text-sm text-gray-400 mb-2 font-medium">
                  Technologies:
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs bg-cyan-500/20 text-cyan-400 px-2 py-1 rounded">
                    Express
                  </span>
                  <span className="text-xs bg-cyan-500/20 text-cyan-400 px-2 py-1 rounded">
                    MongoDB
                  </span>
                  <span className="text-xs bg-cyan-500/20 text-cyan-400 px-2 py-1 rounded">
                    Node.js
                  </span>
                  <span className="text-xs bg-cyan-500/20 text-cyan-400 px-2 py-1 rounded">
                    Swagger
                  </span>
                </div>
              </div>
              <div className="mb-4">
                <p className="text-sm text-gray-400 mb-2 font-medium">
                  Features:
                </p>
                <ul className="text-sm text-gray-300 space-y-1 list-disc list-inside">
                  <li>Integration with Riot Games API</li>
                  <li>Interactive documentation</li>
                  <li>Endpoints for champions and game data</li>
                </ul>
              </div>
              <Link
                href="https://league-of-legends-api-94fw.onrender.com/docs/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-medium transition-colors"
              >
                View Demo <ArrowDownRight size={16} />
              </Link>
            </div>
          </motion.div>
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

      {/* Image Modal */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
          onClick={() => setSelectedImage(null)}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="relative max-w-7xl max-h-[90vh] w-full h-full"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-white hover:text-cyan-400 transition-colors z-10 bg-gray-800/50 hover:bg-gray-700/50 rounded-full p-2"
              aria-label="Close modal"
            >
              <X size={24} />
            </button>
            <div className="relative w-full h-full rounded-lg overflow-hidden">
              <Image
                src={selectedImage}
                alt="Project preview"
                fill
                className="object-contain"
                priority
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </main>
  );
}
