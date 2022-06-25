import Link from "next/link";
import AutoHref from "../util/autoHref";
import styles from "./navItem.module.scss";

export default function NavItem(props: NavItemProps) {
  return (
    <div style={{ backgroundColor: props.color }} className={styles.navItem}>
      <AutoHref href={props.url}>{props.text}</AutoHref>
    </div>
  );
}

type NavItemProps = {
  url: string;
  text: string;
  color: string;
};
