import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import NavHeader from "./NavHeader";
import HomeCard from "./HomeCard";
import AboutMeCard from "./AboutMeCard";
import ProjectsCard from "./ProjectsCard";
import "../style/App.css";

const App = () => {
  return (
    <Router>
      <NavHeader />
      <main className="anim-background">
        <Switch>
          <Route exact path="/" component={HomeCard} />
          <Route path="/aboutme" component={AboutMeCard} />
          <Route exact path="/projects" component={ProjectsCard} />
        </Switch>
        <ul className="anim-area">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </main>
    </Router>
  );
};
export default App;
