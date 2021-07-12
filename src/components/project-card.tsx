import * as React from "react";
import { Project } from "../models/project";
import { Container, Row, Col } from "reactstrap";
import { ProjectNav } from "./project-nav";
import { BsArrowRight } from "react-icons/bs";
import { Link, withPrefix } from "gatsby";
import * as styles  from "./project-card.module.scss";

export interface ProjectCardProps {
  project: Project;
}
export class ProjectCard extends React.Component<ProjectCardProps, {}> {
  public render() {
    return (
      <Row className="mb-3">
        <Col md="6">
          <h3 className={styles.projectTitle}>{this.props.project.company}</h3>
          <div>
            {this.props.project.term} / {this.props.project.type}
          </div>
          <p className={styles.projectDescription}>{this.props.project.description}</p>

          <Link to={this.props.project.url} className={styles.caseStudyButton}>
            View Case Study <BsArrowRight />
          </Link>
        </Col>
        <Col md="6">
          <img
            src={withPrefix(
              `/images/${this.props.project.imageFolder}/thumbnail.png`
            )}
            alt={`project ${this.props.project.name} image`}
            className="img-fluid"
          />
        </Col>
      </Row>
    );
  }
}
