import React, { useEffect, useRef } from "react";
import Model from "../glb/gltfjsx/Sol";
import { useKeyboardControls } from "../hooks/useKeyboardControls";
import { Vector3 } from "three";
import { useFrame } from "react-three-fiber";

export function SpawnSol(props) {
  let amount = 1;

  //here: https://github.com/danba340/minecraft-react/blob/dd4c7d0c8e49171b636f9ae27168865ad91cd67a/src/components/Player.js#L18
  // const { moveForward, moveBackward, moveLeft, moveRight, jump } =
  //   useKeyboardControls();

  // const velocity = useRef([0, 0, 0]);
  // useEffect(() => {
  //   api.velocity.subscribe((v) => (velocity.current = v));
  // }, [api.velocity]);

  // useFrame(() => {
  //   camera.position.copy(ref.current.position);
  //   const direction = new Vector3();

  //   const frontVector = new Vector3(
  //     0,
  //     0,
  //     (moveBackward ? 1 : 0) - (moveForward ? 1 : 0)
  //   );
  //   const sideVector = new Vector3(
  //     (moveLeft ? 1 : 0) - (moveRight ? 1 : 0),
  //     0,
  //     0
  //   );

  //   direction
  //     .subVectors(frontVector, sideVector)
  //     .normalize()
  //     .multiplyScalar(SPEED)
  //     .applyEuler(camera.rotation);

  //   api.velocity.set(direction.x, velocity.current[1], direction.z);

  //   if (jump && Math.abs(velocity.current[1].toFixed(2)) < 0.05) {
  //     api.velocity.set(velocity.current[0], 8, velocity.current[2]);
  //   }
  // });

  return <>{<Model position={props.position} />}</>;
}
