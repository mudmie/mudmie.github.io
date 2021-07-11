import * as React from "react";
import * as styles from "./project-header.module.scss";
import { Col, Container, Row } from "reactstrap";
import { Project } from "../models/project";
import { ProjectNav } from "./project-nav";

export interface ProjectHeaderProps {
  allProjects: Project[];
  currentProject: Project;
}
export class ProjectHeader extends React.Component<ProjectHeaderProps, {}> {
  public render() {
    return (
      <Container className={styles.header}>
        {/* <ProjectNav
          projects={this.props.allProjects}
          currentProject={this.props.currentProject}
        /> */}
        <Row className="justify-content-center mt-4 mb-4">
          <Col lg="12" className="text-center">
            <h1 className={styles.company}>{this.props.currentProject.company}</h1>
            <h2 className={styles.title}>{this.props.currentProject.name} / {this.props.currentProject.term}</h2>
          </Col>
        </Row>
      </Container>
    );
  }
}
