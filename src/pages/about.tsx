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
                Mudmie in her “OFF-SYDE” crewneck sweater, a cult favorite among
                SYDE 2020 people designed by her amazing classmates Shan &amp;
                Shreya. — ps. SYDE = Systems Design Engineering
              </p>
            </Col>
            <Col lg="6" className="offset-1">
              <h1>Mudmie Chuthamsatid</h1>
              <h2>Thanks for being here.</h2>
              <h3>IN SHORT</h3>
              <p>
                I’m a product designer who graduated from{" "}
                <OutboundLink
                  href="https://uwaterloo.ca/systems-design-engineering/"
                  target="_blank"
                >
                  Systems Design Engineering
                </OutboundLink>{" "}
                at the University of Waterloo in 2020.{" "}
              </p>
              <p>
                I’ve previously designed for{" "}
                <OutboundLink href="https://hackthenorth.com/" target="_blank">
                  Hack the North
                </OutboundLink>{" "}
                and interned at six companies, including{" "}
                <OutboundLink href="https://www.plangrid.com/" target="_blank">
                  Autodesk (PlanGrid)
                </OutboundLink>
                . Whenever I have a nice break, I travel, find food spots, and
                wander around the city. I also like cooking and baking, minus
                washing dishes.
              </p>
              <div>
                <img src={this.getImageUrl("arrow-vertical.svg")} />
                Enjoy reading &amp; getting to know people?
              </div>
              <h3>DESIGN</h3>
              <p>
                I chose Systems Design Engineering because I wanted to design my
                own system — the system that I wasn’t too sure what it was. This
                decision, though, gave me opportunities to explore design
                thinking process and human factors in design. I took a stab at
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
            <Col lg="6" className="offset-1">
              <div>Want more? There is some fun stuff here!</div>
              <h3>NOT - DESIGN</h3>
              <p>
                I have been in love with traveling since I was a kid. Every trip
                is an eye-opening experience as I get to meet new people and
                learn about their culture. My favorite destination? Obviously,
                it’s Japan.
              </p>
              <p>
                I also treasure good food. That’s why I wander around the city
                and find food spots! As I’ve promised that there will be some
                fun stuff, here are some of my favorite food spots and places to
                go in{" "}
                <OutboundLink
                  href="https://goo.gl/maps/oRnqHHxQDrSGawVZ9"
                  target="_blank"
                >
                  Tokyo
                </OutboundLink>{" "}
                and{" "}
                <OutboundLink
                  href="https://goo.gl/maps/niK5vJVq5B8eMxfL7"
                  target="_blank"
                >
                  San Francisco
                </OutboundLink>
                .
              </p>
              <p>
                HOORAY, You’ve made to the end! If you’ve decided that you wanna
                chat with more more, you can write to me at{" "}
                <a href="mailto:hello@mudmie.com">hello@mudmie.com</a>. I’m
                happy to chat about just anything whether it’s about design,
                career, collaboration, my school, food and travel, or even
                skincare.
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
