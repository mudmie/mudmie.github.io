import * as React from "react";
import { Col, Container, Row } from "reactstrap";
import * as styles from "./about-section.module.scss";
import * as sharedStyles from "./sections.module.scss";
import { OutboundLink } from "gatsby-plugin-google-analytics";

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
                  design intern @ PlanGrid &#8212;
                </h2>
                <h2 className={styles.aboutHeading}>
                  engineering student @ UWaterloo
                </h2>
                <div className={styles.socialMedia}>
                  <OutboundLink
                    className={styles.linkedIn}
                    href="https://www.linkedin.com/in/mudmie"
                    target="_blank"
                  >
                    <i className="fab fa-linkedin fa-lg" />
                  </OutboundLink>{" "}
                  <OutboundLink
                    className={styles.instagram}
                    href="https://www.instagram.com/mudmiemee"
                    target="_blank"
                  >
                    <i className="fab fa-instagram fa-lg" />
                  </OutboundLink>
                </div>
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
                  In my free time, I like to travel, find food spots, and wander
                  around city; a cup of matcha and some sushi will make me
                  smile.
                </p>
              </Col>
            </Row>
          </Container>
        </Row>
      </Container>
    );
  }
}
