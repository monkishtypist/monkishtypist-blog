import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import SEO from "../components/seo"
import Layout from "../components/layout"
import PostsList from "../components/posts"

const Main = styled.main`
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  max-height: 100vh;
  overflow-y: auto;
  padding: ${props => props.theme.wrapper.paddingY} ${props => props.theme.wrapper.paddingX};
`

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        ...siteMeta
      }
    }
  `)

  return (
    <Layout>
      <SEO title="Home" />
      <PostsList />
      <Main>
        <h1>{data.site.siteMetadata.title}</h1>
      </Main>
    </Layout>
  )
}

export default IndexPage
