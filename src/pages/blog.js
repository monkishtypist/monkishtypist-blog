import React from "react"
import { Redirect } from '@reach/router'
import { useStaticQuery, graphql } from "gatsby"

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1
      ) {
        edges {
          node {
            frontmatter {
              slug
              title
              date
            }
          }
        }
      }
    }
  `)

  return (
    <>
      {data.allMarkdownRemark.edges.map(({ node }, index) => (
        <Redirect to={`/blog/${node.frontmatter.slug}`} />
      ))}
    </>
  )
}

export default BlogPage
