import React, { Suspense } from "react";
import { Canvas, createPortal } from "@react-three/fiber";
import { ViewHealthCube } from "./GUI/ViewHealthCube";
import { Box } from "./GUI/Box";
import { SkyBox } from "./components/SkyBox";
import { Ground } from "./components/Ground";
import { Physics } from "@react-three/cannon";
import { Effector } from "./PostProcessing/Effector";
import { OrbitControls } from "@react-three/drei";
import { SpawnPillars } from "./environment/SpawnPillars";
import { SpawnSol } from "./environment/SpawnSol";
import { position } from "./hooks/useStore";
import { Hud } from "./GUI/Hud";

import {
  Html,
  Icosahedron,
  useTexture,
  useCubeTexture,
  MeshDistortMaterial,
} from "@react-three/drei";

function App() {
  return (
    <>
      <Hud />
      <Canvas
        colorManagement
        shadows
        // camera={{
        //   position: [position[0] + 2, position[1] + 5, position[2]],
        //   fov: 50,
        // }}
      >
        {/* <SkyBox /> */}
        <ambientLight color={0x2d3645} intensity={1.0} />
        <pointLight
          intensity={0.5}
          color={0xfffc9c}
          castShadow={true}
          intensity={0.7}
          position={[100, 100, 80]}
        />

        <directionalLight
          intensity={0.5}
          color={0xfffc9c}
          position={[100, 100, 80]}
        />

        {/* <pointLight position={[10, 10, 10]} /> */}
        {/* <Camera position={[0, 10, -45]} near={1} far={1000} /> */}
        <Suspense fallback={<Html center>Loading.</Html>}>
          <Physics>
            <Ground position={[0, -0.5, 0]} />
            {/* <Box position={[-1.2, 0, 0]} /> */}
            {/* <Box position={[1.2, 0, 0]} /> */}
            <OrbitControls
              position={[position[0] + 2, position[1] + 5, position[2]]}
            />
            <SpawnPillars />
            <SpawnSol position={position} />
          </Physics>
        </Suspense>
        <Effector />
      </Canvas>
      <ViewHealthCube />
    </>
  );
}

export default App;
