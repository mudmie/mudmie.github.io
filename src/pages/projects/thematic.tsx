import * as React from "react";
import * as sharedStyles from "./styles.module.scss";
import { Col, Container, Row, Table } from "reactstrap";
import { graphql, withPrefix } from "gatsby";
import { ImageBox } from "../../components/image-box";
import { ProjectLayout } from "../../components/project-layout";
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
        currentProjectGroup={
          this.props.data.allProjectGroups.edges.find(
            pg =>
              pg.node.name == this.props.data.project.edges[0].node.projectGroup
          ).node
        }
        mainImage={this.props.data.mainImage.childImageSharp.fluid}
      >
        <Container>
          <Row className="justify-content-center">
            <Col lg="8">
              <h3>About The Company</h3>
              <p>
                Jitta Wealth is a Thai-based robo-advisor company that aims to help investors create better returns through simple investment methods. Its wealth management service is similar to {" "}
                <OutboundLink href="https://www.wealthsimple.com/en-ca/" target="_blank">
                  Wealthsimple </OutboundLink> {" "} and {" "}
                <OutboundLink href="https://www.betterment.com" target="_blank">
                  Betterment </OutboundLink> {" "}
              in North America.
            </p>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col lg="8">
              <h3>Project Background </h3>
              <h3 className={sharedStyles.sub}> Business Needs</h3>
              <p>
                Asset Under Management (AUM) is the total market value of investment a company manages on behalf of its clients. The company generates profit from management fees, which are a fixed percentage of the AUM. Thus, raising AUM is essential to the company’s business model.
            </p>
              <h3 className={sharedStyles.sub}> Existing Products</h3>
              <p>
                Before Thematic Investment got launched, Jitta Wealth offered two existing investment strategies: Jitta Ranking and Global ETF.
            </p>
              <ul>
                <li>
                  Jitta Ranking is an investment fund made up of predetermined stocks. The minimum deposit ranges from 500,000 - 1M THB (~16,120 - 32,260 USD) depending on the chosen market country.
              </li>
                <br />
                <li>
                  Global ETF is a risk-based investment fund made up of stock and bond ETFs. It allocates the assets based on one’s preferred risk and requires a minimum deposit of 100,000 THB (~3,225 USD).
              </li>
              </ul>
              <h3 className={sharedStyles.sub}> Users</h3>
              <p>
                Originally, Jitta Ranking was the only investment strategy offered to the clients. The minimum deposit required was considered high relative to the minimum monthly income of 15,000 THB (~485 USD) for a Thai person with a bachelor's degree {" "}
                <OutboundLink href="https://www.boi.go.th/index.php?page=labor_costs" target="_blank">
                  [1]</OutboundLink>.
            As a result, the users at the time were mainly experienced investors and entrepreneurs.</p>
              <p>
                The launch of Global ETF resulted in a huge shift in customer demographic as the minimum deposit got reduced to only 100,000 THB. Corporate employees became a new top investor; more students and freelancers also started to open their accounts and invest.
            </p>
              <p>
                Table 1 outlines some key differences between the original and the new groups of users. The shift in user profile signaled the team to step back and reevaluate whether the existing UX &amp; UI of the app were still applicable.
            </p>
              <Table>
                <thead>
                  <tr>
                    <th>Original Users</th>
                    <th>New Users</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <ul>
                        <li>
                          More investment experience
                        </li>
                        <li>
                          Have established financial stability
                        </li>
                        <li>
                          Invest for long term and likely to not need this money soon
                        </li>
                        <li>
                          Tolerate higher risk
                        </li>
                        <li>
                          Rely less on investment information provided by Jitta Wealth as they often <br />
                        had their sources of the latest financial information
                        </li>
                      </ul>
                    </td>
                    <td>
                      <ul>
                        <li>
                          Average to no investment experience
                        </li>
                        <li>
                          Hope to invest long term with possible need for the invested money soon
                        </li>
                        <li>
                          Tolerated lower risk
                        </li>
                        <li>
                          Seek information and details to make decisions and stay updated
                        </li>
                        <li>
                          Tend to check the app to see update and performance more often
                        </li>
                      </ul>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col lg="8">
              <h3>Design Process</h3>
              <h3 className={sharedStyles.sub}>Situation of Concern</h3>
              <p>
                Global ETF makes investment become more accessible and increases Jitta Wealth's presence to the public. However, some potential customers hesitate to invest since there are similar alternatives offered by other financial institutes. To meet the business needs, a unique investment strategy that offers flexibility for users to customize their portfolios should be developed to attract this group of customers.
            </p>

              <h3 className={sharedStyles.sub}>Product Requirements &amp; Constraints</h3>
              <p>
                To distinguish our product from the existing ones in the market, the team came up with Thematic Investment strategy. This strategy allows users to customize their own portfolio by choosing to invest in industries or sectors of their interests.
            </p>
              <p>
                Below are product requirements gather from work sessions with the CEO, product and development teams.
            </p>
              <ul>
                <li>
                  Users must be able to select from 1 - 5 themes
              </li>
                <br />
                <li>
                  User must be able to see the investment allocation after choosing themes
              </li>
                <br />
                <li>
                  Users will not be able to specify the investment percentage for each theme
              </li>
                <br />
                <li>
                  The system will equally allocate the investment ratio among selected theme
              </li>
                <br />
                <li>
                  Existing components and product flow should be reused as much as possible
              </li>
                <br />
                <li>
                  About 8 themes to be offered, but there could be more or less
              </li>
              </ul>
            </Col>
          </Row>

          <Row className="justify-content-center">
            <Col lg="8">
              <h3 className={sharedStyles.sub}>First Iteration</h3>
              <p>
                Due to technical constraints, I examined existing components and product flow and reused them as much as possible in this iteration.
            </p>
              <Row className="justify-content-center">
                <Col lg="11">
                  <ImageBox
                    src={this.getImageUrl("existing-flow.png")}
                    alt=""
                    className="img-fluid"
                  />
                </Col>
              </Row>
              <p>
                Unlike the existing products, users could select to invest in more than one theme. Therefore, the UI must be able to accommodate multi-selecting interaction. Trying to reuse existing components and product flow resulted in the design below.
              </p>
              <Row className="justify-content-center">
                <Col lg="11">
                  <ImageBox
                    src={this.getImageUrl("thematic-first.png")}
                    alt=""
                    className="img-fluid"
                  />
                </Col>
              </Row>
              <p>
                Considering the shift in user demographics and the new user needs, this design failed to provide information about each theme. Below are other design explorations I created to solve the issues. Unfortunately, the development team didn't like these ideas as it'd be technically challenging to implement.
              </p>
              <Row className="justify-content-center">
                <Col lg="11">
                  <ImageBox
                    src={this.getImageUrl("exploration.png")}
                    alt=""
                    className="img-fluid"
                  />
                </Col>
              </Row>
            </Col>
          </Row>

          <Row className="justify-content-center">
            <Col lg="8">
            <h3 className={sharedStyles.sub}>Second Iteation</h3>
            <p>
            I simplified the UI while still provided the ability for the users to view the theme information. By tapping the theme, the users would be directed to the information page. If they selected the theme, a checkmark would appear in front of the row as an indicator. 
            </p>
            <Row className="justify-content-center">
                <Col lg="11">
                  <ImageBox
                    src={this.getImageUrl("thematic-second.png")}
                    alt=""
                    className="img-fluid"
                  />
                </Col>
              </Row>
            </Col>
          </Row>

          <Row className="justify-content-center">
            <Col lg="8">
            <h3 className={sharedStyles.sub}>Thrid Iteration</h3>
            <p>
            When I walked through the design in the second iteration with the CEO, I got feedback that some users might want to select the themes right away without reading the information. In this iteration, I redesigned the UI that would allow users to select themes and view the information at the same time. 
            </p>
            <p>
            I originally came up with the design below, but I was concerned there might not be enough visual cues to signal the users that they could tap the row to view the theme information. 
            </p>
            <Row className="justify-content-center">
                <Col lg="11">
                  <ImageBox
                    src={this.getImageUrl("thematic-third.png")}
                    alt=""
                    className="img-fluid"
                  />
                </Col>
              </Row>
            </Col>
          </Row>

          <Row className="justify-content-center">
            <Col lg="8">
            <h3 className={sharedStyles.sub}>Final Design</h3>
            <p>
            After exploring various components and patterns, I decided to combine the multi-select checkbox from iOS with the right chevron icon to signal possible interactions. 
            </p>
            <Row className="justify-content-center">
                <Col lg="11">
                  <ImageBox
                    src={this.getImageUrl("thematic-final.png")}
                    alt=""
                    className="img-fluid"
                  />
                </Col>
              </Row>
            </Col>
          </Row>

          <Row className="justify-content-center">
            <Col lg="8">
            <h3>In the Future</h3>
            <p>
            There were only 10 themes available for the users when Thematic Investment was first launched in November 2020. Currently, there are a total of 14 themes available and the list will likely continue to grow in the future. As a result, the current UI may need some modification to support a long list of themes. Features like sorting and filtering may become necessary to enhance the user experience of the mobile app.
            </p>
            <p>
            As more themes become available, some users may experience a paradox of choice. Having a "smart theme" option with preselected themes for an optimal investment return can also be beneficial to the users in the future.            
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
    allProjectGroups: allProjectGroupsJson {
      ...ProjectGroupFields
    }
    project: allProjectsJson(filter: { url: { eq: $path } }) {
      ...ProjectFields
    }
    mainImage: file(relativePath: { eq: "thematic/main.png" }) {
      ...MainImageSizes
    }
  }
`;
