import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "../pages/Home";
import ErrorPageNotFound from "../pages/404";
import MainHome from "../pages/main/MainHome";
import MainExplore from "../pages/main/MainExplore";
import NewCollection from "../pages/new/NewCollection";
import NewStory from "../pages/new/NewStory";
import ReviewUs from "../pages/us/ReviewUs";
import Settings from "../pages/settings/Settings";
import UsTodo from "../pages/us/UsTodo";
// import AboutUs from "../pages/us/AboutUs";
import TermsOfUse from "../pages/Termsofuse";
import Me from "../pages/Me";

function App() {

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/home" component={MainHome} />
        <Route exact path="/explore" component={MainExplore} />
        <Route exact path="/new/collection" component={NewCollection} />
        <Route exact path="/new/story" component={NewStory} />
        <Route exact path="/us/review" component={ReviewUs} />
        <Route exact path="/us/todo" component={UsTodo} />
        <Route exact path="/settings" component={Settings} />
        <Route exact path="/termsofuse" component={TermsOfUse} />
        <Route exact path="/me" component={Me} />
        <ErrorPageNotFound />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
