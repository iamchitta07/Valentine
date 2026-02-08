import { motion } from "framer-motion";
import FloatingHearts from "../home/FloatingHearts";

type SmokeyTextProps = {
  text: string;
  className?: string;
};

const HEART_EMOJIS = ["❤️"];
export default function SmokeyText({ text }: SmokeyTextProps) {
  const paras = text.split("\n");

  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.4, // delay between words
      },
    },
  };

  const wordAnimation = {
    hidden: {
      opacity: 0,
      y: 12,
      filter: "blur(6px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="h-screen bg-pink-200 w-screen flex items-center justify-center">
      <FloatingHearts HEART_EMOJIS={HEART_EMOJIS} />
      <motion.div className="" variants={container} initial="hidden" animate="visible">
        <h1 className="font-bokul text-3xl font-bold text-center">মোর চিত্ত</h1>
        <h1 className="font-bokul text-xl text-center mb-3">~ তোমার প্রিয় ~</h1>
        {paras.map((para, idx) => {
          const words = para.split(" ");
          return (
            <p key={idx} className="text-center">
              {words.map((word, index) => (
                <motion.span key={index} variants={wordAnimation} className="mr-1 font-bokul">
                  {word}
                </motion.span>
              ))}
            </p>
          );
        })}
      </motion.div>
    </div>
  );
}
