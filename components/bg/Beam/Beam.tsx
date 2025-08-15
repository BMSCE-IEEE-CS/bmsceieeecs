import Beams from "./BeamCode";

import React from "react";

const Beam = () => {
  return (
    <div className="fixed inset-0 -z-10" style={{ pointerEvents: "none" }}>
      <Beams
        beamWidth={2.8}
        beamHeight={100}
        beamNumber={100}
        lightColor="#f5b65b"
        speed={6}
        noiseIntensity={0.85}
        scale={0.2}
        rotation={45}
      />
    </div>
  );
};

export default Beam;
