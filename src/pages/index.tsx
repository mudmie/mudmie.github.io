import * as React from "react";
import { Col, Container, Row, Jumbotron } from "reactstrap";
import { BackgroundAnimation } from "../components/background-animation";
import * as styles from "./index.scss";
import { withPrefix } from "gatsby-link";
import { AboutBrushBackground } from "../components/about-brush-background";
import { AboutSection } from "../sections/about-section";
import { IntroSection } from "../sections/intro-section";
import { ProjectsSection } from "../sections/projects-section";
import { Project } from "../models/project";
import { Helmet } from "react-helmet";

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
      <>
        <Helmet titleTemplate="">
          <title>Mudmie Chuthamsatid</title>
        </Helmet>
        <IntroSection />
        <AboutSection />
        <ProjectsSection
          projects={this.props.data.allProjectsJson.edges.map(e => e.node)}
        />
      </>
    );
  }
}

export const pageQuery = graphql`
  query IndexPageQuery {
    allProjectsJson {
      edges {
        node {
          name
          subtitle
          url
        }
      }
    }
  }
`;
