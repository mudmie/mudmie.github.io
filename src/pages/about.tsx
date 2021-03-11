import { graphql, withPrefix } from "gatsby";
import * as React from "react";
import { Helmet } from "react-helmet";
import Layout from "../components/layout";
import { Container, Col, Row } from "reactstrap";
import * as styles from "./about.module.scss";
import { ImageSharp } from "../models/image-sharp";
import Img from "gatsby-image";
import { Dash } from "../components/dash";
import { OutboundLink } from "gatsby-plugin-google-analytics";

export interface AboutPageProps {
  data: {
    meImage: ImageSharp;
    niceBreakImage: ImageSharp;
  };
}

export default class AboutPage extends React.Component<AboutPageProps, {}> {
  private getImageUrl(filename: string) {
    return withPrefix(`/images/${filename}`);
  }

  public render() {
    return (
      <Layout>
        <Helmet>
          <title>About me</title>
        </Helmet>
        <Container className={styles.aboutPage}>
          <Row className={styles.headerRow}>
            <Col className={styles.headerCol}>
              <h1>I’m Mudmie —</h1>
              <h2>Thanks for being here.</h2>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col lg="5">
              <div className={styles.anchorImageContainer}>
                <img
                  src={this.getImageUrl("yellow-circle.svg")}
                  className={styles.topRightCircle}
                />
                <Img
                  fluid={this.props.data.meImage.childImageSharp.fluid}
                  alt="Picture of Mudmie"
                />
                <img
                  src={this.getImageUrl("yellow-circle.svg")}
                  className={styles.bottomLeftCircle}
                />
              </div>
              <p className={styles.meImageCaption}>
                Mudmie in “OFF-SYDE” crewneck sweater, a cult favorite among
                SYDE 2020 people designed by her classmates Shan &amp; Shreya.{" "}
                <span> — ps. SYDE = Systems Design Engineering</span>
              </p>
            </Col>
            <Col xs="10" lg="6" className={`offset-lg-1 ${styles.infoCol}`}>
              <h3>IN SHORT</h3>
              <p>
                I'm a product designer who graduated from{" "}
                <OutboundLink
                  href="https://uwaterloo.ca/systems-design-engineering/"
                  target="_blank"
                >
                  Systems Design Engineering
                </OutboundLink>{" "}
                at the University of Waterloo in 2020.{" "}
              </p>
              <p>
                I'm currently working at{" "}
                <OutboundLink
                  href="https://www.jittawealth.com"
                  target="_blank"
                >
                  Jitta Wealth
                </OutboundLink>{" "}
                to make investment become easier and more accessible in
                Thailand. Previously, I designed for{" "}
                <OutboundLink
                  href="https://2019.hackthenorth.com/"
                  target="_blank"
                >
                  Hack the North
                </OutboundLink>{" "}
                and interned at six companies, including{" "}
                <OutboundLink href="https://www.plangrid.com/" target="_blank">
                  PlanGrid/Autodesk
                </OutboundLink>{" "}
                in San Francisco.
              </p>
              <p>
                Whenever I get a nice break, I travel, find food spots, and
                wander around the city. I also like cooking and baking, minus
                washing dishes.
              </p>
              <div className={styles.arrowNText}>
                <img
                  className={styles.arrow}
                  src={this.getImageUrl("arrow-vertical.svg")}
                />
                <span>&nbsp;wanna get deeper?&nbsp;</span>
              </div>
              <h3 className={styles.sectionName}> DESIGN</h3>
              <p>
                I chose Systems Design Engineering because I wanted to design my
                own system — the system that I wasn’t too sure what it was. This
                decision, though, gave me opportunities to explore human factors
                in design and the design thinking process. I took a stab at
                getting a product design internship and I’ve been sticking with
                this career path since then.
              </p>
              <p>
                Five years have gone by, and I finally figure out that I want to
                integrate my product design experience, engineering background,
                and interests in business to design the system that brings joy
                and makes people's lives easier.
              </p>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col lg="5">
              <div className={styles.anchorImageContainer}>
                <Img
                  fluid={this.props.data.niceBreakImage.childImageSharp.fluid}
                  alt="Picture of Castro neighborhood, San Francisco"
                />
                <img
                  src={this.getImageUrl("yellow-circle.svg")}
                  className={styles.bottomRightCircle}
                />
              </div>
              <p className={styles.niceBreakImageCaption}>
                Castro under the arrays of rainbow light, taken by Mudmie on her
                last night in San Francisco in August 2019.
              </p>
            </Col>
            <Col xs="10" lg="6" className="offset-lg-1">
              <h3 className={styles.sectionName}>NOT - DESIGN</h3>
              <p>
                I've been in love with traveling since I was a kid. Every trip
                broadens my perspective as I get to meet new people and learn
                about their cultures. I also treasure good food — that’s why I
                wander around the city and find food spots!
              </p>
              <p>
                Now that I've graduated, there are tons of stuff that I'd like
                to do! Some of them are to explore the science behind cooking,
                improve my Korean, and learn the Japanese language. But going
                through the books (non-textbook, obviously) that I've
                accumulated in the past years gets the highest priority, for
                now.
              </p>
              <p>
                YAY, You’ve made to the end! If you wanna chat with me more, you
                can write to me at{" "}
                <a href="mailto:hello@mudmie.com">hello@mudmie.com</a>. I’m
                happy to chat just about anything whether it’s design, career,
                collaboration, my school, food and travel, or even skincare.
              </p>
            </Col>
          </Row>
        </Container>
      </Layout>
    );
  }
}

export const pageQuery = graphql`
  query AboutPageQuery {
    meImage: file(relativePath: { eq: "mudmie_syde20.jpg" }) {
      ...MainImageSizes
    }
    niceBreakImage: file(relativePath: { eq: "nice-break/Castro.jpg" }) {
      ...MainImageSizes
    }
  }
`;
