import { usePlane } from "@react-three/cannon";
import {
  TextureLoader,
  RepeatWrapping,
  NearestFilter,
  LinearMipMapLinearFilter,
} from "three";
import React, { useRef, useState } from "react";

import grass from "../images/grass.jpg";

export function Ground(props) {
  const [ref] = usePlane(() => ({ rotation: [-Math.PI / 2, 0, 0] }));
  const rough = new TextureLoader().load(grass);
  rough.magFilter = NearestFilter;
  rough.minFilter = LinearMipMapLinearFilter;
  rough.wrapS = RepeatWrapping;
  rough.wrapT = RepeatWrapping;
  rough.repeat.set(200, 200);

  return (
    <mesh
      rotation={[-Math.PI / 2, 0, 0]}
      position={[0, -0.5, 0]}
      receiveShadow
      castShadow
    >
      <planeBufferGeometry attach="geometry" args={[100, 100]} />
      <meshStandardMaterial map={rough} attach="material" />
      {/* <shadowMaterial attach="material" transparent opacity={0.4} /> */}
    </mesh>
    // <mesh {...props} receiveShadow rotation={[-Math.PI / 2, 0, 0]}>
    //   <planeBufferGeometry attach="geometry" args={[100, 100]} />
    //   <meshStandardMaterial map={rough} attach="material" />
    // </mesh>
  );
}
