import * as React from "react";
import * as styles from "./project-header.module.scss";
import { Col, Container, Row } from "reactstrap";
import { Project } from "../models/project";
import { ProjectNav } from "./project-nav";
import { PROJECT_BODY_COLUMN } from "./project-layout";
import { withPrefix } from "gatsby";
import { ImageSharp } from "../models/image-sharp";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { HiArrowDown } from "react-icons/hi2";

export interface ProjectHeaderProps {
  allProjects: Project[];
  currentProject: Project;
  mainImage: ImageSharp;
  mainImageOverrideUri?: string;
}
export class ProjectHeader extends React.Component<ProjectHeaderProps, {}> {
  public render() {
    return (
      <>
        {/* <section>
          <Container className={styles.header} fluid={true}>
              <div className={styles.sectionImage}>
                {this.props.mainImageOverrideUri ? (
                  <img
                    src={this.props.mainImageOverrideUri}
                    className="img-fluid"
                  />
                ) : (
                  <GatsbyImage
                    image={getImage(this.props.mainImage)}
                    alt="main project image"
                  />
                )}
              </div>
          </Container>
        </section> */}

        <section className={styles.projectOverview}>
          <Container>
            <Row className="justify-content-center">
              <Col lg="10">
                {" "}
                {/*make this 2nd order starting from md-size*/}
                <div className={styles.companyTerm}>
                  {this.props.currentProject.company},{" "}
                  {this.props.currentProject.term}
                </div>
                <h1 className={styles.projectTitle}>
                  {this.props.currentProject.name}
                </h1>
              </Col>
            </Row>

            <Row className="justify-content-center">
              <Col lg="6" className="order-lg-2">
                {/* <Col lg={{ size: 5, offset: 1 }}> */}
                <div className={styles.sectionImage}>
                  {this.props.mainImageOverrideUri ? (
                    <img
                      src={this.props.mainImageOverrideUri}
                      className="img-fluid"
                    />
                  ) : (
                    <GatsbyImage
                      image={getImage(this.props.mainImage)}
                      alt="main project image"
                    />
                  )}
                </div>
                <Row className={styles.detailTable}>
                  <Col xs="4" lg="4" className="pe-0 ps-0">
                    <p className={styles.tableHeader}>Timeline</p>
                    <p className={styles.tableBody}>
                      {" "}
                      {this.props.currentProject.term}
                      <br />
                      {this.props.currentProject.duration}
                    </p>
                  </Col>

                  <Col xs="4" lg="4" className="pe-0 ps-0">
                    <p className={styles.tableHeader}>Platform</p>
                    <p className={styles.tableBody}>
                      <ul className={styles.teamList}>
                        {this.props.currentProject.platform.map((team) => (
                          <li>{team}</li>
                        ))}
                      </ul>

                    </p>
                  </Col>

                  <Col xs="4" lg="4" className="pe-0 ps-0">
                    <p className={styles.tableHeader}>Collaborators</p>
                    <p className={styles.tableBody}>
                      <ul className={styles.teamList}>
                        {this.props.currentProject.team.map((team) => (
                          <li>{team}</li>
                        ))}
                      </ul>
                    </p>
                  </Col>
                </Row>
              </Col>

              <Col lg="4" className="order-lg-1">
                {" "}
                {/*make this 1st order starting from lg-size*/}
                <p className={styles.projectIntroTitle}>Company</p>
                <p className={styles.projectIntroBody}>
                  {this.props.currentProject.companyDescription}
                </p>
                <p className={styles.projectIntroTitle}>My Role</p>
                <p className={styles.projectIntroBody}>
                  {this.props.currentProject.myRole}
                </p>
                <p className={styles.projectIntroTitle}>Results</p>
                <p className={styles.projectIntroBody}>
                  {this.props.currentProject.results}
                </p>
              </Col>
            </Row>
            <Row className="justify-content-center">
              <Col lg="10">
                <h2 className={styles.readFullCaseStudyText}>
                  Read a full case study <HiArrowDown />
                </h2>
              </Col>
            </Row>
          </Container>

          {/* <Container className={styles.header}>
            <Row className="justify-content-center">
              <Col lg="7" className="mb-3">
                <img
                  src={withPrefix(
                    `/images/${this.props.currentProject.imageFolder}/main.png`
                  )}
                  alt={`project ${this.props.currentProject.name} image`}
                  className="img-fluid"
                />
                <h1 className={styles.projectTitle}>
                  {this.props.currentProject.name}
                </h1>
                <div className={styles.companyTerm}>
                  {this.props.currentProject.company},{" "}
                  {this.props.currentProject.term}
                </div>
              </Col>
              <Col lg="5">
                <p className={styles.projectIntro}>
                  {this.props.currentProject.companyDescription}
                </p>
                <p className={styles.projectIntro}>
                  <b>My Roles</b> — {""}
                  {this.props.currentProject.myRole}
                </p>
                <p className={styles.projectIntro}>
                  {" "}
                  <b>Results</b> — {""} {this.props.currentProject.results}
                </p>
              </Col>
            </Row>
          </Container> */}
        </section>
      </>
    );
  }
}
