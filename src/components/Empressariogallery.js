import React from "react";
import { empressariogallery } from "./Dataset";

const Empressariogallery = () => {
  return (
    <>
      <div className="image-gallery">
        <div className="gallery-all">
          {empressariogallery.map((item) => {
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

export default Empressariogallery;
