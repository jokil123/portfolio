import Image from "next/image";
import { ProjectData } from "../../utils/project/projectData";
import { resolveProjectsImagePath } from "../../utils/project/projectUtil";

export default function ProjectPreview(props: ProjectPreviewProps) {
  return (
    <div style={{ position: "relative" }}>
      <Image
        objectFit="cover"
        layout="fill"
        src={resolveProjectsImagePath(
          props.project.name,
          props.project.meta.thumbnail
        )}
      />
    </div>
  );
}

type ProjectPreviewProps = {
  project: ProjectData;
};
