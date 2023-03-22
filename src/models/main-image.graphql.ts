import { graphql } from "gatsby";

export const mainImageSizes = graphql`
  fragment MainImageSizes on File {
    childImageSharp {
      fluid(maxWidth: 2440, quality: 100) {
        ...GatsbyImageSharpFluid_noBase64
      }
    }
  }
`;

// export const projectMainImageSizes = graphql`
// fragment ProjectMainImageSizes on File {
//   childImageSharp {
//     fluid(maxWidth: 2440, quality: 100) {
//       ...GatsbyImageSharpFluid_noBase64
//     }
//   }
// }
// `;

export const projectMainImageSizes = graphql`
fragment ProjectMainImageSizes on File {
  childImageSharp {
    gatsbyImageData(width: 2440, quality: 100)
  }
}
`;

