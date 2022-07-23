import React, { useEffect } from "react";
import "./home.css";
import { TabTitle } from "../Utils/Genfn";
import Hometop from "../Hometop";
import { Link } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
import ReadMoreEmp from "../ReadMoreEmp";
import ReadMoreSrijan from "../ReadMoreSrijan";
import ReadMoreBech from "../ReadMoreBech";
import ReadMoreTech from "../ReadMoreTech";

const Home = () => {
  TabTitle("E-Cell");
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);
  return (
    <>
      <div data-aos="fade-up">
        <Hometop />
      </div>

      <div data-aos="flip-right" className="event-highlights">
        <h1>Event Highlights</h1>
      </div>
      <div className="srijan-re">
        <center>
          <img src="./img/EVENT__IMAGE.jpeg" alt="Event_image" />
        </center>
        <div className="srijan-re-cont">
          <h1>Srijan2.0_/</h1>
          <p>
            SRIJAN is the National Innovation and Entrepreneurship Summit
            organized by E Cell NIT Silchar. It is a unique initiative to
            motivate and educate people about entrepreneurship and to provide a
            meeting ground for Corporate experts and young budding entrepreneurs
            from NIT Silchar as well as several distinguished institutions
            across the country.
          </p>
          <ReadMoreSrijan />
        </div>
      </div>

      <div className="srijan-re">
        <center>
          <img src="./img/photO1.jpg" alt="Event_image" />
        </center>
        <div className="srijan-re-cont">
          <h1>Empressario_/</h1>
          <p>
            An annual business module that includes a variety of inclusive
            contests ranging from designing creative taglines to innovative
            Business ideas like convincing someone to buy even something
            trivial.
          </p>
          <ReadMoreEmp />
        </div>
      </div>

      <div className="srijan-re">
        <center>
          <img src="./img/img-5.jpg" alt="Event_image" />
        </center>
        <div className="srijan-re-cont">
          <h1>Bechkedikhao_/</h1>
          <p>
            Bech Ke Dikhao is an event where one can get experience and refine
            their selling ability. It requires you to compete with others to
            sell any given product to the general public.
          </p>
          <ReadMoreBech />
        </div>
      </div>

      <div className="srijan-re">
        <center>
          <img
            src="./img/WhatsApp Image 2022-07-20 at 10.14.14 PM.jpeg"
            alt="Event_image"
          />
        </center>
        <div className="srijan-re-cont">
          <h1>Tecnoesis_/</h1>
          <p>
            Tecnoesis is NIT Silchar's yearly techno-management festival.
            Tecnoesis began as a venue for the student community to develop and
            demonstrate their technological prowess.
          </p>
          <ReadMoreTech />
        </div>
      </div>

      <div className="gallery-cont">
        <div className="gallery-cont-heading">
          <h1>Gallery</h1>
        </div>
        <div className="gallery">
          <div className="img-1">
            <img src="./img/img-1.jpg" alt="" />
          </div>
          <div className="img-2">
            <img src="./img/img-2.jpg" alt="" />
          </div>
          <div className="img-3">
            <img src="./img/img-3.jpg" alt="" />
          </div>
          <div className="img-4">
            <img src="./img/img-4.jpg" alt="" />
          </div>
          <div className="img-5">
            <img src="./img/img-5.jpg" alt="" />
          </div>
          <div className="img-6">
            <img src="./img/img-6.jpg" alt="" />
          </div>
          <div className="img-7">
            <img src="./img/img-7.jpg" alt="" />
          </div>
        </div>
        <Link className="linkgalllery" to={"/gallery"}>
          <button className="hometogallerybtn">See More</button>
        </Link>
      </div>
    </>
  );
};
export default Home;
