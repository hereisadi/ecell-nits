import React from "react";
import { populargallery } from "./Dataset";

const Populargallery = () => {
  return (
    <>
      <div className="image-gallery">
        <div className="gallery-all">
          {populargallery.map((item) => {
            return (
              <div key={item.id} className="image-all">
                <img src={item.img} alt={item.alt} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Populargallery;
