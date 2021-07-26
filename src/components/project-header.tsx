import * as React from "react";
import * as styles from "./project-header.module.scss";
import { Col, Container, Row } from "reactstrap";
import { Project } from "../models/project";
import { ProjectNav } from "./project-nav";
import { PROJECT_BODY_COLUMN } from "./project-layout";
import { withPrefix } from "gatsby";
import { ImageSharp } from "../models/image-sharp";
import Img from "gatsby-image";

export interface ProjectHeaderProps {
  allProjects: Project[];
  currentProject: Project;
  mainImage: ImageSharp;
}
export class ProjectHeader extends React.Component<ProjectHeaderProps, {}> {
  public render() {
    return (
      <>
        <section className={styles.sectionImage}>
          <Container fluid={true} className={styles.header}>
            {/* <Row className="justify-content-center mt-4 mb-4">
            <Col lg={PROJECT_BODY_COLUMN} className="text-center">
              <h1 className={styles.company}>
                {this.props.currentProject.company}
              </h1>
              <h2 className={styles.title}>
                {this.props.currentProject.name} /{" "}
                {this.props.currentProject.term}
              </h2>
            </Col>
          </Row> */}

            <Row className="justify-content-center mt-4 mb-4">
              <Col lg="12">
                {/* <img
                  src={withPrefix(
                    `/images/${this.props.currentProject.imageFolder}/main.png`
                  )}
                  alt={`project ${this.props.currentProject.name} image`}
                  className="img-fluid"
                /> */}
                <Img
                  alt="main project image"
                  fluid={this.props.mainImage}
                  className="background-theme-color"
                />
              </Col>
            </Row>
          </Container>
        </section>
        <section className={styles.sectionName}>
          {/* <Container>
            <Row>
              <Col lg="4">
                <h1 className={styles.company}>
                  {this.props.currentProject.company}
                </h1>
                <h2 className={styles.title}>
                  {this.props.currentProject.term}
                </h2>
              </Col>
            </Row>
          </Container> */}
        </section>
      </>
    );
  }
}
