import * as React from "react";
import * as sharedStyles from "./styles.module.scss";
import { Col, Container, Row, Table } from "reactstrap";
import { AiOutlineCheckCircle, AiOutlineCloseCircle } from "react-icons/ai";
import { graphql, withPrefix } from "gatsby";
import { ImageBox } from "../../components/image-box";
import {
  ProjectLayout,
  PROJECT_BODY_COLUMN,
} from "../../components/project-layout";
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
            <Col lg="4">
              <h3>Overview</h3>
            </Col>
            <Col lg="8">
              <p>
                Jitta Wealth is a fintech startup that aims to help investors
                create better returns through simple investment methods.
              </p>
              <p>
                As a{" "}
                <span className={sharedStyles.bold}>lead product designer</span>
                , I worked with the CEO and development teams to design mobile
                interfaces &amp; experiences for{" "}
                <span className={sharedStyles.bold}>Thematic Investment</span>,
                a feature for users to invest in sectors or industries of their
                interests.
              </p>
              <p>
                The company's total assets under management (AUM){" "}
                <span className={sharedStyles.bold}>went up over 60%</span>{" "}
                within the first 3 months after the product launched.
              </p>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col lg="4">
              <h3>Challenges</h3>
            </Col>
            <Col lg="8">
              <p>
                <span className={sharedStyles.topicRight}>
                  Technical Constraints
                </span>
                <br />
                Like many other startups, resources and time are limited.
              </p>
              <p>
                <span className={sharedStyles.topicRight}>
                  Shift in User Group
                </span>
                <br />
                The original minimum deposit of $15,000 was considered high
                relative to an average monthly income of $500 for a person in
                Thailand{" "}
                <OutboundLink
                  href="https://tradingeconomics.com/thailand/wages"
                  target="_blank"
                >
                  [1]
                </OutboundLink>
                . It limited primary users to be only those with established
                financial stability, like experienced investors and
                entrepreneurs.
              </p>
              <p>
                A shift in user demographics occurred after the minimum deposit
                got lowered to $3,000, making the service more accessible to
                various groups of users.
              </p>
              {/* <p><span className={sharedStyles.textHighlight}>Learning #1</span>
                <br/>
                Partnering up with the data team, I learned that corporate employees became a new top investor; more students, public servants, and freelancers also started to invest with us.
                </p> */}
            </Col>
          </Row>

          <Row className="justify-content-center">
            <Col lg="4">
              <h3>Knowing the Users</h3>
            </Col>
            <Col lg="8">
              <p>
                I partnered up with the customer service &amp; data team to
                learn more about the new group of users. I also reached out to
                some users to learn more about their needs and investment goals.
              </p>
              <p className={sharedStyles.pin}>
                <span className={sharedStyles.bold}>Learning #1</span>
                <br />
                Corporate employees became a new top investor. More students,
                public servants, and freelancers also started to invest with us.
              </p>

              <p className={sharedStyles.pin}>
                {" "}
                <span className={sharedStyles.bold}>Learning #2</span>
                <br />
                The new group of users tended to have less investment experience
                and tolerate lower risk. Many of them planned to spend the
                invested money in the future. These factors made them more
                cautious when making investment decisions.
              </p>

              <p className={sharedStyles.pin}>
                {" "}
                <span className={sharedStyles.bold}>Learning #3</span>
                <br />
                The new users group seek more investment information,
                communication, and updates from the company.
              </p>
            </Col>
          </Row>

          <Row className="justify-content-center">
            <Col lg="4">
              <h3>
                Design/
                <br />
                First Iteration
              </h3>
            </Col>
            <Col lg="8">
              <p>
                Due to limited technical resources, I focused on examining
                existing product flow &amp; components and reusing them as much
                as possible in the fist iteration.
              </p>
              <p>
                Unlike other existing products, users can{" "}
                <span className={sharedStyles.bold}>select more than one</span>{" "}
                investment plan, i.e., choosing more than one theme. Therefore,
                the UI must accommodate{" "}
                <span className={sharedStyles.bold}>
                  multi-selection interaction.
                </span>
              </p>
            </Col>
          </Row>

          <Row className="justify-content-center">
            <Col lg="12" className={sharedStyles.creamBg}>
              <p>
                <span className={sharedStyles.bold}>
                  HTA chart showing steps required for the users to open an
                  investment account
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
            <Col lg="6" className={sharedStyles.creamBg}>
              <p>
                <span className={sharedStyles.green}>
                  <AiOutlineCheckCircle />
                </span>
                <span className={sharedStyles.bold}> Existing Products</span>
                <br />
                Users can view investment information (Steps 2.1) before
                submitting a request to open an account.
              </p>
              <div className="text-center">
                <ImageBox
                  src={this.getImageUrl("JR-ETF.gif")}
                  alt=""
                  className="img-fluid"
                />
              </div>
            </Col>
            <Col lg="6" className={sharedStyles.creamBg}>
              <p>
                <span className={sharedStyles.red}>
                  <AiOutlineCloseCircle />
                </span>{" "}
                <span className={sharedStyles.bold}>Thematic Investment</span>
                <br />
                Users can select multiple themes but cannot view investment
                information for each theme (Steps 2.1).
              </p>
              <div className="text-center">
                <ImageBox
                  src={this.getImageUrl("thematic.gif")}
                  alt=""
                  className="img-fluid"
                />
              </div>
            </Col>
          </Row>

          <Row className="justify-content-center">
            <Col lg="4">
              <h3>
                Design/
                <br />
                Second Iteration
              </h3>
            </Col>
            <Col lg="8">
              {/* <Col lg={{ size: 6, offset: 1 }}> */}
              <p>
                Knowing that users seek information when making investment
                decisions, the design in the first iteration failed to support
                their needs.
              </p>

              <p className={sharedStyles.pin}>
                {" "}
                <span className={sharedStyles.bold}>Decision #1</span>
                <br />
                The design in the first iteration wasn't feasible even though it
                required low development effort.
              </p>
              <p>
                This iteration, I simplified the design and introduced new
                interactions. Users could tap a theme to view investment
                information, select, and unselect the theme from the information
                page.
              </p>
            </Col>
          </Row>

          <Row className="justify-content-center">
            <Col lg="5" className={sharedStyles.creamBg}>
              <p>
                <span className={sharedStyles.bold}> Selecting Theme</span>
                <br />
                Tap a theme to view investment information. Tap "select" button
                and a check mark will appear to indicate theme selection.
              </p>
              <div className="text-center">
                <ImageBox
                  src={this.getImageUrl("2-select.gif")}
                  alt=""
                  className="img-fluid"
                />
              </div>
            </Col>
            <Col lg={{ size: 5, offset: 1 }} className={sharedStyles.creamBg}>
              <p>
                <span className={sharedStyles.bold}>Unselecting Theme</span>
                <br />
                Tap a theme to navigate to information page then tap "unselect"
                button. A check mark will disappear from the row.
              </p>
              <div className="text-center">
                <ImageBox
                  src={this.getImageUrl("2-unselect.gif")}
                  alt=""
                  className="img-fluid"
                />
              </div>
            </Col>
          </Row>

          <Row className="justify-content-center">
            <Col lg="4">
              <h3>
                Design Process/
                <br />
                Third Iteration
              </h3>
            </Col>
            <Col lg="8">
              <p>
                I got feedback from the CEO that some users might want to select
                the themes without reading the information. For example, a
                person might be into cannabis, so he/she just wanted to invest
                in it.
              </p>
              <p className={sharedStyles.pin}>
                {" "}
                <span className={sharedStyles.bold}>Decision #2</span>
                <br />
                While users could choose a theme just because they wanted to, I
                was still convinced from my learnings that users would read
                investment information first. However, adding a quick-select
                feature wouldn't negatively impact the user experience.
              </p>
              <p>
                To enable quick-select, I introduced a new selection control (a
                circle checkbox) to each theme row so that the users could
                select the theme without having to navigate to the investment
                information page.
              </p>
            </Col>
          </Row>

          <Row className="justify-content-center">
            <Col
              lg="4"
              className={`pb-0 ${sharedStyles.creamBg} ${sharedStyles.figureNoMarginBottom}`}
            >
              <p>
                <span className={sharedStyles.bold}>Selecting Themes</span>
                <br />
                Tap the checkboxes to select multiple themes right away.
              </p>
              <div className="text-center">
                <ImageBox
                  src={this.getImageUrl("3-select.gif")}
                  alt=""
                  className="img-fluid"
                />
              </div>
            </Col>
            <Col
              lg="4"
              className={`pb-0 ${sharedStyles.creamBg} ${sharedStyles.figureNoMarginBottom}`}
            >
              <p>
                <span className={sharedStyles.bold}>Unselecting Products</span>
                <br />
                Tap the selected checkboxes to unselect multiple themes ASAP.
              </p>
              <div className="text-center">
                <ImageBox
                  src={this.getImageUrl("3-unselect.gif")}
                  alt=""
                  className="img-fluid"
                />
              </div>
            </Col>
            <Col
              lg="4"
              className={`pb-0 ${sharedStyles.creamBg} ${sharedStyles.figureNoMarginBottom}`}
            >
              <p>
                <span className={sharedStyles.bold}>Viewing Information</span>
                <br />
                Tap the right side of the row to view investment information.
              </p>
              <div className="text-center">
                <ImageBox
                  src={this.getImageUrl("3-view.gif")}
                  alt=""
                  className="img-fluid"
                />
              </div>
            </Col>
          </Row>

          <Row className="justify-content-center">
            <Col lg="4">
              <h3>
                Design/
                <br />
                Third Iteration
              </h3>
            </Col>
            <Col lg="8">
              <p>
                Since the users could select up to 5 themes, the system must
                prevent them from selecting additional ones. I was focusing on
                error prevention as I didn't want the users to perform an action
                that would lead to an error.
              </p>
              <p className={sharedStyles.pin}>
                {" "}
                <span className={sharedStyles.bold}>Decision #3</span>
                <br />I designed a disabled state for the checkbox. As soon as
                the users selected the 5<sup>th</sup> theme, the remaining
                unselected checkboxes would become disabled.
              </p>
            </Col>
          </Row>

          <Row className="justify-content-center">
            <Col lg="4" className={sharedStyles.creamBg}>
              <p>
                <span className={sharedStyles.bold}> Design #1 </span>
                <br />
                The outline of the checkbox changes from blue (active) to grey
                (disabled).
              </p>
              <div className="text-center">
                <ImageBox
                  src={this.getImageUrl("limit-1.gif")}
                  alt=""
                  className="img-fluid"
                />
              </div>
            </Col>
            <Col lg={{ size: 4 }} className={sharedStyles.creamBg}>
              <p>
                <span className={sharedStyles.bold}> Design #2</span>
                <br />
                The background of the checkbox turns grey (disabled) .
              </p>
              <div className="text-center">
                <ImageBox
                  src={this.getImageUrl("limit-2.gif")}
                  alt=""
                  className="img-fluid"
                />
              </div>
            </Col>
            <Col lg={{ size: 4 }} className={sharedStyles.creamBg}>
              <p>
                <span className={sharedStyles.bold}>Design #3</span>
                <br />
                The checkbox disappears once the limit is reached.
              </p>
              <div className="text-center">
                <ImageBox
                  src={this.getImageUrl("limit-3.gif")}
                  alt=""
                  className="img-fluid"
                />
              </div>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col lg="4">
              <h3>Testing</h3>
            </Col>
            <Col lg="8">
              <p>
                I ran a usability inspection to test the effectiveness of the
                design options and found that
                <br />
                <ul>
                  <li>
                    None of the designs provided system feedback to the users
                  </li>
                  <br />
                  <li>
                    Visual cues in Design #1 &amp; #2 weren't enough for the
                    users to distinguish the differences between the active
                    &amp; disabled states
                  </li>
                  <br />
                  <li>
                    Design #3 could potentially confuse the users and lead them
                    to wonder why the checkboxes suddenly disappeared
                  </li>
                </ul>
              </p>
            </Col>
          </Row>

          <Row className="justify-content-center">
            <Col lg="4">
              <h3>Final Design</h3>
            </Col>
            <Col lg="8">
              <p className={sharedStyles.pin}>
                {" "}
                <span className={sharedStyles.bold}>Decision #4</span>
                <br />I realized error prevention should be prioritized for
                tasks that could result in severe consequences. For this
                scenario, providing feedback was more important as the users
                should be informed of what was happening and why their action
                was prohibited.
              </p>

              <p>
                I discarded the disabled stated. While I didn't stop the users
                from selecting additional themes, an alert box would pop up when
                the users attempt to select themes after they reached the limit.
              </p>
            </Col>
          </Row>

          <Row className="justify-content-center">
            <Col lg="4"></Col>
            <Col lg="8" className={sharedStyles.creamBg}>
              <p>
                Tapping additional themes after reaching the limit will trigger
                an alert box. The message in the box will let the users know
                they've reached the limit.
              </p>
              <div className="text-center">
                <ImageBox
                  src={this.getImageUrl("limit-final.gif")}
                  alt=""
                  className="img-fluid"
                />
              </div>
            </Col>
          </Row>

          <Row className="justify-content-center">
            <Col lg="4">
              <h3>In the Future</h3>
            </Col>
            <Col lg="8">
              <p>
                <span className={sharedStyles.topicRight}>
                  Growing List of Themes
                </span>
                <br />
                Only 10 themes were available when the featured got lauched.
                Now, there are 16 themes available and the list will likely
                continue to grow in the future. As a result, the current UI may
                need some modification to support a long list of themes.
                Features like searching, sorting and filtering may become
                necessary to enhance the user experience for the mobile app.
              </p>
              <p>
                <span className={sharedStyles.topicRight}>
                  Paradox of Choice
                </span>
                <br />
                As more themes become available, some users may experience a
                paradox of choice. Having a "smart theme" option with
                preselected themes for an optimal investment return can also be
                beneficial to the users in the future.
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
    project: allProjectsJson(filter: { url: { eq: $path } }) {
      ...ProjectFields
    }
    mainImage: file(relativePath: { eq: "thematic/main.png" }) {
      ...ProjectMainImageSizes
    }
  }
`;
