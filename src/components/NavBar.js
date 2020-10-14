import React, { useEffect, useState } from "react";
import "./NavBar.css";
import "../pages/Home";
import { Link } from "react-router-dom";
import AddIcon from "../assets/icons/AddIcon";
import ArrowDropDownIcon from "../assets/icons/ArrowDropDownIcon";
import AddCollectionIcon from "../assets/icons/AddCollectionIcon";
import SubjectIcon from "../assets/icons/SubjectIcon";
import StarIcon from "../assets/icons/StarIcon";
import ExploreFilledIcon from "../assets/icons/ExploreFilledIcon";
import HomeFilledIcon from "../assets/icons/HomeFilledIcon";
import ExploreOutlinedIcon from "../assets/icons/ExploreOutlinedIcon";
import HomeOutlinedIcon from "../assets/icons/HomeOutlinedIcon";
import LogOutIcon from "../assets/icons/LogOutIcon";
import "../firebase";
import firebase from "firebase";

function NavBar(props) {
  return (
    <>
      <div className="navbar">
        <div className="navbar_container_1">
          <div className="navbar_name"></div>
        </div>
        <Container2 home={props.home} explore={props.explore} />
        <div className="navbar_container_3"></div>
      </div>
      <NavBarActionButtons />
    </>
  );
}

function Container2(props) {
  const [showHome, setShowHome] = useState(props.home);
  const [showExplore, setShowExplore] = useState(props.explore);

  return (
    <div className="navbar_container_2">
      <div className="navbar_menu">
        <div className="navbar_menu_child">
          <Link
            to="/home"
            onClick={() => {
              setShowHome(true);
              setShowExplore(false);
            }}
          >
            <button className="navbar_icon_button">
              <HomeButton on={showHome} />
            </button>
          </Link>
        </div>
        <div className="navbar_menu_child">
          <Link
            to="/explore"
            onClick={() => {
              setShowHome(false);
              setShowExplore(true);
            }}
          >
            <button className="navbar_icon_button">
              <ExploreButton on={showExplore} />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

function NavBarActionButtons() {
  if (window.innerWidth > 750) {
    return (
      <div className="navbar_action_buttons" style={{ top: 0, right: 0 }}>
        <DropDownButtons />
        <ProfileButton />
      </div>
    );
  } else {
    return (
      <div className="navbar_action_buttons" style={{ bottom: 10, right: 10 }}>
        <DropDownButtons />
        <ProfileButton />
      </div>
    );
  }
}

function DropDownButtons() {
  const [dropDown1Opened, setDropDown1Opened] = useState(false);
  const [dropDown2Opened, setDropDown2Opened] = useState(false);

  if (dropDown1Opened) {
    return (
      <div>
        <div className="navbar_container_3_column">
          <button
            className="navbar_round_icon_button_1"
            onClick={() => {
              setDropDown1Opened(false);
              setDropDown2Opened(!dropDown2Opened);
            }}
          >
            <ArrowDropDownIcon />
          </button>
        </div>
        <div className="navbar_container_3_column">
          <button
            className="navbar_round_icon_button_1"
            onClick={() => {
              setDropDown1Opened(false);
              setDropDown2Opened(false);
            }}
          >
            <AddIcon />
          </button>
        </div>
        <DropDown1 />
      </div>
    );
  } else {
    if (dropDown2Opened) {
      return (
        <div>
          <div className="navbar_container_3_column">
            <button
              className="navbar_round_icon_button_1"
              onClick={() => {
                setDropDown1Opened(false);
                setDropDown2Opened(false);
              }}
            >
              <ArrowDropDownIcon />
            </button>
          </div>
          <div className="navbar_container_3_column">
            <button
              className="navbar_round_icon_button_1"
              onClick={() => {
                setDropDown1Opened(!dropDown1Opened);
                setDropDown2Opened(false);
              }}
            >
              <AddIcon />
            </button>
          </div>
          <DropDown2 />
        </div>
      );
    } else {
      return (
        <div>
          <div className="navbar_container_3_column">
            <button
              className="navbar_round_icon_button_1"
              onClick={() => {
                setDropDown1Opened(false);
                setDropDown2Opened(!dropDown2Opened);
              }}
            >
              <ArrowDropDownIcon />
            </button>
          </div>
          <div className="navbar_container_3_column">
            <button
              className="navbar_round_icon_button_1"
              onClick={() => {
                setDropDown1Opened(!dropDown1Opened);
                setDropDown2Opened(false);
              }}
            >
              <AddIcon />
            </button>
          </div>
        </div>
      );
    }
  }
}

function ProfileButton() {
  // if profile url is not null
  return (
    <div className="navbar_container_3_column">
      <Link to="/me">
        <button
          className="navbar_round_icon_button_2"
          style={{
            backgroundImage: "url(https://picsum.photos/300/300)",
          }}
        ></button>
      </Link>
    </div>
  );
  // else: return <></>
}

function DropDown1() {
  if (window.innerWidth > 750) {
    return (
      <>
        <div
          className="navbar_dropdown"
          style={{
            top: "5rem",
            right: "4.5rem",
          }}
        >
          <Link to="/new/collection" style={{ textDecoration: "none" }}>
            <div className="navbar_dropdown_button">
              <div className="navbar_dropdown_button_icon">
                <AddCollectionIcon />
              </div>
              <div className="navbar_dropdown_button_title">Collection</div>
            </div>
          </Link>
          <Link to="/new/story" style={{ textDecoration: "none" }}>
            <div className="navbar_dropdown_button">
              <div className="navbar_dropdown_button_icon">
                <SubjectIcon />
              </div>
              <div className="navbar_dropdown_button_title">Story</div>
            </div>
          </Link>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div
          className="navbar_dropdown"
          style={{
            bottom: "5rem",
            right: "5.5rem",
          }}
        >
          <Link to="/new/collection" style={{ textDecoration: "none" }}>
            <div className="navbar_dropdown_button">
              <div className="navbar_dropdown_button_icon">
                <AddCollectionIcon />
              </div>
              <div className="navbar_dropdown_button_title">Collection</div>
            </div>
          </Link>
          <Link to="/new/story" style={{ textDecoration: "none" }}>
            <div className="navbar_dropdown_button">
              <div className="navbar_dropdown_button_icon">
                <SubjectIcon />
              </div>
              <div className="navbar_dropdown_button_title">Story</div>
            </div>
          </Link>
        </div>
      </>
    );
  }
}

function DropDown2() {
  if (window.innerWidth > 750) {
    return (
      <div
        className="navbar_dropdown"
        style={{
          top: "5rem",
          right: "0.5rem",
        }}
      >
        <Link to="/us/review" style={{ textDecoration: "none" }}>
          <div className="navbar_dropdown_button">
            <div className="navbar_dropdown_button_icon">
              <StarIcon />
            </div>
            <div className="navbar_dropdown_button_title">Rate us</div>
          </div>
        </Link>
        <LogOutButton />
      </div>
    );
  } else {
    return (
      <div
        className="navbar_dropdown"
        style={{
          bottom: "5rem",
          right: "1.5rem",
        }}
      >
        <Link to="/us/review" style={{ textDecoration: "none" }}>
          <div className="navbar_dropdown_button">
            <div className="navbar_dropdown_button_icon">
              <StarIcon />
            </div>
            <div className="navbar_dropdown_button_title">Rate us</div>
          </div>
        </Link>
        <LogOutButton />
      </div>
    );
  }
}

function LogOutButton() {
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
      return (
        <div className="navbar_dropdown_button" onClick={Logout}>
          <div className="navbar_dropdown_button_icon">
            <LogOutIcon />
          </div>
          <div className="navbar_dropdown_button_title">Log out</div>
        </div>
      );
    } else {
      return <></>;
    }
  } else {
    return <></>;
  }
}

async function Logout() {
  await firebase.auth().signOut();
  window.location.reload();
}

function HomeButton(props) {
  if (props.on === true) {
    return (
      <HomeFilledIcon
        style={{
          verticalAlign: "middle",
          display: "tableCell",
          fill: "#007BFC",
          height: "2.5rem",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      />
    );
  } else {
    return (
      <HomeOutlinedIcon
        style={{
          verticalAlign: "middle",
          display: "tableCell",
          fill: "gray",
          height: "2.5rem",
        }}
      />
    );
  }
}

function ExploreButton(props) {
  if (props.on === true) {
    return (
      <ExploreFilledIcon
        style={{
          verticalAlign: "middle",
          display: "tableCell",
          fill: "#007BFC",
          height: "2.5rem",
        }}
      />
    );
  } else {
    return (
      <ExploreOutlinedIcon
        style={{
          verticalAlign: "middle",
          display: "tableCell",
          fill: "gray",
          height: "2.5rem",
        }}
      />
    );
  }
}

export default NavBar;
