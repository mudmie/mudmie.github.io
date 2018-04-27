import * as React from "react";
import { ProjectHeader } from "../../components/project-header";
import { ProjectPageProps } from "../../models/project-page-props";

export default class RoundaboutCanadaPage extends React.Component<
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
  query RoundaboutCanadaQuery {
    allProjectsJson(filter: { url: { eq: "/projects/roundabout-canada" } }) {
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
