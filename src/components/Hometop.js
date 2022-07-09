import React from "react";
import "./Hometop.css";
import { Link } from "react-router-dom";
// import { Typewriter } from "react-simple-typewriter";
import TypeWriterEffect from "react-typewriter-effect";


const Hometop = () => {
  return (
    <div>
      <div className="hometop-main">
        <div className="home-text-rec">
          <TypeWriterEffect
            textStyle={{
              fontFamily: "Anton",
              color: "#3F3D56",
            }}
            startDelay={1000}
            cursorColor="#3F3D56"
            multiText={[
              "Welcome To Entrepreneurship Cell Nit Silchar!",
              "Virtue Self-Dependency Willingness!",
              "A Unique Initiative by NIT Silchar!",
              "For the students, By the students!",
            ]}
            loop={true}
            nextTextDelay={1000}
            typeSpeed={150}
          />
        </div>
      </div>







      <div className="hometop-apply">
        <div className="hometop-reg">
          <ul style={{ color: "white" }}>
            Round 1 Registrations for{" "}
            <strong style={{ color: "rgb(45, 210, 255)" }}>
              Junior Mun 2022
            </strong>{" "}
            and Application for{" "}
            <strong style={{ color: "rgb(45, 210, 255)" }}>
              Executive Board
            </strong>{" "}
            is now open!
          </ul>
        </div>
        <div className="hometop-link1">
          <Link to={"/apply"}>
            <button className="hometop-link1btn">Register Now</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hometop;
