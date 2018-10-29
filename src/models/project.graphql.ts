import { graphql } from "gatsby";

export const projectFields = graphql`
  fragment ProjectFields on ProjectsJsonConnection {
    edges {
      node {
        name
        subtitle
        description
        url
        imageFolder
        theme
      }
    }
  }
`;
