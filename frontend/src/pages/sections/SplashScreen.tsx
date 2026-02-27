import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export const SplashScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 500);
          return 100;
        }
        return prev + 1;
      });
    }, 20);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white dark:bg-gray-950 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-500 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-500 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 flex flex-col items-center">
        {/* Logo */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <div className="flex items-center gap-2">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              className="w-10 h-10 border-4 border-blue-600 border-t-transparent rounded-full"
            />
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white tracking-tighter">
              PORT<span className="text-blue-600">FOLIO</span>
            </h1>
          </div>
        </motion.div>

        {/* Loading Text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-gray-500 dark:text-gray-400 font-medium text-sm mb-4 uppercase tracking-[0.2em]"
        >
          {progress < 100 ? "Initializing Experience" : "Ready"}
        </motion.p>

        {/* Progress Bar */}
        <div className="w-64 h-1.5 bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden shadow-inner">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            className="h-full bg-blue-600"
            style={{ boxShadow: "0 0 10px rgba(37, 99, 235, 0.5)" }}
          />
        </div>

        <motion.span className="mt-2 text-xs font-mono text-gray-400">
          {progress}%
        </motion.span>
      </div>

      {/* Exit Overlay */}
      <motion.div
        initial={{ height: 0 }}
        exit={{ height: "100%" }}
        transition={{ duration: 0.6, ease: "circIn" }}
        className="absolute bottom-0 left-0 w-full bg-blue-600 z-20"
      />
    </motion.div>
  );
};

export default SplashScreen;
