import React, { useEffect, useState } from "react";
import firebase from "firebase";
import "../../firebase";
import "./MainHome.css";
import Loading from "../../components/Loading";
import LoginToUse from "../../components/LoginToUse";
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
            <div className="content_container">
              <div className="content">
                <div className="content_top">
                  <div className="content_top_left">
                    <div className="content_top_profile_image">aaa</div>
                    <div className="content_top_profile_name">bbb</div>
                  </div>
                  <div className="content_top_right">ccc</div>
                </div>
              </div>
              <div className="content"></div>
              <div className="content"></div>
              <div className="content"></div>
            </div>
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

export default MainHome;
