import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "./Button";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  techStack: string[];
  githubUrl: string;
  liveUrl: string;
  index: number;
}

export const ProjectCard = ({
  title,
  description,
  image,
  techStack,
  githubUrl,
  liveUrl,
  index,
}: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="flex flex-col bg-white dark:bg-gray-800 rounded-xl overflow-hidden 
             shadow-lg hover:shadow-2xl transition-transform duration-300 hover:-translate-y-1 
             h-full"
    >
      <div className="relative h-48 overflow-y-hidden bg-gray-200 dark:bg-gray-700">
        <motion.img
          src={image}
          alt={title}
          loading="lazy"
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        />
      </div>

      <div className="flex flex-col flex-grow p-6 justify-between">
        <div>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
            {title}
          </h3>
          <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-3">
            {description}
          </p>

          <div className="flex flex-wrap gap-2 mb-6">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-xs bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-200 rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="flex gap-3 mt-auto">
          <Button
            href={githubUrl}
            variant="outline"
            className="flex-1 justify-center"
          >
            <Github size={18} />
            Code
          </Button>
          <Button
            href={liveUrl}
            variant="primary"
            className="flex-1 justify-center"
          >
            <ExternalLink size={18} />
            Live
          </Button>
        </div>
      </div>
    </motion.div>
  );
};
