import * as React from "react";
import * as styles from "./projects-section.scss";
import {
  Container,
  Row,
  Col,
  Card,
  CardImg,
  CardBody,
  CardTitle,
} from "reactstrap";

export class ProjectsSection extends React.Component {
  public render() {
    return (
      <Container>
        <Row>
          <Col>
            <h2>
              Collection<br />&#8212; of my Work
            </h2>
          </Col>
        </Row>
        <Row>
          {[1, 2, 3, 4, 5, 6, 7, 8].map(i => (
            <Col lg="4" md="6" className={styles.projectCard} key={i}>
              <Card>
                <CardImg
                  src="http://via.placeholder.com/400x200"
                  alt={`project ${i} image`}
                />
                <CardBody>
                  <CardTitle>Project {i}</CardTitle>
                </CardBody>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}
