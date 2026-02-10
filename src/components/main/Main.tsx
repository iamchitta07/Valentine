import SmokeyText from "./SmokeyText";
import { loveText } from "../../constants";
import AnimatedCards from "./moments/Moments";
import Envelop from "./envelop/Envelop";
import FloatingHearts from "../home/FloatingHearts";
import EndPage from "./endPage/EndPage";
import Footer from "./endPage/Footer";

const Main = () => {
  return (
    <div className="w-screen">
      <FloatingHearts />
      <SmokeyText text={loveText} />
      <AnimatedCards />
      <Envelop />
      <EndPage />
      <Footer />
    </div>
  );
};

export default Main;
