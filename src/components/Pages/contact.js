import React from "react";
import "./contact.css";
import { TabTitle } from "../Utils/Genfn";
import { companyvisi } from "../Dataset";

const contact = () => {
  TabTitle("ECELL Contact | ECELL");
  return (
    <>
      <div className="contact-top"></div>
      <div className="contact-txt">
        <h1>Any Company. Startup Or Mnc. Let's Collaborate.</h1>
      </div>
      <div className="contact-main">
        <h1>More than 20+ companies collaborated with us</h1>
      </div>
      <div className="company-vi">
        {companyvisi.map((item) => {
          return (
            <div key={item.id} className="company-img">
              <img src={item.img} alt={item.alt} />
            </div>
          );
        })}
      </div>

     <div className="contact-links">
      <h1>Follow Us On Facebook, Linkedin, & Instagram. <br/> Or Visit Nit Silchar Campus For More Info.</h1>
     </div>
    </>
  );
};

export default contact;
