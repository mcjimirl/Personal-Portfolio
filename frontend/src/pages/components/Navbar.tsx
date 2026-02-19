import MJD from "@/assets/images/MJDBlack.png";
import MJDWhite from "@/assets/images/MJDW.png";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

export const Navbar = () => {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);

  useEffect(() => {
    const heroSection = document.querySelector("#hero");
    if (!heroSection) return;

    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentY = window.scrollY;
      const heroRect = heroSection.getBoundingClientRect();
      const heroVisible = heroRect.top <= 0 && heroRect.bottom >= 0;

      if (heroVisible) {
        // Always show navbar in Hero section
        setShowNavbar(true);
      } else {
        // Scroll up → show navbar
        if (currentY < lastScrollY) {
          setShowNavbar(true);
        } else {
          // Scroll down → hide navbar
          setShowNavbar(false);
        }
      }

      lastScrollY = currentY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Sync theme + respond to system/browser changes
  useEffect(() => {
    const root = document.documentElement;

    // Load initial theme
    const storedTheme = localStorage.getItem("theme");
    const systemPrefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;

    const initialTheme =
      storedTheme === "dark" || storedTheme === "light"
        ? storedTheme
        : systemPrefersDark
          ? "dark"
          : "light";

    setTheme(initialTheme);

    // Apply it to <html>
    root.classList.toggle("dark", initialTheme === "dark");

    // Watch for system theme changes
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const systemThemeListener = (e: MediaQueryListEvent) => {
      const newTheme = e.matches ? "dark" : "light";
      setTheme(newTheme);
      root.classList.toggle("dark", newTheme === "dark");
      localStorage.setItem("theme", newTheme);
    };
    media.addEventListener("change", systemThemeListener);

    // Watch for manual theme toggle (class change)
    const mutationObserver = new MutationObserver(() => {
      const isDark = root.classList.contains("dark");
      const newTheme = isDark ? "dark" : "light";
      setTheme(newTheme);
      localStorage.setItem("theme", newTheme);
    });

    mutationObserver.observe(root, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => {
      media.removeEventListener("change", systemThemeListener);
      mutationObserver.disconnect();
    };
  }, []);

  const navLinks = [
    { label: "Home", href: "#hero" },
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
      transition={{ duration: 0.25, ease: "easeOut" }}
      className="fixed top-4 inset-x-0 z-50 flex justify-center"
    >
      <div
        className="w-[95%] max-w-6xl 
               bg-white/70 dark:bg-gray-900/70 
               backdrop-blur-xl 
               border border-gray-200/50 dark:border-gray-800/50 
               shadow-lg 
               rounded-2xl"
      >
        <div className="flex items-center justify-between w-full p-4">
          {/* Logo */}
          <motion.button
            onClick={() => scrollToSection("#hero")}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="text-2xl font-bold text-gray-900 dark:text-white"
          >
            <img
              src={theme === "light" ? MJD : MJDWhite}
              alt="logo"
              className="w-14 h-10 sm:w-16 sm:h-12"
            />
          </motion.button>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <motion.button
                key={link.label}
                onClick={() => scrollToSection(link.href)}
                whileHover={{ y: -2 }}
                className="text-sm lg:text-base text-gray-700 dark:text-gray-300 
                       hover:text-blue-600 dark:hover:text-blue-400 
                       font-medium transition-colors"
              >
                {link.label}
              </motion.button>
            ))}
          </div>

          {/* Mobile Nav Button */}
          <div className="md:hidden flex items-center">
            <motion.button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              whileTap={{ scale: 0.9 }}
              className="p-2 text-gray-800 dark:text-gray-200"
            >
              {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            className="md:hidden mt-4 space-y-3"
          >
            {navLinks.map((link) => (
              <motion.button
                key={link.label}
                onClick={() => scrollToSection(link.href)}
                whileTap={{ scale: 0.95 }}
                className="block w-full text-left py-2 px-2 text-sm 
                       text-gray-700 dark:text-gray-300 
                       hover:text-blue-600 dark:hover:text-blue-400 
                       font-medium"
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
