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
            <Row
              className={`justify-content-center align-items-center`}
              data-sal="slide-up"
              data-sal-duration="400"
              data-sal-delay="200"
              data-sal-easing="ease-out-back"
            >
              <Col lg="4">
                <h2 className={styles.hello}>
                  Hello, I'm Mudmie 👋
                  <br />a product designer.
                </h2>
              </Col>
              <Col lg="8">
                <p>
                  With my background in engineering, I approach problem solving
                  from a holistic perspective and combine system thinking with
                  user-centered design to simplify complexity and craft product
                  experience that make lives easier.
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

                <p className={styles.content}>
                  I knew from the beginning I had to get into the University of
                  Waterloo because of its co-op program, but I’ll admit that I
                  chose{" "}
                  <OutboundLink
                    href="https://uwaterloo.ca/systems-design-engineering/about-systems-design-engineering/what-systems-design-engineering"
                    target="_blank"
                  >
                    Systems Design Engineering
                    <HiArrowUpRight />
                  </OutboundLink>{" "}
                  because the name sounded cool 🙃 <br />
                </p>
                <p className={styles.content}>
                  Now, as a product designer, I found myself excited when
                  learning about people’s workflow, listening to their problems,
                  and using my multidisciplinary knowledge to craft design
                  solutions that improve their experience.
                </p>
                <p></p>
                <h3 className={styles.moreOfMe}>Getting Personal.</h3>
                <p className={styles.content}>
                  I was born in Bangkok, but I've been spending most of my time in the
                  U.S. and Canada since high school. Other than design stuff,
                  you can ask me about food and traveling — I can tell you about
                  my experience eating sushi at Jiro in Tokyo or help you find good
                  flight deals 🤫
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
                <h3 className={styles.designExperience}>Design Experience</h3>
              </Col>
              <Col lg="8" md="6" className={styles.experience}>
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
