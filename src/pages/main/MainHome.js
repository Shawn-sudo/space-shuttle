import React, { useEffect, useState } from "react";
import firebase from "firebase";
import "../../firebase";
import "./MainHome.css";
import Loading from "../../components/Loading";
import LoginToUse from "../../components/LoginToUse";
import VerifyEmail from "../../components/VerifyEmail";
import FavoriteFilledIcon from "../../assets/icons/FavoriteFilledIcon";
import FavoriteOutlinedIcon from "../../assets/icons/FavoriteOutlinedIcon";

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
                    <div
                      className="content_top_profile_image"
                      style={{
                        backgroundImage: "url(https://picsum.photos/300/300)",
                      }}
                    ></div>
                    <div className="content_top_profile_name">Shawn</div>
                  </div>
                </div>
                <div className="content_body">
                  <img
                    className="content_body_image"
                    alt=""
                    src="https://picsum.photos/5000/2000"
                  ></img>
                  <div className="content_body_text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Etiam nec mi augue. Mauris ac gravida urna, in sodales
                    ligula. Pellentesque sodales non risus vel tristique. Sed
                    odio est, dictum quis volutpat et, luctus nec lacus.
                    Curabitur pharetra, ex eleifend tempor pretium, enim lacus
                    iaculis nulla, non semper lectus erat ut libero.
                  </div>
                </div>
                <div className="content_end">
                  <div className="content_end_column">
                    <div className="content_end_column_button">
                      <FavoriteFilledIcon />
                    </div>
                  </div>
                  <div className="content_end_column">
                    <div className="content_end_column_button">
                      <FavoriteOutlinedIcon />
                    </div>
                  </div>
                </div>
              </div>
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
