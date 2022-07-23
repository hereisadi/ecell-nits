import React, { useEffect } from "react";
import "./team.css";
import { alumni } from "./Dataset";
import { facultycont } from "./Dataset";
import { TabTitle } from "./Utils/Genfn";
import { BsChevronDown } from "react-icons/bs";
import Aos from "aos";
import "aos/dist/aos.css";
import Teammem from "./Teammem";

const Team = () => {
  TabTitle("ECELL Team | ECELL");
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <>
      <div data-aos="fade-up" data-aos-duration="2500" className="team-main">
        {alumni.map((item) => {
          return (
            <div key={item.id} className="alumni-cont">
              <div className="img-holder-cont">
                <img src={item.img} alt={item.alt} />
              </div>
            </div>
          );
        })}
      </div>

      <div data-aos="fade-up" data-aos-duration="2500" className="team-head">
        <h1>THE TEAM</h1>
        <h2>E-CELL NIT SILCHAR</h2>
        <center>
          <h2>2021-22</h2>
        </center>{" "}
        <br />
        <center>
          {" "}
          <strong>
            <BsChevronDown className="chevron-down-icon" size={45} />{" "}
          </strong>
        </center>
      </div>

      <div className="team-meet">
        <h1>MEET OUR TEAM</h1>
      </div>

      <div data-aos="fade-down" data-aos-duration="2500" className="team-head5">
        <h1 className="team-head-h1">Faculty Members</h1>
      </div>
      <div className="faculty-cont">
        {facultycont.map((item) => {
          return (
            <div
              data-aos="fade-up"
              data-aos-duration="3000"
              key={item.id}
              className="faculty-img-holder"
            >
              <img src={item.img} alt={item.alt} />
              <center>
                <h1>{item.alt}</h1>
              </center>
              <center>
                <h2>{item.post}</h2>
              </center>
            </div>
          );
        })}
      </div>
      <Teammem />
    </>
  );
};

export default Team;
