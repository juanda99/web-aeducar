import React from "react"
import Container from '@material-ui/core/Container';
import Header from './Header'
import SidebarMenu from './SidebarMenu'
export default function Layout({ children }) {
  return (
    <div id="outer-container">
      <SidebarMenu />
      <div id="page-wrap">
        <Header />
        <Container maxWidth="md">
          {children}
        </Container>
      </div>
    </div>
  )
}