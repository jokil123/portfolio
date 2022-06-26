import path from "path";

export type ProjectData = {
  name: string;
  meta: {
    title: string;
    programs: string[];
    tags: string[];
    date: number;
    thumbnail: string;
  };
  content: string;
};

export const projectsDirectory = path.join(process.cwd(), "public/projects");
