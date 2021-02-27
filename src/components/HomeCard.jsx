import React from "react";
import Box from "./Box";
import "../style/HomeCard.css";
import Flash from "react-reveal/Flash";

class HomeCard extends React.Component {
  render() {
    return (
      <Box>
        <h1 className="main_title">
          <div>
            <span className="firstSpan">Hello, I'm</span>
            <span className="secondSpan">
              <Flash>
                <em className="name">Jonathan Rocha</em>
              </Flash>
              ,
            </span>
          </div>
          <span className="thirdSpan">I'm Full Stack Web Developer Student</span>
        </h1>
      </Box>
    );
  }
}

export default HomeCard;
