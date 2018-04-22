import * as React from "react";
import { ProjectHeader } from "../../components/project-header";
import { ProjectPageProps } from "../../models/ProjectPageProps";

export default class ForgetMeNotPage extends React.Component<
  ProjectPageProps,
  {}
> {
  public render() {
    return (
      <>
        <ProjectHeader
          project={this.props.data.allProjectsJson.edges[0].node}
        />
      </>
    );
  }
}

export const pageQuery = graphql`
  query ForgetMeNotQuery {
    allProjectsJson(filter: { url: { eq: "/projects/forget-me-not" } }) {
      edges {
        node {
          name
          subtitle
          url
        }
      }
    }
  }
`;
