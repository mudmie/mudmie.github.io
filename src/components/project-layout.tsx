import * as React from "react";
import { Project } from "../models/project";
import { ProjectFooter } from "./project-footer";
import { ProjectHeader } from "./project-header";
import * as styles from "./project-layout.scss";

export interface ProjectLayoutProps {
  allProjects: Project[];
  project: Project;
  mainImage?: any;
  children: any;
}
export class ProjectLayout extends React.Component<ProjectLayoutProps, {}> {
  public render() {
    return (
      <div
        className={`${styles.projectPage} ${
          styles["theme" + this.props.project.theme]
        }`}
      >
        <ProjectHeader
          allProjects={this.props.allProjects}
          project={this.props.project}
          mainImage={this.props.mainImage}
        />
        {this.props.children}
        <ProjectFooter
          allProjects={this.props.allProjects}
          project={this.props.project}
        />
      </div>
    );
  }
}
