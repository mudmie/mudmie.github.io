import { graphql } from "gatsby";

export const projectFields = graphql`
  fragment ProjectFields on ProjectsJsonConnection {
    edges {
      node {
        name
        projectGroup
        company
        term
        description
        type
        platform
        duration
        myRole
        results
        url
        imageFolder
        isProtected
        isEnabled
      }
    }
  }
`;
