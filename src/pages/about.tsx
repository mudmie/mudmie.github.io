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
              Mudmie, taken in 2021. Sushi, anything matcha, Oatly and 
              upcoming travel plans are some of many things that could make her smile.</p>
            </Col>
            <Col xs="10" lg="6" className={`offset-lg-1 ${styles.infoCol}`}>
              <h3>IN SHORT</h3>
              <p>
                I'm a product designer with 2 years of experience designing for both consumer and enterprise products.
              </p>

              <p>
                I enjoy solving problems and exploring ways to design product experiences that will make lives easier.
              </p>
              <p>
                When I get a nice break, I travel, find food spots, and wander around the city.
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
                Through the University of Waterloo's co-op program, I spent a total of 16 months interning as a product designer at companies in various industries, including retailing, manufacturing, and construction. 
                In June 2020, I started my first full-time product design position at Jitta Wealth, a fintech company in Bangkok, Thailand.
              </p>
              <p>
               To me, product design is problem-solving. I like to work with people to gather information, understand the users and their problems. After analyzing user needs and product requirements, I design potential solutions, get feedback, and finalize the solution. I also apply data-driven design practice to measure the impact of my designs and come up with improvements.
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
                about their cultures. <br/> I also treasure good food — that’s why I
                wander around the city and find food spots!
              </p>
              <p>
                Currently, I'm working on my Korean language skills and going through
                piles of books I've accumulated in the past years. 
              </p>
              <p>
                YAY, You’ve made it to the end! If you wanna chat with me more, you
                can write to me at{" "}
                <a href="mailto:hello@mudmie.com">hello@mudmie.com</a>.       

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
