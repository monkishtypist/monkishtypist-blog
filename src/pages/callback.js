import React from "react"
import { handleAuthentication } from "../utils/auth"
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

const CallbackPage = () => {
  handleAuthentication()

  return (
    <Layout>
      <SEO title="Authenticating" />
      <PostsList />
      <Main>
        <p>Loading...</p>
      </Main>
    </Layout>
  )
}

export default CallbackPage
