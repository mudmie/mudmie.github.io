import * as React from "react";
import { Col, Container, Row } from "reactstrap";
import { graphql, withPrefix } from "gatsby";
import { ImageBox } from "../../components/image-box";
import { ProjectLayout } from "../../components/project-layout";
import { ProjectPageProps } from "../../models/project-page-props";

export default class ForgetMeNotPage extends React.Component<
  ProjectPageProps,
  {}
> {
  public render() {
    return <div/>;
    return (
      <ProjectLayout
        allProjects={this.props.data.allProjects.edges.map(e => e.node)}
        currentProject={this.props.data.project.edges[0].node}
        mainImage={this.props.data.mainImage.childImageSharp.fluid}
      >
        <Container>
          <Row className="justify-content-center">
            <Col lg="10">
              <h3>Overview</h3>
              <p>
                Forget Me Not is the first mobile interface I’ve ever designed.
                With belief that <i>important tasks cannot be forgotten</i>, I
                designed the app to be as simple as possible. Its features
                include:
              </p>
              <ul>
                <li>Quick sign up through Facebook or Email</li>
                <li>
                  Simply create new event or a to-do by entering event title,
                  add a personal note, select due date and attach the location.
                </li>
                <li>
                  A build-in calendar for reference or adding some note as a
                  reminder.
                </li>
              </ul>
              <ImageBox
                src={this.getImageUrl("1.png")}
                alt="Forget Me Not Interface Set 1"
                className="img-fluid"
              />
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col lg="10">
              <h3>Getting a bit extra</h3>
              <p>
                There are plenty of planner apps in the market, so I decided to
                create something new. The users can choose to attach location
                when they create event, and the system will remind them to
                complete the task if they happen to be around that location.
                With embedded Google Map, users can search for locations that
                might associate with their events.
              </p>
              <ImageBox
                src={this.getImageUrl("2.png")}
                alt="Forget Me Not Interface Set 2"
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
  query ForgetMeNotQuery($path: String!) {
    allProjects: allProjectsJson {
      ...ProjectFields
    }
    project: allProjectsJson(filter: { url: { eq: $path } }) {
      ...ProjectFields
    }
    mainImage: file(relativePath: { eq: "forget-me-not/main.png" }) {
      ...MainImageSizes
    }
  }
`;
