import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import ProjectModal from "./ProjectModal";
import Box from "./Box";
import backIcon from "../images/back.png";
import "../style/ProjectsCard.css";
import { projects } from "../resume/projectsList";

const ProjectsCard = () => {
  const className = "fadein";

  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count >= 10) return;
    const timeout = setTimeout(() => {
      setCount(count + 1);
    }, 200);
    return () => clearTimeout(timeout);
  }, [count]);

  const renderedProjects = projects.map((project, index) => {
    return (
      <ProjectModal
        className={count >= index ? className : ""}
        title={project.title}
        description={project.description}
        code={project.code}
        link={project.link}
        projectImg={project.img}
        alt={project.alt}
      />
    );
  });

  return (
    <Box>
      <div className="projects_header_container">
        <Link to="/">
          <img className="backIcon" src={backIcon} alt="return to Homepage" />
        </Link>
        <h2 className="projectsCard_title">My Projects</h2>
      </div>
      <hr />
      <div className="projects_grid">{renderedProjects}</div>
    </Box>
  );
};

export default ProjectsCard;
