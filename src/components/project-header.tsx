import * as React from "react";
import * as styles from "./project-header.module.scss";
import { Col, Container, Row } from "reactstrap";
import { Project } from "../models/project";
import { ProjectNav } from "./project-nav";
import { PROJECT_BODY_COLUMN } from "./project-layout";
import { withPrefix } from "gatsby";

export interface ProjectHeaderProps {
  allProjects: Project[];
  currentProject: Project;
}
export class ProjectHeader extends React.Component<ProjectHeaderProps, {}> {
  public render() {
    return (
      <>
        <section className={styles.sectionImage}>
          <Container className={styles.header}>
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
              <Col lg="6">
                <img
                  src={withPrefix(
                    `/images/${this.props.currentProject.imageFolder}/thumbnail.png`
                  )}
                  alt={`project ${this.props.currentProject.name} image`}
                  className="img-fluid"
                />
              </Col>
            </Row>
          </Container>
        </section>
        <section className={styles.sectionName}>
          <Container>
            <Row>
              <Col lg={PROJECT_BODY_COLUMN}>
                <h1 className={styles.company}>
                  {this.props.currentProject.company}
                </h1>
                <h2 className={styles.title}>
                  {this.props.currentProject.name}
                </h2>
              </Col>
            </Row>
          </Container>
        </section>
      </>
    );
  }
}
