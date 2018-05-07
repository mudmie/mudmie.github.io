import * as React from "react";
import { Col, Container, Row } from "reactstrap";
import { ProjectLayout } from "../../components/project-layout";
import { ProjectPageProps } from "../../models/project-page-props";

export default class PickingProcessPage extends React.Component<
  ProjectPageProps,
  {}
> {
  public render() {
    return (
      <ProjectLayout
        allProjects={this.props.data.allProjects.edges.map(e => e.node)}
        currentProject={this.props.data.project.edges[0].node}
        mainImage={this.props.data.mainImage.childImageSharp.sizes}
      >
        {/* <Container>
          <Row>
            <Col></Col>
          </Row>
        </Container> */}
      </ProjectLayout>
    );
  }
}

export const pageQuery = graphql`
  query PickingProcessQuery($path: String!) {
    allProjects: allProjectsJson {
      ...ProjectFields
    }
    project: allProjectsJson(filter: { url: { eq: $path } }) {
      ...ProjectFields
    }
    mainImage: file(relativePath: { eq: "Picking/main.png" }) {
      ...MainImageSizes
    }
  }
`;
