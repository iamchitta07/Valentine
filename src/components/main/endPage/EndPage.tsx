import { useRef, useState, useEffect } from "react";
import { cards } from "../../../constants";
import DraggableCard from "./DraggableCard";

const EndPage = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [timeTogether, setTimeTogether] = useState<string>("");

  useEffect(() => {
    const startDate = new Date("2022-08-17T18:00:00");

    const updateTimer = () => {
      const now = new Date();
      const diff = now.getTime() - startDate.getTime();

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

      setTimeTogether(`${days} Days : ${hours} Hours : ${minutes} Minutes`);
    };

    updateTimer();
    const interval = setInterval(updateTimer, 60000); // Update every minute

    return () => clearInterval(interval);
  }, []);

  return (
    <div ref={containerRef} className="min-h-screen w-screen bg-pink-200 overflow-hidden relative flex items-center justify-center flex-col">
      <div className="absolute inset-0 flex flex-col items-center justify-center z-0 pointer-events-none select-none opacity-50">
         <h2 className="font-floraison text-6xl md:text-4xl text-pink-600 mb-4">Together We Spent</h2>
         <h1 className="text-3xl md:text-6xl text-pink-600 font-bold text-center px-4 font-floraison z-2">
            {timeTogether}
         </h1>
         <h2><span className="underline font-floraison text-red-700 text-2xl">Happy Valentine's Day, Babeeee</span><span className="no-underline text-xl"> 💝</span></h2>
      </div>

      <div className="absolute top-12 z-2  pointer-events-none select-none">
         <h1 className="font-floraison text-6xl font-bold text-pink-800 text-center">Priceless Moments</h1>
         <p className="font-floraison text-2xl font-bold text-pink-700 text-center">Drag the Images for Surprise</p>
      </div>
      {cards.map((card, index) => (
        <DraggableCard key={index} card={card} containerRef={containerRef} />
      ))}
    </div>
  )
}

export default EndPage;