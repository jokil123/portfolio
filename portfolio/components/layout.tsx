import styles from "./layout.module.scss";
import Header from "./header/header";
import Footer from "./footer/footer";
import Content from "./content/content";

export default function Layout({ children }) {
  return (
    <div className={styles.container}>
      <Header title="Joshua Lung" subtitle="Portfolio Webseite" />
      <Content>{children}</Content>
      <Footer />
    </div>
  );
}
