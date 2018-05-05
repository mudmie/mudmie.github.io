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
      <div className={sharedStyles.themeOrange}>
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
              <p>
                Since LCBO is one of the world’s largest alcoholic beverage
                purchasers, there are numbers of new products that need to be
                evaluated each year. Currently, product consultants meet 3 times
                a year to sample and document tasting notes of those new
                products. After tasting the beverages, each consultant has to
                record the notes in paper forms. The writing team is then
                responsible to transfer the notes to digital format. This data
                is important as it will later be used to create product
                description, content for LCBO’s website and articles.
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
                After hearing thoughts from product consultants and the writing
                team, a conclusion that the current process requires a
                significant amount of manual effort is delivered. The entire
                process of gathering, delivering paperworks and transferring
                data requires a significant effort and is prone to error.
                Because of the large amount of paper, it can be challenging for
                product consultant to manage and organize all the forms. In
                addition, it’s the pain for writers to go through piles of
                paper, validate the quality of notes and manually enter the
                notes to electronic system.{" "}
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
                <img
                  src={withPrefix(
                    `/images/${
                      this.props.data.allProjectsJson.edges[0].node.imageFolder
                    }/persona.png`
                  )}
                  alt="Tasting Note Evaluation Form"
                  className="img-fluid"
                />

                <p>
                  Imagine that there are at least 15 products to be evaluated by
                  10 consultants in today session. This means a minimum of 150
                  copies of evaluation forms will be generated at the end of
                  session. Keep in mind that in reality the tasting session is a
                  big event, so there is a high possibility that there will be
                  more that 15 products and 10 consultants.
                </p>
                <li>
                  <b> Wireframes — </b>{" "}
                  <i>
                    {" "}
                    creating first low-fidelity prototype to present ideas &amp;
                    get feedback from stakeholders
                  </i>
                </li>
                <img
                  src={withPrefix(
                    `/images/${
                      this.props.data.allProjectsJson.edges[0].node.imageFolder
                    }/wireframes.jpg`
                  )}
                  alt="Tasting Note Evaluation Form"
                  className="img-fluid"
                />
                <p>
                  After reviewing user’s problem and persona, I decided to
                  design a mobile application that will allow product consultant
                  to see list of products that they need to evaluate, select and
                  evaluate the product and submit the data digitally. - choose
                  mobile because easy to carry and it’s a device that LCBO staff
                  already use in store so no new investment in device required I
                  design the application with an intention that list of products
                  to be evaluated will be entered to the system prior to the
                  tasting session. During the session, product consultants will
                  see the list of products that they have to evaluate then they
                  can select the item that they are evaluating. I adopt the
                  concept of multiple choice answers to design the platform for
                  the user to input the their notes (mimicking the action of
                  circling answers from original form). With this method, the
                  user simply tabs buttons that represent the answer of their
                  choice. After select one answer, they will proceed to the next
                  question. This eliminates the needs to processing lots of
                  information at once. For answer that require longer input, the
                  user will be able to type into text fields. The notes will be
                  automatically stores to a central database.
                </p>
                <li>
                  <b> Mockups — </b>{" "}
                  <i>
                    {" "}
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
                <p>snake snake fish fish</p>
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
