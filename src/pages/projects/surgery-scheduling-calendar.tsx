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
                <h3 className={sharedStyles.titleText}>
                  What happened? Why is this project important?
                </h3>
                <p>
                  The scheduling tool is one of the company's core products and
                  used by 1000+ clinic and operating room (OR) schedulers to
                  coordinate surgery scheduling.
                </p>
                <p>
                  In early 2022, LeanTaaS launched a new workflow to support
                  wider use cases in surgery scheduling. However, onboarding
                  users to this new workflow has been challenging as many of
                  them found it difficult and inefficient compared to the
                  previous workflow.
                </p>
                <p>
                  By 2023, the scheduling team decided to revisit the workflow
                  to improve customer satisfaction and reduce company resources
                  spent on training and supporting the users.
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
                  <b>Clinic Schedulers are the primary user</b> of this tool.
                  They work with doctors, patients, and OR schedulers at
                  hospitals to coordinate surgery appointments.{" "}
                </p>
                <p>
                  I conducted an <b>ethnographic research </b> involving onsite
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
                <p>Quantitative data revealed that, on average,</p>
                <ul>
                  <li>
                    users spent nearly 5 minutes to complete the task
                    (successfully submit a request for a surgery appointment)
                  </li>
                  <li>
                    it took 1.5 minutes for users to just select a desired
                    appointment date
                  </li>
                </ul>
                <p>
                  I also learned from my research that surgeries are typically
                  scheduled a month in advance. Having to navigate through the
                  calendar week by week and waiting for the data to load
                  significantly slowed down users. The example below shows how
                  time consuming it could be for users keep clicking until they
                  find an available time (blue colored block).
                </p>

                <Row className="justify-content-center">
                  <Col lg="10">
                    <div className="text-center">
                      <ImageBox
                        src={this.getImageUrl("current-finding-time.gif")}
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
                  After running a heuristic evaluation, it became evident that
                  the existing interfaces were cluttered and lacked a structured
                  workflow, making it particularly challenging for users with
                  limited tech proficiency.
                </p>

                <p>
                  The workflow was designed to have users input search
                  parameters to find available time before selecting their
                  preferred type of time to schedule surgery. However, the
                  existing design requires the users to process information from
                  right to left, which runs counter to our natural inclination
                  to read from left to right.{" "}
                </p>

                <Row className="justify-content-center">
                  <Col lg="12">
                    <div className="text-center">
                      <ImageBox
                        src={this.getImageUrl("messy-screen.png")}
                        alt="Workflow and eye movements in the existing experience"
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
                  Surgery schedules, especially at academic or larger hospitals,
                  can be very chaotic. While this existing UI captured the
                  complex schedule, it failed to provide users with easy access
                  to the necessary information at a glance.
                </p>

                <p>
                  Even though users can hover over each item to view additional
                  information, this interaction can be cumbersome. Due to the
                  small size of each item, it often requires extra effort to
                  accurately hover over the intended item. Moreover, it's easy
                  to move away from the focused item, causing the tooltip to
                  disappear.
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
                  There are two types of time allocations in surgery scheduling:
                  open time and block time.
                  <ul>
                    <li> Open time is available first-come, first-served </li>
                    <li>
                      Block time is allocated to specific individuals or groups
                    </li>
                  </ul>
                </p>

                <div
                  className={`${sharedStyles.contentContainerLeftAlign} mt-4`}
                >
                  <p className={sharedStyles.almostBlackP}>
                    <b>Reducing infomation types and colors</b>
                  </p>

                  <p>
                    The existing tool organizes block times into individual,
                    service line, and group blocks. It also incorporates
                    scheduled surgeries and a 'set alert' function. This
                    approach results in <u>seven concepts and colors</u> in the
                    UI, leading to{" "}
                    <u>
                      visual clutter and overwhelming users with cognitive load
                    </u>{" "}
                    and contributing to Problem 2 (lack of clear guidance in
                    UI/Workflow).
                  </p>

                  <p>
                    Based on my research, clinic schedulers prioritize block
                    times before open time. They differentiate between
                    individual and shared blocks, but the{" "}
                    <u>
                      distinction between service line and group blocks isn't
                      crucial
                    </u>
                    . To simplify the interface and reduce information overload,{" "}
                    <u>
                      I combined service line and group blocks into one category
                      and removed the set alert feature
                    </u>{" "}
                    from this calendar.
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
                    slots for scheduling surgeries.
                  </p>
                  <p>
                    However,{" "}
                    <u>the existing system displays each block per OR room</u>.
                    Without knowing the room information, how are the clinic
                    schedulers supposed to make a decision on which one of these
                    blocks they should select?
                  </p>
                  <p>
                    This UI results in the issue outlined in Problem 3 (Poor
                    Readability and Visualization), causing confusion for our
                    users when trying to determine which item to select for
                    scheduling.
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
                    To reduce complexity, I proposed and verified the
                    feasibility of{" "}
                    <u>
                      consolidating the availability of blocks belonging to the
                      same service line or group
                    </u>
                    . This consolidation removes unnecessary complexity for the
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
                    After consolidating the shared blocks, I further simplified
                    the UI by{" "}
                    <u>
                      removing scheduled cases that belong to other surgeons in
                      the shared blocks
                    </u>{" "}
                    from this level of calendar as users mentioned they didn't
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
                  visualization, it still didn't solve all the Problems
                  mentioned in the beginning of the case study. Below are other
                  design decisions I made to address those problems.{" "}
                </p>

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
