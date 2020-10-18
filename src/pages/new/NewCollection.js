import React, { useState, useEffect } from "react";
import firebase from "firebase";
import "../../firebase";
import "./NewCollection.css"
import Loading from "../../components/Loading";
import LoginToUse from "../../components/LoginToUse";
import VerifyEmail from "../../components/VerifyEmail";

function NewCollection() {
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
        return <></>;
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

export default NewCollection;
