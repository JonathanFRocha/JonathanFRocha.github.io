import React, { useState } from "react";
import "../style/Modal.css";
import closeX from "../images/closeX.svg";

const Modal = ({ projectImg, altImg, title, link, description, children }) => {
  const open = "open";
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    console.log(showModal);
    setShowModal(!showModal);
  };
  return (
    <React.Fragment>
      <article className={`backgroundModal modal__${showModal ? open : ""}`}>
        <div className="inner_modal_box">
          <img
            onClick={() => toggleModal()}
            className="inner_modal_close"
            src={closeX}
            alt="Close Modal"
            width="100"
          />

          <img className="inner_modal_image" src={projectImg} alt={altImg} />
          <div className="modal_text_container">
            <h2 className="modal_text_title">{title} Project</h2>
            <p>{description}</p>
            <div className="button_container">
              <a href={link}>
                <button className="modal_button_seeCode">See Code</button>
              </a>
            </div>
          </div>
        </div>
      </article>
      <div className="modal_box" onClick={() => toggleModal()}>
        {children}
      </div>
    </React.Fragment>
  );
};

export default Modal;
