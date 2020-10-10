import React from "react";
import { Link } from "react-router-dom";
import CheckCircleIcon from "../assets/icons/CheckCircleIcon";
import HelpIcon from "../assets/icons/HelpIcon";
import ThumbsUpIcon from "../assets/icons/ThumbsUpIcon";
import "./UsLeftMenu.css";

class UsLeftMenu extends React.Component {
  render() {
    if (this.props.currentPage === 0) {
      return (
        <div className="usleftmenu">
          <Link to="/us/todo" style={{ textDecoration: "none" }}>
            <div className="usleftmenu_tile">
              <div className="usleftmenu_tile_icon">
                <CheckCircleIcon
                  style={{ fill: "#007BFC", backgroundColor: "transparent" }}
                />
              </div>
              <div
                className="usleftmenu_tile_title"
                style={{ color: "#007BFC" }}
              >
                To do
              </div>
            </div>
          </Link>
          <Link to="/us/review" style={{ textDecoration: "none" }}>
            <div className="usleftmenu_tile">
              <div className="usleftmenu_tile_icon">
                <ThumbsUpIcon />
              </div>
              <div className="usleftmenu_tile_title">Review</div>
            </div>
          </Link>
          {/* <Link to="/about" style={{ textDecoration: "none" }}>
            <div className="usleftmenu_tile">
              <div className="usleftmenu_tile_icon">
                <HelpIcon />
              </div>
              <div className="usleftmenu_tile_title">About</div>
            </div>
          </Link> */}
        </div>
      );
    } else {
      if (this.props.currentPage === 1) {
        return (
          <div className="usleftmenu">
            <Link to="/us/todo" style={{ textDecoration: "none" }}>
              <div className="usleftmenu_tile">
                <div className="usleftmenu_tile_icon">
                  <CheckCircleIcon />
                </div>
                <div className="usleftmenu_tile_title">To do</div>
              </div>
            </Link>
            <Link to="/us/review" style={{ textDecoration: "none" }}>
              <div className="usleftmenu_tile">
                <div className="usleftmenu_tile_icon">
                  <ThumbsUpIcon
                    style={{ fill: "#007BFC", backgroundColor: "transparent" }}
                  />
                </div>
                <div
                  className="usleftmenu_tile_title"
                  style={{ color: "#007BFC" }}
                >
                  Review
                </div>
              </div>
            </Link>
            {/* <Link to="/about" style={{ textDecoration: "none" }}>
              <div className="usleftmenu_tile">
                <div className="usleftmenu_tile_icon">
                  <HelpIcon />
                </div>
                <div className="usleftmenu_tile_title">About</div>
              </div>
            </Link> */}
          </div>
        );
      } else {
        if (this.props.currentPage === 2) {
          return (
            <div className="usleftmenu">
              <Link to="/us/todo" style={{ textDecoration: "none" }}>
                <div className="usleftmenu_tile">
                  <div className="usleftmenu_tile_icon">
                    <CheckCircleIcon />
                  </div>
                  <div className="usleftmenu_tile_title">To do</div>
                </div>
              </Link>
              <Link to="/us/review" style={{ textDecoration: "none" }}>
                <div className="usleftmenu_tile">
                  <div className="usleftmenu_tile_icon">
                    <ThumbsUpIcon />
                  </div>
                  <div className="usleftmenu_tile_title">Review</div>
                </div>
              </Link>
              {/* <Link to="/about" style={{ textDecoration: "none" }}>
                <div className="usleftmenu_tile">
                  <div className="usleftmenu_tile_icon">
                    <HelpIcon style={{ fill: "#007BFC" }} />
                  </div>
                  <div
                    className="usleftmenu_tile_title"
                    style={{ color: "#007BFC" }}
                  >
                    About
                  </div>
                </div>
              </Link> */}
            </div>
          );
        } else {
          return (
            <div className="usleftmenu">
              <Link to="/us/todo" style={{ textDecoration: "none" }}>
                <div className="usleftmenu_tile">
                  <div className="usleftmenu_tile_icon">
                    <CheckCircleIcon />
                  </div>
                  <div className="usleftmenu_tile_title">To do</div>
                </div>
              </Link>
              <Link to="/us/review" style={{ textDecoration: "none" }}>
                <div className="usleftmenu_tile">
                  <div className="usleftmenu_tile_icon">
                    <ThumbsUpIcon />
                  </div>
                  <div className="usleftmenu_tile_title">Review</div>
                </div>
              </Link>
              <Link to="/about" style={{ textDecoration: "none" }}>
                <div className="usleftmenu_tile">
                  <div className="usleftmenu_tile_icon">
                    <HelpIcon />
                  </div>
                  <div className="usleftmenu_tile_title">About</div>
                </div>
              </Link>
            </div>
          );
        }
      }
    }
  }
}

export default UsLeftMenu;
