import { AnimatePresence, motion } from "framer-motion";
import { ChevronRight, Github, Globe, RotateCcw } from "lucide-react";
import { forwardRef, memo, useState } from "react";
import { portfolioConfig } from "../../config/portfolio";

/**
 * Types and Interfaces
 */
interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  techStack: string[];
  githubUrl: string;
  liveUrl: string;
}

interface ProjectCardProps {
  project: Project;
  isTop: boolean;
  index: number;
  total: number;
  onSwipe: () => void;
}

/**
 * REDESIGNED Stacked Project Card
 */
const ProjectCard = forwardRef<HTMLDivElement, ProjectCardProps>(
  ({ project, isTop, index, total, onSwipe }, ref) => {
    const scale = 1 - index * 0.05;
    const yOffset = index * 20;
    const opacity = 1 - index * 0.2;

    return (
      <motion.div
        ref={ref}
        style={{
          zIndex: total - index,
          cursor: isTop ? "grab" : "default",
        }}
        layout
        initial={{ opacity: 0, y: 50, scale: 0.9 }}
        animate={{
          opacity: opacity,
          y: yOffset,
          scale: scale,
        }}
        exit={{
          x: 500,
          opacity: 0,
          rotate: 20,
          transition: { duration: 0.4 },
        }}
        whileTap={isTop ? { cursor: "grabbing" } : {}}
        drag={isTop ? "x" : false}
        dragConstraints={{ left: 0, right: 0 }}
        onDragEnd={(_, info) => {
          if (info.offset.x > 100 || info.offset.x < -100) {
            onSwipe();
          }
        }}
        className="absolute w-full max-w-[450px] aspect-[4/5] sm:aspect-[3/4] bg-white dark:bg-gray-900 
                 border border-gray-200 dark:border-gray-800 rounded-3xl overflow-hidden 
                 shadow-2xl shadow-black/10 dark:shadow-black/40 flex flex-col"
      >
        {/* Card Image */}
        <div className="relative h-1/2 overflow-hidden bg-gray-100 dark:bg-gray-800">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
            onError={(e) => {
              (e.target as HTMLImageElement).src =
                "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800";
            }}
          />
          <div className="absolute top-4 left-4 flex gap-2">
            {project.techStack.slice(0, 2).map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-[10px] font-bold text-gray-700 dark:text-white bg-gray-50 dark:bg-gray-800 backdrop-blur-md rounded-full shadow-sm uppercase tracking-tight"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Card Body */}
        <div className="p-6 bg-gray-50 dark:bg-gray-800 flex flex-col flex-grow">
          <div className="mb-4">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white leading-tight">
              {project.title}
            </h3>
            <p className="text-gray-500 dark:text-gray-400 text-sm mt-2 line-clamp-3">
              {project.description}
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 mt-auto">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center text-dark dark:text-white gap-2 py-3 rounded-2xl border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
            >
              <Github size={18} />
              <span className="font-semibold text-sm">Code</span>
            </a>
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 py-3 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-500/20 transition-transform active:scale-95"
            >
              <Globe size={18} />
              <span className="font-semibold text-sm">Live</span>
            </a>
          </div>
        </div>
      </motion.div>
    );
  },
);

ProjectCard.displayName = "ProjectCard";

/**
 * Main Projects Deck Section
 */
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

  const handleReset = () => setCurrentIndex(0);

  return (
    <section
      id="projects"
      className="relative bg-gray-50 dark:bg-gray-900 min-h-screen py-20 px-6 overflow-hidden flex flex-col items-center"
    >
      <div className="max-w-2xl text-center mb-12">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-blue-600 font-bold uppercase tracking-widest text-xs mb-2"
        >
          Selected Portfolio
        </motion.p>
        <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white">
          Featured Projects
        </h2>
      </div>

      <div className="relative w-full max-w-[450px] h-[550px] sm:h-[600px] flex items-center justify-center">
        <AnimatePresence mode="popLayout">
          {projects.slice(currentIndex).map((project, idx) => {
            if (idx > 2) return null;
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

        {currentIndex >= projects.length && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center flex flex-col items-center"
          >
            <div className="w-20 h-20 bg-gray-200 dark:bg-gray-800 rounded-full flex items-center justify-center mb-4">
              <RotateCcw className="text-gray-400" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">
              End of the deck
            </h3>
            <button
              onClick={handleReset}
              className="mt-4 text-blue-600 font-semibold flex items-center gap-2"
            >
              Replay Projects
            </button>
          </motion.div>
        )}
      </div>

      {currentIndex < projects.length && (
        <div className="mt-12 flex flex-col items-center gap-6">
          <div className="flex items-center gap-8">
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

          <div className="flex gap-2">
            {projects.map((_, i) => (
              <div
                key={i}
                className={`h-1.5 transition-all duration-300 rounded-full ${
                  i === currentIndex
                    ? "w-8 bg-blue-600"
                    : "w-2 bg-gray-300 dark:bg-gray-700"
                }`}
              />
            ))}
          </div>
        </div>
      )}

      <p className="mt-8 text-xs text-gray-400 dark:text-gray-600 font-medium animate-pulse">
        Hint: You can drag the cards to swipe them away
      </p>
    </section>
  );
});

export default Projects;
