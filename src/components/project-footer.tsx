import * as React from "react";
import { Project } from "../models/project";
import { Col, Container, Row } from "reactstrap";
import { ProjectNav } from "./project-nav";
import { MoreProjects } from "./more-projects";
import { PROJECT_BODY_COLUMN } from "./project-layout";
import * as styles from "./project-footer.module.scss";

export interface ProjectFooterProps {
  allProjects: Project[];
  currentProject: Project;
}
export class ProjectFooter extends React.Component<ProjectFooterProps, {}> {
  public render() {
    return (
      <>
        {/* <ProjectNav
          projects={this.props.allProjects}
          currentProject={this.props.currentProject}
        /> */}
        <Container>
          <Row className="justify-content-center mt-3">
            <Col lg={PROJECT_BODY_COLUMN} className={styles.horizontalLine}>
              Congrats! You’ve reached the end of this case study.
            </Col>
          </Row>
        </Container>
        <MoreProjects currentProject={this.props.currentProject} projects={this.props.allProjects} />
      </>
    );
  }
}
