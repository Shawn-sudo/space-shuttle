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
                    src="https://picsum.photos/1000/100"
                  ></img>
                  <div className="content_body_text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Etiam nec mi augue. Mauris ac gravida urna, in sodales
                    ligula. Pellentesque sodales non risus vel tristique. Sed
                    odio est, dictum quis volutpat et, luctus nec lacus.
                    Curabitur pharetra, ex eleifend tempor pretium, enim lacus
                    iaculis nulla, non semper lectus erat ut libero. Ut rhoncus
                    cursus justo vel tincidunt. Aenean scelerisque sagittis
                    ultricies. In blandit lacus ut purus efficitur, ut tincidunt
                    lorem convallis. Mauris quam odio, elementum non felis in,
                    cursus vestibulum lorem. Pellentesque tempus felis nisl,
                    quis auctor dolor convallis at. Duis varius nunc diam, quis
                    blandit justo eleifend id. Integer in nisi vestibulum,
                    interdum turpis ac, vehicula felis. Nullam scelerisque
                    cursus odio, quis vehicula sapien semper eu. Vestibulum
                    finibus diam mi, eu mollis metus rutrum consequat. Mauris
                    blandit felis arcu, a euismod lacus porta eget. Maecenas sem
                    arcu, luctus vitae mi at, tincidunt facilisis risus.
                    Curabitur condimentum leo nisi, in euismod dui finibus quis.
                  </div>
                </div>
                <div className="content_end">
                  <div className="content_end_column">
                    <div className="content_end_column_button"></div>
                  </div>
                  <div className="content_end_column">
                    <div className="content_end_column_button"></div>
                  </div>
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
