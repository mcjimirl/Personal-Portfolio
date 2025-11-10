import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin } from "lucide-react";
import { portfolioConfig } from "../config/portfolio";
import { Section, SectionTitle } from "./Section";

// Simple drag indicator (hint for users)
const DragIndicator = () => (
  <div className="flex justify-center mt-10">
    <div className="w-14 h-1.5 rounded-full bg-gray-300 dark:bg-gray-700"></div>
  </div>
);

export const Experience = () => {
  const { experience } = portfolioConfig;

  // Calculate dynamic drag constraint
  const cardWidth = 360;
  const spacing = 24; // Tailwind space-x-6
  const totalCardWidth = cardWidth + spacing;
  const dragConstraint = -((experience.length - 1) * totalCardWidth);

  return (
    <Section
      id="experience"
      className="bg-white dark:bg-gray-900 relative overflow-hidden"
    >
      <SectionTitle subtitle="My professional journey">
        Work Experience
      </SectionTitle>

      {/* --- Carousel Wrapper --- */}
      <motion.div className="relative overflow-x-hidden">
        <motion.div
          drag="x"
          dragConstraints={{ left: dragConstraint, right: 0 }}
          className="flex space-x-6 px-4 sm:px-6 md:px-8 lg:px-10 py-4 cursor-grab active:cursor-grabbing"
          whileTap={{ cursor: "grabbing", scale: 0.98 }}
        >
          {experience.map((job, index) => (
            <motion.div
              key={job.id}
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: index * 0.12 }}
              className="
                flex-shrink-0 w-[300px] md:w-[360px]
                bg-gray-50 dark:bg-gray-800
                border border-gray-200 dark:border-gray-700
                rounded-2xl shadow-lg hover:shadow-xl
                p-6 md:p-7
                transition-transform duration-300
                hover:-translate-y-1
                group
              "
            >
              {/* --- Header --- */}
              <div className="mb-5">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-blue-600 dark:bg-blue-500 rounded-lg flex items-center justify-center shadow-md group-hover:bg-blue-700 transition">
                    <Briefcase className="text-white" size={22} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white leading-snug">
                      {job.role}
                    </h3>
                    <p className="text-blue-600 dark:text-blue-400 font-semibold text-sm">
                      {job.company}
                    </p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center text-sm text-gray-500 dark:text-gray-400 space-y-1 sm:space-y-0 sm:space-x-4 border-t border-gray-100 dark:border-gray-700 pt-2 mt-3">
                  <div className="flex items-center gap-1.5">
                    <Calendar
                      size={14}
                      className="text-gray-400 dark:text-gray-500"
                    />
                    <span>{job.period}</span>
                  </div>
                  {job.location && (
                    <div className="flex items-center gap-1.5">
                      <MapPin
                        size={14}
                        className="text-gray-400 dark:text-gray-500"
                      />
                      <span>{job.location}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* --- Achievements --- */}
              <ul className="space-y-2 text-sm">
                {job.achievements.map((achievement, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.8 }}
                    transition={{ duration: 0.35, delay: i * 0.07 }}
                    className="flex items-start gap-3 text-gray-700 dark:text-gray-300 border-l-2 border-blue-200 dark:border-blue-700 pl-3 leading-relaxed"
                  >
                    <span>{achievement}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      <DragIndicator />

      {/* --- Edge Fade Gradients --- */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-8 sm:w-12 md:w-16 bg-gradient-to-r from-white dark:from-gray-900 to-transparent z-10"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-8 sm:w-12 md:w-16 bg-gradient-to-l from-white dark:from-gray-900 to-transparent z-10"></div>
    </Section>
  );
};
