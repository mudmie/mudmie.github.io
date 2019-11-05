import * as React from "react";
import * as styles from "./project-layout.module.scss";
import Helmet from "react-helmet";
import Layout from "./layout";
import { Project } from "../models/project";
import { ProjectFooter } from "./project-footer";
import { ProjectHeader } from "./project-header";
import { ProtectedSection } from "./protected-section";

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
        </Helmet>
        <div className={styles.projectPage}>
          <ProjectHeader
            allProjects={this.props.allProjects}
            currentProject={this.props.currentProject}
          />
          <ProtectedSection
            mainImage={this.props.mainImage}
            currentProject={this.props.currentProject}
            isProtected={this.props.currentProject.isProtected}
          >
            {this.props.children}
          </ProtectedSection>
          <ProjectFooter
            allProjects={this.props.allProjects}
            currentProject={this.props.currentProject}
          />
        </div>
      </Layout>
    );
  }
}
