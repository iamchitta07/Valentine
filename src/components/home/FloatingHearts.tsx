import { motion } from "framer-motion";
import { useMemo } from "react";

type Heart = {
  id: number;
  left: number;
  size: number;
  duration: number;
  delay: number;
  blur: number;
  emoji: string;
};

const HEART_COUNT = 25;
export default function FloatingHearts({HEART_EMOJIS}: {HEART_EMOJIS: string[]}) {
  const hearts = useMemo<Heart[]>(() => {
    return Array.from({ length: HEART_COUNT }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      size: 16 + Math.random() * 24,
      duration: 6 + Math.random() * 6,
      delay: Math.random() * 5,
      blur: Math.random() * 2, // depth blur
      emoji: HEART_EMOJIS[Math.floor(Math.random() * HEART_EMOJIS.length)],
    }));
  }, []);

  return (
    <div className="z-1 fixed inset-0 overflow-hidden pointer-events-none">
      {hearts.map((heart) => (
        <motion.div
          key={heart.id}
          initial={{ y: "100vh", opacity: 0 }}
          animate={{ y: "-10vh", x: ["0%", "10%", "-10%", "0%"], opacity: 1 }}
          transition={{
            duration: heart.duration,
            delay: heart.delay,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut",
          }}
          style={{
            position: "absolute",
            left: `${heart.left}%`,
            fontSize: `${heart.size}px`,
            filter: `blur(${heart.blur}px)`,
          }}
        >
          {heart.emoji}
        </motion.div>
      ))}
    </div>
  );
}
