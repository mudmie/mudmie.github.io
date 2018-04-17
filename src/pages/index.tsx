import * as React from "react";
import { Col, Container, Row, Jumbotron } from "reactstrap";

export interface IndexPageProps {}

export default class IndexPage extends React.Component<IndexPageProps, {}> {
  public render() {
    return (
      <Container fluid>
        <Row>
          <Col>
            <Jumbotron>
              <h1 className="display-3">Hello!</h1>
            </Jumbotron>
          </Col>
        </Row>
      </Container>
    );
  }
}
