import create from "zustand";
import { nanoid } from "nanoid";
export const position = [0, -0.55, 0];

export const useStore = create((set) => ({
  player: (status, condition, position) =>
    set((state) => ({
      key: nanoid(),
      position: [position.x, position.y, position.z],
      condition: condition,
      status: status,
    })),
  genericStaticProp: (position) =>
    set((state) => ({
      key: nanoid(),
      position: [position.x, position.y, position.z],
    })),
  cameraPosition: (position) =>
    set((state) => ({
      position: [position.x, position.y, position.z],
    })),
}));
