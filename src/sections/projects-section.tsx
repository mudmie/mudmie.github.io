import { Link, withPrefix } from "gatsby";
import * as React from "react";
import {
  Card,
  CardBody,
  CardImg,
  CardSubtitle,
  CardTitle,
  Col,
  Container,
  Row,
} from "reactstrap";
import { Project } from "../models/project";
import * as styles from "./projects-section.module.scss";
import * as sharedStyles from "./sections.module.scss";

export interface ProjectsSectionProps {
  projects: Project[];
  id: string;
}
export class ProjectsSection extends React.Component<ProjectsSectionProps, {}> {
  public render() {
    return (
      <Container>
        <a id={this.props.id} className={sharedStyles.sectionAnchor} />
        <Row>
          <Col>
            <h2 className={styles.sectionHeading}>
              Collection
              <br />
              &#8212; of my Work
            </h2>
          </Col>
        </Row>
        <Row>
          {this.props.projects.map(proj => (
            <Col lg="4" sm="6" className={styles.projectCard} key={proj.name}>
              <Card>
                <Link to={proj.url}>
                  <CardImg
                    src={withPrefix(`/images/${proj.imageFolder}/banner.jpg`)}
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
