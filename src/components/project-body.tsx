import * as React from "react";
import { Project } from "../models/project";
import { Container, Row, Col } from "reactstrap";
import { ProjectNav } from "./project-nav";
import { FaArrowRight } from "react-icons/fa";
import { Link, withPrefix } from "gatsby";
import * as styles from "./project-body.module.scss";
import Img from "gatsby-image";
import { Dash } from "./dash";

export interface ProjectBodyProps {
  project: Project;
  mainImage?: any;
}
export class ProjectBody extends React.Component<ProjectBodyProps, {}> {
  public render() {
    return (
      <div>
        <Container>
          <Row className="justify-content-center">
            <Col lg="8">
              <Img
                alt="main project image"
                fluid={this.props.mainImage}
                className="background-theme-color"
              />
            </Col>
          </Row>
          <Row className="justify-content-center mt-3">
            <Col lg="8" className={styles.borderTop}>
              {this.props.project.type}{" / "}{this.props.project.platform.join(" ")}{" / "}{this.props.project.duration}
            </Col>
          </Row>
        </Container>
        {this.props.children}
      </div>
    );
  }
}
