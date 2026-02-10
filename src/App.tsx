import Home from "./components/home/Home";
import { useState } from "react";
import Main from "./components/main/Main";

const App = () => {
  const [isMain, setIsMain] = useState<boolean>(false);
  const moveToHome = () => {
    setIsMain(true);
  };
  return <>{isMain ? <Main /> : <Home moveToHome={moveToHome} />}</>;
};

export default App;
