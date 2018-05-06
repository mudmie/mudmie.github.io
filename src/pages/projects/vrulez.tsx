import * as React from "react";
import { Col, Container, Row } from "reactstrap";
import { ProjectLayout } from "../../components/project-layout";
import { ProjectPageProps } from "../../models/project-page-props";
import { OutboundLink } from "gatsby-plugin-google-analytics";

export default class VrulezPage extends React.Component<ProjectPageProps, {}> {
  public render() {
    return (
      <ProjectLayout
        allProjects={this.props.data.allProjects.edges.map(e => e.node)}
        currentProject={this.props.data.project.edges[0].node}
        mainImage={this.props.data.mainImage.childImageSharp.sizes}
      >
        <Container>
          <Row>
            <Col>
              <OutboundLink
                href="http://www.vrulez.com"
                target="_blank"
                className="btn"
              >
                Visit the site
              </OutboundLink>
            </Col>
          </Row>
        </Container>
      </ProjectLayout>
    );
  }
}

export const pageQuery = graphql`
  query VrulezQuery($path: String!) {
    allProjects: allProjectsJson {
      ...ProjectFields
    }
    project: allProjectsJson(filter: { url: { eq: $path } }) {
      ...ProjectFields
    }
    mainImage: file(relativePath: { eq: "Vrulez/main.png" }) {
      ...MainImageSizes
    }
  }
`;
