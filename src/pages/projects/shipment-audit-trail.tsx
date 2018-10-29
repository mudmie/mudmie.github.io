import { graphql, withPrefix } from "gatsby";
import { OutboundLink } from "gatsby-plugin-google-analytics";
import * as React from "react";
import { Col, Container, Row } from "reactstrap";
import { ProjectLayout } from "../../components/project-layout";
import { ProjectPageProps } from "../../models/project-page-props";

export default class ShipmentAuditTrailPage extends React.Component<
  ProjectPageProps,
  {}
> {
  public render() {
    return <div />;
  }
  public render2() {
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
                Products that are consumed by consumers such as food, drugs, and
                cosmetics are considered a&nbsp;
                <i>
                  <b>high risk for public safety.</b>
                </i>
                To control the quality and the safety of these products, the
                Food and Drug Administration (FDA) has enforced a number of
                regulations, including the &nbsp;
                <OutboundLink
                  href="https://www.accessdata.fda.gov/scripts/cdrh/cfdocs/cfcfr/CFRSearch.cfm?CFRPart=211&amp;showFR=1"
                  target="_blank"
                >
                  Code of Federal Regulation Title 21
                </OutboundLink>
                . This regulation specifically instructs that&nbsp;
                <i>
                  <b>
                    there must exist a system that records and archives
                    activities performed during the entire production process
                  </b>
                </i>
                , starting from obtaining materials until distributing finished
                goods.
              </p>
            </Col>
          </Row>

          <Row className="justify-content-center">
            <Col lg="10">
              <h3>Situation of Concern</h3>
              <p>
                Manufacturing plants and copackers are fast-paced working
                environment. Workers need to work and move around quickly to
                complete their assigned tasks. They also work in different
                shifts, making it even harder to track all issues and changes
                that happen in a day.
              </p>
              <p>
                From time to time, unexpected events happen. Currently, there is
                &nbsp;
                <i>
                  <b>
                    no way to track who, what, when, and why a production record
                    is modified or deleted
                  </b>
                </i>
                &nbsp;. In an extreme case of a product recall by the FDA, it is
                critical that records of production activities are presented for
                referring affected batches or for other investigations.
              </p>
            </Col>
          </Row>

          <Row className="justify-content-center">
            <Col lg="10">
              <h3>First Round of User Workflow Research</h3>
              <p>
                To design a Shipment Audit Trail, I, as a designer, must have a
                solid understanding of the shipping process. The knowledge of
                the shipping workflow will enable me to answer the questions
                what are activities that must be captured in the Audit Trail.
              </p>
              <p>
                Each client has the ability to create a custom workflow that
                fits their specific needs or processes. With a large number of
                clients, there is a high number of variations in the workflow
                that each client chooses to follow at their site. To understand
                the overall shipping process, I interviewed Nulogy's
                professional service consultant, who ho work directly with
                clients to provide training and technical supports.
              </p>
              <p>
                After several interviews with multiple consultants, a
                low-fidelity user workflow is created by grouping sticky notes
                based on category of tasks and their hierarchical order
              </p>
              <img
                src={this.getImageUrl("research.jpg")}
                alt="Work Breakdown Structure of Craft Beer Ordering System"
                className="img-fluid"
              />
            </Col>
          </Row>

          <Row className="justify-content-center">
            <Col lg="10">
              <h3>Second Round of User Workflow Research</h3>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col lg="10">
              <p>
                The second round of interview is conducted to fill the gap of
                missing information from the previous round. It is useful to
                understand more about extreme cases and problems that can happen
                after a shipment is shipped. Some potential problems due to
                human errors include sending a shipment to a wrong destination
                or sending wrong items. In these cases, any past record related
                to the shipment is needed for further investigation to rectify
                the situation. With additional information, I create a complete
                workflow for a typical shipping process shown below.
              </p>
              <img
                src={this.getImageUrl("workflow.png")}
                alt="Work Breakdown Structure of Craft Beer Ordering System"
                className="img-fluid"
              />
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col lg="10">
              <h3>The Design</h3>
              <p>
                The
                <img
                  src={this.getImageUrl("info.png")}
                  alt="Work Breakdown Structure of Craft Beer Ordering System"
                  className="img-fluid"
                />
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
  query ShipmentAuditTrailQuery($path: String!) {
    allProjects: allProjectsJson {
      ...ProjectFields
    }
    project: allProjectsJson(filter: { url: { eq: $path } }) {
      ...ProjectFields
    }
    mainImage: file(relativePath: { eq: "Audit Trail/main.png" }) {
      ...MainImageSizes
    }
  }
`;
