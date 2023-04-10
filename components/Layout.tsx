import { useEffect, useState } from "react";
import Header from "../components/Header";
import Overlay from "../components/Overlay";
import styles from "./Layout.module.scss";

export function Layout({ children }: { children: React.ReactNode }) {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const shouldCollapse = scrollY > 150;

  return (
    <>
      <div
        className={"fixedOverlay"}
        style={{
          display: "flex",
          flexDirection: "column",
          position: "fixed",
        }}
      >
        {/* <Header /> */}
        {/* <Overlay /> */}
        <div style={{ width: "100%" }}>
          <Header collapsed={shouldCollapse} />
        </div>
        <div
          style={{
            width: "100%",
            flexGrow: 1,
          }}
        >
          <Overlay collapsed={shouldCollapse} />
        </div>
      </div>
      {children}
    </>
  );
}
