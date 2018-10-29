import { graphql } from "gatsby";

export const mainImageSizes = graphql`
  fragment MainImageSizes on File {
    childImageSharp {
      fluid(maxWidth: 920) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`;
