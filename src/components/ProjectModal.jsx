import React from "react";
import "../style/ProjectModal.css";

const ProjectModal = ({ projectImg, altImg, title, description, className }) => {
  return (
    <div className={`projectBox ${className}`}>
      <img className="project_pre_image" src={projectImg} alt={altImg} />
      <h3 className="project_pre_title">{title}</h3>
    </div>
  );
};

export default ProjectModal;
