import type { LetterProps } from "../../../types";
import { motion, useTransform } from "framer-motion";

const ROTATION_PATTERNS = [
  [2, 1, -2],
  [-2, 1, 2],
  [3, 1, -3],
  [-3, 1, 3],
  [0.5, 1, -0.5],
];

const Letter = ({ index, scrollYProgress, title, description }: LetterProps) => {
  const step = 0.185;
  const start = 0.075 + index * step;
  const mid = start + step / 2;
  const end = start + step;

  // For opacity, the original had a slight offset for the 3rd value
  // L1: 0.1675 -> 0.21 (diff 0.0425)
  // L2: 0.3525 -> 0.40 (diff 0.0475)
  // We'll approximate the 3rd keyframe as mid + step/4
  const opacityThird = mid + step / 4;

  const y = useTransform(scrollYProgress, [start, mid, end], [0, -100, 0]);
  const opacity = useTransform(
    scrollYProgress,
    [start, mid, opacityThird, end],
    [0.8, 1, 1, 1]
  );
  const scale = useTransform(scrollYProgress, [start, mid, end], [0.9, 1, 1]);
  const zIndex = useTransform(scrollYProgress, [start, mid, end], [1, 20, 20]);
  
  const rotationValues = ROTATION_PATTERNS[index % ROTATION_PATTERNS.length];
  const rotate = useTransform(scrollYProgress, [start, mid, end], rotationValues);

  return (
    <motion.div
      style={{
        y,
        opacity,
        scale,
        zIndex,
        rotate,
      }}
      className="absolute bottom-2 w-64 h-42 md:w-72 md:h-52 bg-pink-100 p-4 text-center rounded-xl shadow-lg border border-gray-200 flex flex-col items-center justify-center"
    >
      <p className="font-kissing text-gray-700 text-xl md:text-2xl font-bold">
        {title}
      </p>
      <p className="font-kissing mt-2 text-xs md:text-sm text-gray-600 font-medium">
        {description}
      </p>
    </motion.div>
  );
};

export default Letter