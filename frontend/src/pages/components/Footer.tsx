import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import { portfolioConfig } from "../../config/portfolio";

export const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <p className="text-gray-600 dark:text-gray-400 flex items-center gap-2 justify-center mb-2">
              Built with{" "}
              <Heart size={16} className="text-red-500" fill="currentColor" />{" "}
              using React, TypeScript & Framer Motion
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-500">
              © {new Date().getFullYear()} {portfolioConfig.personal.name}. All
              rights reserved.
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};
