import fs from "fs";
import yaml from "yaml";
import { ProjectData, projectsDirectory } from "./projectData";

export function projectByName(projectName: string): ProjectData {
  const metaFile = yaml.parse(
    fs.readFileSync(`${projectsDirectory}/${projectName}/meta.yaml`, "utf8")
  );

  return {
    name: projectName,
    meta: {
      title: metaFile["title"],
      programs: metaFile["programs"],
      tags: metaFile["tags"],
      date: new Date(metaFile["date"]).getTime(),
      thumbnail: metaFile["thumbnail"],
    },
    content: fs.readFileSync(
      `${projectsDirectory}/${projectName}/content.md`,
      "utf8"
    ),
  };
}

export function getProjects(
  sorter?: (a: ProjectData, b: ProjectData) => number,
  filter?: (a: ProjectData) => boolean
): ProjectData[] {
  sorter = sorter || ((a, b) => a.meta.date - b.meta.date);

  const projectNames = getDirectories(projectsDirectory);

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
