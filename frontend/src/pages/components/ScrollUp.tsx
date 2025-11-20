import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

export const ScrollToHeroButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 200); // show after scrolling
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToHero = () => {
    const hero = document.querySelector("#hero");
    hero?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.button
      onClick={scrollToHero}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: visible ? 1 : 0, scale: visible ? 1 : 0 }}
      transition={{ duration: 0.3 }}
      className="
        fixed bottom-6 right-6 z-50
        p-3 rounded-full shadow-lg
        bg-blue-600 text-white dark:bg-blue-500
        hover:bg-blue-700 dark:hover:bg-blue-600
        focus:outline-none
      "
      aria-label="Scroll to hero"
    >
      <ArrowUp size={20} />
    </motion.button>
  );
};
