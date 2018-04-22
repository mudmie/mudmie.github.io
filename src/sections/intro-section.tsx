import * as React from "react";
import * as styles from "./intro-section.scss";
import { Container, Col, Row } from "reactstrap";
import { BackgroundAnimation } from "../components/background-animation";

export class IntroSection extends React.Component {
  public render() {
    return (
      <Container fluid>
        <Row style={{ position: "relative", minHeight: "500px" }}>
          <BackgroundAnimation />
          <Col md="8" className={`text-center ${styles.colName}`}>
            <h1 className={styles.name}>Mudmie Chuthamsatid</h1>
            <hr className={styles.nameSeparator} />
            <p className={styles.subtitle}>
              a designer with engineering thoughts
            </p>
          </Col>
        </Row>
      </Container>
    );
  }
}
