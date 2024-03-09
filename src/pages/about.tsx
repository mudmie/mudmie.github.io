import { graphql, withPrefix } from "gatsby";
import * as React from "react";
import { Helmet } from "react-helmet";
import Layout from "../components/layout";
import { Container, Col, Row } from "reactstrap";
import * as styles from "./about.module.scss";
import { ImageSharp } from "../models/image-sharp";
import { StaticImage } from "gatsby-plugin-image";
import { HiArrowUpRight } from "react-icons/hi2";
import { Dash } from "../components/dash";
import { OutboundLink } from "gatsby-plugin-google-analytics";
import { SocialMediaLinks } from "../components/social-media-links";
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

        <section className={styles.section1}>
          <Container>
            <Row className="justify-content-center align-items-end">
              <Col sm="6" lg="4">
                <StaticImage
                  src="../../static/images/me.png"
                  alt="Picture of Mudmie"
                />
              </Col>

              <Col sm="6" lg="6">
                <p className={styles.aboutMain}>
                  Hi, I'm Mudmie 👋 I've been designing since 2018. My engineering background makes me good at
                  breaking down complexity and working with tradeoffs. I can
                  also code front-end 👀
                </p>
              </Col>
            </Row>

            <Row className="justify-content-center align-items-end">
              <Col sm="12" lg="10">
                <p className={styles.aboutSecondary}>
                  I graduated from Systems Design Engineering at the University
                  of Waterloo, where I also studied human-computer interaction
                  (HCI). I enjoy hearing stories from users and collaborating
                  with teams to brainstorm ideas. I apply my multidisciplinary
                  knowledge to push for design solutions that create impacts for
                  businesses and users.
                </p>
                <p className={styles.aboutSecondary}>
                  Other than design stuff, you can ask me about food and
                  traveling — I can tell you about my experience eating sushi at
                  Jiro in Tokyo or help you find good flight deals 🤫
                </p>
              </Col>
            </Row>
          </Container>
        </section>

        <section className={styles.section3}>
          <Container>
            <Row
              className="justify-content-center mt-3"
              data-sal="fade"
              data-sal-duration="400"
              data-sal-delay="200"
              data-sal-easing="ease-out-back"
            >
              <Col lg="4" md="5" className="align-self-center">
                <h3 className={styles.designExperience}>Design Experience</h3>
              </Col>
              <Col lg="8" md="5" className={styles.experience}>
                <table className={styles.experienceTable}>
                  <tbody>
                    <tr>
                      <td>
                        <span className={styles.experienceName}>LeanTaaS</span>,{" "}
                        <span className={styles.experienceType}>Full-time</span>
                      </td>
                      <td className={styles.experiencePeriod}>
                        Oct 2021 - Present
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <span className={styles.experienceName}>
                          Jitta Wealth
                        </span>
                        ,{" "}
                        <span className={styles.experienceType}>Full-time</span>
                      </td>
                      <td className={styles.experiencePeriod}>
                        Jun 2020 - May 2021
                      </td>
                    </tr>
                    <tr>
                      <td className={styles.experienceName}>
                        <span className={styles.experienceName}>
                          Hack the North
                        </span>
                        ,{" "}
                        <span className={styles.experienceType}>Volunteer</span>
                      </td>
                      <td className={styles.experiencePeriod}>
                        Mar 2019 – Feb 2020
                      </td>
                    </tr>
                    <tr>
                      <td className={styles.experienceName}>
                        <span className={styles.experienceName}>Autodesk</span>,{" "}
                        <span className={styles.experienceType}>
                          Internship
                        </span>
                      </td>
                      <td className={styles.experiencePeriod}>
                        May 2019 – Aug 2019
                      </td>
                    </tr>
                    <tr>
                      <td className={styles.experienceName}>
                        <span className={styles.experienceName}>PlanGrid</span>,{" "}
                        <span className={styles.experienceType}>
                          Internship
                        </span>
                      </td>
                      <td className={styles.experiencePeriod}>
                        Sep 2018 – Dec 2018
                      </td>
                    </tr>
                  </tbody>
                </table>
              </Col>
            </Row>
          </Container>
        </section>
      </Layout>
    );
  }
}

// export const pageQuery = graphql`
//   query AboutPageQuery {
//     meImage: file(relativePath: { eq: "Mudmie.png" }) {
//       childImageSharp {
//         fluid(maxWidth: 350, quality: 100) {
//           ...GatsbyImageSharpFluid_noBase64
//         }
//       }
//     }
//   }
// `;
