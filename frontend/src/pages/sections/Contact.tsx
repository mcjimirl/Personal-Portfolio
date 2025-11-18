import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { Facebook, Github, Globe, Linkedin, Mail, Send } from "lucide-react";
import { useRef, useState } from "react";
import { portfolioConfig } from "../../config/portfolio";
import { Button } from "../components/Button";
import { Section, SectionTitle } from "../components/Section";

export const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");
  const { social } = portfolioConfig;

  const socialLinks = [
    { icon: Github, url: social.github, label: "GitHub" },
    { icon: Linkedin, url: social.linkedin, label: "LinkedIn" },
    { icon: Facebook, url: social.facebook, label: "Facebook" },
    { icon: Globe, url: social.website, label: "Website" },
  ];

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setLoading(true);

    try {
      await emailjs.sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        formRef.current,
        "YOUR_PUBLIC_KEY"
      );

      setSuccessMsg("Your message has been sent successfully!");
      formRef.current.reset();
    } catch (err) {
      setSuccessMsg("Something went wrong. Please try again.");
      console.error(err);
    }

    setLoading(false);
  };

  return (
    <Section
      id="contact"
      className="bg-gray-50 dark:bg-gray-800 py-12 sm:py-16 md:py-20"
    >
      <SectionTitle subtitle="Let's work together">Get In Touch</SectionTitle>

      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-6 sm:p-8 md:p-12"
        >
          <div className="text-center mb-6 sm:mb-8">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, type: "spring" }}
              className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-blue-100 dark:bg-blue-900 rounded-full mb-3 sm:mb-4"
            >
              <Mail className="text-blue-600 dark:text-blue-400 w-6 h-6 sm:w-8 sm:h-8" />
            </motion.div>

            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300">
              Have a project in mind? Message me directly using the form below.
            </p>
          </div>

          {/* --- Email Form --- */}
          <form
            ref={formRef}
            onSubmit={sendEmail}
            className="space-y-4 sm:space-y-6 max-w-xl mx-auto"
          >
            <input
              type="text"
              name="user_name"
              placeholder="Your Name.."
              required
              className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base rounded-lg bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none"
            />

            <input
              type="email"
              name="user_email"
              placeholder="Your Email.."
              required
              className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base rounded-lg bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none"
            />

            <textarea
              name="message"
              rows={5}
              placeholder="Your Message.."
              required
              className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base rounded-lg bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none resize-none"
            ></textarea>

            <div className="flex justify-center">
              <Button
                variant="primary"
                className="text-sm sm:text-lg px-6 sm:px-8 py-3 sm:py-4 flex items-center gap-2"
                type="submit"
              >
                {loading ? (
                  "Sending..."
                ) : (
                  <Send size={18} className="sm:w-5 sm:h-5" />
                )}
                {!loading && "Send Message"}
              </Button>
            </div>

            {successMsg && (
              <p className="text-center text-sm sm:text-base text-green-500 dark:text-green-400 mt-4">
                {successMsg}
              </p>
            )}
          </form>

          {/* --- Social Links Section --- */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-gray-200 dark:border-gray-700 text-center"
          >
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-4 sm:mb-6">
              Or connect with me on social media
            </p>

            <div className="flex justify-center gap-4 sm:gap-6 flex-wrap">
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
                  className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-300 dark:bg-gray-100 rounded-full flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-blue-100 dark:hover:bg-blue-900 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  aria-label={link.label}
                >
                  <link.icon size={20} className="sm:w-6 sm:h-6" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </Section>
  );
};
