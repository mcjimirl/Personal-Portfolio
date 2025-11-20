import profileImage from "@/assets/images/imagenimerl.png";
import { motion } from "framer-motion";
import { Download, Mail } from "lucide-react";
import { portfolioConfig } from "../../config/portfolio";
import { Button } from "../components/Button";
import { Section } from "../components/Section";
import Threads from "../components/Threads";

export const Hero = () => {
  const { personal } = portfolioConfig;

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-12 lg:px-24 overflow-hidden py-12 sm:py-16 md:py-20"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-70">
        <Threads
          color={[0.2, 0.5, 1.0]}
          amplitude={1.2}
          distance={0.15}
          enableMouseInteraction={true}
        />
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-20">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 sm:gap-12">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex-1 text-center md:text-left w-full md:w-auto"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4"
            >
              Hi, I'm <br />
              <span className="text-blue-600 dark:text-blue-400">
                {personal.name}
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 dark:text-gray-300 mb-6 sm:mb-8"
            >
              {personal.title}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start"
            >
              <Button
                href={personal.resumeUrl}
                download
                className="text-sm sm:text-base"
              >
                <Download size={18} className="sm:w-5 sm:h-5" />
                Download Resume
              </Button>

              <Button
                variant="outline"
                onClick={scrollToContact}
                className="text-sm sm:text-base"
              >
                <Mail size={18} className="sm:w-5 sm:h-5" />
                Get in Touch
              </Button>
            </motion.div>
          </motion.div>

          {/* Profile Image - Enhanced Version */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.4,
              type: "spring",
              stiffness: 100,
            }}
            className="flex-shrink-0 relative mx-auto md:mx-0"
          >
            <motion.div
              whileHover={{
                scale: 1.05,
                rotate: 1,
              }}
              transition={{ duration: 0.4 }}
              className="relative group cursor-pointer"
            >
              <div
                className="
                  w-48 h-48 
                  sm:w-56 sm:h-56 
                  md:w-64 md:h-64 
                  lg:w-72 lg:h-72 
                  xl:w-80 xl:h-80 
                  rounded-full overflow-hidden 
                  border-[4px] sm:border-[6px] border-white dark:border-gray-800 
                  shadow-xl  
                  transform transition-transform duration-300 ease-out
                "
              >
                <img
                  loading="lazy"
                  src={profileImage}
                  alt={personal.name}
                  className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
                />
              </div>

              {/* Soft pulsing outline ring */}
              <motion.div
                className="absolute -inset-1 rounded-full pointer-events-none"
                style={{
                  border: "3px solid",
                  borderColor: "var(--color-primary, #3B82F6)",
                }}
                animate={{ scale: [1, 1.02, 1], opacity: [0.6, 1, 0.6] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              {/* Optional: Status Indicator/Badge */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1, type: "spring", stiffness: 300 }}
                className="absolute bottom-2 right-2 sm:bottom-4 sm:right-4 p-1.5 sm:p-2 bg-green-500 rounded-full border-2 sm:border-4 border-white dark:border-gray-800 shadow-md"
                title="Available for contact"
              >
                <span className="sr-only">Available</span>
                <svg
                  className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 2a8 8 0 100 16 8 8 0 000-16zM8 11.5a1.5 1.5 0 113 0v1.5H8v-1.5z"></path>
                </svg>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </Section>
  );
};
