import * as React from "react";
import * as sharedStyles from "./styles.module.scss";
import { Col, Container, Row } from "reactstrap";
import { graphql, withPrefix } from "gatsby";
import { OutboundLink } from "gatsby-plugin-google-analytics";
import { ImageBox } from "../../components/image-box";
import {
  ProjectLayout,
  PROJECT_BODY_COLUMN,
} from "../../components/project-layout";
import { ProjectPageProps } from "../../models/project-page-props";

export default class HackerAppsPage extends React.Component<
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
            <Col lg="7">
              <h4 className={sharedStyles.highlightText}>
                <span className={sharedStyles.greyText}>
                  The existing dashboard {""}
                </span>
                lacks detailed visualization
                <span className={sharedStyles.greyText}>
                  {""} for surgery time accuracy.{" "}
                </span>
              </h4>
            </Col>
          </Row>

          <Row className="justify-content-center">
            <Col lg="10">
              <div className={sharedStyles.sectionContainer}>
                <h6 className={sharedStyles.categoryText}>Context</h6>
                <h3 className={sharedStyles.titleText}>High-Level Planning</h3>
                <p>
                  Increasing operating room (OR) efficiency is crucial for
                  maximizing hospital revenue. While scheduling too much time
                  leads to missed revenue opportunities, not scheduling enough
                  time incurs additional costs and inefficiencies.
                </p>
                <p>
                  The existing dashboard{" "}
                  <u>only shows an overall percentage of accurate cases</u>.
                  Having visibility into inaccurate scheduled minutes will help
                  operating room directors manage OR capacity more effectively.
                </p>

                <Row className="justify-content-center">
                  <Col lg="10">
                    <div className="text-center">
                      <ImageBox
                        src={this.getImageUrl("existing-dashboard.png")}
                        alt="The existing dashboard for case length accuracy"
                        className="img-fluid"
                        showCaption={true}
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
                  Our users want to know {""}
                </span>
                “how much time a surgery needs”
              </h4>
            </Col>
          </Row>

          <Row className="justify-content-center">
            <Col lg="5" className="mb-2 mb-lg-0">
              <div className={sharedStyles.contentContainerSmall}>
                <p>
                  <b>Operating Room Leadership</b>
                </p>
                <p>
                  Our primary users — they want to know which surgeons tend to
                  schedule under or over time so that they can take appropriate
                  actions{" "}
                </p>
              </div>
            </Col>
            <Col lg="5" className="mb-2 mb-lg-0">
              <div className={sharedStyles.contentContainerSmall}>
                <p>
                  <b>Scheduling Staff (Clinic and Hospital)</b>
                </p>
                <p>
                  Our secondary users — they are unlikely to access this
                  dashboard directly, but having this data can help them
                  determine an accurate surgery time.{" "}
                </p>
              </div>
            </Col>
          </Row>

          <Row className="justify-content-center mt-4">
            <Col lg="10">
              <div className={sharedStyles.sectionContainer}>
                <h6 className={sharedStyles.categoryText}>Design</h6>
                <h3 className={sharedStyles.titleText}>Visualizing The Data</h3>
                <p>
                  The data team already prepared the data outlining the
                  procedure names, scheduled minutes, and actual minutes. My
                  task was to translate this data set into a visualization for
                  the analytics dashboard.
                </p>

                <Row className="justify-content-center">
                  <Col lg="10">
                    <div className="text-center">
                      <ImageBox
                        src={this.getImageUrl("raw-data.png")}
                        alt="Example of the dataset"
                        className="img-fluid"
                        showCaption={true}
                      />
                    </div>
                  </Col>
                </Row>

                <p className={sharedStyles.almostBlackP}>
                  <b>Exploring chart patterns</b>
                </p>
                <p className="mt-2">
                  The existing dashboard visualization includes line charts,
                  vertical and horizontal bar charts, as well as grouped bar
                  charts. I started exploring the visualization using those
                  types of graphs first.
                </p>
                <div
                  className={`${sharedStyles.contentContainerLeftAlign} mb-4`}
                >
                  <p className={sharedStyles.almostBlackP}>
                    <b>Bar and grouped bar charts</b>
                  </p>
                  <p>
                    While these graphs are simple, they don’t represent negative
                    values well. For this application, users perceive
                    “under-scheduled time” negatively, given its association
                    with insufficient surgery time, whereas “over-scheduled
                    time” is perceived positively as leftover time.
                  </p>
                  <Row className="justify-content-between mb-3">
                    <Col lg="6">
                      <p className={sharedStyles.pMtMb4}>
                        {" "}
                        ✅ Simple and versatile
                      </p>
                      <p className={sharedStyles.pMtMb4}>
                        ✅ Good for comparing values (Y<sub>1</sub>,Y
                        <sub>2</sub>,...) that belongs in the same category (X
                        <sub>1</sub>)
                      </p>
                    </Col>
                    <Col lg="6">
                      <p className={sharedStyles.pMtMb4}>
                        ❌ Not represent negative values well{" "}
                      </p>
                      <p className={sharedStyles.pMtMb4}>
                        ❌ Requires lots of space for a large set of data
                      </p>
                      <p className={sharedStyles.pMtMb4}>
                        ❌ Difficult to observe overall data trend
                      </p>
                    </Col>
                  </Row>

                  <Row className="justify-content-center text-center">
                    <Col lg="8">
                      <ImageBox
                        src={this.getImageUrl("bar-1.png")}
                        alt="Grouped vertical bar charts
                          "
                        className="img-fluid"
                        showCaption={true}
                      />
                    </Col>

                    <Col lg="8">
                      <ImageBox
                        src={this.getImageUrl("bar-2.png")}
                        alt="Grouped horizontal bar charts"
                        className="img-fluid"
                        showCaption={true}
                      />
                    </Col>

                    <Col lg="8">
                      <ImageBox
                        src={this.getImageUrl("bar-3.png")}
                        alt="Horizontal bar charts in a table"
                        className="img-fluid"
                        showCaption={true}
                      />
                    </Col>
                  </Row>
                </div>

                <div
                  className={`${sharedStyles.contentContainerLeftAlign} mb-4`}
                >
                  <p className={sharedStyles.almostBlackP}>
                    <b>Tornado (Butterfly) chart</b>
                  </p>
                  <p>
                    This chart can effectively visualize both negative and
                    positive valued data, aligning with user’s mental model of
                    the under and over-scheduled surgery time.{" "}
                  </p>
                  <Row className="justify-content-between mb-3">
                    <Col lg="6">
                      <p className={sharedStyles.pMtMb4}>
                        {" "}
                        ✅ Easy for a quick glance (overall data trend)
                      </p>
                      <p className={sharedStyles.pMtMb4}>
                        ✅ Great visual comparison between positive and negative
                        values
                      </p>
                    </Col>
                    <Col lg="6">
                      <p className={sharedStyles.pMtMb4}>
                        {" "}
                        ❌ Rely on user's knowledge to interpret the charts
                      </p>
                    </Col>
                  </Row>
                  <Row className="justify-content-center text-center">
                    <Col lg="8">
                      <ImageBox
                        src={this.getImageUrl("tornado.png")}
                        alt="Tornado chart illustrating under and over-scheduled time for each surgeon"
                        className="img-fluid"
                        showCaption={true}
                      />
                    </Col>
                  </Row>
                </div>
              </div>
            </Col>
          </Row>

          <Row className="justify-content-center">
            <Col lg="7">
              <h4 className={sharedStyles.highlightText}>
                <span className={sharedStyles.greyText}>
                  With the Tornado chart, users can{" "}
                </span>{" "}
                quickly identify where to pay attention.
              </h4>
            </Col>
          </Row>

          <Row className="justify-content-center">
            <Col lg="10">
              <div className={sharedStyles.sectionContainer}>
                <h6 className={sharedStyles.categoryText}>Design</h6>
                <h3 className={sharedStyles.titleText}>Final Design </h3>
                <p>
                  I tested the prototype with OR managers/directors and some
                  surgeons who regularly look at these metrics. The results were
                  very positive as users were excited to have access to this
                  type of information and the visualization helped them
                  interpret the information faster.
                </p>

                <Row className="justify-content-center">
                  <Col lg="10">
                    <div className="text-center">
                      <ImageBox
                        src={this.getImageUrl("analyze-final.gif")}
                        alt="Designs and Interactions in the Final Design"
                        className="img-fluid"
                        showCaption={true}
                      />
                    </div>
                  </Col>
                </Row>

                <Row className="justify-content-center">
                  <Col lg="12" className="mb-4">
                    <div className={sharedStyles.contentContainerLeftAlign}>
                      <Row className="justify-content- center">
                        <Col lg="6">
                          <ImageBox
                            src={this.getImageUrl("avg-filter.png")}
                            alt="Average view and total case filter"
                            className="img-fluid"
                            showCaption={false}
                          />
                        </Col>
                        <Col lg="6">
                          <p className="mb-0">
                            <b>Average view</b>
                          </p>
                          <p className="mt-2">
                            Having an average view helps users understand the
                            inaccuracy per case.
                            <br />
                            "On average, this surgeon tends to go over time
                            by... "
                          </p>
                          <p className="mb-0">
                            <b>Filter by total cases</b>
                          </p>
                          <p className="mt-2">
                            Being able to filter by the number of total cases
                            helps reduce noise and allow users to focus on what
                            they care about.
                            <br />
                          </p>
                        </Col>
                      </Row>
                    </div>
                  </Col>
                </Row>

                <Row className="justify-content-center">
                  <Col lg="12" className="mb-4">
                    <div className={sharedStyles.contentContainerLeftAlign}>
                      <Row className="justify-content- center">
                        <Col lg="6">
                          <ImageBox
                            src={this.getImageUrl("export.png")}
                            alt="Image, PDF, and CSV files"
                            className="img-fluid"
                            showCaption={false}
                          />
                        </Col>
                        <Col lg="6">
                          <p className="mb-0">
                            <b>Share and download</b>
                          </p>
                          <p className="mt-2">
                            Users can export, share, or download the report from
                            the dashboard in various formats, including image,
                            PDF, and CSV.
                          </p>
                        </Col>
                      </Row>
                    </div>
                  </Col>
                </Row>

                <Row className="justify-content-center">
                  <Col lg="12">
                    <div className={sharedStyles.contentContainerLeftAlign}>
                      <Row className="justify-content- center">
                        <Col lg="6">
                          <ImageBox
                            src={this.getImageUrl("case-form.png")}
                            alt="Integration with case form for scheduling workflow"
                            showCaption={false}
                            className="img-fluid"
                          />
                        </Col>
                        <Col lg="6">
                          <p className="mb-0">
                            <b>Integrating with scheduling workflow </b>
                          </p>
                          <p className="mt-2">
                            Leveraging case length accuracy data to make a
                            recommendation for a specific procedure when clinic
                            schedulers work on scheduling the surgery.
                          </p>
                        </Col>
                      </Row>
                    </div>
                  </Col>
                </Row>
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
  query HackerAppsQuery($path: String!) {
    allProjects: allProjectsJson {
      ...ProjectFields
    }
    project: allProjectsJson(filter: { url: { eq: $path } }) {
      ...ProjectFields
    }
    mainImage: file(relativePath: { eq: "analytics-dashboard/main.png" }) {
      ...ProjectMainImageSizes
    }
  }
`;
