import React from "react";
import { Link } from "react-router-dom";

import Box from "./Box";
import backIcon from "../images/back.png";
import "../style/AboutMeCard.css";

const AboutMeCard = () => {
  return (
    <Box>
      <article>
        <div className="about_header_container">
          <Link to="/">
            <img className="backIcon" src={backIcon} alt="return to Homepage" />
          </Link>
          <h2 className="about_title">About</h2>
        </div>
        <div className="about_paragraph">
          <p>
            I am a software development student at Trybe, currently living in Belo Horizonte,
            Brasil.
          </p>
          <br />
          <p>
            My first contact with code was when I was 14, creating new features for my game server,
            and since i got in touch with the development world again i’ve been passionate about
            testing and creating things.
          </p>
          <br />
          <p>
            I really like gaming with my friends and spending time with those I hold dear, also I
            LOVE to challenge myself by creating and collaborating with things that I find difficult
            to overcome because the feeling that comes after succeeding is the best.
          </p>
        </div>
      </article>
    </Box>
  );
};

export default AboutMeCard;
