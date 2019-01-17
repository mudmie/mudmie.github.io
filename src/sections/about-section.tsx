import * as React from "react";
import { Col, Container, Row } from "reactstrap";
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
        <Row className={styles.rowAbout}>
          <Container>
            <Row>
              <Col md="8" sm="10" className={styles.colAbout}>
                <h1 className={styles.aboutHeading}>Mudmie Chuthamsatid</h1>
                <h2 className={styles.aboutHeading}>
                  previous design intern @ PlanGrid &#8212;
                </h2>
                <h2 className={styles.aboutHeading}>
                  engineering student @ UWaterloo
                </h2>
              </Col>

              <Col lg={{ size: 6, offset: 2 }} md="8" sm="10">
                <p>
                  I believe that a good design communicates clearly and solves
                  problems well. My mission as a product designer is not to just
                  design beautiful stuff, but to design an entire product
                  experience that sparks people’s joy and simplifies people’s
                  lives.
                </p>
                <p>
                  In my free time, I like to travel, find food spots, walk
                  around city, and hunting for inspiration; a cup of matcha and
                  some sushi will make me smile :o)
                </p>
              </Col>
            </Row>
          </Container>
        </Row>
      </Container>
    );
  }
}
