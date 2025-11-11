import { motion } from "framer-motion";
import {
  Briefcase,
  Calendar,
  CheckCircle,
  ChevronLeft,
  ChevronRight,
  MapPin,
} from "lucide-react";
import { useState } from "react";
import { portfolioConfig } from "../config/portfolio";
import { Section, SectionTitle } from "./Section";

const DragIndicator = () => (
  <div className="flex justify-center mt-10">
    <div className="w-14 h-1.5 rounded-full bg-gray-300 dark:bg-gray-700"></div>
  </div>
);

export const Experience = () => {
  const { experience } = portfolioConfig;
  const [activeIndex, setActiveIndex] = useState(
    Math.floor(experience.length / 2)
  );

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % experience.length);
  };

  const handlePrev = () => {
    setActiveIndex(
      (prev) => (prev - 1 + experience.length) % experience.length
    );
  };

  return (
    <Section
      id="experience"
      className="bg-white dark:bg-gray-900 relative overflow-visible min-h-[800px] md:min-h-[900px] py-24"
    >
      <SectionTitle subtitle="My professional journey">
        Work Experience
      </SectionTitle>

      <div className="relative flex justify-center items-center perspective-[1400px] py-14">
        {/* --- Left Arrow --- */}
        <button
          onClick={handlePrev}
          className="absolute left-4 md:left-10 top-60 -translate-y-1/2 z-40 
             p-3 rounded-full bg-gray-100 dark:bg-gray-800 shadow 
             hover:scale-110 active:scale-95 transition"
        >
          <ChevronLeft className="w-7 h-7 text-gray-700 dark:text-gray-300" />
        </button>

        {/* --- Cards --- */}
        {experience.map((job, index) => {
          const offset = index - activeIndex;
          const isActive = offset === 0;

          // Adjust card spacing and depth
          const x = offset * 260;
          const z = isActive ? 0 : -200;
          const rotateY = offset === 0 ? 0 : offset > 0 ? -18 : 18;
          const scale = isActive ? 1.25 : 0.9;
          const opacity = isActive ? 1 : 0.55;

          return (
            <motion.div
              key={job.id}
              layout
              transition={{ type: "spring", stiffness: 150, damping: 18 }}
              animate={{
                x,
                z,
                scale,
                rotateY,
                opacity,
                zIndex: isActive ? 30 : 10,
              }}
              className="absolute top-0"
              style={{
                transformStyle: "preserve-3d",
                transformOrigin: "center",
              }}
            >
              <div
                onClick={() => setActiveIndex(index)}
                className={`w-[400px] md:w-[520px] lg:w-[580px] 
                  bg-gray-50 dark:bg-gray-800
                  border border-gray-200 dark:border-gray-700
                  rounded-3xl shadow-2xl cursor-pointer
                  p-8 md:p-10 transition-all duration-300 mt-20
                  ${isActive ? "shadow-3xl scale-[1.02]" : "shadow-lg"}
                `}
              >
                {/* --- Header --- */}
                <div className="mb-6">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-blue-600 dark:bg-blue-500 rounded-xl flex items-center justify-center shadow-md">
                      <Briefcase className="text-white" size={26} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white leading-snug">
                        {job.role}
                      </h3>
                      <p className="text-blue-600 dark:text-blue-400 font-semibold text-base">
                        {job.company}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center text-sm text-gray-500 dark:text-gray-400 space-y-1 sm:space-y-0 sm:space-x-4 border-t border-gray-100 dark:border-gray-700 pt-3 mt-4">
                    <div className="flex items-center gap-1.5">
                      <Calendar
                        size={15}
                        className="text-gray-400 dark:text-gray-500"
                      />
                      <span>{job.period}</span>
                    </div>
                    {job.location && (
                      <div className="flex items-center gap-1.5">
                        <MapPin
                          size={15}
                          className="text-gray-400 dark:text-gray-500"
                        />
                        <span>{job.location}</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* --- Achievements --- */}
                <ul className="space-y-3 text-[15px] leading-relaxed">
                  {job.achievements.map((achievement, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, amount: 0.8 }}
                      transition={{ duration: 0.35, delay: i * 0.07 }}
                      className="flex items-start gap-3 text-gray-700 dark:text-gray-300 border-l-2 border-blue-200 dark:border-blue-700 pl-4"
                    >
                      <CheckCircle
                        size={18}
                        className="mt-0.5 text-green-600 dark:text-green-500 flex-shrink-0"
                      />
                      <span>{achievement}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          );
        })}

        {/* --- Right Arrow --- */}
        <button
          onClick={handleNext}
          className="absolute right-4 md:right-10 top-56 -translate-y-1/2 z-40 
             p-3 rounded-full bg-gray-100 dark:bg-gray-800 shadow 
             hover:scale-110 active:scale-95 transition"
        >
          <ChevronRight className="w-7 h-7 text-gray-700 dark:text-gray-300" />
        </button>
      </div>

      <DragIndicator />

      {/* --- Edge Fades --- */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white dark:from-gray-900 to-transparent z-10"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white dark:from-gray-900 to-transparent z-10"></div>
    </Section>
  );
};
