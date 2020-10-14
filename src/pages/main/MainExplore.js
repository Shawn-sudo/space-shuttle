import React, { useEffect, useState } from "react";
import firebase from "firebase";
import "../../firebase";
import "./MainExplore.css";
import Loading from "../../components/Loading";
import LoginToUse from "../../components/LoginToUse";
import VerifyEmail from "../../components/VerifyEmail";

function MainExplore() {
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
        return (
          <>
            <div></div>
          </>
        );
      } else {
        return (
          <>
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

export default MainExplore;
