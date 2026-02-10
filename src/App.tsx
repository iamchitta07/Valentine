import { useState, lazy, Suspense } from "react";
const Home = lazy(() => import("./components/home/Home"));
const Main = lazy(() => import("./components/main/Main"));

const App = () => {
  const [isMain, setIsMain] = useState<boolean>(false);
  const moveToHome = () => {
    setIsMain(true);
  };
  return (
    <Suspense fallback={<div className="h-screen w-screen bg-pink-200 flex items-center justify-center font-bold text-2xl text-pink-600 font-floraison">Loading...</div>}>
      {isMain ? <Main /> : <Home moveToHome={moveToHome} />}
    </Suspense>
  );
};

export default App;
