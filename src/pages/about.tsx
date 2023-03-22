import { graphql, withPrefix } from "gatsby";
import * as React from "react";
import { Helmet } from "react-helmet";
import Layout from "../components/layout";
import { Container, Col, Row } from "reactstrap";
import * as styles from "./about.module.scss";
import { ImageSharp } from "../models/image-sharp";
import { StaticImage } from "gatsby-plugin-image";
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
        <section className={styles.section1}>
          <Container>
            <Row
              className={`justify-content-center align-items-center`}
              data-sal="slide-up"
              data-sal-duration="400"
              data-sal-delay="200"
              data-sal-easing="ease-out-back"
            >
              <Col lg="4">
                <h2 className={styles.hello}>Hello, I’m Mudmie.</h2>
              </Col>
              <Col lg="8">
                <p>
                  I'm a product designer who combines systems thinking and
                  user-centered design to understand problems in a bigger
                  picture before exploring ways to design product experience.
                </p>

                <p>
                  I have experience designing both enterprise &amp; consumer
                  products. Recently, I was a full-time product designer
                  delivering a wealth management mobile app at Jitta Wealth.
                </p>
              </Col>
            </Row>
          </Container>
        </section>
        <section className={styles.section2}>
          <Container>
            <Row
              className={`justify-content-center pt-3`}
              data-sal="slide-up"
              data-sal-duration="400"
              data-sal-delay="600"
              data-sal-easing="ease-out-back"
            >
              <Col lg="4" md="6" className="align-self-end text-center">
                <StaticImage
                  src="../../static/images/Mudmie.png"
                  alt="Picture of Mudmie"
                />
              </Col>
              <Col lg="8" md="6" className="mb-3">
                <h3 className={styles.moreOfMe}>More of me.</h3>
                <p>
                  During my time at the{" "}
                  <OutboundLink
                    href="https://uwaterloo.ca/systems-design-engineering/about-systems-design-engineering/what-systems-design-engineering"
                    target="_blank"
                  >
                    University of Waterloo
                  </OutboundLink>
                  , I did 4 design internships (16 months in total!) across
                  companies in North America where I got to apply the design
                  thinking process to solve real-world problems.
                </p>
                <p>
                  I was also involved in the design community by being part of
                  UW/UX and the design team at Hack the North.{" "}
                </p>
                <h3 className={styles.moreOfMe}>Getting Personal.</h3>
                <p>
                  I was born and raised in Bangkok, but I spend most of my time
                  living in the U.S. &amp; Canada. I love traveling and eating
                  good food — sushi, fried chicken, and matcha are my top 3!
                  These days I'm working on my Korean, so k-dramas are
                  essential.
                </p>
                <p>
                  Lastly, I have a plan to adopt a Shiba Inu although my mom
                  told me to take care of myself first.
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
              <Col lg="4" md="6" className="align-self-center">
                <h3 className={styles.designExperience}>Design Experience.</h3>
              </Col>
              <Col lg="8" md="6" className={styles.experience}>
                <table className={styles.experienceTable}>
                  <tbody>
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
                        <span className={styles.experienceType}>Community</span>
                      </td>
                      <td className={styles.experiencePeriod}>
                        Mar 2019 – Feb 2020
                      </td>
                    </tr>
                    <tr>
                      <td className={styles.experienceName}>
                        <span className={styles.experienceName}>
                          Autodesk Construction Cloud
                        </span>
                        ,{" "}
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
                    <tr>
                      <td className={styles.experienceName}>
                        <span className={styles.experienceName}>Nulogy</span>,{" "}
                        <span className={styles.experienceType}>
                          Internship
                        </span>
                      </td>
                      <td className={styles.experiencePeriod}>
                        Jan 2018 – Apr 2018
                      </td>
                    </tr>
                    <tr>
                      <td className={styles.experienceName}>
                        <span className={styles.experienceName}>
                          LCBO Innovation Lab
                        </span>
                        ,{" "}
                        <span className={styles.experienceType}>
                          Internship
                        </span>
                      </td>
                      <td className={styles.experiencePeriod}>
                        May 2017 – Aug 2017
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
