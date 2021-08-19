import React, { useRef, useState, useEffect } from "react";
import { useLoader } from "@react-three/fiber";
import { DoubleSide, TextureLoader } from "three";
import { Html } from "@react-three/drei";
import "./style.scss";

function Cube({ listScenes, activeId, changeActiveId }) {
  const [isLoadedScene, setIsLoadedScene] = useState(false);

  useEffect(() => {
    if (listScenes.length === 0) {
      return;
    } else {
      setIsLoadedScene(true);
    }
  }, [listScenes]);

  const mapsCube = listScenes.find((scene) => scene.id === activeId);

  const maps = mapsCube ? mapsCube?.cubeMapImages?.size1024 : [];

  const [Px, Nx, Py, Ny, Pz, Nz] = useLoader(TextureLoader, [...maps]);

  const listButton = listScenes.map((item) => {
    return (
      <button
        className={item?.id === activeId ? "active" : ""}
        key={item.id}
        onClick={() => changeActiveId(item)}
        disabled={item?.id === activeId ? true : false}
      >
        {item?.title}
      </button>
    );
  });

  //const mesh = useRef();

  if (isLoadedScene) {
    return (
      <group>
        <mesh>
          <boxGeometry args={[100, 100, 100]} attach="geometry" />
          <meshBasicMaterial
            map={Px}
            attachArray="material"
            side={DoubleSide}
          />
          <meshBasicMaterial
            map={Nx}
            attachArray="material"
            side={DoubleSide}
          />
          <meshBasicMaterial
            map={Py}
            attachArray="material"
            side={DoubleSide}
          />
          <meshBasicMaterial
            map={Ny}
            attachArray="material"
            side={DoubleSide}
          />
          <meshBasicMaterial
            map={Pz}
            attachArray="material"
            side={DoubleSide}
          />
          <meshBasicMaterial
            map={Nz}
            attachArray="material"
            side={DoubleSide}
          />
        </mesh>
        <mesh>
          <Html>
            <div className="list-button d-flex">{listButton}</div>
          </Html>
        </mesh>
      </group>
    );
  } else {
    return null;
  }
}
export default Cube;
