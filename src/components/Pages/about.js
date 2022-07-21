import React from "react";
import "./about.css";
import Underline from "../Underline";
import { TabTitle } from "../Utils/Genfn";
const about = () => {
  TabTitle("About | ECELL");
  return (
    <>
      <div className="about-main">
        <div className="about-header">
          <ul className="about-headertxt">ABOUT US</ul>
        </div>
        <Underline />
        <div className="about-main-c">
          <img data-aos="fade-left" src="./img/about-us2.png" alt="About-Us" />
          <h1 data-aos="fade-right">
            A great man once said “Don’t worry about being successful but work
            towards being significant and the success will naturally follow”.
            We, here at E-Cell NIT Silchar, stand by this and labour to foster
            and motivate an entrepreneurial environment among the students at
            campus. We push and promote the urge to create ideas and ventures
            that will be tomorrow’s reality.
          </h1>
        </div>
      </div>

      <div className="timeline-o">
        <h1>Timeline</h1>
        <div className="time-1">
          <img src="./img/new_orientation.png" alt="Orientation" />
        </div>
        <div className="time-2">
          <img src="./img/Website-Srijan.png" alt="Srijan" />
        </div>
        <div className="time-3">
          <img
            src="./img/Website-TecnoEmpressario-01.png"
            alt="TecnoEmpressario"
          />
        </div>
        <div className="time-4">
          <img src="./img/incubation_new.png" alt="Incubation-new" />
        </div>
      </div>
    </>
  );
};

export default about;
