import * as React from "react";
import { Project } from "../models/project";
import { Link, withPrefix } from "gatsby";
import { Row, Col } from "reactstrap";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export interface ProjectNavProps {
  projects: Project[];
  currentProject: Project;
  className?: string;
}

export class ProjectNav extends React.Component<ProjectNavProps, {}> {
  public render() {
    return (
      <Row className={this.props.className}>
        <Col xs="6">{this.getPreviousProjectLink()}</Col>
        <Col xs="6" className="text-right">
          {this.getNextProjectLink()}
        </Col>
      </Row>
    );
  }

  private getPreviousProjectLink() {
    const projects = this.props.projects.filter(proj => proj.isEnabled);
    const currentIndex = projects.findIndex(
      p => p.name == this.props.currentProject.name
    );
    if (currentIndex === 0) {
      return null;
    }
    const prevProject = projects[currentIndex - 1];
    if (!prevProject) {
      return null;
    }
    return (
      <Link to={prevProject.url}>
        <FaChevronLeft size={16} /> {prevProject.name}
      </Link>
    );
  }

  private getNextProjectLink() {
    const projects = this.props.projects.filter(proj => proj.isEnabled);
    const currentIndex = projects.findIndex(
      p => p.name == this.props.currentProject.name
    );
    if (currentIndex === projects.length - 1) {
      return null;
    }
    const nextProject = projects[currentIndex + 1];
    if (!nextProject) {
      return null;
    }
    return (
      <Link to={nextProject.url}>
        {nextProject.name} <FaChevronRight size={16} />
      </Link>
    );
  }
}
