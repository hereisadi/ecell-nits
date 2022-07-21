import React, { useEffect} from "react";
import "./Footerconstant.css";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { AiOutlineInstagram } from "react-icons/ai";
// import {BsArrowDownShort} from "react-icons/bs";
import Aos from "aos";
import "aos/dist/aos.css";
const Footerconstant = () => {

useEffect(() => {
    Aos.init({ duration: 2000});
}, []);

//     const [text, setText] = useState(false);
//   const changeText = () => {
//     if (window.scrollY >= 93) {
//       setText(true);
//     } else {
//       setText(false);
//     }
//   };
//   window.addEventListener("scroll", changeText);

  return (
    <>
      <div data-aos="fade-up" className="footer-c">
        <a href="https://www.facebook.com/ecell.nit.silchar/" rel="noreferrer" target="_blank" >
          <button className="fa-btn">
            {" "}
            <FaFacebookF className="fa-icon" size={40} />
          </button>
        </a>
        <a href="https://www.linkedin.com/in/e-cell-nit-silchar-848602154" rel="noreferrer" target="_blank" >
          <button className="li-btn">
            <FaLinkedinIn className="li-icon" size={40} />
          </button>
        </a>
        <a href="https://www.instagram.com/ecell.nitsilchar/" rel="noreferrer" target="_blank" >
          <button className="ig-btn">
            {" "}
            <AiOutlineInstagram className="ig-icon" size={40} />
          </button>
        </a>
      </div>

      <div className="register-c">
            <a href="https://www.facebook.com/ecell.nit.silchar/" rel="noreferrer" target="_blank"><h1 className="reg-c-text" >Register Now</h1></a>
      </div>
    </>
  );
};

export default Footerconstant;
