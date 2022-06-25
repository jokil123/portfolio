import styles from "./section.module.scss";

export default function Section({ children }) {
  return (
    <div className={styles.sectionContainer}>
      <div className={styles.section}>{children}</div>
      <hr className={styles.sectionSperator} />
    </div>
  );
}
