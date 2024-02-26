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
            <Col lg="10">
              <div className={sharedStyles.sectionContainer}>
                <h6 className={sharedStyles.categoryText}>Understanding</h6>
                <h3 className={sharedStyles.titleText}>Business Goals</h3>
                <p>
                  We wanted to increase the AUM as growth is crucial to success
                  for any startups. Our goal was to attract both new and
                  existing customers to our investment platform by introducing a
                  new investment product that allowed users to customize
                  portfolios based on their interests.
                </p>
              </div>
            </Col>
          </Row>

          <Row className="justify-content-center mt-4">
            <Col lg="10">
              <div className={sharedStyles.sectionContainer}>
                <h6 className={sharedStyles.categoryText}>Understanding</h6>
                <h3 className={sharedStyles.titleText}>The Users</h3>
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

                <Row className="justify-content-between">
                  <Col lg="6" className="mb-2 mb-lg-0">
                    <div className={sharedStyles.contentContainer}>
                      <ImageBox
                        src={this.getImageUrl("a.png")}
                        alt=""
                        className="img-fluid"
                      />
                      <p>
                        <b>Experienced Investors</b>
                      </p>
                      <ul className={sharedStyles.listLeftAlign}>
                        <li>
                          More investment experience &amp; financial stability
                        </li>
                        <li>Knowledgeable in available investment products</li>
                        <li>
                          Invest in a long term &amp; interact less with the app
                        </li>
                      </ul>
                    </div>
                  </Col>
                  <Col lg="6" className="mb-2 mb-lg-0">
                    <div className={sharedStyles.contentContainer}>
                      <ImageBox
                        src={this.getImageUrl("b.png")}
                        alt=""
                        className="img-fluid"
                      />
                      <p>
                        <b>Novice Investors</b>
                      </p>
                      <ul className={sharedStyles.listLeftAlign}>
                        <li>
                          Less investment experience &amp; financial stability
                        </li>
                        <li>Tolerate lower risk &amp; more cautious</li>
                        <li>Seek investment information &amp; updates </li>
                      </ul>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>

          <Row className="justify-content-center">
            <Col lg="7">
              <h4 className={sharedStyles.highlightText}>
                <span className={sharedStyles.greyText}>
                  {" "}
                  User demographics told us that{" "}
                </span>{" "}
                novice users were becoming a new top investor, making them our
                target customers{" "}
              </h4>
            </Col>
          </Row>

          <Row className="justify-content-center">
            <Col lg="10">
              <div className={sharedStyles.sectionContainer}>
                <h6 className={sharedStyles.categoryText}>Design</h6>
                <h3 className={sharedStyles.titleText}>First Iteration </h3>
                <p>
                  With time and technical constraints, I focused on examining
                  existing product flow & components and reusing them as much as
                  possible.
                </p>

                <p>
                  Unlike other existing products, users can select more than one
                  investment plan, i.e., choosing more than one theme.
                  Therefore, the UI must accommodate multi-selection
                  interaction.
                </p>
                <Row className="justify-content-center">
                  <Col lg="6" className="mb-2 mb-lg-0">
                    <div className={sharedStyles.contentContainer}>
                      <p>
                        <span className={sharedStyles.green}>
                          <AiOutlineCheckCircle />
                        </span>
                        <span className={sharedStyles.bold}>
                          {" "}
                          Existing Products
                        </span>
                        <br />
                        Users can view investment information before submitting
                        a request to open an account.
                      </p>
                      <ImageBox
                        src={this.getImageUrl("JR-ETF.gif")}
                        alt=""
                        className="img-fluid"
                      />
                    </div>
                  </Col>
                  <Col lg="6" className="mb-2 mb-lg-0">
                    <div className={sharedStyles.contentContainer}>
                      {" "}
                      <p>
                        <span className={sharedStyles.red}>
                          <AiOutlineCloseCircle />
                        </span>{" "}
                        <span className={sharedStyles.bold}>
                          Thematic Investment
                        </span>
                        <br />
                        Users can select multiple themes but cannot view
                        investment information for each theme.
                      </p>
                      <ImageBox
                        src={this.getImageUrl("thematic.gif")}
                        alt=""
                        className="img-fluid"
                      />
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>

          <Row className="justify-content-center">
            <Col lg="7">
              <h4 className={sharedStyles.highlightText}>
                <span className={sharedStyles.greyText}>
                  {" "}
                  Even though the design in the first iteration required low
                  development effort,{" "}
                </span>{" "}
                it wasn't feasible from a UX standpoint.
              </h4>
            </Col>
          </Row>

          <Row className="justify-content-center">
            <Col lg="10">
              <div className={sharedStyles.sectionContainer}>
                <h6 className={sharedStyles.categoryText}>Design</h6>
                <h3 className={sharedStyles.titleText}>Second Iteration </h3>
                <p>
                  Knowing that users seek information when making investment
                  decisions, the design in the first iteration failed to support
                  their needs.
                </p>
                <p>
                  In this iteration, I simplified the design and introduced new
                  interactions. Users could tap a theme to view investment
                  information, select or and unselect themes from the
                  information page.
                </p>

                <Row className="justify-content-">
                  <Col lg="6" className="mb-2 mb-lg-0">
                    <div className={sharedStyles.contentContainer}>
                      <p>
                        <span className={sharedStyles.bold}>
                          {" "}
                          Selecting Themes
                        </span>
                        <br />
                        Tap a theme to view investment information. Tap "select"
                        button and a check mark will appear to indicate theme
                        selection.
                      </p>
                      <ImageBox
                        src={this.getImageUrl("2-select.gif")}
                        alt=""
                        className="img-fluid"
                      />
                    </div>
                  </Col>
                  <Col lg="6" className="mb-2 mb-lg-0">
                    <div className={sharedStyles.contentContainer}>
                      <p>
                        <span className={sharedStyles.bold}>
                          Unselecting Themes{" "}
                        </span>
                        <br />
                        Tap a theme to navigate to information page then tap
                        "unselect" button. A check mark will disappear from the
                        row.
                      </p>
                      <ImageBox
                        src={this.getImageUrl("2-unselect.gif")}
                        alt=""
                        className="img-fluid"
                      />
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>

          <Row className="justify-content-center">
            <Col lg="7">
              <h4 className={sharedStyles.highlightText}>
                <span className={sharedStyles.greyText}>
                  Knowing our users, most of them will want to read investment
                  information before selecting the theme.{" "}
                </span>{" "}
                However, we should also accomodate those who want to quickly
                make selections without viewing the information.{" "}
              </h4>
            </Col>
          </Row>

          <Row className="justify-content-center">
            <Col lg="10">
              <div className={sharedStyles.sectionContainer}>
                <h6 className={sharedStyles.categoryText}>Design</h6>
                <h3 className={sharedStyles.titleText}>
                  Third Iteration, Part 1
                </h3>
                <p>
                  I got feedback from the CEO that some users might want to
                  select the themes without reading the information. For
                  example, a person might be into cannabis and he/she just
                  wanted to invest in it.
                </p>
                <p>
                  To enable quick-select, I introduced a new selection control
                  (a circle checkbox) so that the users could select the themes
                  without having to navigate to the investment information page.
                </p>

                <Row className="justify-content-between">
                  <Col lg="4" className="mb-2 mb-lg-0">
                    <div className={sharedStyles.contentContainer}>
                      <p>
                        <b>Selecting Themes</b>
                      </p>
                      <p>
                        {" "}
                        Tap the checkboxes to select multiple themes right away.
                      </p>

                      <ImageBox
                        src={this.getImageUrl("3-select.gif")}
                        alt=""
                        className="img-fluid"
                      />
                    </div>
                  </Col>
                  <Col lg="4" className="mb-2 mb-lg-0">
                    <div className={sharedStyles.contentContainer}>
                      <p>
                        <b>Unselecting Themes</b>
                      </p>
                      <p>
                        {" "}
                        Tap the selected checkboxes to unselect multiple themes.
                      </p>
                      <ImageBox
                        src={this.getImageUrl("3-unselect.gif")}
                        alt=""
                        className="img-fluid"
                      />
                    </div>
                  </Col>
                  <Col lg="4" className="mb-2 mb-lg-0">
                    <div className={sharedStyles.contentContainer}>
                      <p>
                        <b>Viewing Investment Information</b>
                      </p>
                      <p>
                        {" "}
                        Tap the right side of the row to view investment
                        information.
                      </p>
                      <ImageBox
                        src={this.getImageUrl("3-view.gif")}
                        alt=""
                        className="img-fluid"
                      />
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>

          <Row className="justify-content-center mt-4">
            <Col lg="10">
              <div className={sharedStyles.sectionContainer}>
                <h6 className={sharedStyles.categoryText}>Design</h6>
                <h3 className={sharedStyles.titleText}>
                  Third Iteration, Part 2
                </h3>
                <p>
                  Since the users could select up to 5 themes, the system must
                  prevent them from selecting additional ones. I was focusing on
                  error prevention as I didn't want the users to perform an
                  action that could lead to an error.
                </p>
                <p>
                  I designed a disabled state for the checkbox. As soon as the
                  users selected the 5<sup>th</sup> theme, the remaining
                  unselected checkboxes would become disabled.
                </p>

                <Row className="justify-content-between">
                  <Col lg="4" className="mb-2 mb-lg-0">
                    <div className={sharedStyles.contentContainer}>
                      <p>
                        <b>Design Option 1</b>
                      </p>
                      <p>
                        {" "}
                        The outline of the checkbox changes from blue (active)
                        to grey (disabled)
                      </p>

                      <ImageBox
                        src={this.getImageUrl("limit-1.gif")}
                        alt=""
                        className="img-fluid"
                      />
                    </div>
                  </Col>
                  <Col lg="4" className="mb-2 mb-lg-0">
                    <div className={sharedStyles.contentContainer}>
                      <p>
                        <b>Design Option 2</b>
                      </p>
                      <p>
                        {" "}
                        The background color of the checkbox turns into grey
                        (disabled)
                      </p>
                      <ImageBox
                        src={this.getImageUrl("limit-2.gif")}
                        alt=""
                        className="img-fluid"
                      />
                    </div>
                  </Col>
                  <Col lg="4" className="mb-2 mb-lg-0">
                    <div className={sharedStyles.contentContainer}>
                      <p>
                        <b>Design Option 3</b>
                      </p>
                      <p>
                        {" "}
                        The checkbox disappears from the screen once the limit
                        is reached
                      </p>
                      <ImageBox
                        src={this.getImageUrl("limit-3.gif")}
                        alt=""
                        className="img-fluid"
                      />
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>

          <Row className="justify-content-center">
            <Col lg="7">
              <h4 className={sharedStyles.highlightText}>
                <span className={sharedStyles.greyText}>
                  I learned from usability test that for this specific use case{" "}
                </span>{" "}
                providing feedback &gt; error prevention{" "}
              </h4>
            </Col>
          </Row>

          <Row className="justify-content-center">
            <Col lg="10">
              <div className={sharedStyles.sectionContainer}>
                <h6 className={sharedStyles.categoryText}>Design Validation</h6>
                <h3 className={sharedStyles.titleText}>Usability Test</h3>
                <p>
                  I ran a usability test to determine the effectiveness of the
                  design options and found that
                </p>
                <ul>
                  <li>
                    None of the designs provided system feedback to the users
                  </li>
                  <li>
                    Visual cues in Design Option 1 & Option 2 weren't enough for
                    the users to distinguish the differences between the active
                    & disabled states
                  </li>
                  <li>
                    Design Option 3 could potentially confuse the users and lead
                    them to wonder why the checkboxes suddenly disappeared
                  </li>
                </ul>

                <p>
                  These findings made me realized that I realized error
                  prevention should be prioritized for tasks that could result
                  in severe consequences. For this scenario, providing feedback
                  was more important as the users should be informed of what was
                  happening and why their action was prohibited.
                </p>
                <p>
                  As a result, I discarded the disabled state. While the design
                  wouldn't stop the users from selecting additional themes, an
                  alert box would pop up and inform the users about the
                  situation when the users attempted to select themes after they
                  reached the limit.
                </p>

                <Row className="justify-content-center">
                  <Col lg="10">
                    <div className="text-center">
                      <ImageBox
                        src={this.getImageUrl("limit-final.gif")}
                        alt="Intraction in the Final Design"
                        className="img-fluid"
                        showCaption={true}
                      />
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>

          <Row className="justify-content-center mt-4">
            <Col lg="10">
              <div className={sharedStyles.sectionContainer}>
                <h6 className={sharedStyles.categoryText}>Reflection </h6>
                <h3 className={sharedStyles.titleText}>Future Improvements </h3>
                <p className={sharedStyles.almostBlackP}>
                  <b>Growing List of Themes</b>
                </p>
                <p className="mt-2">
                  The feature was launched with 10 themes. Now, there are 16
                  themes available and the list is likely to continue growing in
                  the future. The current UI might need some modification to
                  support a long list of themes. Features like searching,
                  sorting, and filtering could help enhance the user experience
                  for the mobile app.
                </p>

                <p className={sharedStyles.almostBlackP}>
                  <b>Paradox of Choice</b>
                </p>
                <p className="mt-2">
                  As more themes become available, some users may experience a
                  paradox of choice. Having a "smart theme" option with
                  preselected themes for an optimal investment return can be
                  beneficial to the users in the future.{" "}
                </p>
              </div>
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
