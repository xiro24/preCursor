import Model from "../glb/gltfjsx/Pillar";

export function SpawnPillars(props) {
  let amount = 10;

  const f = () => {
    let p = [];
    for (let i = 0; i < amount; i++) {
      let x = Math.floor(Math.random() * (25 - -25) + -25);
      let y = Math.floor(Math.random() * (25 - -25) + -25);
      let z = Math.floor(Math.random() * (25 - -25) + -25);
      p.push(<Model position={[x, 0, z]} />);
    }
    return p;
  };
  return <>{f()}</>;
}
