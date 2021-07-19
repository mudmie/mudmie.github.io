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
import { SocialMediaLinks } from "../components/social-media-links";
import { FaRegSmile } from "react-icons/fa";
import { RESUME_FILE_NAME } from "../components/constants";
import { BsArrowUpRight } from "react-icons/bs";

export const ABOUT_PAGE_COLUMN = 12;
export interface AboutPageProps {
  data: {
    meImage: ImageSharp;
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
          <Row className="justify-content-center align-items-center">
            <Col lg="4">
              {/* <Img
                fluid={this.props.data.meImage.childImageSharp.fluid}
                alt="Picture of Mudmie"
              /> */}
              <img src={this.getImageUrl("mudmie.png")} className="img-fluid" />
            </Col>
            <Col lg={ABOUT_PAGE_COLUMN / 2}>
              <h2 className={styles.hello}>
                HELLO!
                <br />
                IT'S ME, MUDMIE.
              </h2>
              <p>
                A product designer who combines systems thinking and
                user-centered design to understand problems in a bigger before
                exploring ways to design product experience.
              </p>

              <p>
                I have experience designing both enterprise &amp; consumer
                products. Recently, I designed wealth management platform at
                Jitta Wealth.
              </p>
            </Col>
          </Row>
        </Container>

        <Container>
          <Row className="justify-content-center mt-3">
            <Col lg={ABOUT_PAGE_COLUMN / 2} className={styles.about}>
              <h3>MORE OF ME</h3>
              <p>
                I did 4 product design internships (that’s 16 months!) at
                companies in North America, where I applied the design thinking
                process to solve real-world problems.{" "}
              </p>
              <p>
                I was also involved in the design community by being part of
                UW/UX and the design team at Hack the North.
              </p>
              <div className={styles.smile}>
                <img src={this.getImageUrl("smile.svg")} />
              </div>

              {/* <p>
                I'm a product designer with experience designing both enterprise
                and consumer products. With a background in{" "}
                <OutboundLink
                  href="https://uwaterloo.ca/systems-design-engineering/about-systems-design-engineering/what-systems-design-engineering"
                  target="_blank"
                >
                  Systems Design Engineering
                </OutboundLink>
                , I combine systems thinking and user-centered design to
                understand the problem in a bigger picture before exploring ways
                to design product experiences.
              </p>
              <p>
                At the University of Waterloo, I spent a total of 16 months
                interning at companies in North America, where I applied the
                design thinking process to solve real-world problems. I was also
                involved in the design community by being part of{" "}
                <OutboundLink href="http://uwux.ca/" target="_blank">
                  UW/UX
                </OutboundLink>{" "}
                and the design team at{" "}
                <OutboundLink
                  href="https://2019.hackthenorth.com"
                  target="_blank"
                >
                  Hack the North
                </OutboundLink>
                .
              </p>
              <p>
                I was born and raised in Bangkok, Thailand, but I spend most of
                my time living abroad. I love traveling and eating good food –
                sushi, matcha, and fried chicken are my top 3 +{" "}
                <OutboundLink
                  href="https://us.oatly.com/collections/products/products/full-fat-oatmilk-chilled"
                  target="_blank"
                >
                  Oatly
                </OutboundLink>{" "}
                (full fat, of course)! I'm currently working on my Korean, so
                k-dramas are essential. I also plan to adopt a Shiba Inu
                although my mom told me to take care of myself first. Finally,
                if you need skincare recommendations, I can probably help.
              </p> */}
            </Col>
            <Col lg={ABOUT_PAGE_COLUMN / 2}>
              <h3>WAYS TO CONNECT</h3>
              <SocialMediaLinks separator=" " />

              <h3>FINAL BIT OF ME.</h3>
              <p>
                I was born and raised in Bangkok, Thailand, but I spend most of
                my time living abroad.
              </p>

              <p>
                I love traveling and eating good food — my top 3 are sushi,
                matcha, and fried chicken + Oatly{" "}
              </p>

              <p>
                I'm currently working on my Korean, so k-dramas are essential.{" "}
              </p>

              <p>
                I also plan to adopt a Shiba Inu although my mom told me to take
                care of myself first.{" "}
              </p>

              <p>
                Finally, if you need skincare recommendations, I can probably
                help.
              </p>
            </Col>
          </Row>
        </Container>
        <Container>
          <Row className="justify-content-center mt-3">
            <Col lg="3">
              <h3>Design Experiences</h3>
            </Col>
            <Col lg="6" className={styles.experience}>
              <table className={styles.experienceTable}>
                <tr>
                  <td className={styles.experienceName}>
                    Jitta Wealth / Full-time
                  </td>
                  <td className={styles.experiencePeriod}>
                    Jun 2020 - May 2021
                  </td>
                </tr>
                <tr>
                  <td className={styles.experienceName}>
                    Hack the North / Community
                  </td>
                  <td className={styles.experiencePeriod}>
                    Mar 2019 – Feb 2020
                  </td>
                </tr>
                <tr>
                  <td className={styles.experienceName}>
                    Autodesk Construction Cloud / Internship
                  </td>
                  <td className={styles.experiencePeriod}>
                    May 2019 – Aug 2019
                  </td>
                </tr>
                <tr>
                  <td className={styles.experienceName}>
                    PlanGrid / Internship
                  </td>
                  <td className={styles.experiencePeriod}>
                    Sep 2018 – Dec 2018
                  </td>
                </tr>
                <tr>
                  <td className={styles.experienceName}>Nulogy / Internship</td>
                  <td className={styles.experiencePeriod}>
                    Jan 2018 – Apr 2018
                  </td>
                </tr>
                <tr>
                  <td className={styles.experienceName}>
                    LCBO Next / Internship
                  </td>
                  <td className={styles.experiencePeriod}>
                    May 2017 – Aug 2017
                  </td>
                </tr>
              </table>
            </Col>
            <Col lg="3" className="align-self-center">
              <OutboundLink
                href={withPrefix(RESUME_FILE_NAME)}
                className={styles.resumeButton}
                target="_blank"
              >
                Resume <BsArrowUpRight />
              </OutboundLink>
            </Col>
          </Row>
        </Container>
      </Layout>
    );
  }
}

export const pageQuery = graphql`
  query AboutPageQuery {
    meImage: file(relativePath: { eq: "mudmie.png" }) {
      ...MainImageSizes
    }
  }
`;
