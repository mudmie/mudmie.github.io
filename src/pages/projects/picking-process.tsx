import * as React from "react";
import { ProjectHeader } from "../../components/project-header";
import { ProjectPageProps } from "../../models/ProjectPageProps";

export default class PickingProcessPage extends React.Component<
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
  query PickingProcessQuery {
    allProjectsJson(filter: { url: { eq: "/projects/picking-process" } }) {
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
