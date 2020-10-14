import React from "react";
import { Link } from "react-router-dom";
import "./LoginToUse.css";

function LoginToUse() {
  return (
    <>
      <div className="logintouse_container">
        <h1 className="logintouse_title">Login to use</h1>
        <Link to="/">
          <button className="logintouse_button">Log in</button>
        </Link>
      </div>
    </>
  );
}

export default LoginToUse;
