import { motion } from "framer-motion";
import { Download, Mail } from "lucide-react";
import profileImage from "../assets/images/imagenimerl.png";
import { portfolioConfig } from "../config/portfolio";
import { Button } from "./Button";
import { Section } from "./Section";
import Threads from "./Threads";

export const Hero = () => {
  const { personal } = portfolioConfig;

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Section
      id="home"
      className="relatives min-h-screen flex items-center justify-center px-6 md:px-12 lg:px-24 overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 z-10 pointer-events-none opacity-70">
        <Threads
          color={[0.2, 0.5, 1.0]}
          amplitude={1.2}
          distance={0.15}
          enableMouseInteraction={true}
        />
      </div>

      {/* Optional subtle overlay for better text contrast */}
      <div className="absolute inset-0 bg-gradient-to-br from-black-50/80 to-black-100/40 dark:from-gray-900/80 dark:to-gray-800/40 -z-5" />

      <div className="max-w-7xl  mx-auto w-full relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex-1 text-center md:text-left"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-4"
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
              className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8"
            >
              {personal.title}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
            >
              <Button href={personal.resumeUrl} download>
                <Download size={20} />
                Download Resume
              </Button>

              <Button variant="outline" onClick={scrollToContact}>
                <Mail size={20} />
                Get in Touch
              </Button>
            </motion.div>
          </motion.div>

          {/* Profile Image - Enhanced Version */}
          <motion.div
            // Initial animation: More subtle fade in and slight move up
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.4,
              type: "spring",
              stiffness: 100,
            }}
            className="flex-shrink-0 relative mx-auto" // Added mx-auto for centering if the parent allows
          >
            <motion.div
              // Hover: Subtle 3D lift with shadow change
              whileHover={{
                scale: 1.05,
                rotate: 1,
              }}
              transition={{ duration: 0.4 }}
              className="relative group cursor-pointer" // Add group for hover effects on children
            >
              <div
                className="
      w-56 h-56 
      md:w-72 md:h-72 
      lg:w-80 lg:h-80 
      rounded-full overflow-hidden 
      border-[6px] border-white dark:border-gray-800 
      shadow-xl  
      transform transition-transform duration-300 ease-out
    "
              >
                <img
                  loading="lazy"
                  src={profileImage}
                  alt={personal.name}
                  className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105" // Subtle zoom on hover
                />
              </div>

              {/* Soft pulsing outline ring (now an outline effect) */}
              <motion.div
                className="absolute -inset-1 rounded-full pointer-events-none" // -inset-1 creates a tight border effect
                style={{
                  border: "3px solid",
                  borderColor: "var(--color-primary, #3B82F6)", // Use a CSS variable or Tailwind color
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
                className="absolute bottom-4 right-4 p-2 bg-green-500 rounded-full border-4 border-white dark:border-gray-800 shadow-md"
                title="Available for contact" // Good for accessibility
              >
                <span className="sr-only">Available</span>
                <svg
                  className="w-3 h-3 text-white"
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
