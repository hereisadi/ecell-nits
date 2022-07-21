import React, { useState } from "react";
import "./Modal.css";

const ReadMoreEmp = () => {
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
            <h2>EMPRESSARIO</h2>
            <p>
            An annual business module that includes a variety of inclusive contests ranging from designing creative taglines to innovative Business ideas like convincing someone to buy even something trivial (Eg.: An empty matchbox !). It falls under the ostentatious Techno-Managerial fest-Technoesis, organised by the Entrepreneurship Cell NIT Silchar, to espouse ingenuity and managerial aspects amongst the students.
            </p>
            <button className="close-modal" onClick={toggleModal}>
              CLOSE
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ReadMoreEmp;
