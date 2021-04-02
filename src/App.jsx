import { useState, useEffect } from "react";
import Home from "./containers/Home";
import JsonData from "./data/Textos.json";
import SmoothScroll from "smooth-scroll";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return <Home landingPageData={landingPageData} />;
};

export default App;
