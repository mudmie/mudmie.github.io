import { graphql } from "gatsby";

export const projectGroupFields = graphql`
  fragment ProjectGroupFields on ProjectGroupsJsonConnection {
    edges {
      node {
        name
        title
        description
        isEnabled
      }
    }
  }
`;