import * as React from "react";
import { Helmet } from "react-helmet";
import { Col, Container, Row } from "reactstrap";
import { Project } from "../models/project";
import * as styles from "./project-header.scss";
import { withPrefix } from "gatsby-link";

export interface ProjectHeaderProps {
  project: Project;
  color: "header1" | "header2" | "header3";
}
export class ProjectHeader extends React.Component<ProjectHeaderProps, {}> {
  public render() {
    return (
      <>
        <Helmet>
          <title>{this.props.project.name}</title>
        </Helmet>
        <Container>
          <Row>
            <Col className={styles[this.props.color]}>
              <h1 className={styles.header}>{this.props.project.name}</h1>
              <h2>— {this.props.project.subtitle}</h2>
            </Col>
          </Row>
          <Row>
            <Col>
              <img
                src={withPrefix(
                  `/images/${this.props.project.imageFolder}/main.jpg`
                )}
                alt="main project image"
                className="img-fluid"
              />
              <p>{this.props.project.description}</p>
            </Col>
          </Row>
          <Row>
            <Col>
              <h3>Current Way of Collecting Data</h3>
              <h4>
                — data is recorded in paper format before it gets transferred to
                electronic format
              </h4>
              <p>
                Since LCBO is one of the world’s largest alcoholic beverage
                purchasers, there are numbers of new products that need to be
                evaluated each year. Currently, product consultants meet 3 times
                a year to sample and document tasting notes of those new
                products. After tasting the beverages, each consultant has to
                record the notes in paper forms. The writing team is then
                responsible to transfer the notes to digital format. This data
                is important as it will later be used to create product
                description, content for LCBO’s website and articles.
              </p>
              <img
                src={withPrefix(
                  `/images/${this.props.project.imageFolder}/form.png`
                )}
                alt="Tasting Note Evaluation Form"
                className="img-fluid"
              />
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}
