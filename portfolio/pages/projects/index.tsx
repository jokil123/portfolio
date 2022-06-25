import dashify from "dashify";

import Layout from "../../components/layout";
import { getProjects } from "../../utils/projects";
import { ProjectData } from "../../utils/projectData";
import Section from "../../components/section";
import AutoHref from "../../components/util/autoHref";

export default function Projects(props: ProjectProps) {
  return (
    <Layout>
      <Section>
        {props.projects.map((project) => {
          return (
            <div key={project.name}>
              <AutoHref href={`projects/${dashify(project.name)}`}>
                {project.meta.title}
              </AutoHref>
            </div>
          );
        })}
      </Section>
    </Layout>
  );
}

export async function getStaticProps() {
  return {
    props: {
      projects: getProjects(),
    },
  };
}

type ProjectProps = {
  projects: ProjectData[];
};
