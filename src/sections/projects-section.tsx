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
    this.onMouseEnterProjectItem.bind(this);
    this.onMouseLeaveProjectItem.bind(this);
  }
  public onMouseEnterProjectItem(project: Project) {
    this.setState({
      hoverProject: project,
    });
  }

  public onMouseLeaveProjectItem(project: Project) {
    if (this.state.hoverProject == project) {
      this.setState({ hoverProject: null });
    }
  }

  public render() {
    const that = this;
    return (
      <Container>
        <a id={this.props.id} className={sharedStyles.sectionAnchor} />
        <Row>
          <Col>
            <h2 className={styles.sectionHeading}>Featured Projects</h2>
          </Col>
        </Row>
        <Row>
          {this.props.projects.map(proj => (
            <Col
              lg="5"
              sm="6"
              xs="12"
              // className={`${styles.projectCell} ${
              //   this.props.hoverProject != null &&
              //   this.props.hoverProject != proj
              //     ? styles.cellInactive
              //     : ""
              // }`}
              onMouseEnter={() =>
                this.onMouseEnterProjectItem &&
                this.onMouseEnterProjectItem(proj)
              }
              onMouseLeave={() =>
                this.onMouseLeaveProjectItem &&
                this.onMouseLeaveProjectItem(proj)
              }
              key={proj.name}
            >
              <Card className={styles.projectCard}>
                <Link to={proj.url}>
                  <CardImg
                    src={withPrefix(
                      `/images/${proj.imageFolder}/thumbnail.png`
                    )}
                    alt={`project ${proj.name} image`}
                    className={styles.cardImage}
                  />
                </Link>
                <CardBody className={styles.cardHeader}>
                  <CardTitle className={styles.cardTitle}>
                    {proj.isProtected ? (
                      <span>
                        <FaLock size={16} />{" "}
                      </span>
                    ) : null}
                    <Link to={proj.url}>{proj.name}</Link>{" "}
                  </CardTitle>
                  <CardSubtitle className={styles.cardSubtitle}>
                    {/* {proj.company} */}
                    {proj.term}
                  </CardSubtitle>
                </CardBody>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}
