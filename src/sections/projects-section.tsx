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
            <h2 className={styles.sectionHeading}>Projects</h2>
          </Col>
        </Row>
        <Row>
          {this.props.projects.map(proj => (
            <Col lg="6" sm="12" className={styles.projectCell} key={proj.name}>
              <Card className={styles.projectCard}>
                <CardBody className={styles.cardHeader}>
                  <CardTitle className={styles.cardTitle}>
                    <Link to={proj.url}>{proj.name}</Link>
                  </CardTitle>
                  <CardSubtitle className={styles.cardSubtitle}>
                    {proj.company}
                    <br />
                    {proj.term}
                  </CardSubtitle>
                </CardBody>
                <Link to={proj.url}>
                  <CardImg
                    src={withPrefix(
                      `/images/${proj.imageFolder}/thumbnail.png`
                    )}
                    alt={`project ${proj.name} image`}
                    className={styles.cardImage}
                  />
                </Link>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}
