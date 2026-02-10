import SmokeyText from "./SmokeyText";
import { loveText } from "../../constants";
import AnimatedCards from "./moments/Moments";
import Envelop from "./envelop/Envelop";
import FloatingHearts from "../home/FloatingHearts";
import EndPage from "./endPage/EndPage";

const Main = () => {
  return (
    <div className="w-screen">
      <FloatingHearts />
      <SmokeyText text={loveText} />
      <AnimatedCards />
      <Envelop />
      <EndPage />
    </div>
  );
};

export default Main;
