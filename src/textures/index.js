import React, { useRef } from "react";
import {useFrame, useLoader } from "@react-three/fiber";
import { DoubleSide,TextureLoader } from "three";
import EarthDayMap from "../asset/8k_earth_daymap.jpg";
import EarthNormalMap from "../asset/8k_earth_normal_map.jpg";
import EarthSpecularMap from "../asset/8k_earth_specular_map.jpg";
import EarthCloudMap from "../asset/8k_earth_clouds.jpg";

const Earth = () => {
  const [colorMap, normalMap, specularMap, cloudsMap] = useLoader(
    TextureLoader,
    [EarthDayMap, EarthNormalMap, EarthSpecularMap, EarthCloudMap]
  );
const mesh = useRef();
const cloudsRef = useRef();

//set animation rotation
useFrame(({ clock }) => {
  const elapsedTime = clock.getElapsedTime();
  mesh.current.rotation.y = elapsedTime / 4;
  cloudsRef.current.rotation.y = elapsedTime / 4;
});


  return (
    <>
      <ambientLight intensity={1} />

      <mesh ref={cloudsRef} >
        <sphereGeometry args={[1, 32, 32]} />
        <meshPhongMaterial
          map={cloudsMap}
          opacity={0.4}
          depthWrite={true}
          transparent={true}
          side={DoubleSide}
        />
      </mesh>
      <mesh ref={mesh}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshPhongMaterial specularMap={specularMap} />
        <meshStandardMaterial map={colorMap} normalMap={normalMap} />
      </mesh>
    </>
  );
};
export default Earth;
