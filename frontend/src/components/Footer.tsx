import { motion } from "framer-motion";
import { Facebook, Github, Globe, Heart, Linkedin } from "lucide-react";
import { portfolioConfig } from "../config/portfolio";

export const Footer = () => {
  const { social } = portfolioConfig;

  const socialLinks = [
    { icon: Github, url: social.github, label: "GitHub" },
    { icon: Linkedin, url: social.linkedin, label: "LinkedIn" },
    { icon: Facebook, url: social.facebook, label: "Facebook" },
    { icon: Globe, url: social.website, label: "Website" },
  ];

  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex gap-6 mb-8"
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.label}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                whileHover={{ scale: 1.2, y: -5 }}
                className="w-12 h-12 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-blue-100 dark:hover:bg-blue-900 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                aria-label={link.label}
              >
                <link.icon size={24} />
              </motion.a>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
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
