import "./App.scss";
import React, { Suspense, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Cube from "./components/Cube";
import axios from "axios";
import { setAllScenes, setActiveScence } from "./redux/actions/scene";
import { useSelector, useDispatch } from "react-redux";

const App = () => {
  const scenes = useSelector((state) => state.scene.listScenes);
  const activeId = useSelector((state) => state.scene.activeId);
  const dispatch = useDispatch();

  const fetchScenes = async () => {
    const response = await axios
      .get("https://my-json-server.typicode.com/vantu98/sample-api/scenes")
      .catch((error) => {
        console.log("Error", error);
      });
    dispatch(setAllScenes(response.data));
  };

  useEffect(() => {
    fetchScenes();
  }, []);

  function handleChangeActiveId(scene) {
    const action = setActiveScence(scene);
    dispatch(action);
  }

  return (
    <div className="wellcome">
      <div style={{ width: "100vw", height: "100vh" }}>
        <Canvas>
          <Suspense fallback={null}>
            <Cube
              listScenes={scenes}
              activeId={activeId}
              changeActiveId={handleChangeActiveId}
            />
          </Suspense>
          <OrbitControls />
        </Canvas>
      </div>
    </div>
  );
};

export default App;
