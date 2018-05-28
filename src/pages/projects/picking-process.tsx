import { withPrefix } from "gatsby-link";
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
              <h3>Background.</h3>
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
              <h3>User Research.</h3>
              <p>
                I began my design process by interviewing Nulogy's professional
                service consultants, who worked directly with the workers at the
                manufacturing site. After multiple rounds of interviews, I was
                able to collect sufficient information to summarize the general
                workflow of the forklift operator. I then was assigned to create
                a user journey map using the information that I got from the
                interview sessions.
              </p>
              <img
                src={withPrefix(
                  `/images/${
                    this.props.data.project.edges[0].node.imageFolder
                  }/research.jpg`
                )}
                alt="Work Breakdown Structure of Craft Beer Ordering System"
                className="img-fluid"
              />
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col lg="10">
              <h3>First Iteration.</h3>
              <p>
                Designing a user journey map was challenging for me since I have
                never designed one before. I found it to be really difficult to
                create a balance between text and graphic contents. During my
                first attempt, I planned to design the user journey what I had
                in the first iteration. Yes, it was this ugly.
              </p>
              <img
                src={withPrefix(
                  `/images/${
                    this.props.data.project.edges[0].node.imageFolder
                  }/1.png`
                )}
                alt="Work Breakdown Structure of Craft Beer Ordering System"
                className="img-fluid"
              />
            </Col>
          </Row>
        </Container>
      </ProjectLayout>
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
