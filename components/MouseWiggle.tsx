import { useEffect, useState } from "react";
import styles from "./MouseWiggle.module.scss";

// WIP this isn't optimized at all, but it works for now
export default function MouseWiggle(props: MouseWiggleProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // let distance = Math.sqrt(e.clientX * e.clientX + e.clientY * e.clientY);
      // let multiplier = Math.sqrt(distance);
      // let multiplier = 1;

      setMousePosition({
        x: mousePosition.x + e.movementX,
        y: mousePosition.y + e.movementY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [mousePosition]);

  useEffect(() => {
    const interval = setInterval(() => {
      let distance = Math.sqrt(
        mousePosition.x * mousePosition.x + mousePosition.y * mousePosition.y
      );

      if (distance * props.wiggleStrength < 0.25) {
        setMousePosition({ x: 0, y: 0 });
        return;
      }

      let disapationFactor = Math.exp(-props.wiggleDissipation * distance);

      setMousePosition({
        x: mousePosition.x * disapationFactor,
        y: mousePosition.y * disapationFactor,
      });
    }, 10);
    return () => {
      clearInterval(interval);
    };
  }, [mousePosition, props.wiggleDissipation]);

  return (
    <div
      style={{
        transition: "0.01s ease-in-out",
        transform: `translate(${mousePosition.x * props.wiggleStrength}px, ${
          mousePosition.y * props.wiggleStrength
        }px)`,
      }}
      className={styles.mouseWiggle}
    >
      {props.children}
    </div>
  );
}

interface MouseWiggleProps {
  children: React.ReactNode;
  wiggleStrength: number;
  wiggleDissipation: number;
}
