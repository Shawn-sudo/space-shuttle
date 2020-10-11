import React, { useState } from "react";
import NavBar from "../../components/NavBar";
import "../../firebase";
import firebase from "firebase";

function SetProfile() {
  const [name, setName] = useState("");
  const [photoUrl, setPhotoUrl] = useState("");

  return (
    <div>
      <NavBar />
    </div>
  );

  async function setProfileFunction() {
    var uid = await firebase.auth().currentUser.uid;
    firebase.firestore().collection("users").doc("info").collection({uid}).doc("values").update({
        name: name,
        photoUrl = photoUrl    
    });
  }
}

export default SetProfile;
