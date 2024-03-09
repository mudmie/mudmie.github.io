import * as React from "react";
import * as styles from "./project-layout.module.scss";
import Helmet from "react-helmet";
import Layout from "./layout";
import { Project } from "../models/project";
import { ProjectFooter } from "./project-footer";
import { ProjectHeader } from "./project-header";
import { ProtectedSection } from "./protected-section";
import { ProjectBody } from "./project-body";

export interface ProjectLayoutProps {
  allProjects: Project[];
  currentProject: Project;
  mainImage?: any;
  mainImageOverrideUri?: string;
  disableHeader: boolean;
  children: any;
}

export const PROJECT_BODY_COLUMN = 10;

export class ProjectLayout extends React.Component<ProjectLayoutProps, {}> {
  public render() {
    return (
      <Layout>
        <Helmet>
          <title>{this.props.currentProject.name}</title>
        </Helmet>
        <div className={styles.projectPage}>
          <ProtectedSection
            mainImage={this.props.mainImage}
            currentProject={this.props.currentProject}
            isProtected={this.props.currentProject.isProtected}
          >
            {!this.props.disableHeader && (
              <ProjectHeader
                allProjects={this.props.allProjects}
                currentProject={this.props.currentProject}
                mainImage={this.props.mainImage}
                mainImageOverrideUri={this.props.mainImageOverrideUri}
              />
            )}
            <ProjectBody project={this.props.currentProject}>
              {this.props.children}
            </ProjectBody>
            <ProjectFooter
              allProjects={this.props.allProjects}
              currentProject={this.props.currentProject}
            />
          </ProtectedSection>
        </div>
      </Layout>
    );
  }
}
