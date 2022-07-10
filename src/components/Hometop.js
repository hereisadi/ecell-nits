import React from "react";
import "./Hometop.css";
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
    </div>
  );
};

export default Hometop;
