import React, { useState, useEffect } from "react";
import NavBar from "./layout/NavBar.js";
import MainPage from "./layout/MainPage/MainPage.js";
import MyFavors from "./layout/MyFavors/MyFavors.js";
import AskForAFavor from "./layout/AskForAFavor/AskForAFavor.js";
import HelpSomeone from "./layout/HelpSomeone/HelpSomeone.js";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const App = () => {
  const [user, setUser] = useState(null);
  // const [user, setUser] = useState({
  //   _id: "12",
  //   googleId: "109033498384588241627",
  //   username: "diego riveros",
  //   userType: false,
  // });

  useEffect(() => {
    fetch("/auth/getUser")
      .then((res) => res.json())
      .then((user) => {
        console.log("APPUSER", user);
        setUser(user);
      });
  }, []);

  return (
    <Router>
      <NavBar user={user}></NavBar>
      <Switch>
        <Route exact path="/">
          <MainPage user={user} />
        </Route>
        <Route exact path="/myfavors">
          <MyFavors user={user} />
        </Route>
        <Route exact path="/askforfavor">
          <AskForAFavor user={user} />
        </Route>
        <Route exact path="/helpsomeone">
          <HelpSomeone user={user} />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
