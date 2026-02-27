import { ArrowUp } from "lucide-react";
import { ReactNode, useEffect, useState } from "react";

interface SectionProps {
  id?: string;
  children: ReactNode;
  className?: string;
}

export const Section = ({ id, children, className = "" }: SectionProps) => {
  const [showTopButton, setShowTopButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTopButton(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section id={id} className={`h-screen relative ${className}`}>
      <div className="max-w-6xl mx-auto">{children}</div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className={`
          fixed bottom-10 right-8 z-40 p-4 rounded-full bg-blue-600 text-white shadow-lg
          transition-opacity duration-300 transform hover:bg-blue-700 active:scale-95
          ${showTopButton ? "opacity-100 visible" : "opacity-0 invisible"}
        `}
        aria-label="Scroll to top"
      >
        <ArrowUp size={24} />
      </button>
    </section>
  );
};

interface SectionTitleProps {
  children: ReactNode;
  subtitle?: string;
}

export const SectionTitle = ({ children, subtitle }: SectionTitleProps) => {
  return (
    <div className="text-center mb-10 md:mb-15">
      <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 dark:text-white leading-tight">
        {children}
      </h2>
      {subtitle && (
        <p className="mt-4 text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
};
