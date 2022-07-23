import React from 'react';
import { srijangallery } from "./Dataset";

const Srijangallery = () => {
  return (
    <>
    <div className="image-gallery">
      <div className="gallery-all">
        {srijangallery.map((item) => {
          return (
            <div key={item.id} className="image-all">
              <img src={item.img} alt={item.alt} />
            </div>
          );
        })}
      </div>
    </div>
  </>
  )
}

export default Srijangallery;