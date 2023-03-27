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
import { Link, withPrefix } from "gatsby";
import { FaLock } from "react-icons/fa";
import { ProjectCard } from "../components/project-card";

export interface ProjectsSectionProps {
  projects: Project[];
  id: string;
}

export interface ProjectsSectionState {
  hoverProject: Project | null;
}
export class ProjectsSection extends React.Component<
  ProjectsSectionProps,
  ProjectsSectionState
> {
  constructor(props: any) {
    super(props);
    this.state = {
      hoverProject: null,
    };
  }

  public render() {
    const that = this;
    return (
      <>
        <section className={styles.sectionHeader}>
          <Container className={styles.container}>
            <a id={this.props.id} className={sharedStyles.sectionAnchor} />
            <Row>
              <Col
                data-sal="slide-up"
                data-sal-duration="400"
                data-sal-delay="600"
                data-sal-easing="ease-out-back"
              >
                <h2 className={styles.sectionHeading}>Featured Projects</h2>
              </Col>
            </Row>
          </Container>
        </section>
        {this.props.projects
          .filter((proj) => proj.isEnabled)
          .map((proj, i) => (
            <section
              className={
                styles.sectionProject + (i == 0 ? " " + styles.first : "")
              }
              key={proj.name}
            >
              <Container className={styles.container}>
                <ProjectCard project={proj} />
              </Container>
            </section>
          ))}
      </>
    );
  }
}
