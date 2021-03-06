import React from "react";
import "./404.css";
import { Redirect } from "react-router-dom";

class ErrorPageNotFound extends React.Component {
  state = {
    redirect: false,
  };

  setRedirect = () => {
    this.setState({
      redirect: true,
    });
  };

  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to="/" />;
    }
  };

  render() {
    return (
      <>
        <div className="message">
          <span role="img" aria-label="">
            🤔
          </span>
          <h1>This Page Isn't Available</h1>
          <p>
            The link may be broken, or the page may have been removed. Check to
            see if the link you're trying to open is correct.
          </p>
          {this.renderRedirect()}
          <button onClick={this.setRedirect} className="button">
            Go to Home
          </button>
          <p></p>
        </div>
        <p>Temporary 404 page</p>
      </>
    );
  }
}

export default ErrorPageNotFound;
