import React from "react";
import "./home.css";
import Slider from "../Slider/Slider";
import { TabTitle } from "../Utils/Genfn";
import Timer from "../Timer";
import Hometop from "../Hometop";
import ArticleHome2 from "../ArticleHome2";

const home = () => {
  TabTitle("E-Cell");
  return (
    <>
      <div>
        <Hometop />
        <Timer />
      </div>
      <br />
      <br />
      
      <div className="glimpses-section">
        <div className="glimpses">
          <h1>Glimpses From Past Conferences</h1>
        </div>
        <Slider />
      </div>
      <ArticleHome2 />
      <br />
    </>
  );
};
export default home;
