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
          <Col md="5" className={styles.colAbout}>
            <div className="d-none d-md-block">
              <AboutTitle />
            </div>
            <p className={styles.aboutPara}>
              Previously designed for{" "}
              <OutboundLink href="https://www.hackthenorth.com" target="_blank">
                Hack the North
              </OutboundLink>{" "}
              &amp;{" "}
              <OutboundLink href="https://www.plangrid.com" target="_blank">
                Autodesk
              </OutboundLink>{" "}
              UWaterloo Systems Design Engineering, class of 2020
            </p>
          </Col>
        </Row>
      </Container>
    );
  }
}
