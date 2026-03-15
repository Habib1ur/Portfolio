"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Float, Html, RoundedBox } from "@react-three/drei";
import { Suspense, useRef } from "react";
import * as THREE from "three";

function ScreenLine({
  position,
  width,
  color,
  opacity = 0.8
}: {
  position: [number, number, number];
  width: number;
  color: string;
  opacity?: number;
}) {
  return (
    <mesh position={position}>
      <planeGeometry args={[width, 0.055]} />
      <meshBasicMaterial color={color} transparent opacity={opacity} />
    </mesh>
  );
}

function CodingEnvironment() {
  const groupRef = useRef<THREE.Group>(null);
  const monitorRef = useRef<THREE.Group>(null);
  const sideMonitorRef = useRef<THREE.Group>(null);
  const panelRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    const targetY = state.pointer.x * 0.32;
    const targetX = -state.pointer.y * 0.16;

    if (groupRef.current) {
      groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, targetY, 0.05);
      groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, targetX, 0.05);
      groupRef.current.position.y = THREE.MathUtils.lerp(groupRef.current.position.y, Math.sin(t * 1.15) * 0.04, 0.05);
    }

    if (monitorRef.current) {
      monitorRef.current.rotation.y = Math.sin(t * 0.75) * 0.03 + state.pointer.x * 0.1;
    }

    if (sideMonitorRef.current) {
      sideMonitorRef.current.rotation.y = 0.48 + state.pointer.x * 0.08;
      sideMonitorRef.current.position.y = -0.02 + Math.sin(t * 1.5) * 0.03;
    }

    if (panelRef.current) {
      panelRef.current.position.y = 1.7 + Math.sin(t * 1.6) * 0.08;
      panelRef.current.rotation.y = -0.42 + state.pointer.x * 0.12;
    }
  });

  return (
    <group ref={groupRef} position={[0, -0.58, 0]}>
      <mesh position={[0, -1.55, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <circleGeometry args={[2.55, 72]} />
        <meshBasicMaterial color="#60A5FA" transparent opacity={0.1} />
      </mesh>

      <mesh position={[0, -1.48, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <ringGeometry args={[1.82, 2.28, 72]} />
        <meshBasicMaterial color="#5EEAD4" transparent opacity={0.2} side={THREE.DoubleSide} />
      </mesh>

      <mesh position={[-2.35, 1.82, -2]}>
        <sphereGeometry args={[0.42, 24, 24]} />
        <meshBasicMaterial color="#5EEAD4" transparent opacity={0.13} />
      </mesh>

      <mesh position={[2.55, -0.35, -2.2]}>
        <sphereGeometry args={[0.68, 24, 24]} />
        <meshBasicMaterial color="#60A5FA" transparent opacity={0.12} />
      </mesh>

      <RoundedBox args={[4.9, 0.16, 2.05]} radius={0.06} smoothness={4} position={[0, -1.2, -0.15]}>
        <meshStandardMaterial color="#10192b" roughness={0.42} metalness={0.3} />
      </RoundedBox>

      <mesh position={[0, -1.1, -0.72]}>
        <boxGeometry args={[4.55, 0.02, 0.08]} />
        <meshBasicMaterial color="#5EEAD4" transparent opacity={0.2} />
      </mesh>

      <Float speed={1.4} rotationIntensity={0.14} floatIntensity={0.28}>
        <group ref={monitorRef} position={[-0.35, 0.02, -0.02]}>
          <RoundedBox args={[3.3, 1.95, 0.12]} radius={0.08} smoothness={4} position={[0, 0.2, 0]}>
            <meshStandardMaterial color="#0d1526" roughness={0.34} metalness={0.46} />
          </RoundedBox>

          <mesh position={[0, 0.22, 0.071]}>
            <planeGeometry args={[2.98, 1.63]} />
            <meshBasicMaterial color="#091625" />
          </mesh>

          <mesh position={[-0.82, 0.8, 0.08]}>
            <planeGeometry args={[0.58, 0.08]} />
            <meshBasicMaterial color="#5EEAD4" transparent opacity={0.95} />
          </mesh>
          <mesh position={[0.2, 0.8, 0.08]}>
            <planeGeometry args={[0.78, 0.07]} />
            <meshBasicMaterial color="#60A5FA" transparent opacity={0.78} />
          </mesh>
          <mesh position={[0.98, 0.8, 0.08]}>
            <planeGeometry args={[0.26, 0.07]} />
            <meshBasicMaterial color="#34d399" transparent opacity={0.8} />
          </mesh>

          <ScreenLine position={[-0.92, 0.5, 0.08]} width={1.1} color="#93c5fd" />
          <ScreenLine position={[-0.55, 0.3, 0.08]} width={1.62} color="#7dd3fc" opacity={0.72} />
          <ScreenLine position={[-0.1, 0.1, 0.08]} width={1.92} color="#5EEAD4" opacity={0.68} />
          <ScreenLine position={[-0.56, -0.1, 0.08]} width={1.28} color="#c084fc" opacity={0.66} />
          <ScreenLine position={[-0.82, -0.3, 0.08]} width={0.95} color="#60A5FA" opacity={0.62} />
          <ScreenLine position={[0.68, 0.35, 0.08]} width={0.76} color="#34d399" opacity={0.7} />
          <ScreenLine position={[0.72, 0.08, 0.08]} width={0.86} color="#5EEAD4" opacity={0.6} />
          <ScreenLine position={[0.62, -0.2, 0.08]} width={0.62} color="#93c5fd" opacity={0.65} />

          <Html transform position={[0, 0.22, 0.09]} distanceFactor={1.9} occlude>
            <div className="w-[470px] rounded-[22px] border border-white/10 bg-[#08111f]/95 p-4 font-mono text-[12px] leading-5 text-slate-200 shadow-[0_0_40px_rgba(96,165,250,0.12)] backdrop-blur-sm">
              <div className="mb-3 flex items-center justify-between text-[10px] uppercase tracking-[0.3em] text-slate-400">
                <span>portfolio.tsx</span>
                <span>Habibur Rahman</span>
              </div>
              <div className="space-y-1">
                <div><span className="text-cyan-300">const</span> <span className="text-blue-300">projects</span> = [</div>
                <div className="pl-4">{`{ title: "Drawboard", stack: ["React", "TypeScript", "Tailwind CSS"] },`}</div>
                <div className="pl-4">{`{ title: "Truth & Dare", stack: ["React", "Vite", "Framer Motion"] },`}</div>
                <div className="pl-4">{`{ title: "Sharkie", stack: ["JavaScript", "HTML", "CSS"] }`}</div>
                <div>];</div>
                <div className="pt-2"><span className="text-cyan-300">export default function</span> <span className="text-emerald-300">Portfolio</span>() {` {`}</div>
                <div className="pl-4"><span className="text-cyan-300">return</span> <span className="text-fuchsia-300">&lt;PremiumUI /&gt;</span>;</div>
                <div>{`}`}</div>
              </div>
            </div>
          </Html>

          <mesh position={[0, -1.02, 0]}>
            <cylinderGeometry args={[0.08, 0.12, 1.15, 24]} />
            <meshStandardMaterial color="#111c2f" roughness={0.45} metalness={0.4} />
          </mesh>
          <mesh position={[0, -1.64, 0]}>
            <cylinderGeometry args={[0.55, 0.68, 0.08, 32]} />
            <meshStandardMaterial color="#0f1728" roughness={0.4} metalness={0.35} />
          </mesh>
        </group>
      </Float>

      <Float speed={1.6} rotationIntensity={0.1} floatIntensity={0.18}>
        <group ref={sideMonitorRef} position={[1.92, -0.02, -0.35]} rotation={[0, 0.48, 0]}>
          <RoundedBox args={[1.72, 1.18, 0.1]} radius={0.06} smoothness={4}>
            <meshStandardMaterial color="#0d1526" roughness={0.34} metalness={0.46} />
          </RoundedBox>
          <mesh position={[0, 0, 0.06]}>
            <planeGeometry args={[1.5, 0.96]} />
            <meshBasicMaterial color="#08111f" />
          </mesh>
          <Html transform position={[0, 0.01, 0.08]} distanceFactor={1.7} occlude>
            <div className="w-[180px] rounded-xl border border-white/10 bg-[#08111f]/95 p-3 font-mono text-[10px] leading-4 text-slate-200 shadow-[0_0_30px_rgba(94,234,212,0.14)] backdrop-blur-sm">
              <div className="mb-2 text-[9px] uppercase tracking-[0.25em] text-slate-400">Terminal</div>
              <div className="text-cyan-300">&gt; npm run dev</div>
              <div className="text-emerald-300">ready - localhost:3000</div>
              <div className="mt-2 text-blue-300">route /projects loaded</div>
              <div className="text-fuchsia-300">status: smooth</div>
            </div>
          </Html>
          <mesh position={[0, -0.88, 0]}>
            <cylinderGeometry args={[0.05, 0.08, 0.72, 24]} />
            <meshStandardMaterial color="#111c2f" roughness={0.45} metalness={0.4} />
          </mesh>
          <mesh position={[0, -1.28, 0]}>
            <cylinderGeometry args={[0.32, 0.42, 0.06, 24]} />
            <meshStandardMaterial color="#0f1728" roughness={0.4} metalness={0.35} />
          </mesh>
        </group>
      </Float>

      <RoundedBox args={[1.62, 0.06, 0.58]} radius={0.04} smoothness={4} position={[0.22, -1.06, 0.36]}>
        <meshStandardMaterial color="#d7e3f8" roughness={0.25} metalness={0.18} />
      </RoundedBox>
      {[-0.58, -0.29, 0, 0.29, 0.58].map((x) => (
        <mesh key={x} position={[x + 0.22, -1.02, 0.64]}>
          <boxGeometry args={[0.2, 0.03, 0.12]} />
          <meshBasicMaterial color="#0f1728" />
        </mesh>
      ))}

      <mesh position={[-1.46, -1.02, 0.18]} rotation={[-0.18, 0.42, 0.15]}>
        <boxGeometry args={[0.46, 0.08, 0.76]} />
        <meshStandardMaterial color="#dbeafe" roughness={0.2} metalness={0.22} />
      </mesh>
      <mesh position={[-1.46, -0.96, 0.18]} rotation={[-0.18, 0.42, 0.15]}>
        <planeGeometry args={[0.35, 0.56]} />
        <meshBasicMaterial color="#5EEAD4" transparent opacity={0.7} />
      </mesh>

      <mesh position={[1.58, -1.03, 0.45]}>
        <cylinderGeometry args={[0.17, 0.17, 0.07, 24]} />
        <meshStandardMaterial color="#0f1728" roughness={0.4} metalness={0.2} />
      </mesh>
      <mesh position={[1.58, -0.96, 0.45]}>
        <cylinderGeometry args={[0.16, 0.16, 0.02, 24]} />
        <meshBasicMaterial color="#5EEAD4" transparent opacity={0.6} />
      </mesh>

      <Float speed={1.8} rotationIntensity={0.12} floatIntensity={0.22}>
        <group ref={panelRef} position={[1.86, 1.7, 0.35]} rotation={[0.08, -0.42, 0]}>
          <RoundedBox args={[1.62, 1.14, 0.08]} radius={0.06} smoothness={4}>
            <meshStandardMaterial color="#0b1322" roughness={0.32} metalness={0.35} />
          </RoundedBox>
          <Html transform position={[0, 0.01, 0.06]} distanceFactor={1.5} occlude>
            <div className="w-[190px] rounded-2xl border border-white/10 bg-[#08111f]/95 p-3 font-mono text-[10px] leading-4 text-slate-200 shadow-[0_0_32px_rgba(96,165,250,0.12)] backdrop-blur-sm">
              <div className="mb-2 text-[9px] uppercase tracking-[0.25em] text-slate-400">Now Building</div>
              <div className="text-cyan-300">React + Next.js</div>
              <div className="text-blue-300">TypeScript + Tailwind</div>
              <div className="text-emerald-300">Motion + premium UI</div>
              <div className="mt-2 text-fuchsia-300">habib.ninja</div>
            </div>
          </Html>
        </group>
      </Float>
    </group>
  );
}

export function HeroScene() {
  return (
    <div className="relative h-[420px] w-full overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 shadow-glass backdrop-blur-xl md:h-[560px]">
      <Canvas camera={{ position: [0, 0.2, 6.35], fov: 38 }} dpr={[1, 1.8]}>
        <Suspense fallback={null}>
          <color attach="background" args={["#09101d"]} />
          <fog attach="fog" args={["#09101d", 5, 11.5]} />
          <ambientLight intensity={0.82} />
          <directionalLight position={[3, 4, 3]} intensity={2.1} color="#ffffff" />
          <pointLight position={[-3, -2, 2]} intensity={2.4} color="#60A5FA" />
          <pointLight position={[2, 1, 2]} intensity={2.25} color="#5EEAD4" />
          <spotLight position={[0, 5, 3]} intensity={1.55} angle={0.34} penumbra={1} color="#dbeafe" />
          <CodingEnvironment />
          <Environment preset="city" />
        </Suspense>
      </Canvas>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_42%,rgba(9,16,29,0.84)_100%)]" />
    </div>
  );
}
