import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { cardMsg } from "../../../constants";
import Letter from "./Letter";

const Envelop = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Animation values for the envelope itself
  const flapZIndex = useTransform(scrollYProgress, [0, 0.08], [20, 1]);
  const flapRotate = useTransform(scrollYProgress, [0.03, 0.08], [0, 180]);

  const heartZIndex = useTransform(scrollYProgress, [0, 0.08], [20, 10]);
  const heartRotate = useTransform(scrollYProgress, [0, 0.03], [0, 60]);

  return (
    <div ref={containerRef} className="h-[600vh] w-full relative bg-pink-200">
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden z-2">
        {/* Envelop Container */}
        <div className="relative w-74 h-48 md:w-80 md:h-60 bg-pink-200 shadow-xl flex items-end justify-center perspective-1000 z-10">
          {/* Back of Envelope */}
          <div className="absolute inset-0 bg-pink-400 rounded-b-lg border-2 border-pink-500 z-0"></div>

          {/* Letters */}
          {cardMsg.map((msg, index) => (
            <Letter
              key={index}
              index={index}
              scrollYProgress={scrollYProgress}
              title={msg.title}
              description={msg.description}
            />
          ))}

          {/* Front of Envelope (Pocket) */}
          <div className="absolute bottom-0 left w-full h-full z-10 pointer-events-none">
            <svg
              className="absolute bottom-0 left-0 w-full h-full z-10 pointer-events-none"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
            >
              <path
                d="M0,100 L50,55 L100,100 Z"
                fill="#ec4899"
                stroke="#db2777"
                strokeWidth="1"
              />{" "}
              {/* Bottom flap */}
              <path
                d="M0,0 L0,100 L50,55 Z"
                fill="#f472b6"
                stroke="#db2777"
                strokeWidth="1"
              />{" "}
              {/* Left flap */}
              <path
                d="M100,0 L100,100 L50,55 Z"
                fill="#f472b6"
                stroke="#db2777"
                strokeWidth="1"
              />{" "}
              {/* Right flap */}
            </svg>
          </div>

          {/* Flap (The part that opens) */}
          <motion.div
            style={{ rotateX: flapRotate, zIndex: flapZIndex }}
            className="absolute top-0 w-full h-1/2 z-20 origin-top"
          >
            <svg
              className="w-full h-full overflow-visible"
              viewBox="0 0 100 50"
              preserveAspectRatio="none"
            >
              <path
                d="M0,0 L50,60 L100,0 Z"
                fill="#db2777"
                stroke="#be185d"
                strokeWidth="1"
              />
            </svg>
          </motion.div>
          <motion.div
            style={{ rotate: heartRotate, zIndex: heartZIndex }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 z-20 text-4xl"
          >
            ♥️
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Envelop;