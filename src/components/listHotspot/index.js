import React, { useState, useEffect } from "react";
import Hotspot from "../hotspot";

const ListHotspot = ({ listScenes, activeId, changeActiveId }) => {
  const [isLoadedScene, setIsLoadedScene] = useState(false);

  useEffect(() => {
    if (listScenes.length === 0) {
      return;
    } else {
      setIsLoadedScene(true);
    }
  }, [listScenes]);
  const listSceneId = listScenes.map((scene) => scene.id);
  const currentScene = listScenes.find((scene) => scene.id === activeId);
  const listHotspot = currentScene?.hotspots ? currentScene?.hotspots : [];
  if (isLoadedScene) {
    return (
      <>
        {listHotspot.map((hotspot) => (
          <Hotspot
            key={hotspot.id}
            item={hotspot}
            activeId={activeId}
            changeActiveId={changeActiveId}
            listId={listSceneId}
          />
        ))}
      </>
    );
  } else return null;
};

export default ListHotspot;
