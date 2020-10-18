import React from "react";
import firebase from "firebase";
import "../../firebase";
import "./MainHome.css";
import FavoriteFilledIcon from "../../assets/icons/FavoriteFilledIcon";
import FavoriteOutlinedIcon from "../../assets/icons/FavoriteOutlinedIcon";

function MainHome() {
  return (
    <>
      <div className="content_container">
        <div className="content">
          <div className="content_top">
            <div className="content_top_left">
              <div
                className="content_top_profile_image"
                style={{
                  backgroundImage: "url(https://picsum.photos/300/300)",
                }}
              ></div>
              <div className="content_top_profile_name">Shawn</div>
            </div>
          </div>
          <div className="content_body">
            <img
              className="content_body_image"
              alt=""
              src="https://picsum.photos/5000/2000"
            ></img>
            <div className="content_body_text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam nec
              mi augue. Mauris ac gravida urna, in sodales ligula. Pellentesque
              sodales non risus vel tristique. Sed odio est, dictum quis
              volutpat et, luctus nec lacus. Curabitur pharetra, ex eleifend
              tempor pretium, enim lacus iaculis nulla, non semper lectus erat
              ut libero.
            </div>
          </div>
          <div className="content_end">
            <div className="content_end_column">
              <div className="content_end_column_button" onClick={() => {}}>
                <FavoriteOutlinedIcon />
              </div>
            </div>
            <div className="content_end_column">
              <div className="content_end_column_button"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MainHome;
