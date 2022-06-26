import dashify from "dashify";
import Layout from "../../components/layout";
import Section from "../../components/section";
import { camelize } from "../../utils/camelize";
import { getProjects, projectByName } from "../../utils/project/projectBuild";
import { ProjectData } from "../../utils/project/projectData";

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
      return {
        params: {
          id: dashify(project.name),
        },
      };
    }),
    fallback: false,
  };
}

export function getStaticProps({ params }) {
  return {
    props: {
      project: projectByName(camelize(params.id)),
    },
  };
}

type ProjectProps = {
  project: ProjectData;
};
