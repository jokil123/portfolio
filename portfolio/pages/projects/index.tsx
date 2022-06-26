import Layout from "../../components/layout";
import { ProjectData } from "../../utils/project/projectData";
import Section from "../../components/section";
import ProjectPreview from "../../components/projectList/projectPreview";
import { getProjects } from "../../utils/project/projectBuild";
import Grid from "../../components/util/grid";

export default function Projects(props: ProjectProps) {
  return (
    <Layout>
      {/* <Section> */}
      {/* <Grid> */}
      {props.projects.map((project) => {
        return <ProjectPreview project={project} key={project.name} />;
      })}
      {/* </Grid> */}
      {/* </Section> */}
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
