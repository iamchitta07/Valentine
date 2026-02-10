import type { CardProps } from "../../../types";

const Card = ({ image, title, description }: CardProps) => {
  return (
    <div className="absolute inset-0 backface-hidden overflow-hidden w-full h-full rounded-xl shadow-2xl">
      <img src={image} alt="" className="object-cover w-full h-full" />
      <div className="w-full bg-[#dadada]/60 absolute bottom-0 px-2 pb-2">
        <div className="text-black font-bold text-md font-bokul text-center">{title}</div>
        <div className=" text-black font-bold text-[10px] font-bokul text-center">
          {description}
        </div>
      </div>
    </div>
  );
};

export default Card;
