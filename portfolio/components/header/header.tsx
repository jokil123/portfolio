import styles from "./header.module.scss";
import NavItem from "./navItem";

export default function Header(props: HeaderProps) {
  return (
    <header className={`${styles.header} noPadding noMargin`}>
      <div className={styles.pageTitleContainer}>
        <p className={styles.pageTitle}>{props.title}</p>
        <p className={styles.pageSubtitle}>{props.subtitle}</p>
      </div>
      <nav className={styles.navBar}>
        <NavItem url={"/"} text={"Home"} color={"#EF476F"} external={false} />
        <NavItem
          url={"https://github.com/jokil123"}
          text={"Github"}
          color={"#06D6A0"}
          external={true}
        />
      </nav>
    </header>
  );
}

type HeaderProps = {
  title: string;
  subtitle: string;
};
