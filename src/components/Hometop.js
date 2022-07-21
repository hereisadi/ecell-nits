import React from "react";
import "./Hometop.css";
import Breaking2 from "./Pages/Breaking2";
// import Aos from "aos";
import "aos/dist/aos.css";
const Hometop = () => {
  // const [loading2, setLoading2] = useState(false);
  // useEffect(() => {
  //   setLoading2(true);
  //   setTimeout(() => {
  //     setLoading2(false);
  //   }, 50000);
  // }, []);

//   useEffect(() => {
//     Aos.init({ duration: 2000});
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
