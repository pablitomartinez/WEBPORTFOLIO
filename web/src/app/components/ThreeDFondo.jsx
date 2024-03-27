"use client";
import React, { useEffect, useRef } from "react";
import { NeatConfig, NeatGradient } from "@firecms/neat";

const ThreeDFondo = () => {
  const canvasRef = useRef(null);
  const gradientRef = useRef(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const config = {
      colors: [
        {
          color: "#131624",
          enabled: true,
        },
        {
          color: "#131624",
          enabled: true,
        },
        {
          color: "#131624",
          enabled: true,
        },
        {
          color: "#6AA170",
          enabled: true,
        },
        {
          color: "#131624",
          enabled: true,
        },
      ],
      speed: 1,
      horizontalPressure: 0,
      verticalPressure: 5,
      waveFrequencyX: 1,
      waveFrequencyY: 1,
      waveAmplitude: 10,
      shadows: 2,
      highlights: 0,
      colorBrightness: 1.6,
      colorSaturation: 10,
      wireframe: false,
      colorBlending: 10,
      backgroundColor: "#FF0000",
      backgroundAlpha: 1,
      resolution: 0.8,
    };

    gradientRef.current = new NeatGradient({
      ref: canvasRef.current,
      ...config,
    });

    return () => {
      if (gradientRef.current) gradientRef.current.destroy();
    };
  }, []);

  return (
    <canvas
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -1,
      }}
      ref={canvasRef}
    />
  );
};

export default ThreeDFondo;
