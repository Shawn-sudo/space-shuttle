import React from "react";
import "./Menu.css";

function Menu(props) {
  //width of this menu: 100px
  if (window.innerWidth > 750 + 200) {
    return <div className="menu_desktop"></div>
    //왼쪽에
  } else {
    return <div className="menu_mobile"></div>
    //NavBar 바로 아래에 (TabBar 처럼)
  }
}

export default Menu;
