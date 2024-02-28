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
        mainImageOverrideUri={"/images/surgery-scheduling-calendar/main.gif"}
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
                  <u>Clinic Schedulers are the primary user</u> of this tool.
                  They work with doctors, patients, and OR schedulers at
                  hospitals to coordinate surgery appointments.{" "}
                </p>
                <p>
                  I conducted an <u>ethnographic research</u> involving onsite
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
            <Col lg="3" className="mb-2 mb-lg-0">
              <div className={sharedStyles.contentContainerSmall}>
                <p>
                  <b>Increase efficiency</b>
                </p>
                <p>Reduce task completion time from 5 minutes to 3 minutes</p>
              </div>
            </Col>
            <Col lg="3" className="mb-2 mb-lg-0">
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
                    shared blocks,{" "}
                    <u>
                      they don't need to distinguish between the service line
                      and group blocks
                    </u>
                    . I combined service line and group blocks into one category
                    and removed the set alert feature from this calendar to
                    simplify the experience.
                  </p>

                  <Row className="justify-content-between">
                    <Col lg="6">
                      <p className="mb-0">
                        <b>Before</b>
                      </p>
                      <ImageBox
                        src={this.getImageUrl("color-labels.png")}
                        alt="7 information types and colors in the UI"
                        className="img-fluid"
                      />
                    </Col>

                    <Col lg="6">
                      <p className="mb-0">
                        <b>After</b>
                      </p>
                      <ImageBox
                        src={this.getImageUrl("reduced-colors.png")}
                        alt="5 information types and colors in the UI"
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
                    I proposed and verified the feasibility of{" "}
                    <u>
                      consolidating the availability of blocks belonging to the
                      same service line or group
                    </u>
                    . This removes unnecessary complexity from the users and
                    streamlines visualization in the calendar, making it easier
                    to take appropriate actions.
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
                    I further simplified the UI by{" "}
                    <u>
                      removing scheduled cases of other surgeons in the shared
                      blocks
                    </u>{" "}
                    from the calendar, as users mentioned they didn't need to
                    see the information in this step.
                  </p>
                  <Row className="justify-content-between">
                    <Col lg="6">
                      <p className="mb-0">
                        <b>Before</b>
                      </p>
                      <ImageBox
                        src={this.getImageUrl("color-labels.png")}
                        alt="Cluttered UI before the redesign"
                        className="img-fluid"
                      />
                    </Col>

                    <Col lg="6">
                      <p className="mb-0">
                        <b>After</b>
                      </p>
                      <ImageBox
                        src={this.getImageUrl("final-reduction.png")}
                        alt="Cleaner UI after the redesign"
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
                        <b>Montly Calendar</b>
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
                  className={`${sharedStyles.contentContainerLeftAlign} mb-4`}
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
                    keeping running into the readability issue with the vertical
                    layout when the schedule got complex.
                  </p>
                  <Row className="justify-content-center">
                    <Col lg="6">
                      <p className="mb-0">
                        <b>Verical Layout</b>
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
                        <b>Horizotal Layout</b>
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
                        layout handles complex schedule well and improves the
                        readability.
                      </p>
                    </Col>
                  </Row>
                </div>
              </div>
            </Col>
          </Row>

          {/* <Row className="justify-content-center">
            <Col lg="10 mt-4">
              <div className={sharedStyles.sectionContainer}>
                <h6 className={sharedStyles.categoryText}>
                  Validating the Design
                </h6>
                <h3 className={sharedStyles.titleText}>
                  Getting Feedback & Testing
                </h3>
                <p>
                  Because this is a big project, I put a lot of emphasis on the
                  iterative design process. I broke the project down into
                  smaller parts, validated my designs, and collected customer
                  feedback throughout the process.
                </p>

                <p className={sharedStyles.almostBlackP}>
                  <b>Pendo In-App Survey</b>
                </p>
                <p className="mt-2">
                  I utilized the Pendo In-App Survey to get feedback on simple
                  concepts from a smaller group of customers. Before redesigning
                  the entire calendar, I made smaller design changes (time
                  selector) and gathered user feedback through this survey.
                </p>

                <p>
                  This same method was also used to validate that customers would benefit 
                  from finding time in the montly view calendar > weekly view calendar.
                </p>

                <Row className="justify-content-center">
                  <Col lg="10" className="text-center">
                    <ImageBox
                      src={this.getImageUrl("pendo-survey.png")}
                      alt="Example - Pendo Survey"
                      className="img-fluid"
                      showCaption={true}
                    />
                  </Col>
                </Row>

                
                <p className={sharedStyles.almostBlackP}>
                  <b>User Interview & Usability Testing</b>
                </p>
                <p className="mt-2">
                  Most of my designs are validated and tested through this method. 
                  I'd present a prototype either in-person or in an online meeting and ask users to describe what they saw and explain how they would use the product.
                  For this project, I used this method to test the block consolidation idea as well as the final prototype.
                </p>
                
              </div>
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
    mainImage: file(
      relativePath: { eq: "surgery-scheduling-calendar/main.png" }
    ) {
      ...ProjectMainImageSizes
    }
  }
`;
