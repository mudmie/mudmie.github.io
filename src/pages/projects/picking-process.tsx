import * as React from "react";
import * as sharedStyles from "./styles.module.scss";
import { Col, Container, Row } from "reactstrap";
import { graphql, withPrefix } from "gatsby";
import { ImageBox } from "../../components/image-box";
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
        mainImage={this.props.data.mainImage.childImageSharp.fluid}
      >
        <Container>
          <Row className="justify-content-center">
            <Col lg="10">
              <h3>About the Company</h3>
              <p>
                Nulogy is a software company that provides solutions to supply
                chain industry. One of its core product is PackManager, a
                software solution that helps brand owners and contract packagers
                (“copackers”) manage production, inventory and orders.
              </p>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col lg="10">
              <h3>My Roles</h3>
              <p>
                I conducted user research by interviewing professional service
                consultants to understand forklift operator’s responsibilities
                and challenges. I later used information from the user research
                to create a user journey map. Eventually, this initiative led
                the product team to review and redesign user workflow in the
                picking process to help the forklift operators to work
                efficiently.
              </p>
            </Col>
          </Row>

          <Row className="justify-content-center">
            <Col lg="10">
              <h3>Problem Overview &amp; Background</h3>
              <p className={sharedStyles.quote}>
                As forklift operators can pick up only one item at a time, they
                can waste time travelling back and forth from production area to
                warehouse area. How might we allow them to finish their task
                quickly while also minimize potential error in the process?
              </p>
              <p>
                The warehouse picking process normally involves forklift
                operators picking up items from one location and drop them off
                at another location. Currently, the forklift operators can only
                pick up one pallet at a time due to the restriction of the
                software that Nulogy provides. This can slow down the picking
                process as the forklift operators have to make multiple trips to
                pick up items until they fulfill the picking list. To increase
                efficiency to their workflow, I reviewed the shipping process
                and designed a feature that would allow them to pick up multiple
                items at once.
              </p>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col lg="10">
              <h3>User Research</h3>
              <p>
                I began my design process by interviewing Nulogy's professional
                service consultants, who worked directly with the workers at the
                manufacturing sites. After multiple rounds of interviews, I was
                able to collect sufficient information to summarize a general
                workflow of the forklift operators.
              </p>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col lg="5">
              <ImageBox
                src={this.getImageUrl("research2.jpg")}
                alt="Collect information using sticky notes"
                className="img-fluid"
              />
            </Col>
            <Col lg="5">
              <ImageBox
                src={this.getImageUrl("research.jpg")}
                alt="Whiteboard with research"
                className="img-fluid"
              />
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col lg="10">
              <h3>User Journey Map — First Iteration</h3>
              <p className={sharedStyles.quote}>
                Designing a user journey map was challenging as this was my
                first time doing it. How can I put all the information learned
                from the user research in an A3-sized paper? How do I create a
                visual appeal to attract other employees to learn more about
                forklift operators?
              </p>

              <p>
                With the information from the interview sessions, I created a
                user journey map that shows forklift operator's thoughts and his
                interaction with other workers. I found it to be difficult to
                create a balance between text and graphic contents. As a result,
                the first version of my user journey looked this ugly...
              </p>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col lg="8">
              <ImageBox
                src={this.getImageUrl("1.png")}
                alt="First iteration of user journey map"
                className="img-fluid"
              />
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col lg="10">
              <h3>User Journey Map — Second Iteration</h3>
              <p>
                After a long talk with other designers, I decided to try a
                different design on my second attempt. Majority of graphics were
                removed in the second iteration, making the page look a lot
                cleaner than it was in the first iteration.
              </p>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col lg="8">
              <ImageBox
                src={this.getImageUrl("2.png")}
                alt="Second iteration of user journey map"
                className="img-fluid"
              />
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col lg="10">
              <h3>User Journey Map — Third Iteration</h3>
              <p>
                To add some contrast to the paper, I changed the color scheme
                from fifty shades of blue to a mix of warm and cold colors. I
                also put all the information in the paper so that I knew how to
                manage the content. The first section of the map provides an
                overview of a forklift driver, including his responsibility,
                goals and key people. The body section of the map covers the
                workflow of the forklift driver, and the last section shows pain
                points that the forklift driver commonly undergoes.
              </p>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col lg="6">
              <ImageBox
                src={this.getImageUrl("3.png")}
                alt="Third iteration of user journey map"
                className="img-fluid"
              />
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col lg="10">
              <h3>User Journey Map — Final Result</h3>
              <p>
                In the final version of the user journey map, cartoon icons for
                key people were replaced with colored dots with initials of
                their position. This was done to reduce mental workload for the
                audience as they wouldn't have to remember which icon represent
                which person.
              </p>
              <p>
                Copies of the user journey map were displayed in the design room
                and distributed to various product teams. With good
                understandings of the user's workflow, goals and pains, the
                product team at Nulogy will be able to design and develop
                solutions that are more user-centered.
              </p>
            </Col>
          </Row>

          <Row className="justify-content-center">
            <Col lg="6">
              <ImageBox
                src={this.getImageUrl("4.png")}
                alt="Final iteration of user journey map"
                className="img-fluid"
              />
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col lg="10">
              <h3>Designing the Solution</h3>
              <p>
                To increase efficiency in the picking process, I designed a
                simple solution that allowed forklift operators to pick up
                multiple pallets at once. In step 5 and 6 of the interfaces
                below, the users have an option to pick up additional pallet(s)
                or to drop off pallet(s) that they currently have on their
                forklift.
              </p>
              <ImageBox
                src={this.getImageUrl("interface.png")}
                alt="New interface of picking process"
                className="img-fluid"
              />
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col lg="10">
              <h3>Next Steps</h3>
              <p>
                While this problem seemed to be resolved by adding a feature
                that allows forklift operators to pick up multiple pallets at a
                time, there are other issues that need to be considered.
              </p>
              <p>
                <i>
                  <b>
                    "What is the maximum number of pallets that can be picked at
                    once?"
                  </b>
                </i>
                <br />
                This question was asked by the professional service consultants
                when I presented them with this prototype. It's good to allow
                multiple pallets to be picked at once, but some limitation
                should still exist to prevent any potential error. Still, the
                maximum number can be varied, depending on the workflow of each
                production site. Therefore, the product team needs to continue
                researching whether to set a standard number or to allow the
                number to be customized by each client.
              </p>

              <p>
                <i>
                  <b>
                    "Can we redesign the entire picking process experience so
                    that it's more user-friendly?"
                  </b>
                </i>
                <br />I see this feature as the first step to improve user
                experience in picking process. However, there are many other
                components that could be redesign to further improve the user
                experience. For example, the UI could be polished as the screen
                looks quite overwhelming when the list of items grows. This
                makes it hard for the forklift operators to capture every
                information on the screen, especially when they are driving
                their forklifts.
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
