import { graphql, withPrefix } from "gatsby";
import * as React from "react";
import { Col, Container, Row, Table } from "reactstrap";
import { ImageBox } from "../../components/image-box";
import { ProjectLayout } from "../../components/project-layout";
import { ProjectPageProps } from "../../models/project-page-props";
import * as sharedStyles from "./styles.module.scss";

export default class ACPage extends React.Component<ProjectPageProps, {}> {
  public render() {
    return (
      <ProjectLayout
        allProjects={this.props.data.allProjects.edges.map(e => e.node)}
        currentProject={this.props.data.project.edges[0].node}
        mainImage={this.props.data.mainImage.childImageSharp.fluid}
      >
        <Container>
          <Row className="justify-content-center">
            <Col lg="10">
              <h3>About The Company</h3>
              <p>
                PlanGrid has a primary objective to make intuitive and impactful
                technology for people in the construction industry. Its
                construction productivity software doesn’t only allow field
                workers to store, view, and share blueprints, but also enables
                stakeholders in a project to work together throughout the
                project life cycle.
              </p>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col lg="10">
              <h3>Background</h3>
              <p>
                Admin Console is a part of PlanGrid web products that allows IT
                administrators to add, remove, and manage user accounts as well
                as to purchase PlanGrid licenses for users who are involved in
                organization projects.
              </p>
              <p>
                PlanGrid offers multiple types of licenses, and each comes with
                a different number of sheet storage limit. The licenses range
                from basic ones that come with limited sheet storage to the most
                expensive one that allows unlimited sheet storage.
              </p>
            </Col>
          </Row>

          <Row className="justify-content-center">
            <Col lg="10">
              <h3>My Roles &amp; Project Goals</h3>
              <p>
                The main goals of this project were to enhance the user
                experience for the Admin Console and to introduce a new workflow
                that allowed the IT Admins to set up organization ownership of
                user accounts. As a designer, I designed the workflow that will
                give IT Admins an ability to manage user accounts and redesigned
                web interfaces using components from PlanGrid's design system.
              </p>
            </Col>
          </Row>

          <Row className="justify-content-center">
            <Col lg="10">
              <h3>Problems</h3>
              <p className={sharedStyles.quote}>
                The current system restricts IT Admins to only purchase licenses
                from a user log page. It also limits their capability to
                effectively monitor license usage as they are unable to access a
                list of projects that their users are working on.
              </p>
              <p>
                The first problem occurs when IT Admins finds out they don't
                have enough license when trying to add new users to the
                organization. The current process requires them to abandon their
                current task, navigate back to the user log page, purchase
                licenses, and repeat the process of adding new users.
              </p>
              <p>
                The second problem happens when employees request for a license
                upgrade once they run out of sheet storage. Since the IT Admins
                have no information about projects that the employees are
                working on, it's challenging to know if the extra storage is
                required for company work. It is possible that the employees use
                company license to work on their personal or freelance projects.
                As a result, the company has to unnecessarily pay extra to
                upgrade licenses for these employees.
              </p>
            </Col>
          </Row>

          <Row className="justify-content-center">
            <Col lg="10">
              <h3>The Current Admin Console</h3>
              <p>
                The current version of Admin Console consists of two major
                components: a license usage box and a table that displays a list
                of people involving in the company projects. The IT Admins can
                click "add license" button to buy more licenses and click "new
                users" button to add more people to the organization.
              </p>
              <p>
                From a design perspective, not every part of the Admin Console
                is built using components from PlanGrid’s design system. For
                example, the “more options icon” at the end of the row of user
                log doesn’t exist in other parts of PlanGrid web app.
              </p>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col lg="10">
              <ImageBox
                src={this.getImageUrl("current-AC.jpg")}
                alt="Current Admin Console UI"
                className="img-fluid"
              />
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col lg="10">
              <h3>User Flow</h3>
              <p>
                Workflow diagram was created to explore and identify different
                paths that the IT Admins could perform to complete their tasks.
              </p>

              <Row className="justify-content-center">
                <Col lg="12">
                  <ImageBox
                    src={this.getImageUrl("full-flow.png")}
                    alt="Current Admin Console UI"
                    className="img-fluid"
                  />
                </Col>
              </Row>
              <p>
                To make it easier to understand the process, I created a
                simplified version of the user flow. In the diagram, IT Admins
                can add new users or manage existing users. If they decide to
                manage a user, they’ll send a request to manage the user
                account. If they just want the user to work on company projects,
                they’ll send an invitation to the user to join the organization.
                On the other end, the user can accept or reject the request or
                the invitation.
              </p>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col lg="10">
              <ImageBox
                src={this.getImageUrl("flow.png")}
                alt="Current Admin Console UI"
                className="img-fluid"
              />
            </Col>
          </Row>

          <Row className="justify-content-center">
            <Col lg="10">
              <h3>Design Process</h3>
              <p>
                At the beginning of the design process, I sketched wireframes to
                get a general idea of how components would look like in each
                step of the user flow.
              </p>
              <Row className="justify-content-center">
                <Col lg="6">
                  <ImageBox
                    src={this.getImageUrl("add-new-user.jpg")}
                    alt="Collect information using sticky notes"
                    className="img-fluid"
                  />
                </Col>
                <Col lg="6">
                  <ImageBox
                    src={this.getImageUrl("invite-existing-user.jpg")}
                    alt="Whiteboard with research"
                    className="img-fluid"
                  />
                </Col>
              </Row>
              <p>
                Since the current version of Admin Console didn't comply with
                PlanGrid's design system, I designed a high fidelity prototype
                using most components from the design system library. Some
                designs were completely changed to minimize future design work.
                For example, license options were listed vertically in the
                original design. Although there is no problem with this design
                at the moment, the list can get longer if PlanGrid offers more
                license options in the future. Given the scenario, a new design
                would be required to prevent the users from scrolling through an
                endless list. Therefore, I decided to replace the original
                design with a dropdown. This pattern works with the current list
                of license options and will also work if additional items are
                added to the list.
              </p>
              <Row className="justify-content-center">
                <Col lg="12">
                  <ImageBox
                    src={this.getImageUrl("license.png")}
                    alt="Current Admin Console UI"
                    className="img-fluid"
                  />
                </Col>
              </Row>
            </Col>
          </Row>

          <Row className="justify-content-center">
            <Col lg="10">
              <h3>Usability Testing</h3>
              <p className={sharedStyles.quote}>
                Usability testing was run to observe how users interact with the
                system when they don't have enough license to add new users to
                the organization. Information gained from usability testing
                sessions provides meaningful insights that lead to a new design
                that will enhance an overall user experience.
              </p>

              <p>
                The restriction to purchase license only from the user log page
                was one of the problems addressed at the beginning of project.
                In the design process, I thought it would be convenient if the
                users could purchase extra license without having to go back to
                the user log page. As a result, I added a helper text that says
                "if you don't have enough license, you'll be able to purchase
                more later" with a though that the users would read it and know
                they can buy more license in after clicking next.
              </p>
              <Row className="justify-content-center">
                <Col lg="12">
                  <ImageBox
                    src={this.getImageUrl("usability.png")}
                    alt="Current Admin Console UI"
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
                participants and learned that they typically didn't read helper
                text as they tried to complete the task as fast as they could.
                User 1 and User 2 commented that obvious visual cues would help
                signify that the action required special attention.
              </p>
            </Col>
          </Row>

          <Row className="justify-content-center">
            <Col lg="10">
              <h3>Final Design</h3>
              <p>
                By combining the testing result and feedback received from the
                user, I decided to add an additional step to display an alert
                message regarding to license purchase.
              </p>
              <Row className="justify-content-center">
                <Col lg="12">
                  <ImageBox
                    src={this.getImageUrl("new-design.png")}
                    alt="Current Admin Console UI"
                    className="img-fluid"
                  />
                </Col>
              </Row>
              <p>
                I completed the final designs, which are being implemented after
                I finished my internship at PlanGrid.
              </p>
              <Row className="justify-content-center">
                <Col lg="12">
                  <ImageBox
                    src={this.getImageUrl("final-flow.png")}
                    alt="Current Admin Console UI"
                    className="img-fluid"
                  />
                </Col>
              </Row>
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
    mainImage: file(relativePath: { eq: "AC/main.png" }) {
      ...MainImageSizes
    }
  }
`;
