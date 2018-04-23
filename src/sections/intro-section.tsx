import * as React from "react";
import { Col, Container, Row } from "reactstrap";
import { BackgroundAnimation } from "../components/background-animation";
import * as styles from "./intro-section.scss";
import * as sharedStyles from "./sections.scss";

export interface IntroSectionProps {
  id: string;
}
export class IntroSection extends React.Component<IntroSectionProps, {}> {
  public render() {
    return (
      <Container fluid>
        <a id={this.props.id} className={sharedStyles.sectionAnchor} />
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
