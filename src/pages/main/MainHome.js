import React, { useEffect, useState } from "react";
import firebase from "firebase";
import "../../firebase";
import "./MainHome.css";
import Loading from "../../components/Loading";
import LoginToUse from "../../components/LoginToUse";
import NavBar from "../../components/NavBar";
import VerifyEmail from "../../components/VerifyEmail";

function MainHome() {
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
            <NavBar home={true} />
            <div></div>
          </>
        );
      } else {
        return (
          <>
            <NavBar home={true} />
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

export default MainHome;
