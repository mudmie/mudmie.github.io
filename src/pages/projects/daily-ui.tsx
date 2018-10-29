import { graphql, withPrefix } from "gatsby";
import * as React from "react";
import { Col, Container, Row } from "reactstrap";
import { ProjectLayout } from "../../components/project-layout";
import { ProjectPageProps } from "../../models/project-page-props";

export default class DailyUIPage extends React.Component<ProjectPageProps, {}> {
  public render() {
    return (
      <ProjectLayout
        allProjects={this.props.data.allProjects.edges.map(e => e.node)}
        currentProject={this.props.data.project.edges[0].node}
        mainImage={this.props.data.mainImage.childImageSharp.sizes}
      >
        <Container>
          <Row className="justify-content-center">
            <Col lg="5">
              <img
                src={this.getImageUrl("001.png")}
                alt="sign up page"
                className="img-fluid"
              />
            </Col>
            <Col lg="5" className="align-self-center">
              <h3>Day 1: Sign Up Page</h3>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col lg="5">
              <img
                src={this.getImageUrl("002.png")}
                alt="credit card check out page"
                className="img-fluid"
              />
            </Col>
            <Col lg="5" className="align-self-center">
              <h3>Day 2: Credit Card Checkout Page</h3>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col lg="5">
              <img
                src={this.getImageUrl("003.png")}
                alt="landing page"
                className="img-fluid"
              />
            </Col>
            <Col lg="5" className="align-self-center">
              <h3>Day 3: Landing Page</h3>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col lg="5">
              <img
                src={this.getImageUrl("004.png")}
                alt="calculator"
                className="img-fluid"
              />
            </Col>
            <Col lg="5" className="align-self-center">
              <h3>Day 4: Calculator</h3>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col lg="5">
              <img
                src={this.getImageUrl("005.png")}
                alt="app icon"
                className="img-fluid"
              />
            </Col>
            <Col lg="5" className="align-self-center">
              <h3>Day 5: App Icon</h3>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col lg="5">
              <img
                src={this.getImageUrl("006.png")}
                alt="user profile"
                className="img-fluid"
              />
            </Col>
            <Col lg="5" className="align-self-center">
              <h3>Day 6: User Profile</h3>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col lg="5">
              <img
                src={this.getImageUrl("007.png")}
                alt="settings"
                className="img-fluid"
              />
            </Col>
            <Col lg="5" className="align-self-center">
              <h3>Day 7: Settings</h3>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col lg="5">
              <img
                src={this.getImageUrl("008.png")}
                alt="404 error page"
                className="img-fluid"
              />
            </Col>
            <Col lg="5" className="align-self-center">
              <h3>Day 8: 404 Error Page</h3>
            </Col>
          </Row>
        </Container>
      </ProjectLayout>
    );
  }

  private getImageUrl(filename: string) {
    return withPrefix(
      `/images/${this.props.data.project.edges[0].node.imageFolder}/${filename}`
    );
  }
}

export const pageQuery = graphql`
  query DailyUIQuery($path: String!) {
    allProjects: allProjectsJson {
      ...ProjectFields
    }
    project: allProjectsJson(filter: { url: { eq: $path } }) {
      ...ProjectFields
    }
    mainImage: file(relativePath: { eq: "DailyUI/main.png" }) {
      ...MainImageSizes
    }
  }
`;
