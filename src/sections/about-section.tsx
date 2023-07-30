import * as React from "react";
import { Col, Container, Row } from "reactstrap";
import * as styles from "./about-section.module.scss";
import * as sharedStyles from "./sections.module.scss";
import { OutboundLink } from "gatsby-plugin-google-analytics";
import Img from "gatsby-plugin-image";
import { withPrefix, Link } from "gatsby";
import { ImageSharp } from "../models/image-sharp";
import { SocialMediaLinks } from "../components/social-media-links";
import { FaRegSmile } from "react-icons/fa";
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
              {/* <div className={styles.aboutDiv}> */}
              <h1 className={styles.aboutHeading}>Hello, I'm Mudmie.</h1>
              <img
                className={`${styles.asterisk}`}
                src={this.getImageUrl("asterisk.svg")}
              />
              {/* </div> */}
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
              <p className={styles.aboutPara}>
                A product designer with experience designing B2B
                and B2C products in health tech, fintech, construction tech & more.{" "}
              </p>
              {/* Social Media Links */}
              {/* <SocialMediaLinks separator="NEW_LINE" isDarkBackground={true} /> */}
            </Col>
          </Row>
        </Container>
      </section>
    );
  }
}
