import React from "react";
import "./Hometop.css";
import { Link } from "react-router-dom";
import Breaking2 from "./Pages/Breaking2";







const Hometop = () => {
  // const [loading2, setLoading2] = useState(false);
  // useEffect(() => {
  //   setLoading2(true);
  //   setTimeout(() => {
  //     setLoading2(false);
  //   }, 50000);
  // }, []);

  return (
    <div>
      <div className="hometop-main">
        <Breaking2 />
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
