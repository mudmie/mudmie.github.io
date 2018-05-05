import * as React from "react";
import { ProjectHeader } from "../../components/project-header";
import { ProjectPageProps } from "../../models/project-page-props";
import * as sharedStyles from "./styles.scss";

export default class CraftBeerPage extends React.Component<
  ProjectPageProps,
  {}
> {
  public render() {
    return (
      <div className={sharedStyles.themeBrick}>
        <ProjectHeader
          project={this.props.data.allProjectsJson.edges[0].node}
        />
      </div>
    );
  }
}

export const pageQuery = graphql`
  query CraftBeerQuery {
    allProjectsJson(filter: { url: { eq: "/projects/craft-beer" } }) {
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
