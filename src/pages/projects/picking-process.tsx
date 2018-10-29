import { graphql, withPrefix } from "gatsby";
import * as React from "react";
import { Col, Container, Row } from "reactstrap";
import { ProjectLayout } from "../../components/project-layout";
import { ProjectPageProps } from "../../models/project-page-props";

export default class PickingProcessPage extends React.Component<
  ProjectPageProps,
  {}
> {
  public render() {
    return (
      <ProjectLayout
        allProjects={this.props.data.allProjects.edges.map(e => e.node)}
        currentProject={this.props.data.project.edges[0].node}
        mainImage={this.props.data.mainImage.childImageSharp.sizes}
      >
        <Container>
          <Row className="justify-content-center">
            <Col lg="10">
              <h3>Background</h3>
              <p>
                Nulogy is a software company that provides solutions to supply
                chain industry. One of its core product is PackManager, a
                software solution that helps brand owners and contract packagers
                (“copackers”) manage production, inventory and orders. The
                Product team at Nulogy is responsible for design and develop
                features that will increase production efficiency and improve
                overall user experience.
              </p>
              <p>
                The warehouse picking process normally involves forklift
                operators picking up items from one location and drop them off
                at another location. Currently, the forklift operators can only
                pick up one pallet at a time due to the restriction of the
                software that Nulogy provides. This can slow down the picking
                process as the forklift operators have to make multiple trips to
                pick up items until they fulfill the picking list. To increase
                efficiency to their workflow, I decided to review the shipping
                process and designed a feature that would allow them to pick up
                multiple items at once.
              </p>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col lg="10">
              <h3>User Research</h3>
              <p>
                I began my design process by interviewing Nulogy's professional
                service consultants, who worked directly with the workers at the
                manufacturing site. After multiple rounds of interviews, I was
                able to collect sufficient information to summarize the general
                workflow of the forklift operator. I then was assigned to create
                a user journey map using the information that I got from the
                interview sessions.
              </p>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col lg="6">
              <img
                src={this.getImageUrl("research.jpg")}
                alt="whiteboard with research"
                className="img-fluid"
              />
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col lg="10">
              <h3>User Journey Map / First Iteration</h3>
              <p>
                Designing a user journey map was challenging for me since I've
                never designed one before. With the information from interview
                sessions, I planned to create a user journey map that shows
                forklift operator's thoughts and his interaction with other
                workers. However, I found it to be really difficult to create a
                balance between text and graphic contents. As a result, this is
                what it looked like in the first iteration. Yes, it was this
                ugly...
              </p>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col lg="8">
              <img
                src={this.getImageUrl("1.png")}
                alt="first iteration of user journey map"
                className="img-fluid"
              />
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col lg="10">
              <h3>User Journey Map / Second Iteration</h3>
              <p>
                I received quite a lot of feedback on the first design, and I
                decided to try a different design on my second attempt at
                capturing the user journey map. Majority of graphic contents
                were removed in the second iteration, making the page look a lot
                cleaner than it was in the first iteration.
              </p>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col lg="8">
              <img
                src={this.getImageUrl("2.png")}
                alt="second iteration of user journey map"
                className="img-fluid"
              />
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col lg="10">
              <h3>User Journey Map / Third Iteration</h3>
              <p>
                In this iteration, the color scheme was changed and all the
                information was put together. The first section of the map
                provides an overview of a forklift driver, including his
                responsibility, goals and key people. The body section of the
                map covers the workflow of the forklift driver, and the last
                section shows pain points that the forklift driver commonly
                undergoes.
              </p>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col lg="6">
              <img
                src={this.getImageUrl("3.png")}
                alt="third iteration of user journey map"
                className="img-fluid"
              />
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col lg="10">
              <h3>User Journey Map / Final Result</h3>
              <p>
                In the final version of the user journey map, the title
                "forklift driver" was replaced with "forklift operator", and
                icons for key people were replaced with colored dots with
                initials of their position. This was done to reduce mental
                workload for the audience as they wouldn't have to remember
                which icon represent which person. The existence of the user
                journey map allows the product designers to understand the
                workflow of the forklift operators as well as their goals and
                pain points, making the solutions designed to be more
                user-centered.
              </p>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col lg="6">
              <img
                src={this.getImageUrl("4.png")}
                alt="final iteration of user journey map"
                className="img-fluid"
              />
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col lg="10">
              <h3>Designing Solution</h3>
              <p>
                To increase efficiency in picking process for forklift
                operators, a simple solution is designed to allow the forklift
                operators to pick up multiple pallets at once. From the
                interface below, we can see that from step 5 to step 6, the
                users have an option to pick up more pallet or to drop off
                pallet(s) that they currently have on their forklift.
              </p>
              <img
                src={this.getImageUrl("interface.png")}
                alt="new interface of picking process"
                className="img-fluid"
              />
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col lg="10">
              <h3>Next Steps</h3>
              <p>
                While this problem seemed to be resolved by adding a feature
                that allows the forklift operator to pick up multiple pallets at
                a time, there are other issues that need to be considered.
              </p>
              <p>
                <i>
                  <b>
                    "What is the maximum number of pallets that can be picked at
                    once?"
                  </b>
                </i>
                <br />
                This question was asked by both myself and the professional
                service consultants when I presented them this prototype. It's
                good to allow multiple pallets to be picked at once, but some
                limitation should still exist to prevent any potential error.
                Still, the maximum number can be varied, depending on the
                workflow of each warehouse. Some warehouses might want their
                forklift operators to pick up only one pallet at a time.
                Therefore, the product team still needs to consider if a single
                number will be set up as a maximum number or the maximum number
                can be customized by each warehouse.
              </p>

              <p>
                <i>
                  <b>
                    "Can we redesign the entire picking process experience so
                    that it's more user friendly?"
                  </b>
                </i>
                <br />I consider the addition of this feature as a first step to
                improve user experience for picking process. However, I was
                mainly focusing to solve the pallet picking up issue, so there
                was very minimal UI designs in the prototype shown in a previous
                section. The current user interfaces neither have the best UI
                designs nor provide the optimal user experience. As a result, a
                series of design exercises was performed to explore possible
                redesign options.
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
  query PickingProcessQuery($path: String!) {
    allProjects: allProjectsJson {
      ...ProjectFields
    }
    project: allProjectsJson(filter: { url: { eq: $path } }) {
      ...ProjectFields
    }
    mainImage: file(relativePath: { eq: "Picking/main.png" }) {
      ...MainImageSizes
    }
  }
`;
