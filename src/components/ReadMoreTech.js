import React, { useState } from "react";
import "./Modal.css";

const ReadMoreTech = () => {
    const [modal, setModal] = useState(false);

    const toggleModal = () => {
      setModal(!modal);
    };
  
    if (modal) {
      document.body.classList.add("active-modal");
    } else {
      document.body.classList.remove("active-modal");
    }
  return (
    <>
    <button onClick={toggleModal} className="btn-modal">
      Read More
    </button>

    {modal && (
      <div className="modal">
        <div onClick={toggleModal} className="overlay"></div>
        <div className="modal-content">
          <h2>TECNOESIS</h2>
          <p>
          Tecnoesis is NIT Silchar's yearly techno-management festival. Tecnoesis began as a venue for the student community to develop and demonstrate their technological prowess, and has now grown to become one of India's most prominent Techno-management. Festivals.
          </p>
          <button className="close-modal" onClick={toggleModal}>
            CLOSE
          </button>
        </div>
      </div>
    )}
  </>
  )
}

export default ReadMoreTech