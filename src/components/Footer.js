import React, { useEffect } from "react";
import "./Footer.css";

import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { AiOutlineInstagram } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { BsTelephone } from "react-icons/bs";
// import { IconContext } from "react-icons";
import { FaUserTie } from "react-icons/fa";
import Aos from "aos";
import "aos/dist/aos.css";

const Footer = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div data-aos="fade-down" data-aos-duration="500" className="Footer-main">
      <div className="footer-below">
        <div className="footer-pic">
          <a href="/" className="footer-heading">
            <img src="./img/Title-logo.png" alt="Title-logo" />
          </a>

          <strong>
            {" "}
            <h1 className="comp-name">E-CELL</h1>
            <h1 className="int-name">NIT Silchar</h1>
          </strong>
        </div>

        <div className="footer-adja">
          <div className="add-type">
            <FaUserTie className="tie" size={20} />
            <h5>Start-Up Centre</h5>
          </div>
          <div className="add-type">
            <a
              href="https://www.google.com/maps/place/National+Institute+Of+Technology,+Silchar/@24.7577144,92.7901042,17z/data=!3m1!4b1!4m5!3m4!1s0x374e49dcb63bae9b:0x81efa836714a289b!8m2!3d24.7577144!4d92.7922929"
              target="_#blank"
              rel="norefferer"
            >
              <GoLocation className="tie" size={20} />{" "}
            </a>
            <a
              href="https://www.google.com/maps/place/National+Institute+Of+Technology,+Silchar/@24.7577144,92.7901042,17z/data=!3m1!4b1!4m5!3m4!1s0x374e49dcb63bae9b:0x81efa836714a289b!8m2!3d24.7577144!4d92.7922929"
              target="_#blank"
              rel="norefferer"
            >
              <h5>NIT Silchar, Silchar, Assam, India,788010</h5>{" "}
            </a>
          </div>
          <div className="add-type">
            <BsTelephone className="tie" size={20} />
            <a href="tel:+916263943064">+916263943064</a>
          </div>
        </div>

        <div className="footer-below1">
          <h2>Be Social</h2>
          {/* <h1>....</h1> */}

          <div className="social-media2">
            <div className="fb-holder">
              <a
                href="https://www.facebook.com/ecell.nit.silchar/"
                rel="noreferrer"
                target="_blank"
              >
                <button className="fb-b-b">
                  <FaFacebookF className="fb-b-1" size={20} />
                </button>
              </a>
              <h3>Facebook</h3>
            </div>

            <div className="fb-holder">
              <a
                href="https://www.instagram.com/ecell.nitsilchar/"
                rel="noreferrer"
                target="_blank"
              >
                <button className="fb-b-b">
                  <AiOutlineInstagram className="fb-b-1" size={20} />
                </button>
              </a>
              <h3>Instagram</h3>
            </div>

            <div className="fb-holder">
              <a
                href="https://www.linkedin.com/in/e-cell-nit-silchar-848602154"
                rel="noreferrer"
                target="_blank"
              >
                <button className="fb-b-b">
                  <FaLinkedinIn className="fb-b-1" size={20} />
                </button>
              </a>
              <h3>LinkedIn</h3>
            </div>
          </div>
        </div>

        <div className="footer-below2">
          <h1>Subscribe</h1>
          
          <h3>Keep yourself updated. Subscribe to our newsletter</h3>
        </div>
      </div>
      <div className="copyright">
        <h4>
          All Rights Reserved ©{" "}
          <a
            href="https://github.com/hereisadi"
            rel="noreferrer"
            target="_blank"
          >
            hereisadi
          </a>
        </h4>
      </div>
    </div>
  );
};

export default Footer;
