import * as React from "react";
import Helmet from "react-helmet";
import { Project } from "../models/project";
import { ProjectFooter } from "./project-footer";
import { ProjectHeader } from "./project-header";
import * as styles from "./project-layout.module.scss";
import Layout from "./layout";

export interface ProjectLayoutProps {
  allProjects: Project[];
  currentProject: Project;
  mainImage?: any;
  children: any;
}
export class ProjectLayout extends React.Component<ProjectLayoutProps, {}> {
  public render() {
    return (
      <Layout>
        <Helmet>
          <title>{this.props.currentProject.name}</title>
          <link
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,400i,700"
            rel="stylesheet"
          />
        </Helmet>
        <div
          className={`${styles.projectPage} ${
            styles["theme" + this.props.currentProject.theme]
          }`}
        >
          <ProjectHeader
            allProjects={this.props.allProjects}
            currentProject={this.props.currentProject}
            mainImage={this.props.mainImage}
          />
          {this.props.children}
          <ProjectFooter
            allProjects={this.props.allProjects}
            currentProject={this.props.currentProject}
          />
        </div>
      </Layout>
    );
  }
}
