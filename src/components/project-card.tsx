import * as React from "react";
import { Project } from "../models/project";
import { Container, Row, Col } from "reactstrap";
import { ProjectNav } from "./project-nav";
import { HiArrowRight } from "react-icons/hi2";
import { Link, withPrefix } from "gatsby";
import * as styles from "./project-card.module.scss";

export interface ProjectCardProps {
  project: Project;
}
export class ProjectCard extends React.Component<ProjectCardProps, {}> {
  public render() {
    return (
      // <Row
      //   className={styles.row}
      //   data-sal="fade"
      //   data-sal-duration="400"
      //   data-sal-delay="200"
      //   data-sal-easing="ease-out-back"
      // >
      <Col lg="6">
        <Link to={this.props.project.url} className={styles.projectCardLink}>
          <div className={styles.projectCardContainer}>
          <div className={styles.projectTitleContainer}>

            <div className={styles.term}>
              {this.props.project.company}, {this.props.project.term}
            </div>

            <h3 className={styles.projectTitle}>{this.props.project.name}</h3>
            </div>

            <img
              className={`img-fluid ${styles.thumbnailImage}`}
              src={withPrefix(
                `/images/${this.props.project.imageFolder}/thumbnail.png`
              )}
              alt={`project ${this.props.project.name} image`}
            />

            <div className="text-end">
              {/* <Link
              to={this.props.project.url}
              className={styles.caseStudyButton}
            >
              Read Case Study
              <HiArrowRight className={styles.arrowIcon} />
            </Link> */}
            </div>
          </div>
        </Link>
      </Col>
      // </Row>
    );
  }
}
