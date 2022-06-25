import Link from "next/link";
import styles from "./header.module.scss";
import NavItem from "./navItem";

export default function Header(props: HeaderProps) {
  return (
    <header className={styles.header}>
      <div className={styles.pageTitleContainer}>
        <p className={styles.pageTitle}>{props.title}</p>
        <p className={styles.pageSubtitle}>{props.subtitle}</p>
      </div>
      <nav className={styles.navBar}>
        <NavItem url={"/"} text={"Home"} color={"#EF476F"} />
        <NavItem
          url={"https://github.com/jokil123"}
          text={"Github"}
          color={"#06D6A0"}
        />
        <NavItem
          url={"https://www.youtube.com/watch?v=dQw4w9WgXcQ"}
          text={"Hanna"}
          color={"#73decc"}
        />
      </nav>
    </header>
  );
}

type HeaderProps = {
  title: string;
  subtitle: string;
};
