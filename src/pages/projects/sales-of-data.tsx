import { graphql, withPrefix } from "gatsby";
import * as React from "react";
import { Col, Container, Row } from "reactstrap";
import { ProjectLayout } from "../../components/project-layout";
import { ProjectPageProps } from "../../models/project-page-props";

export default class SalesOfDataPage extends React.Component<
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
        <Container>
          <Row className="justify-content-center">
            <Col lg="10">
              <h3>Motivation</h3>
              <p>
                LCBO has <i>tons</i> of data, and raw sales data is currently
                provided to alcohol beverage producers at no cost. However, most
                small-medium sized producers have limited resources to analyze
                the data. As a result, this is a good business opportunity for
                LCBO to develop a channel for those producers to get better
                insights to their sale performance.
              </p>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col lg="10">
              <h3>It's all about the business opportunity</h3>
              <p>
                The landing pages serve as advertising media that help promote
                the sales of data service to potential clients. Here, the
                audience can explore what the service has to offer and how the
                service can help they perform better in the market.
              </p>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col lg="10">
              <img
                src={this.getImageUrl("1.png")}
                alt="Sales of Data Interface Set 1"
                className="img-fluid"
              />
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col lg="10">
              <h3>Let's get started</h3>
              <p>
                Once the clients decide to subscribe, LCBO will authorize their
                agent code so that they can use it to sign up for their
                accounts.
              </p>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col lg="10">
              <img
                src={this.getImageUrl("2.png")}
                alt="Sales of Data Interface Set 2"
                className="img-fluid"
              />
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col lg="10">
              <h3>Sales Performance</h3>
              <p />
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col lg="10">
              <img
                src={this.getImageUrl("3.png")}
                alt="Sales of Data Interface Set 3"
                className="img-fluid"
              />
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col lg="10">
              <h3>Data Visualization</h3>
              <p />
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col lg="10">
              <img
                src={this.getImageUrl("4.png")}
                alt="Sales of Data Interface Set 4"
                className="img-fluid"
              />
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
  query SalesOfDataQuery($path: String!) {
    allProjects: allProjectsJson {
      ...ProjectFields
    }
    project: allProjectsJson(filter: { url: { eq: $path } }) {
      ...ProjectFields
    }
    mainImage: file(relativePath: { eq: "Sales of Data/main.png" }) {
      ...MainImageSizes
    }
  }
`;
