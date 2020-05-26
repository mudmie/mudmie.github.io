import * as React from "react";
import { Col, Container, Row } from "reactstrap";
import * as styles from "./about-section.module.scss";
import * as sharedStyles from "./sections.module.scss";
import { OutboundLink } from "gatsby-plugin-google-analytics";
import Img from "gatsby-image";
import { withPrefix, Link } from "gatsby";
import { AboutTitle } from "../components/about-title";
import { ImageSharp } from "../models/image-sharp";

export interface AboutSectionProps {
  id: string;
  meImage: ImageSharp;
}
export class AboutSection extends React.Component<AboutSectionProps, {}> {
  public render() {
    return (
      <Container>
        <a id={this.props.id} className={sharedStyles.sectionAnchor} />
        <Row className="justify-content-between align-items-center">
          <Col sm="12" className={`${styles.colAbout} d-sm-block d-md-none`}>
            <AboutTitle />
          </Col>
          <Col md="5">
            <Img
              alt="image of me"
              fluid={this.props.meImage.childImageSharp.fluid}
            />
            <div className={styles.meCaption}>
              Mudmie in her “OFF-SYDE” crewneck sweater, a cult favorite among
              SYDE 2020 people designed by her amazing classmates Shan &amp;
              Shreya. — ps. SYDE = Systems Design Engineering
            </div>
          </Col>
          <Col md="6" className={styles.colAbout}>
            <div className="d-none d-md-block">
              <AboutTitle />
            </div>
            <p className={styles.aboutPara}>
              I’m about to graduate from Systems Design Engineering at the
              University of Waterloo and currently looking for a{" "}
              <span className="highlight">full-time product design role</span>.
            </p>
            <p className={styles.aboutPara}>
              I’ve previously designed for{" "}
              <OutboundLink href="https://www.plangrid.com" target="_blank">
                PlanGrid
              </OutboundLink>{" "}
              and{" "}
              <OutboundLink href="https://www.hackthenorth.com" target="_blank">
                Hack the North
              </OutboundLink>
              . Whenever I get a nice break from school, I travel, find food
              spots and wander around the city.
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
