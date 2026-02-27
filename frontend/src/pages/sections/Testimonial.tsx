import { portfolioConfig } from "@/config/portfolio";
import { motion } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  Github,
  Link2,
  Quote,
  Star,
} from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import LightRays from "../components/LightRays";

interface SectionProps {
  id?: string;
  className?: string;
  children?: React.ReactNode;
}

interface SectionTitleProps {
  subtitle?: string;
  children?: React.ReactNode;
}

interface StarRatingProps {
  rating?: number;
}

const StarRating = ({ rating }: StarRatingProps) => {
  const numericRating = Number(rating) || 0;
  const maxRating = 5;

  return (
    <div className="flex space-x-0.5">
      {Array.from({ length: maxRating }).map((_, i) => {
        const filled = i < numericRating;
        return (
          <Star
            key={i}
            size={18}
            className={
              filled
                ? "text-yellow-400 fill-yellow-400"
                : "text-gray-300 dark:text-gray-600"
            }
            fill={filled ? "currentColor" : "none"}
          />
        );
      })}
    </div>
  );
};

const Section = ({ id, className, children }: SectionProps) => (
  <section id={id} className={`w-full ${className}`}>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">{children}</div>
  </section>
);

const SectionTitle = ({ subtitle, children }: SectionTitleProps) => (
  <div className="text-center mb-16">
    <p className="text-blue-600 dark:text-blue-400 font-semibold uppercase tracking-wider">
      {subtitle}
    </p>
    <h2 className="mt-2 text-4xl font-extrabold text-gray-900 dark:text-white sm:text-5xl">
      {children}
    </h2>
  </div>
);

export const Testimonials = () => {
  const { testimonials } = portfolioConfig;

  const [activeIndex, setActiveIndex] = useState(
    Math.floor(testimonials.length / 2),
  );
  const [progress, setProgress] = useState(0);

  const containerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number>();
  const startTimeRef = useRef<number>(Date.now());
  const [containerWidth, setContainerWidth] = useState(0);

  const duration = 5000;

  // Measure container width
  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
      }
    };

    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  // Auto slide with accurate timing
  const startAutoSlide = useCallback(() => {
    startTimeRef.current = Date.now();

    const update = () => {
      const elapsed = Date.now() - startTimeRef.current;
      const percentage = Math.min((elapsed / duration) * 100, 100);

      setProgress(percentage);

      if (elapsed >= duration) {
        setActiveIndex((prev) => (prev + 1) % testimonials.length);
        startTimeRef.current = Date.now();
      }

      animationRef.current = requestAnimationFrame(update);
    };

    animationRef.current = requestAnimationFrame(update);
  }, [testimonials.length]);

  useEffect(() => {
    startAutoSlide();
    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [startAutoSlide]);

  const resetProgress = () => {
    startTimeRef.current = Date.now();
    setProgress(0);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
    resetProgress();
  };

  const handlePrev = () => {
    setActiveIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    );
    resetProgress();
  };

  const getCardWidth = () => {
    if (containerWidth < 640) return containerWidth * 0.9;
    if (containerWidth < 1024) return containerWidth * 0.75;
    return Math.min(containerWidth * 0.8, 600);
  };

  const radius = 45;
  const circumference = 2 * Math.PI * radius;
  const dashOffset = circumference - (progress / 100) * circumference;

  return (
    <Section
      id="testimonies"
      className="bg-gray-50 h-screen dark:bg-gray-900 relative overflow-visible min-h-[700px] py-20"
    >
      <div className="absolute inset-0 pointer-events-none z-0 opacity-[0.35]">
        <LightRays className="w-full h-full" />
      </div>

      <SectionTitle subtitle="Kind words from my colleagues">
        Work Testimonials
      </SectionTitle>

      <div
        ref={containerRef}
        className="relative flex justify-center items-center perspective-[1400px] py-14 w-full"
      >
        {/* Left Button */}
        <button
          onClick={handlePrev}
          className="absolute left-4 md:left-10 top-1/2 -translate-y-1/2 z-40 p-3 rounded-full bg-white dark:bg-gray-800 shadow-xl border border-gray-200 dark:border-gray-700 hover:scale-110 active:scale-95 transition"
        >
          <ChevronLeft className="w-6 h-6 text-blue-600 dark:text-blue-400" />
        </button>

        {/* Cards */}
        {testimonials.map((testimonial, index) => {
          const total = testimonials.length;

          let offset = index - activeIndex;
          if (offset > total / 2) offset -= total;
          if (offset < -total / 2) offset += total;

          const isActive = offset === 0;
          const cardWidth = getCardWidth();
          const spacing = cardWidth + 16;

          return (
            <motion.div
              key={testimonial.id}
              animate={{
                x: offset * spacing,
                scale: isActive ? 1 : 0.85,
                opacity: Math.abs(offset) > 2 ? 0 : isActive ? 1 : 0.4,
                rotateY: offset === 0 ? 0 : offset > 0 ? -15 : 15,
                zIndex: total - Math.abs(offset),
              }}
              transition={{ type: "spring", stiffness: 150, damping: 18 }}
              className="absolute top-0"
              style={{ width: cardWidth }}
              onClick={() => {
                setActiveIndex(index);
                resetProgress();
              }}
            >
              <div className="bg-white dark:bg-gray-800 border border-blue-200 dark:border-blue-700/50 rounded-3xl shadow-2xl p-10 flex flex-col justify-between">
                <div className="flex justify-between mb-4">
                  <Quote className="w-8 h-8 text-blue-500 opacity-70" />
                  <StarRating rating={testimonial.rating} />
                </div>

                <p className="italic text-lg text-gray-700 dark:text-gray-300 mb-8">
                  "{testimonial.quote}"
                </p>

                {/* Reviewer */}
                <div className="flex items-center gap-4">
                  <div className="relative w-20 h-20">
                    {isActive && (
                      <svg
                        viewBox="0 0 100 100"
                        className="absolute w-full h-full -rotate-90"
                      >
                        <circle
                          cx="50"
                          cy="50"
                          r={radius}
                          stroke="#93C5FD"
                          strokeWidth="5"
                          fill="none"
                          opacity={0.3}
                        />
                        <circle
                          cx="50"
                          cy="50"
                          r={radius}
                          stroke="#3B82F6"
                          strokeWidth="5"
                          fill="none"
                          strokeDasharray={circumference}
                          strokeDashoffset={dashOffset}
                          strokeLinecap="round"
                        />
                      </svg>
                    )}

                    <img
                      src={testimonial.imageUrl}
                      alt={testimonial.reviewer}
                      className="absolute top-1/2 left-1/2 w-16 h-16 rounded-full object-cover border-2 border-blue-400 shadow-md -translate-x-1/2 -translate-y-1/2"
                    />
                  </div>

                  <div>
                    <h3 className="font-bold text-gray-900 dark:text-white">
                      {testimonial.reviewer}
                    </h3>
                    <p className="text-sm text-blue-600 dark:text-blue-400">
                      {testimonial.role}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      {testimonial.company}
                    </p>
                  </div>
                </div>

                {/* Links */}
                <div className="flex justify-center gap-3 mt-6 flex-wrap">
                  {testimonial.github && (
                    <a
                      href={testimonial.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded-full text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600 text-xs font-medium shadow-sm"
                    >
                      <Github size={14} />
                      GitHub
                    </a>
                  )}

                  {testimonial.website && (
                    <a
                      href={testimonial.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-3 py-1 bg-blue-500 rounded-full text-white hover:bg-blue-600 text-xs font-medium shadow-sm"
                    >
                      <Link2 size={14} />
                      Portfolio
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          );
        })}

        {/* Right Button */}
        <button
          onClick={handleNext}
          className="absolute right-4 md:right-10 top-1/2 -translate-y-1/2 z-40 p-3 rounded-full bg-white dark:bg-gray-800 shadow-xl border border-gray-200 dark:border-gray-700 hover:scale-110 active:scale-95 transition"
        >
          <ChevronRight className="w-6 h-6 text-blue-600 dark:text-blue-400" />
        </button>
      </div>
    </Section>
  );
};
