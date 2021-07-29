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
        allProjects={this.props.data.allProjects.edges.map(e => e.node)}
        currentProject={this.props.data.project.edges[0].node}
        mainImage={this.props.data.mainImage.childImageSharp.fluid}
      >
        <Container>
          <Row className="justify-content-center">
            <Col lg="4">
              <h3>Overview</h3>
            </Col>
            <Col lg="8">
              <p>
                PlanGrid provides cloud-based solutions to increase productivity
                in the construction industry. The company became part of
                Autodesk Construction Cloud after the aquisition in 2018.
              </p>
              <p>
                I was a{" "}
                <span className={sharedStyles.bold}>
                  product design intern{" "}
                </span>
                on <span className={sharedStyles.bold}>Field Reports</span>, a
                tool for users to create, submit, and review construction
                reports.
              </p>
              <p>
                I spent 6 weeks working with a product manager, designers,
                researchers, and developers to examine form creation process and
                design a{" "}
                <span className={sharedStyles.bold}>custom form builder</span>{" "}
                feature.
              </p>
              <p>
                My research and design initiatives{" "}
                <span className={sharedStyles.bold}>provided a foundation</span>{" "}
                for the team to{" "}
                <span className={sharedStyles.bold}>
                  successfully launched the feature
                </span>{" "}
                in early 2020.
              </p>
            </Col>
          </Row>

          <Row className="justify-content-center">
            <Col lg="4">
              <h3>Context</h3>
            </Col>
            <Col lg="8">
              <p>
                Because construction work is complex and high-risk,
                documentation of processes and progress is crucial. There are
                many types of forms, but Daily Report is the most used ones.
              </p>
              <p>
                Daily Report provides details of daily activities &amp; events
                at a worksite. It contains information such as
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
            <Col lg="4">
              <h3>Current Field Reports</h3>
            </Col>
            <Col lg="8">
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
            <Col lg="6" className={sharedStyles.creamBg}>
              <p>
                <span className={sharedStyles.bold}>Built-in Daily Report</span>
                <br />
                Select components to set up a report.
                <div className="text-center">
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
                </div>
              </p>
            </Col>
            <Col lg="6" className={sharedStyles.creamBg}>
              <p>
                <span className={sharedStyles.bold}>Custom PDF Upload</span>
                <br />
                Drop a PDF file to upload.
                <div className="text-center">
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
                </div>
              </p>
            </Col>
          </Row>

          <Row className="justify-content-center">
            <Col lg="4">
              <h3>Research</h3>
            </Col>
            <Col lg="8">
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
                <span className={sharedStyles.topicRight}>
                  Recruiting Participants
                </span>
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
                <span className={sharedStyles.topicRight}>
                  Research Methods
                </span>
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
            <Col lg="12" className={sharedStyles.creamBg}>
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

          <Row>
            <Col lg="6" className={sharedStyles.creamBg}>
              <p>
                <span className={sharedStyles.bold}> Paper Form</span>
                <br />A traditional way to creat form. Companies tries to move
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
                Time consuing to create, distribute, collect, review
              </p>
              <p>
                <span className={sharedStyles.red}>
                  <AiOutlineCloseCircle />
                </span>{" "}
                Costly to print
              </p>
            </Col>
            <Col lg="6" className={sharedStyles.creamBg}>
              <p>
                <span className={sharedStyles.bold}>Excel Form</span>
                <br />
                Used by smaller companies. Can be filled out digitally or can
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

            <Col lg="6" className={sharedStyles.creamBg}>
              <p>
                <span className={sharedStyles.bold}>PDF Form</span>
                <br />
                Most used by users, but has the worst creation process. Can be uploaded to PlanGrid and distributed digitally.
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
            <Col lg="6" className={sharedStyles.creamBg}>
              <p>
                <span className={sharedStyles.bold}>PlanGrid Native Form</span>
                <br />
                Users can create, distribute, and collect forms directly on PlanGrid web app. 
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
               Access to some insights of the submiited report
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
            <Col lg="4">
              <h3>Testing</h3>
            </Col>
            <Col lg="8">
              <p>
                I ran a usability inspection to test the effectiveness of the
                design options and found that
                <br />
                <ul>
                  <li>
                    None of the designs provided system feedback to the users
                  </li>
                  <br />
                  <li>
                    Visual cues in Design #1 &amp; #2 weren't enough for the
                    users to distinguish the differences between the active
                    &amp; disabled states
                  </li>
                  <br />
                  <li>
                    Design #3 could potentially confuse the users and lead them
                    to wonder why the checkboxes suddenly disappeared
                  </li>
                </ul>
              </p>
            </Col>
          </Row>

          <Row className="justify-content-center">
            <Col lg="4">
              <h3>
                Design/ <br />
                Concept Testing
              </h3>
            </Col>
            <Col lg="8">
              <p>
                With learnings and findings from user research, I explored
                potential designs and prototyped 3 different concepts.
              </p>
              <p>
                <span className={sharedStyles.bold}>
                  It should be noted that these concepts were low-fidelity{" "}
                </span>
                as they meant to provide users a rough idea of what the new
                potential custom form builder could look like.
              </p>
              <p>
                With the same user groups, I walked them through each concept
                and gather feedback from them.
              </p>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col lg="12" className={sharedStyles.creamBg}>
              <p>
                <span className={sharedStyles.bold}>
                  Concept #1 - Condensed View
                </span>
              </p>
              <p>
                This concept was inspired by the look and feel of Microsoft
                Excel since every research participant mentioned it as one of
                the tools used to create forms.
              </p>
              <p>
                Users can enter questions in the left column and select response
                type from the dropdown in the right column. Users can also hit
                the enter/return key on their keyboard to quickly add next
                questions.
              </p>
              <div className="text-center">
                <ImageBox
                  src={this.getImageUrl("1.png")}
                  alt=""
                  className="img-fluid"
                />
              </div>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col lg="12" className={sharedStyles.creamBg}>
              <p>
                <span className={sharedStyles.bold}>
                  Concept #2 - Item-by-Item
                </span>
                <p>
                  This concept was created based on the existing PlanGrid Native
                  Daily Report as every research participant used this tool in
                  the process.{" "}
                </p>
                <p>
                  Users can fully customize their form by adding components like
                  sections or questions with various types of answers.
                </p>
              </p>
              <div className="text-center">
                <ImageBox
                  src={this.getImageUrl("2.png")}
                  alt=""
                  className="img-fluid"
                />
              </div>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col lg="12" className={sharedStyles.creamBg}>
              <p>
                <span className={sharedStyles.bold}>Concept #3: Smart PDF</span>
                <br />
                This concept was designed based on the existing PDF import
                feature on PlanGrid Field Reports. It was included in the
                concept testing because every research participant already
                worked with the PDF files.
              </p>
              <p>
                Users can upload an existing PDF file and draw text fields or
                create checkboxes directly on PlanGrid.
              </p>
              <div className="text-center">
                <ImageBox
                  src={this.getImageUrl("3.png")}
                  alt=""
                  className="img-fluid"
                />
              </div>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col lg="4">
              <h3>
                Concept Testing/ <br />
                Conclusion
              </h3>
            </Col>
            <Col lg="8">
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
            <Col lg="4">
              <h3>Final Design</h3>
            </Col>
            <Col lg="8">
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
            <Col lg="12" className={sharedStyles.creamBg}>
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
            <Col lg="12" className={sharedStyles.creamBg}>
              <p>
                <span className={sharedStyles.bold}>
                  {" "}
                  Form Submitting Experience{" "}
                </span>
                <br />
                If assigned to a form, users will be able to fill out the form
                on both web app &amp; tablets. They will see a list of questions
                with a pre-defined response type specified by the form creator.
              </p>
              <ImageBox
                src={this.getImageUrl("final-submitter.png")}
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
