import * as React from "react";
import { Project } from "../models/project";
import { Link, withPrefix } from "gatsby";
import { Row, Col } from "reactstrap";

export interface ProjectNavProps {
  projects: Project[];
  currentProject: Project;
}

export class ProjectNav extends React.Component<ProjectNavProps, {}> {
  public render() {
    return (
      <Row>
        <Col xs="6">{this.getPreviousProjectLink()}</Col>
        <Col xs="6" className="text-right">
          {this.getNextProjectLink()}
        </Col>
      </Row>
    );
  }

  private getPreviousProjectLink() {
    const projects = this.props.projects;
    const currentIndex = projects.findIndex(
      p => p.name == this.props.currentProject.name
    );
    if (currentIndex === 0) {
      return null;
    }
    const prevProject = projects[currentIndex - 1];
    return (
      <Link to={prevProject.url}>
        <i className="fas fa-chevron-left" /> {prevProject.name}
      </Link>
    );
  }

  private getNextProjectLink() {
    const projects = this.props.projects;
    const currentIndex = projects.findIndex(
      p => p.name == this.props.currentProject.name
    );
    if (currentIndex === projects.length - 1) {
      return null;
    }
    const nextProject = projects[currentIndex + 1];
    return (
      <Link to={nextProject.url}>
        {nextProject.name} <i className="fas fa-chevron-right" />
      </Link>
    );
  }
}
