import * as React from "react";
import { Col, Container, Row } from "reactstrap";
import * as sharedStyles from "./styles.module.scss";
import { AiOutlineCheckCircle, AiOutlineCloseCircle } from "react-icons/ai";
import { graphql, withPrefix } from "gatsby";
import { ImageBox } from "../../components/image-box";
import {
  ProjectLayout,
  PROJECT_BODY_COLUMN,
} from "../../components/project-layout";
import { ProjectPageProps } from "../../models/project-page-props";
import { OutboundLink } from "gatsby-plugin-google-analytics";

export default class CustomFormBuilderPage extends React.Component<
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
                Because construction work is complex and high-risk,
                documentation of processes and progress is crucial. There are
                many types of forms, but Daily Report is the most used ones.
              </p>
              <p>
                Daily Report provides details of daily activities and events at
                a worksite. It contains information such as
                <ul>
                  <li>weather condition</li>
                  <li>work log</li>
                  <li>equipment &amp; material</li>
                  <li>visitor records</li>
                </ul>
              </p>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col lg="6">
              <h3>Current Field Reports</h3>
              <p>
                PlanGrid offers 2 ways to create reports &mdash; using a
                built-in daily report feature or upload your own PDF report.
              </p>
              <p className={sharedStyles.pin}>
                {" "}
                <span className={sharedStyles.bold}>The Problem</span>
                <br />
                Many users reported that the current tool wasn't flexible to
                use. They wanted to create custom forms directly on PlanGrid
                rather than having to upload PDFs.
              </p>
            </Col>
          </Row>

          <Row className="justify-content-center">
            <Col lg="3">
              <p>
                <span className={sharedStyles.bold}>Built-in Daily Report</span>
                <br />
                Set up a report.
                {/* <div className="text-center"> */}
                  <ImageBox
                    src={this.getImageUrl("DR.jpg")}
                    alt=""
                    className="img-fluid"
                  />
                  <p>
                    Once created, it can be shared, filled out, and submitted.
                  </p>
                  <ImageBox
                    src={this.getImageUrl("DR1.jpg")}
                    alt=""
                    className="img-fluid"
                  />
                {/* </div> */}
              </p>
            </Col>
            <Col lg={{ size: 3}}>
              <p>
                <span className={sharedStyles.bold}>Custom PDF Upload</span>
                <br />
                Drop a PDF file to upload.
                  <ImageBox
                    src={this.getImageUrl("PDF.jpg")}
                    alt=""
                    className="img-fluid"
                  />
                <p>
                  Once uploaded, the system generates a fillable PDF report.
                </p>
                <ImageBox
                  src={this.getImageUrl("PDF1.jpg")}
                  alt=""
                  className="img-fluid"
                />
              </p>
            </Col>
          </Row>

          <Row className="justify-content-center">
            <Col lg="6">
              <h3>Research</h3>
                          <p>
                Syncing with the product manager helped me grasp a big picture
                of the, but I still didn’t have enough details to solve the
                problem.{" "}
              </p>
              <p>
                The main research goal was to{" "}
                <span className={sharedStyles.bold}>
                  understand sequences of tasks &amp; tools{" "}
                </span>{" "}
                used to create forms. We also wanted to find out the
                satisfaction level &amp; pain points of the current process.
              </p>
              <p>
                <b>Recruiting Participants</b>
                                  <br />I worked with{" "}
                <OutboundLink
                  href="https://www.linkedin.com/in/kimberley-pita"
                  target="_blank"
                >
                  Kim
                </OutboundLink>
                , a research intern, to recruit 10 companies (small, medium,
                large-sized &amp; government-based) to participate in the user
                research.
              </p>
              <p>
                {/* <span className={sharedStyles.topicRight}> */}
                  <b>Research Methods</b>
                {/* </span> */}
                <br /> I adopted a user-centered design method of{" "}
                <span className={sharedStyles.bold}>contextual inquiry</span> to
                reveal the underlying work structure of the form creation
                process.
              </p>
              <p>
                I also applied a{" "}
                <span className={sharedStyles.bold}>
                  master-apprentice model
                </span>
                , where the users (experts) walked me (a novice) through the
                form creation process step by step.
              </p>
              <p className={sharedStyles.pin}>
                {" "}
                <span className={sharedStyles.bold}>Learning #1</span>
                <br />
                Overall, users weren't satisfied with the current PlanGrid
                tools. <br />
                Limited customizability, inefficient &amp; lengthy processes,
                and lack of data aggregation were the main frustration points.
              </p>
              <p className={sharedStyles.pin}>
                {" "}
                <span className={sharedStyles.bold}>Learning #2</span>
                <br />
                Typically, project manager, project engineer, and IT Admin were
                the ones that created forms. Types of form included:{" "}
                <ul>
                  <li>Paper forms</li>
                  <li>Microsoft Excel forms</li>
                  <li>PDF forms</li>
                  <li>PlanGrid Native forms</li>
                </ul>
              </p>
            </Col>
          </Row>

          <Row className="justify-content-center">
            <Col lg="6" className={sharedStyles.creamBg}>
              <p>
                <span className={sharedStyles.bold}>
                  A summary of the current form creation workflow
                </span>
              </p>
              <ImageBox
                src={this.getImageUrl("flow.png")}
                alt=""
                className="img-fluid"
              />
            </Col>
          </Row>

          <Row className="justify-content-center">
            <Col lg="6" >
              <p>
                <span className={sharedStyles.bold}> Paper Form</span>
                <br />A traditional way to create forms. Companies try to move
                away from it, but they still use it to some extent.
              </p>
              <p>
                <span className={sharedStyles.green}>
                  <AiOutlineCheckCircle />
                </span>{" "}
                Comfort zone for most field workers (form submitter)
              </p>
              <p>
                <span className={sharedStyles.green}>
                  <AiOutlineCheckCircle />
                </span>{" "}
                Full control of form content, design, and layout
              </p>
              <p>
                <span className={sharedStyles.red}>
                  <AiOutlineCloseCircle />
                </span>{" "}
                Time consuming to create, distribute, collect, review
              </p>
              <p>
                <span className={sharedStyles.red}>
                  <AiOutlineCloseCircle />
                </span>{" "}
                Costly to print
              </p>
            </Col>
            </Row>

            <Row className="justify-content-center">
            <Col lg="6">
              <p>
                <span className={sharedStyles.bold}>Excel Form</span>
                <br />
                Used by 80% of the companies. Can be filled out digitally or can
                require manual input of data from paper forms.
              </p>
              <p>
                <span className={sharedStyles.green}>
                  <AiOutlineCheckCircle />
                </span>{" "}
                Questions can be entered quickly and easily
              </p>
              <p>
                <span className={sharedStyles.green}>
                  <AiOutlineCheckCircle />
                </span>{" "}
                Reliable for complex calculation &amp; data analysis
              </p>
              <p>
                <span className={sharedStyles.red}>
                  <AiOutlineCloseCircle />
                </span>{" "}
                Manual, error prone, time consuming process
              </p>
              <p>
                <span className={sharedStyles.red}>
                  <AiOutlineCloseCircle />
                </span>{" "}
                High effort to transfer data from paper forms
              </p>
            </Col>
            </Row>
            <Row className="justify-content-center">
            <Col lg="6">
              <p>
                <span className={sharedStyles.bold}>PDF Form</span>
                <br />
                Most used by users, but has the worst creation process. Can be
                uploaded to PlanGrid and distributed digitally.
              </p>
              <p>
                <span className={sharedStyles.green}>
                  <AiOutlineCheckCircle />
                </span>{" "}
                Full control on content, design, and layout
              </p>
              <p>
                <span className={sharedStyles.green}>
                  <AiOutlineCheckCircle />
                </span>{" "}
                Submitted forms can be exported as CSV files (Excel)
              </p>
              <p>
                <span className={sharedStyles.red}>
                  <AiOutlineCloseCircle />
                </span>{" "}
                Manual, time consuming, and tedious process
              </p>
              <p>
                <span className={sharedStyles.red}>
                  <AiOutlineCloseCircle />
                </span>{" "}
                Requires additional software to complete the process
              </p>
            </Col>
            </Row>
            <Row className="justify-content-center">
            <Col lg="6">
              <p>
                <span className={sharedStyles.bold}>PlanGrid Native Form</span>
                <br />
                Users can create, distribute, and collect forms directly on
                PlanGrid web app.
              </p>
              <p>
                <span className={sharedStyles.green}>
                  <AiOutlineCheckCircle />
                </span>{" "}
                Easy and quick process
              </p>
              <p>
                <span className={sharedStyles.green}>
                  <AiOutlineCheckCircle />
                </span>{" "}
                Submitted forms can be exported to local computers
              </p>
              <p>
                <span className={sharedStyles.green}>
                  <AiOutlineCheckCircle />
                </span>{" "}
                Access to some insights of the submitted report
              </p>
              <p>
                <span className={sharedStyles.red}>
                  <AiOutlineCloseCircle />
                </span>{" "}
                Lacks customizability &amp; only works for Daily Report
              </p>
            </Col>
          </Row>

          <Row className="justify-content-center">
            <Col lg="6">
              <h3>
                Designing Concepts
                              </h3>
              <p>
                With learnings and findings from user research, I explored
                potential designs and prototyped 3 different concepts. I
                demonstrated these concepts to the same user groups and gather
                feedback from them.
              </p>
              <p>
                <span className={sharedStyles.bold}>Note – </span>
                these concepts were low-fidelity as they meant to provide users
                rough ideas of what the new potential custom form builder could
                look like.
              </p>
            </Col>
          </Row>

          <Row className="justify-content-center">
            <Col lg="8">
              <Row>
                <Col lg="6">
                  <div className="text-center">
                    <ImageBox
                      src={this.getImageUrl("1.gif")}
                      alt=""
                      className="img-fluid"
                    />
                  </div>
                </Col>
                <Col lg="6">
                  <p>
                    <span className={sharedStyles.bold}>
                      Concept #1 - Condensed View
                    </span>
                    <p>
                      Inspired by the look and feel of Microsoft Excel as it's
                      one of the tools used by many users.
                    </p>
                    <p>
                      <ul>
                        <li>
                          Click the + icon or press the enter key on the
                          keyboard to quickly add new questions
                        </li>
                        <li>
                          Select response type from a dropdown menu in the right
                          column
                        </li>
                        <li>
                          Bulk select to delete multiple questions at once
                        </li>
                      </ul>
                    </p>
                  </p>
                  {/* <p>
                      <span className={sharedStyles.bold}>User Feedback</span>{" "}
                      <br />
                      <span className={sharedStyles.green}>
                        <AiOutlineCheckCircle />
                      </span>{" "}
                      Submitted forms can be exported to local computers
                    </p>
                    <p>
                      <span className={sharedStyles.green}>
                        <AiOutlineCheckCircle />
                      </span>{" "}
                      Access to some insights of the submiited report
                    </p>
                  </p> */}
                </Col>
              </Row>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col lg="8" >
              <Row>
                <Col lg="6">
                  <div className="text-center">
                    <ImageBox
                      src={this.getImageUrl("2.gif")}
                      alt=""
                      className="img-fluid"
                    />
                  </div>
                </Col>
                <Col lg="6">
                  <p>
                    <span className={sharedStyles.bold}>
                      Concept #2 - Item-by-Item
                    </span>{" "}
                    <br />
                    <p>
                      Improving the existing PlanGrid Daily Report tool by
                      providing more customizability to the users.
                    </p>
                    <p>
                      <ul>
                        <li>
                          Use a dropdown menu to add sections and questions with
                          on various response types
                        </li>
                      </ul>
                    </p>
                  </p>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col lg="8" >
              <Row>
                <Col lg="6">
                  <div className="text-center">
                    <ImageBox
                      src={this.getImageUrl("3.gif")}
                      alt=""
                      className="img-fluid"
                    />
                  </div>
                </Col>
                <Col lg="6">
                  <p>
                    <span className={sharedStyles.bold}>
                      Concept #3: Smart PDF
                    </span>
                    <p>
                      Designed based on the existing PDF import feature on
                      PlanGrid Field Reports. It was included in the concept
                      testing because every research participant already worked
                      with the PDF files.
                    </p>
                    <ul>
                      <li>
                        Draw text fields or create checkboxes directly on
                        PlanGrid
                      </li>
                    </ul>
                  </p>
                </Col>
              </Row>
            </Col>
          </Row>

          <Row className="justify-content-center">
            <Col lg="6">
              <h3>
                Concept Testing & Results
              </h3>
          
              <p>
                Overall, users found concept #2 (Item-by-item) to suit their
                needs the most. The design of concept #2 provided
                customizability while also allowed the users to manage the
                layout of the template.
              </p>

              <p>
                Many users liked the idea of using the keyboard to quickly enter
                questions in concept #1 (Condensed view). While they found the
                concept to be convenient and efficient, all of them mentioned
                the importance of organizing the form layout. Therefore, this
                concept wouldn't meet their needs.
              </p>
              <p>
                Users found concept #3 (Smart PDF) to be cool, but it didn't
                seem to solve their pain points. The concept still required PDF
                files to be created separately and the users also needed to
                manually draw each text field after uploading the PDF to
                PlanGrid. This concept would also require excessive development
                effort, making it the least feasible and desirable.
              </p>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col lg="6">
              <h3>Final Design</h3>
              <p>
                From the above conclusion, concept #2 was chosen as a final
                design. I revised the prototype and made it a high-fidelity
                prototype.
              </p>
              <p>
                It should be noted that these designs aren't production version.
                I wrapped up this project during my last week of internship, so
                another designer completed the final design of this feature
                after I left.
              </p>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col lg="6" >
              <p>
                <span className={sharedStyles.bold}>
                  {" "}
                  Form Creating Experience{" "}
                </span>
                <br />
                Users can only create forms through PlanGrid web app. The design
                allows users to create sections and embed questions with various
                response types to it.
              </p>
              <ImageBox
                src={this.getImageUrl("final-creator.png")}
                alt=""
                className="img-fluid"
              />
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col lg="6">
              <p>
                <span className={sharedStyles.bold}>
                  {" "}
                  Form Submitting Experience{" "}
                </span>
                <br />
                If assigned to a form, users will be able to fill out the form
                on both web app &amp; tablets. They will see a list of questions
                with a pre-defined response type specified by the form creator.
                <br />
                <br />

<span className={sharedStyles.bold}>
                For iOS 
                </span>
              <ImageBox
                src={this.getImageUrl("ios.png")}
                alt=""
                className="img-fluid"
              />
              <span className={sharedStyles.bold}>
                For Android 
                </span>
              <ImageBox
                src={this.getImageUrl("Android.png")}
                alt=""
                className="img-fluid"
              />
              <span className={sharedStyles.bold}>
                For Windows 
                </span>
              <ImageBox
                src={this.getImageUrl("Windows.png")}
                alt=""
                className="img-fluid"
              />
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
  query CustomFormBuilderQuery($path: String!) {
    allProjects: allProjectsJson {
      ...ProjectFields
    }
    project: allProjectsJson(filter: { url: { eq: $path } }) {
      ...ProjectFields
    }
    mainImage: file(relativePath: { eq: "custom-form-builder/main.png" }) {
      ...ProjectMainImageSizes
    }
  }
`;
