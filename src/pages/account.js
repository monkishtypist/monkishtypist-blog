import React from "react"
import { login, isAuthenticated, getProfile } from "../utils/auth"
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

const AccountPage = () => {
  if (!isAuthenticated()) {
    login()
    return <p>Redirecting to login...</p>
  }

  const user = getProfile()

  return (
    <Layout>
      <SEO title="Authenticating" />
      <PostsList />
      <Main>
        <p>Hello and welcome {user.nickname || "friend"}</p>
        <p>There is nothing to see here at the moment.</p>
      </Main>
    </Layout>
  )
}

export default AccountPage
