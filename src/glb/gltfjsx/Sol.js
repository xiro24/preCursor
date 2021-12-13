/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

export default function Model({ ...props }) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/gltf/sol.glb");
  const { actions } = useAnimations(animations, group);
  useEffect(() => {
    console.log(actions);
    actions.idle.play();
  });
  return (
    <group ref={group} {...props} dispose={null}>
      <group position={[0, 0.07, 0]}>
        <primitive object={nodes.spine} />
        <skinnedMesh
          geometry={nodes.Cube001.geometry}
          material={nodes.Cube001.material}
          skeleton={nodes.Cube001.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Cube002.geometry}
          material={nodes.Cube002.material}
          skeleton={nodes.Cube002.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Cube010.geometry}
          material={nodes.Cube010.material}
          skeleton={nodes.Cube010.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Cube010_1.geometry}
          material={materials["Material.011"]}
          skeleton={nodes.Cube010_1.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Cube010_2.geometry}
          material={materials["Material.010"]}
          skeleton={nodes.Cube010_2.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Cube010_3.geometry}
          material={materials["Material.020"]}
          skeleton={nodes.Cube010_3.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Cube010_4.geometry}
          material={materials["Material.019"]}
          skeleton={nodes.Cube010_4.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Cube010_5.geometry}
          material={materials["Material.012"]}
          skeleton={nodes.Cube010_5.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Cube010_6.geometry}
          material={materials["Material.007"]}
          skeleton={nodes.Cube010_6.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Cube010_7.geometry}
          material={materials["Material.008"]}
          skeleton={nodes.Cube010_7.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Cube010_8.geometry}
          material={materials["Material.017"]}
          skeleton={nodes.Cube010_8.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Cube010_9.geometry}
          material={materials["Material.015"]}
          skeleton={nodes.Cube010_9.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Cube010_10.geometry}
          material={materials["Material.013"]}
          skeleton={nodes.Cube010_10.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Cube010_11.geometry}
          material={materials["Material.009"]}
          skeleton={nodes.Cube010_11.skeleton}
        />
      </group>
      <group
        name="sword_bone"
        position={[-0.33, 1.03, -0.04]}
        rotation={[2.21, 0.33, -0.09]}
        scale={[0.32, 0.32, 0.32]}
      >
        <primitive object={nodes.Bone} />
        <skinnedMesh
          geometry={nodes.Cube004.geometry}
          material={materials["Material.018"]}
          skeleton={nodes.Cube004.skeleton}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/gltf/sol.glb");
