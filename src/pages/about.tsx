import { graphql, withPrefix } from "gatsby";
import * as React from "react";
import { Helmet } from "react-helmet";
import Layout from "../components/layout";
import { Container, Col, Row } from "reactstrap";
import * as styles from "./about.module.scss";
import { ImageSharp } from "../models/image-sharp";
import { StaticImage } from "gatsby-plugin-image";
import { HiArrowDown, HiArrowUpRight } from "react-icons/hi2";
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
                  className={styles.picture}
                  src="../../static/images/me.png"
                  alt="Picture of Mudmie"
                />
              </Col>

              <Col sm="6" lg="6">
                <p className={styles.aboutMain}>
                  Hi, I'm Mudmie 👋 I create designs that communicate well and
                  drive impact. My engineering background makes me good at
                  breaking down complexity and working with tradeoffs. I can
                  also code front-end.
                </p>
              </Col>
            </Row>

            <Row className="justify-content-center align-items-end">
              <Col sm="12" lg="10">
                <p className={styles.aboutSecondary}>
                  I pursue a career in design because I enjoy combining creative
                  and engineering approaches to solve problems and finding ways
                  to balance business, user, and engineering needs. I apply my
                  multidisciplinary knowledge to work with cross-functional
                  teams and push for design solutions that create impacts for
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
        <section className={styles.section2}>
          <Container className={styles.container}>
            <Row className="justify-content-center">
              <Col
                lg="10"
                data-sal="slide-up"
                data-sal-duration="400"
                data-sal-delay="600"
                data-sal-easing="ease-out-back"
              >
                <h2 className={styles.designExperienceText}>
                  Design Experience
                  {/* <span className={sharedStyles.red}> */}
                  <HiArrowDown />
                  {/* </span> */}
                </h2>
              </Col>
            </Row>
          </Container>
        </section>
        <section className={styles.section3}>
          <Container>
            <Row
              className="justify-content-center"
              data-sal="fade"
              data-sal-duration="400"
              data-sal-delay="200"
              data-sal-easing="ease-out-back"
            >
              <Col lg="10" className={styles.experience}>
                <table className={styles.experienceTable}>
                  <tbody>
                    <tr>
                      <td>
                        <span className={styles.experienceTitle}>
                          Product Designer, LeanTaaS
                        
                        </span>{" "}
                      </td>
                      <td className={styles.experiencePeriod}>
                        Oct 2021 - Present, Full-time
                      </td>
                      <td className={styles.experienceDescription}>
                        Leading end-to-end design and research for a B2B SaaS
                        surgery scheduling and analytics platform
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <span className={styles.experienceTitle}>
                          Product Designer, Jitta Wealth
                        </span>{" "}
                      </td>
                      <td className={styles.experiencePeriod}>
                        Jun 2020 - May 2021, Full-time
                      </td>
                      <td className={styles.experienceDescription}>
                        2<sup>nd</sup> design hire; led the design of a wealth
                        management mobile app and launched 0-1 products and
                        features
                      </td>
                    </tr>

                    <tr>
                      <td>
                        <span className={styles.experienceTitle}>
                          Product Design Intern, Autodesk
                        </span>{" "}
                      </td>
                      <td className={styles.experiencePeriod}>
                        May - Aug 2019, Internship
                      </td>
                      <td className={styles.experienceDescription}>
                        Researched form creation process and designed a
                        two-sided custom report platform for construction
                        enterprise
                      </td>
                    </tr>

                    <tr>
                      <td>
                        <span className={styles.experienceTitle}>
                          Product Design Intern, PlanGrid
                        </span>{" "}
                      </td>
                      <td className={styles.experiencePeriod}>
                        Sep - Dec 2018, Internship
                      </td>
                      <td className={styles.experienceDescription}>
                        Designed account management portal to increase access
                        control for IT-admin personnel
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
