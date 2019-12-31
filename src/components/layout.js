import React from 'react'
import { ThemeProvider } from 'styled-components'
import styled from 'styled-components'
import theme from '../styles/theme'
import MainMenu from '../components/menu'

const Wrapper = styled.div`
  display: flex;
  flex: 1 0 100%;
  flex-direction: row;
  height: 100vh;
`

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <Wrapper>
        <MainMenu />
        {children}
      </Wrapper>
    </ThemeProvider>
  )
}

export default Layout
