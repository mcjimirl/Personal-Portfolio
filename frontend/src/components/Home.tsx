import { motion } from "framer-motion";
import { Download, Mail } from "lucide-react";
import profileImage from "../assets/images/imagenimerl.png";
import { portfolioConfig } from "../config/portfolio";
import { Button } from "./Button";
import Threads from "./Threads";

export const Home = () => {
  const { personal } = portfolioConfig;

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 md:px-12 lg:px-24 overflow-hidden">
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

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex-shrink-0"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="relative"
            >
              <div className="w-64 h-64 md:w-100 md:h-100 lg:w-96 lg:h-96 rounded-full overflow-hidden border-8 border-white dark:border-gray-700 shadow-2xl">
                <img
                  loading="lazy"
                  src={profileImage}
                  alt={personal.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Soft pulsing ring */}
              <motion.div
                className="absolute -inset-4 bg-blue-500 dark:bg-blue-600 rounded-full -z-10"
                animate={{ scale: [1, 1.05, 1], opacity: [0.3, 0.5, 0.3] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
