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
          </Row>

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
                  <u>Clinic Schedulers are the primary user</u> of this tool.
                  They work with doctors, patients, and OR schedulers at
                  hospitals to coordinate surgery appointments.{" "}
                </p>
                <p>
                  I conducted an <u>ethnographic research</u> involving onsite
                  shadowing and user interviews, leading to an identification of
                  the following characteristics of this user group:.
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
                  — but why and how?{" "}
                </span>{" "}
              </h4>
            </Col>
          </Row>

          <Row className="justify-content-center">
            <Col lg="10">
              <div className={sharedStyles.sectionContainer}>
                <h6 className={sharedStyles.categoryText}>Research</h6>
                <h3 className={sharedStyles.titleText}>
                  Problem 1 – Finding available time takes too long{" "}
                </h3>
                <p>
                  The data revealed that, on average,{" "}
                  <u>users spend almost 5 minutes to complete the task</u>. They
                  spent an average of 1.5 minute alone to select a desired
                  appointment date.
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

          <Row className="justify-content-center mt-4">
            <Col lg="10">
              <div className={sharedStyles.sectionContainer}>
                <h6 className={sharedStyles.categoryText}>Research</h6>
                <h3 className={sharedStyles.titleText}>
                  Problem 2 – Workflow/UI lacks of clear guidance{" "}
                </h3>
                <p>
                  Users struggled with the existing experience. During onsite
                  visits, I observed many user staring at the screen and not
                  knowing how to proceed. Some hesitated to click around and
                  explore the tool due to fear of making mistakes.
                </p>
                <p>
                  The workflow expects users to input search parameters to find
                  available time before selecting the time type. However, the
                  existing design requires users to process information right to
                  left,{" "}
                  <u>
                    contradicting our natural inclination to read from left to
                    right
                  </u>
                  .
                </p>

                <Row className="justify-content-center">
                  <Col lg="12">
                    <div className="text-center">
                      <ImageBox
                        src={this.getImageUrl("messy-screen.png")}
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

          <Row className="justify-content-center mt-4">
            <Col lg="10">
              <div className={sharedStyles.sectionContainer}>
                <h6 className={sharedStyles.categoryText}>Research</h6>
                <h3 className={sharedStyles.titleText}>
                  Problem 3 – Poor readability and visualization{" "}
                </h3>
                <p>
                  Surgery schedules can be very chaotic, and the existing design
                  &nbsp;
                  <u>
                    fails to provide easy access to the necessary information
                  </u>{" "}
                  at a glance.
                </p>

                <p>
                  Even though users can rely on hover interaction to view
                  additional information, it{" "}
                  <u>requires extra effort to accurately hover</u> over the
                  intended item because of its small size. The tooltip will also
                  disappear when users move away from the focused item.
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
                  the following outcomes:{" "}
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
                <p>Reduce task completion time from 5 minutes to 3 minutes</p>
              </div>
            </Col>
            <Col lg="3">
              <div className={sharedStyles.contentContainerSmall}>
                <p>
                  <b>Improve customer satisfaction</b>
                </p>
                <p>Reduce number of support tickets by 50% </p>
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
                Displaying lots of information in the most simple way{" "}
                <span className={sharedStyles.greyText}>
                  {" "}
                  was the biggest design challenge.{" "}
                </span>{" "}
              </h4>
            </Col>
          </Row>

          <Row className="justify-content-center">
            <Col lg="10">
              <div className={sharedStyles.sectionContainer}>
                <h6 className={sharedStyles.categoryText}>
                  Solving The Problems
                </h6>
                <h3 className={sharedStyles.titleText}>
                  Reducing Cognitive Workload{" "}
                </h3>
                <p>
                  Open time and block time are two common types of time
                  allocation in surgery scheduling. Open time is first-come,
                  first served while block time is allocated to a specific
                  individual or group.
                </p>

                <div
                  className={`${sharedStyles.contentContainerLeftAlign} mt-4`}
                >
                  <p className={sharedStyles.almostBlackP}>
                    <b>Reducing infomation types and colors</b>
                  </p>

                  <p>
                    The existing tool categorizes block times into individual,
                    service line, and group blocks. Scheduled surgeries and a
                    'set alert' function are also visible.{" "}
                    <u>
                      These visual clutters overwhelm users with cognitive load
                    </u>
                    .
                  </p>

                  <p>
                    While users need to differentiate between individual and
                    shared blocks, <u>they don't need to distinguish between the
                    service line and group blocks</u>. I combined service line and
                    group blocks into one category and removed the set alert
                    feature from this calendar to simplify the experience.
                  </p>

                  <Row className="justify-content-between">
                    <Col lg="6">
                      <ImageBox
                        src={this.getImageUrl("color-labels.png")}
                        alt="Before – 7 concepts and colors in the UI"
                        className="img-fluid"
                      />
                    </Col>

                    <Col lg="6">
                      <ImageBox
                        src={this.getImageUrl("reduced-colors.png")}
                        alt="After – 5 concepts and colors in the UI"
                        className="img-fluid"
                      />
                    </Col>
                  </Row>
                </div>

                <div
                  className={`${sharedStyles.contentContainerLeftAlign} mt-3`}
                >
                  <p className={sharedStyles.almostBlackP}>
                    <b>Eliminating unnecessary complexity</b>
                  </p>
                  <p>
                    Academic and larger hospitals often reserve multiple OR
                    rooms for shared blocks. While this room-specific
                    information is crucial for hospital schedulers, clinic
                    schedulers are more concerned with finding available time
                    slots.
                  </p>
                  <p>
                    However,{" "}
                    <u>the existing system displays each block per OR room</u>.
                    Without knowing the room information, how are the clinic
                    schedulers supposed to make a decision on which one of these
                    blocks they should select?
                  </p>

                  <Row className="justify-content-center">
                    <Col lg="12">
                      <div className="text-center">
                        <ImageBox
                          src={this.getImageUrl("avaialbility-and-room.png")}
                          alt="Display of block per room in the existing system"
                          className="img-fluid"
                          showCaption={true}
                        />
                      </div>
                    </Col>
                  </Row>
                  <p>
                    I proposed and verified the
                    feasibility of{" "}
                    <u>
                      consolidating the availability of blocks belonging to the
                      same service line or group
                    </u>
                    . This removes unnecessary complexity from the
                    users and streamlines visualization in the calendar, making
                    it easier to take appropriate actions.
                  </p>

                  {/* <p>
                  <b>Note - </b>the image below is only for demonstrating the
                  idea of consolidating availability and how it would reflect in
                  the visualization of the calendar compared to the existing
                  visualization in the previous image.
                </p> */}

                  <Row className="justify-content-center">
                    <Col lg="12">
                      <div className="text-center">
                        <ImageBox
                          src={this.getImageUrl("consolidate-availability.png")}
                          alt="Removing complexity by consolidating availability of the same block"
                          className="img-fluid"
                          showCaption={true}
                        />
                      </div>
                    </Col>
                  </Row>

                  <p>
                    I further simplified
                    the UI by{" "}
                    <u>
                      removing scheduled cases of other surgeons in
                      the shared blocks
                    </u>{" "}
                    from the calendar, as users mentioned they didn't
                    need to see the information in this step.
                  </p>
                  <Row className="justify-content-between">
                    <Col lg="6">
                      <ImageBox
                        src={this.getImageUrl("color-labels.png")}
                        alt="Before – Cluttered UI before the redesign"
                        className="img-fluid"
                      />
                    </Col>

                    <Col lg="6">
                      <ImageBox
                        src={this.getImageUrl("final-reduction.png")}
                        alt="After – Cleaner UI after the redesign"
                        className="img-fluid"
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
                <span className={sharedStyles.greyText}> Some keys </span>{" "}
                design decisions{" "}
                <span className={sharedStyles.greyText}> I made 🧐 </span>{" "}
              </h4>
            </Col>
          </Row>

          <Row className="justify-content-center mt-4">
            <Col lg="10">
              <div className={sharedStyles.sectionContainer}>
                <h6 className={sharedStyles.categoryText}>
                  Solving The Problems{" "}
                </h6>
                <h3 className={sharedStyles.titleText}>
                  Designing the right calendar{" "}
                </h3>
                <p>
                  While the effort above helped simplify the complexity and the
                  visualization, it still didn't solve all the idenified
                  Problems. Below are other design decisions I made to address
                  those problems.{" "}
                </p>

                <div
                  className={`${sharedStyles.contentContainerLeftAlign} mb-4`}
                >
                  <p className={sharedStyles.almostBlackP}>
                    <b>Week vs. Month Calendar</b>
                  </p>
                  <p>
                    Finding availability is a critical step for our users to
                    complete their tasks. Unfortunately, the week-view calendar
                    in the existing tool cannot provide a comprehensive overview
                    of availability at a glance, resulting in an inefficient
                    workflow and other issues outlined in Problem 1.
                  </p>
                  <p>
                    In contrast, a month-view calendar can be a promising design
                    option for this use case. It offers a high-level perspective
                    of availabilities, allowing users to promptly access the
                    information they need to select a desired date for a surgery
                    appointment.
                  </p>
                  <Row className="justify-content-center">
                    <Col lg="6">
                      <div className="text-left">
                        <ImageBox
                          src={this.getImageUrl("workflow.png")}
                          alt="Week view option (existing)"
                          className="img-fluid"
                          showCaption={true}
                        />
                      </div>
                    </Col>
                    <Col lg="6">
                      <div className="text-left">
                        <ImageBox
                          src={this.getImageUrl("workflow.png")}
                          alt="✅ Month view (proposal)"
                          className="img-fluid"
                          showCaption={true}
                        />
                      </div>
                    </Col>
                  </Row>
                </div>

                <p className={sharedStyles.almostBlackP}>
                  <b>Week vs. Month Calendar</b>
                </p>
                <p className="mt-2">
                  Finding availability is a critical step for our users to
                  complete their tasks. Unfortunately, the week-view calendar in
                  the existing tool cannot provide a comprehensive overview of
                  availability at a glance, resulting in an inefficient workflow
                  and other issues outlined in Problem 1.{" "}
                </p>

                <p>
                  In contrast, a month-view calendar can be a promising design
                  option for this use case. It offers a high-level perspective
                  of availabilities, allowing users to promptly access the
                  information they need to select a desired date for a surgery
                  appointment.{" "}
                </p>

                <Row className="justify-content-center">
                  <Col lg="6">
                    <div className="text-left">
                      <ImageBox
                        src={this.getImageUrl("workflow.png")}
                        alt="Week view option (existing)"
                        className="img-fluid"
                        showCaption={true}
                      />
                    </div>
                  </Col>
                  <Col lg="6">
                    <div className="text-left">
                      <ImageBox
                        src={this.getImageUrl("workflow.png")}
                        alt="✅ Month view (proposal)"
                        className="img-fluid"
                        showCaption={true}
                      />
                    </div>
                  </Col>
                </Row>
                <p className={sharedStyles.almostBlackP}>
                  <b>
                    Displaying Information in the Month Calendar (Options &
                    Iterations){" "}
                  </b>
                </p>
                <p className="mt-2">Lorem</p>

                <Row className="justify-content-center">
                  <Col lg="10">
                    <div className="text-center">
                      <ImageBox
                        src={this.getImageUrl("workflow.png")}
                        alt="Finding availability week by week in the existing experience"
                        className="img-fluid"
                        showCaption={true}
                      />
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
  query ThematicQuery($path: String!) {
    allProjects: allProjectsJson {
      ...ProjectFields
    }
    project: allProjectsJson(filter: { url: { eq: $path } }) {
      ...ProjectFields
    }
    mainImage: file(relativePath: { eq: "scheduling/main.png" }) {
      ...ProjectMainImageSizes
    }
  }
`;
