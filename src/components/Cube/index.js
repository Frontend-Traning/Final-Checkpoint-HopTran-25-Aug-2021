import React, { useState, useEffect } from "react";
import { useLoader, useThree } from "@react-three/fiber";
import { DoubleSide, TextureLoader } from "three";
import { getCameraPositionFromLookAtCoordinates } from "../../helper/getPosition";

import "./style.scss";

function Cube({ listScenes, activeId, locationLookAt }) {
  const { camera } = useThree();

  useEffect(() => {
    if (listScenes.length === 0) {
      return;
    } else {
      setIsLoadedScene(true);
    }
  }, [listScenes]);

  const [ox, oy, oz] = locationLookAt;
  const { x, y, z } = getCameraPositionFromLookAtCoordinates(ox, oy, oz);
  camera.position.set(x, y, z);

  const [isLoadedScene, setIsLoadedScene] = useState(false);
  const mapsCube = listScenes.find((scene) => scene.id === activeId);
  const maps = mapsCube ? mapsCube?.cubeMapImages?.size1024 : [];
  const [Px, Nx, Py, Ny, Pz, Nz] = useLoader(TextureLoader, [...maps]);

  if (isLoadedScene) {
    return (
      <group>
        <mesh>
          <boxGeometry args={[1000, 1000, 1000]} attach="geometry" />
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
      </group>
    );
  } else {
    return null;
  }
}
export default Cube;
