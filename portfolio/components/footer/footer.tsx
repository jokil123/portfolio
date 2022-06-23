import Link from "next/link";
import styles from "./footer.module.scss";

export default function Footer() {
  return (
    <footer className="noPadding noMargin">
      <div className={styles.footerSection}>
        <p className={styles.footerSectionHeadline}>Other Platforms</p>
        <a href="https://github.com/jokil123">Github</a>
        <a href="https://www.youtube.com/channel/UCx-_qxi0EN1UvkWeweJ1ZcA">
          Youtube
        </a>
        <a href="discord://jo_kil#1977">Discord</a>
      </div>
    </footer>
  );
}

// export default function FooterSection() {third}
