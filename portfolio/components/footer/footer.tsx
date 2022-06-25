import Link from "next/link";
import styles from "./footer.module.scss";
import AutoHref from "../../components/util/autoHref";

export default function Footer() {
  return (
    <footer className={`${styles.footer} noPadding noMargin`}>
      <hr className={styles.footerSeparator}></hr>
      <div className={styles.footerSectionContainer}>
        <FooterSection
          sectionName="Other Platforms"
          linkList={[
            { text: "Github", href: "https://github.com/jokil123" },
            {
              text: "Youtube",
              href: "https://www.youtube.com/channel/UCx-_qxi0EN1UvkWeweJ1ZcA",
            },
            { text: "Discord", href: "discord://jo_kil#1977" },
          ]}
        />
        <FooterSection
          sectionName="About"
          linkList={[
            { text: "Impressum", href: "/impressum" },
            {
              text: "Legal",
              href: "/legal",
            },
            { text: "Contact", href: "/contact" },
          ]}
        />
      </div>
    </footer>
  );
}

export function FooterSection(props: FooterSectionProps) {
  return (
    <div className={styles.footerSection}>
      <p className={styles.footerSectionHeadline}>{props.sectionName}</p>
      <>
        {props.linkList.map(({ href, text }) => {
          return (
            <AutoHref
              key={text}
              href={href}
              children={<p className={styles.footerSectionItem}>{text}</p>}
            />
          );
        })}
      </>
    </div>
  );
}

type FooterSectionProps = {
  sectionName: string;
  linkList: { text: string; href: string }[];
};
