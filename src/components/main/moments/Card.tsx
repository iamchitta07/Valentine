import type { CardProps } from "../../../types";
import { memo } from "react";

const Card = ({ image, title, description }: CardProps) => {
  return (
    <div className="absolute inset-0 backface-hidden overflow-hidden w-full h-full rounded-xl shadow-2xl">
      <img src={image} alt="" className="object-cover w-full h-full" />
      <div className="w-full bg-[#F3EAE5]/40 absolute bottom-0 px-2 pb-2">
        <div className="text-[#111111] font-medium text-md font-bokul text-center">{title}</div>
        <div className=" text-[#290000] font-medium text-[10px] font-bokul text-center">
          {description}
        </div>
      </div>
    </div>
  );
};

export default memo(Card);
