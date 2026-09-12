"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial } from "@react-three/drei";
import { useTheme } from "next-themes";
import * as THREE from "three";

type Palette = { blob: string; ring: string; accent: string };

function Sculpture({ palette }: { palette: Palette }) {
  const group = useRef<THREE.Group>(null);
  const ringA = useRef<THREE.Mesh>(null);
  const ringB = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const g = group.current;
    if (g) {
      g.rotation.y = THREE.MathUtils.lerp(g.rotation.y, state.pointer.x * 0.45, 0.04);
      g.rotation.x = THREE.MathUtils.lerp(g.rotation.x, -state.pointer.y * 0.28, 0.04);
    }
    if (ringA.current) ringA.current.rotation.z += 0.0012;
    if (ringB.current) ringB.current.rotation.z -= 0.0009;
  });

  return (
    <group ref={group}>
      <Float speed={1.3} rotationIntensity={0.35} floatIntensity={0.85}>
        <mesh>
          <sphereGeometry args={[1.55, 96, 96]} />
          <MeshDistortMaterial
            distort={0.36}
            speed={1.05}
            color={palette.blob}
            roughness={0.24}
            metalness={0.42}
          />
        </mesh>
      </Float>
      <mesh ref={ringA} rotation={[Math.PI / 2.35, 0.35, 0]}>
        <torusGeometry args={[2.45, 0.011, 8, 160]} />
        <meshStandardMaterial color={palette.ring} roughness={0.55} metalness={0.3} />
      </mesh>
      <mesh ref={ringB} rotation={[Math.PI / 1.8, -0.5, 0.4]}>
        <torusGeometry args={[2.15, 0.008, 8, 160]} />
        <meshStandardMaterial color={palette.accent} roughness={0.4} metalness={0.2} />
      </mesh>
    </group>
  );
}

const palettes = {
  dark: { blob: "#181c1a", ring: "#4a4f4b", accent: "#4ade9c" },
  light: { blob: "#e9e7e1", ring: "#b9b6ad", accent: "#0a7a5e" },
};

export default function HeroScene() {
  const { resolvedTheme } = useTheme();
  const palette = resolvedTheme === "light" ? palettes.light : palettes.dark;

  return (
    <Canvas
      dpr={[1, 1.5]}
      camera={{ position: [0, 0, 6.2], fov: 42 }}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      className="!absolute inset-0"
    >
      <ambientLight intensity={0.85} />
      <directionalLight position={[5, 6, 4]} intensity={1.5} />
      <directionalLight position={[-5, -3, -2]} intensity={2.2} color={palette.accent} />
      <Sculpture palette={palette} />
    </Canvas>
  );
}
