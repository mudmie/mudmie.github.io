import { graphql } from "gatsby";
import * as React from "react";
import { Helmet } from "react-helmet";
import Layout from "../components/layout";
import { Container, Col, Row } from "reactstrap";
import * as Styles from "./nice-break.module.scss";

export interface NiceBreakPageProps {}

export default class NiceBreakPage extends React.Component<
  NiceBreakPageProps,
  {}
> {
  public render() {
    return (
      <Layout>
        <Helmet>
          <title>Nice Break</title>
        </Helmet>
        <Container>
          <Row>
            <Col>Coming Soon!</Col>
          </Row>
        </Container>
      </Layout>
    );
  }
}
