import Image from "next/image";
import styles from "./HeaderItem.module.scss";

export default function HeaderItem(props: HeaderItemProps) {
  return (
    <div className={styles.item}>
      <span
        className={`${styles.itemText} ${
          props.collapsed ? styles.collapsed : ""
        }`}
      >
        {props.text}
      </span>
      <div className={styles.crossIcon}>
        <Image
          src={"/decorations/cross.svg"}
          alt={"cross decoration"}
          fill={true}
        />
      </div>
    </div>
  );
}

interface HeaderItemProps {
  text: string;
  collapsed: boolean;
}
