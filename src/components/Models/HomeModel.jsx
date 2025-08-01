import { useEffect, useRef, useState } from "react";
import createGlobe from "cobe";

export default function Model() {
  const canvasRef = useRef();
  const containerRef = useRef();
  const [size, setSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const handleResize = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setSize({
          width: rect.width * 2,  // cobe yüksek çözünürlük için 2x öneriyor
          height: rect.height * 2,
        });
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (size.width === 0 || size.height === 0) return;

    let phi = -136 * (Math.PI / 180);

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: size.width,
      height: size.height,
      theta: 0.5,
      dark: 0.9,
      diffuse: 1.2,
      mapSamples: 16000,
      mapBrightness: 10,
      baseColor: [0.3, 0.3, 0.3],
      markerColor: [0.216, 0.718, 0.765],
      glowColor: [0, 0, 0],
      opacity: 1,
      markers: [
        { location: [37.566666, 44.283333], size: 0.05 },
      ],
      onRender: (state) => {
        state.phi = phi;
        phi += 0.002;
      }
    });
    console.log("globe loaded")
    return () => globe.destroy();
  }, [size]);

  return (
    <div
      ref={containerRef}
      style={{
        width: "100%",
        aspectRatio: "1 / 1",
        maxHeight: "90vh",
        position: "relative",
      }}
    >
      <canvas
        ref={canvasRef}
        style={{
          width: "100%",
          height: "100%",
          display: "block",
        }}
      />
    </div>
  );
}
