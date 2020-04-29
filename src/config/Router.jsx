import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../components/pages/Home";
import Posts from "../components/pages/Posts";
import Contacts from "../components/pages/Contacts";

const Router = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/Posts" exact component={Posts} />
      <Route path="/contacts" exact component={Contacts} />
    </Switch>
  );
};

export default Router;
