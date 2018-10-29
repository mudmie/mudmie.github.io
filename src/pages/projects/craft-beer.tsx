import { graphql, withPrefix } from "gatsby";
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
        currentProject={this.props.data.project.edges[0].node}
        mainImage={this.props.data.mainImage.childImageSharp.sizes}
      >
        <Container>
          <Row className="justify-content-center">
            <Col lg="10">
              <h3>Background</h3>
              <p>
                Craft beer is usually produced locally in small quantity by a
                small to medium-sized breweries, making it impossible for the
                breweries to supply sufficient quantity of products to LCBO
                warehouses all at once. As a result, each LCBO retail store
                needs to contact local breweries directly to place orders and
                manage shipping logistics.
              </p>
              <p>
                A store manager or beer ambassador is responsible for managing
                craft beer inventory and placing orders. Currently, the
                inventory is tracked with a spreadsheet and calculated by hand.
                Once the quantities are determined, the staff makes phone calls
                to each craft brewers to place order and arrange delivery date.
                To modify, update or check on orders, the staff has to make more
                phone calls during the week.
              </p>
            </Col>
          </Row>

          <Row className="justify-content-center">
            <Col lg="10">
              <h3>Problems</h3>
              <p>
                LCBO employees usually rely on{" "}
                <i>gut's feeling and experience</i> to decide what products and
                how many of them to order. There are other factors such as
                promotion and seasonal items that can affect their estimation.
                Without a proper guidance, it is almost{" "}
                <i>impossible to order accurate amount of products.</i>
              </p>
              <p>
                Making phone calls back and forth is also very time consuming,
                and it doesn't only cause burden to LCBO staff. There are about
                660 LCBO across Ontario, so each brewer can receive{" "}
                <i>hundreds of phone calls</i> on Monday and the following days.
              </p>
              <p>
                The current process restricts order modification to be made only
                through phone calls. As a result,{" "}
                <i>unexpected quantity or products</i> can show up on the
                delivery day if the brewer forgets to update with the store.
              </p>
            </Col>
          </Row>

          <Row className="justify-content-center">
            <Col lg="10">
              <h3>User Interview</h3>
              <p>
                Although I, as a designer, already understand the problems that
                LCBO staff and craft brewers are facing, it's still valuable for
                me to sit and chat with the users to ask questions and discover
                what kind of system that they are looking for.
              </p>
              <p>
                From sessions, held to capture extra pieces of information from
                LCBO store employees and craft brewers, I learnt that
              </p>
              <ul>
                <li>
                  LCBO employees looked for a system that would tell them exact
                  number of product quantity needed to be ordered.
                </li>
                <li>
                  LCBO staff would like to know an estimated delivery date from
                  the craft brewers.
                </li>
                <li>
                  After receiving orders from each LCBO store, craft brewers had
                  to record order details to their system manually because LCBO
                  didn't provide any platform for them to track the order
                  history.
                </li>
                <li>
                  Craft brewers needs an ability to modify orders as sometimes
                  they couldn't keep up with production or they realized that
                  the store ordered too many or too less.
                </li>
                <li>
                  Both parties wanted to be able to communicate requests or
                  updates through the system.
                </li>
              </ul>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col lg="10">
              <h3>Work Breakdown Structure</h3>
              <p>
                I use the Work Breakdown Structure to make sure that all
                required components are included in the design. The system is
                mainly divided into two parts: portal for LCBO store and portal
                for craft brewers.
              </p>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col lg="8">
              <img
                src={this.getImageUrl("wbs.png")}
                alt="Work Breakdown Structure of Craft Beer Ordering System"
                className="img-fluid"
              />
            </Col>
          </Row>

          <Row className="justify-content-center">
            <Col lg="10">
              <h3>First Glance</h3>
              <p>
                Based on my research on modern e-commerce systems, there are 3
                keys elements that exist in most of the systems:
              </p>
              <ol>
                <li>Order summary/history section </li>
                <li>Order details section</li>
                <li>New order section</li>
              </ol>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col lg="10">
              <img
                src={this.getImageUrl("wireframes.png")}
                alt="Wireframes of Craft Beer Ordering System"
                className="img-fluid"
              />
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col lg="10">
              <h3>Final Design</h3>
              <p>
                Here we have the portal for LCBO employees and the portal for
                craft brewers.
              </p>
            </Col>
          </Row>
          <Row className="justify-content-center mb-5">
            <Col lg="10">
              <img
                src={this.getImageUrl("full.png")}
                alt="Complete design of Craft Beer Ordering System"
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
  query CraftBeerQuery($path: String!) {
    allProjects: allProjectsJson {
      ...ProjectFields
    }
    project: allProjectsJson(filter: { url: { eq: $path } }) {
      ...ProjectFields
    }
    mainImage: file(relativePath: { eq: "Craft Beer/main.png" }) {
      ...MainImageSizes
    }
  }
`;
