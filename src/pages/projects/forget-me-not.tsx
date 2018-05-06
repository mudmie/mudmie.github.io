import { withPrefix } from "gatsby-link";
import * as React from "react";
import { Col, Container, Row } from "reactstrap";
import { ProjectLayout } from "../../components/project-layout";
import { ProjectPageProps } from "../../models/project-page-props";

export default class ForgetMeNotPage extends React.Component<
  ProjectPageProps,
  {}
> {
  public render() {
    return (
      <ProjectLayout
        allProjects={this.props.data.allProjects.edges.map(e => e.node)}
        project={this.props.data.project.edges[0].node}
        mainImage={this.props.data.mainImage.childImageSharp.sizes}
      >
        <Container>
          <Row>
            <Col>
              <h3>Overview</h3>
              <h4>— because important tasks cannot be forgotten.</h4>
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
              <img
                src={withPrefix(
                  `/images/${
                    this.props.data.project.edges[0].node.imageFolder
                  }/1.png`
                )}
                alt="Tasting Note Evaluation Form"
                className="img-fluid"
              />
            </Col>
          </Row>

          <Row>
            <Col>
              <h3>Getting a bit extra</h3>
              <h4>
                — get notified whenever you're around the location attached to
                the task
              </h4>
              <ul>
                <li>
                  If the users choose to attach location when create an event,
                  the system will remind them to complete the task if they
                  happen to be around that location.
                </li>
                <li>
                  With embedded Google Map, users can search for locations that
                  might associate with their events/
                </li>
                <img
                  src={withPrefix(
                    `/images/${
                      this.props.data.project.edges[0].node.imageFolder
                    }/2.png`
                  )}
                  alt="Tasting Note Evaluation Form"
                  className="img-fluid"
                />
              </ul>
            </Col>
          </Row>
        </Container>
      </ProjectLayout>
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
    mainImage: file(relativePath: { eq: "Forget Me Not/main.png" }) {
      ...MainImageSizes
    }
  }
`;
