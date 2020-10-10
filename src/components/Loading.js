import React from "react";
import "./Loading.css";
import NavBar from "./NavBar";

function Loading() {
  return (
    <>
      <NavBar />
      <div className="container">
        <div className="loading_icon"></div>
      </div>
    </>
  );
}

export default Loading;
