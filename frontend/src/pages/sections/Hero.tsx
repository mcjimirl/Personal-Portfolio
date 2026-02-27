import profileImage from "@/assets/images/imagenimerl.png";
import { motion } from "framer-motion";
import { Download, Mail } from "lucide-react";
import { useState } from "react";
import { portfolioConfig } from "../../config/portfolio";
import { Button } from "../components/Button";
import { Section } from "../components/Section";
import Threads from "../components/Threads";

export const Hero = () => {
  const { personal } = portfolioConfig;
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-12 lg:px-24 overflow-hidden"
    >
      {/* Background Threads */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-70">
        <Threads
          color={[0.2, 0.5, 1.0]}
          amplitude={1.2}
          distance={0.15}
          enableMouseInteraction={true}
        />
      </div>

      {/* Modal for Resume Preview */}
      {isModalOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4"
        >
          <div className="bg-white dark:bg-gray-900 rounded-xl shadow-2xl w-full max-w-4xl h-[80vh] flex flex-col">
            {/* Header */}
            <div className="flex justify-between items-center p-4 border-b border-gray-200 dark:border-gray-800">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                Resume Preview
              </h3>
              <button
                onClick={closeModal}
                className="text-gray-600 dark:text-gray-300 font-bold text-xl"
              >
                ×
              </button>
            </div>

            {/* Iframe Preview */}
            <iframe
              src={personal.resumeUrl}
              className="flex-1 w-full p-4"
              title="Resume Preview"
            />
          </div>
        </motion.div>
      )}

      {/* Hero Content */}
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
              {/* View Resume Button */}
              <Button onClick={openModal} className="text-sm sm:text-base">
                <Download size={18} className="sm:w-5 sm:h-5" /> View Resume
              </Button>

              {/* Contact Button */}
              <Button
                variant="outline"
                onClick={scrollToContact}
                className="text-sm sm:text-base"
              >
                <Mail size={18} className="sm:w-5 sm:h-5" /> Get in Touch
              </Button>
            </motion.div>
          </motion.div>

          {/* Profile Image */}
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
              whileHover={{ scale: 1.05, rotate: 1 }}
              transition={{ duration: 0.4 }}
              className="relative group cursor-pointer"
            >
              <div className="w-64 h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden border-[4px] sm:border-[6px] border-white dark:border-gray-800 shadow-xl transform transition-transform duration-300 ease-out">
                <img
                  loading="lazy"
                  src={profileImage}
                  alt={personal.name}
                  className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
                />
              </div>

              {/* Pulsing Ring */}
              <motion.div
                className="absolute -inset-1 rounded-full pointer-events-none"
                style={{ border: "3px solid var(--color-primary, #3B82F6)" }}
                animate={{ scale: [1, 1.02, 1], opacity: [0.6, 1, 0.6] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              {/* Status Badge */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1, type: "spring", stiffness: 300 }}
                className="absolute bottom-2 right-8 sm:bottom-4 sm:right-14 p-2 bg-green-500 rounded-full border-8 border-white dark:border-gray-800 shadow-md"
                title="Available for contact"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </Section>
  );
};
