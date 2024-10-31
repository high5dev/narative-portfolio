import { Canvas } from "@react-three/fiber";
import { MainRender } from "./components/MainRender";

function App() {
  return (
    <Canvas shadows camera={{ position: [3, 3, 3], fov: 30 }}>
      <color attach="background" args={["#ececec"]} />
      <MainRender />
    </Canvas>
  );
}

export default App;
