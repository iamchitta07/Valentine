import { motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { cards } from "../../../constants";

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
      </div>

      <h1 className="absolute top-20 font-floraison text-6xl font-bold z-2 text-pink-900 pointer-events-none select-none">
         Priceless Moments
      </h1>
      {cards.slice(0, 7).map((card, index) => (
        <motion.div
          key={index}
          drag
          dragConstraints={containerRef}
          dragElastic={0.1}
          whileDrag={{ scale: 1.1, cursor: "grabbing", zIndex: 100 }}
          whileTap={{ scale: 1.05, cursor: "grabbing" }}
          initial={{ 
            x: Math.random() * 100 - 70, 
            y: Math.random() * 150 - 50, 
            rotate: Math.random() * 20 - 10 
          }}
          className="absolute w-46 h-64 bg-white p-2 rounded-xl shadow-2xl cursor-grab flex flex-col items-center gap-2 hover:shadow-3xl transition-shadow z-10"
        >
          <div className="w-full h-62 overflow-hidden rounded-lg pointer-events-none select-none">
            <img src={card.image} alt={card.title} className="w-full h-full object-cover" draggable={false} />
          </div>
        </motion.div>
      ))}
    </div>
  )
}

export default EndPage;