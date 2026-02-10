import { motion } from "framer-motion";
import { useMemo } from "react";

type Heart = {
  id: number;
  left: number;
  size: number;
  duration: number;
  delay: number;
};

const HEART_COUNT = 25;

export default function FloatingHeartsBackground() {
  const hearts = useMemo<Heart[]>(() => {
    return Array.from({ length: HEART_COUNT }).map((_, i) => ({
      id: i,
      left: Math.random() * 100, // %
      size: 18 + Math.random() * 20, // px
      duration: 6 + Math.random() * 6, // seconds
      delay: Math.random() * 5,
    }));
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-1">
      {hearts.map((heart) => (
        <motion.div
          key={heart.id}
          initial={{ y: "100vh", opacity: 0 }}
          animate={{ y: "-10vh", opacity: 1 }}
          transition={{
            duration: heart.duration,
            delay: heart.delay,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut",
          }}
          style={{
            left: `${heart.left}%`,
            fontSize: heart.size,
          }}
          className="absolute"
        >
          ❤️
        </motion.div>
      ))}
    </div>
  );
}
