import React from "react";
import "./Loading.css";

const Loading = () => {
  return (
    <div>
      <div className="dotdotload">
        <div className="loading-8">
          {/* <div className="load-main">
            <h1>Loading</h1>
          </div> */}
          {/* <center><img src="./img/ecell-logo-bw2.png" alt="Ecell NITS" /></center> */}
          <center><img src="./img/blackmarble.png" alt="Ecell NITS" /></center>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  );
};

export default Loading;
