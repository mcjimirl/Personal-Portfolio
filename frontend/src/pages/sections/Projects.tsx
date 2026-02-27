import { AnimatePresence } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { memo, useState } from "react";
import { portfolioConfig } from "../../config/portfolio";
import LightRays from "../components/LightRays";
import { Section, SectionTitle } from "../components/Section";
import { Project, ProjectCard } from "./ProjectCard";

export const Projects = memo(() => {
  const [projects] = useState<Project[]>(portfolioConfig.projects);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex < projects.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      setCurrentIndex(0);
    }
  };

  return (
    <Section
      id="projects"
      className="relative bg-gray-50 dark:bg-gray-900 min-h-screen py-16 px-6 flex flex-col items-center"
    >
      {/*BACKGROUND EFFECT */}
      <div className="absolute inset-0 pointer-events-none z-0 opacity-[0.35]">
        <LightRays
          raysOrigin="top-center"
          raysColor="#ffffff"
          raysSpeed={1}
          lightSpread={1}
          rayLength={6}
          pulsating={true}
          fadeDistance={1}
          saturation={1}
          followMouse={true}
          mouseInfluence={0.15}
          noiseAmount={0.05}
          distortion={0.1}
          className="w-full h-full"
        />
      </div>
      <SectionTitle>
        <div className="max-w-2xl text-center mb-12"></div>
        <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white">
          Featured Projects
        </h2>
      </SectionTitle>

      <div className="flex flex-col md:flex-row items-start gap-12 w-full max-w-6xl">
        {/* Left: Swipeable Project Cards */}
        <div className="w-full md:w-1/2 flex justify-center relative h-[550px] sm:h-[600px]">
          <AnimatePresence mode="popLayout">
            {projects.slice(currentIndex).map((project, idx) => {
              if (idx > 2) return null; // limit visible cards
              return (
                <ProjectCard
                  key={project.id}
                  project={project}
                  index={idx}
                  total={3}
                  isTop={idx === 0}
                  onSwipe={handleNext}
                />
              );
            })}
          </AnimatePresence>
        </div>

        {/* Right: About Me / Personal Description */}
        <div className="w-full md:w-1/2 flex flex-col gap-6 text-justify">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
            About My Projects
          </h3>
          <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
            I am a passionate software developer with experience in building
            modern web applications using the MERN stack (MongoDB, Express,
            React, Node.js). I also have a background in technical support,
            helping users solve problems efficiently and ensuring smooth system
            operations.
          </p>
          <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
            My skills include frontend and backend development, API integration,
            debugging, and troubleshooting. I enjoy turning complex requirements
            into intuitive, user-friendly solutions and collaborating with teams
            to deliver high-quality software.
          </p>
          <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
            Outside of coding, I’m always exploring new technologies, improving
            my problem-solving abilities, and providing excellent technical
            support to clients and users.
          </p>
        </div>
      </div>

      {/* Navigation button */}
      <div className="w-full flex justify-center mt-8 md:mt-12">
        <button
          onClick={handleNext}
          className="group flex items-center gap-3 bg-white dark:bg-gray-900 px-6 py-3 rounded-full border border-gray-200 dark:border-gray-800 shadow-xl hover:shadow-2xl transition-all active:scale-95"
        >
          <span className="font-bold text-gray-900 dark:text-white">
            Next Project
          </span>
          <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white group-hover:translate-x-1 transition-transform">
            <ChevronRight size={20} />
          </div>
        </button>
      </div>
    </Section>
  );
});

export default Projects;
