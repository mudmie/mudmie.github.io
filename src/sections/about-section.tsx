import * as React from "react";
import { Col, Container, Row } from "reactstrap";
import * as styles from "./about-section.module.scss";
import * as sharedStyles from "./sections.module.scss";
import { OutboundLink } from "gatsby-plugin-google-analytics";
import { withPrefix, Link } from "gatsby";
import { SocialMediaLinks } from "../components/social-media-links";
export interface AboutSectionProps {
  id: string;
}
export class AboutSection extends React.Component<AboutSectionProps, {}> {
  private getImageUrl(filename: string) {
    return withPrefix(`/images/${filename}`);
  }

  public render() {
    return (
      <section className={styles.section}>
        <Container className={styles.container}>
          <a id={this.props.id} className={sharedStyles.sectionAnchor} />
          <Row
            className={`justify-content-center align-items-center ${styles.rowName}`}
          >
            <Col
              lg="12"
            // data-sal="slide-up"
            // data-sal-duration="400"
            // data-sal-delay="200"
            // data-sal-easing="ease-out-back"
            // className={`align-self-end ${styles.colAbout}`}
            >
              <h1 className={styles.aboutHeading}>
                Untangling complex systems and crafting product experience that
                makes lives easier.{" "}
                <span className={styles.aboutPara}>
                  {" "}
                  Mudmie is a product designer solving B2B & B2C
                  problems in health tech, fintech, and construction tech.
                </span>
              </h1>
            </Col>
          </Row>
          <Row>
            <Col
              lg="10"
            // className={`align-self-end ${styles.colInfo}`}
            // data-sal="slide-down"
            // data-sal-duration="400"
            // data-sal-delay="200"
            // data-sal-easing="ease-out-back"
            >
              {/* <p className={styles.aboutPara}>
              Mudmie is a product designer who has designed B2B & B2C products in health tech, fintech, construction tech, and more.
              </p> */}
              {/* Social Media Links */}
              <SocialMediaLinks separator="&nbsp;&nbsp;&nbsp;&nbsp;" isDarkBackground={true} />
            </Col>
          </Row>
        </Container>
      </section>
    );
  }
}
