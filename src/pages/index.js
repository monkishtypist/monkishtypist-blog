import React from "react"
// import { useStaticQuery, graphql } from "gatsby"
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
  return (
    <Layout>
      <SEO title="Home" />
      <PostsList />
      <Main>
        <h1>Welcome to my blog</h1>
        <hr/>
        <p>I'm <code>@monkishtypist</code> and this is my web log &mdash; a place for taking notes, writing down my experiences, solving a few problems, and creating a few more. When I'm working I go by the labels <code>freelancer</code> <code>full-stack engineer</code> <code>systems architect</code>. When I'm not working you can follow my adventures on <a href="https://www.ambleandtoast.com/" target="_blank" rel="noopener noreferrer">Amble+Toast</a>.</p>
        <p>Otherwise, to continue reading &mdash; select from the articles to the left.</p>
        <p>This blog is built with <a href="https://www.gatsbyjs.org/" target="_blank" rel="noopener noreferrer">Gatsby</a> and served on <a href="https://pages.github.com/" target="_blank" rel="noopener noreferrer">GitHub Pages</a>. It uses <code>markdown</code> files for blog posts.</p>
        <p>Interested in the <a href="https://github.com/monkishtypist/monkishtypist-blog" target="_blank" rel="noopener noreferrer">source code</a>? Feel free to fork it and make it your own.</p>
      </Main>
    </Layout>
  )
}

export default IndexPage
