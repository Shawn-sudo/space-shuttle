import React, { useEffect, useState } from "react";
import "./Home.css";
import GoBackIcon from "../assets/icons/GoBackIcon";

import "../firebase";
import firebase from "firebase";
import { Redirect } from "react-router-dom";
import Loading from "../components/Loading";
import NavBar from "../components/NavBar";

function Home() {
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
      return <Redirect to="/home" />;
    } else {
      if (window.innerHeight / window.innerWidth < 1) {
        return (
          <>
            <NavBar />
            <div className="row">
              <div className="column_left">
                <div className="welcome">Built for you</div>
                <div className="description">
                  Atrable is a platform where you can share your travel stories.
                  You can view traveler's stories, follow travelers, and share
                  your travel story.
                </div>
              </div>
              <div className="column_right">
                <LoginCard />
              </div>
            </div>
          </>
        );
      } else {
        return (
          <>
            <NavBar />
            <div className="row">
              <div className="column_right_for_mobile">
                <div className="welcome_for_mobile">Welcome</div>
                <LoginCard />
              </div>
            </div>
          </>
        );
      }
    }
  } else {
    return <Loading />;
  }
}

class LoginCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 0,
      login_email_value: "",
      login_password_value: "",
      signup_email_value: "",
      signup_password_value: "",
      signup_confirm_password_value: "",
    };

    this.moveToNextPage = this.moveToNextPage.bind(this);
    this.moveToPreviousPage = this.moveToPreviousPage.bind(this);

    this.LoginEmailHandleChange = this.LoginEmailHandleChange.bind(this);
    this.LoginPasswordHandleChange = this.LoginPasswordHandleChange.bind(this);
    this.SignupEmailHandleChange = this.SignupEmailHandleChange.bind(this);
    this.SignupPasswordHandleChange = this.SignupPasswordHandleChange.bind(
      this
    );
    this.SignupConfirmPasswordChange = this.SignupConfirmPasswordChange.bind(
      this
    );
    this.Login = this.Login.bind(this);
    this.Signup = this.Signup.bind(this);
  }

  moveToNextPage() {
    this.setState((state) => ({
      currentPage: state.currentPage + 1,
    }));
  }

  moveToPreviousPage() {
    this.setState((state) => ({
      currentPage: state.currentPage - 1,
    }));
  }

  LoginEmailHandleChange(event) {
    this.setState({ login_email_value: event.target.value });
  }

  LoginPasswordHandleChange(event) {
    this.setState({ login_password_value: event.target.value });
  }

  SignupEmailHandleChange(event) {
    this.setState({ signup_email_value: event.target.value });
  }

  SignupPasswordHandleChange(event) {
    this.setState({ signup_password_value: event.target.value });
  }

  SignupConfirmPasswordChange(event) {
    this.setState({ signup_confirm_password_value: event.target.value });
  }

  async Login() {
    if (
      this.state.login_email_value === "" ||
      this.state.login_password_value === ""
    ) {
      alert("Please enter some text");
    } else {
      await firebase
        .auth()
        .signInWithEmailAndPassword(
          this.state.login_email_value,
          this.state.login_password_value
        )
        .catch(function (error) {
          alert(error.message);
        });
      await this.moveToHomeLogin();
    }
  }

  async Signup() {
    if (
      this.state.signup_email_value === "" ||
      this.state.signup_password_value === "" ||
      this.state.signup_confirm_password_value === ""
    ) {
      alert("Please enter some text");
    } else {
      if (
        this.state.signup_password_value ===
        this.state.signup_confirm_password_value
      ) {
        //NOTE: when signing up success: automatically log in
        await firebase
          .auth()
          .createUserWithEmailAndPassword(
            this.state.signup_email_value,
            this.state.signup_password_value
          )
          .catch(function (error) {
            alert(error.message);
          });
        await this.moveToNextPageSignup();
      } else {
        alert("Password and confirm password not matched");
      }
    }
  }

  moveToNextPageSignup() {
    if (firebase.auth().currentUser) {
      this.moveToNextPage();
    }
  }

  moveToHomeLogin() {
    if (firebase.auth().currentUser) {
      this.moveToNextPage();
      this.moveToNextPage();
    }
  }

  render() {
    if (this.state.currentPage === 0) {
      return (
        <div>
          <div className="card">
            <p className="p">Email</p>
            <input
              type="email"
              className="textfield"
              value={this.state.login_email_value}
              onChange={this.LoginEmailHandleChange}
            ></input>
            <p className="p">Password</p>
            <input
              type="password"
              className="textfield"
              value={this.state.login_password_value}
              onChange={this.LoginPasswordHandleChange}
            ></input>
            <button className="button_2" onClick={this.Login}>
              Log in
            </button>
            <button className="button_3" onClick={this.moveToNextPage}>
              Create new account
            </button>
          </div>
        </div>
      );
    } else {
      if (this.state.currentPage === 1) {
        return (
          <div>
            <div className="card">
              <p className="p">Email</p>
              <input
                type="email"
                className="textfield"
                value={this.state.signup_email_value}
                onChange={this.SignupEmailHandleChange}
              ></input>
              <p className="p">Password</p>
              <input
                type="password"
                className="textfield"
                value={this.state.signup_password_value}
                onChange={this.SignupPasswordHandleChange}
              ></input>
              <p className="p">Confirm password</p>
              <input
                type="password"
                className="textfield"
                value={this.state.signup_confirm_password_value}
                onChange={this.SignupConfirmPasswordChange}
              ></input>
              <div className="row_2">
                <span className="p">By signing up, you agree to our </span>
                <a
                  style={{
                    textDecoration: "none",
                    color: "#007BFC",
                    fontSize: "1.2rem",
                  }}
                  href="/termsofuse"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  terms of use
                </a>
              </div>
              <div className="row_2">
                <div className="column_1">
                  <button
                    className="button_4"
                    onClick={this.moveToPreviousPage}
                  >
                    <GoBackIcon />
                  </button>
                </div>
                <div className="column_2">
                  <button className="button_5" onClick={this.Signup}>
                    Next
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      } else {
        if (this.state.currentPage === 2) {
          return (
            <div className="card">
              <Redirect to="/home"></Redirect>
            </div>
          );
        }
        return (
          <div className="card">
            <p>ERROR: Please refresh this page</p>
          </div>
        );
      }
    }
  }
}

export default Home;
