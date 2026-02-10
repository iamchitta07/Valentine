import {MotionValue} from "framer-motion";

export interface Coordinate {
    x: number;
    y: number;
}

export interface CardProps {
    image: string;
    title: string;
    description: string;
    backCard: string;
}

export interface CardMsg {
    title: string;
    description: string;
}
export interface LetterProps {
  index: number;
  scrollYProgress: MotionValue<number>;
  title: string;
  description: string;
}

export interface SmokeyTextProps {
  text: string;
  className?: string;
}