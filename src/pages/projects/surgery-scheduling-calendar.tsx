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
    var currentProject = this.props.data.project.edges[0].node;
    return (
      <ProjectLayout
        allProjects={this.props.data.allProjects.edges.map((e) => e.node)}
        currentProject={this.props.data.project.edges[0].node}
        mainImage={this.props.data.mainImage}
        // mainImageOverrideUri={"/images/surgery-scheduling-calendar/main.gif"}
        disableHeader={false}
      >
        <Container>
          {/* <Row className="justify-content-center">
            <Col lg="10">
              <div className={sharedStyles.sectionContainer}>
                <h6 className={sharedStyles.categoryText}>Context</h6>
                <h3 className={sharedStyles.titleText}>Situation of Concern</h3>
                <p>
                  The scheduling tool is a core product for the company, used by
                  over 1000+ clinic and operating room (OR) schedulers to
                  coordinate surgery scheduling.
                </p>
                <p>
                  Since the launch in late 2021, onboarding users to this new
                  workflow has been challenging. As a result, the team decided
                  to revisit the workflow to improve customer satisfaction and
                  reduce resources spent on training and support.
                </p>
              </div>
            </Col>
          </Row> */}

          <Row className="justify-content-center">
            <Col lg="7">
              <h4 className={sharedStyles.highlightText}>
                Users found the existing scheduling workflow confusing and
                struggled to complete their tasks{" "}
                <span className={sharedStyles.greyText}>
                  {" "}
                  — they said “the tool slows me down”
                </span>{" "}
              </h4>
            </Col>
          </Row>

          <Row className="justify-content-center">
            <Col lg="10">
              <div className={sharedStyles.sectionContainer}>
                <h6 className={sharedStyles.categoryText}>Research</h6>
                <h3 className={sharedStyles.titleText}>The Users</h3>
                <p>
                  <u>Clinic Schedulers are the primary users</u> of this tool.
                  They work with doctors, patients, and OR schedulers at
                  hospitals to coordinate surgery appointments.{" "}
                </p>
                <p>
                  I conducted <u>ethnographic research</u> involving onsite
                  shadowing and user interviews, leading to an identification of
                  the following characteristics of this user group:
                </p>

                <Row className="justify-content-between">
                  <Col lg="4" className="mb-2 mb-lg-0">
                    <div className={sharedStyles.contentContainer}>
                      <p>
                        <b>Non-tech savvy</b>
                      </p>
                      <p>
                        {" "}
                        Older demographics, less familiar with technology and
                        digital interactions
                      </p>
                    </div>
                  </Col>
                  <Col lg="4" className="mb-2 mb-lg-0">
                    <div className={sharedStyles.contentContainer}>
                      <p>
                        <b>Busy and stressful job</b>
                      </p>
                      <p>
                        {" "}
                        Work with many doctors and responsible for scheduling
                        over 40 cases per week
                      </p>
                    </div>
                  </Col>
                  <Col lg="4" className="mb-2 mb-lg-0">
                    <div className={sharedStyles.contentContainer}>
                      <p>
                        <b>High turnover</b>
                      </p>
                      <p>
                        {" "}
                        Schedulers come and go, requiring frequent training and
                        support
                      </p>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>

          <Row className="justify-content-center">
            <Col lg="7">
              <h4 className={sharedStyles.highlightText}>
                <span className={sharedStyles.greyText}> Everyone said </span>{" "}
                “we need to improve the usability...”{" "}
                <span className={sharedStyles.greyText}>
                  {" "}
                  — but what were the issues and the root causes?{" "}
                </span>{" "}
              </h4>
            </Col>
          </Row>

          <Row className="justify-content-center">
            <Col lg="10">
              <div className={sharedStyles.sectionContainer}>
                <h6 className={sharedStyles.categoryText}>Research</h6>
                <h3 className={sharedStyles.titleText}>
                  Problem 1 – Difficult to search for available time{" "}
                </h3>
                <p>
                  On average, users spend almost 5 minutes to complete their
                  task, starting from the moment they search for available time
                  until they finalize and submit the surgery request.{" "}
                </p>

                <p>
                  From interviews, users typically schedule surgeries a month in
                  advance. Having to <u> navigate week by week </u> and{" "}
                  <u> waiting for the data to load </u> while trying to find
                  availability <u>significantly slows them down</u>.
                </p>

                <Row className="justify-content-center">
                  <Col lg="10">
                    <div className="text-center">
                      <ImageBox
                        src={this.getImageUrl("current-finding-time.gif")}
                        alt="Finding availability (blue block) in the existing experience"
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
            <Col lg="10">
              <div className={sharedStyles.sectionContainer}>
                <h6 className={sharedStyles.categoryText}>Research</h6>
                <h3 className={sharedStyles.titleText}>
                  Problem 2 – Cluttered interface and confusing workflow{" "}
                </h3>
                <p>
                  Users had a difficult time{" "}
                  <u>
                    processing overwhelming information and figuring out what to
                    do next{" "}
                  </u>{" "}
                  because of the cluttered UI. During onsite visits, I observed
                  many users staring at the screen and not knowing how to
                  proceed. Some hesitated to click around and explore the tool
                  due to fear of making mistakes.
                </p>

                <Row className="justify-content-center">
                  <Col lg="10">
                    <div className="text-center">
                      <ImageBox
                        src={this.getImageUrl("cluttered-ui.png")}
                        alt="Cluttered UI and lack of structured workflow in the existing design"
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
            <Col lg="10">
              <div className={sharedStyles.sectionContainer}>
                <h6 className={sharedStyles.categoryText}>Research</h6>
                <h3 className={sharedStyles.titleText}>
                  Problem 3 – Poor readability and visualization{" "}
                </h3>
                <p>
                  Surgery schedules can be very chaotic, and the existing design{" "}
                  <u>
                    fails to provide easy access to the necessary information
                  </u>{" "}
                  at a glance.
                </p>

                <p>
                  Even though users can rely on hover interaction to view
                  additional information,{" "}
                  <u>
                    extra effort is required to hover the intended item
                    accurately
                  </u>{" "}
                  because of its small size. The tooltip will also disappear
                  when users move away from the focused item.
                </p>

                <Row className="justify-content-center">
                  <Col lg="10">
                    <div className="text-center">
                      <ImageBox
                        src={this.getImageUrl("unreadable-blocks.png")}
                        alt="Poor readability and visualization of complex schedule"
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
                The goals{" "}
                <span className={sharedStyles.greyText}>
                  {" "}
                  — we want to streamline the scheduling workflow and achieve
                  the following outcomes...{" "}
                </span>{" "}
              </h4>
            </Col>
          </Row>

          <Row className="justify-content-center">
            <Col lg="3">
              <div className={sharedStyles.contentContainerSmall}>
                <p>
                  <b>Increase efficiency</b>
                </p>
                <p>Reduce task completion time from 5 minutes to 2.5 minutes</p>
              </div>
            </Col>
            <Col lg="3">
              <div className={sharedStyles.contentContainerSmall}>
                <p>
                  <b>Improve customer satisfaction</b>
                </p>
                <p>Reduce the number of support tickets by 50% </p>
              </div>
            </Col>
            <Col lg="3">
              <div className={sharedStyles.contentContainerSmall}>
                <p className="text-center">
                  <b>Reduce support cost</b>
                </p>
                <p className="text-center">
                  Reduce the number of trips for in-person training by 25%
                </p>
              </div>
            </Col>
          </Row>

          <Row className="justify-content-center">
            <Col lg="7">
              <h4 className={sharedStyles.highlightText}>
                <span className={sharedStyles.greyText}> Some key</span> design
                decisions{" "}
                <span className={sharedStyles.greyText}> I made 🧐 </span>{" "}
              </h4>
            </Col>
          </Row>

          <Row className="justify-content-center">
            <Col lg="10">
              <div className={sharedStyles.sectionContainer}>
                <h6 className={sharedStyles.categoryText}>
                  Solving the Problems
                </h6>
                <h3 className={sharedStyles.titleText}>
                  Quick fix - increasing affordance{" "}
                </h3>
                <p>
                  I learned from my research that scheduling took a lot of time
                  because users were confused by the interface and struggled to
                  understand what actions they needed to take to complete their
                  tasks.
                </p>

                <p>
                  To mitigate the usability issues, I proposed a quick fix to
                  the team to eliminate the cluttered interface and increase the
                  affordance of the time selection control.
                </p>

                <p>
                  In the new design, I replaced the dropdown with a button
                  component for the time selection control to better signal the
                  users that they could select one of the time options to
                  finalize the surgery start time. I also decluttered the UI by
                  displaying only the item associated with the selected time
                  option.
                </p>

                <Row className="justify-content-center">
                  <Col lg="10">
                    <div className="text-center">
                      <ImageBox
                        src={this.getImageUrl("quick-fix.png")}
                        alt="Fixing the cluttered UI & low affordance component "
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
            <Col lg="10">
              <div className={sharedStyles.sectionContainer}>
                <h6 className={sharedStyles.categoryText}>
                  Solving The Problems{" "}
                </h6>
                <h3 className={sharedStyles.titleText}>
                  Designing the right calendar{" "}
                </h3>
                <p>
                  While quick fixes can address some usability issues, they
                  can't solve all major pain points. As a result, I started
                  exploring different ways to make scheduling faster and easier
                  for our users.
                </p>

                <div
                  className={`${sharedStyles.contentContainerLeftAlign} mb-4`}
                >
                  <p className={sharedStyles.almostBlackP}>
                    <b>Weekly vs. Monthly Calendar</b>
                  </p>
                  <p>
                    The existing week-view calendar cannot offer an immediate
                    overview of availability, which prevents users from quickly
                    achieving their goals.
                  </p>
                  <p>
                    To address this issue, I designed a month-view calendar that
                    would project a high-level availability to the users,
                    enabling them to quickly select a surgery date and complete
                    their task.
                  </p>
                  <Row className="justify-content-center">
                    <Col lg="6">
                      <p className="mb-0">
                        <b>Weekly Calendar</b>
                      </p>
                      <div className="text-left">
                        <ImageBox
                          src={this.getImageUrl("week-view-new.png")}
                          alt="Week-view Calendar"
                          className="img-fluid"
                          showCaption={false}
                        />
                      </div>
                      <p>
                        I explored designs for weekly calendar but couldn't
                        solve the existing Problems. After all, it{" "}
                        <u>was not</u> the best option for finding availability.
                      </p>
                    </Col>
                    <Col lg="6">
                      <p className="mb-0">
                        <b>Monthly Calendar</b>
                      </p>
                      <div className="text-left">
                        <ImageBox
                          src={this.getImageUrl("month-view-new.png")}
                          alt="Month-view Calendar (proposal)"
                          className="img-fluid"
                          showCaption={false}
                        />
                      </div>
                      <p>
                        ✅ Monthly calendar addresses the Problems well and is
                        ideal for projecting overall availability and showing
                        minimal information.
                      </p>
                    </Col>
                  </Row>
                </div>

                <div
                  className={`${sharedStyles.contentContainerLeftAlign}`}
                >
                  <p className={sharedStyles.almostBlackP}>
                    <b>Vertical vs. Horizontal Layout</b>
                  </p>
                  <p>
                    After selecting a desired date, users will land on a
                    day-view calendar where they can see their schedule and
                    finalize the request. The existing design has many
                    visualization and readability issues, which will be
                    addressed in this step.{" "}
                  </p>
                  <p>
                    I only considered a vertical layout in the first design
                    iteration. I started exploring a horizontal layout after
                    running into the readability issue with the vertical layout
                    when the schedule got complex.
                  </p>
                  <Row className="justify-content-center">
                    <Col lg="6">
                      <p className="mb-0">
                        <b>Vertical Layout</b>
                      </p>
                      <div className="text-left">
                        <ImageBox
                          src={this.getImageUrl("vertical.png")}
                          alt="Verical Layout Day-view Calendar"
                          className="img-fluid"
                          showCaption={false}
                        />
                      </div>
                      <p>
                        I refreshed the vertical layout design. Although many
                        issues were already addressed previously, I still ran
                        into readability issues with busy and complex schedules.
                      </p>
                    </Col>
                    <Col lg="6">
                      <p className="mb-0">
                        <b>Horizontal Layout</b>
                      </p>
                      <div className="text-left">
                        <ImageBox
                          src={this.getImageUrl("horizontal.png")}
                          alt="Horizontal Layout Day-view Calendar"
                          className="img-fluid"
                          showCaption={false}
                        />
                      </div>
                      <p>
                        ✅ I designed the horizontal layout from scratch. This
                        layout handles complex schedules well and improves
                        readability.
                      </p>
                    </Col>
                  </Row>
                </div>
              </div>
            </Col>
          </Row>

          <Row className="justify-content-center">
            <Col lg="10">
              <div className={sharedStyles.sectionContainer}>
                <h6 className={sharedStyles.categoryText}>Design</h6>
                <h3 className={sharedStyles.titleText}>Final Design </h3>
                <p>
                  I collaborated closely with the product manager and engineers
                  to finalize the scope for the first release.
                </p>

                <Row className="justify-content-center">
                  <Col lg="10">
                    <div className="text-center">
                      <ImageBox
                        src={this.getImageUrl("calendar-final.gif")}
                        alt="Design and interactions in the final design"
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
                            src={this.getImageUrl("final-month.png")}
                            alt="Average view and total case filter"
                            className="img-fluid"
                            showCaption={false}
                          />
                        </Col>
                        <Col lg="6">
                          <p className="mb-0">
                            <b>Month view availability</b>
                          </p>
                          <p className="mt-2">
                            The month view offers a high-level overview of
                            availability, allowing users to quickly find
                            available times. I also revamped the information
                            architecture and visual components of the new design
                            to reduce information clutter and cognitive
                            workload.
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
                            src={this.getImageUrl("vertical-layout.png")}
                            alt="Integration with case form for scheduling workflow"
                            showCaption={false}
                            className="img-fluid"
                          />
                        </Col>

                        <Col lg="6">
                          <p className="mb-0">
                            <b>Vertical layout</b>
                          </p>
                          <p className="mt-2">
                            While horizontal layout could handle complex
                            schedule better, it'll take a lot more effort for
                            engineers to implement. Given the time constraint,
                            my team decided to proceed with the vertical layout.
                          </p>
                          <p>
                            To avoid readability issues, I clearly labeled and
                            organized information on the page. I also worked
                            closely with the engineers to ensure a smooth
                            implementation of the new day view visualization.
                          </p>
                        </Col>
                      </Row>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>

          <Row className="justify-content-center">
            <Col lg="10">
              <div className={sharedStyles.sectionContainer}>
                <h6 className={sharedStyles.categoryText}>Design</h6>
                <h3 className={sharedStyles.titleText}>Future Improvements </h3>
                <p>
                  After launching the first version, I was able to gather user
                  feedback and identify areas for future improvements.
                </p>

                <div
                  className={`${sharedStyles.contentContainerLeftAlign} mb-4`}
                >
                  <p className={sharedStyles.almostBlackP}>
                    <b>Adding a scheduled case tag</b>
                  </p>
                  <p>
                    Users often try to schedule surgery on the same day that the
                    surgeon already has another surgery. To help the users make
                    faster decisions when selecting a surgery date, I added a
                    tag that displays the number of scheduled cases on each
                    calendar date.
                  </p>

                  <Row className="justify-content-center">
                    <Col lg="10">
                      <div className="text-center">
                        <ImageBox
                          src={this.getImageUrl("scheduled-tag.png")}
                          alt="Vertical Layout Day-view Calendar"
                          className="img-fluid"
                          showCaption={true}
                        />
                      </div>
                    </Col>
                  </Row>
                </div>

                <div
                  className={`${sharedStyles.contentContainerLeftAlign}`}
                >
                  <p className={sharedStyles.almostBlackP}>
                    <b>Scrollable calendar</b>
                  </p>
                  <p>
                  In the first version, the month calendar only displayed dates until the end of the month. Users had to use a month picker at the top of the page to switch to a new month, which could slow them down, especially when it was close to the end of the month with only a few days left. 
                  </p>

                  <p>
                  To make the user experience more seamless, I designed a scrollable calendar so users can continue browsing available times in the future without having to click to switch months.
                  </p>

                  <Row className="justify-content-center">
                    <Col lg="10">
                      <div className="text-center">
                        <ImageBox
                          src={this.getImageUrl("scrollable-calendar.gif")}
                          alt="Scrollable month calendar"
                          className="img-fluid"
                          showCaption={true}
                        />
                      </div>
                    </Col>
                  </Row>
                </div>

              </div>
            </Col>
          </Row>

          {/* page container */}
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
    mainImage: file(
      relativePath: { eq: "surgery-scheduling-calendar/main.png" }
    ) {
      ...ProjectMainImageSizes
    }
  }
`;
