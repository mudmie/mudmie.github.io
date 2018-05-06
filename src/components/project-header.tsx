import { withPrefix } from "gatsby-link";
import * as React from "react";
import { Helmet } from "react-helmet";
import { Col, Container, Row } from "reactstrap";
import { Project } from "../models/project";
import * as styles from "./project-header.scss";

export interface ProjectHeaderProps {
  project: Project;
}
export class ProjectHeader extends React.Component<ProjectHeaderProps, {}> {
  public render() {
    return (
      <>
        <Helmet>
          <title>{this.props.project.name}</title>
        </Helmet>
        <Container>
          <Row>
            <Col>
              <h1 className={styles.header}>{this.props.project.name}</h1>
              <h2 className={styles.subtitle}>
                — {this.props.project.subtitle}
              </h2>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col lg="10">
              <img
                src={withPrefix(
                  `/images/${this.props.project.imageFolder}/main.png`
                )}
                alt="main project image"
                className="img-fluid"
              />
              <p>{this.props.project.description}</p>
              <hr className={styles.smallDash} />
            </Col>
          </Row>
        
        </Container>
      </>
    );
  }
}
