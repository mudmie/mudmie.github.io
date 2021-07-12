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
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col lg={ABOUT_PAGE_COLUMN} className={styles.socialMediaRow}>
              <SocialMediaLinks separator="/" />
            </Col>
          </Row>
        </Container>

        <Container>
          <Row className="justify-content-center mt-3">
            <Col lg={ABOUT_PAGE_COLUMN} className={styles.about}>
              <h3>A Little More About Me</h3>

              <p>
                I'm a product designer with experience designing both enterprise
                and consumer products. I enjoy exploring ways to craft product
                experiences that will make people’s lives easier. Recently, I
                led the design of investment tools at{" "}
                <OutboundLink href="https://www.jitta.com/en" target="_blank">
                  Jitta Wealth
                </OutboundLink>
                , a fintech startup in Bangkok, Thailand. Now, I’m back in
                Seattle and looking for a full-time opportunity to continue my
                product design journey.
              </p>
              <p>
                I studied Systems Design Engineering at the{" "}
                <OutboundLink href="https://www.uwaterloo.ca" target="_blank">
                  University of Waterloo
                </OutboundLink>{" "}
                and graduated in 2020. I spent a total of 16 months interning at
                companies in North America, where I applied the design thinking
                process to solve real-world problems. I was also involved in the
                design community by being part of{" "}
                <OutboundLink href="http://uwux.ca/" target="_blank">
                  UW/UX
                </OutboundLink>{" "}
                and the design team at{" "}
                <OutboundLink href="https://hackthenorth.com" target="_blank">
                  Hack the North
                </OutboundLink>
                .
              </p>
              <p>
                I love traveling and eating good food – sushi, matcha, and fried
                chicken are my top 3 +{" "}
                <OutboundLink href="https://us.oatly.com/" target="_blank">
                  Oatly
                </OutboundLink>{" "}
                (full fat, of course)! I’m currently working on my Korean, so
                k-dramas have become a part of my learning process. I also plan
                to adopt a Shiba Inu though my mom told me to take care of
                myself first. Finally, if you need skincare recommendations, I
                can probably help.
              </p>
            </Col>
          </Row>
          <Row className="justify-content-center mt-3">
            <Col lg={ABOUT_PAGE_COLUMN} className={styles.chatRow}>
              You’ve made it to the end! I think we should{" "}
              <OutboundLink
                className={styles.linkedIn}
                href="mailto:hello@mudmie.com"
                target="_blank"
              >
                chat
              </OutboundLink>
              . <FaRegSmile />
            </Col>
          </Row>
        </Container>
        <Container>
          <Row className="justify-content-center mt-3">
            <Col lg={ABOUT_PAGE_COLUMN} className={styles.experience}>
              <h3>Design Experiences</h3>

              <table className={styles.experienceTable}>
                <tr>
                  <td className={styles.experienceName}>Jitta Wealth / Full-time</td>
                  <td className={styles.experiencePeriod}>Jun 2020 - May 2021</td>
                </tr>
                <tr>
                  <td className={styles.experienceName}>Hack the North / Extracurricular</td>
                  <td className={styles.experiencePeriod}>Mar 2019 – Feb 2020</td>
                </tr>
                <tr>
                  <td className={styles.experienceName}>Autodesk Construction Cloud / Internship</td>
                  <td className={styles.experiencePeriod}>May 2019 – Aug 2019</td>
                </tr>
                <tr>
                  <td className={styles.experienceName}>PlanGrid / Internship</td>
                  <td className={styles.experiencePeriod}>Sep 2018 – Dec 2018</td>
                </tr>
                <tr>
                  <td className={styles.experienceName}>Nulogy / Internship</td>
                  <td className={styles.experiencePeriod}>Jan 2018 – Apr 2018</td>
                </tr>
                <tr>
                  <td className={styles.experienceName}>LCBO Next / Internship</td>
                  <td className={styles.experiencePeriod}>May 2017 – Aug 2017</td>
                </tr>
              </table>
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
