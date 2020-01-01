import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import styled from "styled-components"

const PostsWrapper = styled.div`
  border-right: 1px solid gray;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  height: 100vh;
  margin: 0;
  max-height: 100vh;
  max-width: 300px;
  overflow-y: auto;
  padding: 0;
`

const Post = styled(Link)`
  border-bottom: 1px solid ${props => props.theme.colors.medium};
  display: flex;
  flex: 0 1 auto;
  flex-direction: column;
  padding: 0;
  text-decoration: none;
  &.active {
    background-color: ${props => props.theme.colors.light};
  }
  &:hover {
    background-color: ${props => props.theme.colors.light};
    text-decoration: none;
  }
`

const PostInner = styled.div`
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  border-bottom: 0;
  padding: ${props => props.theme.wrapper.paddingY} ${props => props.theme.wrapper.paddingX};
  .active & {
    border-left-color: ${props => props.theme.colors.highlight};
  }
`

const PostTitle = styled.h1`
  font-size: 1rem;
  margin: 0;
  text-transform: uppercase;
  color: ${props => props.theme.colors.dark};
`

const PostDate = styled.h5`
  font-size: .8rem;
  margin: 0;
  color: ${props => props.theme.colors.highlight};
`

const PostsList = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
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
    <PostsWrapper>
      {data.allMarkdownRemark.edges.map(({ node }, index) => (
        <Post key={index} to={`/blog/${node.frontmatter.slug}`} activeClassName="active">
          <PostInner>
            <PostDate>{node.frontmatter.date}</PostDate>
            <PostTitle>{node.frontmatter.title}</PostTitle>
          </PostInner>
        </Post>
      ))}
    </PostsWrapper>
  )
}

export default PostsList
