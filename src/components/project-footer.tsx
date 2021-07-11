import * as React from "react";
import { Project } from "../models/project";
import { Col, Container, Row } from "reactstrap";
import { ProjectNav } from "./project-nav";
import { MoreProjects } from "./more-projects";

export interface ProjectFooterProps {
  allProjects: Project[];
  currentProject: Project;
}
export class ProjectFooter extends React.Component<ProjectFooterProps, {}> {
  public render() {
    return (
      <div>
        {/* <ProjectNav
          projects={this.props.allProjects}
          currentProject={this.props.currentProject}
        /> */}
        <MoreProjects currentProject={this.props.currentProject} projects={this.props.allProjects} />
      </div>
    );
  }
}
