import React, { useEffect } from "react";
import "./Teammem.css";
import { SeniorDev, coreT, Developerjr } from "./Dataset";
import { FaLinkedinIn } from "react-icons/fa";
import Underline2 from "./Underline2";
import Aos from "aos";
import "aos/dist/aos.css";
import { FaFacebookF } from "react-icons/fa";
const Teammem = () => {
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);
  return (
    <>
      <div data-aos="fade-down" className="team-head5">
        <h1 className="team-head-h1">Core Team</h1>
      </div>
      <div
        data-aos="fade-up"
        data-aos-easing="linear"
        data-aos-duration="1700"
        className="core-team-cont"
      >
        {coreT.map((item) => {
          return (
            <>
              <div key={item.id} className="core-team">
                <div className="img-temp">
                  <img data-aos="flip-down" src={item.img} alt={item.alt} />
                </div>

                <div className="on-hover-cont">
                  <h1>{item.name}</h1>
                  <div className="social-media social-media-temp">
                    <a href={item.linkedin} rel="noreferrer" target="_blank">
                      <button className="btn-icon2">
                        <FaLinkedinIn className="icon-color1" size={25} />
                      </button>
                    </a>
                    <a href={item.fb} rel="noreferrer" target="_blank">
                      <button className="btn-icon3">
                        <FaFacebookF className="icon-color2" size={25} />
                      </button>
                    </a>
                  </div>
                  <h2>{item.post}</h2>
                </div>
              </div>
            </>
          );
        })}
      </div>

      <div data-aos="fade-down" className="team-head5">
        <h1 className="team-head-h1">Senior Developer</h1>
      </div>
      <div
        data-aos="fade-up"
        data-aos-easing="linear"
        data-aos-duration="1700"
        className="team-stats-card5"
      >
        {SeniorDev.map((item) => {
          return (
            <div key={item.id} className="team-stats5">
              <div>
                <center>
                  <img data-aos="flip-down" className="team-img5" src={item.imgsrc} alt="" />
                </center>
                <Underline2 />
              </div>

              <div className="social-media">
                <a href={item.linkedin} rel="noreferrer" target="_blank">
                  <button className="btn-icon2">
                    <FaLinkedinIn className="icon-color1" size={25} />
                  </button>
                </a>

                <a href={item.fb} rel="noreferrer" target="_blank">
                  {item.icon0}
                </a>
              </div>

              <h1>{item.name}</h1>
            </div>
          );
        })}
      </div>

      <div data-aos="fade-down" className="team-head5">
        <h1 className="team-head-h1">Developer Member</h1>
      </div>
      <div
        data-aos="fade-up"
        data-aos-easing="linear"
        data-aos-duration="1700"
        className="team-stats-card5"
      >
        {Developerjr.map((item) => {
          return (
            <div key={item.id} className="team-stats5">
              <div>
                <center>
                  <img data-aos="flip-down" className="team-img5" src={item.imgsrc} alt="" />
                </center>
                <Underline2 />
              </div>

              <div className="social-media">
                <a href={item.linkedin} rel="noreferrer" target="_blank">
                  <button className="btn-icon2">
                    <FaLinkedinIn className="icon-color1" size={25} />
                  </button>
                </a>

                <a href={item.fb} rel="noreferrer" target="_blank">
                  {item.icon0}
                </a>
              </div>

              <h1>{item.name}</h1>
            </div>
          );
        })}
      </div>
    </>
  );
};
export default Teammem;
