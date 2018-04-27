import * as React from "react";
import { ProjectHeader } from "../../components/project-header";
import { ProjectPageProps } from "../../models/project-page-props";

export default class ShipmentAuditTrailPage extends React.Component<
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
  query ShipmentAuditTrailQuery {
    allProjectsJson(filter: { url: { eq: "/projects/shipment-audit-trail" } }) {
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
