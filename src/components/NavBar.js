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

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dropDown1Opened: false,
      dropDown2Opened: false,
    };

    this.toggleDropDown1 = this.toggleDropDown1.bind(this);
    this.toggleDropDown2 = this.toggleDropDown2.bind(this);
  }

  toggleDropDown1() {
    this.setState((state) => ({
      dropDown1Opened: !state.dropDown1Opened,
      dropDown2Opened: false,
    }));
  }

  toggleDropDown2() {
    this.setState((state) => ({
      dropDown1Opened: false,
      dropDown2Opened: !state.dropDown2Opened,
    }));
  }

  render() {
    return (
      <>
        <div className="navbar">
          <div className="navbar_container_1">
            <div className="navbar_name"></div>
          </div>
          <Container2 home={this.props.home} explore={this.props.explore} />
          <div className="navbar_container_3">
            <div className="navbar_container_3_column">
              <button
                className="navbar_round_icon_button_1"
                onClick={this.toggleDropDown2}
              >
                <ArrowDropDownIcon />
              </button>
            </div>
            <div className="navbar_container_3_column">
              <button
                className="navbar_round_icon_button_1"
                onClick={this.toggleDropDown1}
              >
                <AddIcon />
              </button>
            </div>
            <ProfileButton />
          </div>
        </div>
        <DropDown1 show={this.state.dropDown1Opened} />
        <DropDown2 show={this.state.dropDown2Opened} />
      </>
    );
  }
}

function DropDown1(props) {
  if (props.show === true) {
    return (
      <>
        <div className="navbar_dropdown1">
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
    return <div></div>;
  }
}

function DropDown2(props) {
  if (props.show === true) {
    return (
      <div className="navbar_dropdown2">
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
    return <div></div>;
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

function ProfileButton() {
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
          <div className="navbar_container_3_column">
            <Link to="/me">
              <button
                className="navbar_round_icon_button_2"
                style={{
                  backgroundImage: "url(https://picsum.photos/100/100)",
                }}
              >
                {/* 유저의 프로필 사진 */}
              </button>
            </Link>
          </div>
        );
      } else {
        return <></>;
      }
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

function Container2(props) {
  return (
    <div className="navbar_container_2">
      <div className="navbar_menu">
        <div className="navbar_menu_child">
          <Link to="/home">
            <button className="navbar_icon_button">
              <HomeButton on={props.home} />
            </button>
          </Link>
        </div>
        <div className="navbar_menu_child">
          <Link to="/explore">
            <button className="navbar_icon_button">
              <ExploreButton on={props.explore} />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
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
