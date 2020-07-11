import * as React from "react";
import * as styles from "./project-group-row.module.scss";
import { FaLock } from "react-icons/fa";
import { Link, withPrefix } from "gatsby";
import { Project } from "../models/project";
import { ProjectGroup } from "../models/project-group";
import {
  Row,
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardImg,
  Col,
} from "reactstrap";

export interface ProjectGroupProps {
  position: number;
  projectGroup: ProjectGroup;
  projects: Project[];
  onMouseEnter: any;
  onMouseLeave: any;
  hoverProject: Project;
}
export class ProjectGroupRow extends React.Component<ProjectGroupProps, {}> {
  public render() {
    return (
      <Row>
        <Col lg="3" sm="6" xs="12">
          <div className={styles.projectGroupIndex}>
            {this.props.position.toString().padStart(2, "0")}
          </div>
          <div className={styles.projectGroup}>
            <h3 className={styles.projectGroupTitle}>
              {this.props.projectGroup.title}
            </h3>
          </div>
          <p>{this.props.projectGroup.description}</p>
        </Col>
        <Col lg="9">
          <Row>
            {this.props.projects.map(proj => (
              <Col
                lg="4"
                sm="6"
                xs="12"
                className={`${styles.projectCell} ${
                  this.props.hoverProject != null &&
                  this.props.hoverProject != proj
                    ? styles.cellInactive
                    : ""
                }`}
                onMouseEnter={() =>
                  this.props.onMouseEnterProjectItem &&
                  this.props.onMouseEnterProjectItem(proj)
                }
                onMouseLeave={() =>
                  this.props.onMouseLeaveProjectItem &&
                  this.props.onMouseLeaveProjectItem(proj)
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
        </Col>
      </Row>
    );
  }
}
