import { portfolioConfig } from "@/config/portfolio";
import { motion } from "framer-motion";
import { Briefcase, CheckCircle, MapPin } from "lucide-react";
import { useState } from "react";

// -------------------- TYPES --------------------
interface ExperienceItem {
  id: number;
  role: string;
  company: string;
  period: string;
  location: string;
  imageUrl?: string;
  achievements: string[];
}

interface portfolioConfig {
  experience: ExperienceItem[];
}

interface SectionTitleProps {
  subtitle: string;
  children: React.ReactNode;
}

interface SectionProps {
  id: string;
  className?: string;
  children: React.ReactNode;
}

// -------------------- COMPONENTS --------------------
const SectionTitle = ({ subtitle, children }: SectionTitleProps) => (
  <div className="text-center mb-12">
    <p className="text-blue-600 dark:text-blue-400 font-semibold mb-2 uppercase tracking-wider">
      {subtitle}
    </p>
    <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white sm:text-5xl">
      {children}
    </h2>
  </div>
);

const Section = ({ id, className = "", children }: SectionProps) => (
  <section id={id} className={`py-20 ${className}`}>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">{children}</div>
  </section>
);

// -------------------- MAIN COMPONENT --------------------
export const Experience = () => {
  const { experience } = portfolioConfig;
  const [hoveredJobId, setHoveredJobId] = useState<number | null>(null);

  const handleMouseEnter = (id: number) => setHoveredJobId(id);
  const handleMouseLeave = () => setHoveredJobId(null);

  return (
    <Section id="experience" className="bg-white dark:bg-gray-900">
      <SectionTitle subtitle="My professional journey">
        Work Experience
      </SectionTitle>

      <div className="relative">
        {/* Vertical Line */}
        <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-blue-200 dark:bg-blue-800" />

        <div className="space-y-12">
          {experience.map((job, index) => {
            const isEven = index % 2 === 0;
            const isHovered = hoveredJobId === job.id;

            return (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  isEven ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* IMAGE PREVIEW */}
                <div
                  className={`md:w-1/2 hidden md:flex items-center justify-center ${
                    isEven ? "md:order-1" : "md:order-2"
                  }`}
                >
                  {isHovered && job.imageUrl && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3 }}
                      className="w-full p-4 flex items-center justify-center"
                    >
                      <img
                        src={job.imageUrl}
                        alt={`${job.company} Project Preview`}
                        className="w-full max-w-sm h-auto object-cover rounded-xl shadow-2xl transition-transform duration-300 border-4 border-blue-500/50"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.onerror = null;
                          target.src =
                            "https://placehold.co/600x400/EF4444/ffffff?text=Image+Unavailable";
                        }}
                      />
                    </motion.div>
                  )}
                </div>

                {/* TIMELINE DOT */}
                <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 -translate-y-1">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.2 }}
                    className="w-12 h-12 bg-blue-600 dark:bg-blue-500 rounded-full flex items-center justify-center shadow-lg ring-4 ring-white dark:ring-gray-900"
                  >
                    <Briefcase className="text-white" size={24} />
                  </motion.div>
                </div>

                {/* JOB CARD */}
                <div className="md:w-1/2 ml-16 md:ml-0">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-transparent hover:border-blue-500"
                    onMouseEnter={() => handleMouseEnter(job.id)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <div className="mb-4">
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                        {job.role}
                      </h3>
                      <p className="text-lg text-blue-600 dark:text-blue-400 font-medium mb-1">
                        {job.company}
                      </p>

                      <div className="flex justify-between items-center text-sm text-gray-500 dark:text-gray-400">
                        <p className="font-medium">{job.period}</p>
                        <div className="flex items-center gap-1">
                          <MapPin
                            size={16}
                            className="text-gray-400 dark:text-gray-500"
                          />
                          <span>{job.location}</span>
                        </div>
                      </div>
                    </div>

                    <ul className="space-y-2">
                      {job.achievements.map((achievement, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 0.4,
                            delay: index * 0.2 + i * 0.1,
                          }}
                          className="flex items-start gap-2 text-gray-700 dark:text-gray-300"
                        >
                          <CheckCircle
                            className="text-green-500 flex-shrink-0 mt-1"
                            size={18}
                          />
                          <span>{achievement}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </Section>
  );
};
