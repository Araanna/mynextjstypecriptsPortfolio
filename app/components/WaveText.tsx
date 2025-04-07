import { motion, useAnimation } from "framer-motion";

import { useEffect } from "react";

// Helper component for sine wave effect
const WaveWord = ({ children, delay }: { children: React.ReactNode; delay: number }) => {
  const controls = useAnimation();

  useEffect(() => {
    const loop = async () => {
      while (true) {
        await controls.start({
          y: [0, -10, 0, 10, 0], // Sine wave effect
          transition: {
            duration: 2,
            ease: "easeInOut",
            delay, // Delay to stagger the words
          },
        });
      }
    };
    loop();
  }, [controls, delay]);

  return (
    <motion.span animate={controls} className="inline-block px-1">
      {children}
    </motion.span>
  );
};
