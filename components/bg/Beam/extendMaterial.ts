import * as THREE from "three";

interface ShaderExtensionConfig {
  header: string;
  vertexHeader?: string;
  fragmentHeader?: string;
  vertex?: Record<string, string>;
  fragment?: Record<string, string>;
  material?: Partial<THREE.MeshStandardMaterialParameters> & { fog?: boolean };
  uniforms?: Record<string, any>;
}

export function extendMaterial(
  BaseMaterial: typeof THREE.MeshStandardMaterial,
  cfg: ShaderExtensionConfig
): THREE.ShaderMaterial {
  const physical = THREE.ShaderLib.physical;
  const {
    vertexShader: baseVert,
    fragmentShader: baseFrag,
    uniforms: baseUniforms,
  } = physical;
  const baseDefines = (physical as any).defines ?? {};
  const uniforms = THREE.UniformsUtils.clone(baseUniforms);
  const defaults = new BaseMaterial(cfg.material || {});

  if (defaults.color) uniforms.diffuse.value = defaults.color;
  if ("roughness" in defaults) uniforms.roughness.value = defaults.roughness;
  if ("metalness" in defaults) uniforms.metalness.value = defaults.metalness;
  if ("envMap" in defaults) uniforms.envMap.value = defaults.envMap;
  if ("envMapIntensity" in defaults)
    uniforms.envMapIntensity.value = defaults.envMapIntensity;

  Object.entries(cfg.uniforms ?? {}).forEach(([key, u]) => {
    uniforms[key] =
      u && typeof u === "object" && "value" in u ? u : { value: u };
  });

  let vert = `${cfg.header}\n${cfg.vertexHeader ?? ""}\n${baseVert}`;
  let frag = `${cfg.header}\n${cfg.fragmentHeader ?? ""}\n${baseFrag}`;

  for (const [inc, code] of Object.entries(cfg.vertex ?? {})) {
    vert = vert.replace(inc, `${inc}\n${code}`);
  }
  for (const [inc, code] of Object.entries(cfg.fragment ?? {})) {
    frag = frag.replace(inc, `${inc}\n${code}`);
  }

  return new THREE.ShaderMaterial({
    defines: { ...baseDefines },
    uniforms,
    vertexShader: vert,
    fragmentShader: frag,
    lights: true,
    fog: !!cfg.material?.fog,
  });
}
