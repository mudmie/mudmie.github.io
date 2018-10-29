import * as React from "react";
import { Col, Container, Row } from "reactstrap";
import * as styles from "./footer.module.scss";

export class Footer extends React.Component {
  public render() {
    return (
      <footer>
        <Container>
          <Row>
            <Col className={`text-center ${styles.footer}`}>
              - made with love &amp; lots of matcha -<br />
              Mudmie © {new Date().getFullYear()}
            </Col>
          </Row>
        </Container>
      </footer>
    );
  }
}
