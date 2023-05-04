import { useEffect, useState } from "react";
import Header from "../components/Header";
import Overlay from "../components/Overlay";
import styles from "./Layout.module.scss";
import MouseWiggle from "./MouseWiggle";

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
    <div className={"layout"} style={{ height: "100vh", width: "100%" }}>
      <div
        className={`${styles.contentContainer} noScrollbar`}
        style={{ overflowY: "scroll" }}
      >
        {children}
      </div>
      <div
        className={"fixedOverlay noSelect"}
        style={{
          display: "flex",
          flexDirection: "column",
          position: "fixed",
        }}
      >
        <div style={{ width: "100%" }}>
          <Header collapsed={shouldCollapse} />
        </div>
        <div
          style={{
            width: "100%",
            flexGrow: 1,
          }}
        >
          <MouseWiggle wiggleStrength={0.1} wiggleDissipation={0.01}>
            <Overlay collapsed={shouldCollapse} />
          </MouseWiggle>
        </div>
      </div>
    </div>
  );
}
