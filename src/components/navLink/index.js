import React, { useMemo, useCallback } from "react";
import { ImLocation } from "react-icons/im";

import "./style.scss";
const NavLink = ({ item, activedId, changeActiveId }) => {
  const disabled = useMemo(() => item.id === activedId, [item, activedId]);

  const handleChangeActiveId = useCallback(
    (e) => {
      changeActiveId(e.target.getAttribute("active-id"));
    },
    [changeActiveId]
  );

  if (item) {
    return (
      <li
        className={item.id === activedId ? "active" : ""}
        onClick={handleChangeActiveId}
        disabled={disabled}
        active-id={item.id}
      >
        <ImLocation
          className="icon-link"
          color={item.id === activedId ? "red" : "white"}
        />
        {item.title}
      </li>
    );
  }
  return null;
};

export default NavLink;
