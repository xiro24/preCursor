import ReactDOM from "react-dom";
import { Scene, Matrix4 } from "three";
import React, { useRef, useMemo, useState } from "react";
import { useFrame, useThree, createPortal } from "@react-three/fiber";

export function Box(props) {
  // This reference will give us direct access to the mesh
  const mesh = useRef();
  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);
  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((state, delta) => (mesh.current.rotation.x += 0.01));
  // Return view, these are regular three.js elements expressed in JSX

  return (
    <>
      <mesh
        // {...props}
        ref={mesh}
        scale={active ? 1.5 : 1}
        onClick={(event) => setActive(!active)}
        onPointerOver={(event) => setHover(true)}
        onPointerOut={(event) => setHover(false)}
        position={[500 / 2 - 80, 500 / 2 - 80, 0]}
        // onPointerOut={(e) => set(null)}
        // onPointerMove={(e) => set(Math.floor(e.faceIndex / 2))}
        // receiveShadow
        // castShadow
      >
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color={hovered ? "hotpink" : "orange"} />
      </mesh>
    </>
  );
}
