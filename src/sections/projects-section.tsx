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
import { HiArrowDown } from "react-icons/hi2";
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
                lg="12"
                data-sal="slide-up"
                data-sal-duration="400"
                data-sal-delay="600"
                data-sal-easing="ease-out-back"
              >
                <h2 className={styles.featuredProjectText}>
                  Featured Projects{" "}
                  <span className={sharedStyles.red}>
                    <HiArrowDown />
                  </span>
                </h2>
              </Col>
            </Row>
          </Container>
        </section>
        <section className={styles.sectionProject + " " + styles.first}>
          <Container className={styles.container}>
            <Row
              className={`${styles.row} gx-5`}
              data-sal="fade"
              data-sal-duration="400"
              data-sal-delay="200"
              data-sal-easing="ease-out-back"
            >
              {this.props.projects
                .filter((proj) => proj.isEnabled)
                .map((proj, i) => (
                  <ProjectCard project={proj} key={proj.name} />
                ))}
            </Row>
          </Container>
        </section>
      </>
    );
  }
}
