import React, { useEffect, useState } from "react";
import { Route, Switch, useHistory } from "react-router-dom";
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
import firebase from "firebase";
import "../firebase";
import Loading from "../components/Loading";
import LoginToUse from "../components/LoginToUse";
import VerifyEmail from "../components/VerifyEmail";

function App() {
  const [navbarshowhome, setnavbarshowhome] = useState(false);
  const [navbarshowexplore, setnavbarshowexplore] = useState(false);

  const [init, setInit] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);

  useHistory().listen((location) => {
    if (location.pathname === "/home") {
      setnavbarshowhome(true);
      setnavbarshowexplore(false);
    } else {
      if (location.pathname === "/explore") {
        setnavbarshowhome(false);
        setnavbarshowexplore(true);
      } else {
        setnavbarshowhome(false);
        setnavbarshowexplore(false);
      }
    }
  });

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setLoggedIn(true);
      } else {
        setLoggedIn(false);
      }
      setInit(true);
    });
  }, []);

  if (init) {
    if (loggedIn) {
      if (firebase.auth().currentUser.emailVerified) {
        return (
          <>
            <NavBar home={navbarshowhome} explore={navbarshowexplore} />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/home" component={MainHome} />
              <Route exact path="/explore" component={MainExplore} />
              <Route exact path="/new/collection" component={NewCollection} />
              <Route exact path="/new/story" component={NewStory} />
              <Route exact path="/my/posts" component={NewStory} />
              <Route exact path="/settings" component={Settings} />
              <Route exact path="/termsofuse" component={TermsOfUse} />
              <Route exact path="/me" component={Me} />
              <ErrorPageNotFound />
            </Switch>
          </>
        );
      } else {
        return (
          <>
            <NavBar />
            <Switch>
              <Route exact path="/termsofuse" component={TermsOfUse} />
              <VerifyEmail />
            </Switch>
          </>
        );
      }
    } else {
      return (
        <>
          <NavBar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/termsofuse" component={TermsOfUse} />
            <LoginToUse />
          </Switch>
        </>
      );
    }
  } else {
    return <Loading />;
  }
}

export default App;
