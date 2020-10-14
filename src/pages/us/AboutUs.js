import React from "react";
import UsLeftMenu from "../../components/UsLeftMenu";
import "./AboutUs.css";

function AboutUs() {
  return (
    <>
      <UsLeftMenu currentPage={2} />
      <div className="space_h_5"></div>
      <div className="container_1">
        {/* container_1에 margin-top 을 주면 LeftMenu에 합산이 돼 LeftMenu 가 살짝 아래로 내려가있는 것처럼 보임 -> space_h_5로 해결 */}
        <div className="container_2">
          <div className="container_row">
            <div className="container_row_key">Framework</div>
            <div className="container_row_value">React</div>
          </div>
          <div className="container_row">
            <div className="container_row_key">Icons</div>
            <div className="container_row_value">material.io</div>
          </div>
          <div className="space_h_2"></div>
          <div className="container_row_title">Browser support</div>
          <div className="container_row">
            <div className="container_row_key">
              <a
                href="https://www.google.com/chrome/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none", color: "#007BFC" }}
              >
                Chrome
              </a>
            </div>
            <div className="container_row_value">O</div>
          </div>
          <div className="container_row">
            <div className="container_row_key">
              <a
                href="https://www.microsoft.com/edge"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none", color: "#007BFC" }}
              >
                Edge
              </a>
            </div>
            <div className="container_row_value">O</div>
          </div>
          <div className="container_row">
            <div className="container_row_key">
              <a
                href="https://www.mozilla.org/firefox/new/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none", color: "#007BFC" }}
              >
                Firefox
              </a>
            </div>
            <div className="container_row_value">△</div>
          </div>
          <div className="container_row">
            <div className="container_row_key">
              <a
                href="https://www.opera.com/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none", color: "#007BFC" }}
              >
                Opera
              </a>
            </div>
            <div className="container_row_value">Seems to be O</div>
          </div>
          <div className="container_row">
            <div className="container_row_key">
              <a
                href="https://whale.naver.com/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none", color: "#007BFC" }}
              >
                Whale
              </a>
            </div>
            <div className="container_row_value">O</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutUs;
