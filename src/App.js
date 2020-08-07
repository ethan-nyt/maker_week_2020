import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import FormViewsRouter from "./components/FormViewsRouter";
import Landing from "./components/Landing";

export default () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Landing />
        </Route>
        <Route path="/form">
          <FormViewsRouter />
        </Route>
        <Route path="/results"></Route>
      </Switch>
    </Router>
  );
};
