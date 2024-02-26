import { graphql, withPrefix } from "gatsby";
import * as React from "react";
import { Col, Container, Row, Table } from "reactstrap";
import { ImageBox } from "../../components/image-box";
import {
  ProjectLayout,
  PROJECT_BODY_COLUMN,
} from "../../components/project-layout";
import { ProjectPageProps } from "../../models/project-page-props";
import * as sharedStyles from "./styles.module.scss";

export default class ACPage extends React.Component<ProjectPageProps, {}> {
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
                  The Current Admin Console
                </h3>
                <p>
                  IT administrators of companies that purchase PlanGrid's
                  software can add, remove, manage user accounts, and purchase
                  PlanGrid licenses for thier employees.
                </p>

                <p>
                  The current version of Admin Console consists of two major
                  components: a license usage box and a table that displays a
                  list of people involving in the company projects. The IT
                  Admins can click "add license" button to buy more licenses and
                  click "new users" button to add more people to the
                  organization.
                </p>
                <Row className="justify-content-center">
                  <Col lg="8">
                    <ImageBox
                      src={this.getImageUrl("current-AC.jpg")}
                      alt="Current Admin Console UI"
                      className="img-fluid"
                      showCaption={false}
                    />
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>

          <Row className="justify-content-center mt-4">
            <Col lg="10">
              <div className={sharedStyles.sectionContainer}>
                <h6 className={sharedStyles.categoryText}>Understanding</h6>
                <h3 className={sharedStyles.titleText}>The Problems</h3>
                <p className="mb-4">
                  The current system restricts IT Admins to only purchase
                  licenses from a user log page. It also limits their capability
                  to effectively monitor license usage as they are unable to
                  access a list of projects that their users are working on.
                </p>

                <h3 className={sharedStyles.titleText}>Project Goals</h3>

                <p>
                  The main goals of this project were to enhance the user
                  experience for the Admin Console and to introduce a new
                  workflow that allowed the IT Admins to set up organization
                  ownership of user accounts.
                </p>
              </div>
            </Col>
          </Row>


          <Row className="justify-content-center mt-4">
            <Col lg="10">
            <div className={sharedStyles.sectionContainer}>
                <h6 className={sharedStyles.categoryText}>Context</h6>
                <h3 className={sharedStyles.titleText}>
              User Flow</h3>
              <p>
                Workflow diagram was created to explore and identify different
                paths that the IT Admins could perform to complete their tasks.
              </p>

              <Row className="justify-content-center">
                <Col lg="11">
                  <ImageBox
                    src={this.getImageUrl("full-flow.png")}
                    alt="User flow for the new Admin Console"
                    className="img-fluid"
                    showCaption={false}

                  />
                </Col>
              </Row>
              <p>
                To make it easier to understand the process, I created a
                simplified version of the user flow.
              </p>
              <Row className="justify-content-center text-center">
                <Col lg="11">
                  <ImageBox
                    src={this.getImageUrl("flow.png")}
                    alt="Simplified user flow for the new Admin Console "
                    className="img-fluid"
                    showCaption={false}
                  />
                </Col>
              </Row>
              </div>
            </Col>
          </Row>

          <Row className="justify-content-center mt-4">
            <Col lg="10">
            <div className={sharedStyles.sectionContainer}>
                <h6 className={sharedStyles.categoryText}>Context</h6>
                <h3 className={sharedStyles.titleText}>
                Design Process                </h3>

            
              <p>
                At the beginning of the design process, I sketched wireframes to
                get a general idea of how components would look like in each
                step of the user flow.
              </p>
              <Row className="justify-content-center text-center">
                <Col lg="10">
                  <ImageBox
                    src={this.getImageUrl("wireframes.png")}
                    alt="Hand-sketched wireframes"
                    className="img-fluid"
                  />
                </Col>
              </Row>
          
              <Row className="justify-content-center text-center">
                <Col lg="10">
                  <ImageBox
                    src={this.getImageUrl("license.png")}
                    alt="Original design vs New design of the license list"
                    className="img-fluid"
                  />
                </Col>
              </Row>
              </div>
            </Col>
          </Row>

          <Row className="justify-content-center mt-4">
            <Col lg="10">
            <div className={sharedStyles.sectionContainer}>
                <h6 className={sharedStyles.categoryText}>Context</h6>
                <h3 className={sharedStyles.titleText}>
              Usability Inspection</h3>
              <p className={sharedStyles.quote}>
                Usability testing was run to observe how users interact with the
                system when they don’t have enough license to add new users to
               
              </p>

              <p>
                The restriction to purchase license only from the user log page
                was one of the problems addressed at the beginning of project.
                In the design process, I thought it would be convenient if the
                users could purchase extra license without having to go back to
                the user log page. As a result, I added a helper text that says
                "if you don’t have enough license, you’ll be able to purchase
                more later" with a thought that the users would read it and know
                they can buy more license in after clicking next.
              </p>
              <Row className="justify-content-center text-center">
                <Col lg="11">
                  <ImageBox
                    src={this.getImageUrl("usability.png")}
                    alt="Adding helper text to notify users about in-app license purchase"
                    className="img-fluid"
                  />
                </Col>
              </Row>
              <p>
                However, I was not entirely sure if the helper text would be
                effective enough. This thought led me to run a usability test
                with an assumption that the users would read the helper text and
                proceed to buy licenses. In the usability testing session, I
                gave participants scenarios, asked them to perform tasks,
                observed their interaction, and gave the rating of either easy,
                difficult, or fail. The table below shows testing results of
                three participants.
              </p>
              <Table>
                <thead>
                  <tr>
                    <th>User</th>
                    <th>Rating</th>
                    <th>Notes</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>Fail</td>
                    <td>
                      User kept clicking next without even realizing that
                      additional license were bought.
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>Difficult</td>
                    <td>
                      User looked confused when able to select license labelled
                      0 available. The user took a long time to complete the
                      task.
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td>Easy</td>
                    <td>
                      User read the helper text carefully and completed the task
                      in a timely manner.
                    </td>
                  </tr>
                </tbody>
              </Table>
              <p>
                In addition to the usability test, I also discussed with
                participants and learned that they typically didn’t read helper
                text as they tried to complete the task as fast as they could.
                User 1 and User 2 commented that obvious visual cues would help
                signify that the action required special attention.
              </p>
              </div>
            </Col>
          </Row>

          <Row className="justify-content-center mt-4">
            <Col lg="10">
            <div className={sharedStyles.sectionContainer}>
                <h6 className={sharedStyles.categoryText}>Context</h6>
                <h3 className={sharedStyles.titleText}>
              Final Design</h3>
              <p>
                By combining the testing result and feedback received from the
                user, I decided to add an additional step to display an alert
                message regarding to license purchase.
              </p>
              <Row className="justify-content-center text-center">
                <Col lg="10">
                  <ImageBox
                    src={this.getImageUrl("new-design.png")}
                    alt="Adding an alert banner to notify users about insufficient licenses"
                    className="img-fluid"
                  />
                </Col>
              </Row>
              <p>
                I completed the final designs, which are being implemented after
                I finished my internship at PlanGrid.
              </p>
              <Row className="justify-content-center text-center">
                <Col lg="10">
                  <ImageBox
                    src={this.getImageUrl("final-flow.png")}
                    alt="The final design of Admin Console"
                    className="img-fluid"
                  />
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
  query ACQuery($path: String!) {
    allProjects: allProjectsJson {
      ...ProjectFields
    }
    project: allProjectsJson(filter: { url: { eq: $path } }) {
      ...ProjectFields
    }
    mainImage: file(relativePath: { eq: "account-management/main.png" }) {
      ...ProjectMainImageSizes
    }
  }
`;
