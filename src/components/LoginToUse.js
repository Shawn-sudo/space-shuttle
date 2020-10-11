import React from "react";
import { Link } from "react-router-dom";
import "./LoginToUse.css";
import NavBar from "./NavBar";

function LoginToUse() {
  return (
    <>
      <NavBar />
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
