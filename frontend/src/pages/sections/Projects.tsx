import { motion, useAnimation, useMotionValue } from "framer-motion";
import { memo, useEffect, useRef, useState } from "react";
import { portfolioConfig } from "../../config/portfolio";
import { Section, SectionTitle } from "../components/Section";
import { ProjectCard } from "./ProjectCard";

export const Projects = memo(() => {
  const { projects } = portfolioConfig;
  const controls = useAnimation();
  const carouselRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    if (isHovered || isDragging) {
      controls.stop();
      return;
    }

    const totalWidth = projects.length * 420; // estimated card width + gap
    const animate = async () => {
      while (true) {
        await controls.start({
          x: -totalWidth,
          transition: {
            duration: projects.length * 6,
            ease: "linear",
          },
        });
        await controls.set({ x: 0 }); // reset position for seamless looping
      }
    };
    animate();
  }, [controls, projects.length, isHovered, isDragging]);

  return (
    <Section
      id="projects"
      className="bg-gray-50 dark:bg-gray-800 overflow-hidden"
    >
      <SectionTitle subtitle="Check out my recent work">
        Featured Projects
      </SectionTitle>

      <motion.div
        ref={carouselRef}
        className="px-10 select-none cursor-grab active:cursor-grabbing"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={{
          hidden: { opacity: 0, y: 30 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { staggerChildren: 0.1, duration: 0.4 },
          },
        }}
      >
        <motion.div
          className="flex gap-6"
          drag="x"
          dragConstraints={{
            right: 0,
            left: -((projects.length - 1) * 420),
          }}
          style={{ x }}
          animate={controls}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onDragStart={() => setIsDragging(true)}
          onDragEnd={() => setIsDragging(false)}
        >
          {/* Duplicate list for seamless looping */}
          {[...projects, ...projects].map((project, index) => (
            <motion.div
              key={`${project.id}-${index}`}
              className="flex-shrink-0 w-[320px] md:w-[360px] lg:w-[400px] h-[500px] mt-8"
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <ProjectCard
                title={project.title}
                description={project.description}
                image={project.image}
                techStack={project.techStack}
                githubUrl={project.githubUrl}
                liveUrl={project.liveUrl}
                index={index}
              />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </Section>
  );
});

Projects.displayName = "Projects";
