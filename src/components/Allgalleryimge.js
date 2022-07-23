import React from "react";
import { allgallery } from "./Dataset";

const Allgalleryimge = () => {
  return (
    <>
      <div className="image-gallery">
        <div className="gallery-all">
          {allgallery.map((item) => {
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

export default Allgalleryimge;
