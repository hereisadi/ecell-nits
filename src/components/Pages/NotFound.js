import React, {useEffect} from "react";
import { Link } from "react-router-dom";
import "./NotFound.css";
import { TabTitle } from "../Utils/Genfn";
import Aos from "aos";
import "aos/dist/aos.css";
const NotFound = () => {
  TabTitle("404 Not Found");
  useEffect(() => {
    Aos.init({ duration: 2000});
}, []);
  return (
    <>
      <div data-aos="fade-down" data-aos-duration="1500" className="not-found">
        <div className="no-existence">
          <h1 className="no-existence1"> 404</h1>
        </div>


        <div className="not-found-text">
          <h1>Whoops, page not found!</h1>
          <h2>We can’t seem to find the page you’re looking for :(</h2>
        </div>
        
        <Link className="tohome" to="/"><button className="notfound-tohome"><p>Go To Homepage</p></button></Link>
      </div>


      
    </>
  );
};
export default NotFound;
