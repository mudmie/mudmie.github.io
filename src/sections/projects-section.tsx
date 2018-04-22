import * as React from "react";
import {
  Card,
  CardBody,
  CardImg,
  CardTitle,
  Col,
  Container,
  Row,
  CardSubtitle,
} from "reactstrap";
import { Project } from "../models/project";
import * as styles from "./projects-section.scss";
import Link, { withPrefix } from "gatsby-link";

export interface ProjectsSectionProps {
  projects: Project[];
}
export class ProjectsSection extends React.Component<ProjectsSectionProps, {}> {
  public render() {
    return (
      <Container>
        <Row>
          <Col>
            <h2>
              Collection<br />&#8212; of my Work
            </h2>
          </Col>
        </Row>
        <Row>
          {this.props.projects.map(proj => (
            <Col lg="4" md="6" className={styles.projectCard} key={proj.name}>
              <Card>
                <Link to={proj.url}>
                  <CardImg
                    src="http://via.placeholder.com/400x200"
                    alt={`project ${proj.name} image`}
                  />
                </Link>
                <CardBody>
                  <CardTitle>
                    <Link to={proj.url}>{proj.name}</Link>
                  </CardTitle>
                  <CardSubtitle>{proj.subtitle}</CardSubtitle>
                </CardBody>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}
