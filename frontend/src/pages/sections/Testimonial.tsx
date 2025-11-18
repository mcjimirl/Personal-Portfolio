import { portfolioConfig } from "@/config/portfolio";
import { motion } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  Github,
  Link,
  Quote,
  Star,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

interface SectionProps {
  id?: string;
  className?: string;
  children?: React.ReactNode;
}

interface SectionTitleProps {
  subtitle?: string;
  children?: React.ReactNode;
  rating?: number;
}

const StarRating = ({ rating }: SectionTitleProps) => {
  const numericRating = Number(rating) || 0;
  const maxRating = 5;
  const stars = [];
  for (let i = 1; i <= maxRating; i++) {
    const isFilled = i <= numericRating;
    stars.push(
      <Star
        key={i}
        size={20}
        className={
          isFilled
            ? "text-yellow-400 fill-yellow-400"
            : "text-gray-300 dark:text-gray-600"
        }
        fill={isFilled ? "currentColor" : "none"}
      />
    );
  }
  return <div className="flex space-x-0.5">{stars}</div>;
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

const DragIndicator = () => (
  <div className="flex justify-center mt-10">
    <div className="w-14 h-1.5 rounded-full bg-gray-300 dark:bg-gray-700"></div>
  </div>
);

export const Testimonials = () => {
  const { testimonials } = portfolioConfig;
  const [activeIndex, setActiveIndex] = useState(
    Math.floor(testimonials.length / 2)
  );

  const containerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState(0);

  useEffect(() => {
    if (containerRef.current) {
      const updateWidth = () =>
        setContainerWidth(containerRef.current!.offsetWidth);
      updateWidth();
      window.addEventListener("resize", updateWidth);
      return () => window.removeEventListener("resize", updateWidth);
    }
  }, []);

  const handleNext = () =>
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  const handlePrev = () =>
    setActiveIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );

  // Calculate dynamic card width based on container
  const getCardWidth = () => Math.min(0.8 * containerWidth, 600);

  return (
    <Section
      id="testimonies"
      className="bg-gray-50 dark:bg-gray-900 relative overflow-visible min-h-[700px] md:min-h-[800px] py-24"
    >
      <SectionTitle subtitle="Kind words from my colleagues">
        Work Testimonials
      </SectionTitle>

      <div
        ref={containerRef}
        className="relative flex justify-center items-center perspective-[1400px] py-14 w-full"
      >
        {/* Left Arrow */}
        <button
          onClick={handlePrev}
          className="absolute left-4 md:left-10 top-1/2 -translate-y-1/2 z-40 
					p-3 rounded-full bg-white dark:bg-gray-800 shadow-xl 
					border border-gray-200 dark:border-gray-700
					hover:scale-110 active:scale-95 transition"
        >
          <ChevronLeft className="w-7 h-7 text-blue-600 dark:text-blue-400" />
        </button>

        {/* Cards */}
        {testimonials.map((testimonial, index) => {
          const offset = index - activeIndex;
          const isActive = offset === 0;

          const cardWidth = getCardWidth();
          const x = offset * (cardWidth + 24); // spacing
          const z = isActive ? 0 : -200;
          const rotateY = offset === 0 ? 0 : offset > 0 ? -15 : 15;
          const scale = isActive ? 1 : 0.85;
          const opacity = isActive ? 1 : 0.4;
          const pointerEvents = isActive ? "auto" : "none";

          return (
            <motion.div
              key={testimonial.id}
              onClick={() => setActiveIndex(index)}
              layout
              transition={{ type: "spring", stiffness: 150, damping: 18 }}
              animate={{
                x,
                z,
                scale,
                rotateY,
                opacity,
                zIndex: isActive ? 30 : 10,
              }}
              className="absolute top-0 h-full"
              style={{
                width: cardWidth,
                transformStyle: "preserve-3d",
                transformOrigin: "center",
                pointerEvents,
              }}
            >
              <div
                className={`w-full min-h-[300px] bg-white dark:bg-gray-800 border border-blue-200 dark:border-blue-700/50 rounded-3xl shadow-2xl transition-all duration-300 mt-10 flex flex-col justify-between p-6 md:p-10`}
              >
                <div className="flex justify-between items-start mb-4">
                  <Quote className="w-8 h-8 text-blue-500 dark:text-blue-400 opacity-70 flex-shrink-0" />
                  {testimonial.rating && (
                    <StarRating rating={testimonial.rating} />
                  )}
                </div>
                <div className="flex-grow mb-8">
                  <p className="text-lg italic font-medium text-gray-700 dark:text-gray-300">
                    "{testimonial.quote}"
                  </p>
                </div>
                <div className="pt-4 border-t border-gray-100 dark:border-gray-700 flex items-center gap-4">
                  {testimonial.imageUrl && (
                    <img
                      src={testimonial.imageUrl}
                      alt={testimonial.reviewer}
                      className="w-14 h-14 rounded-full object-cover border-2 border-blue-400 dark:border-blue-600 shadow-md flex-shrink-0"
                    />
                  )}
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      {testimonial.reviewer}
                    </h3>
                    <p className="text-sm font-semibold text-blue-600 dark:text-blue-400">
                      {testimonial.role}
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {testimonial.company}
                    </p>
                  </div>
                </div>
                <div className="flex justify-center space-x-4 py-4 border-y border-gray-100 dark:border-gray-700 my-4 flex-wrap gap-2">
                  {testimonial.github && (
                    <a
                      href={testimonial.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded-full text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600 transition-all text-xs font-medium shadow-sm active:scale-95"
                      aria-label={`GitHub Profile for ${testimonial.reviewer}`}
                    >
                      <Github size={16} />
                      GitHub
                    </a>
                  )}
                  {testimonial.website && (
                    <a
                      href={testimonial.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-3 py-1 bg-blue-500 rounded-full text-white hover:bg-blue-600 transition-all text-xs font-medium shadow-sm active:scale-95"
                      aria-label={`Website/Portfolio for ${testimonial.reviewer}`}
                    >
                      <Link size={16} />
                      Portfolio
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          );
        })}

        <div style={{ width: getCardWidth(), height: 450 }} />

        {/* Right Arrow */}
        <button
          onClick={handleNext}
          className="absolute right-4 md:right-10 top-1/2 -translate-y-1/2 z-40 
					p-3 rounded-full bg-white dark:bg-gray-800 shadow-xl 
					border border-gray-200 dark:border-gray-700
					hover:scale-110 active:scale-95 transition"
        >
          <ChevronRight className="w-7 h-7 text-blue-600 dark:text-blue-400" />
        </button>
      </div>

      <DragIndicator />

      <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-gray-50 dark:from-gray-900 to-transparent z-10"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-gray-50 dark:from-gray-900 to-transparent z-10"></div>
    </Section>
  );
};
