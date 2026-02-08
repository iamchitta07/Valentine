import SmokeyText from "./SmokeyText";
import { loveText } from "../../constants";
import AnimatedCards from "./Content";

const Main = () => {
  return (
    <div className="w-screen">
      <SmokeyText text={loveText} />
      <AnimatedCards />
    </div>
  );
};

export default Main;
