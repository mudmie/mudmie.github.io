import { graphql } from "gatsby";
import * as React from "react";
import { Helmet } from "react-helmet";
import Layout from "../components/layout";
import { Project } from "../models/project";
import { AboutSection } from "../sections/about-section";
import { ProjectsSection } from "../sections/projects-section";
import { ProjectGroup } from "../models/project-group";
import * as styles from "./index.module.scss";

export interface IndexPageProps {
  data: {
    allProjectsJson: {
      edges: {
        node: Project;
      }[];
    };
    allProjectGroupsJson: {
      edges: {
        node: ProjectGroup;
      }[];
    };
  };
}

export default class IndexPage extends React.Component<IndexPageProps, {}> {
  public render() {
    return (
      <Layout useCustomPageMargin={true}>
        <Helmet titleTemplate="">
          <title>Mudmie Chuthamsatid - Product Designer</title>
        </Helmet>
        <div className={`${styles.homePage} ${styles.main}`}>
          <AboutSection id="about" />
          <ProjectsSection
            id="projects"
            projects={this.props.data.allProjectsJson.edges.map(e => e.node)}
            projectGroups={this.props.data.allProjectGroupsJson.edges.map(
              e => e.node
            )}
          />
        </div>
      </Layout>
    );
  }
}

export const pageQuery = graphql`
  query IndexPageQuery {
    allProjectsJson {
      ...ProjectFields
    }
    allProjectGroupsJson {
      ...ProjectGroupFields
    }
  }
`;
