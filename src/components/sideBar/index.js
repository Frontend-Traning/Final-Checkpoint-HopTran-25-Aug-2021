import React from "react";
import NavLink from "../navLink";

import "./style.scss";

const SideBar = ({ listScenes, activeId, changeActiveId }) => {
  const menuLinks = listScenes.map((item, index) => (
    <NavLink
      key={index}
      item={item}
      activedId={activeId}
      changeActiveId={changeActiveId}
    />
  ));
  return <div className="side-bar">{menuLinks}</div>;
};

export default SideBar;
