import * as React from "react";
import { Project } from "../models/project";
import { Helmet } from "react-helmet";
import { Container, Row, Col } from "reactstrap";

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
              <h1>{this.props.project.name}</h1>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}
