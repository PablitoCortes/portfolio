"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "SmartBudget",
    description: "A comprehensive web application designed to help users make smarter, more sustainable financial decisions with custom budgets and real-time analysis.",
    image: "/images/smartbudget.png",
    status: "In Progress",
    tech: ["React", "TypeScript", "MongoDB", "Express", "Node.js"],
    features: ["Transaction management", "Interactive financial charts", "Custom budget tracking"],
    link: "#",
    github: "#",
    featured: true,
  },
  {
    title: "Pet Adoption Platform",
    description: "An online platform connecting pet adopters with shelters. Facilitates the adoption process with detailed profiles, advanced search, and an integrated contact system.",
    image: "/images/petAdoption.png",
    status: "Completed",
    tech: ["Next.js", "React", "Tailwind CSS", "TypeScript"],
    features: ["Advanced search and filtering", "Detailed pet profiles", "Integrated messaging"],
    link: "https://pf-front-26t8.onrender.com/welcome",
    github: "#",
    featured: false,
  },
  {
    title: "Live Chat",
    description: "Real-time messaging application enabling instant communication between users with secure authentication, chat rooms, and live notifications.",
    image: "/images/live-chat.png",
    status: "In Progress",
    tech: ["React", "Node.js", "Socket.io", "MongoDB"],
    features: ["Real-time WebSocket communication", "JWT Authentication", "Multiple chat rooms"],
    link: "https://live-chat-front-3xn3.onrender.com/auth/login",
    github: "#",
    featured: false,
  },
  {
    title: "League of Legends API",
    description: "A complete REST API with interactive documentation to query League of Legends data, built by integrating with the official Riot Games API.",
    image: "/images/apiLol.png",
    status: "Completed",
    tech: ["Express", "MongoDB", "Node.js", "Swagger"],
    features: ["Riot Games API integration", "Interactive Swagger docs", "Champion & game data endpoints"],
    link: "https://league-of-legends-api-94fw.onrender.com/docs/",
    github: "#",
    featured: false,
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-24 relative z-10">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            Selected <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">Work</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl">
            A showcase of my recent frontend and full-stack engineering projects, focusing on scalable architecture and premium UI/UX.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`group relative glass-panel rounded-3xl overflow-hidden flex flex-col ${
                project.featured ? "lg:flex-row" : "md:flex-row"
              } gap-0 transition-all duration-500 hover:border-cyan-500/30 hover:bg-white/5`}
            >
              {/* Image Container */}
              <div className={`relative overflow-hidden ${project.featured ? "lg:w-3/5 lg:h-[450px]" : "md:w-1/2 md:h-[350px]"} h-64 w-full`}>
                <div className="absolute inset-0 bg-gray-900 animate-pulse" /> {/* Placeholder while loading */}
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-w-768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
                
                {project.status === "In Progress" && (
                  <div className="absolute top-4 left-4 glass-panel bg-black/40 px-3 py-1 rounded-full border border-yellow-500/30 backdrop-blur-md">
                    <span className="text-xs font-medium text-yellow-400 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 animate-pulse" />
                      In Progress
                    </span>
                  </div>
                )}
              </div>

              {/* Content Container */}
              <div className={`p-8 md:p-10 flex flex-col justify-between ${project.featured ? "lg:w-2/5" : "md:w-1/2"}`}>
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed mb-6 font-light">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tech.map((tech) => (
                      <span key={tech} className="px-3 py-1 text-xs font-medium text-gray-300 bg-white/5 border border-white/10 rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-4 mt-auto">
                  {project.link !== "#" ? (
                    <Link
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-medium text-white bg-white/10 hover:bg-white/20 px-5 py-2.5 rounded-full transition-all border border-white/10"
                    >
                      Visit Live <ArrowUpRight size={16} />
                    </Link>
                  ) : null}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
