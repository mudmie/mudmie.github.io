import * as React from "react";
import * as sharedStyles from "./styles.module.scss";
import { Col, Container, Row } from "reactstrap";
import { graphql, withPrefix } from "gatsby";
import { ImageBox } from "../../components/image-box";
import { ProjectLayout } from "../../components/project-layout";
import { ProjectPageProps } from "../../models/project-page-props";

export default class WorkflowSettingsPage extends React.Component<
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
              <h3>The Project &amp; My Roles </h3>
              <p>
                Every four months, PlanGrid recruits students from the
                University of Waterloo for its internship program. As a way to
                show appreciation to their contribution to the company, the
                engineering director came up with an idea to design a limited
                edition t-shirt for them. As a designer, I worked with the co-op
                students to (secretly) brainstorm ideas for the design of the
                t-shirt. I sketched different designs and used Illustrator to
                create illustrations.
              </p>
            </Col>
          </Row>

          <Row className="justify-content-center">
            <Col lg="10">
              <h3>Brainstorming Ideas</h3>
              <p className={sharedStyles.quote}>
                The design workshop plays an important roles to gather ideas
                from the co-op students. Since they will be wearing the t-shirt,
                it's crucial for me to have them involved in the design process.
              </p>
              <p>
                During the design workshop, I asked the co-op students to write
                down ideas or words that popped up in their mind when thinking
                about PlanGrid and the University of Waterloo. Everyone in the
                workshop had the word "geese" in their list as they are so many
                geese around the university campus. Concepts of hard hat, campus
                building, and construct your future also showed up as PlanGrid
                creates software for the construction industry. Other ideas such
                as maple leaf, US and Canada maps also appeared in the workshop.
              </p>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col lg="6">
              <ImageBox
                src={this.getImageUrl("wordcloud.jpg")}
                alt="Ideas generated in the design workshop"
                className="img-fluid"
              />
            </Col>
          </Row>

          <Row className="justify-content-center">
            <Col lg="10">
              <h3>Crazy 8's</h3>
              <p>
                In crazy 8's exercise, I asked the students to convert the ideas
                that they brainstormed earlier into drawings. They had to sketch
                a total of 8 pictures, and they only had a one minute to sketch
                each of them. The activity turned to be quite challenging for
                these students because they didn't participate in design
                workshop often. There were times when students hesitated to draw
                because they were scared that their pictures would look ugly.
                There were also some students who gave up drawing as they ran
                out of ideas. To maintain the energy level in the room, I had to
                gave them some of the keywords generated in the brainstorming
                sessions as well as to emphasize them to focus on the ideas
                rather than the look of their drawings.
              </p>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col lg="6">
              <ImageBox
                src={this.getImageUrl("crazy8.jpg")}
                alt="Crazy 8's drawings"
                className="img-fluid"
              />
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col lg="10">
              <h3>Designing the Logo</h3>
              <p>
                Before I started sketching the illustration, I spent some time
                looking for inspiration on the internet. I was looking for
                pictures of Waterloo geese, university campus buildings, Bob the
                Builder, and San Francisco landmark like the Golden Gate Bridge.
              </p>
              <Row className="justify-content-center">
                <Col lg="8">
                  <ImageBox
                    src={this.getImageUrl("inspo.jpg")}
                    alt="Haunting for Inspiration"
                    className="img-fluid"
                  />
                </Col>
              </Row>
            </Col>
          </Row>

          <Row className="justify-content-center">
            <Col lg="10">
              <p>
                Once I got enough inspiration, I began to sketch the designs.
                During this process, a lot of my sketches tended to revolve
                around the concept of Waterloo geese since it was the design
                that got requested the most.
              </p>
              <Row className="justify-content-center">
                <Col lg="8">
                  <ImageBox
                    src={this.getImageUrl("sketches.jpg")}
                    alt="Haunting for Inspiration"
                    className="img-fluid"
                  />
                </Col>
              </Row>
            </Col>
          </Row>

          <Row className="justify-content-center">
            <Col lg="10">
              <p>
                Because of this, my mentor taught me a double diamond design
                process, from which I learned to explore different designs and
                narrowed down to ones that would work for this project. I
                adopted this method and came up with three different designs:
                the goose, the buildings, and the plain text.
              </p>
            </Col>
          </Row>

          <Row className="justify-content-center">
            <Col lg="8">
              <ImageBox
                src={this.getImageUrl("print.jpg")}
                alt="Design Options"
                className="img-fluid"
              />
            </Col>
          </Row>

          <Row className="justify-content-center">
            <Col lg="10">
              <h3>Final Design</h3>
              <p>
                I presented the design options to other designers in a design
                critique
              </p>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col lg="8">
              <ImageBox
                src={this.getImageUrl("shirt.png")}
                alt="Wireframes of Craft Beer Ordering System"
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
  query WorkflowSettingsQuery($path: String!) {
    allProjects: allProjectsJson {
      ...ProjectFields
    }
    project: allProjectsJson(filter: { url: { eq: $path } }) {
      ...ProjectFields
    }
    mainImage: file(relativePath: { eq: "Settings/main.png" }) {
      ...MainImageSizes
    }
  }
`;
