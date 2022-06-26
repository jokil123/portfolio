import path from "path";

export function resolveProjectsImagePath(
  projectName: string,
  imagePath: string
) {
  return `/projects/${projectName}/res/${imagePath}`;
}
