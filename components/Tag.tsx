import styles from "./Tag.module.scss";

export default function Tag(props: TagProps) {
  switch (props.type) {
    case "dev":
      return <div className={`${styles.tag} ${styles.dev}`}></div>;
    case "threeD":
      return <div className={`${styles.tag} ${styles.threeD}`}></div>;
    case "design":
      return <div className={`${styles.tag} ${styles.design}`}></div>;
  }
}

interface TagProps {
  type: TagType;
}

export type TagType = "dev" | "threeD" | "design";
