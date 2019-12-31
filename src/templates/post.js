import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import Layout from "../components/layout"
import PostsList from "../components/posts"

const PostWrapper = styled.div`
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  max-height: 100vh;
  overflow-y: auto;
  padding: ${props => props.theme.wrapper.paddingY} ${props => props.theme.wrapper.paddingX};
`

const PostHeader = styled.div`
  align-items: flex-end;
  display: flex;
  justify-content: space-between;
`

const PostTitle = styled.h1``

const PostDate = styled.h5``

const PostBody = styled.div`
`

export default function Template({ data }) {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark
  return (
    <Layout>
      <PostsList />
      <PostWrapper>
        <PostHeader>
          <PostTitle>{frontmatter.title}</PostTitle>
          <PostDate>{frontmatter.date}</PostDate>
        </PostHeader>
        <hr />
        <PostBody dangerouslySetInnerHTML={{ __html: html }} />
      </PostWrapper>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
      }
    }
  }
`
