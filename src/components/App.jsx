import React from "react";

import NavHeader from "./NavHeader";
import "./App.css";
import { Route, Router, Switch } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <div className="hello">
        <NavHeader />
      </div>
    );
  }
}

export default App;
