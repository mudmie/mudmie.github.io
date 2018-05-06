import { withPrefix } from "gatsby-link";
import * as React from "react";
import { Col, Container, Row } from "reactstrap";
import { ProjectLayout } from "../../components/project-layout";
import { ProjectPageProps } from "../../models/project-page-props";

export default class CraftBeerPage extends React.Component<
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
              <h3>Current Craft Beer Ordering Process</h3>
              <h4>— a very manual process using spreadsheet and phone calls</h4>
              <ul>
                <li>
                  Unlike other LCBO products, craft beer orders and logistic
                  details are managed by store manager or beer ambassador
                  directly with each craft brewery.
                </li>
                <li>
                  Craft beer inventory is manually tracked with a spreadsheet.
                  LCBO staff normally spend entire Monday to go through
                  inventory and calculate ordering quantities by hand.
                </li>
                <li>
                  Once the quantities are determined, the staff makes phone
                  calls to each craft brewers to place order and arrange
                  delivery date.
                </li>
                <li>
                  To modify, update or check on orders, the staff has to make
                  more phone calls during the week.
                </li>
              </ul>
            </Col>
          </Row>
          <Row>
            <Col>
              <h3>Problems</h3>
              <h4>— time consuming and unpredictable process</h4>
              <ul>
                <li>
                  LCBO staff usually relies on gut's felling and experience to
                  decide what products and how many of them to order.
                </li>
                <li>
                  There are other factors such as promotion and seasonal items
                  that can affect the estimation of the LCBO staff. Therefore,
                  it is almost impossible to come up with an accurate number to
                  order without a proper guidance.
                </li>
                <li>
                  Making phone calls back and forth is very time consuming, and
                  it doesn't only cause burden to LCBO staff. There are about
                  660 LCBO across Ontario, so each brewer can receive hundreds
                  of phone calls on Monday and the following days.
                </li>
                <li>
                  Since order modification can only be made through phone calls,
                  unexpected quantity or products can show up on the delivery
                  day if the brewer forgets to update with the store.
                </li>
              </ul>
            </Col>
          </Row>
          <Row>
            <Col>
              <h3>Designing Solution</h3>
              <h4>
                — a system that allows store staff to submit orders to multiple
                brewers in a reasonable amount of time.
              </h4>
              <ul>
                <li>
                  <b>Sit &amp; Talk With Stakeholders— </b>
                  <i>
                    Asking questions is known to be an integral part of the
                    design process.
                  </i>
                </li>
                Two sessions were held to capture extra pieces of information
                from LCBO store employees and craft brewers. The following are
                things I learnt from them.
                <ul>
                  <li>
                    LCBO retail employees mentioned that their pain point was
                    around the manual process of managing inventory on a
                    spreadsheet as well as making countless numbers of phone
                    calls.
                  </li>
                  <li>
                    Craft brewers stated that they had to record order to their
                    system after receiving an order from each store since LCBO
                    didn't provide any platform to track the order history
                  </li>
                  <li>
                    Craft brewers needs an ability to modify store order as
                    sometimes they couldn't keep up with production or they
                    realized that the store ordered too many or too less.
                  </li>
                </ul>
                <li>
                  <b>Defining Problems— </b>
                  <i>
                    current process is time consuming, hard to maintain and
                    unpredictable
                  </i>
                </li>
                <ul>
                  <li>
                    LCBO staff usually relies on gut's felling and experience to
                    decide what products and how many of them to order.
                  </li>
                  <li>
                    There are other factors such as promotion and seasonal items
                    that can affect the estimation of the LCBO staff. Therefore,
                    it is almost impossible to come up with an accurate number
                    to order without a proper guidance.
                  </li>
                  <li>
                    Making phone calls back and forth is very time consuming,
                    and it doesn't only cause burden to LCBO staff. There are
                    about 660 LCBO across Ontario, so each brewer can receive
                    hundreds of phone calls on Monday and the following days.
                  </li>
                  <li>
                    Since order modification can only be made through phone
                    calls, unexpected quantity or products can show up on the
                    delivery day if the brewer forgets to update with the store.
                  </li>
                </ul>
                <li>
                  <b>Work Breakdown Structure (WBS)— </b>
                  <i>
                    Making sure that all required components are included in the
                    design
                  </i>
                </li>
                <ul>
                  <li>
                    The system is mainly divided into two parts: portal for LCBO
                    store and portal for craft brewers.
                  </li>
                </ul>
              </ul>

              <Row className="justify-content-center">
                <Col lg="6">
                  <img
                    src={withPrefix(
                      `/images/${
                        this.props.data.project.edges[0].node.imageFolder
                      }/wbs.png`
                    )}
                    alt="Tasting Note Evaluation Form"
                    className="img-fluid"
                  />
                </Col>
              </Row>
              <ul>
                <li>
                  <b>Wireframes— </b>
                  <i>
                    My first approach on design implementation is to create
                    hand-sketch wireframes that give general ideas of the system{" "}
                  </i>
                </li>
                Based on my research on modern e-commerce system, there are 3
                keys elements that exist in most of the systems:
                <ol>
                  <li>order summary section </li>
                  <li>order details section</li>
                  <li>new order section</li>
                </ol>
              </ul>
              <Row className="justify-content-center">
                <Col lg="6">
                  <img
                    src={withPrefix(
                      `/images/${
                        this.props.data.project.edges[0].node.imageFolder
                      }/wireframes.png`
                    )}
                    alt="Tasting Note Evaluation Form"
                    className="img-fluid"
                  />
                </Col>
              </Row>
            </Col>
          </Row>
          <Row>
            <Col>
              <h3>Final Design</h3>
              <h4>— Portal for LCBO staff and for craft brewers</h4>
              {/* <ol>
          <li>Portal for LCBO Staff </li>
          <ul>
            <li>On order summary page (2)</li>
            <p>
              Users can view informational, including order date, order number
              and order status, of all orders that were submitted.
            </p>
            <li>Order details page (3)</li>
            <p>
              {" "}
              Users see order details and list of all brewers associating with
              an order. If the brewer has modified the number of units, the
              original number of units ordered will have a red line strike
              through, and the new quantity will be displayed next to it.
            </p>
            <li>New Order Section (5,6,7)</li>
            <p>
              {" "}
              New order section consists of three different parts: (5) create new order
              page, (6) order review page and (7) order submission page. To
              create a new order, users select a brewer, a list of
              products manufactured by that brewer will show up on the right
              panel of the screen. Product image, product SKU, product name and
              volume, current LCBO promotion, suggested order quantity (SOQ) and
              total store inventory (TSI) are displayed. Under the “UNITS”
              column, a SOQ number will be automatically filled in the box. If
              the users desire to override the number of unit to be ordered,
              they can simply delete SOQ number and type in a new number. The
              users can enter any comment that they wish to note for the brewer
              in “Store Comment” box.
            </p>
          </ul>
          <li>Portal for Craft Brewers</li>
        </ol> */}
              <Row className="justify-content-center">
                <Col>
                  <img
                    src={withPrefix(
                      `/images/${
                        this.props.data.project.edges[0].node.imageFolder
                      }/full.png`
                    )}
                    alt="Tasting Note Evaluation Form"
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
}

export const pageQuery = graphql`
  query CraftBeerQuery {
    allProjects: allProjectsJson {
      ...ProjectFields
    }
    project: allProjectsJson(filter: { url: { eq: "/projects/craft-beer" } }) {
      ...ProjectFields
    }
    mainImage: file(relativePath: { eq: "Craft Beer/main.png" }) {
      ...MainImageSizes
    }
  }
`;
