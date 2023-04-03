import * as React from "react";
import { Project } from "../models/project";
import { Link, withPrefix } from "gatsby";
import { Row, Col, Container } from "reactstrap";
import { HiArrowUpRight } from "react-icons/hi2";
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
        <Row className="justify-content-center mt-3 mb-3">
          <Col lg="12">
            <h2>
              More Projects
              <img
                src={withPrefix("/images/star.svg")}
                className={styles.star}
              />
            </h2>
          </Col>
        </Row>
        {this.props.projects
          .filter((proj) => proj.name != this.props.currentProject.name)
          .slice(0, NUM_PROJECTS)
          .map((proj) => this.projectRow(proj))}
      </Container>
    );
  }

  private projectRow(project: Project) {
    return (
      <React.Fragment key={project.name}>
        <Row className={`justify-content-center ${styles.projectRow}`}>
          <Col lg="9" md="6" sm="6">
            <div className={styles.projectTitle}>{project.name}</div>
            <div className={styles.projectDescription}>
              {project.company} / {project.term}
            </div>
          </Col>
          <Col lg="3" md="6" sm="6" className={styles.viewCaseStudyCol}>
            <Link to={project.url} className={styles.viewCaseStudyButton}>
              <span>View Case Study</span>
              <HiArrowUpRight className={styles.arrowIcon} />
            </Link>
          </Col>
        </Row>
        <Row className={`justify-content-center ${styles.horizontalLineRow}`}>
          <Col lg="12"></Col>
        </Row>
      </React.Fragment>
    );
  }
}
