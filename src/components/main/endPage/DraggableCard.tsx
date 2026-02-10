import type { DraggableCardProps } from "../../../types";
import { motion } from "framer-motion";
import { memo } from "react";

const DraggableCard = memo(({ card, containerRef }: DraggableCardProps) => {
    return (
        <motion.div
            drag
            dragConstraints={containerRef}
            dragElastic={0.1}
            whileDrag={{ scale: 1.1, cursor: "grabbing", zIndex: 100 }}
            whileTap={{ scale: 1.05, cursor: "grabbing" }}
            initial={{
                x: Math.random() * 100 - 70,
                y: Math.random() * 150 - 50,
                rotate: Math.random() * 20 - 10,
            }}
            className="absolute w-46 h-64 bg-white p-2 rounded-xl shadow-2xl cursor-grab flex flex-col items-center gap-2 hover:shadow-3xl transition-shadow z-10"
        >
            <div className="w-full h-62 overflow-hidden rounded-lg pointer-events-none select-none">
                <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover"
                    draggable={false}
                />
            </div>
        </motion.div>
    );
});

export default DraggableCard;