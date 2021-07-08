import * as React from "react";
import * as sharedStyles from "./styles.module.scss";
import { Col, Container, Row } from "reactstrap";
import { graphql, withPrefix } from "gatsby";
import { ImageBox } from "../../components/image-box";
import { ProjectLayout } from "../../components/project-layout";
import { OutboundLink } from "gatsby-plugin-google-analytics";
import { ProjectPageProps } from "../../models/project-page-props";

export default class HackiocaPage extends React.Component<
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
            <Col lg="8">
              <h3>Background</h3>
              <p>
                Every April Fool’s day, Hack the North launches a fake and
                entertaining-themed hackathon to break social media every April
                Fool’s day. Inspired by the roles of food (and boba) in the pop
                culture, the team chose a boba themed hackathon for April Fools
                2019.
              </p>
            </Col>
          </Row>

          <Row className="justify-content-center">
            <Col lg="8">
              <h3>My Roles</h3>
              <p>
                As a lead product designer, I worked closely with Vevina, a lead
                graphic designer, to plan the layout and graphic assets of the
                website. I also worked with the front-end team to pass along
                design requirements and provide design supports until the
                completion of the project.
              </p>
            </Col>
          </Row>

          <Row className="justify-content-center">
            <Col lg="8">
              <h3>Branding</h3>
              <p>
                Design team members worked together to select fonts, colors, and
                tones of graphic assets. The team wanted the website to be fun
                and friendly, so we chose to go with playful typeface, vibrant
                color pallets, and cute illustrations.
              </p>
              <Row className="justify-content-center">
                <Col lg="10">
                  <ImageBox
                    src={this.getImageUrl("colors.png")}
                    alt="Color pallets for Hackioca"
                    className="img-fluid"
                  />
                </Col>
              </Row>

              <p>
                The color pallets were curated with the color of popular boba
                drinks such as milk tea, taro milk tea and other fruity drinks
                in mind.
              </p>
              <Row className="justify-content-center">
                <Col lg="8">
                  <ImageBox
                    src={this.getImageUrl("typefaces.png")}
                    alt="Typefaces for Hackioca"
                    className="img-fluid"
                  />
                </Col>
              </Row>
              <p>
                A fun font like Bubbleboddy was used as a display typeface to
                deliver the brand identity while the content was displayed using
                modern and simple fonts like Raleway.
              </p>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col lg="8">
              <h3>Design Process</h3>
              <p>
                I was researching for website UI on Dribble as usual, and this
                particular UI design by{" "} 
                <OutboundLink
                  href="https://dribbble.com/shots/3299965-Designer-Profiles-Part-3"
                  target="_blank"
                >
                  Ben Schade
                </OutboundLink>
                {" "}caught my attention. Specifically, the giant circle at the
                center of the screen caught my attention.
              </p>
              <Row className="justify-content-center">
                <Col lg="8">
                  <ImageBox
                    src={this.getImageUrl("inspo.png")}
                    alt="Web UI by Ben Schade"
                    className="img-fluid"
                  />
                </Col>
              </Row>
              <p>
                From there I imagined having that circle as a backdrop and
                placing the boba logo on top of it. To further communicate my
                ideas, I created a low-fidelity mocks to share and get feedback
                from the design team members.
              </p>
              <Row className="justify-content-center">
                <Col lg="10">
                  <ImageBox
                    src={this.getImageUrl("lowfi.png")}
                    alt="Low-fidelity mocks for Hackioca"
                    className="img-fluid"
                  />
                </Col>
              </Row>
              <p>
                During the shareout, the team came up with an idea to allow
                users to customize their drinks. The users would be able to pick
                the flavor of their drinks as well as the toppings. I then
                worked with Vevina to plan the layout of the websites and the
                graphic assets. Once the graphic assets were ready, I used them
                to create the high-fidelity prototype of the landing page and
                other sections of the website.
              </p>
              <Row className="justify-content-center">
                <Col lg="8">
                  <ImageBox
                    src={this.getImageUrl("boba-web.gif")}
                    alt="Landing page for desktop"
                    className="img-fluid"
                  />
                </Col>
              </Row>
              <p>
                Since the landing page plays an important role in capturing
                visitors’ attention, I wanted to make sure that the landing page
                would give a great first impression of the website to the
                visitors. Drink customization serves as a surprising interaction
                that connects the users with the website. As the users change
                the flavor of their drinks, the color of the background also
                changes. Similarly, the floating topping also changes when the
                users select a different one.
              </p>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col lg="8">
              <h3>Designing for Mobile </h3>
              <p>
                Due to smaller screen sizes, the user experience for mobile has
                to be different than the user experience for the website. With
                the size constraint, some adjustments need to be made for the
                design of the landing page and drink customization features
              </p>
              <p>
                First of all, I considered keeping all the elements, including
                the boba hero, flavor options, topping options and floating
                topping. Visitors would be able to scroll through option of
                flavors and toppings to click the ones they wanted. However, I
                found the screen to look quite busy and the interaction was
                quite complex, which might discourage the visitors to interact
                with the feature. I also considered removing the floating
                toppings and rearranging the placement of the flavor and topping
                options. Still, the screen still looked overwhelming.
              </p>
              <Row className="justify-content-center">
                <Col lg="10">
                  <ImageBox
                    src={this.getImageUrl("option1.png")}
                    alt="Option 1: customize boba on the landing page"
                    className="img-fluid"
                  />
                </Col>
              </Row>
              <p>
                Since the first design wasn’t likely to work, I considered
                placing a button under the boba hero so that the visitors could
                customize their drinks on a different page. This design would
                prevent the screen from being too busy and allow the toppings to
                float on the screen. Yet, it was brought to my attention that
                this design might require too many steps for the visitors to
                customize their drinks, which would also likely discourage them
                to interact with the feature.
              </p>
              <Row className="justify-content-center">
                <Col lg="7">
                  <ImageBox
                    src={this.getImageUrl("option2.png")}
                    alt="Option 2: customize boba from a separate page"
                    className="img-fluid"
                  />
                </Col>
              </Row>
              <p>
                To make sure that the screen wouldn’t be too busy and the design
                would require low effort for the visitors to interact with the
                customization feature, I decided to hide the flavor and topping
                options and remove the floating toppings. Instead, I added an
                arrow on the left and right side of the boba hero so that the
                visitors could click on them to select a different topping. They
                were also able to tap on the boba hero to change the flavor of
                the drink through animation for the circle backdrop of the hero
                would have provided more affordance to the users.
              </p>
              <Row className="justify-content-center">
                <Col lg="8" className="text-center">
                  <ImageBox
                    src={this.getImageUrl("boba-mobile.gif")}
                    alt="Landing page for mobile"
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
  query HackiocaQuery($path: String!) {
    allProjects: allProjectsJson {
      ...ProjectFields
    }
    project: allProjectsJson(filter: { url: { eq: $path } }) {
      ...ProjectFields
    }
    mainImage: file(relativePath: { eq: "hackioca/main.png" }) {
      ...MainImageSizes
    }
  }
`;
