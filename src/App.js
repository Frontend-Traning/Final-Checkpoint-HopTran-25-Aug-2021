import React, { Suspense, useEffect, useCallback } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import SideBar from "./components/sideBar";
import ListHotspot from "./components/listHotspot";
import { setAllScenes, setActiveScence } from "./redux/actions/scene";
import Cube from "./components/Cube";
import "./App.scss";

const App = () => {
  const scenes = useSelector((state) => state.scene.listScenes);
  const activeId = useSelector((state) => state.scene.activeId);
  const locationLookAt = useSelector((state) => state.scene.defaultLocation);

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchScenes = async () => {
      const response = await axios
        .get("https://my-json-server.typicode.com/vantu98/sample-api/scenes")
        .catch((error) => {
          console.log("Error", error);
        });
      dispatch(setAllScenes(response.data));
    };

    fetchScenes();
  }, [dispatch]);

  const handleChangeActiveId = useCallback(
    (id) => {
      const listId = scenes.map((item) => item.id);
      if (listId.includes(id)) {
        dispatch(setActiveScence(id));
      }
    },
    [dispatch, scenes]
  );

  return (
    <div className="wellcome">
      <div className="main-scene">
        <Canvas>
          <Suspense fallback={null}>
            <Cube
              listScenes={scenes}
              activeId={activeId}
              changeActiveId={handleChangeActiveId}
              locationLookAt={locationLookAt}
            />

            <ListHotspot
              listScenes={scenes}
              activeId={activeId}
              changeActiveId={handleChangeActiveId}
            />
          </Suspense>
          <OrbitControls />
        </Canvas>
      </div>
      <SideBar
        listScenes={scenes}
        activeId={activeId}
        changeActiveId={handleChangeActiveId}
      />
    </div>
  );
};

export default App;
