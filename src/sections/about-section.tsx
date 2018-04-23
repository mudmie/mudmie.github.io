import * as React from "react";
import * as styles from "./about-section.scss";
import { Container, Col, Row } from "reactstrap";
import { AboutBrushBackground } from "../components/about-brush-background";

export class AboutSection extends React.Component {
  public render() {
    return (
      <Container fluid>
        <Row style={{ position: "relative" }} className={styles.rowAbout}>
          <AboutBrushBackground />
          <Container>
            <Row>
              <Col md="8" className={styles.colAbout}>
                <h2 className={styles.aboutHeading}>
                  Hello, I'm Mudmie &#8212;
                </h2>
                <h3 className={styles.aboutHeading}>
                  It's nice to have you here!
                </h3>
                <p className={styles.aboutPara}>
                  Life is hard, and technology is supposed to make it easier. My
                  mission as a product designer is not just to design products,
                  but the entire experience that sparks people’s joy and
                  simplify their lives.
                </p>
                <p className={styles.aboutPara}>
                  I’m a third year Systems Design Engineering at the Univeristy
                  of Waterloo. My focus for 2018 is to keep learning UX/UI while
                  also catch up with development technology. Since the beginning
                  of the year, I’ve been pushing myself to work harder on visual
                  design skills and reading more design books. I love travelling
                  and getting inspired by exploring cultures and meeting people.
                  You can learn more about collection of my journey here. I love
                  to travel to different places around the world Travelling
                  inspires me to see the world in a broader picture and
                  understand people from different culture. Be a part of my
                  journey.
                </p>
              </Col>
            </Row>
          </Container>
        </Row>
      </Container>
    );
  }
}
