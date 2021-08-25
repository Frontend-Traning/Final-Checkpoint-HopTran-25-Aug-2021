import React, { useMemo, useCallback } from "react";
import { Html } from "@react-three/drei";
import { RiWalkFill } from "react-icons/ri";
import "./style.scss";

const Hotspot = ({ item, changeActiveId, listId }) => {
  const activeHotspot = useMemo(
    () => listId.includes(item.sceneLinkId),
    [item, listId]
  );

  const handleChangeActiveId = useCallback(
    (e) => {
      changeActiveId(e.target.getAttribute("active-id"));
    },
    [changeActiveId]
  );
  if (item)
    return (
      <Html position={item.location}>
        <div
          className={activeHotspot ? "active hotspot" : " hotspot"}
          onClick={handleChangeActiveId}
          active-id={item.sceneLinkId}
        >
          <RiWalkFill
            className="icons-hotspot"
            size="1.5em"
            color={activeHotspot ? "white" : "grey"}
          />
        </div>
      </Html>
    );
  return null;
};

export default Hotspot;
