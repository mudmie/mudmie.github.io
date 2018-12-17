import * as React from "react";
import * as sharedStyles from "./styles.module.scss";
import { Col, Container, Row } from "reactstrap";
import { graphql, withPrefix } from "gatsby";
import { ImageBox } from "../../components/image-box";
import { ProjectLayout } from "../../components/project-layout";
import { ProjectPageProps } from "../../models/project-page-props";

export default class ACPage extends React.Component<ProjectPageProps, {}> {
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
              <h3>About the Company </h3>
              <p>
                Every four months, PlanGrid recruits students from the
                University of Waterloo for its internship program. As a way to
                show appreciation to their contribution to the company, the
                engineering director came up with an idea to design a limited
                edition t-shirt for them. As a designer, I worked with the co-op
                students to (secretly) brainstorm ideas for the design of the
                t-shirt. I hand-sketched different designs and created
                illustrations using Adobe Illustrator.
              </p>
            </Col>
          </Row>

          <Row className="justify-content-center">
            <Col lg="10">
              <h3>Brainstorming Ideas</h3>
              <p className={sharedStyles.quote}>
                The design workshop plays an important role to gather ideas from
                the co-op students. Since they will be wearing the t-shirt, it's
                crucial for me to have them involved in the design process.
              </p>
              <p>
                During the design workshop, I asked the co-op students to write
                down ideas or words that popped up in their mind when thinking
                about PlanGrid and the University of Waterloo. Everyone in the
                workshop had the word "Waterloo geese" in their list as they are
                so many geese around the university campus. Concepts of a hard
                hat, campus buildings, and construct your future also showed up
                as PlanGrid creates software for the construction industry.
                Other ideas such as maple leaf, US and Canada maps also appeared
                in the workshop.
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
                In crazy 8’s exercise, the students spent a total of 8 minutes
                to convert words and ideas into 8 different drawings. The
                activity turned out to be quite challenging for them as they
                only had one minute to sketch each drawing. There were times
                when students feared that their pictures looked ugly or gave up
                drawing because they ran out of ideas. To maintain the energy
                level in the room, I had to shout out some of the keywords
                generated in the brainstorming sessions as well as to emphasize
                them to focus on the ideas rather than the look of their
                drawings.
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
                Coming out of the design workshop, I knew by heart that the
                students would like to have a goose on their t-shirt. Though I
                spent time looking for inspiration on the internet, a majority
                of my sketches still revolved around the concept of Waterloo
                geese.
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
                Because of this, my mentor taught me a double diamond design
                process, from which I learned to explore different designs and
                narrowed down to ones that would work for this project. I
                adopted this method and came up with three different designs:
                the goose, the buildings, and the plain text.
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
                I presented these designs to the design team and the creative
                director at PlanGrid. Everyone voted in favor of the PlanGrid +
                Goose logo as it suited the purpose of the project the most.
                However, one of the designers thought that the logo alone didn’t
                tell much about the work that PlanGrid provided to the
                construction industry. In response to the comment, I added the
                text that said “build better together” to the final design of
                the logo.
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
  query ACQuery($path: String!) {
    allProjects: allProjectsJson {
      ...ProjectFields
    }
    project: allProjectsJson(filter: { url: { eq: $path } }) {
      ...ProjectFields
    }
    mainImage: file(relativePath: { eq: "AC/main.png" }) {
      ...MainImageSizes
    }
  }
`;
