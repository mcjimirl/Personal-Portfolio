import { ReactNode } from "react";

interface SectionProps {
  id?: string;
  children: ReactNode;
  className?: string;
}

/**
 * A balanced section wrapper providing consistent vertical spacing,
 * horizontal padding, and responsive max width alignment.
 */
export const Section = ({ id, children, className = "" }: SectionProps) => {
  return (
    <section
      id={id}
      className={`py-20 md:py-28 px-6 sm:px-8 md:px-12 lg:px-20 ${className}`}
    >
      <div className="max-w-6xl mx-auto">{children}</div>
    </section>
  );
};

interface SectionTitleProps {
  children: ReactNode;
  subtitle?: string;
}

/**
 * A centered title block for sections with an optional subtitle.
 * Designed for consistent spacing and balanced typography.
 */
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
