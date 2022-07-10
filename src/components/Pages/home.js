import React, { useEffect } from "react";
import "./home.css";
import { TabTitle } from "../Utils/Genfn";
import Hometop from "../Hometop";
import Aos from "aos";
import "aos/dist/aos.css";
const Home = () => {
  TabTitle("E-Cell");
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <>
      <div data-aos="fade-up">
        <Hometop />
      </div>
      
    </>
  );
};
export default Home;
