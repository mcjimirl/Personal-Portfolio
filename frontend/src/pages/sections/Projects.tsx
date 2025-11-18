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
  const [carouselWidth, setCarouselWidth] = useState(0);
  const [cardWidth, setCardWidth] = useState(0);

  // Measure container width to make drag constraints responsive
  useEffect(() => {
    const updateSizes = () => {
      if (carouselRef.current) {
        const container = carouselRef.current.offsetWidth;
        setCarouselWidth(container);
        const calculatedCardWidth = Math.min(
          container * 0.85,
          window.innerWidth < 640 ? container * 0.9 : 400
        );
        setCardWidth(calculatedCardWidth);
      }
    };
    updateSizes();
    window.addEventListener("resize", updateSizes);
    return () => window.removeEventListener("resize", updateSizes);
  }, []);

  // Autoscroll animation
  useEffect(() => {
    if (isHovered || isDragging) {
      controls.stop();
      return;
    }

    const totalWidth = projects.length * (cardWidth + 24); // 24px gap
    const animate = async () => {
      while (true) {
        await controls.start({
          x: -totalWidth,
          transition: {
            duration: projects.length * 6,
            ease: "linear",
          },
        });
        await controls.set({ x: 0 });
      }
    };
    animate();
  }, [controls, projects.length, isHovered, isDragging, cardWidth]);

  return (
    <Section
      id="projects"
      className="bg-gray-50 dark:bg-gray-900 overflow-hidden py-12 sm:py-16 md:py-20"
    >
      <SectionTitle subtitle="Check out my recent work">
        Featured Projects
      </SectionTitle>

      <motion.div
        ref={carouselRef}
        className="px-2 sm:px-4 md:px-10 select-none cursor-grab active:cursor-grabbing"
      >
        <motion.div
          className="flex gap-4 sm:gap-6"
          drag="x"
          dragConstraints={{
            right: 0,
            left: -Math.max(
              0,
              projects.length * (cardWidth + 24) - carouselWidth
            ),
          }}
          style={{ x }}
          animate={controls}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onDragStart={() => setIsDragging(true)}
          onDragEnd={() => setIsDragging(false)}
        >
          {/* Duplicate for seamless looping */}
          {[...projects, ...projects].map((project, index) => (
            <motion.div
              key={`${project.id}-${index}`}
              className="flex-shrink-0 mt-4 sm:mt-8"
              style={{
                width: cardWidth,
                height: window.innerWidth < 640 ? 450 : 500,
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
