import React from "react";
import Box from "./Box";
import "../style/HomeCard.css";

class HomeCard extends React.Component {
  render() {
    return (
      <Box>
        <h1 className="main_title">
          <div>
            <span className="firstSpan">Hello, I'm</span>
            <span className="secondSpan">
              <em className="name">Jonathan Rocha</em>,
            </span>
          </div>
          <span className="thirdSpan">I'm a Software Development Student</span>
        </h1>
      </Box>
    );
  }
}

export default HomeCard;
