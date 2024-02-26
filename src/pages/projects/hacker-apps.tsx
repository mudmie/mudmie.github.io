import * as React from "react";
import * as sharedStyles from "./styles.module.scss";
import { Col, Container, Row } from "reactstrap";
import { graphql, withPrefix } from "gatsby";
import { OutboundLink } from "gatsby-plugin-google-analytics";
import { ImageBox } from "../../components/image-box";
import {
  ProjectLayout,
  PROJECT_BODY_COLUMN,
} from "../../components/project-layout";
import { ProjectPageProps } from "../../models/project-page-props";

export default class HackerAppsPage extends React.Component<
  ProjectPageProps,
  {}
> {
  public render() {
    return (
      <ProjectLayout
        allProjects={this.props.data.allProjects.edges.map((e) => e.node)}
        currentProject={this.props.data.project.edges[0].node}
        mainImage={this.props.data.mainImage}
      >
        <Container>
          <Row className="justify-content-center">
            <Col lg="10">
              <div className={sharedStyles.sectionContainer}>
                <h6 className={sharedStyles.categoryText}>Context</h6>
                <h3 className={sharedStyles.titleText}>
                  Application Portal at a Glance
                </h3>
                <p>
                  Every year, Hack the North receives 5000+ applications from
                  students around the world. The application portal is an
                  important platform as everyone who wishes to attend Hack the
                  North has to submit their application through the portal.
                  Having a creative application process could provide an
                  exciting and memorable user experience for those who wanted to
                  participate.
                </p>
              </div>
            </Col>
          </Row>

          <Row className="justify-content-center">
            <Col lg="7">
              <h4 className={sharedStyles.highlightText}>
                We want to provide a memorable experience for our applicants{" "}
                <span className={sharedStyles.greyText}>
                  when they apply to Hack the North.
                </span>
              </h4>
            </Col>
          </Row>

          <Row className="justify-content-center">
            <Col lg="10">
              <div className={sharedStyles.sectionContainer}>
                <h6 className={sharedStyles.categoryText}>Design</h6>
                <h3 className={sharedStyles.titleText}>High-Level Planning</h3>
                <p>
                  For 2019, we wanted to connect hackers together and promote
                  diversity as well as a collaborative work environment. We
                  arrived at the idea of allowing hackers to tell their stories
                  and share them through the application process. Mapping this
                  idea with the theme chosen by the team, we were looking to
                  design a unique comic-themed application portal with
                  illustrations that customized to their answers.
                </p>
                <p>
                  The application portal would consist of five different parts,
                  including
                </p>
                <ol>
                  <li>creating a robogoose</li>
                  <li>filling out personal information</li>
                  <li>logging in or creating account</li>
                  <li>answering long question</li>
                  <li>viewing application status</li>
                </ol>

                <Row className="justify-content-center">
                  <Col lg="10">
                    <div className="text-center">
                      <ImageBox
                        src={this.getImageUrl("high-level.png")}
                        alt="Planning for the design of Hacker Application Portal"
                        className="img-fluid"
                        showCaption={true}
                      />
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>

          <Row className="justify-content-center mt-4">
            <Col lg="10">
              <div className={sharedStyles.sectionContainer}>
                <h6 className={sharedStyles.categoryText}>Design</h6>
                <h3 className={sharedStyles.titleText}>Customize Your Goose</h3>
                <p>
                  Since the Robogoose is the main character in the comic, the
                  users will begin their application process by customizing the
                  color and the accessory of their Robogoose to represent
                  themselves.
                </p>

                <Row className="justify-content-center">
                  <Col lg="10">
                    <div className="text-center">
                      <ImageBox
                        src={this.getImageUrl("web-goose.png")}
                        alt="Customize a goose on desktop"
                        className="img-fluid"
                        showCaption={true}
                      />
                    </div>
                  </Col>
                </Row>
                <p>
                  If the users apply through their mobile devices, the
                  customization process will be broken down into two steps due
                  to the constraint from the smaller screen size. They will
                  select the color first before clicking next to select the
                  accessory.
                </p>
                <Row className="justify-content-center">
                  <Col lg="10">
                    <div className="text-center">
                      <ImageBox
                        src={this.getImageUrl("mobile-goose.png")}
                        alt="Customize a goose on mobile"
                        className="img-fluid"
                        showCaption={true}
                      />
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>

          <Row className="justify-content-center">
            <Col lg="7">
              <h4 className={sharedStyles.highlightText}>
                <span className={sharedStyles.greyText}>
                  {" "}
                  I worked with the application lead to{" "}
                </span>{" "}
                translate application requirements into designs 🔮
              </h4>
            </Col>
          </Row>

          <Row className="justify-content-center">
            <Col lg="10">
              <div className={sharedStyles.sectionContainer}>
                <h6 className={sharedStyles.categoryText}>Design</h6>
                <h3 className={sharedStyles.titleText}>
                  The Comic Section - filling out personal information
                </h3>
                <p>
                  Once the users have customized their Robogoose, they will
                  enter the comic creation process. In this step, the users will
                  fill out their personal information such as their name,
                  education information, traveling location and hackathon
                  experience.
                </p>

                <Row className="justify-content-center">
                  <Col lg="10">
                    <div className="text-center">
                      <ImageBox
                        src={this.getImageUrl("comic.gif")}
                        alt="Filling out information in the comic section"
                        className="img-fluid"
                        showCaption={true}
                      />
                    </div>
                  </Col>
                </Row>
                <p>
                  For the education information, the users will provide their
                  study level and graduation year. Here, the illustration of the
                  comic background will change to the lockers, shelves with
                  laptops and books, the office based on the users’ response
                  whether their study level is high school, undergraduate or
                  graduate.
                </p>
                <Row className="justify-content-center">
                  <Col lg="10">
                    <div className="text-center">
                      <ImageBox
                        src={this.getImageUrl("education.png")}
                        alt="Illustrations for different study levels"
                        className="img-fluid"
                        showCaption={true}
                      />
                    </div>
                  </Col>
                </Row>
                <p>
                  Next, the users will provide the name of the school that they
                  are currently attending as well as their study program. If the
                  users attend one of the seven schools that has the highest
                  Hack the North participation rate, the illustration in this
                  comic panel will also change to the iconic building of their
                  school.
                </p>
                <Row className="justify-content-center">
                  <Col lg="10">
                    <div className="text-center">
                      <ImageBox
                        src={this.getImageUrl("school.png")}
                        alt="Illustrations for various schools"
                        className="img-fluid"
                        showCaption={true}
                      />
                    </div>
                  </Col>
                </Row>
                <p>
                  For the traveling location, the users will let Hack the North
                  know from which city they will be traveling to the event. The
                  map will zoom into the city that they enter.
                </p>
                <Row className="justify-content-center">
                  <Col lg="10">
                    <div className="text-center">
                      <ImageBox
                        src={this.getImageUrl("map.gif")}
                        alt="Finding your city on the map"
                        className="img-fluid"
                        showCaption={true}
                      />
                    </div>
                  </Col>
                </Row>
                <p>
                  Finally, the users will answer whether they have been to a
                  hackathon before. If this will be their first Hackathon, they
                  will get the illustration of the first time hacker badge. If
                  they have been to other hackathons before, the illustration
                  will change to a bunch of hardware and gears.
                </p>
                <Row className="justify-content-center">
                  <Col lg="10">
                    <div className="text-center">
                      <ImageBox
                        src={this.getImageUrl("experience.png")}
                        alt="First time hacker vs. Veteran hacker
                        "
                        className="img-fluid"
                        showCaption={true}
                      />
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>

          <Row className="justify-content-center mt-4">
            <Col lg="10">
              <div className={sharedStyles.sectionContainer}>
                <h6 className={sharedStyles.categoryText}>Design</h6>
                <h3 className={sharedStyles.titleText}>Account Creation</h3>
                <p>
                  After completing the comic, the users will get to create an
                  account or log in to an existing account, if they have applied
                  to Hack the North before.
                </p>

                <Row className="justify-content-center">
                  <Col lg="10">
                    <div className="text-center">
                      <ImageBox
                        src={this.getImageUrl("web-account.png")}
                        alt="Account creation for desktop"
                        className="img-fluid"
                        showCaption={true}
                      />
                    </div>
                  </Col>
                </Row>
                <Row className="justify-content-center">
                  <Col lg="10">
                    <div className="text-center">
                      <ImageBox
                        src={this.getImageUrl("mobile-account.png")}
                        alt="Account creation for mobile"
                        className="img-fluid"
                        showCaption={true}
                      />
                    </div>
                  </Col>
                </Row>
                <p>
                  In a case that the users forget their password, they will have
                  an opportunity to reset it here.
                </p>
                <Row className="justify-content-center">
                  <Col lg="5">
                    <div className="text-center">
                      <ImageBox
                        src={this.getImageUrl("web-forget.png")}
                        alt="Reset password for desktop"
                        className="img-fluid"
                        showCaption={true}
                      />
                    </div>
                  </Col>
                  <Col lg="5">
                    <div className="text-center">
                      <ImageBox
                        src={this.getImageUrl("mobile-forget.png")}
                        alt="Reset password for mobile"
                        className="img-fluid"
                        showCaption={true}
                      />
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>

          <Row className="justify-content-center">
            <Col lg="10 mt-4">
              <div className={sharedStyles.sectionContainer}>
                <h6 className={sharedStyles.categoryText}>Design</h6>
                <h3 className={sharedStyles.titleText}>
                  Application Questions
                </h3>
                <p>
                  Finally, the users will answer questions that will enable Hack
                  the North team to learn more about their skills and their
                  motivation to attend the event. Since this process has a
                  significant impact on the chance of being accepted to Hack the
                  North, I designed the interface in a way that the user would
                  be able to focus on answering one question at a time.
                </p>

                <Row className="justify-content-center">
                  <Col lg="10">
                    <div className="text-center">
                      <ImageBox
                        src={this.getImageUrl("questions.png")}
                        alt="Answering application questions"
                        className="img-fluid"
                        showCaption={true}
                      />
                    </div>
                  </Col>
                </Row>

                <p>
                  Users will be able to review the application and edit any
                  information before submitting it.
                </p>
                <Row className="justify-content-center">
                  <Col lg="10">
                    <div className="text-center">
                      <ImageBox
                        src={this.getImageUrl("review.png")}
                        alt="Reviewing application before submission"
                        className="img-fluid"
                        showCaption={true}
                      />
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>

          <Row className="justify-content-center">
            <Col lg="10 mt-4">
              <div className={sharedStyles.sectionContainer}>
                <h6 className={sharedStyles.categoryText}>Design</h6>
                <h3 className={sharedStyles.titleText}>
                  Submission & Application Status
                </h3>
                <p>
                  Once the users have submitted their application, they will be
                  able to download their personalized comic or share it on
                  social media. They will also be able to view the application
                  status here.
                </p>

                <Row className="justify-content-center">
                  <Col lg="10">
                    <div className="text-center">
                      <ImageBox
                        src={this.getImageUrl("submitted.png")}
                        alt="View application status and get your comic story"
                        className="img-fluid"
                        showCaption={true}
                      />
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col lg="10 mt-4">
              <div className={sharedStyles.sectionContainer}>
                <h6 className={sharedStyles.categoryText}>Reflection</h6>
                <h3 className={sharedStyles.titleText}>Learning</h3>
                <p>
                  Working on this project for Hack the North gave me valuable
                  opportunities to practice the design thinking process, enhance
                  my interactive design skills, work collaboratively with
                  various groups of people, and learn about the
                  design-development handoff.
                </p>
              </div>
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
  query HackerAppsQuery($path: String!) {
    allProjects: allProjectsJson {
      ...ProjectFields
    }
    project: allProjectsJson(filter: { url: { eq: $path } }) {
      ...ProjectFields
    }
    mainImage: file(relativePath: { eq: "hacker-apps/main.png" }) {
      ...ProjectMainImageSizes
    }
  }
`;
