import styles from "./grid.module.scss";

export default function Grid(props: GridProps) {
  return <div className={styles.gridContainer}>{props.children}</div>;
}

type GridProps = {
  children: any;
};
