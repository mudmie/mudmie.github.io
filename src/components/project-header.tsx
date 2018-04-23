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
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}
