import MJD from "@/assets/images/MJD.png";
import MJDWhite from "@/assets/images/MJDW.png";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

export const Navbar = () => {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [showNavbar, setShowNavbar] = useState(true);

  // Show navbar only when the Hero section is in view
  useEffect(() => {
    const heroSection = document.querySelector("#hero");
    if (!heroSection) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const isVisible = entries[0].isIntersecting;
        setShowNavbar(isVisible);
      },
      { threshold: 0.3 }
    );

    observer.observe(heroSection);
    return () => observer.disconnect();
  }, []);

  // Sync theme
  useEffect(() => {
    const stored = localStorage.getItem("theme");
    const currentTheme =
      stored === "dark" || stored === "light"
        ? stored
        : window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";

    setTheme(currentTheme);

    const observer = new MutationObserver(() => {
      const root = document.documentElement;
      setTheme(root.classList.contains("dark") ? "dark" : "light");
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  const navLinks = [
    // { label: "Home", href: "#hero" },
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Testimonies", href: "#testimonies" },
    { label: "Contact", href: "#contact" },
  ];

  const scrollToSection = (href: string) => {
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: -40 }}
      animate={showNavbar ? { opacity: 1, y: 0 } : { opacity: 0, y: -40 }}
      transition={{ duration: 0.4 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg border-b border-gray-200 dark:border-gray-800"
    >
      <div className="px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
        <div className="flex items-center justify-between w-full">
          {/* Logo */}
          <motion.button
            onClick={() => scrollToSection("#home")}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="text-2xl font-bold text-gray-900 dark:text-white"
          >
            <img
              src={theme === "light" ? MJD : MJDWhite}
              alt="logo"
              className="w-16 h-12 sm:w-20 sm:h-15"
            />
          </motion.button>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-4 lg:gap-8">
            {navLinks.map((link) => (
              <motion.button
                key={link.label}
                onClick={() => scrollToSection(link.href)}
                whileHover={{ y: -2 }}
                className="text-sm lg:text-base text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium"
              >
                {link.label}
              </motion.button>
            ))}
          </div>

          {/* Mobile Nav */}
          <div className="md:hidden flex items-center gap-2">
            <motion.button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              whileTap={{ scale: 0.9 }}
              className="p-2 text-gray-800 dark:text-gray-200"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            className="md:hidden mt-4 pb-4 space-y-3"
          >
            {navLinks.map((link) => (
              <motion.button
                key={link.label}
                onClick={() => scrollToSection(link.href)}
                whileTap={{ scale: 0.95 }}
                className="block w-full text-left py-2 px-2 text-sm text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium"
              >
                {link.label}
              </motion.button>
            ))}
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};
