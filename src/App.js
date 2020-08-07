import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import FormViewsRouter from "./components/FormViewsRouter";
import Landing from "./components/Landing";
import Results from "./components/Results";

export default () => {
  const [userDetails, setUserDetails] = useState({});
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Landing />
        </Route>
        <Route path="/form">
          <FormViewsRouter setUserDetails={setUserDetails} />
        </Route>
        <Route path="/results">
          <Results userDetails={userDetails} />
        </Route>
      </Switch>
    </Router>
  );
};
