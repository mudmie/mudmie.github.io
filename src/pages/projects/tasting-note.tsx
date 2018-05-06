import * as React from "react";
import { ProjectHeader } from "../../components/project-header";
import { ProjectPageProps } from "../../models/project-page-props";
import { Container, Row, Col } from "reactstrap";
import { withPrefix } from "gatsby-link";
import * as sharedStyles from "./styles.scss";

export default class TastingNotePage extends React.Component<
  ProjectPageProps,
  {}
> {
  public render() {
    return (
      <div
        className={`${sharedStyles.projectPage} ${sharedStyles.themeOrange}`}
      >
        <ProjectHeader
          project={this.props.data.allProjectsJson.edges[0].node}
        />
        <Container>
          <Row>
            <Col>
              <h3>Current Way of Collecting Data</h3>
              <h4>
                — data is recorded in paper format before it gets transferred to
                electronic format
              </h4>
              <ul>
                <li>
                  LCBO is one of the world's largest alcoholic beverage purchasers,
                  there are numbers of new products need to be evaluated yearly.
                </li>
                <li>
                  Product consultants meet 3 times a year to sample and document
                  tasting notes of new products.
                </li>
                <li>
                  After tasting each product, the consultants have to record the
                  beverage notes in provided paper form.
                </li>
                <li>
                  At the end of the tasting session, paper forms get transferred
                  to the writing team to transcript the evaluation notes into
                  digital format.
                </li>
              </ul>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col lg="6">
              <p className={sharedStyles.imageTitle}>
                An example of beer evaluation form
              </p>
              <img
                src={withPrefix(
                  `/images/${
                    this.props.data.allProjectsJson.edges[0].node.imageFolder
                  }/form.png`
                )}
                alt="Tasting Note Evaluation Form"
                className="img-fluid"
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <h3>Identifying Problem</h3>
              <h4>— current process is labour intensive and prone to error</h4>
              <p>
                The existing evaluation method requires a significant amount of
                manual effort. The entire process of gathering, delivering
                paperwork and transferring data is time consuming and fallible.
                While it's challenging for the product consultant to to manage
                and organize all the evaluation forms, it's a pain for the
                writing team to go through piles of paper, validate the quality
                of data and manually enter the notes to electronic system.{" "}
              </p>
            </Col>
          </Row>

          <Row>
            <Col>
              <h3>Crafting the Experience</h3>
              <h4>
                — minimize manual process by enabling product consultants to
                evaluate products electronically{" "}
              </h4>
              <ul>
                <li>
                  <b>User Persona — </b>
                  <i>understanding what user is going through </i>
                </li>
                <p>
                  The beginning of one's worst nightmare: imagine that there are at least 15 products to be evaluated by
                  10 consultants in today session. This means a minimum of 150
                  copies of the evaluation forms will be generated at the end of
                  session.
                </p>

                <Row className="justify-content-center">
                  <Col lg="6">
                    <img
                      src={withPrefix(
                        `/images/${
                          this.props.data.allProjectsJson.edges[0].node
                            .imageFolder
                        }/persona.png`
                      )}
                      alt="Tasting Note Evaluation Form"
                      className="img-fluid"
                    />
                  </Col>
                </Row>

                <li>
                  <b> Wireframes — </b>{" "}
                  <i>
                    creating the first low-fidelity prototype to present ideas &amp;
                    get feedback from stakeholders
                  </i>
                </li>
                <p>
                  After reviewing user’s problem and persona, I decided to 
                </p>
                <ul>
                  <li>
                    propose that lists of products to be evaluated will be
                    entered to the system prior to the tasting session and the
                    notes will be automatically stored in the central database
                    after submission.
                  </li>
                  <li>
                    choose mobile as a platform device since it's portable and
                    currently used by some of LCBO staff at the store.
                  </li>
                  <li>
                    design a mobile application that allows product consultants
                    to see list products that need to be evaluated, select and
                    evaluate products then submit the forms electronically.
                  </li>

                  <li>
                    adopt a concept of multiple choice answers to craft the user
                    experience. The users will simply tab buttons that represent
                    their answers before proceeding to the next question. With
                    this approach, the users can focus on one task without
                    having to process lots of information at once.
                  </li>
                  <li>use text field as a channel to receive longer input </li>
                </ul>
                <img
                    src={withPrefix(
                      `/images/${
                        this.props.data.allProjectsJson.edges[0].node
                          .imageFolder
                      }/wireframes.jpg`
                    )}
                    alt="Tasting Note Evaluation Form"
                    className="img-fluid"
                  />
                <li>
                  <b> Mockups — </b>{" "}
                  <i>
                    creating first low-fidelity prototype to present ideas &amp;
                    get feedback from stakeholders
                  </i>
                </li>
                <img
                  src={withPrefix(
                    `/images/${
                      this.props.data.allProjectsJson.edges[0].node.imageFolder
                    }/full.png`
                  )}
                  alt="Tasting Note Evaluation Form"
                  className="img-fluid"
                />
              </ul>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export const pageQuery = graphql`
  query TastingNoteQuery {
    allProjectsJson(filter: { url: { eq: "/projects/tasting-note" } }) {
      edges {
        node {
          name
          subtitle
          description
          url
          imageFolder
        }
      }
    }
  }
`;
