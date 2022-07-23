import React, { useState } from "react";
import Allgalleryimge from "../Allgalleryimge";
import "./gallery.css";
import { TabTitle } from "../Utils/Genfn";
import Populargallery from "../Populargallery";
import Srijangallery from "../Srijangallery";
import Empressariogallery from "../Empressariogallery";
const Gallery = () => {
  const [active, setActive] = useState("All");
  TabTitle("ECELL Gallery | ECELL");
  return (
    <>
      <div className="gallerytop-main">
        <div className="home-ga-txt">
          <h1 className="home-ph">PHOTO</h1>
          <h1 className="home-ga">GALLERY .</h1>
        </div>
      </div>
      <div activeClassName="is-active-btn" className="btn-gal">
        <button onClick={() => setActive("All")}>All</button>
        <button onClick={() => setActive("Popular")}>Popular</button>
        <button onClick={() => setActive("Srijan")}>Srijan</button>
        <button onClick={() => setActive("Empressario")}>Empressario</button>
      </div>
      {active === "All" && <Allgalleryimge />}
      {active === "Popular" && <Populargallery />}
      {active === "Srijan" && <Srijangallery />}
      {active === "Empressario" && <Empressariogallery />}
    </>
  );
};

export default Gallery;
