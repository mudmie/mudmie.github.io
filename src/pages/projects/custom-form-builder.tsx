import * as React from "react";
import { Col, Container, Row } from "reactstrap";
import * as sharedStyles from "./styles.module.scss";
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
                in the construction industry. The company got acquired by
                Autodesk in 2018 and became part of Autodesk Construction Cloud.
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
                design a custom form builder feature.
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
                <span className={sharedStyles.bold}>Native Daily Report</span>
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
                I got a big picture of the problem after syncing with the
                product manager, but I still didn’t have enough details to solve
                the problem.{" "}
              </p>
              <p>
                The goal of this research was to understand sequences of tasks
                &amp; tools used to create forms as well as to find out
                the satisfaction level &amp; pain points of the current process.
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
                <br />A user-centered design method of contextual inquiry was
                chosen for this research as it helped reveal the underlying work
                structure of the form creation process.
              </p>
              <p>
                I also applied a master-apprentice model, where the users
                (experts) walked me (a novice) through the form creation process
                step by step.
              </p>
              <p className={sharedStyles.pin}>
                {" "}
                <span className={sharedStyles.bold}>Learning #1</span>
                <br />
                Overall, users weren't satisfied with the current PlanGrid
                tools. They addressed the frustration around limited
                customizability, inefficient &amp; lengthy processes, and lack of
                data aggregation.
              </p>
              <p className={sharedStyles.pin}>
                {" "}
                <span className={sharedStyles.bold}>Learning #2</span>
                <br />
                Paper, Excel, PDF, and PlanGrid Native Field Reports were common
                tools used in the form creation process.
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
                <span className={sharedStyles.bold}>
                  Concept #3: Smart PDF
                </span>
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
                I wrapped up this project during my last week of internship, so another designer 
                completed the final design of this feature after I left. 
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
                If assigned to a form, users will be able to fill out the form on
                both web app &amp; tablets. They will see a list of questions
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
