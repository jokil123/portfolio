import { useEffect, useState } from "react";

export default function MouseWiggle(props: MouseWiggleProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // let distance = Math.sqrt(e.clientX * e.clientX + e.clientY * e.clientY);
      // let multiplier = Math.sqrt(distance);
      // let multiplier = 1;

      setMousePosition({
        x: mousePosition.x - e.clientX,
        y: mousePosition.y - e.clientY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      let distance = Math.sqrt(
        mousePosition.x * mousePosition.x + mousePosition.y * mousePosition.y
      );

      console.log(mousePosition);

      console.log(distance);

      let disapationFactor = Math.exp(-props.wiggleDissipation * distance);

      console.log(disapationFactor);

      setMousePosition({
        x: mousePosition.x * disapationFactor,
        y: mousePosition.y * disapationFactor,
      });
    }, 1);
    return () => {
      clearInterval(interval);
    };
  }, [mousePosition, props.wiggleDissipation]);

  return (
    <div
      style={{
        transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
      }}
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
