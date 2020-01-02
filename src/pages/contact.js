import React from "react"
import styled from "styled-components"
import SEO from "../components/seo"
import Layout from "../components/layout"
import PostsList from "../components/posts"
import ContactForm from "../components/contactForm"

const Main = styled.main`
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  max-height: 100vh;
  overflow-y: auto;
  padding: ${props => props.theme.wrapper.paddingY} ${props => props.theme.wrapper.paddingX};
`

const StyledContactForm = styled(ContactForm)`
  display: flex;
  flex-direction: column;
  label {
    display: flex;
    flex-direction: column;
    padding-bottom: ${props => props.theme.wrapper.paddingY};
    input,
    textarea {
      border: none;
      border-bottom: 1px solid ${props => props.theme.colors.highlight};
      padding: .25em .5em;
    }
  }
  button {
    align-self: flex-start;
    background-color: ${props => props.theme.colors.highlight};
    border: none;
    border-radius: 1em;
    color: ${props => props.theme.colors.light};
    cursor: pointer;
    flex: 0 0 auto;
    padding: .25em 1em;
    text-align: center;
  }
`

const ContactPage = () => {
  return (
    <Layout>
      <SEO title="Services" />
      <PostsList />
      <Main>
        <h1>Work With @Monkishtypist</h1>
        <hr/>
        <p>Looking for a Systems Architect or full-stack web engineer for your next project?</p>
        <p>Send me a message.</p>
        <StyledContactForm />
      </Main>
    </Layout>
  )
}

export default ContactPage
