import React from "react";
import Squares from "./SquareCode";

const SquareBg = () => {
  return (
    <div
      className="fixed inset-0 -z-10 bg-gray-800"
      style={{ pointerEvents: "none" }}
    >
      <Squares
        speed={0.5}
        squareSize={50}
        direction="diagonal"
        borderColor="oklch(44.6% 0.043 257.281)"
        hoverFillColor="#222"
      />
    </div>
  );
};

export default SquareBg;
