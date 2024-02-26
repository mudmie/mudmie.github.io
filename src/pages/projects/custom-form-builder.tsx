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
            <Col lg="10">
              <div className={sharedStyles.sectionContainer}>
                <h6 className={sharedStyles.categoryText}>Context</h6>
                <h3 className={sharedStyles.titleText}>
                  Reports in Construction Projects
                </h3>
                <p>
                  Because construction work is complex and high-risk,
                  documentation of processes and progress is crucial. There are
                  many types of forms, but Daily Report is the most used ones.
                </p>
                <p>
                  Daily Report provides details of daily activities and events
                  at a worksite. It contains information such as
                </p>
                <ul>
                  <li>weather condition</li>
                  <li>work log</li>
                  <li>equipment & material</li>
                  <li>visitor records</li>
                </ul>
              </div>
            </Col>
          </Row>

          <Row className="justify-content-center">
            <Col lg="7">
              <h4 className={sharedStyles.highlightText}>
                <span className={sharedStyles.greyText}>
                  Many users expressed that {""}
                </span>
                the existing report tool wasn't flexible enough for them.
              </h4>
            </Col>
          </Row>

          <Row className="justify-content-center">
            <Col lg="10">
              <div className={sharedStyles.sectionContainer}>
                <h6 className={sharedStyles.categoryText}>Context</h6>
                <h3 className={sharedStyles.titleText}>
                  The Problem – the existing report tool is inefficient{" "}
                </h3>
                <p>
                  Currently, PlanGrid offers 2 ways to create reports — using a
                  built-in daily report feature or upload your own PDF report.
                </p>
                <p>
                  Through collaboration with a product manager and a researcher,
                  I learned that customers found the existing tool not being
                  flexible enough to support their desired workflow. They wanted
                  to create custom forms directly on PlanGrid rather than having
                  to upload PDFs.
                </p>

                <div
                  className={`${sharedStyles.contentContainerLeftAlign} mb-4`}
                >
                  <p className={sharedStyles.almostBlackP}>
                    <b>Method 1: Built-in Daily Report</b>
                  </p>
                  <p>
                    The first way to create a report is to use the Built-in
                    Daily Report tool. In the first step, users would select
                    sections, from a given list, they want include in the
                    report. Next, they would finalize the report by adding other
                    details before sharing it to field workers to fill out.
                  </p>

                  <Row className="justify-content-between">
                    <Col lg="6">
                      <ImageBox
                        src={this.getImageUrl("DR.png")}
                        alt="Step 1 - set up a report
                          "
                        className="img-fluid"
                      />
                    </Col>

                    <Col lg="6">
                      <ImageBox
                        src={this.getImageUrl("DR1.png")}
                        alt="Step 2 - finalize report"
                        className="img-fluid"
                      />
                    </Col>
                  </Row>
                </div>

                <div
                  className={`${sharedStyles.contentContainerLeftAlign} mt-3`}
                >
                  <p className={sharedStyles.almostBlackP}>
                    <b>Method 2: Custom PDF Upload</b>
                  </p>
                  <p>
                    The sencond way to create a report is to use the Custom PDF
                    Upload tool. Users would have to prepare a PDF file outside
                    PlanGrid and upload it to the system. Once uploaded, the
                    system will generate a fillable PDF report that can be
                    shared to field workers.
                  </p>

                  <Row className="justify-content-between">
                    <Col lg="6">
                      <ImageBox
                        src={this.getImageUrl("PDF.png")}
                        alt="Step 1 - drop a PDF file to upload

                          "
                        className="img-fluid"
                      />
                    </Col>

                    <Col lg="6">
                      <ImageBox
                        src={this.getImageUrl("PDF1.png")}
                        alt="Step 2 - Share the PDF generated by the system"
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
                <span className={sharedStyles.greyText}>
                  Limited customizability, inefficient process, and lack of data
                  aggregation were
                </span>{" "}
                {""}
                the main frustration points.
              </h4>
            </Col>
          </Row>

          <Row className="justify-content-center">
            <Col lg="10">
              <div className={sharedStyles.sectionContainer}>
                <h6 className={sharedStyles.categoryText}>Research</h6>
                <h3 className={sharedStyles.titleText}>
                  Understanding Construction Form Creation Process
                </h3>
                <p>
                  Learning about the problem from working wiht the product
                  manager helped me grasp a big picture of the issue, but I
                  still didn’t have enough understanding of the user mental
                  models to start designing the solutions.
                </p>
                <p>
                  The main research goal was to understand sequences of tasks &
                  tools used to create forms. We also wanted to find out the
                  satisfaction level & pain points of the current process.
                </p>

                <p className={sharedStyles.almostBlackP}>
                  <b>Recruiting Participants</b>
                </p>

                <p className="mt-2">
                  I worked with{" "}
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

                <p className={sharedStyles.almostBlackP}>
                  <b>Research Methods</b>
                </p>
                <p className="mt-2">
                  I adopted a user-centered design method of contextual inquiry
                  to reveal the underlying work structure of the form creation
                  process. I also applied a master-apprentice model, where the
                  users (experts) walked me (a novice) through the form creation
                  process step by step.{" "}
                </p>
                <p className={sharedStyles.almostBlackP}>
                  <b>Research Findings</b>
                </p>
                <p className="mt-2">
                  Typically, project manager, project engineer, and IT Admin
                  were the ones that created forms. Types of form included:
                </p>
                <ul>
                  <li>Paper forms</li>
                  <li>Microsoft Excel forms</li>
                  <li>PDF forms</li>
                  <li>PlanGrid Native forms</li>
                </ul>
                <p>
                  Users expressed dissatisfaction with the current PlanGrid
                  report tool primarily due to its limited customizability,
                  which forced them to complete additional workflows outside
                  PlanGrid before utilizing the report tool. Some users also
                  highlighted frustrations from the tool's inadequate data
                  aggregation capability.
                </p>

                <Row className="justify-content-center">
                  <Col lg="8">
                    <p className="text-center">
                      <b>A summary of the current form creation workflow</b>
                    </p>
                    <ImageBox
                      src={this.getImageUrl("flow.png")}
                      alt="A summary of the current form creation workflow"
                      className="img-fluid"
                      showCaption={false}
                    />
                  </Col>
                </Row>

                <Row className="justify-content-center">
                  <Col lg="6" className="mb-2 mb-lg-0 mt-4">
                    <div className={sharedStyles.contentContainerLeftAlign}>
                      {" "}
                      <p className="mb-0">
                        <b>Paper Form</b>
                      </p>
                      <p className="mt-2">
                        A traditional way to create forms. Companies try to move
                        away from it, but they still use it to some extent.
                      </p>
                      <p>
                        <span className={sharedStyles.green}>
                          <AiOutlineCheckCircle />
                        </span>{" "}
                        Comfort zone for most field workers
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
                        Time consuming to create, share, collect, review
                      </p>
                      <p>
                        <span className={sharedStyles.red}>
                          <AiOutlineCloseCircle />
                        </span>{" "}
                        Costly to print
                      </p>
                    </div>
                  </Col>
                  <Col lg="6" className="mb-2 mb-lg-0 mt-4">
                    <div className={sharedStyles.contentContainerLeftAlign}>
                      {" "}
                      <p className="mb-0">
                        <b>Excel Form</b>
                      </p>
                      <p className="mt-2">
                        Used by 80% of the companies. Can be filled out
                        digitally or can require manual input of data from paper
                        forms.
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
                    </div>
                  </Col>
                </Row>

                <Row className="justify-content-center">
                  <Col lg="6" className="mb-2 mb-lg-0 mt-4">
                    <div className={sharedStyles.contentContainerLeftAlign}>
                      {" "}
                      <p className="mb-0">
                        <b>PDF Form</b>
                      </p>
                      <p className="mt-2">
                        Every user uses this form type, but it has the worst
                        creation process. Can be uploaded to PlanGrid and
                        distributed digitally.
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
                    </div>
                  </Col>
                  <Col lg="6" className="mb-2 mb-lg-0 mt-4">
                    <div className={sharedStyles.contentContainerLeftAlign}>
                      {" "}
                      <p className="mb-0">
                        <b>PlanGrid Native Form (Built-in Daily Report)</b>
                      </p>
                      <p className="mt-2">
                        Used by 80% of the companies. Can be filled out
                        digitally or can require manual input of data from paper
                        forms.
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
                        Lacks customizability and only works for Daily Report
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
                <span className={sharedStyles.greyText}>
                  {" "}
                  Based on the research findings,{" "}
                </span>{" "}
                I prototyped 3 different design concepts and tested them with
                our users.
              </h4>
            </Col>
          </Row>

          <Row className="justify-content-center">
            <Col lg="10">
              <div className={sharedStyles.sectionContainer}>
                <h6 className={sharedStyles.categoryText}>Design</h6>
                <h3 className={sharedStyles.titleText}>
                  Designing and Prototyping Concepts
                </h3>
                <p>
                  With learnings and findings from user research, I explored
                  potential designs and prototyped 3 different concepts. I
                  demonstrated these concepts to the same user groups and gather
                  feedback from them.{" "}
                </p>
                <p>
                  <b>Note –</b> these concepts were low-fidelity as they meant
                  to provide users rough ideas of what the new potential custom
                  form builder could look like.
                </p>

                <Row className="justify-content-center">
                  <Col lg="12" className="mb-4">
                    <div className={sharedStyles.contentContainerLeftAlign}>
                      <Row className="justify-content- center">
                        <Col lg="6">
                          <ImageBox
                            src={this.getImageUrl("1.gif")}
                            alt=""
                            className="img-fluid"
                          />
                        </Col>
                        <Col lg="6">
                          <p className="mb-0">
                            <b>Concept 1 - Condensed View</b>
                          </p>
                          <p className="mt-2">
                            Inspired by the look and feel of Microsoft Excel as
                            it's one of the tools used by many users.
                          </p>
                          <p className="mb-0">
                            <b>Interaction Details</b>
                          </p>
                          <ul>
                            <li>
                              Click the + icon or press the enter key on the
                              keyboard to quickly add new questions
                            </li>
                            <li>
                              Select response type from a dropdown menu in the
                              right column
                            </li>
                            <li>
                              Bulk select to delete multiple questions at once
                            </li>
                          </ul>
                        </Col>
                      </Row>
                    </div>
                  </Col>
                </Row>
                <Row className="justify-content-center">
                  <Col lg="12" className="mb-2 mb-4">
                    <div className={sharedStyles.contentContainerLeftAlign}>
                      <Row className="justify-content- center">
                        <Col lg="6">
                          <ImageBox
                            src={this.getImageUrl("2.gif")}
                            alt=""
                            className="img-fluid"
                          />
                        </Col>
                        <Col lg="6">
                          <p className="mb-0">
                            <b>Concept 2 - Item by Item</b>
                          </p>
                          <p className="mt-2">
                            Designed to improve the existing PlanGrid built-in
                            report tool by providing more customizability to the
                            users
                          </p>
                          <p className="mb-0">
                            <b>Interaction Details</b>
                          </p>
                          <ul>
                            <li>
                              Use a dropdown menu to add sections or questions
                              to the form
                            </li>
                            <li>
                              Chose a desired response type for each question
                            </li>
                            <li>
                              Preview the final look of the form before sharing
                              to field workers
                            </li>
                          </ul>
                        </Col>
                      </Row>
                    </div>
                  </Col>
                </Row>

                <Row className="justify-content-center">
                  <Col lg="12" className="mb-2 mb-lg-0">
                    <div className={sharedStyles.contentContainerLeftAlign}>
                      <Row className="justify-content- center">
                        <Col lg="6">
                          <ImageBox
                            src={this.getImageUrl("3.gif")}
                            alt=""
                            className="img-fluid"
                          />
                        </Col>
                        <Col lg="6">
                          <p className="mb-0">
                            <b>Concept 3 - Smart PDF</b>
                          </p>
                          <p className="mt-2">
                            Designed based on the existing PDF import feature on
                            PlanGrid Field Reports. It was included in the
                            concept testing because every research participant
                            already worked with the PDF files.
                          </p>
                          <p className="mb-0">
                            <b>Interaction Details</b>
                          </p>
                          <ul>
                            <li>Upload an existing PDF file to PlanGrid</li>
                            <li>
                              Mark input fields by drawing text fields or
                              creating checkboxes directly on PlanGrid
                            </li>
                          </ul>
                        </Col>
                      </Row>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>

          <Row className="justify-content-center">
            <Col lg="7">
              <h4 className={sharedStyles.highlightText}>
                Concept 2 is favorable
                <span className={sharedStyles.greyText}>
                  {" "}
                  by most users as it offers most
                </span>{" "}
                customizability to control layout and questions
              </h4>
            </Col>
          </Row>

          <Row className="justify-content-center">
            <Col lg="10">
              <div className={sharedStyles.sectionContainer}>
                <h6 className={sharedStyles.categoryText}>Testing</h6>
                <h3 className={sharedStyles.titleText}>
                  Concept Testing Results
                </h3>
                <p>
                  Overall, users found Concept 2 (Item-by-item) to suit their
                  needs the most. The design of concept #2 provided
                  customizability while also allowed the users to manage the
                  layout of the template.
                </p>
                <p>
                  Many users liked the idea of using the keyboard to quickly
                  enter questions in Concept 1 (Condensed view). While they
                  found the concept to be convenient and efficient, all of them
                  mentioned the importance of organizing the form layout.
                  Therefore, this concept wouldn't meet their needs.
                </p>
                <p>
                  Users were excited by Concept 3 (Smart PDF). While they
                  thought the concept was cool, they didn't feel it would solve
                  their pain points. The concept still required PDF files to be
                  created separately and the users also needed to manually draw
                  each text field after uploading the PDF to PlanGrid. This
                  concept would also require excessive development effort,
                  making it the least feasible and desirable.
                </p>
              </div>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col lg="7">
              <h4 className={sharedStyles.highlightText}>
                Concept 2 was choosen as a concept for the final design.
                <span className={sharedStyles.greyText}>
                  {" "}
                  I revised the concept and turned it into high-fidelity
                  mockups.
                </span>{" "}
              </h4>
            </Col>
          </Row>

          <Row className="justify-content-center">
            <Col lg="10">
              <div className={sharedStyles.sectionContainer}>
                <h6 className={sharedStyles.categoryText}>Design</h6>
                <h3 className={sharedStyles.titleText}>Final Designs </h3>
                <p>
                  Based on the research findings, I started working on the
                  details of the design, including form creation and submission
                  experiences.
                </p>
                <p>
                  <b>Note –</b> I created these designs as I wrapped up my last
                  week of intership. Since they were the first iteration,
                  another designer continued iterating the designs after I left
                  and shipped the product later in early 2020.
                </p>

                <div
                  className={`${sharedStyles.contentContainerLeftAlign} mb-4`}
                >
                  <p className={sharedStyles.almostBlackP}>
                    <b>Form Creation Experience</b>
                  </p>
                  <p>
                    Form creation experience is only available through PlanGrid
                    web app since users don't typically use mobile devices to
                    perform this task. The design allows users to create
                    sections, add questions, selct a response type for each
                    question, and rearrange order of the question within the
                    section. with various response types to it.
                  </p>

                  <Row className="justify-content-center">
                    <Col lg="8">
                      <ImageBox
                        src={this.getImageUrl("final-creator.png")}
                        alt="Form Creation Experience
                          "
                        showCaption={false}
                        className="img-fluid"
                      />
                    </Col>
                  </Row>
                </div>

                <div
                  className={`${sharedStyles.contentContainerLeftAlign} mt-3`}
                >
                  <p className={sharedStyles.almostBlackP}>
                    <b>Form Submission Experience</b>
                  </p>
                  <p>
                    Form submission experience was designed to support both web
                    and mobile devices to ensure that field workers would be
                    able to fill out the form.
                  </p>
                  <p>
                    A person that has been assigned to a form will see a list of
                    questions with a pre-defined response type specified by the
                    form creator.
                  </p>

                  <Row className="justify-content-center text-center">
                    <Col lg="8">
                      <ImageBox
                        src={this.getImageUrl("ios.png")}
                        alt="Form Submission Experience for iOS"
                        className="img-fluid"
                      />
                    </Col>
                  </Row>

                  <Row className="justify-content-center text-center">
                    <Col lg="8">
                      <ImageBox
                        src={this.getImageUrl("Android.png")}
                        alt="Form Submission Experience for Android"
                        className="img-fluid"
                      />
                    </Col>
                  </Row>
                  <Row className="justify-content-center text-center">
                    <Col lg="8">
                      <ImageBox
                        src={this.getImageUrl("Windows.png")}
                        alt="Form Submission Experience for Windows/Web"
                        className="img-fluid"
                      />
                    </Col>
                  </Row>
                </div>
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
