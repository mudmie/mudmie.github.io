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
      <Container className={styles.about}>
        <a id={this.props.id} className={sharedStyles.sectionAnchor} />
        <Row
          className={`justify-content-between align-items-center ${styles.rowAbout}`}
        >
          <div className={`${styles.colAbout}`}>
            <AboutTitle />
          </div>
        </Row>
        <Row className={styles.rowTopBorder}>
          <Col>
            Have a good day. We all need this. <FaRegSmile />
          </Col>
          <Col className="text-right">
            <SocialMediaLinks />
          </Col>
        </Row>
      </Container>
    );
  }
}
