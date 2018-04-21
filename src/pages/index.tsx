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
            <h1 className="display-3">Hello!</h1>
          </Col>
        </Row>
      </Container>
    );
  }
}
