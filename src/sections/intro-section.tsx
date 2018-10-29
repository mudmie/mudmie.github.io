import * as React from "react";
import { Col, Container, Row } from "reactstrap";
import { BackgroundAnimation } from "../components/background-animation";
import * as styles from "./intro-section.module.scss";
import * as sharedStyles from "./sections.module.scss";

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
          <Col md="8" className={styles.colName}>
            <div className={styles.nameBox}>
              <h1 className={styles.name}>MUDMIE CHUTHAMSATID</h1>
              <p className={styles.subtitle}>
                – a designer with engineering thoughts
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}
