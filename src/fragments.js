import { graphql } from "gatsby"

export const query = graphql `
  fragment fluidImage on File {
    childImageSharp {
      fluid(maxWidth: 1920) {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
  fragment navFluidImage on File {
    childImageSharp {
      fluid(maxHeight: 80) {
        ...GatsbyImageSharpFluid
      }
    }
  }
  fragment siteMeta on Site {
    siteMetadata {
      title
      description
    }
  }
`
