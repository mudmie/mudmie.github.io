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
      <Row
        className={styles.row}
        data-sal="fade"
        data-sal-duration="400"
        data-sal-delay="200"
        data-sal-easing="ease-out-back"
      >
       <Col lg="6" xl="6" className="order-2 order-lg-1">
          <div className={styles.term}>
            {this.props.project.company}, {this.props.project.term}
          </div>

          {/* <h3 className={styles.projectTitle}>{this.props.project.name}</h3> */}
          <h3 className={styles.projectTitle}>{this.props.project.name}<span className={styles.projectDescriptionNew}> — {this.props.project.description} </span></h3>

          {/* <p className={styles.projectDescriptionNew}>
            {this.props.project.description} / {this.props.project.company}, {this.props.project.term}
          </p> */}

          <Link to={this.props.project.url} className={styles.caseStudyButton}>
            Read Case Study
            <HiArrowRight className={styles.arrowIcon} />
          </Link>
        </Col>

        {/* <Col md="6" lg="6"> */}
        <Col lg="6" className="mr-4 order-1 order-lg-2">
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
