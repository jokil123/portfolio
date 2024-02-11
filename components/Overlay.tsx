import Image from "next/image";
import styles from "./Overlay.module.scss";

export default function Overlay(props: OverlayProps) {
  return (
    <div className={styles.overlayContainer}>
      <div className={styles.chevronContainer}>
        <div
          className={`${styles.chevron} ${
            props.collapsed ? styles.collapsed : ""
          }`}
        >
          <Image
            src={"/decorations/chevron.svg"}
            alt={"chevron down"}
            fill={true}
          />
        </div>
      </div>
      <div
        className={`${styles.cornerDecorations} ${
          props.collapsed ? styles.collapsed : ""
        }`}
      >
        <div
          className={`${styles.cornerDecoration} ${styles.type1}`}
          style={{ rotate: "0deg" }}
        >
          <Image
            src={"/decorations/corner.svg"}
            alt={"corner decoration"}
            fill={true}
          />
        </div>
        <div
          className={`${styles.cornerDecoration} ${styles.type1}`}
          style={{ rotate: "90deg" }}
        >
          <Image
            src={"/decorations/corner.svg"}
            alt={"corner decoration"}
            fill={true}
          />
        </div>
        <div
          className={`${styles.cornerDecoration} ${styles.type2}`}
          style={{ rotate: "0deg" }}
        >
          <Image
            src={"/decorations/corner2.svg"}
            alt={"corner decoration"}
            fill={true}
          />
        </div>
        <div
          className={`${styles.cornerDecoration} ${styles.type1}`}
          style={{ rotate: "180deg" }}
        >
          <Image
            src={"/decorations/corner.svg"}
            alt={"corner decoration"}
            fill={true}
          />
        </div>
      </div>
    </div>
  );
}

interface OverlayProps {
  collapsed: boolean;
}
