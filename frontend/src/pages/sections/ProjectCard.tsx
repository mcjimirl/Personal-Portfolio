// import { motion } from "framer-motion";
// import { Github, Globe } from "lucide-react";
// import React from "react";
// import { portfolioConfig } from "../../config/portfolio";

// type Project = (typeof portfolioConfig.projects)[number];

// interface ProjectCardProps {
//   project: Project;
//   isTop: boolean;
//   index: number;
//   total: number;
//   onSwipe: () => void;
// }

// const ProjectCard: React.FC<ProjectCardProps> = ({
//   project,
//   isTop,
//   index,
//   total,
//   onSwipe,
// }) => {
//   const scale = 1 - index * 0.05;
//   const yOffset = index * 20;
//   const opacity = 1 - index * 0.2;

//   return (
//     <motion.div
//       style={{ zIndex: total - index, cursor: isTop ? "grab" : "default" }}
//       layout
//       initial={{ opacity: 0, y: 50, scale: 0.9 }}
//       animate={{ opacity, y: yOffset, scale }}
//       exit={{
//         x: 500,
//         opacity: 0,
//         rotate: 20,
//         transition: { duration: 0.4 },
//       }}
//       drag={isTop ? "x" : false}
//       dragConstraints={{ left: 0, right: 0 }}
//       whileDrag={isTop ? { cursor: "grabbing" } : {}}
//       onDragEnd={(_, info) => {
//         if (info.offset.x > 100 || info.offset.x < -100) onSwipe();
//       }}
//       className="absolute w-full max-w-[450px] aspect-[4/5] sm:aspect-[3/4]
//                  bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800
//                  rounded-3xl overflow-hidden shadow-2xl flex flex-col"
//     >
//       <div className="relative h-1/2 overflow-hidden bg-gray-100 dark:bg-gray-800">
//         <img
//           src={project.image}
//           alt={project.title}
//           className="w-full h-full object-cover"
//         />
//         <div className="absolute top-4 left-4 flex gap-2">
//           {project.techStack.slice(0, 2).map((tech) => (
//             <span
//               key={tech}
//               className="px-3 py-1 text-[10px] font-bold bg-white/90 dark:bg-black/70 rounded-full uppercase"
//             >
//               {tech}
//             </span>
//           ))}
//         </div>
//       </div>

//       <div className="p-6 flex flex-col flex-grow">
//         <div className="mb-4">
//           <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
//             {project.title}
//           </h3>
//           <p className="text-gray-500 dark:text-gray-400 text-sm mt-2 line-clamp-3">
//             {project.description}
//           </p>
//         </div>

//         <div className="flex gap-3 mt-auto">
//           <a
//             href={project.githubUrl}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="flex-1 flex items-center justify-center gap-2 py-3 rounded-2xl border border-gray-200 dark:border-gray-700"
//           >
//             <Github size={18} /> Code
//           </a>

//           <a
//             href={project.liveUrl}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="flex-1 flex items-center justify-center gap-2 py-3 rounded-2xl bg-blue-600 text-white"
//           >
//             <Globe size={18} /> Live
//           </a>
//         </div>
//       </div>
//     </motion.div>
//   );
// };

// export default React.memo(ProjectCard);
