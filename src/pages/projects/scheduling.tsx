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
              <h3>Context</h3>
              <p>
                In the US, clinics diagnose patients and schedule surgery
                appointments at hospitals using phone and fax.
              </p>
              <p>
                Many clinics have adopted LeanTaaS to send surgery requests
                online, but they still have to manually fax documents containing
                patient information to the hospitals.
              </p>
            </Col>
          </Row>

          <Row className="justify-content-center">
            <Col lg="6">
              <h3> The Problem & Goal</h3>
              <p>
                Case Scheduling was introduced as an add-on feature for
                healthcare providers to create, manage, send, and receive
                patient records electronically.{" "}
                <b>
                  However, not many customers sign up for this add-on feature,
                  likely due to its limited functionality.{" "}
                </b>
              </p>
              <p>
                One of our KPIs was to{" "}
                <b>increase case scheduling faeature adoption rate</b> by
                providing more the functionalities to the existing product.
              </p>
            </Col>
          </Row>

          <Row className="justify-content-center">
            <Col lg="8">
              <div className="text-center">
                <ImageBox
                  src={this.getImageUrl("current-product.png")}
                  alt=""
                  className="img-fluid"
                />
              </div>
            </Col>
          </Row>

          <Row className="justify-content-center">
            <Col lg="6">
              <h3>Research & Discovery</h3>

              <p>
                I <b>interviewed</b> 10+ groups of clinic, hospital, and
                pre-admission schedulers to understand their worlflows, needs,
                and pain points. I also <b>shadowed</b> {""}
                schedulers onsite to observe how they use our products and
                interact with different roles.
              </p>
              <p>
                Through this process, I learned that{" "}
                <b>surgery scheduling is much more complex</b>
                {""} than I had originally thought. Our{" "}
                <b>current product only covers a portion</b> of the entire
                workflow.
              </p>
            </Col>
          </Row>

          <Row className="justify-content-center">
            <Col lg="6">
              <h3>Mapping User Journey</h3>

              <p>
                I collaborated with the PMs to create a user journey map based
                on our research findings. This enabled our team to evaluate user
                experiences, pain points, and opportunities in each step of the
                workflow.
              </p>
              <p>
                We discovered through this exercise that majority of the pain
                points in surgery scheduling came from{" "}
                <b>
                  manual activities, coordination difficulties, duplicated work,
                  and delays caused by missing information.{" "}
                </b>
              </p>
              {/* <ul>
                <li>
                  <b>Manual and tedious activities</b> such as data collection
                  and phone calls
                </li>
                <li>
                  <b>Coordination difficulties</b> between different
                  stakeholders
                </li>
                <li>
                  Work interuptions or{" "}
                  <b>delays caused by communication or missing information</b>
                </li>
                <li>
                  <b>Duplicated work</b> due to non-standardized workflow and
                  the use of multiple software applications
                </li>
              </ul> */}
            </Col>
          </Row>

          <Row className="justify-content-center">
            <Col lg="10">
              <div className="text-center">
                <ImageBox
                  src={this.getImageUrl("journey-map.png")}
                  alt=""
                  className="img-fluid"
                />
              </div>
            </Col>
          </Row>

          {/* <Row className="justify-content-center">
            <Col lg="6" className={sharedStyles.creamBg}>
              <p>
                <span className={sharedStyles.bold}>
                  Clinics - orignial experience
                </span>
                <br />
                Clinic scheudlers can attach electronic case form, leave a
                message, and submit a request.
              </p>
              <div className="text-center">
                <ImageBox
                  src={this.getImageUrl("og-request.png")}
                  alt=""
                  className="img-fluid"
                />
              </div>
            </Col>
            <Col lg="6" className={sharedStyles.creamBg}>
              <p>
                <span className={sharedStyles.bold}>
                  Hospitals - original experience
                </span>
                <br />
                OR schedulers can review case information, request notes, and
                approve or deny the request.
              </p>
              <div className="text-center">
                <ImageBox
                  src={this.getImageUrl("og-review.png")}
                  alt=""
                  className="img-fluid"
                />
              </div>
            </Col>
          </Row> */}

          <Row className="justify-content-center">
            <Col lg="6">
              <h3>Roadmap Planning</h3>
              <p>
                Our long-term vision is to develop{" "}
                <b> patient care coordination software</b> {""}
                that streamlines all activites from patient experience to day-of
                surgery tasks.
              </p>
              <p>
                To add immediate value, our short-term vision focuses on {""}
                <b>
                  reducing manual process and improving coordination between
                  roles
                </b>
                .
              </p>
              <p>
                After brainstorming potential features with the PMs and
                validating the ideas with our users, we prioritized Comments
                feature for Q2, 2022 and Document upload feature for Q1, 2023.
              </p>
            </Col>
          </Row>

          <Row className="justify-content-center">
            <Col lg="10">
              <div className="text-center">
                <ImageBox
                  src={this.getImageUrl("workflow.png")}
                  alt=""
                  className="img-fluid"
                />
              </div>
            </Col>
          </Row>

          <Row className="justify-content-center">
            <Col lg="6">
              <h3>Comments Feature</h3>

              <p>
                Our research and validation showed that{" "}
                <b>
                  schedulers find it burdensome to rely on phone calls for
                  communication
                </b>
                . {""}
                They not only distract them from their current tasks, but also
                increase theur metal workload as they have to simultaneously
                process information while performing other tasks.
              </p>
              <p>
                In the ideation phase, I considered two different features:{" "}
              </p>
              <ul>
                <li>
                  <b>Chat box</b> provides a fast and efficient way for users to
                  communicate. Our users also reported to be familiar with other
                  chat box products available in the market.
                </li>
                <li>
                  <b>Comment thread</b> can be attached to objects like case
                  form, making it easy for users to refer to relevant
                  information.
                </li>
              </ul>
            </Col>
          </Row>

          <Row className="justify-content-center">
            <Col lg="8">
              <div className="text-center">
                <ImageBox
                  src={this.getImageUrl("chatbox-thread.png")}
                  alt=""
                  className="img-fluid"
                />
              </div>
            </Col>
          </Row>

          <Row className="justify-content-center">
            <Col lg="6">
              <p>
                When presented with both options, the{" "}
                <b>majority of users preferred the comment thread</b> option.
                Users didn’t expect immediate replies in everyday situation, but
                rather emphasized the importance of being able to identify
                objects associated with the comments and having visibility into
                the thread.
              </p>
            </Col>
          </Row>

          <Row className="justify-content-center">
            <Col lg="8">
              <div className="text-center">
                <ImageBox
                  src={this.getImageUrl("comment-final.png")}
                  alt=""
                  className="img-fluid"
                />
              </div>
            </Col>
          </Row>

          <Row className="justify-content-center">
            <Col lg="6">
              <h3>Document Upload Feature</h3>
              <p>
                During our research,{" "}
                <b>
                  document upload was the second most requested feature by our
                  users
                </b>{" "}
                as there are so many documents and paperwork involved in surgery
                scheduling process.
              </p>
              <p>
                Since I already introduced the drawer when designing the
                comments feture, I continued experimenting using the same
                component to handle the upload functionality.
              </p>
            </Col>
          </Row>

          <Row className="justify-content-center">
            <Col lg="8">
              <div className="text-center">
                <ImageBox
                  src={this.getImageUrl("doc-upload-options.png")}
                  alt=""
                  className="img-fluid"
                />
              </div>
            </Col>
          </Row>

          <Row className="justify-content-center">
            <Col lg="6">
              <p>
                I conducted usability testing on the document upload feature
                with side navigation with 7 schedulers.{" "}
                <b>
                  While all of them could succesfully upload the document, three
                  struggled when asked to view or post a comment.
                </b>{" "}
                Some of them even asked if the feature had been removed as they
                didn't see it on the screen.
              </p>
              <p>
                When presented with the other prototype,{" "}
                <b>
                  all users poitned out the explicit menu options and could
                  easily switch to the comment features
                </b>
                . Based on the test results and feedback received, I decided to
                discard the side navigation concenpt and instead use the
                existing tab component in the final design.
              </p>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col lg="12">
              <div className="text-center">
                <ImageBox
                  src={this.getImageUrl("doc-upload-final.png")}
                  alt=""
                  className="img-fluid"
                />
              </div>
            </Col>
            <Col lg="12">
              <div className="text-center">
                <ImageBox
                  src={this.getImageUrl("../asterisk.svg")}
                  alt=""
                  className="img-fluid"
                />
              </div>
            </Col>
          </Row>

          <Row className="justify-content-center">
            <Col lg="12">
              <h2 className={sharedStyles.others}>Other things I've designed at LeanTaaS</h2>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col md="6">
              <h3>Design System</h3>
              <p>
                Working collaboratively with designers and engineers to create
                component libraries and develop the company's first design
                system.
              </p>
            </Col>
            <Col md="6" lg={{ size: 5, offset: 1 }}>
              <ImageBox
                src={this.getImageUrl("ds.png")}
                alt=""
                className="img-fluid"
              />
            </Col>

          </Row>
          <Row className="justify-content-center">
            <Col md="6">
              <h3> Case Coordination Tool</h3>
              <p>
                Designing a customizable table for various roles to oversee and
                manage surgical cases. Users can filter the table, rearrange,
                show or hide columns, and edit information directly in the
                table.
              </p>
            </Col>
            <Col md="6" lg={{ size: 5, offset: 1 }} >
              <ImageBox
                src={this.getImageUrl("case-list.gif")}
                alt=""
                className="img-fluid"
              />
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col md="6">
              <h3>Analytics dashboard</h3>
              <p>
                Translating datasets form Tableau and designing data
                visualizations for case length accuracy. This information allows
                hospital management to optimize the scheduled surgery time.
              </p>
            </Col>
            <Col md="6" lg={{ size: 5, offset: 1 }}>
              <ImageBox
                src={this.getImageUrl("data.png")}
                alt=""
                className="img-fluid"
              />
            </Col>
          </Row>
          {/* <Row className="justify-content-center">
            <Col md="4" lg="4">
              <ImageBox
                src={this.getImageUrl("sample.png")}
                alt=""
                className="img-fluid"
              />
              <h3>Project Name</h3>
              <p>
                Brandi believes photos are metaphors, making the abstract
                concrete and mystifying the mundane. They believe photography is
                a conversation between the photographer, the subject, and those
                who will view these images for years to come. Brandi relishes in
                adding to the archive of humanity.
              </p>
            </Col>
            <Col md="4" lg="4">
              <ImageBox
                src={this.getImageUrl("sample.png")}
                alt=""
                className="img-fluid"
              />
              <h3>Project Name</h3>
              <p>
                Brandi believes photos are metaphors, making the abstract
                concrete and mystifying the mundane. They believe photography is
                a conversation between the photographer, the subject, and those
                who will view these images for years to come. Brandi relishes in
                adding to the archive of humanity.
              </p>
            </Col>
            <Col md="4" lg="4">
              <ImageBox
                src={this.getImageUrl("sample.png")}
                alt=""
                className="img-fluid"
              />
              <h3>Project Name</h3>
              <p>
                Brandi believes photos are metaphors, making the abstract
                concrete and mystifying the mundane. They believe photography is
                a conversation between the photographer, the subject, and those
                who will view these images for years to come. Brandi relishes in
                adding to the archive of humanity.
              </p>
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
    mainImage: file(relativePath: { eq: "scheduling/main.png" }) {
      ...ProjectMainImageSizes
    }
  }
`;
