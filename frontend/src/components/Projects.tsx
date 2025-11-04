import { Section, SectionTitle } from './Section';
import { ProjectCard } from './ProjectCard';
import { portfolioConfig } from '../config/portfolio';

export const Projects = () => {
  const { projects } = portfolioConfig;

  return (
    <Section id="projects" className="bg-gray-50 dark:bg-gray-800">
      <SectionTitle subtitle="Check out my recent work">
        Featured Projects
      </SectionTitle>

      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            image={project.image}
            techStack={project.techStack}
            githubUrl={project.githubUrl}
            liveUrl={project.liveUrl}
            index={index}
          />
        ))}
      </div>
    </Section>
  );
};
