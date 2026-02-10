import Home from "./components/home/Home";
import { useState } from "react";
import Main from "./components/main/Main";
// import Envelop from "./components/main/Envelop/Envelop";

const App = () => {
  const [isMain, setIsMain] = useState<boolean>(false);
  const moveToHome = () => {
    setIsMain(true);
  }
  return <>{isMain ? <Main /> : <Home moveToHome={moveToHome} />}</>;
  // return (
  //   <Envelop />
  // )
};

export default App;
