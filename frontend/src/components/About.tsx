import { motion } from "framer-motion";
import { portfolioConfig } from "../config/portfolio";
import { Section, SectionTitle } from "./Section";

export const About = () => {
  const { personal, skills } = portfolioConfig;

  return (
    <Section id="about" className="bg-white dark:bg-gray-900">
      <SectionTitle subtitle="Get to know me better">About Me</SectionTitle>

      <div className="grid md:grid-cols-2 gap-12 items-start">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-lg text-gray-700 text-justify dark:text-gray-300 leading-relaxed mb-6 ">
            {personal.bio}
          </p>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            I thrive on collaboration and continuous learning, always staying
            up-to-date with the latest technologies and best practices in
            software development.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Skills & Technologies
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {skills.map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="px-4 py-3 bg-gray-100 dark:bg-gray-800 rounded-lg text-center font-medium text-gray-800 dark:text-gray-200 shadow-sm hover:shadow-md transition-shadow"
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </Section>
  );
};
