import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import NavHeader from "./NavHeader";
import HomeCard from "./HomeCard";
import AboutMeCard from "./AbouMeCard";
import ProjectsCard from "./ProjectsCard";
import "../style/App.css";

class App extends React.Component {
  render() {
    return (
      <Router>
        <NavHeader />
        <main>
          <Switch>
            <Route exact path="/">
              <HomeCard />
            </Route>
            <Route path="/aboutme">
              <AboutMeCard />
            </Route>
            <Route path="/projects">
              <ProjectsCard />
            </Route>
          </Switch>
        </main>
      </Router>
    );
  }
}

export default App;
