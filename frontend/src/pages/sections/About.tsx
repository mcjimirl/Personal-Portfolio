import { portfolioConfig } from "@/config/portfolio";
import { motion } from "framer-motion";
import { Section, SectionTitle } from "../components/Section";

export const About = () => {
  const { personal, skills } = portfolioConfig;

  return (
    <Section id="about" className="bg-white dark:bg-gray-900">
      <SectionTitle subtitle="Get to know me better">About Me</SectionTitle>
      <h3 className="flex justify-center items-center text-2xl font-bold text-gray-900 dark:text-white mb-6">
        Skills & Technologies
      </h3>
      <div className="grid md:grid-cols-2 gap-12 items- ">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-lg text-gray-700 text-justify dark:text-gray-300 leading-relaxed mb-6 indent-16">
            {personal.bio}
          </p>

          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed indent-16">
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
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="flex flex-col items-center justify-center px-4 py-3 bg-gray-100 dark:bg-gray-200 rounded-lg text-center font-medium text-gray-800 dark:text-gray-800 shadow-sm hover:shadow-md transition-shadow"
              >
                <img
                  src={skill.logo}
                  alt={skill.name}
                  className="w-8 h-8 mb-2 object-contain"
                />
                <span>{skill.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </Section>
  );
};
