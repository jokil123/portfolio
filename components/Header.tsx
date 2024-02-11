import Image from "next/image";
import HeaderItem from "./HeaderItem";
import styles from "./Header.module.scss";
import { useEffect, useState } from "react";

export default function Header(props: HeaderProps) {
  return (
    <header
      className={`${styles.header} ${props.collapsed ? styles.collapsed : ""}`}
      style={{ fontSize: "1em" }}
    >
      <div style={{ fontSize: "1.8em" }}>
        J<b>L</b>
      </div>
      <HeaderItem text={"About"} collapsed={props.collapsed} />
      <HeaderItem text={"Projects"} collapsed={props.collapsed} />
      <HeaderItem text={"Contact"} collapsed={props.collapsed} />
      <div className={"flexFill"}></div>
      <div className={styles.greeble}>
        <Image
          src={"/decorations/greeble.svg"}
          alt={"greeble decoration"}
          fill={true}
        />
      </div>
    </header>
  );
}

interface HeaderProps {
  collapsed: boolean;
}
