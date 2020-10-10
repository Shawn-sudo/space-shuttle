import React from "react";
import "./VerifyEmail.css";
import firebase from "firebase";
import "../firebase";

function VerifyEmail() {
  firebase.auth().currentUser.sendEmailVerification();
  return (
    <div className="verifyemail_container">
      <div className="verifyemail_title">Verification email has been sent</div>
      <div className="verifyemail_content">Please verify your email</div>
      <button className="verifyemail_button" onClick={sendVerificationEmail}>Resend verification email</button>
    </div>
  );
  function sendVerificationEmail() {
    firebase.auth().currentUser.sendEmailVerification()
  }
}

export default VerifyEmail;
