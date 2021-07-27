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
                reports. For 6 weeks, I worked with a product manager,
                designers, researchers, and developers to examine form creation
                process and design a custom form builder feature.
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
                Documentation on processes and progresses are crucial in
                construction projects as construction work is usually complex
                and high-risk. There are many types of forms, but the most used
                ones are Daily Report and Site Inspection Form.
              </p>
              <p>
                Daily Report provide details of daily activities and events at a
                worksite. It contains information such as
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
                Many users informed that the current tool wasn't flexible to
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
                    Once created, it can be shared, filled out and submitted.
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
                Many users informed that the current tool wasn't flexible to
                use. They wanted to create custom forms directly on PlanGrid
                rather than having to upload a PDF file.
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
