import React, { useState } from "react";
import "./Modal.css";

const ReadMoreSrijan = () => {
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
            <h2>SRIJAN 2.0</h2>
            <p>
            SRIJAN is the National Innovation and Entrepreneurship Summit organized by E Cell NIT Silchar. It is a unique initiative to motivate and educate people about entrepreneurship and to provide a meeting ground for Corporate experts and young budding entrepreneurs from NIT Silchar as well as several distinguished institutions across the country. <br/><br/>
            Organized by the NIT Silchar, E-Cell NIT Silchar in association with Institute Innovation Council & Start-up Centre, NIT SILCHAR and IEEE ComSoc Kolkata Chapter.
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

export default ReadMoreSrijan