import * as React from "react";
import * as sharedStyles from "./styles.module.scss";
import { Col, Container, Row } from "reactstrap";
import { graphql, withPrefix } from "gatsby";
import { ImageBox } from "../../components/image-box";
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
        currentProject={this.props.data.project.edges[0].node}
        currentProjectGroup={
          this.props.data.allProjectGroups.edges.find(
            pg =>
              pg.node.name == this.props.data.project.edges[0].node.projectGroup
          ).node
        }
        mainImage={this.props.data.mainImage.childImageSharp.fluid}
      >
        <Container>
          <Row className="justify-content-center">
            <Col lg="8">
              <h3>About the Company</h3>
              <p>
                The Liquor Control Board of Ontario (LCBO) is one of the world’s
                largest purchaser of alcoholic beverages. It distributes and
                sells liquor throughout the province of Ontario in Canada. In
                2016, an innovation lab, LCBO|next, was founded to design and
                develop new technologies that will enhance LCBO’s technology
                initiatives.
              </p>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col lg="8">
              <h3>My Roles</h3>
              <p>
                As a UX/UI designer at the lab, I met with stakeholders to
                discuss their problems and understand the user requirements and
                constraints. I designed a web portal that allows LCBO retail
                employees to place craft beer orders directly with brewers.
              </p>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col lg="8">
              <h3>Background</h3>
              <p>
                Craft beer is usually produced by a small to medium size local
                breweries. This makes it impossible for the breweries to supply
                a sufficient amount of products to all LCBO warehouse at once.
                As a result, each LCBO retail store needs to contact local
                breweries directly to place orders and manage shipping
                logistics.
              </p>
            </Col>
          </Row>

          <Row className="justify-content-center">
            <Col lg="8">
              <h3>Problems</h3>
              <p className={sharedStyles.quote}>
                With many factors such as promotion and seasonal items, it is
                impossible for LCBO employees to order an accurate amount of
                craft beer by just relying on their experience and gut feeling.
                Without a reliable ordering system, the process will continue to
                be time-consuming and prone to error.
              </p>

              <p>
                A store manager and a beer ambassador are responsible for
                managing craft beer inventory and placing orders. Currently, the
                inventory is tracked with a spreadsheet and calculated by hand.
                To order the products, the employee needs to estimate the
                quantity before making phone calls to each craft brewer to place
                an order and arrange a delivery date. To modify, update or check
                orders, the staff has to make more phone calls during the week.
              </p>

              <p>
                This current process doesn’t only cause a burden to LCBO staff,
                but also the craft brewers. Since there are about 660 LCBO
                stores across Ontario, each brewer can receive hundreds of phone
                calls during the week. In addition, the current process
                restricts order modification to be made only through phone
                calls. As a result, an unexpected quantity or products can show
                up on the delivery day if the brewer forgets to update with the
                store.
              </p>
            </Col>
          </Row>

          <Row className="justify-content-center">
            <Col lg="8">
              <h3>User Interview</h3>
              <p className={sharedStyles.quote}>
                I know the problems the users face. I also have a picture of the
                system that I want to design to solve the problems, but I can’t
                just do that. Why?
                <br />
                Because I’m not the user!
                <br />
                It doesn’t make sense to design a system that I love to use, but
                the real users hate to use.
              </p>
              <p>
                Although I already understand the problems that LCBO staff and
                craft brewers are facing, it’s still crucial for me to sit and
                chat with the users to ask questions and discover what kind of
                system that they are looking for.
              </p>
              <p>
                From interview sessions with LCBO employees and craft brewers, I
                learn that
              </p>
              <ul>
                <li>
                  LCBO employees look for a system that would tell the exact
                  number of products needed to be ordered.
                </li>
                <li>
                  LCBO employees would like to know an estimated delivery date
                  from the craft brewers.
                </li>
                <li>
                  After receiving orders from each LCBO store, craft brewers
                  have to record order details to their system manually because
                  LCBO doesn’t provide any platform for them to track the order
                  history.
                </li>
                <li>
                  Craft brewers need an ability to modify orders as sometimes
                  they can’t keep up with production or they realize that the
                  store orders too many or too less.
                </li>
                <li>
                  Both parties want to be able to make requests or updates
                  through the system.
                </li>
              </ul>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col lg="8">
              <h3>Work Breakdown Structure</h3>
              <p>
                I use the Work Breakdown Structure to make sure that all
                required components are included in the design. The system is
                mainly divided into two parts: a portal for LCBO store and a
                portal for craft brewers.
              </p>
              <Row className="justify-content-center">
                <Col lg="11">
                  <ImageBox
                    src={this.getImageUrl("wbs.png")}
                    alt="Work Breakdown Structure of Craft Beer Ordering System"
                    className="img-fluid"
                  />
                </Col>
              </Row>
            </Col>
          </Row>

          <Row className="justify-content-center">
            <Col lg="8">
              <h3>Wireframes</h3>
              <p>
                Based on my research on modern e-commerce systems, there are 3
                keys elements that exist in most of the systems:
              </p>
              <ul>
                <li>Order summary/history section </li>
                <li>Order details section</li>
                <li>New order section</li>
              </ul>
              <Row className="justify-content-center">
                <Col lg="11">
                  <ImageBox
                    src={this.getImageUrl("wireframes.png")}
                    alt="Wireframes of Craft Beer Ordering System"
                    className="img-fluid"
                  />
                </Col>
              </Row>
            </Col>
          </Row>

          <Row className="justify-content-center">
            <Col lg="8">
              <h3>Create Order </h3>

              <p className={sharedStyles.quote}>
                The main objective of this project is to build a system that
                helps determine the quantity of craft beer products LCBO
                employees should and allows them to place orders online.
              </p>
              <p>
                To place an order, the employees need to navigate to "New Order"
                on the menu bar. From there, they can search for craft beer
                vendors and see the list of products that each vendor carries.
                Once a vendor is selected, the employee will see product
                information as well as any promotion associated with the product
                (PROMO), Suggested Order Quantity (SOQ) and current store
                inventory (TSI). The unit number will be auto-filled based on
                the SOQ, but the users will be able to adjust the number as
                needed.
              </p>
              <p>
                In a case that the employees decide not to order any product
                from a vendor to their store, they can check the "No Order
                Reminder" box, which will trigger the system to send an
                automatic email to notify the vendor.
              </p>

              <Row className="justify-content-center">
                <Col lg="11">
                  <ImageBox
                    src={this.getImageUrl("lcbo.png")}
                    alt="Order Summary Page on LCBO Employee Web Portal"
                    className="img-fluid"
                  />
                </Col>
              </Row>
            </Col>
          </Row>

          <Row className="justify-content-center">
            <Col lg="8">
              <h3>Review &amp; Confirm Order </h3>
              <p className={sharedStyles.quote}>
                From perspectives of craft brewers, the system should allow them
                to review the order submitted by the store and make any
                necessary adjustment before shipping the products to LCBO
                stores.
              </p>
              Once the store employees submit the order, it will show up on the
              craft brewer’s portal. From there, craft brewers can review
              products, their quantity, and store comments. They can modify the
              quantity of product in the order and provide comments to the store
              as appropriate. Before they can confirm the order, they have to
              select at least one possible delivery date. This piece of
              information will help the store to arrange a delivery schedule.
              <p />
              <Row className="justify-content-center">
                <Col lg="11">
                  <ImageBox
                    src={this.getImageUrl("craft.png")}
                    alt="Order Summary Page on LCBO Employee Web Portal"
                    className="img-fluid"
                  />
                </Col>
              </Row>
            </Col>
          </Row>

          <Row className="justify-content-center">
            <Col lg="8">
              <h3>Order Details </h3>
              <p>
                From the order summary page, LCBO employees can take a quick
                glance on order status, which informs the number of products
                that have either been confirmed, modified, or delivered. On the
                order details page, the quantity of product in the original
                order is printed in black in the "Units" column. In a
                circumstance where the craft brewers decide to make an
                adjustment to the product quantity, the original quantity will
                get strikethrough, and the modified amount will be printed in
                red, put in a bracket and placed beside the original quantity
                There is also a button for the store employees to confirm
                delivery once they receive the products.
              </p>
              <Row className="justify-content-center">
                <Col lg="5">
                  <ImageBox
                    src={this.getImageUrl("summary-lcbo.png")}
                    alt="Order Summary Page on LCBO Employee Web Portal"
                    className="img-fluid"
                  />
                </Col>
                <Col lg="5">
                  <ImageBox
                    src={this.getImageUrl("detail-lcbo.png")}
                    alt="Order Summary Page on Craft Brewer Web Portal"
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
  query CraftBeerQuery($path: String!) {
    allProjects: allProjectsJson {
      ...ProjectFields
    }
    allProjectGroups: allProjectGroupsJson {
      ...ProjectGroupFields
    }
    project: allProjectsJson(filter: { url: { eq: $path } }) {
      ...ProjectFields
    }
    mainImage: file(relativePath: { eq: "craft-beer/main.png" }) {
      ...MainImageSizes
    }
  }
`;
