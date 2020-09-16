import * as React from "react";
import { Col, Container, Row } from "reactstrap";
import { Project } from "../models/project";
import * as styles from "./projects-section.module.scss";
import * as sharedStyles from "./sections.module.scss";
import { ProjectGroup } from "../models/project-group";
import { ProjectGroupRow } from "../components/project-group-row";

export interface ProjectsSectionProps {
  projects: Project[];
  projectGroups: ProjectGroup[];
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
            <h2 className={styles.sectionHeading}>Projects</h2>
          </Col>
        </Row>
        {this.props.projectGroups
          .filter(group => group.isEnabled)
          .map((group, index) => (
            <ProjectGroupRow
              position={index + 1}
              projectGroup={group}
              projects={this.props.projects.filter(
                (proj: Project) =>
                  proj.isEnabled && proj.projectGroup == group.name
              )}
              onMouseEnterProjectItem={proj =>
                this.onMouseEnterProjectItem(proj)
              }
              onMouseLeaveProjectItem={proj =>
                this.onMouseLeaveProjectItem(proj)
              }
              hoverProject={this.state.hoverProject}
              key={group.name}
            ></ProjectGroupRow>
          ))}
      </Container>
    );
  }
}
