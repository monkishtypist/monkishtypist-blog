import React from 'react'
import { useStaticQuery, graphql, Link } from "gatsby"
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
    color: ${props => props.theme.colors.light};
    background-color: ${props => rgba(props.theme.colors.highlight,.25)};
    text-decoration: none;
  }
`

const LogoLink = styled.a`
  color: ${props => props.theme.colors.highlight};
  margin: .25em 0;
  padding: .25em ${props => props.theme.wrapper.paddingX};
  text-decoration: none;
  width: 100%;
  &.active,
  &:hover {
    color: ${props => props.theme.colors.light};
    background-color: ${props => rgba(props.theme.colors.highlight,.25)};
    text-decoration: none;
  }
`

const LogoLinkImg = styled(Img)`
  width: 22px;
`

const MainMenu = () => {
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
      <MenuLink
        to="/"
        activeClassName="active"
      >
        Home
      </MenuLink>
      {data.allMarkdownRemark.edges.map(({ node }, index) => (
        <MenuLink
          to={`/blog/${node.frontmatter.slug}`}
          activeClassName="active"
          partiallyActive={true}
        >
          Latest
        </MenuLink>
      ))}
      <MenuLink
        to="/services"
        activeClassName="active"
      >
        Services
      </MenuLink>
      <LogoLink href="https://github.com/monkishtypist" target="_blank">
        <LogoLinkImg fluid={data.navImageGitHub.childImageSharp.fluid} />
      </LogoLink>
    </MenuWrapper>
  )
}

export default MainMenu
