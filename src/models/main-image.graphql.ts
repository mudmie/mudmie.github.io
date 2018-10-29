import { graphql } from "gatsby";

export const mainImageSizes = graphql`
  fragment MainImageSizes on File {
    childImageSharp {
      sizes(maxWidth: 920) {
        ...GatsbyImageSharpSizes
      }
    }
  }
`;
