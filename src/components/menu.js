import React from 'react'
import { useStaticQuery, graphql, Link } from "gatsby"
import { login, logout, isAuthenticated, getProfile } from "../utils/auth"
import styled from 'styled-components'
import { rgba } from 'polished'
import Img from 'gatsby-image'

const MenuWrapper = styled.div`
  display: flex;
  flex: 0 0 200px;
  flex-direction: column;
  max-width: 200px;
  padding-bottom: ${props => props.theme.wrapper.paddingY};
  padding-left: 1em;
  padding-right: 0;
  padding-top: ${props => props.theme.wrapper.paddingY};
  background-color: ${props => props.theme.colors.black};
  color: white;
`

const MenuLink = styled(Link)`
  color: ${props => props.theme.colors.highlight};
  font-size: 1rem;
  font-weight: 500;
  margin: .25em 0;
  padding: .25em ${props => props.theme.wrapper.paddingX};
  text-decoration: none;
  width: 100%;
  &.active,
  &:hover {
    background-color: ${props => rgba(props.theme.colors.highlight,.5)};
    color: ${props => props.theme.colors.light};
    text-decoration: none;
  }
`

const AccountItem = styled.div`
  padding: 0 ${props => props.theme.wrapper.paddingX} 0 .5em;
`

const AccountLink = styled(MenuLink)`
  background-color: ${props => props.theme.colors.highlight};
  border-radius: 1em;
  color: ${props => props.theme.colors.dark};
  display: block;
  padding: .25em 1em;
  text-align: center;
  width: 100%;
  &.active,
  &:hover {
    background-color: ${props => props.theme.colors.highlight};
    color: ${props => props.theme.colors.light};
  }
`

const MenuFooter = styled.footer`
  display: flex;
  margin: .25em 0;
  margin-top: auto;
  padding: .25em ${props => props.theme.wrapper.paddingX};
`

const LogoLink = styled.a`
  color: ${props => props.theme.colors.highlight};
  margin: 0 .25em;
  text-decoration: none;
  &:first-child {
    margin-left: 0;
  }
  &:last-child {
    margin-right: 0;
  }
`

const LogoLinkImg = styled(Img)`
  height: auto;
  width: 22px;
`

const Auth0SVG = styled.svg`
  fill: ${props => props.theme.colors.light};
  height: 22px;
  width: 22px;
`

const MainMenu = () => {
  const user = getProfile()
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
            }
          }
        }
      }
      navImageGitHub: file(relativePath: { eq: "logos/GitHub-Mark-Light-64px.png" }) {
        ...navFluidImage
      }
      site {
        ...siteMeta
      }
    }
  `)
  return (
    <MenuWrapper>
      { isAuthenticated() &&
        <AccountItem>
          <AccountLink
            to="/account"
            activeClassName="active"
          >
            {user.nickname || "Welcome"}
          </AccountLink>
        </AccountItem>
      }
      <MenuLink
        to="/"
        activeClassName="active"
      >
        Home
      </MenuLink>
      {data.allMarkdownRemark.edges.map(({ node }, index) => (
        <MenuLink
          key={ index }
          to={`/blog/${node.frontmatter.slug}`}
          activeClassName="active"
          partiallyActive={true}
        >
          Latest
        </MenuLink>
      ))}
      <MenuLink
        to="/contact"
        activeClassName="active"
      >
        Contact
      </MenuLink>
      <MenuFooter>
        <LogoLink href="https://github.com/monkishtypist" target="_blank">
          <LogoLinkImg fluid={data.navImageGitHub.childImageSharp.fluid} />
        </LogoLink>
        { !isAuthenticated() &&
          <LogoLink
            href="#login"
            onClick={e => {
              login()
              e.preventDefault()
            }}
          >
            <Auth0SVG id="artwork" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 193.71 216.56"><title>auth0-logo-white</title><path d="M189,66.92,167.22,0H96.85L118.6,66.92ZM96.85,0H26.49L4.75,66.92H75.11ZM4.75,66.92Zm0,0h0A96.85,96.85,0,0,0,39.93,175.2l21.74-66.92Zm184.21,0h0L132,108.28l21.74,66.92h0A96.85,96.85,0,0,0,189,66.92ZM39.93,175.2h0l56.93,41.36,56.92-41.36L96.85,133.84Z"/></Auth0SVG>
          </LogoLink>
        }
        { isAuthenticated() &&
          <LogoLink
            href="#logout"
            onClick={e => {
              logout()
              e.preventDefault()
            }}
          >
            <Auth0SVG id="artwork" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 193.71 216.56"><title>auth0-logo-white</title><path d="M189,66.92,167.22,0H96.85L118.6,66.92ZM96.85,0H26.49L4.75,66.92H75.11ZM4.75,66.92Zm0,0h0A96.85,96.85,0,0,0,39.93,175.2l21.74-66.92Zm184.21,0h0L132,108.28l21.74,66.92h0A96.85,96.85,0,0,0,189,66.92ZM39.93,175.2h0l56.93,41.36,56.92-41.36L96.85,133.84Z"/></Auth0SVG>
          </LogoLink>
        }
      </MenuFooter>
    </MenuWrapper>
  )
}

export default MainMenu
