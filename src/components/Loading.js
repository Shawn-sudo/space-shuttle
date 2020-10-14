import React from "react";
import AddIcon from "../assets/icons/AddIcon";
import ArrowDropDownIcon from "../assets/icons/ArrowDropDownIcon";
import ExploreOutlinedIcon from "../assets/icons/ExploreOutlinedIcon";
import HomeOutlinedIcon from "../assets/icons/HomeOutlinedIcon";
import "./NavBar.css";

function Loading() {
  return (
    <>
      {/* lite navbar */}
      <div className="navbar">
        <div className="navbar_container_1">
          <div className="navbar_name"></div>
        </div>
        <div className="navbar_container_2">
          <div className="navbar_menu">
            <div className="navbar_menu_child">
              <button className="navbar_icon_button">
                <HomeOutlinedIcon
                  style={{
                    verticalAlign: "middle",
                    display: "tableCell",
                    fill: "gray",
                    height: "2.5rem",
                  }}
                />
              </button>
            </div>
            <div className="navbar_menu_child">
              <button className="navbar_icon_button">
                <ExploreOutlinedIcon
                  style={{
                    verticalAlign: "middle",
                    display: "tableCell",
                    fill: "gray",
                    height: "2.5rem",
                  }}
                />
              </button>
            </div>
          </div>
        </div>
        <div className="navbar_container_3"></div>
      </div>
      <div className="navbar_action_buttons" style={{ top: 0, right: 0 }}>
        <div className="navbar_container_3_column">
          <button className="navbar_round_icon_button_1">
            <ArrowDropDownIcon />
          </button>
        </div>
        <div className="navbar_container_3_column">
          <button className="navbar_round_icon_button_1">
            <AddIcon />
          </button>
        </div>
        <div
          className="navbar_container_3_column"
          style={{ backgroundImage: "url(https://picsum.photos/300/300)" }}
        ></div>
      </div>
    </>
  );
}

export default Loading;
