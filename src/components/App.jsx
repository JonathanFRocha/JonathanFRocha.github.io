import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import NavHeader from "./NavHeader";
import HomeCard from "./HomeCard";
import AboutMeCard from "./AboutMeCard";
import ProjectsCard from "./ProjectsCard";
import "../style/App.css";

class App extends React.Component {
  render() {
    return (
      <Router>
        <NavHeader />
        <main>
          <Switch>
            <Route exact path="/" component={HomeCard} />
            <Route path="/aboutme" component={AboutMeCard} />
            <Route exact path="/projects" component={ProjectsCard} />
          </Switch>
        </main>
      </Router>
    );
  }
}
export default App;
