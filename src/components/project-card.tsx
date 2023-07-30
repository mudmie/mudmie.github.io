import * as React from "react";
import { Project } from "../models/project";
import { Container, Row, Col } from "reactstrap";
import { ProjectNav } from "./project-nav";
import { HiArrowUpRight } from "react-icons/hi2";
import { BsArrowUpRight } from "react-icons/bs";
import { Link, withPrefix } from "gatsby";
import * as styles from "./project-card.module.scss";

export interface ProjectCardProps {
  project: Project;
}
export class ProjectCard extends React.Component<ProjectCardProps, {}> {
  public render() {
    return (
      <Row
        className={styles.row}
        data-sal="fade"
        data-sal-duration="400"
        data-sal-delay="200"
        data-sal-easing="ease-out-back"
      >
        <Col md="6" lg="6">
          <h3 className={styles.projectTitle}>{this.props.project.name}</h3>
          <div className={styles.term}>
            {this.props.project.company} / {this.props.project.term}
          </div>

          <p className={styles.projectDescription}>
            {this.props.project.description}
          </p>

          <Link to={this.props.project.url} className={styles.caseStudyButton}>
            Read Case Study
            <HiArrowUpRight className={styles.arrowIcon} />
          </Link>
        </Col>

        <Col md="6" lg={{size:5, offset:1}}>
          <Link to={this.props.project.url}>
            <img
              className={`img-fluid ${styles.thumbnailImage}`}
              src={withPrefix(
                `/images/${this.props.project.imageFolder}/thumbnail.png`
              )}
              alt={`project ${this.props.project.name} image`}
            />
          </Link>
        </Col>
      </Row>
    );
  }
}
