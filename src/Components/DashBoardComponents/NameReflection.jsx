import * as THREE from "three";
import React, { Suspense, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Reflector, Text, useTexture } from "@react-three/drei";

const NameReflection = () => {
  const fovValue = window.innerWidth > 650 ? 15 : 55;
  return (
    <div className="h-[100vh] sm:h-[110vh] ">
      <Canvas
        concurrent
        gl={{ alpha: false }}
        pixelRatio={[1, 1.5]}
        camera={{ position: [0, 3, 100], fov: fovValue }}
      >
        <color attach="background" args={["#1a224b"]} />
        <fog attach="fog" args={["#1a224b", 15, 25]} />
        <Suspense fallback={null}>
          <group position={[0, -1, 0]}>
            <VideoText position={[0, 1.2, -2]} />
            <Ground />
          </group>
          <ambientLight intensity={0.5} />
          <spotLight position={[0, 10, 0]} intensity={0.3} />
          <directionalLight position={[-50, 0, -40]} intensity={0.7} />
          <Intro />
        </Suspense>
      </Canvas>
    </div>
  );
};

function VideoText(props) {
  const [video] = useState(() =>
    Object.assign(document.createElement("video"), {
      src: "/random.mp4",
      crossOrigin: "Anonymous",
      loop: true,
      muted: true,
    })
  );
  useEffect(() => void video.play(), [video]);
  return (
    <Text
      font="/Inter-Bold.woff"
      fontSize={1.8}
      letterSpacing={-0.06}
      {...props}
    >
      KARTIK
      <meshBasicMaterial toneMapped={false}>
        <videoTexture
          attach="map"
          args={[video]}
          encoding={THREE.sRGBEncoding}
        />
      </meshBasicMaterial>
    </Text>
  );
}

function Ground() {
  const [floor, normal] = useTexture([
    "/SurfaceImperfections003_1K_var1.jpg",
    "/SurfaceImperfections003_1K_Normal.jpg",
  ]);
  return (
    <Reflector
      blur={[400, 100]}
      resolution={512}
      args={[25, 25]}
      mirror={0.5}
      mixBlur={6}
      mixStrength={1.5}
      rotation={[-Math.PI / 2, 0, Math.PI / 2]}
      position={[0, 0.4, 0]}
    >
      {(Material, props) => (
        <Material
          color="#a0a0a0"
          metalness={0.4}
          roughnessMap={floor}
          normalMap={normal}
          normalScale={[2, 2]}
          {...props}
        />
      )}
    </Reflector>
  );
}

function Intro() {
  const [vec] = useState(() => new THREE.Vector3());
  return useFrame((state) => {
    state.camera.position.lerp(
      vec.set(state.mouse.x * 5, 3 + state.mouse.y * 2, 14),
      0.05
    );
    state.camera.lookAt(0, 0, 0);
  });
}

export default NameReflection;
