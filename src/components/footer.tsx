import * as React from "react";
import { FaRegSmile } from "react-icons/fa";
import { Col, Container, Row } from "reactstrap";
import * as styles from "./footer.module.scss";

export class Footer extends React.Component {
  public render() {
    return (
      <footer>
        <Container>
          <Row className={styles.footerRow}>
            <Col className={styles.footer}>
              Designed &amp; partially coded by Mudmie 2021 ©
            </Col>
          </Row>
        </Container>
      </footer>
    );
  }
}
