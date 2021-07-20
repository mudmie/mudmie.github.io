import * as React from "react";
import { Col, Container, Row } from "reactstrap";
import * as styles from "./about-section.module.scss";
import * as sharedStyles from "./sections.module.scss";
import { OutboundLink } from "gatsby-plugin-google-analytics";
import Img from "gatsby-image";
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
            className={`justify-content-between align-items-center ${styles.rowAbout}`}
          >
            <Col
              lg="8"
              data-sal="slide-up"
              data-sal-duration="400"
              data-sal-delay="200"
              data-sal-easing="ease-out-back"
              className={`align-self-end ${styles.colAbout}`}
            >
              <div className={styles.aboutDiv}>
                <h1 className={styles.aboutHeading}>
                  Mudmie
                  <br />
                  Chuthamsatid
                </h1>
                <img
                  className={`${styles.subheading}`}
                  src={this.getImageUrl("product-designer.svg")}
                />
              </div>
            </Col>
            <Col
              lg="4"
              className={`align-self-end ${styles.colInfo}`}
              data-sal="slide-down"
              data-sal-duration="400"
              data-sal-delay="200"
              data-sal-easing="ease-out-back"
            >
              <p className={styles.aboutPara}>
                Also a holding a systems design engineering degree from the
                University of Waterloo.
              </p>
              <p className={styles.aboutPara}>
                Currently looking for a full-time product design role.
              </p>
              <SocialMediaLinks separator="NEW_LINE" />
            </Col>
          </Row>
        </Container>
      </section>
    );
  }
}
