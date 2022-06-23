import Link from "next/link";
import styles from "./navItem.module.scss";

export default function NavItem(props: NavItemProps) {
  return (
    <div className={styles.navItem}>
      {props.external ? (
        <a href={props.url}>{props.text}</a>
      ) : (
        <Link href={props.url}>
          <a>{props.text}</a>
        </Link>
      )}
    </div>
  );
}

type NavItemProps = {
  url: string;
  text: string;
  color: string;
  external: boolean;
};
