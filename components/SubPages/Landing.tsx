import styles from "./Landing.module.scss";
import Image from "next/image";

import { Abhaya_Libre } from "next/font/google";
import FullPage from "../FullPage";
const abhayaLibre = Abhaya_Libre({ weight: ["400"], subsets: ["latin"] });

export default function Landing() {
  return (
    <FullPage>
      <div className={styles.align}>
        <div className={styles.title}>
          <div style={{ fontSize: "5rem", lineHeight: "1.2" }}>
            Joshua <b>Lung</b>
          </div>
          <div
            className={`${abhayaLibre.className} ${styles.subtitle}`}
            style={{ fontSize: "1.6em" }}
          >
            Making Computers do Stuff
            <div className={styles.titleDecoration}>
              <Image
                src={"/decorations/title_decoration.svg"}
                alt={"title decoration"}
                fill={true}
              />
            </div>
          </div>
        </div>
        <div className={"videoContainer"}>
          <video autoPlay muted style={{ height: "27.4rem" }}>
            <source src="/animation.webm" type="video/webm" />
          </video>
        </div>
      </div>
    </FullPage>
  );
}
