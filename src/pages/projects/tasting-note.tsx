import * as React from "react";
import { ProjectHeader } from "../../components/project-header";
import { ProjectPageProps } from "../../models/project-page-props";
import { Container, Row, Col } from "reactstrap";

export default class TastingNotePage extends React.Component<
  ProjectPageProps,
  {}
> {
  public render() {
    return (
      <>
        <ProjectHeader
          project={this.props.data.allProjectsJson.edges[0].node}
          color="header2"
        />
        <Container>
          <Row>
            <Col />
          </Row>
        </Container>
      </>
    );
  }
}

export const pageQuery = graphql`
  query TastingNoteQuery {
    allProjectsJson(filter: { url: { eq: "/projects/tasting-note" } }) {
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
