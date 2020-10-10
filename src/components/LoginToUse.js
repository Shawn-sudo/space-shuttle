import React from "react";
import { Link } from "react-router-dom";
import "./LoginToUse.css";
import NavBar from "./NavBar";

function LoginToUse() {
  return (
    <html>
      <head>
        <meta charSet="utf-8" />
        <meta name="vewport" content="width=device-width, initial-scale=1" />
        <title>Atrable</title>
      </head>
      <body>
        <NavBar />
        <div className="logintouse_container">
          <h1 className="logintouse_title">Login to use</h1>
          <Link to="/">
            <button className="logintouse_button">Log in</button>
          </Link>
        </div>
      </body>
    </html>
  );
}

export default LoginToUse;
