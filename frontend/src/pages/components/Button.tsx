import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "outline";
  href?: string;
  className?: string;
  download?: boolean;
  type?: "button" | "submit" | "reset";
}

export const Button = ({
  children,
  onClick,
  variant = "primary",
  href,
  className = "",
  download = false,
  type = "button",
}: ButtonProps) => {
  const baseStyles =
    "px-6 py-3 rounded-lg font-medium transition-all duration-200 inline-flex items-center gap-2";

  const variants = {
    primary:
      "bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600",
    secondary:
      "bg-gray-200 text-gray-900 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-100 dark:hover:bg-gray-600",
    outline:
      "border-2 border-blue-600 text-blue-600 hover:bg-blue-50 dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-950",
  };

  const classes = `${baseStyles} ${variants[variant]} ${className}`;

  const MotionButton = motion.button;
  const MotionLink = motion.a;

  if (href) {
    return (
      <MotionLink
        href={href}
        className={classes}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
        download={download}
      >
        {children}
      </MotionLink>
    );
  }

  return (
    <MotionButton
      onClick={onClick}
      type={type}
      className={classes}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </MotionButton>
  );
};
