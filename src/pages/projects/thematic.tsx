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
        allProjects={this.props.data.allProjects.edges.map((e) => e.node)}
        currentProject={this.props.data.project.edges[0].node}
        mainImage={this.props.data.mainImage}
      >
        <Container>
          <Row className="justify-content-center">
            <Col lg="6">
              <h3>Business Goals</h3>
              <p>
                We wanted to <b>increase the AUM</b> as growth is crucial to
                success for any startups. Our goal was to{" "}
                <b>attract both new and existing customers</b> to our investment
                platform by introducing a new investment product that allowed
                users to customize portfolios based on their interests.
              </p>
            </Col>
          </Row>

          <Row className="justify-content-center">
            <Col lg="6">
              <h3>The Users</h3>
              <p>
                Due to limited time and resources, I wasn’t able to run formal
                user research sessions. I instead partnered up with Customer
                Success and Data teams to learn more about our users, their
                needs, and investment goals.
              </p>
              <p>
                I synthesized the findings and divided users into two groups:
                experienced and novice investors.
              </p>

              <Row className="justify-content-center">
                <Col
                  lg="5"
                  className={`pb-0 ${sharedStyles.creamBg} ${sharedStyles.figureNoMarginBottom}`}
                >
                  <div className="text-center">
                    <ImageBox
                      src={this.getImageUrl("a.png")}
                      alt=""
                      className="img-fluid"
                    />
                    <span
                      className={`text-center d-inline-block mt-2 ${sharedStyles.bold}`}
                    >
                      Experienced Investors
                    </span>
                  </div>
                  <p>
                    <ul>
                      <li>
                        More investment experience &amp; financial stability
                      </li>
                      <li>Knowledgeable in available investment products</li>
                      <li>
                        Invest in a long term &amp; interact less with the app
                      </li>
                    </ul>
                  </p>
                </Col>
                <Col
                  lg={{ size: 5, offset: 1 }}
                  className={`pb-0 ${sharedStyles.creamBg} ${sharedStyles.figureNoMarginBottom}`}
                >
                  <div className="text-center">
                    <ImageBox
                      src={this.getImageUrl("b.png")}
                      alt=""
                      className="img-fluid"
                    />
                    <span
                      className={`text-center d-inline-block mt-2 ${sharedStyles.bold}`}
                    >
                      Novice Investors
                    </span>
                  </div>
                  <p>
                    <ul>
                      <li>
                        Less investment experience &amp; financial stability
                      </li>
                      <li>
                        Tolerate lower risk &amp; cautious when making
                        investment decision
                      </li>
                      <li>
                        Seek investment information &amp; updates from company{" "}
                      </li>
                    </ul>
                  </p>
                </Col>
              </Row>
              <p>
                <b>Targeted Users</b>
                <br />
                Working with the Data team to look into user dempgraphics, I
                learned that novice investors like students and coroporate
                employees became a new top investor. As a result, they became
                our targeted users.
              </p>
            </Col>
          </Row>

          <Row className="justify-content-center">
            <Col lg="6">
              <h3>Design: First Iteration</h3>
              <p>
                With time and technical constraints, I focused on examining
                existing product flow &amp; components and reusing them as much
                as possible.
              </p>
              <p>
                Unlike other existing products, users can select more than one
                investment plan, i.e., choosing more than one theme. Therefore,
                the UI must accommodate multi-selection interaction.
              </p>
            </Col>
          </Row>

          <Row className="justify-content-center">
            <Col lg="6" className={sharedStyles.creamBg}>
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
            <Col lg="3">
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
            <Col lg={{ size: 3 }}>
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
            <Col lg="6">
              <h3>Design: Second Iteration</h3>

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
                Even though the design in the first iteration required low
                development effort, it wasn't feasible from a UX standpoint.
              </p>
              <p>
                In this iteration, I simplified the design and introduced new
                interactions. Users could tap a theme to view investment
                information, select or and unselect themes from the information
                page.
              </p>
            </Col>
          </Row>

          <Row className="justify-content-center">
            <Col
              lg="3"
              className={`pb-0 ${sharedStyles.figureNoMarginBottom}`}
            >
              <p>
                <span className={sharedStyles.bold}> Selecting Themes</span>
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
            <Col
              lg={{ size: 3 }}
              className={`pb-0 ${sharedStyles.figureNoMarginBottom}`}
            >
              <p>
                <span className={sharedStyles.bold}>Unselecting Themes</span>
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
            <Col lg="6">
              <h3>Design: Third Iteration</h3>
              <p>
                I got feedback from the CEO that some users might want to select
                the themes without reading the information. For example, a
                person might be into cannabis and he/she just wanted to invest
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
                circle checkbox) so that the users could select the themes
                without having to navigate to the investment information page.
              </p>
            </Col>
          </Row>

          <Row className="justify-content-center">
            <Col
              lg="4"
              className={`pb-0 ${sharedStyles.figureNoMarginBottom}`}
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
              className={`pb-0 ${sharedStyles.figureNoMarginBottom}`}
            >
              <p>
                <span className={sharedStyles.bold}>Unselecting Themes</span>
                <br />
                Tap the selected checkboxes to unselect multiple themes.
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
              className={`pb-0  ${sharedStyles.figureNoMarginBottom}`}
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
            <Col lg="6">
              <h3>Third Iteration: Continued</h3>
              <p>
                Since the users could select up to 5 themes, the system must
                prevent them from selecting additional ones. I was focusing on
                error prevention as I didn't want the users to perform an action
                that could lead to an error.
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
            <Col lg="4" >
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
            <Col lg={{ size: 4 }}>
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
            <Col lg={{ size: 4 }}>
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
            <Col lg="6">
              <h3>Testing</h3>

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
            <Col lg="6">
              <h3>Final Design</h3>
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
                I discarded the disabled state. While I didn't stop the users
                from selecting additional themes, an alert box would pop up when
                the users attempt to select themes after they reached the limit.
              </p>
            </Col>
          </Row>

          <Row className="justify-content-center">
            <Col lg="6" >
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
            <Col lg="6">
              <h3>In the Future</h3>
              <p>
                <b> Growing List of Themes</b>
                <br />
                The feature was launched with 10 themes. Now, there are 16
                themes available and the list is likely to continue growing in
                the future. The current UI might need some modification to
                support a long list of themes. Features like searching, sorting,
                and filtering could help enhance the user experience for the
                mobile app.
              </p>
              <p>
                <b>Paradox of Choice</b>
                <br />
                As more themes become available, some users may experience a
                paradox of choice. Having a "smart theme" option with
                preselected themes for an optimal investment return can be
                beneficial to the users in the future.
              </p>
            </Col>
            {/* <Col lg="12">
              <div className="text-center">
                <ImageBox
                  src={this.getImageUrl("../asterisk.svg")}
                  alt=""
                  className="img-fluid"
                />
              </div>
            </Col> */}
          </Row>          
          {/* <Row className="justify-content-center">
            <Col lg="12">
              <h1>Other things I designed at Jitta Wealth</h1>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col md="6" lg="6">
              <h3>Project Name</h3>
              <p>
                Brandi believes photos are metaphors, making the abstract
                concrete and mystifying the mundane. They believe photography is
                a conversation between the photographer, the subject, and those
                who will view these images for years to come. Brandi relishes in
                adding to the archive of humanity.
              </p>
            </Col>
            <Col md="6" lg={{ size: 5, offset: 1 }}>
              <ImageBox
                src={this.getImageUrl("sample.png")}
                alt=""
                className="img-fluid"
              />
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col md="6" lg="6">
              <h3>Project Name</h3>
              <p>
                Brandi believes photos are metaphors, making the abstract
                concrete and mystifying the mundane. They believe photography is
                a conversation between the photographer, the subject, and those
                who will view these images for years to come. Brandi relishes in
                adding to the archive of humanity.
              </p>
            </Col>
            <Col md="6" lg={{ size: 5, offset: 1 }}>
              <ImageBox
                src={this.getImageUrl("sample.png")}
                alt=""
                className="img-fluid"
              />
            </Col>
          </Row> */}
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
