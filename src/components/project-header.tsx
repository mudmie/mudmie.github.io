import * as React from "react";
import * as styles from "./project-header.module.scss";
import { Col, Container, Row } from "reactstrap";
import { Project } from "../models/project";
import { ProjectNav } from "./project-nav";
import { PROJECT_BODY_COLUMN } from "./project-layout";
import { withPrefix } from "gatsby";
import { ImageSharp } from "../models/image-sharp";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

export interface ProjectHeaderProps {
  allProjects: Project[];
  currentProject: Project;
  mainImage: ImageSharp;
}
export class ProjectHeader extends React.Component<ProjectHeaderProps, {}> {
  public render() {
    return (
      <>
        <section className={styles.sectionImage}>
          {/* <Container className={styles.header} fluid={true}> */}
          <Row className="justify-content-center">
            <Col lg="12" className="main">
              <GatsbyImage
                image={getImage(this.props.mainImage)}
                alt="main project image"
              />
            </Col>
          </Row>
          {/* </Container> */}
        </section>

        <section className={styles.summarySection}>
          <Container className={styles.header}>
            <Row className="justify-content-center mt-4 mb-4">
              <Col lg="6" className="mb-3">
                {/* <img
                  src={withPrefix(
                    `/images/${this.props.currentProject.imageFolder}/main.png`
                  )}
                  alt={`project ${this.props.currentProject.name} image`}
                  className="img-fluid"
                /> */}
                <h1 className={styles.projectTitle}>
                  {this.props.currentProject.name}
                </h1>
                <div className={styles.companyTerm}>
                  {this.props.currentProject.company} /{" "}
                  {this.props.currentProject.term}
                </div>
              </Col>
              <Col lg="6">
                <p className={styles.projectIntro}>
                  {this.props.currentProject.companyDescription}
                </p>
                <p className={styles.projectIntro}>
                  <b>My Roles</b> <br />
                  {this.props.currentProject.myRole}
                </p>
                <p className={styles.projectIntro}>
                  {" "}
                  <b>Results</b> <br /> {this.props.currentProject.results}
                </p>
              </Col>
            </Row>
          </Container>
        </section>
      </>
    );
  }
}
