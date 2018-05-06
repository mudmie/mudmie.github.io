import * as React from "react";
import { Project } from "../models/project";
import { Container, Row } from "reactstrap";
import { ProjectNav } from "./project-nav";

export interface ProjectFooterProps {
  allProjects: Project[];
  project: Project;
}
export class ProjectFooter extends React.Component<ProjectFooterProps, {}> {
  public render() {
    return (
      <Container>
        <ProjectNav
          projects={this.props.allProjects}
          currentProject={this.props.project}
        />
      </Container>
    );
  }
}
