import { graphql } from "gatsby";
import * as React from "react";
import { Helmet } from "react-helmet";
import Layout from "../components/layout";
import { Container, Col, Row } from "reactstrap";
import * as styles from "./nice-break.module.scss";
import { ImageSharp } from "../models/image-sharp";
import Img from "gatsby-image";
import { Dash } from "../components/dash";

export interface NiceBreakPageProps {
  data: {
    mainImage: ImageSharp;
  };
}

export default class NiceBreakPage extends React.Component<
  NiceBreakPageProps,
  {}
> {
  public render() {
    return (
      <Layout theme="dark">
        <Helmet>
          <title>Nice Break</title>
        </Helmet>
        <Container>
          <Row>
            <Col>
              <h1>Mudmie’s on a nice school break</h1>
              <h2>shine bright like the sun somewhere outside waterloo</h2>
              <Img
                fluid={this.props.data.mainImage.childImageSharp.fluid}
                alt="Night scene in Castro neighborhood"
              />
              <p>
                Only two weeks before school started, I was walking under the
                arrays of rainbow light in the Castro, embracing my last night
                in San Francisco.{" "}
              </p>
            </Col>
          </Row>
          <Row className="justify-content-center mt-3">
            <Col lg="10">
              <Dash />
            </Col>
          </Row>
          <Row>
            <Col>
              coming soon.
              <br />
              specifically when mudmie is on the reading week break in October.
            </Col>
          </Row>
        </Container>
      </Layout>
    );
  }
}

export const pageQuery = graphql`
  query NiceBreakPageQuery {
    mainImage: file(relativePath: { eq: "Nice Break/Castro.jpg" }) {
      ...MainImageSizes
    }
  }
`;
