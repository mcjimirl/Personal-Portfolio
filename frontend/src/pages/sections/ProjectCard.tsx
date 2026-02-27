import { motion } from "framer-motion";
import { Github, Globe } from "lucide-react";
import { forwardRef } from "react";

/**
 * Types and Interfaces
 */
export interface Project {
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

export const ProjectCard = forwardRef<HTMLDivElement, ProjectCardProps>(
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
