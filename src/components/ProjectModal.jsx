import React, { useEffect, useState } from "react";

import Modal from "./Modal";
import "../style/ProjectModal.css";

const ProjectModal = ({ projectImg, altImg, code, title, link, description, className }) => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  useEffect(() => {
    const handleModal = (e) => {
      const modalOpen = e.target.className.split(" ");
      if (modalOpen[1] === "modal__open") {
        toggleModal();
        return;
      }
    };

    if (showModal) window.addEventListener("click", handleModal);
    else {
      window.removeEventListener("click", handleModal);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [showModal]);

  return (
    <React.Fragment>
      <div onClick={() => toggleModal()} className={`projectBox ${className}`}>
        <img className="project_pre_image" src={projectImg} alt={altImg} />
        <h3 className="project_pre_title">{title}</h3>
      </div>
      <Modal
        showModal={showModal}
        toggleModal={toggleModal}
        title={title}
        description={description}
        code={code}
        link={link}
        projectImg={projectImg}
        altImg={altImg}
      />
    </React.Fragment>
  );
};

export default ProjectModal;
