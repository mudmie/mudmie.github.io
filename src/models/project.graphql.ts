import { graphql } from "gatsby";

export const projectFields = graphql`
  fragment ProjectFields on ProjectsJsonConnection {
    edges {
      node {
        name
        company
        companyDescription
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
