import { motion } from 'framer-motion';
import { Briefcase, CheckCircle } from 'lucide-react';
import { Section, SectionTitle } from './Section';
import { portfolioConfig } from '../config/portfolio';

export const Experience = () => {
  const { experience } = portfolioConfig;

  return (
    <Section id="experience" className="bg-white dark:bg-gray-900">
      <SectionTitle subtitle="My professional journey">
        Work Experience
      </SectionTitle>

      <div className="relative">
        <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-blue-200 dark:bg-blue-800" />

        <div className="space-y-12">
          {experience.map((job, index) => (
            <motion.div
              key={job.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`relative flex flex-col md:flex-row gap-8 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              <div className="md:w-1/2" />

              <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 -translate-y-1">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.2 }}
                  className="w-12 h-12 bg-blue-600 dark:bg-blue-500 rounded-full flex items-center justify-center shadow-lg"
                >
                  <Briefcase className="text-white" size={24} />
                </motion.div>
              </div>

              <div className="md:w-1/2 ml-16 md:ml-0">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="mb-4">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                      {job.role}
                    </h3>
                    <p className="text-lg text-blue-600 dark:text-blue-400 font-medium mb-1">
                      {job.company}
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {job.period}
                    </p>
                  </div>

                  <ul className="space-y-2">
                    {job.achievements.map((achievement, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: index * 0.2 + i * 0.1 }}
                        className="flex items-start gap-2 text-gray-700 dark:text-gray-300"
                      >
                        <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={18} />
                        <span>{achievement}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
};
