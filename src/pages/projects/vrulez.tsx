import { OutboundLink } from "gatsby-plugin-google-analytics";
import * as React from "react";
import { Col, Container, Row } from "reactstrap";
import { ProjectLayout } from "../../components/project-layout";
import { ProjectPageProps } from "../../models/project-page-props";
import { withPrefix } from "gatsby-link";

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
            <Col className="text-center">
              <OutboundLink
                href="https://vrulez.com"
                target="_blank"
                className="btn"
              >
                Visit the site
              </OutboundLink>
            </Col>
          </Row>

          <Row className="justify-content-center">
            <Col lg="10">
              <h3>Landing Pages.</h3>
              <img
                src={withPrefix(
                  `/images/${
                    this.props.data.project.edges[0].node.imageFolder
                  }/landing.png`
                )}
                alt="Work Breakdown Structure of Craft Beer Ordering System"
                className="img-fluid"
              />
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col lg="10">
              <h3>About Page.</h3>
              <img
                src={withPrefix(
                  `/images/${
                    this.props.data.project.edges[0].node.imageFolder
                  }/about.png`
                )}
                alt="Work Breakdown Structure of Craft Beer Ordering System"
                className="img-fluid"
              />
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col lg="10">
              <h3>Game Page.</h3>
              <img
                src={withPrefix(
                  `/images/${
                    this.props.data.project.edges[0].node.imageFolder
                  }/games.png`
                )}
                alt="Work Breakdown Structure of Craft Beer Ordering System"
                className="img-fluid"
              />
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col lg="10">
              <h3>Location Page.</h3>
              <img
                src={withPrefix(
                  `/images/${
                    this.props.data.project.edges[0].node.imageFolder
                  }/location.png`
                )}
                alt="Work Breakdown Structure of Craft Beer Ordering System"
                className="img-fluid"
              />
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col lg="10">
              <h3>Contact Page.</h3>
              <img
                src={withPrefix(
                  `/images/${
                    this.props.data.project.edges[0].node.imageFolder
                  }/contact.png`
                )}
                alt="Work Breakdown Structure of Craft Beer Ordering System"
                className="img-fluid"
              />
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
