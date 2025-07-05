import { useEffect, useRef } from "react";
import * as THREE from "three";
import { useTheme } from "./theme-provider.tsx";

const BINARY_COUNT = 40;

export default function Binary3DBackground() {
  const mountRef = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();

  useEffect(() => {
    const width = window.innerWidth;
    const height = window.innerHeight;

    // Choose color based on theme
    const binaryColor =
      theme === "dark"
        ? "rgba(80, 255, 80, 0.5)" // bright green for dark mode
        : "rgba(30, 60, 80, 0.5)"; // dark blue-gray for light mode

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    camera.position.z = 50;

    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(width, height);
    renderer.setClearColor(0x000000, 0); // transparent

    // Add binary numbers as sprites
    const binarySprites: THREE.Sprite[] = [];
    for (let i = 0; i < BINARY_COUNT; i++) {
      const value = Math.random() > 0.5 ? "1" : "0";
      const canvas = document.createElement("canvas");
      canvas.width = 64;
      canvas.height = 64;
      const ctx = canvas.getContext("2d")!;
      ctx.font = "bold 48px monospace";
      ctx.fillStyle = binaryColor; // use theme-based color
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText(value, 32, 32);

      const texture = new THREE.CanvasTexture(canvas);
      const material = new THREE.SpriteMaterial({ map: texture, transparent: true, opacity: 0.5 });
      const sprite = new THREE.Sprite(material);

      sprite.position.set(
        (Math.random() - 0.5) * 100,
        (Math.random() - 0.5) * 60,
        (Math.random() - 0.5) * 80
      );
      sprite.scale.set(2.5, 2.5, 1);

      scene.add(sprite);
      binarySprites.push(sprite);
    }

    // Animation loop
    let frameId: number;
    const animate = () => {
      binarySprites.forEach((sprite, i) => {
        sprite.position.y -= 0.1 + (i % 5) * 0.01;
        if (sprite.position.y < -40) {
          sprite.position.y = 40;
        }
      });
      renderer.render(scene, camera);
      frameId = requestAnimationFrame(animate);
    };

    // Mount renderer
    if (mountRef.current) {
      mountRef.current.appendChild(renderer.domElement);
    }
    animate();

    // Cleanup
    return () => {
      cancelAnimationFrame(frameId);
      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, [theme]); // re-run effect when theme changes

  return (
    <div
      ref={mountRef}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 0,
        pointerEvents: "none",
      }}
      aria-hidden="true"
    />
  );
} 