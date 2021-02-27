import React from "react";
import "../style/Box.css";

class Box extends React.Component {
  render() {
    return (
      <div className="card_container">
        <h3>box</h3>
        <section>{this.props.children}</section>
      </div>
    );
  }
}

export default Box;
