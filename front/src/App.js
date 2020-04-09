import React from "react";
import NavBar from "./layout/NavBar.js";
import MyFavors from "./layout/MyFavors/MyFavors.js";
import AskForAFavor from "./layout/AskForAFavor.js";
import HelpSomeone from "./layout/HelpSomeone.js";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const App = () => (
  <Router>
    <NavBar></NavBar>
    <Switch>
      <Route exact path="/myfavors">
        <MyFavors />
      </Route>
      <Route exact path="/askforfavor">
        <AskForAFavor />
      </Route>
      <Route exact path="/helpsomeone">
        <HelpSomeone />
      </Route>
    </Switch>
  </Router>
);

export default App;
