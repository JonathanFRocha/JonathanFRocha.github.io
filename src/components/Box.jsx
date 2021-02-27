import React from "react";
import "../style/Box.css";
import Rotate from "react-reveal/Rotate";

class Box extends React.Component {
  constructor(props) {
    super(props);
    this.state = { show: true };
  }

  render() {
    return (
      <div className="card_container">
        <section>{this.props.children}</section>
      </div>
    );
  }
}

export default Box;
