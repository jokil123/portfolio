import fs from "fs";
import { projectByName, ProjectData, projectDirectory } from "./projectData";

export function getProjects(
  sorter?: (a: ProjectData, b: ProjectData) => number,
  filter?: (a: ProjectData) => boolean
): ProjectData[] {
  sorter = sorter || ((a, b) => a.meta.date - b.meta.date);

  const projectNames = getDirectories(projectDirectory);

  const projects: ProjectData[] = projectNames.map((projectName) => {
    return projectByName(projectName);
  });

  if (filter) {
    projects.filter((project) => filter(project));
  }

  return projects.sort(sorter);
}

function getDirectories(path) {
  return fs.readdirSync(path).filter((file) => {
    return fs.statSync(path + "/" + file).isDirectory();
  });
}
