import * as React from "react";
import * as sharedStyles from "./styles.module.scss";
import { Col, Container, Row } from "reactstrap";
import { graphql, withPrefix } from "gatsby";
import { ImageBox } from "../../components/image-box";
import { ProjectLayout } from "../../components/project-layout";
import { ProjectPageProps } from "../../models/project-page-props";

export default class TastingNotePage extends React.Component<
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
              <h3>Background</h3>
              <p>
                LCBO is one of the world's largest alcoholic beverage
                purchasers, there are numbers of new products need to be
                evaluated each year. As a result, product consultants meet 3
                times a year to sample and document tasting notes of the new
                products.
              </p>
              <p>
                During the session, the consultants record the beverage notes in
                a given paper form after sampling each products. At the end of
                the session, the paper forms get transferred to the writing
                team, who transcripts the notes into digital format. This data
                is later used for creating product description, content for LCBO
                website and articles.
              </p>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col lg="6">
              <p className={sharedStyles.imageTitle}>
                An example of beer a evaluation form
              </p>
              <ImageBox
                src={this.getImageUrl("form.png")}
                alt="Beer Evaluation Form"
                className="img-fluid"
              />
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col lg="10">
              <h3>Problems</h3>
              <p className={sharedStyles.quote}>
                Current evaluation method is labour intensive as it requires a
                significant amount of manual effort. The entire process of
                gathering, delivering paperwork and transferring data is
                time-consuming and fallible.
              </p>
              <p>
                While it's challenging for the product consultants to manage and
                organize the product evaluation forms, it's a real pain for the
                data and writing team to go through piles of paper, try to read
                the hand writings, validate data quality, and manually enter it
                to electronic system.
              </p>
            </Col>
          </Row>

          <Row className="justify-content-center">
            <Col lg="10">
              <h3>User Persona</h3>
              <p>
                Imagine that there are at least 15 products to be evaluated by
                10 consultants in today session. This means a minimum of 150
                copies of the evaluation forms will be generated at the end of
                session. To gain a better understanding of what the users are
                going through, a user persona is created.
              </p>
              <Row className="justify-content-center">
                <Col lg="6">
                  <ImageBox
                    src={this.getImageUrl("persona.png")}
                    alt="User persona"
                    className="img-fluid"
                  />
                </Col>
              </Row>
            </Col>
          </Row>

          <Row className="justify-content-center mb-5">
            <Col lg="10">
              <h3>Wireframes</h3>
              <p>After reviewing the problems and user persona, I decided to</p>
              <ol>
                <li>
                  Choose mobile as a platform device since it's portable and
                  currently used by LCBO staff at the store.
                </li>
                <br />

                <li>
                  Design an application that allows product consultants to see
                  list of products that need to be evaluated, select and
                  evaluate products then submit the form electronically.
                </li>
                <br />
                <li>
                  Adopt a concept of multiple choice answers to craft the user
                  experience. The users will simply tab buttons that represent
                  their answers and proceed to next questions. With this
                  approach, the users can focus on one task without having to
                  process lots of information at once.
                </li>
              </ol>

              <Row className="justify-content-center">
                <Col>
                  <ImageBox
                    src={this.getImageUrl("wireframes.jpg")}
                    alt="Tasting Note wireframes"
                    className="img-fluid"
                  />
                </Col>
              </Row>
            </Col>
          </Row>

          <Row className="justify-content-center mb-5">
            <Col lg="10">
              <h3>Finding Products</h3>
              <p>
                As soon as the product consultants log in to their account, they
                will see a list of products that needs to be evaluated as soon
                as possible on the home page. They can also use a search tool to
                look for specific products. By tabbing "Evaluate", the
                consultants will be able to see a full list of products they
                need to evaluate. From there, they can choose to view just beer,
                wine, spirits, or all types of products.
              </p>
            </Col>
          </Row>

          <Row className="justify-content-center">
            <Col lg="8">
              <ImageBox
                src={this.getImageUrl("find.png")}
                alt="Tasting Note interfaces"
                className="img-fluid"
              />
            </Col>
          </Row>

          <Row className="justify-content-center mb-5">
            <Col lg="10">
              <h3>Evaluating Products</h3>
              <p>
                Once the consultants select the product, the system will ask
                them to take a picture of that product. The picture will enable
                the data team to verify whether the correct product is being
                evaluated. In addition, the data will be useful for any future
                project that involves pattern recognition or machine learning.
                Once the picture is submitted, the consultants will be able
                select the answer to each question that was previously listed in
                the paper form. The consultants will have an opportunity to
                review their answers before submitting their evaluation.
              </p>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col lg="10">
              <ImageBox
                src={this.getImageUrl("evaluate.png")}
                alt="Tasting Note interfaces"
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
  query TastingNoteQuery($path: String!) {
    allProjects: allProjectsJson {
      ...ProjectFields
    }
    project: allProjectsJson(filter: { url: { eq: $path } }) {
      ...ProjectFields
    }
    mainImage: file(relativePath: { eq: "tasting-note/main.png" }) {
      ...MainImageSizes
    }
  }
`;
