import * as React from "react";
import { Col, Container, Row } from "reactstrap";

export class Footer extends React.Component {
  public render() {
    return (
      <footer>
        <Container>
          <Row>
            <Col className="text-center">
              Made With <i className="fa fa-heart" aria-hidden="true" /> Mudmie
              © {new Date().getFullYear()}
            </Col>
          </Row>
        </Container>
      </footer>
    );
  }
}
