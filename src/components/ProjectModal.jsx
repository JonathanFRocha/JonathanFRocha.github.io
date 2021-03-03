import React from "react";

import Modal from "./Modal";
import "../style/ProjectModal.css";

const ProjectModal = ({ projectImg, altImg, code, title, link, description, className }) => {
  return (
    <Modal
      title={title}
      description={description}
      code={code}
      link={link}
      projectImg={projectImg}
      altImg={altImg}
    >
      <div className={`projectBox ${className}`}>
        <img className="project_pre_image" src={projectImg} alt={altImg} />
        <h3 className="project_pre_title">{title}</h3>
      </div>
    </Modal>
  );
};

export default ProjectModal;
