import * as React from "react";
import { Col, Container, Row, Jumbotron } from "reactstrap";
import { BackgroundAnimation } from "../components/background-animation";
import * as styles from "./index.scss";
import { withPrefix } from "gatsby-link";
import { AboutBrushBackground } from "../components/about-brush-background";
import { AboutSection } from "../sections/about-section";
import { IntroSection } from "../sections/intro-section";
import { ProjectsSection } from "../sections/projects-section";

export interface IndexPageProps {}

export default class IndexPage extends React.Component<IndexPageProps, {}> {
  public render() {
    return (
      <>
        <IntroSection />
        <AboutSection />
        <ProjectsSection />
      </>
    );
  }
}
