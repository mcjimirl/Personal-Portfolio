import { motion } from "framer-motion";
import { Facebook, Github, Globe, Linkedin, Mail, Send } from "lucide-react";
import { portfolioConfig } from "../../config/portfolio";
import { Button } from "../components/Button";
import { Section, SectionTitle } from "../components/Section";

export const Contact = () => {
  const { personal, social } = portfolioConfig;

  const socialLinks = [
    { icon: Github, url: social.github, label: "GitHub" },
    { icon: Linkedin, url: social.linkedin, label: "LinkedIn" },
    { icon: Facebook, url: social.facebook, label: "Facebook" },
    { icon: Globe, url: social.website, label: "Website" },
  ];

  return (
    <Section id="contact" className="bg-gray-50 dark:bg-gray-800">
      <SectionTitle subtitle="Let's work together">Get In Touch</SectionTitle>

      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8 md:p-12"
        >
          <div className="text-center mb-8">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, type: "spring" }}
              className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full mb-4"
            >
              <Mail className="text-blue-600 dark:text-blue-400" size={32} />
            </motion.div>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Have a project in mind or just want to chat? Feel free to reach
              out!
            </p>
          </div>

          <div className="text-center">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="inline-block mb-8"
            >
              <a
                href={`mailto:${personal.email}`}
                className="text-2xl md:text-3xl font-bold text-blue-600 dark:text-blue-400 hover:underline"
              >
                {personal.email}
              </a>
            </motion.div>

            <div className="flex justify-center">
              <Button
                href={`mailto:${personal.email}`}
                variant="primary"
                className="text-lg px-8 py-4"
              >
                <Send size={20} />
                Send Email
              </Button>
            </div>
          </div>

          {/* --- Social Links Section --- */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700 text-center"
          >
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Or connect with me on social media
            </p>

            <div className="flex justify-center gap-6">
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
            </div>
          </motion.div>
        </motion.div>
      </div>
    </Section>
  );
};
