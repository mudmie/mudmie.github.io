import * as React from "react";
import { Col, Container, Row } from "reactstrap";
import { ProjectLayout } from "../../components/project-layout";
import { ProjectPageProps } from "../../models/project-page-props";

export default class ShipmentAuditTrailPage extends React.Component<
  ProjectPageProps,
  {}
> {
  public render() {
    return (
      <ProjectLayout
        allProjects={this.props.data.allProjects.edges.map(e => e.node)}
        project={this.props.data.project.edges[0].node}
        mainImage={this.props.data.mainImage.childImageSharp.sizes}
      >
        <Container>
          <Row>
            <Col>TODO</Col>
          </Row>
        </Container>
      </ProjectLayout>
    );
  }
}

export const pageQuery = graphql`
  query ShipmentAuditTrailQuery {
    allProjects: allProjectsJson {
      ...ProjectFields
    }
    project: allProjectsJson(
      filter: { url: { eq: "/projects/shipment-audit-trail" } }
    ) {
      ...ProjectFields
    }
    mainImage: file(relativePath: { eq: "Audit Trail/main.png" }) {
      ...MainImageSizes
    }
  }
`;
