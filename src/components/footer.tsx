import * as React from "react";
import { FaRegSmile } from "react-icons/fa";
import { Col, Container, Row } from "reactstrap";
import * as styles from "./footer.module.scss";

export class Footer extends React.Component {
  public render() {
    return (
      <footer>
        <Container className={styles.container}>
          <Row className={styles.footerRow}>
            <Col lg="12" className={styles.footer}>
              Designed &amp; partially coded by Mudmie 2021 ©
            </Col>
          </Row>
        </Container>
      </footer>
    );
  }
}
