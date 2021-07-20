import * as React from "react";
import { Project } from "../models/project";
import { Container, Row, Col } from "reactstrap";
import { ProjectNav } from "./project-nav";
import { FaArrowRight } from "react-icons/fa";
import { Link, withPrefix } from "gatsby";
import * as styles from "./project-body.module.scss";
import Img from "gatsby-image";
import { Dash } from "./dash";
import { PROJECT_BODY_COLUMN } from "./project-layout";

export interface ProjectBodyProps {
  project: Project;
  mainImage?: any;
}
export class ProjectBody extends React.Component<ProjectBodyProps, {}> {
  public render() {
    return (
      <div>
        <Container>
          {/* <Row className="justify-content-center">
            <Col lg={PROJECT_BODY_COLUMN}>
              <Img
                alt="main project image"
                fluid={this.props.mainImage}
                className="background-theme-color"
              />
            </Col>
          </Row> */}
          {/* <Row className="justify-content-center mt-3">
            <Col lg={PROJECT_BODY_COLUMN} className={styles.borderTop}>
              {this.props.project.type}{" / "}{this.props.project.platform.join(" ")}{" / "}{this.props.project.duration}
            </Col>
          </Row> */}
        </Container>
        {this.props.children}
      </div>
    );
  }
}
