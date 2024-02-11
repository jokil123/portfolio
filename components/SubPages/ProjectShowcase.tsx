import styles from "./ProjectShowcase.module.scss";
import Tag, { TagType } from "../Tag";
import FullPage from "../FullPage";
import Image from "next/image";

export default function ProjectShowcase(props: ProjectShowcase) {
  return (
    <FullPage>
      <div className={styles.projectShowcaseContainer}>
        <div className={styles.projectInfo}>
          <div className={styles.title}>
            {props.title[0]}
            <br />
            <b>{props.title[1]}</b>
          </div>
          <div className={styles.description}>{props.description}</div>
          <div className={styles.tags}>
            {props.tags.map((tag, i) => (
              <Tag type={tag} key={i} />
            ))}
          </div>
        </div>
        <div className={styles.projectImage}>
          <Image
            src={props.imagePath}
            alt={`project image for project ${props.title[0]} ${props.title[1]}`}
            fill={true}
          />
        </div>
      </div>
    </FullPage>
  );
}

interface ProjectShowcase {
  title: [string, string];
  description: string;
  imagePath: string;
  tags: TagType[];
}
