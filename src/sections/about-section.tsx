import * as React from "react";
import { Col, Container, Row } from "reactstrap";
import * as styles from "./about-section.module.scss";
import * as sharedStyles from "./sections.module.scss";
import { OutboundLink } from "gatsby-plugin-google-analytics";
import Img from "gatsby-image";
import { withPrefix, Link } from "gatsby";
import { AboutTitle } from "../components/about-title";
import { ImageSharp } from "../models/image-sharp";
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
      <Container className={styles.about}>
        <a id={this.props.id} className={sharedStyles.sectionAnchor} />
        <Row
          className={`justify-content-between align-items-center ${styles.rowAbout}`}
        >
          <Col sm="12" md="6" lg="5" className={`${styles.colAbout}`}>
            <AboutTitle />
            <div className="text-right d-md-none">
              <SocialMediaLinks />
            </div>
            <a href="#projects" className={styles.verticalArrow}>
              <img
                src={this.getImageUrl("arrow-vertical.svg")}
                className="img-fluid"
              />
            </a>
          </Col>
          <Col md="6" lg="7" className={`text-right ${styles.colSocialMedia}`}>
            <div className={styles.horizontalLine} />
            <SocialMediaLinks />
          </Col>
        </Row>
      </Container>
    );
  }
}
