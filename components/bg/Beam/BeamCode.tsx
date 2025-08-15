import React, {
  forwardRef,
  useImperativeHandle,
  useEffect,
  useRef,
  useMemo,
} from "react";

import * as THREE from "three";
import { Canvas, useFrame } from "@react-three/fiber";
import { PerspectiveCamera } from "@react-three/drei";
import { degToRad } from "three/src/math/MathUtils.js";
import { createStackedPlanesBufferGeometry } from "./createStackedPlanesBufferGeometry";
import { extendMaterial } from "./extendMaterial";
import { hexToNormalizedRGB } from "./hexToNormalizedRGB";
import { noise } from "./noise";

type CanvasWrapperProps = {
  children: React.ReactNode;
};

const CanvasWrapper: React.FC<CanvasWrapperProps> = ({ children }) => (
  <Canvas
    dpr={[1, 2]}
    frameloop="always"
    className="fixed top-0 left-0 w-screen h-screen"
    style={{ pointerEvents: "none", zIndex: -1 }}
  >
    {children}
  </Canvas>
);

type MergedPlanesProps = {
  material: THREE.Material;
  width: number;
  count: number;
  height: number;
};

const MergedPlanes = forwardRef<THREE.Mesh, MergedPlanesProps>(
  ({ material, width, count, height }, ref) => {
    const mesh = useRef<THREE.Mesh>(null);
    useImperativeHandle(ref, () => mesh.current!);
    const geometry = useMemo(
      () => createStackedPlanesBufferGeometry(count, width, height, 0, 100),
      [count, width, height]
    );
    useFrame((_, delta) => {
      if (mesh.current && "uniforms" in mesh.current.material) {
        (mesh.current.material as any).uniforms.time.value += 0.1 * delta;
      }
    });
    return <mesh ref={mesh} geometry={geometry} material={material} />;
  }
);
MergedPlanes.displayName = "MergedPlanes";

type PlaneNoiseProps = MergedPlanesProps;

const PlaneNoise = forwardRef<THREE.Mesh, PlaneNoiseProps>((props, ref) => (
  <MergedPlanes
    ref={ref}
    material={props.material}
    width={props.width}
    count={props.count}
    height={props.height}
  />
));
PlaneNoise.displayName = "PlaneNoise";

type DirLightProps = {
  position: [number, number, number];
  color: string;
};

const DirLight: React.FC<DirLightProps> = ({ position, color }) => {
  const dir = useRef<THREE.DirectionalLight>(null);
  useEffect(() => {
    if (!dir.current) return;
    const cam = dir.current.shadow?.camera as THREE.OrthographicCamera;
    if (!cam) return;
    cam.top = 24;
    cam.bottom = -24;
    cam.left = -24;
    cam.right = 24;
    cam.far = 64;
    dir.current.shadow.bias = -0.004;
  }, []);
  return (
    <directionalLight
      ref={dir}
      color={color}
      intensity={1}
      position={position}
      castShadow
    />
  );
};

type BeamsProps = {
  beamWidth?: number;
  beamHeight?: number;
  beamNumber?: number;
  lightColor?: string;
  speed?: number;
  noiseIntensity?: number;
  scale?: number;
  rotation?: number;
};

const Beams: React.FC<BeamsProps> = ({
  beamWidth = 2,
  beamHeight = 15,
  beamNumber = 12,
  lightColor = "#ffffff",
  speed = 2,
  noiseIntensity = 1.75,
  scale = 0.2,
  rotation = 0,
}) => {
  const meshRef = useRef<THREE.Mesh>(null);

  const beamMaterial = useMemo(() => {
    return extendMaterial(THREE.MeshStandardMaterial, {
      header: `
        varying vec3 vEye;
        varying float vNoise;
        varying vec2 vUv;
        varying vec3 vPosition;
        uniform float time;
        uniform float uSpeed;
        uniform float uNoiseIntensity;
        uniform float uScale;
        ${noise}`,
      vertexHeader: `
        float getPos(vec3 pos) {
          vec3 noisePos = vec3(pos.x * 0., pos.y - uv.y, pos.z + time * uSpeed * 3.) * uScale;
          return cnoise(noisePos);
        }
        vec3 getCurrentPos(vec3 pos) {
          vec3 newpos = pos;
          newpos.z += getPos(pos);
          return newpos;
        }
        vec3 getNormal(vec3 pos) {
          vec3 curpos = getCurrentPos(pos);
          vec3 nextposX = getCurrentPos(pos + vec3(0.01, 0.0, 0.0));
          vec3 nextposZ = getCurrentPos(pos + vec3(0.0, -0.01, 0.0));
          vec3 tangentX = normalize(nextposX - curpos);
          vec3 tangentZ = normalize(nextposZ - curpos);
          return normalize(cross(tangentZ, tangentX));
        }`,
      fragmentHeader: "",
      vertex: {
        "#include <begin_vertex>": `transformed.z += getPos(transformed.xyz);`,
        "#include <beginnormal_vertex>": `objectNormal = getNormal(position.xyz);`,
      },
      fragment: {
        "#include <dithering_fragment>": `
          float randomNoise = noise(gl_FragCoord.xy);
          gl_FragColor.rgb -= randomNoise / 15. * uNoiseIntensity;`,
      },
      material: { fog: true },
      uniforms: {
        diffuse: new THREE.Color(...hexToNormalizedRGB("#000000")),
        time: { value: 0 },
        roughness: 0.3,
        metalness: 0.3,
        uSpeed: speed,
        envMapIntensity: 10,
        uNoiseIntensity: noiseIntensity,
        uScale: scale,
      },
    });
  }, [speed, noiseIntensity, scale]);

  return (
    <CanvasWrapper>
      <group rotation={[0, 0, degToRad(rotation)]}>
        <PlaneNoise
          ref={meshRef}
          material={beamMaterial}
          count={beamNumber}
          width={beamWidth}
          height={beamHeight}
        />
        <DirLight color={lightColor} position={[0, 3, 10]} />
      </group>
      <ambientLight intensity={1} />
      <color attach="background" args={["#000000"]} />
      <PerspectiveCamera makeDefault position={[0, 0, 20]} fov={30} />
    </CanvasWrapper>
  );
};

export default Beams;
