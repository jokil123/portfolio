import dashify from "dashify";
import Layout from "../../components/layout";
import Section from "../../components/section";
import { projectByName, ProjectData } from "../../utils/projectData";
import { getProjects } from "../../utils/projects";

export default function Project(props: ProjectProps) {
  return (
    <Layout>
      <Section>
        <h1>{props.project.meta.title}</h1>
        <h2>{props.project.meta.date}</h2>
        <p>{props.project.meta.tags}</p>
        <p>{props.project.meta.programs}</p>
        <p>{props.project.content}</p>
      </Section>
    </Layout>
  );
}

export async function getStaticPaths() {
  return {
    paths: getProjects().map((project) => {
      dashify(project.name);
    }),
    fallback: false,
  };
}

export function getStaticProps({ params }): ProjectProps {
  return {
    project: getProjects[0],
    // project: projectByName(params.id),
  };
}

type ProjectProps = {
  project: ProjectData;
};
