import { nickNames, noTexts, GIFs } from "../../constants";
import { Typewriter } from "react-simple-typewriter";
import { useState, useRef } from "react";
import type { Coordinate } from "../../types";
import { motion } from "framer-motion";
import FloatingHearts from "./FloatingHearts";

const Home = ({ moveToHome }: { moveToHome: () => void }) => {
  const [noButtonPos, setNoButtonPos] = useState<Coordinate>({ x: 0, y: 0 });
  const [yesScale, setYesScale] = useState<number>(1);
  const yesButtonRef = useRef<HTMLButtonElement>(null);
  const noButtonRef = useRef<HTMLButtonElement>(null);
  const [noText, setNoText] = useState<number>(0);
  const handleNoClicks = () => {
    setNoText((prev) => prev + 1);
    setYesScale((prev) => prev * 1.05);

    if (!yesButtonRef.current || !noButtonRef.current) return;
    const yesRect = yesButtonRef.current.getBoundingClientRect();
    const noRect = noButtonRef.current.getBoundingClientRect();
    const padding = 20;
    const maxX = window.innerWidth - noRect.width - padding;
    const maxY = window.innerHeight - noRect.height - padding;

    let newX = 0;
    let newY = 0;
    let isOverlapping = true;

    while (isOverlapping) {
      newX = Math.random() * maxX;
      newY = Math.random() * maxY;

      const buffer = 50;
      const overlapsX =
        newX + noRect.width > yesRect.left - buffer && newX < yesRect.right + buffer;
      const overlapsY =
        newY + noRect.height > yesRect.top - buffer && newY < yesRect.bottom + buffer;

      if (!(overlapsX && overlapsY)) {
        isOverlapping = false;
      }
    }
    const currentRect = noButtonRef.current.getBoundingClientRect();
    const offsetX = newX - (currentRect.left - noButtonPos.x);
    const offsetY = newY - (currentRect.top - noButtonPos.y);

    setNoButtonPos({ x: offsetX, y: offsetY });
  };
  return (
    <div className="animate-bg-gradient w-screen min-h-screen ">
      <FloatingHearts />
      <div className="w-screen min-h-screen flex flex-col items-center justify-center">
        <div className="h-40 w-40 z-2">
          <img src={GIFs[noText]} alt="GIFs" />
        </div>
        <div className="bg-white/50 rounded-2xl outline-1 outline-[#FFC0CB] shadow-xl/30 shadow-[#FF2E51]/70 p-4 w-70 h-40 flex flex-col gap-5 z-2">
          <h1 className="text-center font-kissing text-xl">
            Wil you be my <b className="text-[#FF2E51]">Valentine ? </b>
            <p>
              My{" "}
              <span style={{ color: "#FB64B7" }}>
                <Typewriter
                  words={nickNames}
                  typeSpeed={100}
                  deleteSpeed={80}
                  cursor
                  loop={false}
                  cursorColor="#D20163"
                />
              </span>
            </p>
          </h1>
          <div
            className={`relative flex items-center justify-center gap-5 ${!noText ? "mt-5" : ""}`}
          >
            <motion.button
              ref={yesButtonRef}
              animate={{ scale: yesScale }}
              transition={{ type: "spring", stiffness: 300 }}
              className={` ${!noText ? "absolute left-10" : ""} font-kissing bg-pink-300 px-4 py-1 rounded-md`}
              onClick={moveToHome}
            >
              {noText !== noTexts.length ? "Yes 🥹!" : "I know u love me! 😁"}
            </motion.button>
            {noText !== noTexts.length && (
              <motion.button
                ref={noButtonRef}
                onClick={handleNoClicks}
                animate={{ x: noButtonPos.x, y: noButtonPos.y }}
                transition={{ type: "spring", stiffness: 150, damping: 15 }}
                onMouseEnter={handleNoClicks}
                className="font-kissing bg-pink-300 px-4 py-1 rounded-md absolute right-10"
              >
                {noTexts[noText]}
              </motion.button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
