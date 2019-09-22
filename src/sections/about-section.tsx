import * as React from "react";
import { Col, Container, Row } from "reactstrap";
import * as styles from "./about-section.module.scss";
import * as sharedStyles from "./sections.module.scss";
import { OutboundLink } from "gatsby-plugin-google-analytics";
import Img from "gatsby-image";
import { withPrefix } from "gatsby";

export interface AboutSectionProps {
  id: string;
  meImage: any;
}
export class AboutSection extends React.Component<AboutSectionProps, {}> {
  public render() {
    return (
      <Container>
        <a id={this.props.id} className={sharedStyles.sectionAnchor} />
        <Row>
          <Col>
            {/* <Img
              alt="image of me"
              fluid={this.props.meImage}
              className="background-theme-color"
            /> */}
            {/* TODO: Switch to image sharp */}
            <img
              src={this.getImageUrl("me.jpg")}
              alt="image of me"
              className="img-fluid"
            />
          </Col>
          <Col className={styles.colAbout}>
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
            <p>
              I believe that a good design communicates clearly and solves
              problems well. My mission as a product designer is not to just
              design beautiful stuff, but to design an entire product experience
              that sparks people’s joy and simplifies people’s lives.
            </p>
            <p>
              In my free time, I like to travel, find food spots, and wander
              around the city; a cup of matcha and some sushi will make me
              smile.
            </p>
          </Col>
        </Row>
      </Container>
    );
  }

  private getImageUrl(filename: string) {
    return withPrefix(`/images/${filename}`);
  }
}
