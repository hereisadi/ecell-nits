import React, { useState } from "react";
import "./Modal.css";

const ReadMoreBech = () => {
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
          <h2>BECHKEDIKHAO</h2>
          <p>
          One of the most important functions of a company after a product is produced is to sell it to large number of buyers. The ability to build relationships with customers, persuade them to make purchases and generate revenue business is at the heart of selling. <br/><br/>
          Bech Ke Dikhao is an event where one can get experience and refine their selling ability. It requires you to compete with others to sell the product to the general public. The concept is simple: you'll be handed any product on the moment and you must pitch it to the greatest potential audience in order to convince them to buy it. The team with the most sales is the winner.
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

export default ReadMoreBech