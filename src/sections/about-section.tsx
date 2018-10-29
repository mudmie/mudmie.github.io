import * as React from "react";
import { Col, Container, Row } from "reactstrap";
import { AboutBrushBackground } from "../components/about-brush-background";
import * as styles from "./about-section.module.scss";
import * as sharedStyles from "./sections.module.scss";

export interface AboutSectionProps {
  id: string;
}
export class AboutSection extends React.Component<AboutSectionProps, {}> {
  public render() {
    return (
      <Container fluid>
        <a id={this.props.id} className={sharedStyles.sectionAnchor} />
        <Row style={{ position: "relative" }} className={styles.rowAbout}>
          <AboutBrushBackground />
          <Container>
            <Row>
              <Col md="8" sm="10" className={styles.colAbout}>
                <h2 className={styles.aboutHeading}>
                  Hello, I'm Mudmie &#8212;
                </h2>
                <h3 className={styles.aboutHeading}>
                  It's nice to have you here!
                </h3>

                <p className={styles.aboutPara}>
                  I love travelling the world and wandering around the cities —
                  to eat, learn, and get inspired. I used to think that good
                  designs were just about aesthetics, but after taking a Human
                  Factors in Design course in my first year, my whole
                  perspective towards design has changed. A good design
                  communicates clearly and solves problems well.
                </p>

                <p className={styles.aboutPara}>
                  — My mission as a product designer is not to just design
                  beautiful stuff, but to design an entire product experience
                  that sparks people’s joy and simplifies people’s lives.
                </p>
              </Col>
            </Row>
          </Container>
        </Row>
      </Container>
    );
  }
}
