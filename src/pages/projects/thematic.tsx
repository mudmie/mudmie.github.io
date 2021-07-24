import * as React from "react";
import * as sharedStyles from "./styles.module.scss";
import { Col, Container, Row, Table } from "reactstrap";
import { AiOutlineCheckCircle, AiOutlineCloseCircle } from "react-icons/ai";
import { graphql, withPrefix } from "gatsby";
import { ImageBox } from "../../components/image-box";
import { ProjectLayout, PROJECT_BODY_COLUMN } from "../../components/project-layout";
import { OutboundLink } from "gatsby-plugin-google-analytics";
import { ProjectPageProps } from "../../models/project-page-props";

export default class ThematicPage extends React.Component<
  ProjectPageProps,
  {}
> {
  public render() {
    return (
      <ProjectLayout
        allProjects={this.props.data.allProjects.edges.map(e => e.node)}
        currentProject={this.props.data.project.edges[0].node}
        mainImage={this.props.data.mainImage.childImageSharp.fluid}
      >
        <Container>
          <Row className="justify-content-center">
            <Col lg="3">
              <h3 className={sharedStyles.topicLeft}>
                Overview
              </h3>
            </Col>
            <Col lg={{ size: 6, offset: 1 }}>
              <p>
                Jitta Wealth is a fintech startup that aims to help investors create better returns through simple investment methods.
              </p>
              <p>
                As a <span className={sharedStyles.bold}>lead product designer</span>, I worked with the CEO and development teams to design mobile interfaces &amp; experiences for <span className={sharedStyles.bold}>Thematic Investment</span>, a feature for users to invest in sectors or industries of their interests.
              </p>
              <p>
                The company's total assets under management (AUM) <span className={sharedStyles.bold}>went up over 60%</span> within the first 3 months after the product launched.
              </p>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col lg="3">
              <h3 className={sharedStyles.topicLeft}>Challenges</h3>
            </Col>
            <Col lg={{ size: 6, offset: 1 }}>
              <p> <span className={sharedStyles.topicRight}> Technical Constraints</span>
                <br />
                Like many other startups, resources and time are limited.
              </p>
              <p>
                <span className={sharedStyles.topicRight}>Shift in User Group</span>
                <br />
                The original minimum deposit of $15,000 was considered high relative to an average monthly income of $500 for a person in Thailand  <OutboundLink href="https://tradingeconomics.com/thailand/wages" target="_blank">
                  [1]</OutboundLink>. It limited primary users to be only those with established financial stability, like experienced investors and entrepreneurs.
              </p>
              <p>
                A shift in user demographics occurred after the minimum deposit got lowered to $3,000, making the service more accessible to various groups of users.
              </p>
              <p>
                <span className={sharedStyles.textHighlight}>
                  Partnering up with the data team, I learned that corporate employees became a new top investor; more students, public servants, and freelancers also started to invest with us.
                </span>
              </p>
            </Col>
          </Row>

          <Row className="justify-content-center">
            <Col lg="3">
              <h3 className={sharedStyles.topicLeft}>Understanding the New User Group</h3>
            </Col>
            <Col lg={{ size: 6, offset: 1 }}>
              <p>
                I collaborated with the customer service &amp; data teams and reached out to some users to learn more about their needs and investment goals.
              </p>

              <p>
                I found that the new group of users tended to have <span className={sharedStyles.bold}>less investment experience </span> and <span className={sharedStyles.bold}>tolerate lower risk</span>.
                Many of them planned to spend the invested money in the future. These factors made them <span className={sharedStyles.bold}> more cautious </span> when making investment decisions.
              </p>
              <p>
                <span className={sharedStyles.textHighlight}> Thus, they seek more investment information, communication, and updates from the company.</span>
              </p>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col lg="3">
              <h3 className={sharedStyles.topicLeft}>Design Process / First Iteration</h3>
            </Col>
            <Col lg={{ size: 6, offset: 1 }}>
              <p>
                Due to limited technical resources, I focused on examining existing product flow &amp; components and reusing them as much as possible.
              </p>
              <p>
                Unlike other existing products, users can <span className={sharedStyles.bold}>select more than one</span> investment plan, i.e., choosing more than one theme.
              </p>
              <p>
                <span className={sharedStyles.textHighlight}> Therefore, the UI must accommodate multi-selecting interaction.</span>
              </p>
            </Col>
          </Row>
        </Container>

        <section className={sharedStyles.creamBg}>
          <Container>
            <Row className="justify-content-center">
              <Col lg={PROJECT_BODY_COLUMN}>
                <p>
                  <span className={sharedStyles.bold}>
                    A HTA chart showing steps required for the users to open an investment account
                  </span>
                </p>
                <ImageBox
                  src={this.getImageUrl("HTA.png")}
                  alt=""
                  className="img-fluid"
                />
              </Col>
            </Row>
            <Row className="justify-content-center">
              <Col lg="5">
                <p>
                  <span className={sharedStyles.green}><AiOutlineCheckCircle /></span><span className={sharedStyles.bold}> Existing Products</span>
                  <br />
                  Users can view investment plan information (Steps 2.1) before submitting a request to open an account
                </p>
                <ImageBox
                  src={this.getImageUrl("try.png")}
                  alt=""
                  className="img-fluid"
                />
              </Col>
              <Col lg={{ size: 5, offset: 1 }}>
                <p>
                  <span className={sharedStyles.red}><AiOutlineCloseCircle /></span> <span className={sharedStyles.bold}>Thematic Investment</span>
                  <br />
                  Users can select multiple themes but cannot view investment information for each theme (Steps 2.1)
                </p>
                <ImageBox
                  src={this.getImageUrl("try.png")}
                  alt=""
                  className="img-fluid"
                />
              </Col>
            </Row>
          </Container>
        </section>

        <Container>
          <Row className="justify-content-center">
            <Col lg="3">
              <h3 className={sharedStyles.topicLeft}>Design Process / Second Iteration</h3>
            </Col>
            <Col lg={{ size: 6, offset: 1 }}>
              <p>
                Due to limited technical resources, I focused on examining existing product flow &amp; components and reusing them as much as possible.
              </p>
              <p>
                Unlike other existing products, users can <span className={sharedStyles.bold}>select more than one</span> investment plan, i.e., choosing more than one theme.
              </p>
              <p>
                <span className={sharedStyles.textHighlight}> Therefore, the UI must accommodate multi-selecting interaction.</span>
              </p>
            </Col>
          </Row>
        </Container>
      </ProjectLayout>
    );
  }

  private getImageUrl(filename: string) {
    return withPrefix(
      `/images/${this.props.data.project.edges[0].node.imageFolder}/${filename}`
    );
  }
}

export const pageQuery = graphql`
        query ThematicQuery($path: String!) {
          allProjects: allProjectsJson {
          ...ProjectFields
        }
        project: allProjectsJson(filter: {url: {eq: $path } }) {
          ...ProjectFields
        }
        mainImage: file(relativePath: {eq: "thematic/main.png" }) {
          ...MainImageSizes
        }
  }
        `;
