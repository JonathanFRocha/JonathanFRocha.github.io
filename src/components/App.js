import React from "react";

import NavHeader from "./NavHeader";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div className="hello">
        <NavHeader />
        <h1>Hello World</h1>
      </div>
    );
  }
}

export default App;
