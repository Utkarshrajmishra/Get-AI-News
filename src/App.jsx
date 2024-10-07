import "./App.css";
import AnimatedCursor from "react-animated-cursor";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import News from "./components/News/News";
import { BiMenu } from "react-icons/bi";
import React, { useState, useEffect } from "react";
function App() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      {width >= 756 ? (
        <AnimatedCursor innerSize={8} outerSize={12} color="80, 200, 120" />
      ) : (
        ''
      )}
      <section className="main">
        <section className="hero ">
          <div className="flex px-10 justify-between items-center ">
            <BiMenu fontSize={35} color="white" />
            <Header />
          </div>
          <div className="text-center h-[100%]">
            <Home />
          </div>
        </section>
        <section className="bg-black">
          <News />
        </section>
      </section>
    </>
  );
}

export default App;
