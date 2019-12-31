import React from 'react'
import { Link } from "gatsby"
import styled from 'styled-components'
import { rgba } from 'polished'

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
  font-size: ${props => props.theme.fonts.menu.links.size};
  font-weight: ${props => props.theme.fonts.menu.links.weight};
  margin: .25em 0;
  padding: .25em ${props => props.theme.wrapper.paddingX};
  text-decoration: none;
  width: 100%;
  &.active,
  &:hover {
    color: ${props => props.theme.colors.light};
    background-color: ${props => rgba(props.theme.colors.highlight,.25)};
  }
`

const MainMenu = () => {
  return (
    <MenuWrapper>
      <MenuLink
        to="/"
        activeClassName="active"
      >
        Home
      </MenuLink>
      <MenuLink
        to="/blog/"
        activeClassName="active"
        partiallyActive={true}
      >
        Blog
      </MenuLink>
    </MenuWrapper>
  )
}

export default MainMenu
