import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import ProjectModal from "./ProjectModal";
import Box from "./Box";
import backIcon from "../images/back.png";
import "../style/ProjectsCard.css";
import { project1 } from "../resume/projectsList";

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

  return (
    <Box>
      <div className="projects_header_container">
        <Link to="/">
          <img className="backIcon" src={backIcon} alt="return to Homepage" />
        </Link>
        <h2 className="projectsCard_title">My Projects</h2>
      </div>
      <hr />
      <div className="projects_grid">
        <ProjectModal
          className={count >= 0 ? className : ""}
          title={project1.title}
          description={project1.description}
          code={project1.code}
          link={project1.link}
          projectImg={project1.img}
          alt={project1.alt}
        />
        <ProjectModal
          className={count >= 1 ? className : ""}
          title={project1.title}
          description={project1.description}
          code={project1.code}
          link={project1.link}
          projectImg={project1.img}
          alt={project1.alt}
        />
        <ProjectModal
          className={count >= 2 ? className : ""}
          title={project1.title}
          description={project1.description}
          code={project1.code}
          link={project1.link}
          projectImg={project1.img}
          alt={project1.alt}
        />
        <ProjectModal
          className={count >= 3 ? className : ""}
          title={project1.title}
          description={project1.description}
          code={project1.code}
          link={project1.link}
          projectImg={project1.img}
          alt={project1.alt}
        />
      </div>
    </Box>
  );
};

export default ProjectsCard;
