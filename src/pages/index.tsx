import { graphql } from "gatsby";
import * as React from "react";
import { Helmet } from "react-helmet";
import Layout from "../components/layout";
import { Project } from "../models/project";
import { AboutSection } from "../sections/about-section";
import { IntroSection } from "../sections/intro-section";
import { ProjectsSection } from "../sections/projects-section";

export interface IndexPageProps {
  data: {
    allProjectsJson: {
      edges: {
        node: Project;
      }[];
    };
  };
}

export default class IndexPage extends React.Component<IndexPageProps, {}> {
  public render() {
    return (
      <Layout>
        <Helmet titleTemplate="">
          <title>
            Mudmie Chuthamsatid - A designer with engineering thoughts
          </title>
        </Helmet>
        <IntroSection id="home" />
        <AboutSection id="about" />
        <ProjectsSection
          id="projects"
          projects={this.props.data.allProjectsJson.edges.map(e => e.node)}
        />
      </Layout>
    );
  }
}

export const pageQuery = graphql`
  query IndexPageQuery {
    allProjectsJson {
      ...ProjectFields
    }
  }
`;
