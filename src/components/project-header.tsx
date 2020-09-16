import * as React from "react";
import * as styles from "./project-header.module.scss";
import { Col, Container, Row } from "reactstrap";
import { Project } from "../models/project";
import { ProjectNav } from "./project-nav";
import { ProjectGroup } from "../models/project-group";

export interface ProjectHeaderProps {
  allProjects: Project[];
  currentProject: Project;
  currentProjectGroup: ProjectGroup;
}
export class ProjectHeader extends React.Component<ProjectHeaderProps, {}> {
  public render() {
    return (
      <Container className={styles.header}>
        <ProjectNav
          projects={this.props.allProjects}
          currentProject={this.props.currentProject}
        />
        <Row className="justify-content-center mt-4">
          <Col lg="8">
            <h4>{this.props.currentProjectGroup.title}</h4>
            <h1>{this.props.currentProject.name}</h1>
          </Col>
        </Row>
      </Container>
    );
  }
}
