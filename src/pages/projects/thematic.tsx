import * as React from "react";
import * as sharedStyles from "./styles.module.scss";
import { Col, Container, Row, Table } from "reactstrap";
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
              <h3>
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
                Originally, a minimum deposit of $15,000 is required for the investment. This amount considered to be extremely high relative to the average monthly income of $500 for a person in Thailand <OutboundLink href="https://tradingeconomics.com/thailand/wages" target="_blank">
                [1]</OutboundLink>. The requirement limited primary users to be only those with established financial stability, like experienced investors and entrepreneurs.
              </p>
              <p>
                A huge shift in user demographics occurred after the minimum deposit got lowered to $3,000, making the service more accessible to various groups of users.
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
                To learn more about the users, I talked with customer service &amp; marketing teams, and collaborated with the data scientist to further look into user demographics. I also reached out and spoke with some of the users to understand their needs and investment goals.
              </p>

              <p>
                Through the processes, I found that the new group of users tended to have less investment experience and tolerate lower risk. Many of them planned to spend the invested money in the future. These factors led them to be more cautious about their investment and when making decisions. As a result, they seek more investment information, more communication, and updates from the company.
              </p>
            </Col>
          </Row>

          <Row className="justify-content-center">
            <Col lg="3">
              <h3 className={sharedStyles.topicLeft}>Design Process</h3>
            </Col>
            <Col lg={{ size: 6, offset: 1 }}>
              <p> <span className={sharedStyles.topicRight}> First Iteration</span>

              </p>
              <p>
                Considering limited technical resources, I focused on examining existing components & product flow and reusing them as much as possible in the first iteration.                 </p>

              <p>
                Unlike other existing products, Thematic Investment allows users to select more than one investment plan, i.e., choosing more than one theme. Therefore, the UI must be able to accommodate multi-selecting interaction. Trying to reuse existing components and product flow resulted in the design below.                  </p>
            </Col>
          </Row>

          <Row className="justify-content-center">
            <Col lg="11">
              <ImageBox
                src={this.getImageUrl("existing-flow.png")}
                alt=""
                className="img-fluid"
              />
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
