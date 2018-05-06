import Img from "gatsby-image";
import { withPrefix } from "gatsby-link";
import * as React from "react";
import { Helmet } from "react-helmet";
import { Col, Container, Row } from "reactstrap";
import { Project } from "../models/project";
import * as styles from "./project-header.scss";
import { ProjectNav } from "./project-nav";

export interface ProjectHeaderProps {
  allProjects: Project[];
  project: Project;
  mainImage?: any;
}
export class ProjectHeader extends React.Component<ProjectHeaderProps, {}> {
  public render() {
    return (
      <>
        <Helmet>
          <title>{this.props.project.name}</title>
        </Helmet>
        <Container className={styles.header}>
          <ProjectNav
            projects={this.props.allProjects}
            currentProject={this.props.project}
          />
          <Row>
            <Col>
              <h1>{this.props.project.name}</h1>
              <h2 className={styles.subtitle}>
                — {this.props.project.subtitle}
              </h2>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col lg="10">
              {this.props.mainImage ? (
                <Img alt="main project image" sizes={this.props.mainImage} />
              ) : (
                <img
                  src={withPrefix(
                    `/images/${this.props.project.imageFolder}/main.png`
                  )}
                  alt="main project image"
                  className="img-fluid"
                />
              )}
              <p>{this.props.project.description}</p>
              <hr className={styles.smallDash} />
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}
