import Img from "gatsby-image";
import { withPrefix } from "gatsby";
import * as React from "react";
import { Col, Container, Row } from "reactstrap";
import { Project } from "../models/project";
import * as styles from "./project-header.module.scss";
import { ProjectNav } from "./project-nav";

export interface ProjectHeaderProps {
  allProjects: Project[];
  currentProject: Project;
  mainImage?: any;
}
export class ProjectHeader extends React.Component<ProjectHeaderProps, {}> {
  public render() {
    return (
      <Container className={styles.header}>
        <ProjectNav
          projects={this.props.allProjects}
          currentProject={this.props.currentProject}
        />
        <Row className="justify-content-center">
          <Col lg="10">
            <h1>{this.props.currentProject.name}</h1>
            <h2 className={styles.subtitle}>
              — {this.props.currentProject.subtitle}
            </h2>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col lg="10">
            {this.props.mainImage ? (
              <Img
                alt="main project image"
                sizes={this.props.mainImage}
                className="background-theme-color"
              />
            ) : (
              <img
                src={withPrefix(
                  `/images/${this.props.currentProject.imageFolder}/main.png`
                )}
                alt="main project image"
                className="img-fluid"
              />
            )}
          </Col>
        </Row>
        <Row className="justify-content-center mt-3">
          <Col lg="10">
            <p>{this.props.currentProject.description}</p>
            <hr className={styles.smallDash} />
          </Col>
        </Row>
      </Container>
    );
  }
}
