import * as React from "react";
import { Col, Container, Row } from "reactstrap";
import * as styles from "./about-section.module.scss";
import * as sharedStyles from "./sections.module.scss";
import { OutboundLink } from "gatsby-plugin-google-analytics";
import Img from "gatsby-image";
import { withPrefix } from "gatsby";
import { AboutTitle } from "../components/about-title";

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
          <Col sm="12" className={`${styles.colAbout} d-sm-block d-md-none`}>
            <AboutTitle />
          </Col>
          <Col md="6">
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
          <Col md="6" className={styles.colAbout}>
            <div className="d-none d-md-block">
              <AboutTitle />
            </div>
            <p>
              I’m about to graduate from engineering at the University of
              Waterloo and currently looking for a full-time product design role
              starting Fall 2020.
            </p>
            <p>
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
