import * as React from "react";
import * as sharedStyles from "./styles.module.scss";
import { Col, Container, Row } from "reactstrap";
import { graphql, withPrefix } from "gatsby";
import { ImageBox } from "../../components/image-box";
import { ProjectLayout } from "../../components/project-layout";
import { ProjectPageProps } from "../../models/project-page-props";

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
                PlanGrid’s primary objective is to make intuitive and impactful
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
                The Admin Console is a part of PlanGrid web products that allows
                IT administrators to add, remove, and manage user accounts as
                well as to purchase PlanGrid licenses for users who involve in
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
              <h3>Problems</h3>
              <p className={sharedStyles.quote}>
                With the current system, IT administrators have a limited
                capability to monitor license usage. While they see information
                such as the number of available and used licenses, they are
                unable to access a list of projects that their users are working
                on.
              </p>
              <p>
                There are times when employees use company license to work on
                their personal projects. Problems occur when they run out of
                sheet storage and request for a license upgrade. Since the IT
                admins can't see list of projects that the employees are working
                on, it's challenging to know if the extra storage is required
                for the company work. As a result, the company has to
                unnecessary pay extra to upgrade licenses for these employees.
              </p>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col lg="10">
              <h3>Project Goal</h3>

              <p>
                The overall goal of this project is to design a workflow that
                allowed the IT administrators to set up organization ownership
                of user accounts in addition to the existing workflow. This
                feature will enables the IT admins to see lists of project that
                their users are working on.
              </p>
            </Col>
          </Row>

          <Row className="justify-content-center">
            <Col lg="10">
              <h3>The Current Admin Console</h3>
              <p>
                The current version of Admin Console consists of two major
                components: the usage of different license types and the user
                log that display a list of people working on company projects.
                The IT admins can click "add license" button to buy more
                licenses and click "new users" button to add more people to the
                organization.
                <p>
                  From a design perspective, not every part of the Admin Console
                  is built using components from PlanGrid’s design system. For
                  example, the “more options icon” at the end of the row of user
                  log doesn’t exist in other parts of PlanGrid web app.
                </p>
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
              <h3>Designing the Solution</h3>
              <h4>User Flow</h4>
              <p>
                During project onboarding, I worked with a project manager to
                understand project scope and gather feature requirements. From
                there, I created a user workflow diagram to explore and identify
                different paths that the IT admins could perform to complete
                their tasks. In the diagram, an IT admin can add new users or
                manage the existing users. If he decides to manage a user, he’ll
                send a request to manage the user account. If he just wants the
                user to work on company projects, he’ll send an invitation to
                the user to join the organization. On the other end, the user
                can accept or reject the request or the invitation.
              </p>
              <p>
                In addition to this user flow diagram, you can also check out a
                complete version of user workflow map here.
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
              <h4>Wireframes</h4>
              <p>lorem ipsum</p>
            </Col>
          </Row>

          <Row className="justify-content-center">
            <Col lg="5">
              <ImageBox
                src={this.getImageUrl("add-new-user.jpg")}
                alt="Collect information using sticky notes"
                className="img-fluid"
              />
            </Col>
            <Col lg="5">
              <ImageBox
                src={this.getImageUrl("invite-existing-user.jpg")}
                alt="Whiteboard with research"
                className="img-fluid"
              />
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col lg="10">
              <h3>Enhance the User Experience</h3>
              <p>1. The modal box for add new user flow</p>
              <p>
                The current design of the modal box requires the IT admins to
                scroll back and forth to view license options and email
                addresses they've entered. By adding account management section
                to the box, its height will increases even more. Since the modal
                box handles a goal-oriented task, the endless scrolling in the
                current design might prevent the IT admins to quickly accomplish
                their tasks. As a result, I decided to explore a new design
                pattern that would solve the endless scrolling problem. I
                divided the box into 2 columns and placed the account management
                section on the left side and the license option to the right
                side.
              </p>
              <p>2. In flow license purchase</p>
              <p>
                The current design of the modal box requires the IT admins to
                scroll back and forth to view license options and email
                addresses they've entered. By adding account management section
                to the box, its height will increases even more. Since the modal
                box handles a goal-oriented task, the endless scrolling in the
                current design might prevent the IT admins to quickly accomplish
                their tasks. As a result, I decided to explore a new design
                pattern that would solve the endless scrolling problem. I
                divided the box into 2 columns and placed the account management
                section on the left side and the license option to the right
                side.
              </p>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col lg="10">
              <h3>In flow license purchase</h3>
              <p>
                Currently, the IT admins can only purchase licenses from a user
                log page. They will have to abandon the add new users flow to go
                back to the user log and purchase additional licenses before
                being able to add new users. This process can waste their time
                and increase their frustration level. Therefore, I'm designing a
                workflow and user interfaces that will allow the IT admins to
                buy additional licenses without having to discard the entire
                process.
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
