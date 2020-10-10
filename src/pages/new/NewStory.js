import React, { useState, useEffect } from "react";
import NavBar from "../../components/NavBar";
import firebase from "firebase";
import "../../firebase";
import Loading from "../../components/Loading";
import LoginToUse from "../../components/LoginToUse";
import VerifyEmail from "../../components/VerifyEmail";

function NewStory() {
  const [init, setInit] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
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
        return <NavBar />;
      } else {
        return (
          <>
            <NavBar />
            <VerifyEmail />
          </>
        );
      }
    } else {
      return <LoginToUse />;
    }
  } else {
    return <Loading />;
  }
}

export default NewStory;
