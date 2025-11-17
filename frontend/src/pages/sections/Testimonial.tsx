import { portfolioConfig } from "@/config/portfolio";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useState } from "react";

interface SectionProps {
  id?: string;
  className?: string;
  children?: React.ReactNode;
}

interface SectionTitleProps {
  subtitle?: string;
  children?: React.ReactNode;
}

// --- Mock Utility Components (Required for Component to Run) ---
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

// --- Testimonials Component (Adapted from Experience) ---
export const Testimonials = () => {
  const { testimonials } = portfolioConfig;
  const [activeIndex, setActiveIndex] = useState(
    Math.floor(testimonials.length / 2)
  );

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActiveIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <Section
      id="testimonies"
      className="bg-gray-50 dark:bg-gray-900 relative overflow-visible min-h-[700px] md:min-h-[800px] py-24"
    >
      <SectionTitle subtitle="Kind words from my colleagues">
        Work Testimonials
      </SectionTitle>

      <div className="relative flex justify-center items-center perspective-[1400px] py-14">
        {/* --- Left Arrow --- */}
        <button
          onClick={handlePrev}
          className="absolute left-4 md:left-10 top-1/2 -translate-y-1/2 z-40 
					p-3 rounded-full bg-white dark:bg-gray-800 shadow-xl 
					border border-gray-200 dark:border-gray-700
					hover:scale-110 active:scale-95 transition"
        >
          <ChevronLeft className="w-7 h-7 text-blue-600 dark:text-blue-400" />
        </button>

        {/* --- Cards --- */}
        {testimonials.map((testimonial, index) => {
          const offset = index - activeIndex;
          const isActive = offset === 0;

          // Adjust card spacing and depth
          const x = offset * 260; // Horizontal shift
          const z = isActive ? 0 : -200; // Depth/3D position
          const rotateY = offset === 0 ? 0 : offset > 0 ? -15 : 15; // Slight rotation
          const scale = isActive ? 1.05 : 0.85; // Scale down inactive cards
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
              className="absolute top-0 w-[400px] md:w-[520px] lg:w-[600px] h-full"
              style={{
                transformStyle: "preserve-3d",
                transformOrigin: "center",
                pointerEvents: pointerEvents,
              }}
            >
              <div
                className={`w-full min-h-[300px] 
								bg-white dark:bg-gray-800
								border border-blue-200 dark:border-blue-700/50
								rounded-3xl shadow-2xl transition-all duration-300 mt-10
								flex flex-col justify-between 
								${
                  isActive
                    ? "shadow-blue-500/20 dark:shadow-blue-500/10 scale-100"
                    : "scale-100"
                }
								p-8 md:p-10`}
              >
                {/* --- Quote Content --- */}
                <div className="flex-grow">
                  <Quote className="w-8 h-8 text-blue-500 dark:text-blue-400 mb-4 opacity-70" />
                  <p className="text-lg italic font-medium text-gray-700 dark:text-gray-300">
                    "{testimonial.quote}"
                  </p>
                </div>

                {/* --- Reviewer Info --- */}
                <div className="mt-8 pt-4 border-t border-gray-100 dark:border-gray-700 flex items-center gap-4">
                  {testimonial.imageUrl && (
                    <img
                      src={testimonial.imageUrl}
                      alt={testimonial.reviewer}
                      className="w-14 h-14 rounded-full object-cover border-2 border-blue-400 dark:border-blue-600 shadow-md"
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
              </div>
            </motion.div>
          );
        })}

        {/* This div reserves space for the cards, otherwise the container collapses */}
        <div className="w-[600px] h-[400px] md:h-[450px]"></div>

        {/* --- Right Arrow --- */}
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

      {/* --- Edge Fades --- */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-gray-50 dark:from-gray-900 to-transparent z-10"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-gray-50 dark:from-gray-900 to-transparent z-10"></div>
    </Section>
  );
};

// Main App component to demonstrate the section
export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 font-[Inter]">
      {/* Testimonials section */}
      <Testimonials />
      {/* Spacer to see the section better */}
      <div className="h-40 bg-white dark:bg-gray-800"></div>
    </div>
  );
}
