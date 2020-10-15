import React from "react";
import { BrowserRouter, Route, Switch, useLocation } from "react-router-dom";
import Home from "../pages/Home";
import ErrorPageNotFound from "../pages/404";
import MainHome from "../pages/main/MainHome";
import MainExplore from "../pages/main/MainExplore";
import NewCollection from "../pages/new/NewCollection";
import NewStory from "../pages/new/NewStory";
import Settings from "../pages/settings/Settings";
import TermsOfUse from "../pages/Termsofuse";
import Me from "../pages/Me";
import NavBar from "../components/NavBar";

function App() {
  return (
    <BrowserRouter>
      <NavBar home={NavBarShowHome} explore={NavBarShowExplore} />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/home" component={MainHome} />
        <Route exact path="/explore" component={MainExplore} />
        <Route exact path="/new/collection" component={NewCollection} />
        <Route exact path="/new/story" component={NewStory} />
        <Route exact path="/settings" component={Settings} />
        <Route exact path="/termsofuse" component={TermsOfUse} />
        <Route exact path="/me" component={Me} />
        <ErrorPageNotFound />
      </Switch>
    </BrowserRouter>
  );

  function NavBarShowHome() {
    if (useLocation().pathname === "/home") {
      return true;
    } else {
      return false;
    }
  }

  function NavBarShowExplore() {
    if (useLocation().pathname === "/explore") {
      return true;
    } else {
      return false;
    }
  }
}

export default App;
