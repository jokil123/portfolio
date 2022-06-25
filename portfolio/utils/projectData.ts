import yaml from "yaml";
import fs from "fs";
import path from "path";

export type ProjectData = {
  name: string;
  meta: {
    title: string;
    programs: string[];
    tags: string[];
    date: number;
  };
  content: string;
};

export function projectByName(name: string): ProjectData {
  const metaFile = yaml.parse(
    fs.readFileSync(`${projectDirectory}/${name}/meta.yaml`, "utf8")
  );

  return {
    name: name,
    meta: {
      title: metaFile["title"],
      programs: metaFile["programs"],
      tags: metaFile["tags"],
      date: new Date(metaFile["date"]).getTime(),
    },
    content: fs.readFileSync(`${projectDirectory}/${name}/content.md`, "utf8"),
  };
}

export const projectDirectory = path.join(process.cwd(), "assets/projects");
