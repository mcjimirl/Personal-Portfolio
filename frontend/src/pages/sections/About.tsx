import { portfolioConfig } from "@/config/portfolio";
import { motion } from "framer-motion";
import LightRays from "../components/LightRays";
import { Section, SectionTitle } from "../components/Section";

export const About = () => {
  const { personal, skills } = portfolioConfig;

  return (
    <Section
      id="about"
      className="relative overflow-hidden bg-white dark:bg-gray-900 py-12 sm:py-16 md:py-20"
    >
      {/*BACKGROUND EFFECT */}
      <div className="absolute inset-0 pointer-events-none z-0 opacity-[0.35]">
        <LightRays
          raysOrigin="top-center"
          raysColor="#ffffff"
          raysSpeed={1}
          lightSpread={1}
          rayLength={6}
          pulsating={true}
          fadeDistance={1}
          saturation={1}
          followMouse={true}
          mouseInfluence={0.15}
          noiseAmount={0.05}
          distortion={0.1}
          className="w-full h-full"
        />
      </div>

      {/* CONTENT ABOVE EFFECT */}
      <div className="relative z-10">
        <SectionTitle subtitle="Get to know me better">About Me</SectionTitle>

        <h3 className="flex justify-center items-center text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
          Skills & Technologies
        </h3>

        <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 text-justify leading-relaxed mb-4 sm:mb-6 indent-8 sm:indent-16">
              {personal.bio}
            </p>

            <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed indent-8 sm:indent-16">
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
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="flex flex-col items-center justify-center px-2 sm:px-4 py-2 sm:py-3 bg-gray-100 dark:bg-gray-200 rounded-lg text-center font-medium text-xs sm:text-sm text-gray-800 dark:text-gray-800 shadow-sm hover:shadow-md transition-shadow"
                >
                  <img
                    src={skill.logo}
                    alt={skill.name}
                    className="w-6 h-6 sm:w-8 sm:h-8 mb-1 sm:mb-2 object-contain"
                  />
                  <span className="text-[10px] sm:text-xs">{skill.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </Section>
  );
};
