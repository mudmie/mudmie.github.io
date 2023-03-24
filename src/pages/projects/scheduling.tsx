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
            <Col lg="4">
              <h3>Overview</h3>
            </Col>
            <Col lg="8">
              <p>
                <span className={sharedStyles.topicRight}>Company</span>
                <br />
                LeanTaas offers a range of solutions from analytics dashboard,
                surgical scheduling, and staff management tools to optimize
                healthcare operations.
              </p>
              <p>
                <span className={sharedStyles.topicRight}>
                  My Role &amp; Project
                </span>
                <br />I partnered with PMs to discover problems and plan the
                product roadmap. I led the design of the{" "}
                <span className={sharedStyles.bold}>
                  {" "}
                  Comments and Document Upload features
                </span>
                {""} from research to prototyping, and testing.
              </p>
              <p>
                <span className={sharedStyles.topicRight}>Result</span>
                <br />
                185% increase in feature adoption — 15 health systems signed
                contracts to integrate the case scheduling module into their
                workflow.{" "}
              </p>
            </Col>
          </Row>

          <Row className="justify-content-center">
            <Col lg="4">
              <h3>Context</h3>
            </Col>
            <Col lg="8">
              <p>
                In the US, patients get diagnosed at clinics then visit
                hospitals for medical procedures. Since clinics typically don't
                have access to electronic health record (EHR), they rely on
                phone and fax to shcdule surgeries.
              </p>
              <p>
                Hospitals have adopted LeanTaaS scheduling tool to enable their
                partnered clinics to request surgery appointment online.
                However, clinics still have to manually fax documents containing
                protected health information (PHI) to the hospital.
              </p>
            </Col>
          </Row>

          <Row className="justify-content-center">
            <Col lg="4">
              <h3>Current product</h3>
            </Col>
            <Col lg="8">
              <p>
                To improve the process and avoid PHI leaks, case management tool
                is introduced as an add-on feature for healthcare providers to
                create, manage, send, and receive patient records
                electronically. Unfortunately, not a lot of customers sign up
                for this add-on feature.
              </p>
              <p className={sharedStyles.pin}>
                {" "}
                <span className={sharedStyles.bold}>Problem & Goal</span>
                <br />
                The low adoption rate is likely due to the feature’s limited
                functionality, and we want to increase feature adoption rate by
                adding more functionalities to this add-on feature.
              </p>
            </Col>
          </Row>

          <Row className="justify-content-center">
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
          </Row>

          <Row className="justify-content-center">
            <Col lg="4">
              <h3>Research & Discovery</h3>
            </Col>
            <Col lg="8">
              <p>
                <span className={sharedStyles.topicRight}>Onsite Visits</span>
                <br />
                Since I'm completely new to the healthcare industry, I vistied
                multiple clinics and hospitals to learn about our users and
                their daily workflow. I shadowed schedulers in various
                departments to see how they use our products and interact with
                different roles.
              </p>
              <p>
                <span className={sharedStyles.topicRight}> Interview</span>
                <br />I conducted user interviews both in-person and online with
                10+ groups of clinic, hospital, and pre-admission schedulers.
                Through these interviews, I was able to learn about their
                workflows, needs, and pain points.
              </p>
              <p className={sharedStyles.pin}>
                {" "}
                <span className={sharedStyles.bold}>Learnings</span>
                <br />
                Surgery scheduling process is way more complicated than what I
                understood. Our software only covers a portion of the entire
                workflow.
              </p>
            </Col>
          </Row>

          <Row className="justify-content-center">
            <Col lg="12" className={sharedStyles.creamBg}>
              <p>
                <span className={sharedStyles.bold}>User Journey Map</span>
                <br />
                Developed after putting together findings from the research &
                discovery process to evaluate user experiences in each step of
                their workflow.
              </p>
              <div className="text-center">
                <ImageBox
                  src={this.getImageUrl("journey-map.png")}
                  alt=""
                  className="img-fluid"
                />
              </div>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col lg="4">
              <h3>Roadmap Planning</h3>
            </Col>
            <Col lg="8">
              <p>
                I simplified a complex journey map into a single workflow
                diagram and partnered with the PMs to plan the visions for our
                product.
              </p>
            </Col>
          </Row>

          <Row className="justify-content-center">
            <Col lg="12" className={sharedStyles.creamBg}>
              <p>
                <span className={sharedStyles.bold}>Long-term Vision</span>
                <br />
                Ultimately, we want to build patient care coordination software
                for healthcare providers by synchronizing all activities
                including insurance management, scheduling surgery and lab
                tests, vendor coordination, and day-of-surgery tasks.{" "}
              </p>
              <ImageBox
                src={this.getImageUrl("simplified.png")}
                alt=""
                className="img-fluid"
              />
            </Col>
          </Row>

          <Row className="justify-content-center">
            <Col lg="12" className={sharedStyles.creamBg}>
              <p>
                <span className={sharedStyles.bold}>Short-term planning</span>
                <br />
                To add immediate value to the existing add-on feature, we
                decided to focus on improving communication and digitizing
                manual work in the scheduling process.
              </p>
              <ImageBox
                src={this.getImageUrl("milestone.png")}
                alt=""
                className="img-fluid"
              />
            </Col>
          </Row>

          <Row className="justify-content-center">
            <Col lg="4">
              <h3>Comments Feature</h3>
            </Col>
            <Col lg="8">
              <p>
                Our research revealed that it's a burden for both clinic and OR
                schedulers to provide updates and communicate via phone and
                email. Picking up phone calls distracts and interupts their
                workflows. The informtion or requests received over phone calls
                and email can also be missed or forgotten easily.
              </p>

              <p>
                In the ideation phase, I considered two different features: a
                chat box and a comment theread.
              </p>
            </Col>
          </Row>

          <Row className="justify-content-center">
            <Col lg="6" className={sharedStyles.creamBg}>
              <p>
                <span className={sharedStyles.bold}>Concept A - Chat Box</span>
                <br />
                Chat box can provide fast and efficient way for user to
                communicate, just like making phone calls. Users can also send
                over any files to the other party.
              </p>
              <div className="text-center">
                <ImageBox
                  src={this.getImageUrl("chatbox.png")}
                  alt=""
                  className="img-fluid"
                />
              </div>
            </Col>
            <Col lg="6" className={sharedStyles.creamBg}>
              <p>
                <span className={sharedStyles.bold}>
                  Concept B - Comment Thread
                </span>
                <br />
                Comment threads might not be the quickest communication tool,
                but they can be attached to objects like case form, making it
                easy for users to refer to relevant information.
              </p>
              <div className="text-center">
                <ImageBox
                  src={this.getImageUrl("comment-thread.png")}
                  alt=""
                  className="img-fluid"
                />
              </div>
            </Col>
          </Row>

          <Row className="justify-content-center">
            <Col lg="4"></Col>
            <Col lg="8">
              <p className={sharedStyles.pin}>
                {" "}
                <span className={sharedStyles.bold}>Decision</span>
                <br />I moved forward with the comment thread concept after
                learning that users didn't expect immediate responses. Users
                also mentioned the importance of easily identifying object (case
                form) associated with their conversation with the other party.
              </p>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col lg="12" className={sharedStyles.creamBg}>
              <p>
                <span className={sharedStyles.bold}>Final Design</span>
                <br />
                During the design process, I considered including the activites
                in the thread and consolidating request status in the drawer,
                but because of limited engineering resources, we didn't proceed
                with the implementation of these proposal.
                <br />
                <br />
                In the final design, a comment thread is implemeted as part of
                the case form, making it convenient for users to connect the
                information in the case and the thread.
              </p>
              <ImageBox
                src={this.getImageUrl("comment-final.png")}
                alt=""
                className="img-fluid"
              />
            </Col>
          </Row>

          <Row className="justify-content-center">
            <Col lg="4">
              <h3>Document Upload Feature</h3>
            </Col>
            <Col lg="8">
              <p>
                While Comments feature helps reduce the amount of back-and-forth
                phone calls in the scheduling process, users still need to
                manually fax documents to various hospital departments.
              </p>
            </Col>
          </Row>

          <Row className="justify-content-center">
            <Col lg="12" className={sharedStyles.creamBg}>
              <p>
                <span className={sharedStyles.bold}>Early design</span>
                <br />I continued experimenting using a side dreawer as a
                component to handle upload funcnationality since I already
                introduced that pattern when designing the Comments feature.
              </p>
              <ImageBox
                src={this.getImageUrl("upload-early.png")}
                alt=""
                className="img-fluid"
              />
            </Col>
          </Row>

          <Row className="justify-content-center">
            <Col lg="4"></Col>
            <Col lg="8">
              <p className={sharedStyles.pin}>
                {" "}
                <span className={sharedStyles.bold}>Usability Testing</span>
                <br />I tested the prototype with schedulers, asking them to
                show me how they would perform certain tasks. Overall, users
                found the upload experience to be straightforward and was able
                to perform the upload task.
                <p>
                  However, users didn't notice the side navigation at all. Many
                  of them asked immediately if the Comments feature disappear
                  and when tasked to switch to the Comments tab, 80% of the
                  participants didn't know how to proceed.
                </p>
              </p>
            </Col>
          </Row>

          <Row className="justify-content-center">
            <Col lg="12" className={sharedStyles.creamBg}>
              <p>
                <span className={sharedStyles.bold}>Final design</span>
                <br />I also recevied similar feedback from other desginers on
                the discoverbility issue of the side navigation. As a result, I
                got rid of the side navigation when the drawer and replace it
                with tabs for users to navigate between each page inside the
                drawer.
              </p>
              <ImageBox
                src={this.getImageUrl("upload-final.png")}
                alt=""
                className="img-fluid"
              />
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
