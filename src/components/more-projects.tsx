import * as React from "react";
import { Project } from "../models/project";
import { Link, withPrefix } from "gatsby";
import { Row, Col, Container } from "reactstrap";
import { FaArrowRight, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import * as styles from "./more-projects.module.scss";
import { PROJECT_BODY_COLUMN } from "./project-layout";

export interface MoreProjectsProps {
  projects: Project[];
  currentProject: Project;
}

const NUM_PROJECTS = 3;

export class MoreProjects extends React.Component<MoreProjectsProps, {}> {
  public render() {
    return (
      <Container>
        <Row className="justify-content-center mt-3">
          <Col lg={PROJECT_BODY_COLUMN}>
            <h3>More Projects</h3>
          </Col>
        </Row>
        {this.props.projects.filter(proj => proj.name != this.props.currentProject.name).slice(0, NUM_PROJECTS).map(proj => this.projectRow(proj))}
      </Container>
    );
  }

  private projectRow(project: Project) {
    return (
      <>
        <Row className={`justify-content-center mt-3 ${styles.projectRow}`}>
          <Col lg={PROJECT_BODY_COLUMN - 3}>
            <div className={styles.projectTitle}>{project.company}</div>
            <div className={styles.projectDescription}>{project.name} / {project.term}</div>
          </Col>
          <Col lg="3" className="text-right"><Link to={project.url}>
            View Case Study <FaArrowRight />
          </Link></Col>
        </Row>
        <Row className={`justify-content-center ${styles.horizontalLineRow}`}>
          <Col lg={PROJECT_BODY_COLUMN} className="mt-2"></Col>
        </Row>
      </>);
  }
}