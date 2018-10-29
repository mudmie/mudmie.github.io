import { graphql } from "gatsby";
import { OutboundLink } from "gatsby-plugin-google-analytics";
import * as React from "react";
import { Col, Container, Row } from "reactstrap";
import { ProjectLayout } from "../../components/project-layout";
import { ProjectPageProps } from "../../models/project-page-props";

export default class RoundaboutCanadaPage extends React.Component<
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
          <Row>
            <Col className="text-center">
              <OutboundLink
                href="http://www.mudmie.com/roundabout"
                target="_blank"
                className="btn"
              >
                Visit the site
              </OutboundLink>
            </Col>
          </Row>

          <Row className="justify-content-center">
            <Col lg="10">
              <h3>Problems</h3>
              <p>
                Prior to my internship at the company, the company website
                wasn't responsive This caused issues like truncated text or
                content which{" "}
                <i>disabled customers to get information they needed.</i>
              </p>
              <p>
                During my first week working at the store, 10+ customers
                complaint that they weren't able to find store hours and phone
                number from the company website. There were many incoming phone
                calls asking about store hours and some other information that
                the website failed to provide.
              </p>
              <p>
                Search Engine also wasn't optimized due to poor-written code and
                lacks of responsiveness. The company wasn't listed on the first
                page of Google Search when the users search using keywords
                related to the escape room industry.
              </p>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col lg="10">
              <h3>User and Industry Research</h3>
              <p>
                It was my mission to gather as much as information that I could
                to add the <i>WOW</i> factor to the new company website.
              </p>
              <p>
                Since I was new to the escape room industry, I did lots of
                research about other escape rooms and how they advertised their
                business. I stalked their websites, observed the designs and
                collected good and bad things about them. I also directly asked
                users who came to play the escape rooms what they didn't like
                about the company website and what they expected to see on the
                new website.
              </p>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col lg="10">
              <h3>Design &amp; Implementation</h3>
              <p>
                The main goal of this process was to decide on the look of the
                website and the technology to build the website.
              </p>
              <ul>
                <li>
                  Through the research, only 1-2 escape room businesses used a
                  video background for their homepage. Therefore, I decided to
                  go with video background for the homepage of the new website
                  to grab attention from the audience.
                </li>
                <li>
                  Since the website didn't have a lot of content, simple HTML,
                  CSS, JavaScript and Boostrap were used to create a fully
                  responsive website.
                </li>
              </ul>
            </Col>
          </Row>

          <Row className="justify-content-center">
            <Col lg="10">
              <h3>Impressive Outcomes</h3>
              <p>
                I was very happy that after the release of the new website, lots
                of customers came in and mentioned about the new website and how
                they liked it more than the old one.
              </p>

              <p>
                Other employees at the store, including myself, agreed that we
                barely received complaints from customers regarding to not be
                able to access store information from the website. Oh, less
                phone calls regarding to store hours as well!
              </p>
              <p>
                Through data collection by the store and Google Analytic, it was
                clearly shown that the new website significantly contributed to
                the performance of the business.
              </p>
              <ul>
                <li>
                  Google Analytics showed that the website rank moved from 19th
                  to 8th when people searched with keyword "Escape room
                  Toronto".
                </li>
                <li>
                  The amount of income from customers who heard about the
                  company trough website increased around $17,000 monthly.
                </li>
              </ul>
            </Col>
          </Row>

          <Row className="justify-content-center">
            <Col lg="10">
              <h3>Reflection</h3>
              <p>
                Working at Roundabout Canada was a great learning experience
                from me. Looking at this piece of work at this moment makes me
                realize that there are <i>always rooms for improvements</i> for
                issues like documentation, alignment, consistency, layout and
                technology used to build the website.
              </p>
              <p>
                After all, this project is the it's the one that I'm always
                proud of even though it's a bit outdated. For a first year
                student, who started university for only 4 months, this project
                was definitely challenging, so it was a good exercise for me to
                keep learning and practicing my skills.
              </p>
            </Col>
          </Row>
        </Container>
      </ProjectLayout>
    );
  }
}

export const pageQuery = graphql`
  query RoundaboutCanadaQuery($path: String!) {
    allProjects: allProjectsJson {
      ...ProjectFields
    }
    project: allProjectsJson(filter: { url: { eq: $path } }) {
      ...ProjectFields
    }
    mainImage: file(relativePath: { eq: "Roundabout/main.png" }) {
      ...MainImageSizes
    }
  }
`;
