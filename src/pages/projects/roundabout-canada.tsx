import { OutboundLink } from "gatsby-plugin-google-analytics";
import * as React from "react";
import { Col, Container, Row } from "reactstrap";
import { ProjectHeader } from "../../components/project-header";
import { ProjectPageProps } from "../../models/project-page-props";
import * as sharedStyles from "./styles.scss";

export default class RoundaboutCanadaPage extends React.Component<
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
            <Col className="text-center">
              <OutboundLink
                href="http://www.mudmie.com/roundabout"
                target="_blank"
                className={`btn ${sharedStyles.btn}`}
              >
                Visit the site
              </OutboundLink>
            </Col>
          </Row>
          <Row>
            <Col>
              <h3>Problems</h3>
              <h4>
                — the old website wasn't responsive, disabling customers to get
                the information they needed
              </h4>
              <ul>
                <li>
                  Prior to my internship at the company, the old website wasn't
                  responsive, causing truncated text or content issue
                </li>
                <li>
                  Search Engine wasn't optimized due to poor-written code and
                  lacks of responsiveness. The company wasn't listed on the
                  first page of Google Search
                </li>
                <li>
                  During my first week working at the store, 10+ customers
                  complaint that they weren't able to find store hours and phone
                  number from the company website
                </li>
                <li>
                  Many phone calls asking about store hours and some other
                  information that the website failed to provide
                </li>
              </ul>
            </Col>
          </Row>
          <Row>
            <Col>
              <h3>User Interview &amp; Industry Research</h3>
              <h4>
                — gather information to add the WOW factor to the company
                website
              </h4>
              <ul>
                <li>
                  I was new to the escape room industry, so I did lots of
                  research about other escape rooms and how they advertised
                  their business
                </li>
                <li>
                  Directly asked users who came to play at the store what they
                  didn't like about the old website and what they expected to
                  see on the new websites
                </li>
              </ul>
            </Col>
          </Row>
          <Row>
            <Col>
              <h3>Design &amp; Implementation</h3>
              <h4>
                — deciding on the look of the website and technology to build
                the website
              </h4>
              <ul>
                <li>
                  Through the escape room industry research, only 1-2 businesses
                  used a video background for homepage. Therefore, I decided to
                  use a video as background for the homepage of the new website
                  to create a new experience and grab attention from the
                  audience.
                </li>
                <li>
                  Since the website didn't have a lot of content, simple HTML,
                  CSS, JavaScript and Boostrap are used to create a fully
                  responsive website.
                </li>
              </ul>
            </Col>
          </Row>
          <Row>
            <Col>
              <h3>Impressive Outcome</h3>
              <h4>
                — feedback from customers and numbers from Google Analytics
                &amp; data collection say it all
              </h4>
              <ul>
                <li>
                  As soon as the new website was released, lots of customer came
                  in, mentioned about the new website and how they preferred the
                  new one over the old one.
                </li>
                <li>
                  Other employees at the store agreed that they barely received
                  complaints from customers regarding to not be able to access
                  store information from the website. Oh, less phone calls
                  regarding to store hours as well!
                </li>
                <li>
                  Google Analytics showed that the website rank moved from 19th
                  to 8th when people searched with keyword "Escape room Toronto"
                </li>
                <li>
                  Through data collection by the store staff, the amount of
                  income from customer who heard about the company trough
                  website increased around $17,000 monthly
                </li>
              </ul>
            </Col>
          </Row>
          <Row>
            <Col>
              <h3>Reflection</h3>
              <h4>
                — great learning experience and there are always rooms to
                improve.
              </h4>
              <ul>
                <li>
                  Though this project is a bit outdated, it's the one that I'm
                  always proud of. For a first year student, who started
                  university for only 4 months, this project was definitely
                  challenging.
                </li>
                <li>
                  Looking at this piece of work at this moment, there are lots
                  of things (eg. alignment, layout, animation etc.) that need to
                  be improved.
                </li>
                <li>
                  I should have documented my work progress from the first day I
                  began to design the website.
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export const pageQuery = graphql`
  query RoundaboutCanadaQuery {
    allProjectsJson(filter: { url: { eq: "/projects/roundabout-canada" } }) {
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
