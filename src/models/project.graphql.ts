import { graphql } from "gatsby";

export const projectFields = graphql`
  fragment ProjectFields on ProjectsJsonConnection {
    edges {
      node {
        name
        company
        term
        description
        url
        imageFolder
        theme
      }
    }
  }
`;
