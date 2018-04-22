import * as React from "react";
import { Col, Container, Row, Jumbotron } from "reactstrap";
import { BackgroundAnimation } from "../components/background-animation";

export interface IndexPageProps {}

export default class IndexPage extends React.Component<IndexPageProps, {}> {
  public render() {
    return (
      <Container fluid>
        <Row style={{ position: "relative", minHeight: "500px" }}>
          <BackgroundAnimation />
          <Col>
            <h1 className="home-main">Mudmie Chuthams</h1>
            <p className="home-subtitle">
              a designer with engineering thoughts
            </p>
          </Col>
        </Row>
      </Container>
    );
  }
}
